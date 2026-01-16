import blog1 from '../assets/images/blog1.jpg';
import blog2 from '../assets/images/blog2.jpg';
import blog3 from '../assets/images/blog3.jpg';
export const blogs = [
  {
    id: 1,
    slug: 'how-to-secure-cloud-data',  // ← Add this
    title: 'How to Secure Your Cloud Data',
    excerpt: 'Learn the best practices for cloud security...',
    image: blog1,
    readTime: '5 min',
    date: 'Jan 15, 2026',
    author: 'John Doe',
    tags: ['Security', 'Cloud', 'Best Practices'],
    fullContent: 'Full blog content goes here...' // ← Add this
  },
  {
    id: 2,
    slug: 'choosing-right-cloud-storage',
    title: 'Choosing the Right Cloud Storage',
    excerpt: 'A comprehensive guide to selecting cloud storage...',
    image: blog2,
    readTime: '7 min',
    date: 'Jan 10, 2026',
    author: 'Jane Smith',
    tags: ['Cloud', 'Guide'],
    fullContent: 'Full blog content goes here...'
  },
   {
    id: 3,
    slug: 'choosing-right-cloud-storage',
    title: 'Choosing the Right Cloud Storage',
    excerpt: 'A comprehensive guide to selecting cloud storage...',
    image: blog3,
    readTime: '7 min',
    date: 'Jan 10, 2026',
    author: 'Jane Smith',
    tags: ['Cloud', 'Guide'],
    fullContent: 'Full blog content goes here...'
  },
  // ... more blogs
];