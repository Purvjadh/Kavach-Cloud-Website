import { Smartphone, Wifi, Shield, Lock } from "lucide-react";

export default function MobileIoTSecurity() {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Page Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-6">
            Mobile & IoT Security Services
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            <strong>Kavach Cloud</strong> provides professional 
            <strong> Mobile and IoT security services</strong> to protect 
            mobile applications, smart devices, and connected ecosystems 
            from modern cyber threats. We help organizations secure 
            their mobile and IoT environments against data leaks, 
            device compromise, and unauthorized access.
          </p>
        </div>

        {/* Main Content Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">

          {/* Left Content */}
          <div className="space-y-6 text-gray-700 text-base leading-relaxed">

            <p>
              The rapid growth of mobile applications, smart devices, and connected 
              ecosystems has introduced new and complex attack surfaces. 
              At <strong>Kavach Cloud</strong>, our 
              <strong> Mobile & IoT security assessments</strong> 
              identify vulnerabilities across mobile apps, embedded firmware, 
              device communication protocols, and cloud-connected services 
              before attackers can exploit them.
            </p>

            <p>
              We analyze <strong>data transmission channels</strong>, 
              <strong>Bluetooth, NFC, and Wi-Fi communication layers</strong>, 
              and <strong>MQTT and REST-based IoT protocols</strong> 
              to detect insecure configurations, weak encryption, 
              and man-in-the-middle attack possibilities.
            </p>

            <p>
              Our specialists perform 
              <strong>mobile application security testing</strong>, 
              <strong>IoT firmware analysis</strong>, 
              <strong>API and backend security testing</strong>, and 
              <strong>wireless communication assessments</strong> 
              to uncover insecure data storage, weak encryption, 
              insecure authentication flows, and exposed interfaces.
            </p>

            <p>
              We follow globally recognized standards including 
              <strong>OWASP Mobile Top 10</strong>, 
              <strong>OWASP IoT Top 10</strong>, and 
              <strong>NIST IoT Framework</strong> 
              to ensure comprehensive coverage of modern mobile and IoT threats.
            </p>

            <p>
              Our services include 
              <strong>reverse engineering of mobile applications</strong>, 
              <strong>secure code review</strong>, 
              <strong>encryption implementation analysis</strong>, 
              <strong>firmware extraction and debugging</strong>, and 
              <strong>device hardening guidance</strong> 
              to strengthen security at every layer.
            </p>

            <p>
              We also evaluate <strong>cloud connectivity security</strong>, 
              <strong>remote device management interfaces</strong>, 
              <strong>OTA update mechanisms</strong>, and 
              <strong>third-party service integrations</strong> 
              to prevent unauthorized control, data exposure, and supply chain attacks.
            </p>

            <p>
              Additionally, we assess <strong>mobile device management (MDM)</strong> 
              and <strong>enterprise mobility security controls</strong> 
              to protect corporate data on employee-owned and remote mobile devices, 
              reducing risks from lost devices, malware-infected apps, 
              and unauthorized data access.
            </p>

            <p>
              At the end of the engagement, you receive a comprehensive 
              <strong>Mobile & IoT security report</strong> containing 
              vulnerability findings, exploitation scenarios, 
              risk severity ratings, and step-by-step remediation guidance 
              to secure your connected ecosystem.
            </p>

            <p>
              Secure your mobile apps and smart devices before attackers find the gaps. 
              Choose <strong>Kavach Cloud</strong> for complete 
              <strong> Mobile & IoT security</strong> built for the connected future.
            </p>

          </div>

          {/* Right Card */}
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center p-12 sticky top-24 h-fit">
            <div className="text-center text-white">
              <Smartphone className="w-40 h-40 mx-auto opacity-90" />
              <p className="text-xl font-semibold mt-6">Mobile & IoT Security</p>
              <p className="text-sm mt-2 opacity-80">Secure Every Connected Device</p>
            </div>
          </div>

        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Smartphone className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Mobile App Security Testing
            </h3>
            <p className="text-gray-600">
              Identify vulnerabilities in 
              <strong> Android and iOS applications</strong> including 
              insecure storage, weak encryption, and exposed API endpoints.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Wifi className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              IoT Device Security Assessment
            </h3>
            <p className="text-gray-600">
              Security testing of 
              <strong> smart devices, firmware, communication protocols</strong> 
              to prevent unauthorized access and data leakage.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Lock className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Secure Device Hardening
            </h3>
            <p className="text-gray-600">
              Recommendations for 
              <strong>firmware hardening</strong>, 
              <strong>secure communications</strong>, and 
              <strong>access control enforcement</strong> 
              across mobile and IoT environments.
            </p>
          </div>

        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-14 text-center text-white">
          
          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            Secure Your Mobile & IoT Ecosystem
          </h2>

          <p className="text-base md:text-lg max-w-4xl mx-auto mb-5 opacity-95 leading-relaxed">
            As mobile and IoT technologies continue to power modern business operations, 
            they also introduce new cyber risks. Our expert-led 
            <strong> Mobile & IoT Security Services</strong> help you identify vulnerabilities, 
            prevent device compromise, and secure data flows across your connected infrastructure.
          </p>

          <button className="bg-white text-blue-600 px-12 py-4 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg">
            Request Mobile & IoT Security Consultation
          </button>

        </div>

      </div>
    </section>
  );
}
