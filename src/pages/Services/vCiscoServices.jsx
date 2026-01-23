import { Server, Network, Shield, Settings } from "lucide-react";

export default function vCiscoServices() {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Page Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-600 to-slate-800 bg-clip-text text-transparent mb-6">
            vCisco Managed Security Services
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            <strong>Kavach Cloud</strong> provides professional 
            <strong> vCisco Managed Security Services</strong> to help organizations 
            design, deploy, and manage enterprise-grade security infrastructure. 
            Our experts deliver continuous monitoring, configuration management, 
            and security optimization for modern IT environments.
          </p>
        </div>

        {/* Main Content Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">

          <div className="space-y-6 text-gray-700 text-base leading-relaxed">
            <p>
              Managing complex security infrastructure requires expertise. 
              At <strong>Kavach Cloud</strong>, our 
              <strong> vCisco Services</strong> provide end-to-end support for 
              network security devices, firewalls, IDS/IPS systems, and 
              enterprise security tools.
            </p>

            <p>
              Our team handles 
              <strong> security device deployment</strong>, 
              <strong> firewall configuration</strong>, 
              <strong> VPN setup</strong>, and 
              <strong> network security optimization</strong> 
              to ensure your environment remains secure and high-performing.
            </p>

            <p>
              We provide 
              <strong> 24/7 monitoring</strong>, 
              <strong> log management</strong>, 
              <strong> incident response support</strong>, and 
              <strong> security policy management</strong> 
              for continuous protection.
            </p>

            <p>
              Our vCisco solutions integrate with 
              <strong> SIEM</strong>, 
              <strong> EDR</strong>, and 
              <strong> cloud security platforms</strong> 
              to create a unified security ecosystem.
            </p>

            <p>
              With <strong>Kavach Cloud</strong>, you receive 
              <strong> managed security service reports</strong>, 
              performance metrics, and expert recommendations 
              to improve your security posture.
            </p>

            <p>
              Outsource your security operations with confidence. 
              Choose <strong>Kavach Cloud vCisco Services</strong> 
              for reliable and scalable security management.
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-600 to-slate-800 rounded-2xl flex items-center justify-center p-12 sticky top-24 h-fit">
            <div className="text-center text-white">
              <Server className="w-40 h-40 mx-auto opacity-90" />
              <p className="text-xl font-semibold mt-6">vCisco Services</p>
              <p className="text-sm mt-2 opacity-80">Managed Security Operations</p>
            </div>
          </div>

        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <Network className="w-6 h-6 text-slate-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Network Security Management
            </h3>
            <p className="text-gray-600">
              Configuration and management of 
              <strong> firewalls</strong>, <strong>VPNs</strong>, and 
              <strong> intrusion prevention systems</strong>.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-slate-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              24/7 Security Monitoring
            </h3>
            <p className="text-gray-600">
              Continuous 
              <strong> threat monitoring</strong>, 
              <strong> log analysis</strong>, and 
              <strong> incident response support</strong>.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <Settings className="w-6 h-6 text-slate-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Security Infrastructure Optimization
            </h3>
            <p className="text-gray-600">
              Performance tuning, 
              <strong> policy management</strong>, and 
              continuous improvement of security architecture.
            </p>
          </div>

        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-slate-600 to-slate-800 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Simplify Your Security Operations
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto opacity-90">
            Partner with <strong>Kavach Cloud</strong> for 
            <strong> vCisco Managed Security Services</strong> that 
            ensure continuous protection and optimized security infrastructure.
          </p>

          <button className="bg-white text-slate-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg">
            Request vCisco Consultation
          </button>
        </div>

      </div>
    </section>
  );
}
