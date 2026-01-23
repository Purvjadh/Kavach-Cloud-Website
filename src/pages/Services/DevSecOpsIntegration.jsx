import { GitBranch, ShieldCheck, Code, Lock } from "lucide-react";

export default function DevSecOpsIntegration() {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Page Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
            DevSecOps Integration Services
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            <strong>Kavach Cloud</strong> provides professional 
            <strong> DevSecOps integration services</strong> to embed 
            security directly into your software development lifecycle. 
            We help organizations automate security testing, improve code quality, 
            and deliver secure applications at speed.
          </p>
        </div>

        {/* Main Content Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">

          <div className="space-y-6 text-gray-700 text-base leading-relaxed">
            <p>
              Security should not slow down development. At 
              <strong> Kavach Cloud</strong>, our 
              <strong> DevSecOps integration</strong> ensures that security 
              is built into every stage of your CI/CD pipeline — from 
              code commit to production deployment.
            </p>

            <p>
              We help organizations implement 
              <strong> automated security testing</strong>, 
              <strong> static and dynamic application security testing (SAST/DAST)</strong>, 
              <strong> dependency scanning</strong>, and 
              <strong> container security</strong> to detect vulnerabilities early.
            </p>

            <p>
              Our experts integrate industry-leading tools into 
              <strong> CI/CD pipelines</strong>, enabling continuous security 
              monitoring and real-time vulnerability management without 
              disrupting developer workflows.
            </p>

            <p>
              Services include 
              <strong> secure pipeline architecture design</strong>, 
              <strong> infrastructure-as-code security</strong>, 
              <strong> secrets management</strong>, and 
              <strong> cloud security automation</strong>.
            </p>

            <p>
              With <strong>Kavach Cloud</strong>, you receive a 
              <strong> DevSecOps maturity report</strong>, 
              integration roadmap, and 
              <strong> hands-on implementation support</strong> 
              to achieve continuous secure delivery.
            </p>

            <p>
              Deliver faster. Ship safer. Build security into your DevOps culture 
              with <strong>Kavach Cloud DevSecOps Integration</strong>.
            </p>
          </div>

          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center p-12 sticky top-24 h-fit">
            <div className="text-center text-white">
              <GitBranch className="w-40 h-40 mx-auto opacity-90" />
              <p className="text-xl font-semibold mt-6">DevSecOps</p>
              <p className="text-sm mt-2 opacity-80">Secure CI/CD Pipelines</p>
            </div>
          </div>

        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <Code className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Automated Security Testing
            </h3>
            <p className="text-gray-600">
              Integrate <strong>SAST</strong>, <strong>DAST</strong>, and 
              <strong> dependency scanning</strong> directly into pipelines 
              to catch vulnerabilities early.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Secure Pipeline Architecture
            </h3>
            <p className="text-gray-600">
              Design and implement 
              <strong>secure CI/CD pipelines</strong> with 
              continuous monitoring and compliance enforcement.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <Lock className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Secrets & Cloud Security
            </h3>
            <p className="text-gray-600">
              Implement 
              <strong>secure secrets management</strong>, 
              <strong>container security</strong>, and 
              <strong>cloud workload protection</strong> 
              across DevOps environments.
            </p>
          </div>

        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Integrate Security Into Every Build
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto opacity-90">
            Partner with <strong>Kavach Cloud</strong> for 
            <strong> DevSecOps Integration</strong> that enables 
            fast, secure, and compliant software delivery.
          </p>

          <button className="bg-white text-indigo-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg">
            Request DevSecOps Consultation
          </button>
        </div>

      </div>
    </section>
  );
}
