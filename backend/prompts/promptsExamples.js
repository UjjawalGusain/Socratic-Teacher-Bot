// 1. Diagnostic Prompts (5-7)
// These prompts help assess the student's current understanding of a concept or algorithm. You will need a few variations depending on the specific topic being covered (e.g., time complexity, sorting algorithms).
// Example Prompts:
// "What is your understanding of the time complexity for sorting algorithms?"
// "Can you explain how Merge Sort works?"
// "What are the differences between Quick Sort and Bubble Sort?"
// "How do you handle edge cases in sorting algorithms?"


// 2. Probing Prompts (10-12)
// These prompts push the student to think more critically and deeply about their answers, without giving away the solution. They help the assistant guide the student through a problem.

// Example Prompts:
// "What happens to the performance of your algorithm when the input size increases?"
// "How does the time complexity of Merge Sort compare to Quick Sort for large datasets?"
// "Is your algorithm stable? Can you think of any cases where stability might be important?"
// "Why do you think this test case timed out while others passed?"



// 3. Clarification Prompts (5-7)
// These are used to confirm or clarify a student's understanding or response. The assistant can use these to make sure the student is on the right track or to gently redirect their focus.

// Example Prompts:
// "So, you're saying that Quick Sort is faster than Merge Sort in most cases, right?"
// "Can you walk me through why you think this solution is O(n log n)?"
// "Just to clarify, what is the base case for this recursive function?"



// 4. Reflective Prompts (5-7)
// These prompts encourage students to think about their own thought processes and past decisions. These can help them see patterns or mistakes on their own.

// Example Prompts:
// "Looking back, what would you do differently with this approach?"
// "How does this solution compare to others you've tried?"
// "Can you identify any patterns in the mistakes you made?"



// 5. Follow-up Prompts (10-15)
// After receiving an answer from the student, these prompts continue the dialogue based on the student's responses, ensuring that the conversation progresses logically.

// Example Prompts:
// "If your current algorithm has a time complexity of O(n^2), how could you optimize it?"
// "What happens if the input array is already sorted? Can you think of an algorithm that performs better in that case?"
// "You mentioned recursion—how would that impact the memory usage in your implementation?"



// 6. Hints/Guiding Prompts (10-12)
// These prompts offer subtle hints to guide the student toward the right answer without directly solving the problem for them.

// Example Prompts:
// "What do you think would happen if you used a divide-and-conquer strategy?"
// "What role does pivot selection play in Quick Sort's efficiency?"
// "Have you considered the worst-case scenario for this algorithm?"



// 7. Challenge Prompts (3-5)
// Once the student has a good understanding, you can challenge them to tackle a more complex or advanced scenario.

// Example Prompts:
// "Can you modify your Merge Sort implementation to handle a linked list instead of an array?"
// "What if you wanted to sort in descending order? How would you modify your current algorithm?"
// "How would you optimize this for real-time applications with constantly changing data?"



// 8. Reinforcement Prompts (5-7)
// These prompts help reinforce key concepts after the student has arrived at the correct solution.

// Example Prompts:
// "Why is it important to understand the time complexity of sorting algorithms?"
// "How does understanding algorithm efficiency help you in real-world applications?"
// "What is the main takeaway from this lesson on sorting?"
// Total Number of Prompts
// Diagnostic Prompts: 5-7
// Probing Prompts: 10-12
// Clarification Prompts: 5-7
// Reflective Prompts: 5-7
// Follow-up Prompts: 10-15
// Hints/Guiding Prompts: 10-12
// Challenge Prompts: 3-5
// Reinforcement Prompts: 5-7
// Approximate Total: 53-72 Prompts
// This range allows for flexible, dynamic conversation flows. The prompts can be tailored based on the subtopic of Data Structures and Algorithms you focus on (e.g., sorting algorithms).

// promptsExample.js



const probingPrompts = [
  {
    "input": "How does MergeSort work?",
    "output": "What do you think happens when the list is divided? How does that affect how the elements are sorted later?"
  },
  {
    "input": "I think my algorithm is inefficient.",
    "output": "What specific part of the algorithm do you think takes the most time? Is there a step you could optimize?"
  },
  {
    "input": "Why does BubbleSort seem so slow?",
    "output": "What can you say about the number of comparisons BubbleSort makes compared to other algorithms like QuickSort or MergeSort?"
  },
  {
    "input": "How can I make QuickSort faster?",
    "output": "What do you think would happen if you changed the way the pivot is chosen? Could it impact the performance?"
  },
  {
    "input": "Why do some sorting algorithms use more memory?",
    "output": "Have you considered how algorithms like MergeSort divide data and store additional arrays? How does that impact memory usage?"
  },
  {
    "input": "Why does my test case time out on larger inputs?",
    "output": "What difference do you notice between the smaller test cases that pass and the larger ones that fail?"
  },
  {
    "input": "Why is QuickSort faster than BubbleSort?",
    "output": "What's different about how these two algorithms handle comparisons and swaps?"
  },
  {
    "input": "What's the point of a stable sorting algorithm?",
    "output": "In what situations do you think keeping the relative order of equal elements would be important?"
  },
  {
    "input": "Why use MergeSort when QuickSort is faster?",
    "output": "What can you say about the worst-case time complexities of both algorithms? How does that affect performance?"
  },
  {
    "input": "Why is insertion sort faster for small datasets?",
    "output": "How does the number of operations in Insertion Sort change with the size of the dataset?"
  },
  {
    "input": "How does the choice of pivot in QuickSort impact its performance?",
    "output": "What do you think happens if you pick the first element versus a random element as the pivot?"
  },
  {
    "input": "Why do people use heap sort instead of merge sort?",
    "output": "What can you say about the space requirements of HeapSort compared to MergeSort?"
  },
  {
    "input": "When should I use a hybrid sorting algorithm?",
    "output": "What would you expect to happen if you combined Insertion Sort and MergeSort for different input sizes?"
  }
]

const followUpPrompts = [
  {
    input: "I am using bubble sort algorithm",
    output: "What do you think is the time complexity of bubble sort? Can you optimize it?",
  },
  {
    input: "The input seems to be nearly sorted",
    output: "Since the input is already nearly sorted, can you think of an algorithm that performs better in this case?",
  },
  {
    input: "I used merge sort to solve the problem.",
    output: "Great! Can you explain why merge sort is more efficient than bubble sort for large inputs?",
  },
  {
    input: "I chose quicksort because it's faster.",
    output: "Can you explain what factors might cause quicksort to perform worse than expected?",
  },
  {
    input: "I fixed the issue by using a more efficient sorting algorithm.",
    output: "What kind of input size would make your new algorithm perform significantly better than your previous choice?",
  },
  {
    input: "The test case still times out even with quicksort.",
    output: "What do you think could be causing this timeout? Could it be related to your pivot selection strategy?",
  },
  {
    input: "I'm getting incorrect results when sorting large inputs.",
    output: "Have you considered how your algorithm handles edge cases like repeated elements or very large numbers?",
  },
  {
    input: "I think my code works, but it's still slow.",
    output: "Can you walk me through the steps your code takes on larger inputs? Do you notice any potential bottlenecks?",
  }
]

const challengePrompts = [
  {
    input: "I have understood the merge sort algorithm and can implement it.",
    output: "Can you modify your Merge Sort implementation to handle a linked list instead of an array?",
  },
  {
    input: "I can easily perform the bubble sort now",
    output: "What if you wanted to sort in descending order? How would you modify your current algorithm?",
  },
  {
    input: "I understand how to implement quicksort now.",
    output: "What if you had a dataset where the majority of elements are the same? How would you adjust your implementation?",
  },
  {
    input: "I'm comfortable using merge sort for sorting arrays.",
    output: "Can you implement a parallel version of merge sort to take advantage of multi-core processors?",
  },
  {
    input: "I've optimized my algorithm to handle large datasets.",
    output: "What would change in your approach if you had to sort data that cannot fit in memory (external sorting)?",
  },
  {
    input: "I'm confident with insertion sort.",
    output: "How would you modify your implementation to handle data that is continuously being inserted (online sorting)?",
  },
  {
    input: "I've solved all the test cases using quicksort.",
    output: "Can you modify your implementation to use randomized pivot selection and compare it to deterministic pivot selection?",
  },
  {
    input: "I understand the concept of sorting algorithms.",
    output: "Can you implement a hybrid sorting algorithm that switches from quicksort to insertion sort when the subarray size is small?",
  }
]

const guidingPrompts = [
  {
    input: "I am implementing bubble sort, but I still am getting time limit exceeded",
    output: "Can it be possible there might be other algorithms that can do better? What do you think would happen if you used a divide-and-conquer strategy?",
  },
  {
    input: "I am using insertion sort which should be able to solve the problem.",
    output: "Have you considered the worst-case scenario for this algorithm?",
  },
  {
    input: "I'm using quicksort but it's still slow.",
    output: "Could the choice of pivot be affecting the efficiency of your quicksort? How could you choose a better pivot?",
  },
  {
    input: "I'm using merge sort but I don't understand why it's faster.",
    output: "Can you recall how merge sort divides and conquers the problem? How does that help with large inputs?",
  },
  {
    input: "I'm still not sure why my algorithm is slower with larger datasets.",
    output: "Have you thought about the space complexity of your algorithm? Could memory usage be slowing things down?",
  },
  {
    input: "I fixed the time complexity but the program still lags with huge data.",
    output: "How do you think the number of recursive calls in your algorithm affects the overall performance?",
  },
  {
    input: "I'm not sure how to further optimize the time complexity.",
    output: "Can you think of any improvements in terms of data structure that might speed up the process?",
  },
  {
    input: "I solved the problem, but my solution is not elegant.",
    output: "Have you considered refining your code? How could you reduce redundancy in your current solution?",
  }
]

const reinforcementPrompts = [
  {
    input: "Okay so quicksort works by picking an element as a pivot and partitioning the given array around the picked pivot by placing the pivot in its correct position in the sorted array.",
    output: "How can the understanding of quick sort algorithm help you in real-world applications? Can you think of 5 examples?",
  },
  {
    input: "Ohh so I understand why insertion sort has more time complexity than quick sort",
    output: "Why is it important to understand the time complexity of sorting algorithms?",
  },
  {
    input: "I finally got the time complexity of merge sort!",
    output: "Great! Can you now describe the best-case and worst-case scenarios for this algorithm?",
  },
  {
    input: "I optimized the sorting algorithm and it works faster now.",
    output: "What did you learn from this experience? How would you approach optimizing algorithms in the future?",
  },
  {
    input: "I can now sort large datasets efficiently.",
    output: "Excellent! Can you explain the trade-offs between time complexity and space complexity in your chosen sorting algorithm?",
  },
  {
    input: "I finally understand why quicksort can be better than merge sort in some cases.",
    output: "How do factors like average-case vs worst-case performance affect your choice of algorithms in practice?",
  },
  {
    input: "I'm happy with how quicksort performed.",
    output: "Why is it important to think about the choice of sorting algorithm based on the characteristics of your data?",
  },
  {
    input: "I now know when to use insertion sort and when to use quicksort.",
    output: "Can you think of other situations where algorithm selection plays a critical role in problem-solving?",
  }
]

const diagnosticPrompts = [
  {
    "input": "Why is my sorting algorithm slower on large inputs?",
    "output": "What do you think might be the cause of the slowdown? Could it be related to the time complexity of your algorithm?"
  },
  {
    "input": "Which sorting algorithm should I use for my project?",
    "output": "What kind of data are you working with, and what's more important for your project—speed or memory efficiency?"
  },
  {
    "input": "My sorting code works fine for small arrays, but it crashes with larger ones.",
    "output": "How does your algorithm's time complexity scale with the size of the input?"
  },
  {
    "input": "Is QuickSort better than MergeSort?",
    "output": "In what ways are you comparing them—are you looking at speed, memory usage, or the nature of the input data?"
  },
  {
    "input": "Why does my algorithm fail when all the elements are the same?",
    "output": "Have you considered how your algorithm handles cases where the data has little or no variation?"
  },
  {
    "input": "Why does MergeSort use so much memory?",
    "output": "What is MergeSort doing with the data in each step? How does it divide and store the data, and how could that increase memory usage?"
  },
  {
    "input": "What's wrong with my sorting code? It works for some cases but not others.",
    "output": "Can you describe the test cases that pass and those that fail? Are there any patterns or differences between them?"
  },
  {
    "input": "My algorithm seems to run infinitely on certain inputs.",
    "output": "What type of input causes the infinite loop? Could there be an issue with how you handle the base case or recursive calls?"
  }
]

const clarificationPrompts = [
  {
    "input": "I think MergeSort is inefficient.",
    "output": "Could you clarify what you mean by inefficient? Are you referring to time, memory usage, or something else?"
  },
  {
    "input": "My sorting algorithm works most of the time.",
    "output": "Can you be more specific about the cases where it doesn't work? What do those cases have in common?"
  },
  {
    "input": "I'm using QuickSort for all my cases.",
    "output": "What do you mean by 'all cases'? Are there any specific data characteristics you're considering, like sorted or reversed inputs?"
  },
  {
    "input": "My code is slow with large datasets.",
    "output": "When you say 'slow', are you referring to time complexity or the actual time taken to run the program?"
  },
  {
    "input": "I understand how time complexity works.",
    "output": "Can you explain what time complexity means for different parts of your algorithm?"
  },
  {
    "input": "Why does MergeSort split the list?",
    "output": "What do you think happens to the elements after they are split? How does that affect the sorting process?"
  },
  {
    "input": "My algorithm crashes with large inputs.",
    "output": "When you say 'crashes,' are you referring to memory overflow, infinite loops, or some other issue?"
  },
  {
    "input": "I used an optimized sorting algorithm.",
    "output": "Could you clarify what optimization techniques you applied, and how they improved the algorithm?"
  }
]

const reflectivePrompts=[
  {
    "input": "I think QuickSort is the best algorithm.",
    "output": "What makes you believe QuickSort is the best? Have you considered other sorting algorithms and their specific use cases?"
  },
  {
    "input": "I've fixed the issue with my sorting algorithm.",
    "output": "How did you approach solving the issue? What steps led you to the solution?"
  },
  {
    "input": "I'm not sure which sorting algorithm to use.",
    "output": "Looking back, what criteria do you think are most important for selecting a sorting algorithm in your case?"
  },
  {
    "input": "I've tried optimizing my code, but it's still slow.",
    "output": "What optimizations have you already applied? Is there anything about the algorithm's structure that might be the limiting factor?"
  },
  {
    "input": "I don't understand why this sorting algorithm works better on smaller datasets.",
    "output": "Can you reflect on the specific behavior of the algorithm for smaller datasets? What's different in its handling of fewer elements?"
  },
  {
    "input": "I thought MergeSort would be faster than QuickSort, but it wasn't.",
    "output": "What might have caused MergeSort to be slower in this case? Did you consider the effect of space complexity or input characteristics?"
  },
  {
    "input": "I've been using the same sorting algorithm for all inputs.",
    "output": "Looking back, how would you evaluate if your chosen sorting algorithm is the best fit for all data types?"
  },
  {
    "input": "I'm trying to make my sorting algorithm more efficient.",
    "output": "Reflecting on your current implementation, what is the bottleneck in your sorting process, and how can it be optimized?"
  }
]

const allPrompts = [
  ...followUpPrompts,
  ...challengePrompts,
  ...guidingPrompts,
  ...reinforcementPrompts,
  ...probingPrompts,
  ...diagnosticPrompts,
  ...reflectivePrompts,
  ...clarificationPrompts,
];

module.exports = { allPrompts };
