---
imagePath: "/blog_images/blog_4/main.jpg"
imageName: "Blog 4 - LeetCode 2976"
title: "DP Revisited: An Intro to Floyd–Warshall Algorithm"
date: "Feb 15, 2026"
excerpt: "This time, join me to discover an application of DP in graph theory called Floyd–Warshall algorithm, with an interesting LeetCode problem."
tags: ["Algorithm"]
---
## Introduction
I started LeetCode almost 2 years ago and tackled many different problems. While I forget most of the problems I solved, there're still a few of them that have quite impressed me. They are either notoriously difficult or smart problems that give you some new insights. Recently, I encountered one of my favourite problems of all time. I think it's a good chance to write a blog to promote this question and continue from the discussion of DP from last time!

I know, I know—you don't like DP. But this is life, and you have to accept it! As always, this blog is not for everyone. I assume you have foundational knowledge about programming. If you're not familiar with DP, do check out my second blog (Understanding DP With LeetCode 808), which gives a gentler introduction to DP. Also, this is a long blog, feel free to digest with a few days.

Now let's dive into the problem and the cool algorithm!

## Problem & Solution
For the complete problem description, please refer to the official LeetCode page by clicking [here](https://leetcode.com/problems/minimum-cost-to-convert-string-i/description/).
Although the parameter naming/format in LeetCode is infamous, I'll still follow their convention to avoid any confusion.

The problem could be loosely summarized as follows:

- Our task is to completely transform one string `source` to another string `target` with the same length
- We have a set of single character transformation with certain cost, defined by three arrays collectively: `original`, `changed` and `cost`.
- We are allowed to do unlimited times of single character transformation
- Our goal is to minimize the total cost to transform the string

For easier reference, let
- `m == source.length == target.length`
- `n == original.length == changed.length == cost.length`.

### Examples
To better understand the problem, we'll start by a complete walkthrough of an example.
Suppose we have the following inputs:

- `source = "abc"`
- `target = "bbe"`
- `original = ['a', 'c', 'b']`
- `changed = ['b', 'b', 'e']`
- `cost = [1, 2, 1]`

Let's analyze character by character:
| index | source | target | method | cost |
|-------|--------|--------|-------------------------------------------|------|
| 0 | `'a'` | `'b'` | `'a'` -> `'b'` | 1 |
| 1 | `'b'` | `'b'` | No changes needed | 0 |
| 2 | `'c'` | `'e'` | First `'c'` -> `'b'`, then `'b'` -> `'e'` | 3 |

Our output in this case is therefore $1 + 0 + 3 = 4$.

### Observations

1. The problem is more than just string traversal

Since we are allowed to perform transformation as many times as we need, it's possible that we perform multiple transformations on a single index. This is evident from the example we analyzed. At index 2, we transformed twice: first goes to `'b'`, then goes to `'e'`.

This means, it's not enough to traverse the string and for each index, select one available transformation from the array. we need more than that.

---

2. The constraint is not small: $0 \leq m \leq 10^5$ and $0 \leq n \leq 2000$

If you're not familiar with LeetCode, this constraint is moderately tight, expecting a time complexity approximately bounded by $O(m \log m)$. As we will see, our final solution will be better than this.

---

3. There are multiple possible ways to reach from and to the same target character

This is not illustrated from the example case, but consider this scenario: suppose we need to transform from `'a'` to `'c'`, with

- `original = ['a', 'a', 'b']`
- `changed = ['c', 'b', 'c']`
- `cost = [4, 2, 1]`

In this case, we have two ways to do so: either by direct transformation, `'a'` -> `'c'` (costing $4$), or by multiple transformations, `'a'` -> `'b'` -> `'c'` (costing $2 + 1 = 3$). Obviously, we favour the latter one because it costs less than the simpler way.

At this stage, a legendary computer scientist's name should immediately emerge in your mind! I'll let you stop reading and start pondering for a while... Read the next observation after you've figured out the solution!

---

4. This is essentially an All-Pairs Shortest Paths (APSP) problem

This is where the problem starts to get interesting. Instead of thinking it as a string manipulation or an array traversal problem, we have to visualize the problem as a graph. Specifically, we will construct a directed graph $G = (V, E)$ as follows:

- We map each lowercase letter $c$ to an index $k = ord(c) - ord('a')$. For example, `'b'` will map to 1.
- $G$ has at most $|V| = 26$ vertices $v_k$ for all $v \in V$ and $k \in \{0, \dots, 25\}$
- $G$ has $|E| = n$ edges:
- for each $i \in \{0, \dots, , n - 1\}$, add a directed edge (`original[i]`, `changed[i]`), with weight `cost[i]`
It will make more sense looking at a concrete example:

<img src="/blog_images/blog_4/graph.png" alt="Blog 4 - Graph" class="img hide-on-md" style="max-width: 80% !important; height: auto;" />

<img src="/blog_images/blog_4/graph.png" alt="Blog 4 - Graph Large" class="img hide-on-sm" />

I'll explain this step by step. First, for easier implementation and formulation, it's often more convenient to work with indices rather than the characters themselves. The graph will have at most 26 vertices, because we're only dealing with lowercase letters. Here, we can think of each transformation as an edge from one character vertex to another, with the edge weights perfectly capturing the transformation costs.

To transform each character in the string, we'll need to compute the shortest path from every possible source character to its target, which turns this into an APSP problem.

---

5. Finally, there're no negative costs

This is a good news, because that means we can use Dijkstra's algorithm to efficiently solve the problem! At the worst case, we'll need to run Dijkstra's algorithm $m$ times for each possible source character. Dijkstra algorithm for APSP requires running $|V|$ times, taking $O(|V|(|V| + |E|) \log|V|)$, since $|V|$ is a constant, this simply reduces to $O(n)$. The total time complexity of this solution is therefore $O(m + n)$, including the time for string scanning and graph construction.

### Dijkstra Algorithm Solution

Breadth-First Search (BFS) on unweighted graph works by always visiting the nearest vertices first. As the total cost is determined only by the number of edges in the path, by maintaining the minimum edges invariant throughout the process, BFS yields us the correct result. Dijkstra's Algorithm generalizes the idea of BFS, specifically we always want to visit vertices in increasing order of distance.

In this blog though, I will not touch too much on this matter. As a curious learner, I encourage you to read a [rigorous proof](https://cp-algorithms.com/graph/dijkstra.html) for serious study.

To tackle a graph problem, we must first represent the graph with a data structure. There're two common ways: **adjacency list** and **adjacency matrix**. To be slightly more efficient, we'll use adjacency list throughout this blog.

```cpp
int n = source.size();
int m = original.size();

// This will store u: (v, weight) pair
vector<vector<pair<int, int>>> adj_list(26);

// Build the adjacency list
for (int i = 0; i < m; i++) {
    adj_list[original[i] - 'a'].push_back({changed[i] - 'a', cost[i]});
}
```

For your reference, you may print out the items in `adj_list` to see the internal structure.

```cpp
// Debug: print out the items in adj_list
for (int u = 0; u < 26; u++) {
    cout << static_cast<char>(u + 'a') << ": ";
    for (auto& [v, weight] : adj_list[u]) {
        cout << "(" << static_cast<char>(v + 'a') << ", " << weight << ") ";
    }
    cout << "\n";
}
```

Now, we need two more data structures before we actually implement Dijkstra's Algorithm:

- A priority queue: Find the closest vertices efficiently in logarithmic time;
- A distance array: Track the shortest distance to all other vertices from source

Note that using a priority queue is crucial here. If we instead scan the whole $dist$ array to find the closest vertices, the time complexity in the worst case will blow up to linear time. It's fine in this question since $|V|$ is small, but it's always recommended to use a priority queue. Here's the full implementation:

```cpp
vector<int> shortest_path_to_all(int start, vector<vector<pair<int, int>>>& adj_list) {
    // Track the shortest distance to all other vertices
    vector<int> dist(26, INT_MAX);
    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> to_visit;
    vector<bool> visited(26);

    // Add the start vertex to the data structures
    dist[start] = 0;
    to_visit.push({0, start});

    while (!to_visit.empty()) {
        auto [cost, u] = to_visit.top();
        to_visit.pop();

        // Ignore older items (i.e. worse path from previous relaxation)
        if (cost > dist[u])
            continue;

        for (auto& [v, weight]: adj_list[u]) {
                // Check if a better path is found
                if (dist[u] + weight < dist[v]) {
                dist[v] = dist[u] + weight;
                to_visit.push({dist[v], v});
            }
        }
    }
    return dist;
}
```

At this stage, we're only one step away from completely solving the problem. Good job making this far! The final thing we need to do is to compute the total cost to transform the whole string. This is relatively easy. However, to optimize a little bit, we'll only compute the shortest paths when we haven't seen the character before. This can be achieved by maintaining a hash table, which allows efficient look up for already computed paths. The following code segment concludes our solution.

```cpp
// Hold a hash map to look up the computed results
unordered_map<int, vector<int>> dists;
long long total_cost = 0;

for (int i = 0; i < n; i++) {
    int src_idx = source[i] - 'a';
    int target_idx = target[i] - 'a';

    // Only call when we've not yet computed
    if (dists.find(src_idx) == dists.end()) {
        dists[src_idx] = shortest_path_to_all(src_idx, adj_list);
    }

    // Early return for impossible transformation
    int current_cost = dists[src_idx][target_idx];
    if (current_cost == INT_MAX)
        return -1;

    total_cost += current_cost;
}

return total_cost;
```

## Journey to a Better Solution
First of all, let's talk about the inefficiencies of the previous solution. Recall that Dijkstra algorithm for APSP runs in $O(|V|(|V| + |E|) \log|V|)$ time. This is fine for **sparse graph**, where $|E| = O(|V|)$, giving an efficient $O(|V|^2 \log |V|)$ algorithm. However, in a **dense graph**, where $|E| = O(|V|^2)$, the time complexity can go up to $O(|V|^3 \log |V|)$!

This should motivate a better approach. In fact, Floyd–Warshall algorithm allows us to solve APSP problem in $O(|V|^3)$ in all cases, potentially dropping the $O(\log |V|)$ factor. This may sound small, but remember, in a real-world scenario (e.g. computer networks), the number of vertics can go up millions or billions!

But before discussing this algorithm, let's step back and understand the key concept.

### Bellman Optimality Equation
Simply put, DP rests on two core ideas: (1) make local one step at a time; (2) reuse answers from smaller problems to help solve bigger ones. Let's understand the key recurrence relation in the context of shortest path - **Bellman optimality equation**:

$$
    d(u, t) = \min_{(u,v) \in E} \{d(v, t) + w(u, v)\}
$$

<img src="/blog_images/blog_4/graph_2.png" alt="Blog 4 - Graph 2" class="img" />

where $d(u, t)$ is the shortest distance from vertex $u$ to vertex $t$, $w(u, v)$ is the edge weight.
In plain English, to find the shortest path from $u$ to $t$, we will consider all possible outgoing edges $(u, v)$, plus shortest paths from $v$ to $t$. How do you know those shortest paths? You just apply the exact same logic recursively. This process propagates until it reaches a vertex that has a direct edge to $t$. At that point, the shortest path is simply the weight of that edge (with some subtleties).

<img src="/blog_images/blog_4/graph_5.png" alt="Blog 4 - Graph 5" class="img" />

The same idea applies when we think about path-to-path construction. Suppose we consider paths that pass through a set of intermediate nodes (as shown on the diagram), and we also have the optimal subpaths from $i$ to $k_p$ and $k_p$ to $j$ for $p \in \{1, \dots, n\}$. To construct the full path to $j$, we just simply consider all the possible pairings through different intermediate nodes $k_p$. How do you know those shortest subpaths? Similarly, you apply the same logic, but with smaller subproblems. For the formal recursive definition:

$$
    d(i, j) = \min_{p \in \{1, \dots, n\}} \{d(i, k_p) + d(k_p, j)\}
$$

Note that I've simplified the picture a little bit. In reality, the shortest path might involve several intermediate nodes. For example, $i \rightarrow k_1 \rightarrow k_4 \rightarrow j$. But more about that later.

### Floyd–Warshall Algorithm Solution
We are in a good position to discuss the final solution. Floyd–Warshall algorithm relies on the same idea, but it iterates smartly to build paths incrementally. To start, we'll define the DP recurrence using three states: (1) the source vertex $i$; (2) the destination vertex $j$; (3) the highest-numbered intermediate vertex $k$ allowed in the path (ranging from 0 to 25 in our case, since we have 26 vertices).

The function $f(i, j, k)$ represents the shortest path from $i$ to $j$ using only vertices 0 to $k$ as intermediates. Since it's a bit complicated to write in one go, let's start with the base cases.

$$
    f(i, j, 0) = 
        \begin{cases} 
            0 & \text{if } i = j \\
            w(i, j) & \text{if } i \neq j \text{ and } (i, j) \in E \\
            \infty & \text{if } i \neq j \text{ and } (i, j) \not\in E \\
    \end{cases}
$$

Floyd–Warshall algorithm operates on a $|V| \times |V|$ 2D matrix. Specifically, each cell of the matrix, addressed by ($i$, $j$), represents the shortest path from vertex $i$ to $j$. Before the recursive case (i.e. $k > 0$), it initializes the matrix with respect to the direct edges in the graph. The other two cases are similar to Dijkstra algorithm. For the recursive case:

$$
    f(i, j, k) = \min\{f(i, j, k - 1), f(i, k, k - 1) +  f(k, j, k - 1)\}
$$

You might find this familiar, because that's exactly what we've derived previously! Floyd–Warshall works by considering all intermediate vertices and seeing if it is possible to obtain a better path. However, there're a few important points to note:

- We only consider one vertex in the previous section, but Floyd–Warshall solves APSP by considering all ($i$, $j$) pairs.
- Similar to many DP algorithms, the recursive case assumes we have the shortest subpath already. Floyd–Warshall guarantees this by computing smaller set of intermediates. 
- The numbering (i.e. $1, \dots, k$) is arbitrary. This ensures you make improvement step by step without jumping ahead (i.e. falsely assumes the subpath is optimal). Previous improvment propagates to later iterations to build more paths.

Again, this is a bit abstract, let's walk through an example (huge credit to wiki page!):

<img src="/blog_images/blog_4/graph_6.png" alt="Blog 4 - Graph 6" class="img hide-on-md" style="max-width: 100% !important; height: auto;" />

<img src="/blog_images/blog_4/graph_6_lg.png" alt="Blog 4 - Graph 6 Large" class="img hide-on-sm" style="max-width: 85% !important; height: auto;" />

<img src="/blog_images/blog_4/graph_7.png" alt="Blog 4 - Graph 7" class="img hide-on-md" style="max-width: 100% !important; height: auto;" />

<img src="/blog_images/blog_4/graph_7_lg.png" alt="Blog 4 - Graph 7 Large" class="img hide-on-sm" style="max-width: 85% !important; height: auto;" />


- At $k = 0$, we initialize the DP matrix with the graph topology, i.e. relax direct edges.
- At $k = 1$, we consider pairing via vertex 1. In this case, no better paths are found since no vertice can go to vertex 1.
- At $k = 2$, we found a way better path from 1 to 3 via 2, also unlock a way to go from 4 to 3.
- At $k = 3$, we have the most interesting iteration so far. We pair up a path we found at $k = 2$ to a form the shortest path from 1 to 4. This is exactly how Floyd–Warshall handles things like $i \rightarrow k_1 \rightarrow k_4 \rightarrow j$. Previous iterations ($k = 0, 2$) propagate as later subpaths! Furthermore, we now also understand why the numbering can be actually arbitrary. It makes no difference to first build $2 \rightarrow 3 \rightarrow 4$ or $1 \rightarrow 2 \rightarrow 3$, they will all eventually come up as subpaths!
- At $k = 4$, we unlock the path from 3 to 2.

Surprisingly, this solution is even simpler than Dijkstra's algorithm. This highlights the elegance of the Floyd-Warshall algorithm! Here's the implementation:

```cpp
int n = source.size();
int m = original.size();

// No need to build adj_list this time
// Graph topology is absorbed into the dp matrix
vector<vector<int>> dists(26, vector<int>(26, INT_MAX));

// Initialize the dp matrix
for (int i = 0; i < 26; i++)
    dists[i][i] = 0;

for (int i = 0; i < m; i++) {
    int src_idx = original[i] - 'a';
    int target_idx = changed[i] - 'a';
    dists[src_idx][target_idx] = min(dists[src_idx][target_idx], cost[i]);
}

// Triple loop to build the dp matrix
for (int k = 0; k < 26; k++) {
    for (int i = 0; i < 26; i++) {
        for (int j = 0; j < 26; j++) {
            // Skip to prevent integer overflow
            if (dists[i][k] == INT_MAX || dists[k][j] == INT_MAX)
                continue;

            dists[i][j] = min(dists[i][j], dists[i][k] + dists[k][j]);
        }
    }
}

// Total cost computation is similar to before
```

I'll not explain this implementation. But it's important to note that the correct order of the triple loop is $k, i, j$. If we instead do $i, j, k$, the evaluation order becomes: for each pair of ($i$, $j$), consider every intermediates $k$. This might not give the correct result because it's not guaranteed that the subpaths are already optimal. Recall from the previous walkthrough, suppose we have $i = 1$ and $j = 4$, and we attempt to consider all proper intermediates $k = 2, 3$. You will get $\infty$, since neither $2 \rightarrow 3$, $3 \rightarrow 4$, nor $2 \rightarrow 4$ are updated.


## Final Note & Exercise

To really absord knowledge, it's best to spend a little time to ponder on the topic. Therefore, I'll leave some simple questions for you to think about before you leaving.

1. Despite being wasting and inefficient, running the "disordered" $i, j, k$ triple loop **multiple** times can actually converge to the correct shortest paths. Can you see why?

2. There's another triple loop order will work. Can you see which?

Side note: today's my birthday, hurray! Time spent on tuning the image sizes of this blog... Hope you enjoy!