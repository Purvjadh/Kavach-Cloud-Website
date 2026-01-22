import { Link } from 'react-router-dom';
import BlogCard from '../components/UI/BlogCard';
import { blogs } from '../data/blogs';

export default function BlogListPage() {
  return (
    <div>
      
      
      {/* Hero */}
      <section className="py-20 bg-gradient-to-r  from-sky-400 via-blue-500 to-cyan-400 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Blog</h1>
          <p className="text-xl">Insights, tips, and industry news</p>
        </div>
      </section>
      
      {/* Blog Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map(blog => (
              <div key={blog.id}>
                <BlogCard {...blog} />
              </div>
            ))}
          </div>
        </div>
      </section>
      
     
    </div>
  );
}