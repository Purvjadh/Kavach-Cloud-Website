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
            <strong>Kavach Cloud</strong> provides expert-led 
            <strong> network security assessment services</strong> designed to identify vulnerabilities, 
            misconfigurations, and security gaps across your organization’s network infrastructure. 
            Our assessments help you minimize attack surfaces, strengthen internal defenses, 
            and maintain a secure and compliant IT environment.
          </p>
        </div>

        {/* Main Content Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">

          {/* Left Content */}
          <div className="space-y-6 text-gray-700 text-base leading-relaxed">
            <p>
              A modern business network is constantly exposed to evolving cyber threats. 
              At <strong>Kavach Cloud</strong>, our <strong>network security assessments</strong> 
              provide a deep evaluation of your network infrastructure — including firewalls, 
              routers, switches, servers, cloud assets, and endpoint connections — to uncover 
              weaknesses that could be exploited by attackers.
            </p>

             <p>
              A secure network is the foundation of a resilient business. At 
              <strong> Kavach Cloud</strong>, our <strong>network security assessments</strong> 
              evaluate your entire infrastructure — including firewalls, routers, switches, 
              servers, cloud environments, and endpoint connections — to uncover security gaps 
              that attackers could exploit.
            </p>

            <p>
              Our security specialists perform <strong>network vulnerability scanning</strong>, 
              <strong>security configuration analysis</strong>, and 
              <strong>architecture reviews</strong> to detect open ports, weak encryption protocols, 
              outdated firmware, exposed services, and improper access controls that put your 
              organization at risk.
            </p>

            <p>
              We follow globally recognized frameworks such as <strong>NIST</strong>, 
              <strong>ISO 27001</strong>, and <strong>CIS Benchmarks</strong> to assess your 
              security posture, validate compliance readiness, and deliver actionable 
              recommendations that improve long-term network resilience.
            </p>

            <p>
              Our assessments include <strong>external and internal network testing</strong>, 
              <strong>wireless security checks</strong>, <strong>remote access evaluations</strong>, 
              and <strong>network segmentation analysis</strong> to ensure every layer of your 
              infrastructure is protected.
            </p>

            <p>
              After completion, you receive a detailed <strong>network security report</strong> 
              with risk severity ratings, technical findings, and step-by-step remediation guidance 
              that enable your IT teams to strengthen security controls efficiently.
            </p>

            <p>
              Stay ahead of security risks and compliance demands. Trust 
              <strong> Kavach Cloud</strong> for professional <strong>network security assessments</strong> 
              that safeguard your infrastructure and business continuity.
            </p>
          </div>

          {/* Right Card */}
          <div className="bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center p-12 sticky top-24 h-fit">
            <div className="text-center text-white">
              <Network className="w-40 h-40 mx-auto opacity-90" />
              <p className="text-xl font-semibold mt-6">Network Security</p>
              <p className="text-sm mt-2 opacity-80">
                Detect Weaknesses. Strengthen Defenses.
              </p>
            </div>
          </div>

        </div>

        {/* Feature Cards*/}
        <div className="grid md:grid-cols-3 gap-8 mb-16">

          <FeatureCard
            icon={<Search className="w-6 h-6 text-orange-500" />}
            title="Vulnerability Scanning"
            desc="Comprehensive scanning to identify open ports, weak services, and exposed network interfaces."
          />

          <FeatureCard
            icon={<Shield className="w-6 h-6 text-orange-500" />}
            title="Configuration Review"
            desc="In-depth review of firewall rules, router settings, and access control policies."
          />

          <FeatureCard
            icon={<Lock className="w-6 h-6 text-orange-500" />}
            title="Network Hardening"
            desc="Actionable recommendations to strengthen segmentation, monitoring, and overall network security."
          />

        </div>

        {/* CTA Section (Short & Clean) */}
        <div className="bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl p-10 text-center text-white">
          
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Secure Your Network Before Attackers Find the Gaps
          </h2>

          <p className="text-base mb-6 opacity-90">
             A single misconfigured firewall or exposed service can open the door to serious cyberattacks. 
            At <strong>Kavach Cloud</strong>, our expert-led 
            <strong> network security assessment services</strong> help you uncover vulnerabilities early, 
            close security gaps, and build a resilient infrastructure that stands strong against modern threats.
          </p>

          <button className="bg-white text-orange-500 px-10 py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg">
            Request Network Security Assessment
          </button>

        </div>

      </div>
    </section>
  );
}

/* Feature Card Component */
function FeatureCard({ icon, title, desc }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}
