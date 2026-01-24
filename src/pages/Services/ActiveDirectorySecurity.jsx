import { Server, Shield, Search, Lock } from "lucide-react";

export default function ActiveDirectorySecurity() {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Page Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Active Directory Security Services
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            <strong>Kavach Cloud</strong> delivers expert-led 
            <strong> Active Directory (AD) security assessment services</strong> to identify 
            misconfigurations, privilege escalation paths, and hidden identity security risks 
            across your domain environment. We help organizations strengthen their identity 
            infrastructure and prevent domain-level compromises caused by modern cyber attacks.
          </p>
        </div>

        {/* Main Content Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">

          {/* Left Content */}
          <div className="space-y-6 text-gray-700 text-base leading-relaxed">
            <p>
              Active Directory is the backbone of enterprise identity and access management — 
              and therefore one of the most targeted assets by attackers. At 
              <strong> Kavach Cloud</strong>, our <strong>Active Directory security assessments</strong> 
              uncover weak credentials, excessive privileges, insecure authentication mechanisms, 
              and hidden attack paths that can lead to full domain compromise.
            </p>

            <p>
              Our AD security experts perform <strong>comprehensive domain enumeration</strong>, 
              <strong>privilege escalation mapping</strong>, <strong>Kerberos security testing</strong>, 
              <strong>Group Policy object (GPO) analysis</strong>, and 
              <strong>authentication protocol reviews</strong> to identify critical security gaps.
            </p>

             <p>
              We leverage industry-recognized tools and attack-path mapping frameworks such as 
              <strong> BloodHound</strong>, <strong>MITRE ATT&CK</strong>, and 
              <strong> CIS Benchmarks</strong> to visualize trust relationships, 
              detect lateral movement opportunities, and identify high-value identity assets 
              vulnerable to exploitation.
            </p>

            <p>
              Using industry-recognized tools and frameworks such as 
              <strong> BloodHound</strong>, <strong>MITRE ATT&CK</strong>, 
              and <strong>CIS Benchmarks</strong>, we visualize attack paths, 
              detect lateral movement opportunities, and highlight high-risk identity exposures.
            </p>

            <p>
              Our assessments include <strong>password policy evaluation</strong>, 
              <strong>service account privilege review</strong>, 
              <strong>delegation misconfiguration checks</strong>, 
              <strong>tiered administration model validation</strong>, and 
              <strong>credential hygiene assessments</strong> to reduce identity attack surfaces.
            </p>

             <p>
              At the end of the engagement, you receive a comprehensive 
              <strong>Active Directory security assessment report</strong> containing 
              attack-path diagrams, privilege abuse scenarios, risk severity ratings, 
              and step-by-step remediation guidance. 
              This enables your IT and security teams to strengthen identity controls, 
              enforce least-privilege access, and build long-term AD resilience.
            </p>


            <p>
              Protect your organization from identity-based attacks, ransomware propagation, 
              and insider threats. Trust <strong>Kavach Cloud</strong> for professional 
              <strong>Active Directory security services</strong> that ensure long-term identity 
              resilience and business continuity.
            </p>
          </div>

          {/* Right Card */}
          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center p-12 sticky top-24 h-fit">
            <div className="text-center text-white">
              <Server className="w-40 h-40 mx-auto opacity-90" />
              <p className="text-xl font-semibold mt-6">Active Directory Security</p>
              <p className="text-sm mt-2 opacity-80">
                Secure Identities. Prevent Domain Compromise.
              </p>
            </div>
          </div>

        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <Search className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              AD Attack Path Discovery
            </h3>
            <p className="text-gray-600">
              Identify <strong>privilege escalation chains</strong>, excessive permissions, 
              weak credential practices, and misconfigurations that attackers exploit 
              to achieve full domain takeover.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              AD Misconfiguration Review
            </h3>
            <p className="text-gray-600">
              Deep analysis of <strong>Group Policies</strong>, 
              <strong>delegation settings</strong>, 
              <strong>Kerberos configurations</strong>, and 
              <strong>authentication protocols</strong> to eliminate identity security gaps.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <Lock className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Identity Infrastructure Hardening
            </h3>
            <p className="text-gray-600">
              Strategic recommendations for <strong>password policies</strong>, 
              <strong>tiered administration models</strong>, 
              <strong>least-privilege access</strong>, and 
              <strong>secure authentication enforcement</strong> to protect domain assets.
            </p>
          </div>

        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-10 text-center text-white">
          
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Secure Your Active Directory Today
          </h2>

          <p className="text-base mb-6 opacity-90">
            A single misconfigured privilege or weak credential can lead to complete domain compromise. 
            Our expert-led <strong>Active Directory security assessments</strong> help you uncover 
            hidden attack paths, eliminate identity risks, and strengthen access controls 
            across your enterprise environment.  
          </p>

          <p className="text-sm max-w-2xl mx-auto mb-6 opacity-90">
            Whether you’re securing a new domain or hardening an existing infrastructure, 
            Kavach Cloud ensures your identity systems remain resilient against 
            modern cyber threats and insider risks.
           </p>

          <button className="bg-white text-indigo-600 px-10 py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg">
            Request AD Security Assessment
          </button>

        </div>

      </div>
    </section>
  );
}
