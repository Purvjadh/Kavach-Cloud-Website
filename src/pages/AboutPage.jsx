

export default function AboutPage() {
  return (
    <div>
     
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r  from-sky-400 via-blue-500 to-cyan-400 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">About Kavach Cloud</h1>
          <p className="text-xl">Securing your data since 2025</p>
        </div>
      </section>
      
      {/* About Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Kavach Cloud was founded with a simple mission: make cloud storage secure, simple, and accessible for everyone. In a world where data is growing exponentially and cyber threats are constantly evolving, we saw the need for a platform that prioritizes both security and ease of use. What started as an idea among tech enthusiasts has grown into a solution designed to empower individuals and businesses to store, manage, and protect their digital assets with confidence.
            </p>
            
            <h2 className="text-3xl font-bold mb-6 mt-12">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              We believe data security shouldn’t be complicated. Our mission is to provide a reliable, user-friendly, and highly secure cloud environment where users can store their information without fear of breaches or data loss. By combining cutting-edge encryption, intuitive design, and scalable infrastructure, Kavach Cloud aims to redefine how people experience cloud storage — safe, seamless, and smart.
            </p>
            
            {/* <h2 className="text-3xl font-bold mb-6 mt-12">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              team member cards
              <div className="text-center">
                <img src="/assets/images/team-1.jpg" className="w-32 h-32 rounded-full mx-auto mb-4" alt="Team member" />
                <h3 className="font-bold">John Doe</h3>
                <p className="text-gray-600">CEO & Founder</p>
              </div>
             team members
            </div> */}
          </div>
        </div>
      </section>
      
     
    </div>
  );
}