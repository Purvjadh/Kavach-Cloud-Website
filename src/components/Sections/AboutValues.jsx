const AboutValues = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Kavach Cloud
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <h3 className="text-xl font-semibold mb-3">🔐 Security First</h3>
            <p className="text-gray-600">
              Enterprise-grade encryption to protect your data at every layer.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <h3 className="text-xl font-semibold mb-3">⚡ High Performance</h3>
            <p className="text-gray-600">
              Fast, reliable, and scalable cloud solutions built for growth.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <h3 className="text-xl font-semibold mb-3">🤝 Trusted Platform</h3>
            <p className="text-gray-600">
              Trusted by teams to manage data securely and efficiently.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
