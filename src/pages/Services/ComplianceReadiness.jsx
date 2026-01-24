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
            <strong>Kavach Cloud</strong> delivers expert-driven 
            <strong> compliance readiness and audit preparation services</strong> 
            to help organizations meet regulatory obligations, industry standards, 
            and customer security expectations. We ensure your business is fully 
            prepared for audits while strengthening your overall cybersecurity posture.
          </p>
        </div>

        {/* Main Content Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">

          {/* Left Content */}
          <div className="space-y-6 text-gray-700 text-base leading-relaxed">

            <p>
              In today’s regulatory landscape, achieving and maintaining compliance 
              is essential for business credibility, customer trust, and operational continuity. 
              At <strong>Kavach Cloud</strong>, our <strong>compliance readiness assessments</strong> 
              help organizations identify control gaps, documentation deficiencies, 
              and security weaknesses before formal audits take place.
            </p>

            <p>
              Our compliance experts assist organizations in preparing for leading frameworks 
              including <strong>ISO 27001</strong>, <strong>SOC 2</strong>, 
              <strong>PCI-DSS</strong>, <strong>HIPAA</strong>, 
              <strong>GDPR</strong>, and other industry-specific regulations. 
              We map your current security posture against required controls 
              to highlight areas needing improvement.
            </p>

            <p>
              Our services include <strong>policy and procedure development</strong>, 
              <strong>risk and control gap analysis</strong>, 
              <strong>security documentation review</strong>, 
              <strong>asset and data classification guidance</strong>, and 
              <strong>vendor risk management support</strong> to build a strong compliance foundation.
            </p>

            <p>
              We also help design <strong>incident response plans</strong>, 
              <strong>business continuity strategies</strong>, 
              <strong>security awareness programs</strong>, and 
              <strong>continuous compliance monitoring models</strong> 
              that ensure long-term alignment with evolving regulatory requirements.
            </p>
            <p>
              Our compliance readiness services also include <strong>stakeholder alignment workshops</strong>, 
              <strong>security governance consulting</strong>, and <strong>executive reporting</strong> 
              to ensure leadership teams clearly understand compliance responsibilities, 
              risk ownership, and security investment priorities. By bridging the gap between 
              technical security controls and business objectives, we help organizations build 
              a compliance-driven culture that supports long-term resilience, customer trust, 
              and competitive advantage in security-conscious markets.
            </p>



            <p>
              After the engagement, you receive a comprehensive 
              <strong>compliance readiness report</strong> containing 
              detailed gap findings, prioritized remediation steps, 
              audit preparation checklists, and executive summaries 
              to simplify stakeholder and auditor communication.
            </p>

            <p>
              Avoid last-minute audit stress, costly penalties, and reputation risks. 
              Partner with <strong>Kavach Cloud</strong> to achieve smooth, confident, 
              and successful compliance readiness that strengthens security maturity 
              across your organization.
            </p>

          </div>

          {/* Right Card */}
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
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <FileCheck className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Compliance Gap Assessment
            </h3>
            <p className="text-gray-600">
              Identify missing <strong>security controls</strong>, 
              <strong>policy gaps</strong>, and <strong>documentation issues</strong> 
              required for regulatory and industry compliance.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Security Control Alignment
            </h3>
            <p className="text-gray-600">
              Map existing security practices to 
              <strong>ISO</strong>, <strong>SOC 2</strong>, <strong>PCI-DSS</strong>, 
              and other compliance frameworks to ensure full audit readiness.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Lock className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Audit Preparation Support
            </h3>
            <p className="text-gray-600">
              Get <strong>audit-ready documentation</strong>, 
              prioritized remediation guidance, and expert support 
              to confidently pass security and compliance audits.
            </p>
          </div>

        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-14 text-center text-white">
          
          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            Get Audit-Ready With Confidence
          </h2>

          <p className="text-base md:text-lg max-w-4xl mx-auto mb-5 opacity-95 leading-relaxed">
            Compliance failures can lead to financial penalties, loss of customer trust, 
            and business disruptions. Our expert-led 
            <strong> compliance readiness services</strong> help you identify gaps early, 
            implement required controls, and build strong security governance 
            that meets regulatory and customer expectations.
          </p>

          <button className="bg-white text-green-600 px-12 py-4 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg">
            Request Compliance Consultation
          </button>

        </div>

      </div>
    </section>
  );
}


