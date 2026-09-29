# 🗺️ DSA Pattern Master Map

This document serves as a roadmap for our DSA journey. As we master each pattern, we will mark it as complete.

| Category | Pattern | Description | Complexity (Avg) | Status |
| :--- | :--- | :--- | :--- | :---: |
| **Arrays & Strings** | Two Pointers | Two indices moving toward each other or at different speeds. | $O(n)$ | ⬜ |
| | Sliding Window | Maintaining a sub-section of data to find a specific range/length. | $O(n)$ | ⬜ |
| | Prefix Sum | Pre-calculating cumulative sums for range queries. | $O(n)$ | ⬜ |
| | Fast & Slow Pointers | Using two pointers at different speeds to detect cycles. | $O(n)$ | ⬜ |
| | Kadane's Algorithm | Finding the maximum subarray sum. | $O(n)$ | ⬜ |
| | Two-Pass / Multi-Pass | Iterating multiple times (e.g., left-to-right, then right-to-left). | $O(n)$ | ⬜ |
| **Searching & Sorting** | Binary Search | Dividing a sorted search space in half each time. | $O(\log n)$ | ⬜ |
| | Modified Binary Search | Searching in rotated or nearly sorted arrays. | $O(\log n)$ | ⬜ |
| | Quick Select | Finding the $k$-th smallest/largest element without fully sorting. | $O(n)$ | ⬜ |
| | Merge/Quick Sort Logic | Divide and Conquer approach to sorting. | $O(n \log n)$ | ⬜ |
| **Trees & Graphs** | Breadth-First Search (BFS) | Level-order traversal using a Queue. | $O(V+E)$ | ⬜ |
| | Depth-First Search (DFS) | Deep exploration using Recursion or a Stack. | $O(V+E)$ | ⬜ |
| | Topological Sort | Ordering nodes based on dependencies (DAGs). | $O(V+E)$ | ⬜ |
| | Union Find (DSU) | Tracking connected components and merging sets. | $O(\alpha(n))$ | ⬜ |
| | Dijkstra's Algorithm | Shortest path in weighted graphs (non-negative). | $O(E \log V)$ | ⬜ |
| | Bellman-Ford | Shortest path in weighted graphs (handles negative edges). | $O(VE)$ | ⬜ |
| **Optimization** | Dynamic Programming | Solving sub-problems and caching results (Memoization). | Varies | ⬜ |
| | Greedy Approach | Making the locally optimal choice at each step. | Varies | ⬜ |
| | Backtracking | Exhaustive search by trying all options and undoing. | $O(k^n)$ | ⬜ |
| | Bit Manipulation | Using binary operations (AND, OR, XOR) for efficiency. | $O(1)$ | ⬜ |
| **Advanced Structures** | Monotonic Stack | Maintaining a stack in increasing or decreasing order. | $O(n)$ | ⬜ |
| | Priority Queue / Heap | Efficiently accessing the min/max element. | $O(\log n)$ | ⬜ |
| | Trie (Prefix Tree) | Storing strings for fast prefix-based lookups. | $O(L)$ | ⬜ |
| | Segment Tree / Fenwick | Efficient range queries and updates. | $O(\log n)$ | ⬜ |

**Legend:**
- $V$: Number of Vertices (Nodes)
- $E$: Number of Edges (Connections)
- $n$: Size of Input
- $\alpha(n)$: Inverse Ackermann function (nearly constant)
- $L$: Length of the string
