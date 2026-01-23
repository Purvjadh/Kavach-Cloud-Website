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

          <div className="space-y-6 text-gray-700 text-base leading-relaxed">
            <p>
              Cyber threats evolve every day. At <strong>Kavach Cloud</strong>, 
              our <strong>threat intelligence solutions</strong> provide 
              real-time insights into emerging threats, attack campaigns, 
              and adversary techniques targeting your industry.
            </p>

            <p>
              We collect and analyze data from 
              <strong> global threat feeds</strong>, 
              <strong> dark web monitoring</strong>, 
              <strong> malware research</strong>, and 
              <strong> attacker infrastructure tracking</strong> 
              to deliver actionable intelligence.
            </p>

            <p>
              Our experts correlate intelligence with 
              <strong> MITRE ATT&CK framework</strong> 
              to map adversary tactics, techniques, and procedures (TTPs), 
              enabling proactive defense strategies.
            </p>

            <p>
              Services include 
              <strong> strategic threat intelligence</strong>, 
              <strong> tactical IOC feeds</strong>, 
              <strong> threat actor profiling</strong>, and 
              <strong> attack trend analysis</strong> 
              tailored to your organization.
            </p>

            <p>
              With <strong>Kavach Cloud</strong>, you receive 
              <strong> threat intelligence reports</strong>, 
              real-time alerts, and security recommendations 
              to help detect and prevent attacks before impact.
            </p>

            <p>
              Stay ahead of attackers. Partner with 
              <strong> Kavach Cloud Threat Intelligence Services</strong> 
              to transform security from reactive to proactive.
            </p>
          </div>

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
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <Search className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              IOC & Threat Feed Analysis
            </h3>
            <p className="text-gray-600">
              Continuous collection of 
              <strong> Indicators of Compromise (IOCs)</strong> 
              and threat feeds to enhance detection capabilities.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Globe className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Threat Actor Profiling
            </h3>
            <p className="text-gray-600">
              Identify and track 
              <strong>threat actors</strong>, 
              attack campaigns, and adversary motivations.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Strategic Intelligence Reporting
            </h3>
            <p className="text-gray-600">
              Executive-ready 
              <strong>threat intelligence reports</strong> 
              and actionable recommendations for proactive defense.
            </p>
          </div>

        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-red-600 to-pink-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Stay Ahead of Cyber Threats
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto opacity-90">
            Partner with <strong>Kavach Cloud</strong> for 
            <strong> Threat Intelligence Services</strong> 
            that empower proactive defense and informed security decisions.
          </p>

          <button className="bg-white text-red-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg">
            Request Threat Intelligence Consultation
          </button>
        </div>

      </div>
    </section>
  );
}
