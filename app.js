// DSA Progress Tracker - Main Application Logic
// Modular JavaScript for better maintainability and scalability

// ===== State Management =====
const StateManager = {
  STORAGE_KEY: 'dsa-progress-v2',
  progress: {},
  
  load() {
    const saved = localStorage.getItem(this.STORAGE_KEY);
    if (saved) {
      try {
        this.progress = JSON.parse(saved);
      } catch (e) {
        this.progress = {};
      }
    }
  },
  
  save() {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.progress));
  },
  
  get(key) {
    return this.progress[key];
  },
  
  set(key, value) {
    this.progress[key] = value;
    this.save();
  },
  
  toggle(key) {
    this.progress[key] = !this.progress[key];
    this.save();
    return this.progress[key];
  },
  
  reset() {
    this.progress = {};
    this.save();
  }
};

// ===== Utility Functions =====
const Utils = {
  getProblemId(sectionId, subsectionIndex, problemIndex) {
    return `${sectionId}-${subsectionIndex}-${problemIndex}`;
  },
  
  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  },
  
  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
};

// ===== Statistics Calculator =====
const StatsCalculator = {
  calculateOverall() {
    let totalProblems = 0;
    let completedProblems = 0;
    let easyTotal = 0, easyCompleted = 0;
    let mediumTotal = 0, mediumCompleted = 0;
    let hardTotal = 0, hardCompleted = 0;

    dsaData.forEach(section => {
      section.subsections.forEach((subsection, subsectionIndex) => {
        subsection.problems.forEach((problem, problemIndex) => {
          totalProblems++;
          const problemId = Utils.getProblemId(section.id, subsectionIndex, problemIndex);
          const isCompleted = StateManager.get(problemId) || false;

          if (isCompleted) completedProblems++;

          if (problem.difficulty === 'easy') {
            easyTotal++;
            if (isCompleted) easyCompleted++;
          } else if (problem.difficulty === 'medium') {
            mediumTotal++;
            if (isCompleted) mediumCompleted++;
          } else if (problem.difficulty === 'hard') {
            hardTotal++;
            if (isCompleted) hardCompleted++;
          }
        });
      });
    });

    return {
      total: totalProblems,
      completed: completedProblems,
      percent: totalProblems > 0 ? Math.round((completedProblems / totalProblems) * 100) : 0,
      easy: { total: easyTotal, completed: easyCompleted },
      medium: { total: mediumTotal, completed: mediumCompleted },
      hard: { total: hardTotal, completed: hardCompleted }
    };
  },
  
  calculateSection(section) {
    let total = 0;
    let completed = 0;

    section.subsections.forEach((subsection, subsectionIndex) => {
      subsection.problems.forEach((problem, problemIndex) => {
        total++;
        const problemId = Utils.getProblemId(section.id, subsectionIndex, problemIndex);
        if (StateManager.get(problemId)) completed++;
      });
    });

    return { total, completed, percent: total > 0 ? (completed / total * 100).toFixed(0) : 0 };
  },
  
  calculateSubsection(sectionId, subsection, subsectionIndex) {
    let total = subsection.problems.length;
    let completed = 0;

    subsection.problems.forEach((problem, problemIndex) => {
      const problemId = Utils.getProblemId(sectionId, subsectionIndex, problemIndex);
      if (StateManager.get(problemId)) completed++;
    });

    return { total, completed, percent: total > 0 ? (completed / total * 100).toFixed(0) : 0 };
  }
};

// ===== UI Renderer =====
const Renderer = {
  renderSections() {
    const container = document.getElementById('sectionsContainer');
    if (!container) return;
    
    container.innerHTML = '';
    dsaData.forEach(section => {
      container.appendChild(this.createSectionElement(section));
    });
  },
  
  createSectionElement(section) {
    const stats = StatsCalculator.calculateSection(section);
    
    const sectionEl = document.createElement('div');
    sectionEl.className = 'section';
    sectionEl.dataset.sectionId = section.id;

    const header = document.createElement('div');
    header.className = 'section-header';
    header.innerHTML = `
      <div class="section-title">
        <div class="expand-icon">▶</div>
        <div class="section-name">${section.id}. ${Utils.escapeHtml(section.name)}</div>
      </div>
      <div class="section-progress-bar">
        <div class="section-progress-fill" style="width: ${stats.percent}%"></div>
      </div>
      <div class="section-count">${stats.completed} / ${stats.total}</div>
    `;

    const content = document.createElement('div');
    content.className = 'section-content';

    section.subsections.forEach((subsection, subsectionIndex) => {
      content.appendChild(this.createSubsectionElement(section.id, subsection, subsectionIndex));
    });

    sectionEl.appendChild(header);
    sectionEl.appendChild(content);

    header.addEventListener('click', () => sectionEl.classList.toggle('expanded'));

    return sectionEl;
  },
  
  createSubsectionElement(sectionId, subsection, subsectionIndex) {
    const stats = StatsCalculator.calculateSubsection(sectionId, subsection, subsectionIndex);
    
    const subsectionEl = document.createElement('div');
    subsectionEl.className = 'subsection';

    const header = document.createElement('div');
    header.className = 'subsection-header';
    header.innerHTML = `
      <div class="subsection-title">
        <div class="expand-icon">▶</div>
        <div class="subsection-name">${Utils.escapeHtml(subsection.name)}</div>
      </div>
      <div class="subsection-progress-bar">
        <div class="subsection-progress-fill" style="width: ${stats.percent}%"></div>
      </div>
      <div class="subsection-count">${stats.completed} / ${stats.total}</div>
    `;

    const content = document.createElement('div');
    content.className = 'subsection-content';

    const table = document.createElement('div');
    table.className = 'problems-table';

    const headerRow = document.createElement('div');
    headerRow.className = 'problem-header-row';
    headerRow.innerHTML = `
      <div class="problem-header-cell">Status</div>
      <div class="problem-header-cell">Problem</div>
      <div class="problem-header-cell">Note</div>
      <div class="problem-header-cell">Revision</div>
      <div class="problem-header-cell">Difficulty</div>
    `;
    table.appendChild(headerRow);

    subsection.problems.forEach((problem, problemIndex) => {
      table.appendChild(this.createProblemRow(sectionId, subsectionIndex, problem, problemIndex));
    });

    content.appendChild(table);
    subsectionEl.appendChild(header);
    subsectionEl.appendChild(content);

    header.addEventListener('click', () => subsectionEl.classList.toggle('expanded'));

    return subsectionEl;
  },
  
  createProblemRow(sectionId, subsectionIndex, problem, problemIndex) {
    const problemId = Utils.getProblemId(sectionId, subsectionIndex, problemIndex);
    const isCompleted = StateManager.get(problemId) || false;
    const note = StateManager.get(problemId + '-note') || '';
    const isStarred = StateManager.get(problemId + '-star') || false;

    const row = document.createElement('div');
    row.className = 'problem-row' + (isCompleted ? ' completed' : '');
    row.dataset.problemId = problemId;
    row.innerHTML = `
      <div class="problem-status">
        <div class="status-checkbox ${isCompleted ? 'checked' : ''}" data-problem-id="${problemId}"></div>
      </div>
      <div class="problem-name">${Utils.escapeHtml(problem.name)}</div>
      <div class="problem-note">
        <button class="note-btn ${note ? 'has-note' : ''}" data-problem-id="${problemId}" title="${Utils.escapeHtml(note) || 'Add note'}">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
          </svg>
        </button>
      </div>
      <div class="problem-revision">
        <button class="star-btn ${isStarred ? 'starred' : ''}" data-problem-id="${problemId}">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </button>
      </div>
      <div class="problem-difficulty ${problem.difficulty}">${problem.difficulty.charAt(0).toUpperCase() + problem.difficulty.slice(1)}</div>
    `;

    return row;
  },
  
  updateStats() {
    const stats = StatsCalculator.calculateOverall();
    
    // Update overall progress
    const completedEl = document.getElementById('completedProblems');
    const totalEl = document.getElementById('totalProblems');
    const percentEl = document.getElementById('progressPercent');
    
    if (completedEl) completedEl.textContent = stats.completed;
    if (totalEl) totalEl.textContent = stats.total;
    if (percentEl) percentEl.textContent = stats.percent + '%';

    // Update progress circle
    const circumference = 2 * Math.PI * 36;
    const offset = circumference - (stats.percent / 100) * circumference;
    const circle = document.getElementById('progressCircle');
    if (circle) circle.style.strokeDashoffset = offset;

    // Update difficulty stats
    this.updateDifficultyStats(stats);
    this.updateSidebar(stats);
    this.updateSectionProgressBars();
  },
  
  updateDifficultyStats(stats) {
    const elements = {
      easyCompleted: stats.easy.completed,
      easyTotal: stats.easy.total,
      mediumCompleted: stats.medium.completed,
      mediumTotal: stats.medium.total,
      hardCompleted: stats.hard.completed,
      hardTotal: stats.hard.total
    };
    
    Object.entries(elements).forEach(([id, value]) => {
      const el = document.getElementById(id);
      if (el) el.textContent = value;
    });
  },
  
  updateSidebar(stats) {
    const elements = {
      sidebarProgressNumber: stats.completed,
      sidebarProgressTotal: stats.total,
      sidebarEasyCompleted: stats.easy.completed,
      sidebarEasyTotal: stats.easy.total,
      sidebarMediumCompleted: stats.medium.completed,
      sidebarMediumTotal: stats.medium.total,
      sidebarHardCompleted: stats.hard.completed,
      sidebarHardTotal: stats.hard.total
    };
    
    Object.entries(elements).forEach(([id, value]) => {
      const el = document.getElementById(id);
      if (el) el.textContent = value;
    });

    // Update sidebar progress circle
    const sidebarCircumference = 2 * Math.PI * 52;
    const sidebarOffset = sidebarCircumference - (stats.percent / 100) * sidebarCircumference;
    const sidebarCircle = document.getElementById('sidebarProgressCircle');
    if (sidebarCircle) sidebarCircle.style.strokeDashoffset = sidebarOffset;
  },
  
  updateSectionProgressBars() {
    dsaData.forEach(section => {
      const sectionStats = StatsCalculator.calculateSection(section);
      const sectionEl = document.querySelector(`[data-section-id="${section.id}"]`);
      
      if (sectionEl) {
        const progressBar = sectionEl.querySelector('.section-progress-fill');
        const count = sectionEl.querySelector('.section-count');
        
        if (progressBar) progressBar.style.width = sectionStats.percent + '%';
        if (count) count.textContent = `${sectionStats.completed} / ${sectionStats.total}`;

        // Update subsection progress bars
        section.subsections.forEach((subsection, subsectionIndex) => {
          const subStats = StatsCalculator.calculateSubsection(section.id, subsection, subsectionIndex);
          const subsectionEls = sectionEl.querySelectorAll('.subsection');
          const subsectionEl = subsectionEls[subsectionIndex];
          
          if (subsectionEl) {
            const subProgressBar = subsectionEl.querySelector('.subsection-progress-fill');
            const subCount = subsectionEl.querySelector('.subsection-count');
            
            if (subProgressBar) subProgressBar.style.width = subStats.percent + '%';
            if (subCount) subCount.textContent = `${subStats.completed} / ${subStats.total}`;
          }
        });
      }
    });
  }
};

// ===== Problem Actions =====
const ProblemActions = {
  toggle(problemId) {
    const newState = StateManager.toggle(problemId);
    
    const checkbox = document.querySelector(`.status-checkbox[data-problem-id="${problemId}"]`);
    if (!checkbox) return;
    
    const row = checkbox.closest('.problem-row');
    
    if (newState) {
      checkbox.classList.add('checked');
      row.classList.add('completed');
      CalendarFeature.markTodayActivity();
    } else {
      checkbox.classList.remove('checked');
      row.classList.remove('completed');
    }
    
    Renderer.updateStats();
    FilterManager.apply();
  },
  
  toggleStar(problemId) {
    const key = problemId + '-star';
    const newState = StateManager.toggle(key);
    
    const btn = document.querySelector(`.star-btn[data-problem-id="${problemId}"]`);
    if (btn) {
      btn.classList.toggle('starred', newState);
    }
  },
  
  editNote(problemId) {
    const key = problemId + '-note';
    const currentNote = StateManager.get(key) || '';
    
    const newNote = prompt('Add a note for this problem:', currentNote);
    
    if (newNote !== null) {
      const btn = document.querySelector(`.note-btn[data-problem-id="${problemId}"]`);
      
      if (newNote.trim()) {
        StateManager.set(key, newNote.trim());
        if (btn) {
          btn.classList.add('has-note');
          btn.title = newNote.trim();
        }
      } else {
        StateManager.set(key, '');
        if (btn) {
          btn.classList.remove('has-note');
          btn.title = 'Add note';
        }
      }
    }
  }
};

// ===== Filter Manager =====
const FilterManager = {
  currentDifficulty: 'all',
  currentStatus: 'all',
  
  setDifficulty(difficulty) {
    this.currentDifficulty = difficulty;
    this.updateButtonText('filterDifficulty', difficulty === 'all' ? 'Difficulty' : difficulty.charAt(0).toUpperCase() + difficulty.slice(1));
    this.updateActiveItem('difficultyMenu', 'data-difficulty', difficulty);
    this.apply();
  },
  
  setStatus(status) {
    this.currentStatus = status;
    const text = status === 'all' ? 'All problems' : status === 'completed' ? 'Completed' : 'Not Completed';
    this.updateButtonText('filterAllProblems', text);
    this.updateActiveItem('allProblemsMenu', 'data-filter', status);
    this.apply();
  },
  
  updateButtonText(btnId, text) {
    const btn = document.getElementById(btnId);
    if (btn) {
      const span = btn.querySelector('span:first-child');
      if (span) span.textContent = text;
    }
  },
  
  updateActiveItem(menuId, dataAttr, value) {
    document.querySelectorAll(`#${menuId} .dropdown-item`).forEach(item => {
      item.classList.toggle('active', item.getAttribute(dataAttr) === value);
    });
  },
  
  apply() {
    document.querySelectorAll('.problem-row').forEach(row => {
      const difficulty = row.querySelector('.problem-difficulty');
      const checkbox = row.querySelector('.status-checkbox');
      
      let showByDifficulty = true;
      let showByStatus = true;

      if (difficulty && this.currentDifficulty !== 'all') {
        showByDifficulty = difficulty.textContent.toLowerCase() === this.currentDifficulty;
      }

      if (checkbox) {
        const isCompleted = checkbox.classList.contains('checked');
        if (this.currentStatus === 'completed') {
          showByStatus = isCompleted;
        } else if (this.currentStatus === 'not-completed') {
          showByStatus = !isCompleted;
        }
      }

      row.style.display = (showByDifficulty && showByStatus) ? '' : 'none';
    });

    if (this.currentDifficulty !== 'all' || this.currentStatus !== 'all') {
      document.querySelectorAll('.section').forEach(el => el.classList.add('expanded'));
      document.querySelectorAll('.subsection').forEach(el => el.classList.add('expanded'));
    }
  }
};

// ===== Search Manager =====
const SearchManager = {
  search: Utils.debounce(function(query) {
    query = query.toLowerCase().trim();
    
    document.querySelectorAll('.problem-row').forEach(row => {
      const problemName = row.querySelector('.problem-name').textContent.toLowerCase();
      row.style.display = (query === '' || problemName.includes(query)) ? '' : 'none';
    });

    if (query) {
      document.querySelectorAll('.section').forEach(el => el.classList.add('expanded'));
      document.querySelectorAll('.subsection').forEach(el => el.classList.add('expanded'));
    }
  }, 200)
};

// ===== Calendar Feature =====
const CalendarFeature = {
  activityCalendar: {},
  
  init() {
    this.activityCalendar = JSON.parse(localStorage.getItem('dsa-calendar') || '{}');
    this.render();
  },
  
  render() {
    const grid = document.getElementById('calendarGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    
    days.forEach(day => {
      const header = document.createElement('div');
      header.className = 'calendar-day header';
      header.textContent = day;
      grid.appendChild(header);
    });
    
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    for (let i = 0; i < firstDay; i++) {
      const empty = document.createElement('div');
      empty.className = 'calendar-day';
      empty.style.opacity = '0.3';
      grid.appendChild(empty);
    }
    
    for (let day = 1; day <= daysInMonth; day++) {
      const dayEl = document.createElement('div');
      dayEl.className = 'calendar-day';
      dayEl.textContent = day;
      
      const dateKey = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      if (this.activityCalendar[dateKey] && this.activityCalendar[dateKey].active) {
        dayEl.classList.add('active');
        dayEl.title = `${this.activityCalendar[dateKey].problemsSolved || 0} problems solved`;
      }
      
      if (day === today.getDate()) {
        dayEl.style.border = '2px solid var(--accent)';
      }
      
      dayEl.dataset.date = dateKey;
      grid.appendChild(dayEl);
    }
    
    this.updateStats();
  },
  
  updateStats() {
    const today = new Date();
    const thisMonth = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}`;
    
    let activeDaysThisMonth = 0;
    let streak = 0;
    let currentDate = new Date(today);
    
    Object.keys(this.activityCalendar).forEach(key => {
      if (key.startsWith(thisMonth) && this.activityCalendar[key].active) {
        activeDaysThisMonth++;
      }
    });
    
    while (streak < 365) {
      const dateKey = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')}`;
      if (this.activityCalendar[dateKey] && this.activityCalendar[dateKey].active) {
        streak++;
        currentDate.setDate(currentDate.getDate() - 1);
      } else {
        break;
      }
    }
    
    const streakEl = document.getElementById('currentStreak');
    const monthlyEl = document.getElementById('monthlyTotal');
    if (streakEl) streakEl.textContent = streak;
    if (monthlyEl) monthlyEl.textContent = activeDaysThisMonth;
  },
  
  markTodayActivity() {
    const today = new Date();
    const dateKey = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
    
    if (!this.activityCalendar[dateKey]) {
      this.activityCalendar[dateKey] = { active: false, problemsSolved: 0 };
    }
    
    this.activityCalendar[dateKey].active = true;
    this.activityCalendar[dateKey].problemsSolved = (this.activityCalendar[dateKey].problemsSolved || 0) + 1;
    
    localStorage.setItem('dsa-calendar', JSON.stringify(this.activityCalendar));
    
    this.updateStats();
    
    const dayElement = document.querySelector(`[data-date="${dateKey}"]`);
    if (dayElement) {
      dayElement.classList.add('active');
      dayElement.title = `${this.activityCalendar[dateKey].problemsSolved} problems solved`;
    }
  }
};

// ===== Session Feature =====
const SessionFeature = {
  sessionData: {},
  timer: null,
  seconds: 0,
  running: false,
  
  init() {
    this.sessionData = JSON.parse(localStorage.getItem('dsa-sessions') || '{}');
    this.render();
    this.attachEvents();
  },
  
  attachEvents() {
    const startBtn = document.getElementById('sessionStartBtn');
    if (!startBtn) return;
    
    startBtn.addEventListener('click', () => this.toggleTimer());
  },
  
  toggleTimer() {
    const startBtn = document.getElementById('sessionStartBtn');
    const timerDisplay = document.getElementById('sessionTimer');
    
    if (!this.running) {
      this.running = true;
      startBtn.textContent = 'Stop';
      startBtn.classList.add('active');
      
      this.timer = setInterval(() => {
        this.seconds++;
        const mins = Math.floor(this.seconds / 60);
        const secs = this.seconds % 60;
        timerDisplay.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
      }, 1000);
    } else {
      clearInterval(this.timer);
      this.running = false;
      startBtn.textContent = 'Start';
      startBtn.classList.remove('active');
      
      if (this.seconds >= 60) {
        const minutes = Math.floor(this.seconds / 60);
        const topic = prompt('What topic did you study?', 'Arrays') || 'General';
        const notes = prompt('Any notes? (optional)', '') || '';
        this.addSession(topic, minutes, notes);
      }
      
      this.seconds = 0;
      timerDisplay.textContent = '00:00';
    }
  },
  
  addSession(topic, duration, notes) {
    const today = new Date();
    const dateKey = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
    
    if (!this.sessionData[dateKey]) {
      this.sessionData[dateKey] = [];
    }
    
    this.sessionData[dateKey].push({
      id: Date.now(),
      topic,
      duration,
      notes,
      timestamp: new Date().toISOString()
    });
    
    localStorage.setItem('dsa-sessions', JSON.stringify(this.sessionData));
    this.render();
  },
  
  render() {
    const today = new Date();
    const dateKey = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
    
    const todaySessions = this.sessionData[dateKey] || [];
    const totalMinutes = todaySessions.reduce((sum, s) => sum + s.duration, 0);
    
    const sessionsEl = document.getElementById('todaySessions');
    const minutesEl = document.getElementById('totalMinutes');
    
    if (sessionsEl) sessionsEl.textContent = todaySessions.length;
    if (minutesEl) minutesEl.textContent = totalMinutes;
  }
};

// ===== Planner Feature =====
const PlannerFeature = {
  tasks: [],
  
  init() {
    const lastDate = localStorage.getItem('dsa-planner-date');
    const today = new Date().toDateString();
    
    if (lastDate !== today) {
      this.tasks = [];
      localStorage.setItem('dsa-daily-tasks', '[]');
      localStorage.setItem('dsa-planner-date', today);
    } else {
      this.tasks = JSON.parse(localStorage.getItem('dsa-daily-tasks') || '[]');
    }
    
    this.render();
    this.attachEvents();
  },
  
  attachEvents() {
    const addBtn = document.getElementById('addTaskBtn');
    if (!addBtn) return;
    
    addBtn.addEventListener('click', () => this.addTask());
  },
  
  addTask() {
    const taskText = prompt('Enter your task:\n\nExamples:\n• Solve 3 Array problems\n• Revise Binary Search\n• Complete DP section');
    
    if (taskText && taskText.trim()) {
      const priorityInput = prompt('Priority? (high/medium/low)', 'medium');
      const priority = ['high', 'medium', 'low'].includes(priorityInput) ? priorityInput : 'medium';
      
      this.tasks.push({
        id: Date.now(),
        text: taskText.trim(),
        priority,
        completed: false,
        createdAt: new Date().toISOString()
      });
      
      this.save();
      this.render();
    }
  },
  
  toggleTask(taskId) {
    const task = this.tasks.find(t => t.id === taskId);
    if (task) {
      task.completed = !task.completed;
      this.save();
      this.render();
    }
  },
  
  deleteTask(taskId) {
    if (confirm('Delete this task?')) {
      this.tasks = this.tasks.filter(t => t.id !== taskId);
      this.save();
      this.render();
    }
  },
  
  save() {
    localStorage.setItem('dsa-daily-tasks', JSON.stringify(this.tasks));
    localStorage.setItem('dsa-planner-date', new Date().toDateString());
  },
  
  render() {
    const tasksList = document.getElementById('tasksList');
    const tasksCompleted = document.getElementById('tasksCompleted');
    
    if (!tasksList) return;
    
    tasksList.innerHTML = '';
    
    if (this.tasks.length === 0) {
      tasksList.innerHTML = `
        <p style="text-align: center; color: var(--text-secondary); font-size: 12px; padding: 20px;">
          No tasks yet. Add your first goal!<br>
          <span style="font-size: 11px; margin-top: 8px; display: block;">
            Tip: Set realistic daily targets
          </span>
        </p>`;
      if (tasksCompleted) tasksCompleted.textContent = '0/0';
      return;
    }
    
    const completed = this.tasks.filter(t => t.completed).length;
    const total = this.tasks.length;
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
    
    if (tasksCompleted) tasksCompleted.textContent = `${completed}/${total} (${percentage}%)`;
    
    const sortedTasks = [...this.tasks].sort((a, b) => {
      if (a.completed !== b.completed) return a.completed ? 1 : -1;
      const priorityOrder = { high: 0, medium: 1, low: 2 };
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    });
    
    sortedTasks.forEach(task => {
      const taskEl = document.createElement('div');
      taskEl.className = 'planner-task' + (task.completed ? ' completed' : '');
      taskEl.dataset.taskId = task.id;
      taskEl.innerHTML = `
        <div class="planner-checkbox"></div>
        <div class="planner-task-text">${Utils.escapeHtml(task.text)}</div>
        <div class="planner-priority ${task.priority}">${task.priority[0].toUpperCase()}</div>
      `;
      
      taskEl.querySelector('.planner-checkbox').addEventListener('click', (e) => {
        e.stopPropagation();
        this.toggleTask(task.id);
      });
      
      taskEl.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        this.deleteTask(task.id);
      });
      
      tasksList.appendChild(taskEl);
    });
  }
};

// ===== Export/Import Manager =====
const DataManager = {
  export() {
    const exportData = {
      progress: StateManager.progress,
      calendar: CalendarFeature.activityCalendar,
      sessions: SessionFeature.sessionData,
      tasks: PlannerFeature.tasks,
      exportedAt: new Date().toISOString(),
      version: '2.0'
    };
    
    const dataStr = JSON.stringify(exportData, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `dsa-tracker-full-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    
    alert('✅ Full backup exported!\n\nIncludes:\n• Problem progress\n• Calendar data\n• Study sessions\n• Daily tasks');
  },
  
  import(file) {
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const importedData = JSON.parse(event.target.result);
        
        if (importedData.version === '2.0') {
          StateManager.progress = importedData.progress || {};
          CalendarFeature.activityCalendar = importedData.calendar || {};
          SessionFeature.sessionData = importedData.sessions || {};
          PlannerFeature.tasks = importedData.tasks || [];
          
          localStorage.setItem('dsa-calendar', JSON.stringify(CalendarFeature.activityCalendar));
          localStorage.setItem('dsa-sessions', JSON.stringify(SessionFeature.sessionData));
          localStorage.setItem('dsa-daily-tasks', JSON.stringify(PlannerFeature.tasks));
        } else {
          StateManager.progress = importedData;
        }
        
        StateManager.save();
        Renderer.renderSections();
        Renderer.updateStats();
        CalendarFeature.render();
        SessionFeature.render();
        PlannerFeature.render();
        
        alert('✅ Data imported successfully!');
      } catch (error) {
        alert('❌ Error importing file.\n\nPlease check the file format.');
        console.error('Import error:', error);
      }
    };
    reader.readAsText(file);
  },
  
  reset() {
    if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
      StateManager.reset();
      Renderer.renderSections();
      Renderer.updateStats();
    }
  }
};

// ===== Event Handlers =====
const EventHandlers = {
  init() {
    // Global click handler for delegation
    document.addEventListener('click', (e) => {
      // Status checkbox
      if (e.target.classList.contains('status-checkbox')) {
        ProblemActions.toggle(e.target.dataset.problemId);
        return;
      }
      
      // Problem name click
      if (e.target.classList.contains('problem-name')) {
        const row = e.target.closest('.problem-row');
        const checkbox = row.querySelector('.status-checkbox');
        ProblemActions.toggle(checkbox.dataset.problemId);
        return;
      }
      
      // Star button
      if (e.target.closest('.star-btn')) {
        ProblemActions.toggleStar(e.target.closest('.star-btn').dataset.problemId);
        return;
      }
      
      // Note button
      if (e.target.closest('.note-btn')) {
        ProblemActions.editNote(e.target.closest('.note-btn').dataset.problemId);
        return;
      }
      
      // Close dropdowns when clicking outside
      if (!e.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown-menu').forEach(menu => menu.classList.remove('show'));
      }
    });
    
    // Expand/Collapse buttons
    const expandBtn = document.getElementById('expandAll');
    const collapseBtn = document.getElementById('collapseAll');
    
    if (expandBtn) {
      expandBtn.addEventListener('click', () => {
        document.querySelectorAll('.section, .subsection').forEach(el => el.classList.add('expanded'));
      });
    }
    
    if (collapseBtn) {
      collapseBtn.addEventListener('click', () => {
        document.querySelectorAll('.section, .subsection').forEach(el => el.classList.remove('expanded'));
      });
    }
    
    // Export/Import/Reset
    const exportBtn = document.getElementById('exportBtn');
    const importBtn = document.getElementById('importBtn');
    const importFile = document.getElementById('importFile');
    const resetBtn = document.getElementById('resetBtn');
    
    if (exportBtn) exportBtn.addEventListener('click', () => DataManager.export());
    if (importBtn) importBtn.addEventListener('click', () => importFile?.click());
    if (importFile) importFile.addEventListener('change', (e) => {
      if (e.target.files[0]) DataManager.import(e.target.files[0]);
      e.target.value = '';
    });
    if (resetBtn) resetBtn.addEventListener('click', () => DataManager.reset());
    
    // Search
    const searchBox = document.getElementById('searchBox');
    if (searchBox) {
      searchBox.addEventListener('input', (e) => SearchManager.search(e.target.value));
    }
    
    // Filter dropdowns
    this.initFilterDropdowns();
    
    // Random problem
    const randomBtn = document.getElementById('randomProblem');
    if (randomBtn) {
      randomBtn.addEventListener('click', () => this.selectRandomProblem());
    }
    
    // Feature toggles
    this.initFeatureToggles();
  },
  
  initFilterDropdowns() {
    const difficultyBtn = document.getElementById('filterDifficulty');
    const statusBtn = document.getElementById('filterAllProblems');
    const difficultyMenu = document.getElementById('difficultyMenu');
    const statusMenu = document.getElementById('allProblemsMenu');
    
    if (difficultyBtn && difficultyMenu) {
      difficultyBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        statusMenu?.classList.remove('show');
        difficultyMenu.classList.toggle('show');
      });
      
      difficultyMenu.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', (e) => {
          e.stopPropagation();
          FilterManager.setDifficulty(e.target.dataset.difficulty);
          difficultyMenu.classList.remove('show');
        });
      });
    }
    
    if (statusBtn && statusMenu) {
      statusBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        difficultyMenu?.classList.remove('show');
        statusMenu.classList.toggle('show');
      });
      
      statusMenu.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', (e) => {
          e.stopPropagation();
          FilterManager.setStatus(e.target.dataset.filter);
          statusMenu.classList.remove('show');
        });
      });
    }
  },
  
  initFeatureToggles() {
    const toggles = [
      { toggle: 'calendarToggle', content: 'calendarContent' },
      { toggle: 'sessionsToggle', content: 'sessionsContent' },
      { toggle: 'plannerToggle', content: 'plannerContent' }
    ];
    
    toggles.forEach(({ toggle, content }) => {
      const toggleEl = document.getElementById(toggle);
      const contentEl = document.getElementById(content);
      
      if (toggleEl && contentEl) {
        toggleEl.addEventListener('click', () => {
          const isActive = toggleEl.classList.contains('active');
          
          document.querySelectorAll('.locked-section').forEach(s => s.classList.remove('active'));
          document.querySelectorAll('.feature-content').forEach(c => c.classList.remove('show'));
          
          if (!isActive) {
            toggleEl.classList.add('active');
            contentEl.classList.add('show');
          }
        });
      }
    });
  },
  
  selectRandomProblem() {
    const allProblems = Array.from(document.querySelectorAll('.problem-row'));
    if (allProblems.length === 0) return;
    
    const randomIndex = Math.floor(Math.random() * allProblems.length);
    const randomProblem = allProblems[randomIndex];
    
    document.querySelectorAll('.section, .subsection').forEach(el => el.classList.remove('expanded'));
    
    const subsection = randomProblem.closest('.subsection');
    const section = randomProblem.closest('.section');
    
    if (section) section.classList.add('expanded');
    if (subsection) subsection.classList.add('expanded');
    
    randomProblem.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    randomProblem.style.backgroundColor = 'rgba(255, 161, 22, 0.2)';
    setTimeout(() => {
      randomProblem.style.backgroundColor = '';
    }, 2000);
  }
};

// ===== Application Initialization =====
function initApp() {
  StateManager.load();
  Renderer.renderSections();
  Renderer.updateStats();
  EventHandlers.init();
  CalendarFeature.init();
  SessionFeature.init();
  PlannerFeature.init();
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}