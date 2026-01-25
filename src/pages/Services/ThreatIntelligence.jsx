import { Radar, Globe, Shield, Search } from "lucide-react";

export default function ThreatIntelligence() {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Page Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Threat Intelligence Services
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            <strong>Kavach Cloud</strong> provides professional 
            <strong> threat intelligence services</strong> to help organizations 
            anticipate cyber threats, understand attacker behavior, and make 
            data-driven security decisions to strengthen defenses.
          </p>
        </div>

        {/* Main Content Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">

          {/* Left Content */}
          <div className="space-y-6 text-gray-700 text-base leading-relaxed">
            
            <p>
              Cyber threats evolve faster than traditional security controls can respond. 
              At <strong>Kavach Cloud</strong>, our <strong>threat intelligence solutions</strong> 
              deliver real-time insights into emerging attack campaigns, 
              adversary infrastructure, and industry-specific threat activity 
              that could impact your organization.
            </p>

            <p>
              We collect and analyze intelligence from 
              <strong> global threat feeds</strong>, 
              <strong> dark web monitoring</strong>, 
              <strong> malware research labs</strong>, 
              <strong> phishing campaign tracking</strong>, and 
              <strong> attacker infrastructure analysis</strong> 
              to produce actionable and contextualized security intelligence.
            </p>

            <p>
              Our analysts correlate intelligence with the 
              <strong> MITRE ATT&CK framework</strong> to map 
              adversary tactics, techniques, and procedures (TTPs). 
              This enables proactive security teams to detect, hunt, 
              and block attacks before they reach critical systems.
            </p>

            <p>
              Our services include 
              <strong> strategic threat intelligence</strong> for executive decision-making, 
              <strong> tactical IOC and YARA rule feeds</strong> for SOC operations, 
              <strong> threat actor profiling</strong>, 
              <strong> attack campaign attribution</strong>, and 
              <strong> geopolitical cyber risk monitoring</strong> 
              tailored to your industry.
            </p>

            <p>
              Our analysts also deliver <strong>industry-specific threat landscape reports</strong>, 
              tracking emerging malware families, ransomware groups, 
              supply chain attack trends, and nation-state campaigns. 
              This ensures your security strategy stays aligned with 
              real-world adversary activity affecting your sector.
            </p>

            <p>
              We also provide <strong>threat intelligence integration</strong> with 
              SIEM, EDR, SOAR, and TIP platforms to automate detection, 
              accelerate incident response, and enhance continuous monitoring 
              across your security operations.
            </p>

            <p>
              Additionally, we provide <strong>incident-driven intelligence support</strong>, 
              where our threat research team assists during active investigations 
              by identifying attacker infrastructure, correlating attack artifacts, 
              and enriching forensic findings to accelerate containment and recovery.
            </p>

            <p>
              At the end of each engagement, you receive 
              <strong>threat intelligence reports</strong>, 
              customized dashboards, real-time alerts, and 
              security recommendations that enable proactive defense 
              and informed cybersecurity investment planning.
            </p>

            <p>
              Transform security from reactive to predictive. 
              Stay ahead of attackers with 
              <strong> Kavach Cloud Threat Intelligence Services</strong>.
            </p>

          </div>

          {/* Right Card */}
          <div className="bg-gradient-to-br from-red-600 to-pink-600 rounded-2xl flex items-center justify-center p-12 sticky top-24 h-fit">
            <div className="text-center text-white">
              <Radar className="w-40 h-40 mx-auto opacity-90" />
              <p className="text-xl font-semibold mt-6">Threat Intelligence</p>
              <p className="text-sm mt-2 opacity-80">Anticipate • Detect • Defend</p>
            </div>
          </div>

        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <Search className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              IOC & Threat Feed Analysis
            </h3>
            <p className="text-gray-600">
              Continuous collection of 
              <strong> Indicators of Compromise (IOCs)</strong>, 
              malicious domains, hashes, and IP intelligence 
              to strengthen detection capabilities.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
              <Globe className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Threat Actor Profiling
            </h3>
            <p className="text-gray-600">
              Identify and track 
              <strong> threat actors</strong>, 
              attack campaigns, infrastructure, and motivations 
              to anticipate adversary behavior.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Strategic Intelligence Reporting
            </h3>
            <p className="text-gray-600">
              Executive-ready 
              <strong>threat intelligence reports</strong>, 
              risk trend analysis, and actionable recommendations 
              for proactive cyber defense planning.
            </p>
          </div>

        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-red-600 to-pink-600 rounded-2xl p-14 text-center text-white">
          
          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            Stay Ahead of Cyber Threats
          </h2>

          <p className="text-base md:text-lg max-w-4xl mx-auto mb-5 opacity-95 leading-relaxed">
            Modern cyber threats are coordinated, fast-moving, and constantly evolving. 
            Our expert-led <strong>Threat Intelligence Services</strong> give your organization 
            the visibility and context needed to identify adversaries early, 
            anticipate attack paths, and make informed security decisions 
            before threats become incidents.
          </p>

          <button className="bg-white text-red-600 px-12 py-4 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg">
            Request Threat Intelligence Consultation
          </button>

        </div>

      </div>
    </section>
  );
}
