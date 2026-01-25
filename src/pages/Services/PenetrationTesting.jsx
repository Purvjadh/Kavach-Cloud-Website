import { Target, Shield, Search, Lock } from 'lucide-react';

export default function PenetrationTesting() {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Page Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent mb-6">
            Penetration Testing Services
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            <strong>Kavach Cloud</strong> delivers professional <strong>penetration testing services</strong> and <strong>ethical hacking solutions</strong> to help startups and businesses identify and fix security vulnerabilities before attackers exploit them. Our certified <strong>penetration testers</strong> conduct comprehensive <strong>security assessments</strong> to protect your web applications, networks, and infrastructure.
          </p>
        </div>

        {/* Main Content Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          
          <div className="space-y-6 text-gray-700 text-base leading-relaxed">
            <p>
              Are you concerned about security vulnerabilities in your web applications or network infrastructure? At <strong>Kavach Cloud</strong>, we offer <strong>professional penetration testing services in India</strong> that can help secure your business from cyber attacks. Our <strong>VAPT services</strong> (Vulnerability Assessment and Penetration Testing) help organizations discover security weaknesses and validate security controls through real-world attack simulations.
            </p>

            <p>
              Our team of <strong>certified ethical hackers</strong> and <strong>penetration testing experts</strong> uses industry-standard methodologies including <strong>OWASP Top 10</strong>, <strong>PTES</strong>, and <strong>OSSTMM</strong> to conduct thorough security assessments. We specialize in <strong>web application penetration testing</strong>, <strong>network penetration testing</strong>, <strong>API security testing</strong>, <strong>mobile app penetration testing</strong>, and <strong>cloud infrastructure testing</strong>.
            </p>

            <p>
              We take a methodical approach to <strong>penetration testing</strong>, starting with reconnaissance, vulnerability scanning, exploitation, and post-exploitation analysis. This enables us to provide detailed reports with proof-of-concept exploits and remediation guidance tailored to your organization's security requirements.
            </p>

            <p>
              <strong>Kavach Cloud</strong> conducts both <strong>black-box penetration testing</strong>, <strong>white-box penetration testing</strong>, and <strong>grey-box penetration testing</strong> based on your security assessment needs. Our services include testing for <strong>SQL injection</strong>, <strong>XSS (Cross-Site Scripting)</strong>, <strong>CSRF</strong>, <strong>authentication bypass</strong>, <strong>privilege escalation</strong>, and <strong>business logic flaws</strong>.
            </p>

            <p>
              We also provide <strong>external penetration testing</strong> and <strong>internal penetration testing</strong> to evaluate both perimeter defenses and insider threat scenarios. From <strong>network segmentation testing</strong> to <strong>wireless security assessments</strong>, we ensure comprehensive coverage of your attack surface.
            </p>

            <p>
              Our <strong>penetration testing reports</strong> deliver executive summaries, detailed vulnerability descriptions with <strong>CVSS scores</strong>, exploitation evidence, and actionable remediation steps to enhance your organization's <strong>security posture</strong> and ensure <strong>compliance readiness</strong> for standards like ISO 27001, PCI-DSS, and HIPAA.
            </p>

            <p>
              Don't wait for a breach to discover vulnerabilities. Let <strong>Kavach Cloud</strong> help you proactively identify and fix security weaknesses through professional penetration testing that protects your business and customer data.
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-600 to-yellow-600 rounded-2xl flex items-center justify-center p-12 sticky top-24 h-fit">
            <div className="text-center text-white">
              <Target className="w-40 h-40 mx-auto opacity-90" />
              <p className="text-xl font-semibold mt-6">Penetration Testing</p>
              <p className="text-sm mt-2 opacity-80">Offensive Security Assessment</p>
            </div>
          </div>

        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Web Application Penetration Testing
            </h3>
            <p className="text-gray-600">
              Comprehensive <strong>web app security testing</strong> including <strong>OWASP Top 10 vulnerabilities</strong>, SQL injection, XSS, authentication flaws, and business logic testing to secure your web applications against cyber attacks.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-yellow-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Network Penetration Testing
            </h3>
            <p className="text-gray-600">
              Advanced <strong>network security assessments</strong> including external and internal testing, firewall bypass, network segmentation validation, and lateral movement testing to identify infrastructure vulnerabilities.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <Search className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              API & Mobile App Testing
            </h3>
            <p className="text-gray-600">
              Specialized <strong>API security testing</strong> and <strong>mobile application penetration testing</strong> for iOS and Android apps, including insecure data storage, API authentication bypass, and reverse engineering analysis.
            </p>
          </div>

        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-orange-600 to-yellow-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Secure Your Business with Professional Penetration Testing
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto opacity-90">
            Partner with <strong>Kavach Cloud</strong> for comprehensive <strong>penetration testing</strong>, <strong>VAPT services</strong>, and <strong>security assessments</strong> that help startups and businesses identify vulnerabilities before attackers do. Contact us today for expert penetration testing services in India.
          </p>

          <button className="bg-white text-orange-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg">
            Request Penetration Testing Consultation
          </button>
        </div>

      </div>
    </section>
  );
}