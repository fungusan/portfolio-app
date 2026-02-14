---
imagePath: "/blog_images/blog_2/main.jpg"
imageName: "Blog 2 - LeetCode 808"
title: "Understanding DP With LeetCode 808"
date: "Aug 28, 2025"
excerpt: "Dynamic programming (DP) can be challenging for many. Let's dive into a great LeetCode example to break it down together!"
tags: ["Maths", "Algorithm"]
---
## Introduction
The heart of computer science lies on its algorithms. They are the foundation for all kinds of applications. While in practice we seldom write them from scratch, understanding their inner workings and knowing when to apply them is critical. On top of that, solving alorithm problems is a fun and rewarding exercise in your free time!

As a problem solving enthusiast who has solved over 400 LeetCode problems, I'm confident in sharing my experience and walking you through some interesting problems, so that you can be one to solve them on your own.

In this blog, we'll tackle **LeetCode 808 - Soup Servings**, a medium-difficulty problem solved efficiently using dynamic programming (DP).

## Prerequisites
Since this is my first blog on algorithmn, I shall list the prerequisites required to understand the content presented in the remaining sections in this blog. If you find yourself unfamiliar with the topics, do reach them out or wait for my upcoming blogs!

To solve this problem, I assume you have at least some knowledge of:

- basic data structures
- ideas of what algorithms do
- programming in C++
- probability
- time and space complexity

That means, you should be familiar with arrays, basic algorithms (like sorting), essential math concepts, and programming in C++. Don't worry if you don't, you can still read to gain some ideas!

## Foundational Knowledge
First, let's revisit the concept of DP.

According to CLRS, the leading algorithms textbook trusted by many universities, DP solves problems by combining solutions to subproblems. What does this mean? Well, consider the example of Fibonacci sequence, which is defined as:

$$
    F_{n} = F_{n - 1} + F_{n - 2}
$$

where $F_0 = 0$, and $F_1 = 1$.

The first eighth terms (0 indexed) are: $0$, $1$, $1$, $2$, $3$, $5$, $8$, $13$. While its definition is simple and well-known, finding the $n^{th}$ number isn't straightforward because it isn't defined by a direct formula; rather, it depends recursively on the previous terms in the sequence. That means, we must first know the $(n - 1)^{th}$ term and $(n - 2)^{th}$ in order to find the $n^{th}$ term. But how do we know those terms? You guess it, we find the $(n - 3)^{th}$ term and $(n - 4)^{th}$ term. This pattern keeps going until we hit the **base cases**: $F_0 = 0$, and $F_1 = 1$. This is exactly what CLRS means by combining the solutions to subproblems.

We could therefore efficiently build up the solutions from the base bases. This type of DP is called **bottom-up DP**. There's also another type called **top-down DP**, which is based on a recursive approach. Generally top-down DP is easier to implement, but has more overhead than bottom-up DP.

```cpp
int Fibonacci(int n) {
    // since each Fibonacci number only depends on two previous terms, 
    // we will only store two variables
    int current = 0;
    int next = 1;

    for (int i = 0; i < n; i++) {
        int temp = next;
        next += current;
        current = temp;
    }

    return current;
}
```

## Problem & Solution
Now that we've laid the groundwork, let's solve the problem. For the complete problem description, please refer to the official LeetCode page by clicking [here](https://LeetCode.com/problems/soup-servings/description/).

Basically, the problem is asking:

- We start with two soups $A$ and $B$ with the same volume
- We will randomly pour from both soups with ceratin probability 
- We are asked for the sum of:
    - the probability that soup $A$ empties before soup $B$ (defined as event $X$)
    - half of the probability that they empty simultaneously (defined as event $Y$).

### Observations
As a general rule of thumb, **never** start coding immediately. Always pause to grasp the big picture first. If you dive into code without a plan, you'll almost certainly hit a wall and find yourself constantly backtracking and rewriting. We're terrible at multitasking. Design your solution before you write a single line of code.

There are four observations we can draw from reading the problem:

1. All numbers involved are multiples of 25

This implies that a direct simulation is unnecessary. In fact, we could instead redefine the operations, for example, the first operation becomes *"remove 4 from $A$ and 0 from $B$"*. This preserves the problem's logic while allowing us to scale down the value of $n$ for efficiency. We can adjust the value $n$ correspondingly:

```cpp
int m = (n + 24) / 25;
```

This takes the ceiling because the extra volume has to be poured away. For example, when $n = 40$, it is the same as having $n = 50$, since you still have to pour 25 ml twice to empty the soup.

---

2. The constraint is large: $0 \leq n \leq 10^9$

Another key principle in algorithm design is to let the constraints guide your approach. Tighter constraints often necessitate more efficient solutions. In this case, the constraints are such that any algorithm with a time or space complexity higher than $O(n^2)$ will be too slow and will fail the test cases.

---

3. This problem is made up of many subproblems and is therefore solvable by DP.

This is the toughest step. How do we actually spot this? Here's a secret weapon even the pros use: try concrete examples! No one—not even experts—sees the pattern instantly. So, get your hands dirty with small cases; that's where the real insight begins.

Let's consider the case when $n = 0$. This is trivival: both soups are already empty. By definition of probability, the probability that they empty simultaneously (event $Y$) is $1$. Whereas, the probability of $A$ empties **before** $B$ (event $X$) is $0$. The output is therefore 

$$
    \begin{aligned}
        &P(X) + 0.5P(Y) \\
        &= 0 + 0.5(1) \\
        &= 0.5
    \end{aligned}
$$

A more illustrative, non-trivial example is $n = 50$, which is also provided in the official LeetCode problem description:

- if we perform either of the first two operations, soup $A$ will empty before $B$, which implies $P(X | \text{Operation 1}) = P(X | \text{Operation 2}) = 1$, and $P(Y | \text{Operation 1}) = P(Y | \text{Operation 2}) = 0$.
- if we perform the third operation, both will empty the same time, which implies $P(X | \text{Operation 3}) = 0$, and $P(Y | \text{Operation 3}) = 1$.
- if we perform the fourth operation, soup $B$ will empty before $A$, which implies $P(X | \text{Operation 4}) = P(Y | \text{Operation 4}) = 0$.

Since these operations equally partition the probability space, $P(\text{Operation 1}) = P(\text{Operation 2}) = P(\text{Operation 3}) = P(\text{Operation 4}) = 0.25$.

By the law of total probability, the output is therefore:
$$
    \begin{aligned}
        &P(X) + 0.5P(Y) \\
        &= \sum_{k = 1}^{4} P(\text{Operation } k) P(X | \text{Operation } k)  \\
        &\quad + 0.5 \sum_{k = 1}^{4} P(\text{Operation } k) P(Y | \text{Operation } k) \\
        &= 0.25 \Big[ \sum_{k = 1}^{4} \big( P(X | \text{Operation } k) + 0.5 P(Y | \text{Operation } k) ) ] \\
        &= 0.25 (1 + 1 + 0.5) \\
        &= 0.625
    \end{aligned}
$$

Did you notice the pattern? Upon closer inspection, the third operation produces the exact same scenario as the base case where $n = 0$. This is no coincidence: oth soups are empty after performing the third operation, which is functionally equivalent to starting with $n = 0$. This further implies that the $n = 0$ case is actually a subproblem encountered within the $n = 50$ case when applying the third operation.

Put more simply, we begin with the master problem when both soups have 50 ml. Then, after applying the third operation, we arrive at a subproblem where both soups are empty. Similarly, the fourth operation leads to a subproblem where soup $A$ has 25 ml and soup $B$ is empty.

---

4. The operation is not symmetrical and baised towards soup $A$

This is obvious because there is no operation that pours 0 mL from $A$ and 100 mL from $B$.

### Recurrence Relation

Building on the third observation, we've established that this problem can be solved using dynamic programming. However, there's one more step before we can start coding. That is, we must define the recurrence relation that connects the master problem to its subproblems, much like how we define the Fibonacci sequence.

**Definition 1**: Let $i$ and $j$ be the volumes of soup $A$ and soup $B$ respectively.

**Definition 2**: Let $P(i, j)$ be the sum of the probability that soup $A$ empties before $B$ and half of the probability that they empty simultaneously.

**Definition 3**: Let $n$ be the initial volume of both soups and $\displaystyle m = \left\lceil \frac{n}{25} \right\rceil$, such that $P(m, m)$ is precisely the solution to the problem after applying the transformation we identified in the first observation.

The first step is to establish the **base cases**, which are the terminal points where the recursion ends. For this problem, there ate three base cases to consider:

- both empty simultaneously: this is just the $n = m = 0$ case, and we have $P(i, j) = 0.5$ if $i \leq 0$ and $j \leq 0$
- soup $A$ empties before soup $B$: since soup $A$ is already empty before soup $B$. By definition of probability, $P(i, j) = 1$ if $i \leq 0$ and $j > 0$
- soup $B$ empties before soup $A$: similarly, $P(i, j) = 0$ if $i > 0$ and $j \leq 0$

![Blog 2 - Graph](/blog_images/blog_2/graph.png)

Now, for the **recursive case**, we proceed operation by operation. Consider the first operation: *Remove 4 from $A$ and 0 from $B$*. Performing this operation leaves $(i - 4)$ units of soup $A$ and $j$ units of soup $B$ left, leading to a subproblem of $P(i - 4, j)$. The other three operations follow an analogous pattern. Since each operation is selected with probability $0.25$, we obtain the following recurrence:

$$
    \begin{aligned}
        P(i, j) &= 0.25 \big[ P(i - 4, j) + P(i - 3, j - 1) + P(i - 2, j - 2) + P(i - 1, j - 3) ] \\
        &= 0.25 \sum_{k = 0}^3 P(i - k - 1, j + k - 3)
    \end{aligned}
$$

This recursive case is really the generalized version of the $n = 50$ ($m = 2$) case. We express it more succinctly without the need for nested conditional probabilities.

### Coding

Since there are two parameters for each subproblems, we would use a 2D $(m + 1) \times (m + 1)$ array to track the solutions to all subproblems up to $P(m, m)$. This is exactly why the first observation matters. Blindly building an $(n + 1) \times (n + 1)$ DP table would result in a 625-fold increase in memory usage, wasting vast amounts of space.

The first step we want to do is to initialize the base cases in the array. This effectively lays the foundation where we can use to build up more complex solutions.

```cpp
// Initialise a (m + 1) by (m + 1) double array with all values 0
vector<vector<double>> dp(m + 1, vector<double>(m + 1, 0));

// Initialise the base cases
// Case 1: A and B are both empty
dp[0][0] = 0.5;

// Case 2: A is empty, but B is not
for (int i = 1; i <= m; i++) {
    dp[0][i] = 1;
}

// Case 3: B is empty, but A is not
// No need to do anything, since the values are already 0
```

When implementing a DP solution, choosing the correct evaluation order for subproblems is essential. For example, with the Fibonacci sequence, the order is straightforward: we compute solutions from the smallest numbers upward to our target value. For this problem, however, it is slightly more complicated. Each subproblem depends on four other subproblems, which themselves depend on four more subproblems. We must find an intelligent way to compute without breaking the dependency. This order is called a **topological order** in graph theory.

As it turns out, either **row-major** (row-by-row) or **column-major** (col-by-col) order will do. This is because each serving operation only reduces the amount of soup. This means calculating the probability for larger volumes always depends on already knowing the probabilities for smaller volumes. 

For our solution, let's choose a row-major order. We will write a double loop to iterate the array row-by-row and calculate the subproblems by the recurrence relation written in the previous section. To prevent the program from accessing negative indexes, we will enforce the index to be 0 when it is negative.

```cpp
// Build up the solutions row-by-row
for (int i = 1; i <= m; i++) {
    for (int j = 1; j <= m; j++) {

        for (int k = 0; k < 4; k++) {
            // Enforce the indexes to be at least 0
            int prevI = (i - k - 1 < 0) ? 0 : i - k - 1;
            int prevJ = (j - 3 + k < 0) ? 0 : j - 3 + k;

            dp[i][j] += dp[prevI][prevJ];
        }

        dp[i][j] *= 0.25;
    }
}

// This is the solution to the master problem
return dp[m][m];
```

This is all looking good. The only problem is that it doesn't work... The main bottleneck of this algorithm is the double loop used in constructing the DP array, leading to a time complexity of $O(m^2) = O(n^2)$. On the other hand, the space complexity stems from the 2D array allocation, yielding $O(m^2) = O(n^2)$. This is not a really efficient algorithm. Remeber the second observation? The input constraint doesn't allow us to have a quadratic complexity algorithm!

Fortunately, there's a trick to help us bring down the computational cost. The key lies on the final observation: the lack of symmetry in the operations. On average, soup $A$ is poured out more often than soup $B$. Therefore, over a sufficiently large number of operations, soup $A$ will almost definitely empty before soup $B$. Mathematically, the probability approaches 1 asymptotically but never actually reaches it. However, this is acceptable because the problem allows an error tolerance up to $10^{-5}$. As a result, we just need to determine a "sufficiently large number". Then for any input equal to or exceeding this threshold, we simply return 1 without running the algorithm.

This can be stated as: find the least integral value of $m$, such that

$$
    P(m, m) \geq 1 - 10^{-5}
$$

This is hard to solve analytically. As a conservative guess, $m = 192$ or $n = 4800$ is enough for our purpose. There's nothing special about this number, rather it is just an arbitrary choice. Finally, the complete C++ solution (without comments) is given as follows:

```cpp
double soupServings(int n) {
    if (n >= 4800)
        return 1;
            
    int m = (n + 24) / 25;
    vector<vector<double>> dp(m + 1, vector<double>(m + 1, 0));

    dp[0][0] = 0.5;

    for (int i = 1; i <= m; i++) {
        dp[0][i] = 1;
    }

    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= m; j++) {

            for (int k = 0; k < 4; k++) {
                int prevI = (i - k - 1 < 0) ? 0 : i - k - 1;
                int prevJ = (j + k - 3 < 0) ? 0 : j + k - 3;

                dp[i][j] += dp[prevI][prevJ];
            }

            dp[i][j] *= 0.25;
        }
    }

    return dp[m][m];
}
```

## Final Note & Exercise

And there you have it—we've successfully solved the problem! By making key observations and structuring your approach, what once seemed daunting becomes far less intimidating.

As mentioned, the choice of $n = 4800$ is somewhat arbitrary. In fact, it's possible to derive a tighter and more efficient bound programmatically. As an exercise, I encourage you to write a program to find the smallest such $n$, where the probability approximates to 1 within a certain tolerance. This will deepen your understanding of the convergence behavior in this problem.