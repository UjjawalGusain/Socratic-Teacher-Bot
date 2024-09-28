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
// "What role does pivot selection play in Quick Sort’s efficiency?"
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

const diagnosticPrompts = [
  {
    input:
      "What is your understanding of the time complexity for sorting algorithms?",
    output:
      "The time complexity depends on the specific sorting algorithm. For example, Merge Sort has a time complexity of O(n log n), while Bubble Sort has a time complexity of O(n^2).",
  },
  {
    input: "Can you explain how Merge Sort works?",
    output:
      "Merge Sort is a divide-and-conquer algorithm that splits the array in half recursively, sorts each half, and then merges the sorted halves together.",
  },
  {
    input: "What are the differences between Quick Sort and Bubble Sort?",
    output:
      "Quick Sort is generally more efficient with an average time complexity of O(n log n), while Bubble Sort is slower with a time complexity of O(n^2). Quick Sort uses a pivot to partition the array, while Bubble Sort repeatedly swaps adjacent elements.",
  },
  {
    input: "How do you handle edge cases in sorting algorithms?",
    output:
      "Edge cases such as empty arrays, arrays with one element, or arrays with all identical elements can be handled by adding checks before sorting or ensuring the algorithm behaves correctly in these scenarios.",
  },
  {
    input:
      "What happens to the performance of your algorithm when the input size increases?",
    output:
      "As the input size increases, algorithms with lower time complexity (like O(n log n)) tend to perform better compared to those with higher time complexity (like O(n^2)).",
  },
  {
    input:
      "How does the time complexity of Merge Sort compare to Quick Sort for large datasets?",
    output:
      "Merge Sort has a guaranteed time complexity of O(n log n), while Quick Sort has an average time complexity of O(n log n) but may degrade to O(n^2) in the worst case.",
  },
  {
    input:
      "Is your algorithm stable? Can you think of any cases where stability might be important?",
    output:
      "Stability means that equal elements maintain their relative order after sorting. Stability is important in scenarios like sorting by multiple criteria, where maintaining the original order of equal elements is necessary.",
  },
  {
    input: "Why do you think this test case timed out while others passed?",
    output:
      "The test case might have a large input size or a particular structure that causes the algorithm to hit its worst-case performance.",
  },
];

module.exports = { diagnosticPrompts };
