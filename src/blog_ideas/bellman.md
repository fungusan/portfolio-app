## Note for myself:

This text is substracted from blog 4, due to several reasons:
- Inconsistent with the main topic
- Streamline the flow
- Avoid confusion

However, the content is actually meaningful well written, along with the good graphs attached. So I move it here for future blogs (maybe discuss Bellman-Ford in depth later).

It's easy to implement recurrence relation in a **Directed Acyclic Graph** (DAG) - a graph with no cycles. You perform a **topological sort** to order the vertices, and then build the path bottom up. As I've explained topological order in previous blog, I shall omit the details here. Long story short, DAG and topological order enable us to compute the path without circular dependencies. This technique is exactly **DAG relaxation**. It can feel a bit abstract at first, so let's walk through an example:

<img src="/blog_images/blog_4/graph_3.png" alt="Blog 4 - Graph 3" style="max-width: 35%; height: auto;" class="mx-auto" />

For example, we'd like to compute $d(s, t)$. In this graph, one of the possible topological orders is $[s, a, b, c, t]$, and we'll compute the shortest path cost backwards, i.e. from the target vertex $t$. As a base case, we have $d(t, t) = 0$. For vertices $c$, $b$, $a$, they both have exactly one outgoing edge, updating to $d(a, t) = 5$, $d(c, t) = 1$, and $d(b, t) = d(c, t) + w(b, c) = 2$. Now, for the fun part, $s$ has two outgoing edges:

$$
    \begin{aligned}
        d(s, t) &= \min\{d(a, t) + w(s, a), d(b, t) + w(s, b)\} \\
        &= \min\{5 + 1, 2 + 2\} \\
        &= 4
    \end{aligned}
$$

The algorithm runs in $O(|V| + |E|)$, which is very efficient. However, this algorithm cannot be applied to general graphs, because it's impossible to obtain a topological order. In the example we saw earlier, we only relax the neighbour vertices, hence we get the correct shortest path only when the neighbours have the correct shortest path already. This is guaranteed in a DAG, but not so in general graphs. So a single pass approach can't be applied.

### Bellman-Ford Algorithm
This is exactly what **Bellman-Ford algorithm** attempts to address. The Bellman–Ford algorithm is like making multiple passes through the graph to spread information step by step. In a general graph, a path could wander around before reaching the target. Think about the longest possible path without visiting the same vertex twice. That's called **simple path**, and it can use at most $|V| - 1$ edges (think about why!). Therefore, Bellman–Ford simply repeats the relaxations for $|V| - 1$ times, rather than a single pass.

Note that the classic Bellman–Ford algorithm isn’t built on the backward DP equation we wrote above. It actually uses the forward relaxation step you know from Dijkstra. But the idea remains the same. Let's look at an example to understand this algorithm:

<img src="/blog_images/blog_4/graph_4.png" alt="Blog 4 - Graph 4" style="max-width: 40%; height: auto;" class="mx-auto" />

| Iteration \ v | $a$ | $b$ | $c$ | $d$ |
|---------------|-----|-----|-----|-----|
| $0$ | $0$ | $\infty$ | $\infty$ | $\infty$ |
| $1$ | $0$ | $-5$ | $6$ | $\infty$ |
| $2$ | $0$ | $-5$ | $-9$ | $9$ |
| $3$ | $0$ | $-5$ | $-9$ | $-6$ |
| $4$ | $0$ | $-5$ | $-9$ | $-6$ |
| $d(a,v)$ | $0$ | $-5$ | $-9$ | $-6$ |

Suppose we want to compute $d(a, d)$, we set $d(a, a) = 0$ and everything else to infinity. We haven’t taken any edges yet.

- First relaxation: we know shortest paths that use at most one edge, which $d$ is still unreachable from $a$.
- Second relaxation: now we can improve paths by taking two edges, reach $d$ via $c$ directly, giving us $d(a, d) = 9$. Better than nothing.
- Third relaxation: we find an even cheaper way to reach $d$ via $b$ and $c$, taking three edges, giving us $d(a, d) = -6$
- Fourth relaxation: nothing happens, which is expected because the longest possible simple path is $|V| - 1 = 4 - 1 = 3$.

This incremental improvement is exactly the spirit of DP algorithms!