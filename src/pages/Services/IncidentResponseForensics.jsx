import { Activity, Shield, Search, FileSearch } from 'lucide-react';

export default function IncidentResponseForensics() {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Page Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
            Incident Response & Forensics Services
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            <strong>Kavach Cloud</strong> provides professional <strong>incident response services</strong> and <strong>digital forensics solutions</strong> to help startups and businesses rapidly contain security breaches, investigate cyber attacks, and recover from security incidents. Our expert <strong>incident response team</strong> delivers <strong>24/7 emergency response</strong> and detailed <strong>forensic analysis</strong> to minimize damage and prevent future attacks.
          </p>
        </div>

        {/* Main Content Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          
          <div className="space-y-6 text-gray-700 text-base leading-relaxed">
            <p>
              Are you dealing with a security breach or suspicious activity in your network? At <strong>Kavach Cloud</strong>, we offer <strong>professional incident response services in India</strong> that can help contain threats and recover from cyber attacks quickly. Our <strong>DFIR services</strong> (Digital Forensics and Incident Response) help organizations identify attack vectors, contain threats, and gather forensic evidence for legal proceedings and security improvements.
            </p>

            <p>
              Our team of <strong>certified incident responders</strong> and <strong>digital forensics experts</strong> follows industry frameworks including <strong>NIST Incident Response</strong>, <strong>SANS Incident Handling</strong>, and <strong>ISO 27035</strong> standards. We specialize in <strong>malware incident response</strong>, <strong>ransomware recovery</strong>, <strong>data breach investigation</strong>, <strong>compromised server forensics</strong>, and <strong>insider threat investigations</strong>.
            </p>

            <p>
              We take a structured approach to <strong>incident response</strong>, following preparation, detection and analysis, containment, eradication, recovery, and post-incident activities. This enables us to provide rapid threat containment while preserving forensic evidence and maintaining business continuity throughout the response process.
            </p>

            <p>
              <strong>Kavach Cloud</strong> conducts comprehensive <strong>digital forensics investigations</strong> including <strong>disk forensics</strong>, <strong>memory forensics</strong>, <strong>network forensics</strong>, and <strong>mobile device forensics</strong>. Our services include <strong>log analysis</strong>, <strong>timeline reconstruction</strong>, <strong>root cause analysis</strong>, and <strong>chain of custody documentation</strong> for legal and compliance requirements.
            </p>

            <p>
              We also provide <strong>cyber threat hunting</strong> and <strong>compromise assessment services</strong> to proactively identify hidden threats in your environment. From <strong>Windows event log analysis</strong> to <strong>Linux system forensics</strong>, we ensure comprehensive investigation across all platforms and technologies.
            </p>

            <p>
              Our <strong>incident response reports</strong> deliver detailed attack timelines, <strong>indicators of compromise (IOCs)</strong>, attacker tactics, techniques, and procedures (<strong>TTPs</strong>), evidence documentation, and actionable remediation recommendations to enhance your organization's <strong>security monitoring</strong> and prevent future incidents.
            </p>

            <p>
              Don't face security incidents alone. Let <strong>Kavach Cloud</strong> help you respond effectively to cyber attacks through professional incident response and forensics services that protect your business reputation and ensure rapid recovery.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center p-12 sticky top-24 h-fit">
            <div className="text-center text-white">
              <Activity className="w-40 h-40 mx-auto opacity-90" />
              <p className="text-xl font-semibold mt-6">Incident Response</p>
              <p className="text-sm mt-2 opacity-80">24/7 Emergency Response</p>
            </div>
          </div>

        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Rapid Threat Containment
            </h3>
            <p className="text-gray-600">
              <strong>24/7 emergency incident response</strong> with rapid threat containment, malware removal, and system isolation to minimize business impact. Our team provides immediate action to stop attacks and prevent lateral movement across your infrastructure.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
              <FileSearch className="w-6 h-6 text-cyan-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Digital Forensics Investigation
            </h3>
            <p className="text-gray-600">
              Comprehensive <strong>forensic analysis</strong> using advanced tools for disk imaging, memory analysis, and artifact examination. We gather admissible evidence while maintaining <strong>chain of custody</strong> for legal proceedings and compliance requirements.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Search className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Root Cause Analysis
            </h3>
            <p className="text-gray-600">
              Detailed <strong>attack timeline reconstruction</strong> and root cause identification through log correlation, system analysis, and threat intelligence. We identify how attackers gained access and provide recommendations to prevent recurrence.
            </p>
          </div>

        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Respond to Security Incidents with Expert Support
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto opacity-90">
            Partner with <strong>Kavach Cloud</strong> for professional <strong>incident response</strong>, <strong>digital forensics</strong>, and <strong>cyber investigation services</strong> that help startups and businesses contain threats, investigate attacks, and recover quickly. Contact us today for 24/7 emergency incident response services in India.
          </p>

          <button className="bg-white text-blue-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg">
            Request Emergency Incident Response
          </button>
        </div>

      </div>
    </section>
  );
}