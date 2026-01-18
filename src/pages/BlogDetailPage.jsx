// BlogDetailPage.jsx
// Copy this file to: src/pages/BlogDetailPage.jsx

import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { blogs } from '../data/blogs';

export default function BlogDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  // Find the blog post by slug
  const blog = blogs.find(b => b.slug === slug);

  // If blog not found, show 404-like message
  if (!blog) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link 
            to="/blog"
            className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  // Get related posts (exclude current post)
  const relatedPosts = blogs.filter(b => b.id !== blog.id).slice(0, 3);

 

  return (
    <div className="bg-gray-50">
      
      {/* Hero Section with Featured Image */}
      <section className="relative h-96 bg-gray-900 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={blog.image} 
            alt={blog.title}
            className="w-full h-full object-cover opacity-50"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentElement.style.background = 'linear-gradient(to bottom right, #9333ea, #2563eb)';
            }}
          />
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
        
        {/* Content */}
        <div className="container mx-auto px-4 h-full flex items-end pb-12 relative z-10">
          <div className="text-white max-w-4xl">
            {/* Back Button */}
            <button 
              onClick={() => navigate('/blog')}
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Blog
            </button>
            
            {/* Category Badge */}
            <div className="inline-block bg-purple-600 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              {blog.category}
            </div>
            
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {blog.title}
            </h1>
            
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-white/80">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {blog.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {blog.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {blog.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
           

            {/* Blog Content */}
            <article className="bg-white rounded-2xl p-8 md:p-12 shadow-md">
              
              {/* Excerpt */}
              <div className="text-xl text-gray-700 mb-8 pb-8 border-b border-gray-200 italic">
                {blog.excerpt}
              </div>

              {/* Main Content - Using dangerouslySetInnerHTML for HTML content */}
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />

              {/* Tags (if you want to add them later) */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex flex-wrap gap-2">
                  <span className="bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold">
                    Cloud Storage
                  </span>
                  <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
                    Security
                  </span>
                  <span className="bg-indigo-100 text-indigo-600 px-4 py-2 rounded-full text-sm font-semibold">
                    Best Practices
                  </span>
                </div>
              </div>

              {/* Author Info */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white text-2xl font-bold">
                    {blog.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900">
                      Written by {blog.author}
                    </h4>
                    <p className="text-gray-600">
                      Content Writer & Cloud Security Expert
                    </p>
                  </div>
                </div>
              </div>

            </article>

           

          </div>
        </div>
      </section>


    </div>
  );
}