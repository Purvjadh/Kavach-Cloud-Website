import { Network, Shield, Search, Lock } from "lucide-react";

export default function NetworkSecurityAssessment() {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Page Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent mb-6">
            Network Security Assessment Services
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            <strong>Kavach Cloud</strong> provides professional <strong>network security assessment services</strong> to identify vulnerabilities, misconfigurations, and security gaps in your network infrastructure. Our expert security team helps organizations strengthen defenses, reduce attack surfaces, and ensure secure network operations against modern cyber threats.
          </p>
        </div>

        {/* Main Content Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">

          <div className="space-y-6 text-gray-700 text-base leading-relaxed">
            <p>
              Is your network truly secure against external and internal threats? At <strong>Kavach Cloud</strong>, our <strong>network security assessments</strong> uncover weaknesses in firewalls, routers, switches, servers, and endpoint connections that attackers could exploit.
            </p>

            <p>
              Our security experts perform <strong>network vulnerability scanning</strong>, <strong>configuration reviews</strong>, and <strong>security architecture analysis</strong> to identify open ports, weak protocols, outdated firmware, and insecure access controls.
            </p>

            <p>
              We follow industry standards such as <strong>NIST</strong>, <strong>ISO 27001</strong>, and <strong>CIS Benchmarks</strong> to evaluate your network security posture and provide actionable recommendations for remediation.
            </p>

            <p>
              Our assessments include <strong>internal and external network testing</strong>, <strong>segmentation review</strong>, <strong>wireless security testing</strong>, and <strong>remote access security evaluation</strong> to ensure complete infrastructure protection.
            </p>

            <p>
              With <strong>Kavach Cloud</strong>, you receive detailed <strong>network security assessment reports</strong> containing identified risks, severity ratings, technical findings, and step-by-step mitigation guidance to improve your organization’s overall security maturity.
            </p>

            <p>
              Secure your business network before attackers find the gaps. Trust <strong>Kavach Cloud</strong> for professional network security assessments that keep your infrastructure safe, compliant, and resilient.
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center p-12 sticky top-24 h-fit">
            <div className="text-center text-white">
              <Network className="w-40 h-40 mx-auto opacity-90" />
              <p className="text-xl font-semibold mt-6">Network Security</p>
              <p className="text-sm mt-2 opacity-80">Protect Your Infrastructure</p>
            </div>
          </div>

        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <Search className="w-6 h-6 text-orange-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Network Vulnerability Scanning
            </h3>
            <p className="text-gray-600">
              Comprehensive scanning to detect <strong>open ports</strong>, <strong>weak services</strong>, and <strong>exposed network interfaces</strong> that attackers could exploit.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-orange-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Security Configuration Review
            </h3>
            <p className="text-gray-600">
              Review of <strong>firewall rules</strong>, <strong>router and switch configurations</strong>, and <strong>access control policies</strong> to eliminate misconfigurations.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <Lock className="w-6 h-6 text-orange-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Infrastructure Hardening
            </h3>
            <p className="text-gray-600">
              Actionable recommendations for <strong>network hardening</strong>, secure segmentation, and improved monitoring to protect against evolving cyber threats.
            </p>
          </div>

        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-orange-5000 to-amber-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Strengthen Your Network Security
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto opacity-90">
            Partner with <strong>Kavach Cloud</strong> for professional <strong>network security assessment services</strong> that identify risks, close security gaps, and fortify your organization’s infrastructure.
          </p>

          <button className="bg-white text-orange-500 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg">
            Request Network Security Assessment
          </button>
        </div>

      </div>
    </section>
  );
}
