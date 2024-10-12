import React from 'react';
import FeatureCard from './FeatureCard';

const features = [
  {
    title: 'Socratic Teacher',
    text: 'Engage in thought-provoking conversations and learn through questioning. The Socratic Teacher challenges you to think critically, guiding you to uncover insights in data structures, algorithms, and more.'
  },
  {
    title: 'Coding Assistant',
    text: 'Boost your productivity with real-time coding help. Whether you\'re debugging, optimizing, or learning new concepts, the assistant is here to make your development journey smoother.'
  },
  {
    title: 'Gamified Learning',
    text: 'Turn learning into an adventure. Master complex concepts through fun challenges and interactive games, keeping your motivation high as you progress through levels of knowledge.'
  },
  {
    title: 'Explore Algorithms',
    text: 'Dive deep into the world of algorithms. Learn how they work, where to apply them, and practice coding challenges that help you master fundamental concepts at your own pace.'
  },
  {
    title: 'Resource Suggestion',
    text: 'Get tailored suggestions for articles, tutorials, and videos based on your learning needs. Whether you\'re a beginner or an advanced coder, you\'ll have the best resources at your fingertips.'
  },
  {
    title: 'Discover',
    text: 'Uncover new knowledge and tools that enhance your coding journey. From the latest tech trends to hidden gems in computer science, there\'s always something exciting to explore.'
  }
];

function FeatureCardHolder() {
  return (
    <div className='w-full flex flex-wrap justify-between gap-3'>
      {features.map((feature, index) => (
        <FeatureCard key={index} title={feature.title} text={feature.text} />
      ))}
    </div>
  );
}

export default FeatureCardHolder;
