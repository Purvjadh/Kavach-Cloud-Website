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

          <div className="space-y-6 text-gray-700 text-base leading-relaxed">
            <p>
              With the rise of smart devices and mobile applications, 
              attackers increasingly target mobile and IoT environments. 
              At <strong>Kavach Cloud</strong>, our 
              <strong> Mobile & IoT security assessments</strong> 
              identify vulnerabilities in mobile apps, firmware, 
              communication protocols, and cloud-connected devices.
            </p>

            <p>
              Our experts perform 
              <strong> mobile application security testing</strong>, 
              <strong> IoT firmware analysis</strong>, 
              <strong> API security testing</strong>, and 
              <strong> wireless communication assessment</strong> 
              to uncover hidden security flaws.
            </p>

            <p>
              We follow industry standards including 
              <strong> OWASP Mobile Top 10</strong>, 
              <strong> OWASP IoT Top 10</strong>, and 
              <strong> NIST IoT Framework</strong> 
              to ensure comprehensive protection.
            </p>

            <p>
              Our services include 
              <strong> reverse engineering of mobile apps</strong>, 
              <strong> secure code review</strong>, 
              <strong> encryption implementation review</strong>, and 
              <strong> device hardening guidance</strong>.
            </p>

            <p>
              With <strong>Kavach Cloud</strong>, you receive a 
              <strong> Mobile & IoT security report</strong> containing 
              risk findings, exploitation scenarios, and 
              actionable remediation steps to secure your connected ecosystem.
            </p>

            <p>
              Secure your mobile apps and smart devices before attackers exploit them. 
              Choose <strong>Kavach Cloud</strong> for complete 
              <strong> Mobile & IoT security</strong>.
            </p>
          </div>

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
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <Smartphone className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Mobile App Security Testing
            </h3>
            <p className="text-gray-600">
              Identify vulnerabilities in 
              <strong> Android and iOS applications</strong> including 
              insecure storage, weak encryption, and API flaws.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Wifi className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              IoT Device Security Assessment
            </h3>
            <p className="text-gray-600">
              Security testing of 
              <strong> smart devices, firmware, and communication protocols</strong> 
              to prevent unauthorized control and data leakage.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <Lock className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Secure Device Hardening
            </h3>
            <p className="text-gray-600">
              Recommendations for 
              <strong> firmware hardening</strong>, 
              <strong> secure communication</strong>, and 
              <strong> access control enforcement</strong> 
              across mobile and IoT ecosystems.
            </p>
          </div>

        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Secure Your Mobile & IoT Ecosystem
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto opacity-90">
            Partner with <strong>Kavach Cloud</strong> for 
            <strong> Mobile & IoT Security Services</strong> 
            that protect applications, devices, and connected infrastructure 
            from evolving cyber threats.
          </p>

          <button className="bg-white text-blue-500 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg">
            Request Mobile & IoT Security Consultation
          </button>
        </div>

      </div>
    </section>
  );
}
