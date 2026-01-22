export default function ReverseEngineering() {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-20">

        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600">
            Advanced Reverse Engineering
          </h1>
          <p className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto">
            Kavach Cloud offers expert reverse engineering services to analyze
            software binaries, uncover hidden behaviors, and identify security
            weaknesses. We help organizations understand complex applications
            to improve resilience against modern cyber threats.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800">
              Binary & Code Analysis
            </h3>
            <p className="mt-3 text-gray-600">
              Deep inspection of compiled applications to understand internal
              logic and identify potential vulnerabilities.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800">
              Threat Behavior Discovery
            </h3>
            <p className="mt-3 text-gray-600">
              Detect hidden or malicious behaviors inside suspicious software
              using controlled analysis environments.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800">
              Security Hardening Support
            </h3>
            <p className="mt-3 text-gray-600">
              Strengthen application security by understanding attack surfaces
              and improving defensive strategies.
            </p>
          </div>

        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-gray-800">
            Need expert reverse engineering support?
          </h2>
          <p className="mt-3 text-gray-600">
            Contact our cybersecurity specialists for a confidential consultation.
          </p>

          <button className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
            Request Consultation
          </button>
        </div>

      </div>
    </section>
  );
}
