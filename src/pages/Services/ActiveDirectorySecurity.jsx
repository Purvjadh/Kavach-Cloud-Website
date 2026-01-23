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
            <strong>Kavach Cloud</strong> provides professional <strong>Active Directory (AD) security assessment services</strong> to identify misconfigurations, privilege escalation paths, and security weaknesses in your domain environment. We help organizations secure their identity infrastructure against modern cyber attacks.
          </p>
        </div>

        {/* Main Content Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">

          <div className="space-y-6 text-gray-700 text-base leading-relaxed">
            <p>
              Active Directory is the heart of enterprise identity management — and a prime target for attackers. At <strong>Kavach Cloud</strong>, our <strong>Active Directory security assessments</strong> uncover hidden attack paths, weak credentials, and excessive privileges that could lead to full domain compromise.
            </p>

            <p>
              Our experts perform <strong>AD enumeration</strong>, <strong>privilege escalation analysis</strong>, <strong>Kerberos security testing</strong>, and <strong>Group Policy review</strong> to identify security gaps and misconfigurations.
            </p>

            <p>
              We leverage industry tools and frameworks such as <strong>BloodHound</strong>, <strong>MITRE ATT&CK</strong>, and <strong>CIS Benchmarks</strong> to map attack paths and detect high-risk exposure points in your AD environment.
            </p>

            <p>
              Our assessment includes <strong>password policy review</strong>, <strong>service account security analysis</strong>, <strong>delegation misconfiguration checks</strong>, and <strong>tiered admin model evaluation</strong>.
            </p>

            <p>
              With <strong>Kavach Cloud</strong>, you receive a detailed <strong>Active Directory security report</strong> containing identified risks, attack path diagrams, privilege abuse scenarios, and remediation steps to strengthen identity security.
            </p>

            <p>
              Protect your organization’s identity infrastructure. Let <strong>Kavach Cloud</strong> secure your Active Directory against evolving cyber threats.
            </p>
          </div>

          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center p-12 sticky top-24 h-fit">
            <div className="text-center text-white">
              <Server className="w-40 h-40 mx-auto opacity-90" />
              <p className="text-xl font-semibold mt-6">Active Directory</p>
              <p className="text-sm mt-2 opacity-80">Secure Your Identity Infrastructure</p>
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
              Identify <strong>privilege escalation paths</strong>, excessive permissions, and misconfigurations that attackers exploit to gain domain dominance.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              AD Security Misconfiguration Review
            </h3>
            <p className="text-gray-600">
              Deep analysis of <strong>Group Policies</strong>, <strong>delegation settings</strong>, and <strong>authentication protocols</strong> to eliminate security gaps.
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
              Recommendations for <strong>password policies</strong>, <strong>tiered administration</strong>, and <strong>secure authentication</strong> to protect domain assets.
            </p>
          </div>

        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Secure Your Active Directory Today
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto opacity-90">
            Partner with <strong>Kavach Cloud</strong> for professional <strong>Active Directory security services</strong> that prevent identity-based attacks and strengthen your cyber defense.
          </p>

          <button className="bg-white text-indigo-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg">
            Request AD Security Assessment
          </button>
        </div>

      </div>
    </section>
  );
}
