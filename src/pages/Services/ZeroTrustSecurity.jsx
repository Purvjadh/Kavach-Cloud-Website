import { Shield, Lock, UserCheck, Network } from "lucide-react";

export default function ZeroTrustSecurity() {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Page Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-600 to-slate-800 bg-clip-text text-transparent mb-6">
            Zero Trust Security Services
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            <strong>Kavach Cloud</strong> delivers professional 
            <strong> Zero Trust Security</strong> services to help organizations 
            eliminate implicit trust, verify every user and device, and secure 
            modern hybrid environments against evolving cyber threats.
          </p>
        </div>

        {/* Main Content Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">

          <div className="space-y-6 text-gray-700 text-base leading-relaxed">
            <p>
              Traditional perimeter security is no longer enough. 
              At <strong>Kavach Cloud</strong>, our 
              <strong> Zero Trust Security Assessments</strong> ensure 
              that no user, device, or application is trusted by default — 
              inside or outside your network.
            </p>

            <p>
              We help organizations implement 
              <strong> Zero Trust Architecture (ZTA)</strong> by analyzing 
              identity access controls, network segmentation, 
              endpoint security, and continuous verification mechanisms.
            </p>

            <p>
              Our experts follow frameworks such as 
              <strong> NIST Zero Trust</strong> and 
              <strong> MITRE ATT&CK</strong> to design strategies 
              that reduce attack surfaces and prevent lateral movement.
            </p>

            <p>
              Services include <strong>identity governance review</strong>, 
              <strong>multi-factor authentication implementation</strong>, 
              <strong>least-privilege access enforcement</strong>, and 
              <strong>secure micro-segmentation planning</strong>.
            </p>

            <p>
              With <strong>Kavach Cloud</strong>, you receive a 
              <strong> Zero Trust readiness report</strong> containing 
              risk findings, architecture recommendations, and 
              a step-by-step roadmap to implement Zero Trust successfully.
            </p>

            <p>
              Build a security model designed for today’s threats. 
              Trust nothing, verify everything — with 
              <strong> Kavach Cloud Zero Trust Security</strong>.
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-600 to-slate-800 rounded-2xl flex items-center justify-center p-12 sticky top-24 h-fit">
            <div className="text-center text-white">
              <Shield className="w-40 h-40 mx-auto opacity-90" />
              <p className="text-xl font-semibold mt-6">Zero Trust</p>
              <p className="text-sm mt-2 opacity-80">Never Trust, Always Verify</p>
            </div>
          </div>

        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <UserCheck className="w-6 h-6 text-state-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Identity Verification
            </h3>
            <p className="text-gray-600">
              Implement <strong>continuous identity verification</strong>, 
              strong authentication, and 
              <strong>least-privilege access</strong> across all users.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Network className="w-6 h-6 text-slate-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Network Micro-Segmentation
            </h3>
            <p className="text-gray-600">
              Prevent lateral movement with 
              <strong>micro-segmentation</strong> and 
              real-time traffic monitoring.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <Lock className="w-6 h-6 text-slate-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Continuous Security Monitoring
            </h3>
            <p className="text-gray-600">
              Real-time <strong>security analytics</strong> and 
              <strong>policy enforcement</strong> ensure continuous protection 
              against evolving threats.
            </p>
          </div>

        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-slate-600 to-slate-800 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Adopt Zero Trust Security Today
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto opacity-90">
            Partner with <strong>Kavach Cloud</strong> for 
            <strong> Zero Trust Security Services</strong> that modernize 
            your defense strategy and protect your organization from 
            advanced cyber attacks.
          </p>

          <button className="bg-white text-slate-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg">
            Request Zero Trust Consultation
          </button>
        </div>

      </div>
    </section>
  );
}
