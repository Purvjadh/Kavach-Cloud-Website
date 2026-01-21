import { Link } from 'react-router-dom';


export default function NotFoundPage() {
  return (
    <div>
   
      
      <section className="py-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-sky-500 mb-4">404</h1>
          <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link 
            to="/" 
            className="bg-sky-500 text-white px-8 py-3 rounded-lg hover:bg-sky-600 inline-block"
          >
            Go Home
          </Link>
        </div>
      </section>
      
      
    </div>
  );
}