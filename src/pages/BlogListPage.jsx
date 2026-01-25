import { Link } from 'react-router-dom';
import BlogCard from '../components/UI/BlogCard';
import { blogs } from '../data/blogs';

// Import background image
import blogHeroBg from "../assets/images/blog-bg1.jpeg";

export default function BlogListPage() {
  return (
    <div>

      {/* Hero */}
      <section
        className="relative py-28 bg-cover bg-center bg-no-repeat text-white"
        style={{ backgroundImage: `url(${blogHeroBg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20"></div>

        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
            Our Blog
          </h1>
          <p className="text-xl opacity-90">
            Insights, tips, and industry news
          </p>
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
