import { ClipboardCheck, Shield, FileCheck, Lock } from "lucide-react";

export default function ComplianceReadiness() {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Page Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent mb-6">
            Compliance Readiness Services
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            <strong>Kavach Cloud</strong> provides professional <strong>compliance readiness services</strong> to help organizations prepare for security audits, regulatory requirements, and industry standards. We ensure your business meets compliance obligations while strengthening overall cybersecurity posture.
          </p>
        </div>

        {/* Main Content Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">

          <div className="space-y-6 text-gray-700 text-base leading-relaxed">
            <p>
              Meeting compliance requirements can be complex. At <strong>Kavach Cloud</strong>, our <strong>compliance readiness assessments</strong> help organizations identify security gaps, missing controls, and documentation issues before formal audits.
            </p>

            <p>
              We assist with readiness for major frameworks including 
              <strong> ISO 27001</strong>, <strong>SOC 2</strong>, <strong>PCI-DSS</strong>, 
              <strong> HIPAA</strong>, and <strong>GDPR</strong>. 
              Our experts map your current security posture against required controls.
            </p>

            <p>
              Our services include <strong>policy and procedure review</strong>, 
              <strong>risk assessment</strong>, <strong>control gap analysis</strong>, 
              and <strong>security documentation support</strong> to ensure audit success.
            </p>

            <p>
              We also provide <strong>security awareness guidance</strong>, 
              <strong>incident response planning</strong>, and 
              <strong>continuous compliance strategy</strong> to help maintain long-term regulatory alignment.
            </p>

            <p>
              With <strong>Kavach Cloud</strong>, you receive a detailed 
              <strong>compliance readiness report</strong> containing gap findings, 
              remediation steps, and audit preparation guidance.
            </p>

            <p>
              Avoid last-minute audit stress. Partner with 
              <strong> Kavach Cloud</strong> to achieve smooth, confident, and successful compliance readiness.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center p-12 sticky top-24 h-fit">
            <div className="text-center text-white">
              <ClipboardCheck className="w-40 h-40 mx-auto opacity-90" />
              <p className="text-xl font-semibold mt-6">Compliance Readiness</p>
              <p className="text-sm mt-2 opacity-80">Prepare • Align • Succeed</p>
            </div>
          </div>

        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <FileCheck className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Compliance Gap Assessment
            </h3>
            <p className="text-gray-600">
              Identify missing <strong>security controls</strong>, 
              <strong>policy gaps</strong>, and <strong>documentation issues</strong> 
              required for regulatory compliance.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Security Control Alignment
            </h3>
            <p className="text-gray-600">
              Map existing security practices to 
              <strong>ISO</strong>, <strong>SOC2</strong>, <strong>PCI-DSS</strong>, 
              and other compliance frameworks.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <Lock className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Audit Preparation Support
            </h3>
            <p className="text-gray-600">
              Get <strong>audit-ready documentation</strong>, 
              remediation guidance, and expert support 
              to pass compliance audits confidently.
            </p>
          </div>

        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Get Audit-Ready With Confidence
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto opacity-90">
            Partner with <strong>Kavach Cloud</strong> for 
            <strong> compliance readiness services</strong> that simplify audits, 
            strengthen security posture, and ensure regulatory success.
          </p>

          <button className="bg-white text-green-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg">
            Request Compliance Consultation
          </button>
        </div>

      </div>
    </section>
  );
}

