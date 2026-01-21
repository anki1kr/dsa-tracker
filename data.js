// DSA Data - Love Babbar Sheet (455+ Problems)
// This file contains all 18 sections with their subsections and problems

const dsaData = [
  {
    id: 1,
    name: "Learn the basics",
    subsections: [
      {
        name: "Things to Know in C++/Java/Python or any language",
        problems: [
          { name: "User Input / Output", difficulty: "easy" },
          { name: "Data Types", difficulty: "easy" },
          { name: "If Else statements", difficulty: "easy" },
          { name: "Switch Statement", difficulty: "easy" },
          { name: "What are arrays, strings?", difficulty: "easy" },
          { name: "For loops", difficulty: "easy" },
          { name: "While loops", difficulty: "easy" },
          { name: "Functions (Pass by Reference and Value)", difficulty: "easy" },
          { name: "Time Complexity", difficulty: "easy" }
        ]
      },
      {
        name: "Build-up Logical Thinking",
        problems: [
          { name: "Pattern-1: Rectangular Star Pattern", difficulty: "easy" },
          { name: "Pattern-2: Right-Angled Triangle Pattern", difficulty: "easy" },
          { name: "Pattern-3: Right-Angled Number Pyramid", difficulty: "easy" },
          { name: "Pattern-4: Right-Angled Number Pyramid - II", difficulty: "easy" },
          { name: "Pattern-5: Inverted Right Pyramid", difficulty: "easy" },
          { name: "Pattern-6: Inverted Numbered Right Pyramid", difficulty: "easy" },
          { name: "Pattern-7: Star Pyramid", difficulty: "easy" },
          { name: "Pattern-8: Inverted Star Pyramid", difficulty: "easy" },
          { name: "Pattern-9: Diamond Star Pattern", difficulty: "easy" },
          { name: "Pattern-10: Half Diamond Star Pattern", difficulty: "easy" },
          { name: "Pattern-11: Binary Number Triangle Pattern", difficulty: "easy" },
          { name: "Pattern-12: Number Crown Pattern", difficulty: "easy" },
          { name: "Pattern-13: Increasing Number Triangle Pattern", difficulty: "easy" },
          { name: "Pattern-14: Increasing Letter Triangle Pattern", difficulty: "easy" },
          { name: "Pattern-15: Reverse Letter Triangle Pattern", difficulty: "easy" },
          { name: "Pattern-16: Alpha-Ramp Pattern", difficulty: "easy" },
          { name: "Pattern-17: Alpha-Hill Pattern", difficulty: "easy" },
          { name: "Pattern-18: Alpha-Triangle Pattern", difficulty: "easy" },
          { name: "Pattern-19: Symmetric-Void Pattern", difficulty: "easy" },
          { name: "Pattern-20: Symmetric-Butterfly Pattern", difficulty: "easy" },
          { name: "Pattern-21: Hollow Rectangle Pattern", difficulty: "easy" },
          { name: "Pattern-22: The Number Pattern", difficulty: "easy" }
        ]
      },
      {
        name: "Learn Basic Hashing",
        problems: [
          { name: "Counting frequencies of array elements", difficulty: "easy" },
          { name: "Find the highest/lowest frequency element", difficulty: "easy" }
        ]
      },
      {
        name: "Learn Basic Recursion",
        problems: [
          { name: "Understand recursion by print something N times", difficulty: "easy" },
          { name: "Print name N times using recursion", difficulty: "easy" },
          { name: "Print 1 to N using recursion", difficulty: "easy" },
          { name: "Print N to 1 using recursion", difficulty: "easy" },
          { name: "Sum of first N numbers", difficulty: "easy" },
          { name: "Factorial of N numbers", difficulty: "easy" },
          { name: "Reverse an array", difficulty: "easy" },
          { name: "Check if a string is palindrome or not", difficulty: "easy" },
          { name: "Fibonacci Number", difficulty: "easy" }
        ]
      }
    ]
  },
  {
    id: 2,
    name: "Learn Important Sorting Techniques",
    subsections: [
      {
        name: "Sorting-I",
        problems: [
          { name: "Selection Sort", difficulty: "easy" },
          { name: "Bubble Sort", difficulty: "easy" },
          { name: "Insertion Sort", difficulty: "easy" }
        ]
      },
      {
        name: "Sorting-II",
        problems: [
          { name: "Merge Sort", difficulty: "medium" },
          { name: "Recursive Bubble Sort", difficulty: "medium" },
          { name: "Recursive Insertion Sort", difficulty: "medium" },
          { name: "Quick Sort", difficulty: "medium" }
        ]
      }
    ]
  },
  {
    id: 3,
    name: "Solve Problems on Arrays",
    subsections: [
      {
        name: "Easy",
        problems: [
          { name: "Largest Element in an Array", difficulty: "easy" },
          { name: "Second Largest Element in an Array without sorting", difficulty: "easy" },
          { name: "Check if the array is sorted", difficulty: "easy" },
          { name: "Remove duplicates from Sorted array", difficulty: "easy" },
          { name: "Left Rotate an array by one place", difficulty: "easy" },
          { name: "Left rotate an array by D places", difficulty: "easy" },
          { name: "Move Zeros to end", difficulty: "easy" },
          { name: "Linear Search", difficulty: "easy" },
          { name: "Union of Two Sorted Arrays", difficulty: "easy" },
          { name: "Find the missing number in an array", difficulty: "easy" },
          { name: "Maximum Consecutive Ones", difficulty: "easy" },
          { name: "Find the number that appears once, and other numbers twice", difficulty: "easy" },
          { name: "Longest subarray with given sum K (positives)", difficulty: "easy" },
          { name: "Longest subarray with sum K (Positives + Negatives)", difficulty: "medium" }
        ]
      },
      {
        name: "Medium",
        problems: [
          { name: "2 Sum Problem", difficulty: "medium" },
          { name: "Sort an array of 0's 1's and 2's", difficulty: "medium" },
          { name: "Majority Element (>n/2 times)", difficulty: "medium" },
          { name: "Kadane's Algorithm, maximum subarray sum", difficulty: "medium" },
          { name: "Print subarray with maximum subarray sum", difficulty: "medium" },
          { name: "Stock Buy and Sell", difficulty: "medium" },
          { name: "Rearrange the array in alternating positive and negative items", difficulty: "medium" },
          { name: "Next Permutation", difficulty: "medium" },
          { name: "Leaders in an Array problem", difficulty: "medium" },
          { name: "Longest Consecutive Sequence in an Array", difficulty: "medium" },
          { name: "Set Matrix Zeros", difficulty: "medium" },
          { name: "Rotate Matrix by 90 degrees", difficulty: "medium" },
          { name: "Print the matrix in spiral manner", difficulty: "medium" },
          { name: "Count subarrays with given sum", difficulty: "medium" }
        ]
      },
      {
        name: "Hard",
        problems: [
          { name: "Pascal's Triangle", difficulty: "hard" },
          { name: "Majority Element (n/3 times)", difficulty: "hard" },
          { name: "3 Sum Problem", difficulty: "hard" },
          { name: "4 Sum Problem", difficulty: "hard" },
          { name: "Number of subarrays with xor as k", difficulty: "hard" },
          { name: "Merge Overlapping Subintervals", difficulty: "hard" },
          { name: "Merge two sorted arrays without extra space", difficulty: "hard" },
          { name: "Find the repeating and missing number", difficulty: "hard" },
          { name: "Count Inversions", difficulty: "hard" },
          { name: "Reverse Pairs", difficulty: "hard" },
          { name: "Maximum Product Subarray", difficulty: "hard" },
          { name: "Count number of subarrays with given xor K", difficulty: "hard" }
        ]
      }
    ]
  },
  {
    id: 4,
    name: "Binary Search",
    subsections: [
      {
        name: "BS on 1D Arrays",
        problems: [
          { name: "Binary Search to find X in sorted array", difficulty: "easy" },
          { name: "Implement Lower Bound", difficulty: "easy" },
          { name: "Implement Upper Bound", difficulty: "easy" },
          { name: "Search Insert Position", difficulty: "easy" },
          { name: "Floor/Ceil in Sorted Array", difficulty: "easy" },
          { name: "Find the first or last occurrence of a given number in a sorted array", difficulty: "easy" },
          { name: "Count occurrences of a number in a sorted array with duplicates", difficulty: "easy" },
          { name: "Search in Rotated Sorted Array I", difficulty: "medium" },
          { name: "Search in Rotated Sorted Array II", difficulty: "medium" },
          { name: "Find minimum in Rotated Sorted Array", difficulty: "medium" },
          { name: "Find out how many times has an array been rotated", difficulty: "medium" },
          { name: "Single element in a Sorted Array", difficulty: "medium" },
          { name: "Find peak element", difficulty: "medium" }
        ]
      },
      {
        name: "BS on Answers",
        problems: [
          { name: "Finding Sqrt of a number using Binary Search", difficulty: "medium" },
          { name: "Find the Nth root of a number using Binary Search", difficulty: "medium" },
          { name: "Koko Eating Bananas", difficulty: "medium" },
          { name: "Minimum days to make M bouquets", difficulty: "medium" },
          { name: "Find the smallest Divisor", difficulty: "medium" },
          { name: "Capacity to Ship Packages within D Days", difficulty: "medium" },
          { name: "Kth Missing Positive number", difficulty: "medium" },
          { name: "Aggressive Cows", difficulty: "hard" },
          { name: "Book Allocation Problem", difficulty: "hard" },
          { name: "Split array - Largest Sum", difficulty: "hard" },
          { name: "Painter's partition", difficulty: "hard" },
          { name: "Minimize Max Distance to Gas Station", difficulty: "hard" },
          { name: "Median of 2 sorted arrays", difficulty: "hard" },
          { name: "Kth element of 2 sorted arrays", difficulty: "hard" }
        ]
      },
      {
        name: "BS on 2D Arrays",
        problems: [
          { name: "Find the row with maximum number of 1's", difficulty: "medium" },
          { name: "Search in a 2D matrix", difficulty: "medium" },
          { name: "Search in a row and column-wise sorted matrix", difficulty: "medium" },
          { name: "Find peak element (2D matrix)", difficulty: "hard" },
          { name: "Matrix Median", difficulty: "hard" }
        ]
      }
    ]
  },
  {
    id: 5,
    name: "Strings",
    subsections: [
      {
        name: "Basic and Easy String Problems",
        problems: [
          { name: "Remove outermost Paranthesis", difficulty: "easy" },
          { name: "Reverse words in a given string / Palindrome Check", difficulty: "easy" },
          { name: "Largest odd number in a string", difficulty: "easy" },
          { name: "Longest Common Prefix", difficulty: "easy" },
          { name: "Isomorphic String", difficulty: "easy" },
          { name: "check whether one string is a rotation of another", difficulty: "easy" },
          { name: "Check if two strings are anagram of each other", difficulty: "easy" }
        ]
      },
      {
        name: "Medium String Problems",
        problems: [
          { name: "Sort Characters by frequency", difficulty: "medium" },
          { name: "Maximum nesting depth of paranthesis", difficulty: "medium" },
          { name: "Roman Number to Integer and vice versa", difficulty: "medium" },
          { name: "Implement Atoi/strstr", difficulty: "medium" },
          { name: "Count With K Different Characters", difficulty: "medium" },
          { name: "Longest Palindromic Substring[do it without DP]", difficulty: "medium" },
          { name: "Sum of Beauty of All Substrings", difficulty: "medium" },
          { name: "Reverse Every Word in A String", difficulty: "medium" }
        ]
      }
    ]
  },
  {
    id: 6,
    name: "Linked List",
    subsections: [
      {
        name: "Learn 1D LinkedList",
        problems: [
          { name: "Introduction to LinkedList", difficulty: "easy" },
          { name: "Inserting a node in LinkedList", difficulty: "easy" },
          { name: "Deleting a node in LinkedList", difficulty: "easy" },
          { name: "Find the length of the linkedlist", difficulty: "easy" },
          { name: "Search an element in the LinkedList", difficulty: "easy" }
        ]
      },
      {
        name: "Learn Doubly LinkedList",
        problems: [
          { name: "Introduction to Doubly LinkedList", difficulty: "easy" },
          { name: "Insert a node in Doubly LinkedList", difficulty: "easy" },
          { name: "Delete a node in Doubly LinkedList", difficulty: "easy" },
          { name: "Reverse a Doubly LinkedList", difficulty: "easy" }
        ]
      },
      {
        name: "Medium Problems of LL",
        problems: [
          { name: "Middle of the LinkedList", difficulty: "medium" },
          { name: "Reverse a LinkedList", difficulty: "medium" },
          { name: "Detect a loop in LL", difficulty: "medium" },
          { name: "Find the starting point of the Loop in LL", difficulty: "medium" },
          { name: "Length of Loop in LL", difficulty: "medium" },
          { name: "Check if LL is palindrome or not", difficulty: "medium" },
          { name: "Segregate odd and even nodes in LL", difficulty: "medium" },
          { name: "Remove Nth node from the back of the LL", difficulty: "medium" },
          { name: "Delete the middle node of the LL", difficulty: "medium" },
          { name: "Sort LL", difficulty: "medium" },
          { name: "Sort a LL of 0's 1's and 2's by changing links", difficulty: "medium" },
          { name: "Find the intersection point of Y LL", difficulty: "medium" },
          { name: "Add 1 to a number represented by LL", difficulty: "medium" },
          { name: "Add two numbers in LL", difficulty: "medium" }
        ]
      },
      {
        name: "Medium Problems of DLL",
        problems: [
          { name: "Delete all occurrences of a key in DLL", difficulty: "medium" },
          { name: "Find pairs with given sum in DLL", difficulty: "medium" },
          { name: "Remove duplicates from sorted DLL", difficulty: "medium" }
        ]
      },
      {
        name: "Hard Problems of LL",
        problems: [
          { name: "Reverse LL in groups of size k", difficulty: "hard" },
          { name: "Rotate a LL", difficulty: "hard" },
          { name: "Flattening of LL", difficulty: "hard" },
          { name: "Clone a Linked List with random and next pointer", difficulty: "hard" }
        ]
      }
    ]
  },
  {
    id: 7,
    name: "Recursion",
    subsections: [
      {
        name: "Get a Strong Hold",
        problems: [
          { name: "Subset Sum", difficulty: "medium" },
          { name: "Subset Sum - II", difficulty: "medium" },
          { name: "Combination Sum", difficulty: "medium" },
          { name: "Combination Sum-II", difficulty: "medium" },
          { name: "Palindrome Partitioning", difficulty: "medium" },
          { name: "Kth Permutation Sequence", difficulty: "hard" }
        ]
      },
      {
        name: "Subsequences Pattern",
        problems: [
          { name: "Print all subsequences", difficulty: "easy" },
          { name: "Count all subsequences with sum K", difficulty: "medium" },
          { name: "Check if there exists a subsequence with sum K", difficulty: "medium" },
          { name: "Generate all binary strings", difficulty: "easy" }
        ]
      },
      {
        name: "Trying out all combos / Hard",
        problems: [
          { name: "N queens Problem", difficulty: "hard" },
          { name: "Sudoku Solver", difficulty: "hard" },
          { name: "M coloring Problem", difficulty: "hard" },
          { name: "Rat in a Maze", difficulty: "hard" },
          { name: "Word Break", difficulty: "hard" }
        ]
      }
    ]
  },
  {
    id: 8,
    name: "Bit Manipulation",
    subsections: [
      {
        name: "Learn Bit Manipulation",
        problems: [
          { name: "Introduction to Bit Manipulation", difficulty: "easy" },
          { name: "Check if the i-th bit is set or not", difficulty: "easy" },
          { name: "Check if a number is odd or not", difficulty: "easy" },
          { name: "Check if a number is power of 2 or not", difficulty: "easy" },
          { name: "Count the number of set bits", difficulty: "easy" },
          { name: "Set/Unset the rightmost unset bit", difficulty: "easy" },
          { name: "Swap two numbers", difficulty: "easy" },
          { name: "Divide two integers without using multiplication, division and mod operator", difficulty: "medium" }
        ]
      },
      {
        name: "Interview Problems",
        problems: [
          { name: "Count number of bits to be flipped to convert A to B", difficulty: "medium" },
          { name: "Find the number that appears odd number of times", difficulty: "medium" },
          { name: "Power Set", difficulty: "medium" },
          { name: "Find xor of numbers from L to R", difficulty: "medium" },
          { name: "Find the two numbers appearing odd number of times", difficulty: "medium" }
        ]
      },
      {
        name: "Advanced Problems",
        problems: [
          { name: "Print the prime factors of a number", difficulty: "medium" },
          { name: "All divisors of a number", difficulty: "easy" },
          { name: "Sieve of Eratosthenes", difficulty: "medium" },
          { name: "Print all prime factors and their powers", difficulty: "hard" },
          { name: "Power(n, x)", difficulty: "medium" }
        ]
      }
    ]
  },
  {
    id: 9,
    name: "Stack and Queues",
    subsections: [
      {
        name: "Learning",
        problems: [
          { name: "Implement Stack using Arrays", difficulty: "easy" },
          { name: "Implement Queue using Arrays", difficulty: "easy" },
          { name: "Implement Stack using Queue", difficulty: "easy" },
          { name: "Implement Queue using Stack", difficulty: "easy" },
          { name: "Check for balanced paranthesis", difficulty: "easy" },
          { name: "Implement Min Stack", difficulty: "medium" }
        ]
      },
      {
        name: "Prefix, Infix, Postfix Problems",
        problems: [
          { name: "Infix to Postfix Conversion", difficulty: "medium" },
          { name: "Prefix to Infix Conversion", difficulty: "medium" },
          { name: "Prefix to Postfix Conversion", difficulty: "medium" },
          { name: "Postfix to Prefix Conversion", difficulty: "medium" },
          { name: "Postfix to Infix Conversion", difficulty: "medium" },
          { name: "Convert Infix to Prefix", difficulty: "medium" }
        ]
      },
      {
        name: "Monotonic Stack/Queue Problems",
        problems: [
          { name: "Next Greater Element", difficulty: "medium" },
          { name: "Next Greater Element - II", difficulty: "medium" },
          { name: "Next Smaller Element", difficulty: "medium" },
          { name: "Number of NGEs to the right", difficulty: "medium" },
          { name: "Trapping Rainwater", difficulty: "hard" },
          { name: "Sum of subarray minimum", difficulty: "hard" },
          { name: "Sum of subarray ranges", difficulty: "medium" },
          { name: "Asteroid Collision", difficulty: "medium" }
        ]
      },
      {
        name: "Implementation Problems",
        problems: [
          { name: "Sliding Window maximum", difficulty: "hard" },
          { name: "Stock span problem", difficulty: "medium" },
          { name: "Find the most competitive subsequence", difficulty: "medium" },
          { name: "Largest rectangle in a histogram", difficulty: "hard" },
          { name: "Maximal Rectangles", difficulty: "hard" },
          { name: "Remove k Digits", difficulty: "medium" },
          { name: "LRU cache", difficulty: "hard" },
          { name: "LFU cache", difficulty: "hard" }
        ]
      }
    ]
  },
  {
    id: 10,
    name: "Sliding Window & Two Pointer Combined Problems",
    subsections: [
      {
        name: "Medium Problems",
        problems: [
          { name: "Longest Substring Without Repeating Characters", difficulty: "medium" },
          { name: "Max Consecutive Ones III", difficulty: "medium" },
          { name: "Fruit into Baskets", difficulty: "medium" },
          { name: "Longest repeating character replacement", difficulty: "medium" },
          { name: "Binary subarrays with sum", difficulty: "medium" },
          { name: "Count number of nice subarrays", difficulty: "medium" },
          { name: "Number of substring containing all three characters", difficulty: "medium" },
          { name: "Maximum points you can obtain from cards", difficulty: "medium" }
        ]
      },
      {
        name: "Hard Problems",
        problems: [
          { name: "Longest substring with at most K distinct characters", difficulty: "hard" },
          { name: "Subarray with k different integers", difficulty: "hard" },
          { name: "Minimum window substring", difficulty: "hard" },
          { name: "Minimum window subsequence", difficulty: "hard" }
        ]
      }
    ]
  },
  {
    id: 11,
    name: "Heaps",
    subsections: [
      {
        name: "Learning",
        problems: [
          { name: "Introduction to Priority Queue", difficulty: "easy" },
          { name: "Min Heap and Max Heap Implementation", difficulty: "medium" },
          { name: "Check if an array represents a min heap or not", difficulty: "easy" },
          { name: "Convert min heap to max heap", difficulty: "medium" }
        ]
      },
      {
        name: "Medium Problems",
        problems: [
          { name: "Kth largest element in an array", difficulty: "medium" },
          { name: "Kth smallest element in an array", difficulty: "medium" },
          { name: "Sort K sorted array", difficulty: "medium" },
          { name: "Merge k sorted arrays", difficulty: "medium" },
          { name: "K most frequent elements", difficulty: "medium" },
          { name: "Replace elements by its rank in the array", difficulty: "medium" },
          { name: "Task Scheduler", difficulty: "medium" },
          { name: "Hands of Straights", difficulty: "medium" }
        ]
      },
      {
        name: "Hard Problems",
        problems: [
          { name: "Design Twitter", difficulty: "hard" },
          { name: "Connect n ropes with minimum cost", difficulty: "medium" },
          { name: "Kth largest element in a stream", difficulty: "medium" },
          { name: "Find median from data stream", difficulty: "hard" },
          { name: "K most frequent elements in an array", difficulty: "medium" }
        ]
      }
    ]
  },
  {
    id: 12,
    name: "Greedy Algorithms",
    subsections: [
      {
        name: "Easy Problems",
        problems: [
          { name: "Assign Cookies", difficulty: "easy" },
          { name: "Lemonade Change", difficulty: "easy" },
          { name: "Valid Parenthesis Checker", difficulty: "easy" }
        ]
      },
      {
        name: "Medium/Hard Problems",
        problems: [
          { name: "N meetings in one room", difficulty: "medium" },
          { name: "Jump Game", difficulty: "medium" },
          { name: "Jump Game - II", difficulty: "medium" },
          { name: "Minimum number of platforms required for a railway", difficulty: "medium" },
          { name: "Job sequencing Problem", difficulty: "hard" },
          { name: "Candy", difficulty: "hard" },
          { name: "Shortest Job First", difficulty: "medium" },
          { name: "Page Faults in LRU", difficulty: "medium" },
          { name: "Insert Interval", difficulty: "medium" },
          { name: "Merge Intervals", difficulty: "medium" },
          { name: "Non-overlapping Intervals", difficulty: "medium" }
        ]
      }
    ]
  },
  {
    id: 13,
    name: "Binary Trees",
    subsections: [
      {
        name: "Traversals",
        problems: [
          { name: "Introduction to Trees", difficulty: "easy" },
          { name: "Binary Tree Representation", difficulty: "easy" },
          { name: "Binary Tree Traversals in Binary Tree", difficulty: "medium" },
          { name: "Preorder Traversal of Binary Tree", difficulty: "medium" },
          { name: "Inorder Traversal of Binary Tree", difficulty: "medium" },
          { name: "Post-order Traversal of Binary Tree", difficulty: "medium" },
          { name: "Level order Traversal", difficulty: "medium" },
          { name: "Iterative Preorder Traversal", difficulty: "medium" },
          { name: "Iterative Inorder Traversal", difficulty: "medium" },
          { name: "Iterative Postorder Traversal using 2 stack", difficulty: "medium" },
          { name: "Iterative Postorder Traversal using 1 stack", difficulty: "hard" },
          { name: "Preorder Inorder Postorder in a single traversal", difficulty: "hard" }
        ]
      },
      {
        name: "Medium Problems",
        problems: [
          { name: "Height of a Binary Tree", difficulty: "easy" },
          { name: "Check if the Binary tree is height-balanced or not", difficulty: "medium" },
          { name: "Diameter of Binary Tree", difficulty: "medium" },
          { name: "Maximum path sum", difficulty: "hard" },
          { name: "Check if two trees are identical or not", difficulty: "easy" },
          { name: "Zig Zag Traversal of Binary Tree", difficulty: "medium" },
          { name: "Boundary Traversal of Binary Tree", difficulty: "medium" },
          { name: "Vertical Order Traversal of Binary Tree", difficulty: "hard" },
          { name: "Top View of Binary Tree", difficulty: "medium" },
          { name: "Bottom View of Binary Tree", difficulty: "medium" },
          { name: "Right/Left View of Binary Tree", difficulty: "medium" },
          { name: "Symmetric Binary Tree", difficulty: "easy" }
        ]
      },
      {
        name: "Hard Problems",
        problems: [
          { name: "Root to node path in Binary Tree", difficulty: "medium" },
          { name: "LCA in Binary Tree", difficulty: "medium" },
          { name: "Maximum width of Binary Tree", difficulty: "medium" },
          { name: "Children Sum Property", difficulty: "medium" },
          { name: "Print all the Nodes at a distance of K in Binary Tree", difficulty: "hard" },
          { name: "Minimum time taken to BURN the Binary Tree from a Node", difficulty: "hard" },
          { name: "Count total Nodes in a COMPLETE Binary Tree", difficulty: "medium" },
          { name: "Requirements needed to construct a Unique Binary Tree", difficulty: "medium" },
          { name: "Construct Binary Tree from inorder and preorder", difficulty: "medium" },
          { name: "Construct Binary Tree from Inorder and Postorder", difficulty: "medium" },
          { name: "Serialize and deserialize Binary Tree", difficulty: "hard" },
          { name: "Morris Preorder Traversal", difficulty: "hard" },
          { name: "Morris Inorder Traversal", difficulty: "hard" },
          { name: "Flatten Binary Tree to LinkedList", difficulty: "medium" }
        ]
      }
    ]
  },
  {
    id: 14,
    name: "Binary Search Trees",
    subsections: [
      {
        name: "Concepts",
        problems: [
          { name: "Introduction to Binary Search Tree", difficulty: "easy" },
          { name: "Search in a Binary Search Tree", difficulty: "easy" },
          { name: "Find Min/Max in BST", difficulty: "easy" }
        ]
      },
      {
        name: "Practice Problems",
        problems: [
          { name: "Ceil in a Binary Search Tree", difficulty: "medium" },
          { name: "Floor in a Binary Search Tree", difficulty: "medium" },
          { name: "Insert a given Node in Binary Search Tree", difficulty: "medium" },
          { name: "Delete a Node in Binary Search Tree", difficulty: "medium" },
          { name: "Kth smallest/largest element in BST", difficulty: "medium" },
          { name: "Check if a tree is a BST or BT", difficulty: "medium" },
          { name: "LCA in Binary Search Tree", difficulty: "medium" },
          { name: "Construct a BST from a preorder traversal", difficulty: "medium" },
          { name: "Inorder Successor/Predecessor in BST", difficulty: "medium" },
          { name: "Merge 2 BST's", difficulty: "hard" },
          { name: "Two Sum In BST", difficulty: "easy" },
          { name: "Recover BST", difficulty: "hard" },
          { name: "Largest BST in Binary Tree", difficulty: "hard" }
        ]
      }
    ]
  },
  {
    id: 15,
    name: "Graphs",
    subsections: [
      {
        name: "Learning",
        problems: [
          { name: "Graph Representation in C++", difficulty: "easy" },
          { name: "Graph Representation in Java", difficulty: "easy" },
          { name: "Connected Components", difficulty: "medium" },
          { name: "BFS", difficulty: "medium" },
          { name: "DFS", difficulty: "medium" }
        ]
      },
      {
        name: "Problems on BFS/DFS",
        problems: [
          { name: "Number of provinces", difficulty: "medium" },
          { name: "Number of Islands", difficulty: "medium" },
          { name: "Flood fill algorithm", difficulty: "medium" },
          { name: "Rotten Oranges", difficulty: "medium" },
          { name: "Detect a cycle in an undirected graph using BFS", difficulty: "medium" },
          { name: "Detect a cycle in an undirected graph using DFS", difficulty: "medium" },
          { name: "Distance of nearest cell having 1 in a binary matrix", difficulty: "medium" },
          { name: "Surrounded Regions", difficulty: "medium" },
          { name: "Number of Enclaves", difficulty: "medium" },
          { name: "Word ladder - 1", difficulty: "hard" },
          { name: "Word ladder - 2", difficulty: "hard" },
          { name: "Number of Distinct Islands", difficulty: "medium" },
          { name: "Bipartite Graph (DFS)", difficulty: "medium" }
        ]
      },
      {
        name: "Topo Sort and Problems",
        problems: [
          { name: "Topo Sort", difficulty: "medium" },
          { name: "Kahn's Algorithm", difficulty: "medium" },
          { name: "Detect a cycle in directed graph using DFS", difficulty: "medium" },
          { name: "Detect a cycle in directed graph using BFS", difficulty: "medium" },
          { name: "Course Schedule - I and II", difficulty: "medium" },
          { name: "Find eventual safe states", difficulty: "medium" },
          { name: "Alien dictionary", difficulty: "hard" }
        ]
      },
      {
        name: "Shortest Path Algorithms",
        problems: [
          { name: "Shortest Path in UG with unit weights", difficulty: "medium" },
          { name: "Shortest Path in DAG", difficulty: "medium" },
          { name: "Djisktra's Algorithm", difficulty: "medium" },
          { name: "Shortest path in a binary maze", difficulty: "medium" },
          { name: "Path with minimum effort", difficulty: "medium" },
          { name: "Cheapest flights within k stops", difficulty: "medium" },
          { name: "Network Delay Time", difficulty: "medium" },
          { name: "Number of ways to arrive at destination", difficulty: "medium" },
          { name: "Minimum steps to reach target by Knight", difficulty: "medium" },
          { name: "Bellman Ford Algorithm", difficulty: "medium" },
          { name: "Floyd Warshall Algorithm", difficulty: "medium" },
          { name: "Find the city with the smallest number of neighbors at a threshold distance", difficulty: "medium" }
        ]
      },
      {
        name: "Minimum Spanning Tree / Disjoint Set",
        problems: [
          { name: "Minimum Spanning Tree", difficulty: "medium" },
          { name: "Prim's Algorithm", difficulty: "medium" },
          { name: "Disjoint Set (Union by Rank and Path Compression)", difficulty: "medium" },
          { name: "Kruskal's Algorithm", difficulty: "medium" },
          { name: "Number of operations to make network connected", difficulty: "medium" },
          { name: "Most stones removed with same row or column", difficulty: "medium" },
          { name: "Accounts merge", difficulty: "hard" },
          { name: "Number of island II", difficulty: "hard" },
          { name: "Making a Large Island", difficulty: "hard" },
          { name: "Swim in rising water", difficulty: "hard" }
        ]
      },
      {
        name: "Other Algorithms",
        problems: [
          { name: "Bridges in Graph", difficulty: "hard" },
          { name: "Articulation Point", difficulty: "hard" },
          { name: "Kosaraju's Algorithm", difficulty: "hard" }
        ]
      }
    ]
  },
  {
    id: 16,
    name: "Dynamic Programming",
    subsections: [
      {
        name: "1D DP",
        problems: [
          { name: "Climbing Stars", difficulty: "easy" },
          { name: "Frog Jump", difficulty: "easy" },
          { name: "Frog Jump with k distances", difficulty: "medium" },
          { name: "Maximum sum of non-adjacent elements", difficulty: "medium" },
          { name: "House Robber", difficulty: "medium" },
          { name: "House Robber 2", difficulty: "medium" }
        ]
      },
      {
        name: "2D/3D DP and DP on Grids",
        problems: [
          { name: "Ninja's Training", difficulty: "medium" },
          { name: "Grid Unique Paths", difficulty: "medium" },
          { name: "Grid Unique Paths 2", difficulty: "medium" },
          { name: "Minimum path sum in Grid", difficulty: "medium" },
          { name: "Minimum path sum in Triangular Grid", difficulty: "medium" },
          { name: "Maximum path sum in matrix", difficulty: "medium" },
          { name: "Cherry Pickup", difficulty: "hard" },
          { name: "3-d DP", difficulty: "hard" }
        ]
      },
      {
        name: "DP on Subsequences",
        problems: [
          { name: "Subset sum equals to target", difficulty: "medium" },
          { name: "Partition equal subset sum", difficulty: "medium" },
          { name: "Partition set into 2 subsets with min absolute sum diff", difficulty: "medium" },
          { name: "Count subsets with sum K", difficulty: "medium" },
          { name: "Count partitions with given difference", difficulty: "medium" },
          { name: "Assign Cookies", difficulty: "medium" },
          { name: "0/1 Knapsack", difficulty: "medium" },
          { name: "Minimum Coins", difficulty: "medium" },
          { name: "Target Sum", difficulty: "medium" },
          { name: "Coin Change 2", difficulty: "medium" },
          { name: "Unbounded Knapsack", difficulty: "medium" },
          { name: "Rod Cutting Problem", difficulty: "medium" }
        ]
      },
      {
        name: "DP on Strings",
        problems: [
          { name: "Longest Common Subsequence", difficulty: "medium" },
          { name: "Print Longest Common Subsequence", difficulty: "medium" },
          { name: "Longest Common Substring", difficulty: "medium" },
          { name: "Longest Palindromic Subsequence", difficulty: "medium" },
          { name: "Minimum insertions to make string palindrome", difficulty: "medium" },
          { name: "Minimum Insertions/Deletions to convert String A to String B", difficulty: "medium" },
          { name: "Shortest Common Supersequence", difficulty: "hard" },
          { name: "Distinct Subsequences", difficulty: "hard" },
          { name: "Edit Distance", difficulty: "hard" },
          { name: "Wildcard Matching", difficulty: "hard" }
        ]
      },
      {
        name: "DP on Stocks",
        problems: [
          { name: "Best time to Buy and Sell Stock", difficulty: "easy" },
          { name: "Buy and Sell Stock - II", difficulty: "medium" },
          { name: "Buy and Sell Stocks - III", difficulty: "hard" },
          { name: "Buy and Sell Stocks - IV", difficulty: "hard" },
          { name: "Buy and Sell Stocks with Cooldown", difficulty: "medium" },
          { name: "Buy and Sell Stocks with Transaction Fee", difficulty: "medium" }
        ]
      },
      {
        name: "DP on LIS",
        problems: [
          { name: "Longest Increasing Subsequence", difficulty: "medium" },
          { name: "Printing Longest Increasing Subsequence", difficulty: "medium" },
          { name: "Longest Increasing Subsequence (Binary Search)", difficulty: "medium" },
          { name: "Largest Divisible Subset", difficulty: "medium" },
          { name: "Longest String Chain", difficulty: "medium" },
          { name: "Longest Bitonic Subsequence", difficulty: "medium" },
          { name: "Number of Longest Increasing Subsequences", difficulty: "medium" }
        ]
      },
      {
        name: "MCM DP / Partition DP",
        problems: [
          { name: "Matrix Chain Multiplication", difficulty: "hard" },
          { name: "Minimum Cost to Cut the Stick", difficulty: "hard" },
          { name: "Burst Balloons", difficulty: "hard" },
          { name: "Evaluate Boolean Expression to True", difficulty: "hard" },
          { name: "Palindrome Partitioning - II", difficulty: "hard" },
          { name: "Partition Array for Maximum Sum", difficulty: "medium" }
        ]
      },
      {
        name: "DP on Squares",
        problems: [
          { name: "Maximum Rectangle Area with all 1's", difficulty: "hard" },
          { name: "Count Square Submatrices with All Ones", difficulty: "medium" }
        ]
      }
    ]
  },
  {
    id: 17,
    name: "Tries",
    subsections: [
      {
        name: "Theory",
        problems: [
          { name: "Implement Trie (Prefix Tree)", difficulty: "medium" },
          { name: "Implement Trie - 2", difficulty: "medium" }
        ]
      },
      {
        name: "Problems",
        problems: [
          { name: "Longest String with All Prefixes", difficulty: "medium" },
          { name: "Number of Distinct Substrings in a String", difficulty: "hard" },
          { name: "Power Set", difficulty: "medium" },
          { name: "Maximum XOR of two numbers in an array", difficulty: "hard" },
          { name: "Maximum XOR with an element from array", difficulty: "hard" }
        ]
      }
    ]
  },
  {
    id: 18,
    name: "Strings (Advanced)",
    subsections: [
      {
        name: "Hard Problems",
        problems: [
          { name: "Minimum number of bracket reversals", difficulty: "hard" },
          { name: "Count and say", difficulty: "medium" },
          { name: "Hashing In String | Rabin Karp", difficulty: "hard" },
          { name: "Z-Function", difficulty: "hard" },
          { name: "KMP algo / LPS(pi) array", difficulty: "hard" },
          { name: "Shortest Palindrome", difficulty: "hard" },
          { name: "Longest happy prefix", difficulty: "hard" }
        ]
      }
    ]
  }
];

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { dsaData };
}
