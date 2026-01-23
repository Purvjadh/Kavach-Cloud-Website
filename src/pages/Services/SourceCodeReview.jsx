import { Code, ShieldCheck, SearchCheck, Bug } from "lucide-react";

export default function SourceCodeReview() {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Page Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent mb-6">
            Secure Source Code Review Services
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            <strong>Kavach Cloud</strong> provides professional <strong>source code review services</strong> to identify security vulnerabilities, coding flaws, and insecure development practices before they reach production. Our expert security analysts perform deep <strong>static application security testing (SAST)</strong> to ensure your applications are secure, compliant, and resilient against modern cyber threats.
          </p>
        </div>

        {/* Main Content Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          
          <div className="space-y-6 text-gray-700 text-base leading-relaxed">
            <p>
              Is your application code truly secure? At <strong>Kavach Cloud</strong>, our <strong>secure code review services</strong> help organizations detect vulnerabilities such as <strong>SQL injection</strong>, <strong>cross-site scripting (XSS)</strong>, <strong>authentication flaws</strong>, <strong>authorization bypasses</strong>, and insecure data handling practices directly within source code.
            </p>

            <p>
              Our team performs manual and automated <strong>static code analysis</strong> to examine application logic, security controls, data flows, and third-party libraries. We follow industry standards including <strong>OWASP Top 10</strong>, <strong>CWE</strong>, and <strong>secure coding best practices</strong> to identify risks early in the development lifecycle.
            </p>

            <p>
              We review source code across multiple technologies including <strong>web applications</strong>, <strong>mobile apps</strong>, <strong>APIs</strong>, and <strong>backend services</strong>. Our assessments uncover hidden security gaps that automated scanners often miss, ensuring stronger protection against real-world attacks.
            </p>

            <p>
              Our <strong>secure development lifecycle (SDLC)</strong> approach helps startups and enterprises integrate security into DevOps pipelines. We provide <strong>remediation guidance</strong>, secure coding recommendations, and developer-friendly reports to improve your team’s coding maturity.
            </p>

            <p>
              With <strong>Kavach Cloud</strong>, you receive actionable <strong>source code review reports</strong> containing vulnerability findings, risk severity ratings, proof-of-concept examples, and step-by-step mitigation guidance to strengthen your application security posture.
            </p>

            <p>
              Don’t let insecure code become your weakest link. Secure your applications with professional <strong>source code security reviews</strong> that protect your business from costly breaches and compliance risks.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center p-12 sticky top-24 h-fit">
            <div className="text-center text-white">
              <Code className="w-40 h-40 mx-auto opacity-90" />
              <p className="text-xl font-semibold mt-6">Secure Code Review</p>
              <p className="text-sm mt-2 opacity-80">Find Vulnerabilities Before Hackers Do</p>
            </div>
          </div>

        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <SearchCheck className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Static Code Analysis
            </h3>
            <p className="text-gray-600">
              In-depth <strong>static application security testing (SAST)</strong> to detect security flaws, insecure functions, and vulnerable coding patterns in your application source code.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Bug className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Vulnerability Identification
            </h3>
            <p className="text-gray-600">
              Identification of <strong>OWASP Top 10</strong> vulnerabilities, business logic flaws, insecure authentication flows, and data exposure risks within your codebase.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Secure Development Guidance
            </h3>
            <p className="text-gray-600">
              Detailed remediation guidance and <strong>secure coding best practices</strong> to help developers fix vulnerabilities and build long-term secure coding maturity.
            </p>
          </div>

        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Build Secure Applications From the Start
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto opacity-90">
            Partner with <strong>Kavach Cloud</strong> for professional <strong>source code review</strong> and <strong>secure application assessment services</strong> that protect your software from vulnerabilities and security breaches.
          </p>

          <button className="bg-white text-green-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg">
            Request Secure Code Review
          </button>
        </div>

      </div>
    </section>
  );
}
