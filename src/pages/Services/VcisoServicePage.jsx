import { Shield, Users, TrendingUp, Award } from 'lucide-react';

export default function VcisoServicePage() {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Page Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            vCISO Services - Virtual Chief Information Security Officer
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            <strong>Kavach Cloud</strong> provides professional <strong>vCISO services</strong> and <strong>Virtual CISO solutions</strong> to help startups and businesses establish strategic security leadership without the cost of a full-time executive. Our expert team specializes in <strong>information security governance</strong>, <strong>security strategy development</strong>, and <strong>compliance management</strong> to protect your digital infrastructure.
          </p>
        </div>

        {/* Main Content Section - Text on Left, Image on Right */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          
          {/* Left Side - Text Content */}
          <div className="space-y-6 text-gray-700 text-base leading-relaxed">
            <p>
              Are you struggling to establish comprehensive security governance or meet compliance requirements without a dedicated security executive? At <strong>Kavach Cloud</strong>, we offer <strong>professional vCISO services in India</strong> that can help take your security leadership to the next level. Our <strong>Virtual Chief Information Security Officer services</strong> and <strong>fractional CISO solutions</strong> help organizations develop security strategies, manage risk programs, and achieve regulatory compliance.
            </p>

            <p>
              Our team of <strong>experienced security executives</strong> uses industry-leading frameworks like NIST, ISO 27001, and CIS Controls to develop comprehensive security programs. We specialize in <strong>security roadmap development</strong>, <strong>risk management frameworks</strong>, <strong>security policy creation</strong>, and <strong>board-level security reporting</strong>. We understand that effective security leadership is not just about technology, it's about aligning security with business objectives and building a culture of security awareness.
            </p>

            <p>
              We take a systematic approach to <strong>virtual CISO consulting</strong>, starting with a deep understanding of your business objectives, regulatory requirements, and risk tolerance. This enables us to deliver comprehensive security leadership that reflects your organization's unique compliance needs and strategic goals.
            </p>

            <p>
              <strong>Kavach Cloud</strong> conducts detailed <strong>security posture assessments</strong>, <strong>compliance gap analysis</strong>, and <strong>security program maturity evaluation</strong> to help enterprises establish robust security governance. Our services include <strong>vendor risk management</strong> for third-party relationships, <strong>incident response planning</strong> for security events, and <strong>security awareness training programs</strong> for employee education.
            </p>

            <p>
              We also specialize in <strong>regulatory compliance management</strong> and <strong>security audit preparation</strong> to ensure your organization meets industry standards. From <strong>GDPR compliance</strong> to <strong>SOC 2 certification support</strong>, we ensure your security program addresses all regulatory requirements and business continuity needs.
            </p>

            <p>
              Our <strong>vCISO advisory services</strong> deliver detailed documentation including <strong>security policies and procedures</strong>, <strong>risk registers</strong>, <strong>security metrics dashboards</strong>, and <strong>executive security reports</strong> to enhance your organization's <strong>security governance capabilities</strong> and <strong>compliance posture</strong> strategies.
            </p>

            <p>
              Don't settle for reactive security measures. Let <strong>Kavach Cloud</strong> help you establish strategic security leadership through professional vCISO services that protect your business from cyber threats and ensure regulatory compliance.
            </p>
          </div>

          {/* Right Side - Image/Placeholder */}
          <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center p-12 sticky top-24 h-fit">
            <div className="text-center text-white">
              <Shield className="w-40 h-40 mx-auto opacity-90" />
              <p className="text-xl font-semibold mt-6">Virtual CISO Services</p>
              <p className="text-sm mt-2 opacity-80">Strategic Security Leadership</p>
            </div>
          </div>

        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Security Governance & Strategy
            </h3>
            <p className="text-gray-600">
              Comprehensive <strong>security program development</strong> aligned with business objectives using frameworks like ISO 27001, NIST CSF, and CIS Controls. We create <strong>security roadmaps</strong>, establish governance structures, and provide <strong>executive security leadership</strong> for organizations.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Compliance & Risk Management
            </h3>
            <p className="text-gray-600">
              Expert guidance for <strong>regulatory compliance</strong> including GDPR, SOC 2, ISO 27001, HIPAA, and PCI DSS. We conduct <strong>compliance gap assessments</strong>, develop <strong>risk management programs</strong>, and prepare organizations for security audits and certifications.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Security Program Management
            </h3>
            <p className="text-gray-600">
              End-to-end <strong>security operations oversight</strong> including <strong>vendor risk assessment</strong>, <strong>incident response planning</strong>, <strong>security awareness training</strong>, and <strong>security metrics reporting</strong> to board and executive leadership for informed decision-making.
            </p>
          </div>

        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Elevate Your Security Posture with Expert vCISO Leadership
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto opacity-90">
            Partner with <strong>Kavach Cloud</strong> for comprehensive <strong>Virtual CISO services</strong>, <strong>security governance</strong>, and <strong>compliance management</strong> that help startups and businesses establish strategic security programs and meet regulatory requirements. Contact us today for professional vCISO services in India.
          </p>

          <button className="bg-white text-purple-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg">
            Request vCISO Consultation
          </button>
        </div>

      </div>
    </section>
  );
}