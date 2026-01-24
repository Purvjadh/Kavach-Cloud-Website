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
            modern hybrid and cloud environments against evolving cyber threats.
          </p>
        </div>

        {/* Main Content Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">

          {/* Left Content */}
          <div className="space-y-6 text-gray-700 text-base leading-relaxed">
            
            <p>
              Traditional perimeter-based security models can no longer protect 
              organizations against modern attack techniques, remote workforces, 
              cloud migrations, and insider threats. At <strong>Kavach Cloud</strong>, 
              our <strong>Zero Trust Security Assessments</strong> ensure that 
              no user, device, or application is trusted by default — whether 
              inside or outside the corporate network.
            </p>

            <p>
              We help organizations design and implement 
              <strong> Zero Trust Architecture (ZTA)</strong> by assessing 
              identity and access management, endpoint posture validation, 
              network segmentation strategies, and continuous verification controls 
              that enforce strict access boundaries across digital assets.
            </p>

            <p>
              Our security architects follow globally recognized frameworks such as 
              <strong> NIST Zero Trust</strong> and <strong> MITRE ATT&CK</strong> 
              to build defense strategies that reduce attack surfaces, prevent 
              lateral movement, and stop privilege escalation before damage occurs.
            </p>

            <p>
              Our Zero Trust services include 
              <strong>identity governance reviews</strong>, 
              <strong>multi-factor authentication deployment</strong>, 
              <strong>least-privilege access enforcement</strong>, 
              <strong>device compliance validation</strong>, and 
              <strong>secure micro-segmentation planning</strong> to protect 
              users, workloads, and sensitive data.
            </p>

            <p>
              We also assess <strong>third-party access controls</strong>, 
              <strong>remote workforce security</strong>, 
              <strong>cloud access security configurations</strong>, and 
              <strong>continuous security monitoring integration</strong> to ensure 
              complete Zero Trust coverage across hybrid infrastructures.
            </p>

            <p>
              With <strong>Kavach Cloud</strong>, you receive a 
              <strong> Zero Trust readiness report</strong> containing 
              maturity scores, risk findings, architecture blueprints, 
              and a step-by-step implementation roadmap to transition 
              smoothly toward a Zero Trust operating model.
            </p>

            <p>
              Our Zero Trust assessments also evaluate <strong>endpoint security posture</strong>, 
              <strong>device compliance enforcement</strong>, and <strong>application access controls</strong> 
              to ensure that only trusted and verified devices can connect to corporate resources. 
              This significantly reduces risks from compromised endpoints, unmanaged devices, 
              and shadow IT environments.
            </p>

            <p>
              We further analyze <strong>identity provider configurations</strong>, 
              <strong>single sign-on (SSO) implementations</strong>, 
              and <strong>conditional access policies</strong> to ensure adaptive access 
              decisions based on user behavior, location, and risk levels. 
              These controls help organizations dynamically enforce security without 
              impacting productivity.
            </p>

            <p>
              Our Zero Trust engagement also includes <strong>security tool integration planning</strong>, 
              aligning technologies such as EDR, SIEM, CASB, and ZTNA solutions into a unified 
              security architecture. This ensures continuous visibility, automated response, 
              and consistent policy enforcement across all digital assets.
            </p>

            <p>
              Build a security foundation designed for today’s threat landscape. 
              Trust nothing, verify everything — with 
              <strong> Kavach Cloud Zero Trust Security</strong>.
            </p>

          </div>

          {/* Right Card */}
          <div className="bg-gradient-to-br from-slate-600 to-slate-800 rounded-2xl flex items-center justify-center p-12 sticky top-24 h-fit">
            <div className="text-center text-white">
              <Shield className="w-40 h-40 mx-auto opacity-90" />
              <p className="text-xl font-semibold mt-6">Zero Trust Security</p>
              <p className="text-sm mt-2 opacity-80">Never Trust • Always Verify</p>
            </div>
          </div>

        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
              <UserCheck className="w-6 h-6 text-slate-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Identity Verification
            </h3>
            <p className="text-gray-600">
              Implement <strong>continuous identity verification</strong>, 
              adaptive authentication, and 
              <strong>least-privilege access</strong> across all users and devices.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
              <Network className="w-6 h-6 text-slate-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Network Micro-Segmentation
            </h3>
            <p className="text-gray-600">
              Prevent lateral movement using 
              <strong>micro-segmentation</strong>, 
              software-defined perimeters, and real-time traffic inspection.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
              <Lock className="w-6 h-6 text-slate-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Continuous Security Monitoring
            </h3>
            <p className="text-gray-600">
              Real-time <strong>security analytics</strong>, 
              behavioral detection, and 
              <strong>policy enforcement</strong> ensure continuous protection 
              against evolving cyber threats.
            </p>
          </div>

        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-slate-600 to-slate-800 rounded-2xl p-14 text-center text-white">
          
          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            Adopt Zero Trust Security Today
          </h2>

          <p className="text-base md:text-lg max-w-4xl mx-auto mb-5 opacity-95 leading-relaxed">
            Cyber attacks no longer rely on breaking perimeters — they exploit 
            trusted access. Our expert-led 
            <strong> Zero Trust Security Services</strong> help you modernize 
            identity controls, secure cloud and hybrid infrastructures, 
            and eliminate implicit trust across your environment.
          </p>

          <p className="text-sm md:text-base max-w-3xl mx-auto mb-7 opacity-90">
            Whether you're beginning your Zero Trust journey or optimizing 
            an existing implementation, <strong>Kavach Cloud</strong> delivers 
            actionable strategies, long-term security roadmaps that strengthen your cyber resilience.
          </p>

          <button className="bg-white text-slate-700 px-12 py-4 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg">
            Request Zero Trust Consultation
          </button>

        </div>

      </div>
    </section>
  );
}
