import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';


export default function BlogCard({ slug, image, title, excerpt, readTime, date }) {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500 flex items-center gap-2">
            <Clock size={16} />
            {readTime}
          </span>
          
          <Link 
            to={`/blog/${slug}`}
            className="text-sky-500 hover:underline flex items-center gap-2"
          >
            Read More <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}