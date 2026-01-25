import { Shield, Lock, AlertTriangle, Search, Database, Cloud, Network, FileSearch, Key, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
export default function ProductsPage() {
  const products = [
    {
      icon: Shield,
      name: "Kavach SecureGuard",
      category: "Endpoint Protection",
      description: "Advanced endpoint security solution with real-time threat detection, behavioral analysis, and automated response capabilities. Protects your devices from malware, ransomware, and zero-day exploits.",
      features: ["Real-time Threat Detection", "Behavioral Analysis", "Auto Quarantine", "Cross-platform Support"],
      gradient: "from-purple-500 to-indigo-600"
    },
    {
      icon: Lock,
      name: "Kavach VaultPro",
      category: "Data Encryption",
      description: "Enterprise-grade encryption solution for sensitive data at rest and in transit. Military-grade AES-256 encryption with centralized key management and compliance reporting.",
      features: ["AES-256 Encryption", "Key Management", "Compliance Reports", "File-level Protection"],
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: AlertTriangle,
      name: "Kavach ThreatWatch",
      category: "Threat Intelligence",
      description: "Comprehensive threat intelligence platform that monitors dark web, social media, and threat feeds to provide early warnings about emerging threats targeting your organization.",
      features: ["Dark Web Monitoring", "Threat Feed Integration", "Risk Scoring", "Alert Dashboard"],
      gradient: "from-red-500 to-orange-600"
    },
    {
      icon: Search,
      name: "Kavach ScanMaster",
      category: "Vulnerability Scanner",
      description: "Automated vulnerability scanning tool for web applications, networks, and cloud infrastructure. Identifies security weaknesses and provides remediation guidance with risk prioritization.",
      features: ["Automated Scanning", "Risk Prioritization", "Detailed Reports", "Integration APIs"],
      gradient: "from-green-500 to-teal-600"
    },
    {
      icon: Database,
      name: "Kavach DataShield",
      category: "Database Security",
      description: "Complete database security solution with activity monitoring, access control, and encryption. Protects against SQL injection, unauthorized access, and data breaches.",
      features: ["Activity Monitoring", "Access Control", "Audit Logging", "Compliance Support"],
      gradient: "from-violet-500 to-purple-600"
    },
    {
      icon: Cloud,
      name: "Kavach CloudDefender",
      category: "Cloud Security",
      description: "Multi-cloud security platform for AWS, Azure, and GCP. Provides misconfiguration detection, compliance monitoring, and automated security remediation across your cloud infrastructure.",
      features: ["Multi-cloud Support", "Auto Remediation", "Compliance Checks", "Cost Optimization"],
      gradient: "from-sky-500 to-blue-600"
    },
    {
      icon: Network,
      name: "Kavach NetMonitor",
      category: "Network Security",
      description: "Real-time network traffic analysis and intrusion detection system. Identifies anomalous behavior, detects network attacks, and provides detailed forensics for security incidents.",
      features: ["Traffic Analysis", "Intrusion Detection", "Packet Capture", "Forensics Tools"],
      gradient: "from-indigo-500 to-blue-600"
    },
    {
      icon: FileSearch,
      name: "Kavach LogAnalyzer",
      category: "SIEM Solution",
      description: "Security Information and Event Management platform that collects, correlates, and analyzes logs from multiple sources. Provides real-time alerts and comprehensive security analytics.",
      features: ["Log Aggregation", "Correlation Engine", "Real-time Alerts", "Custom Dashboards"],
      gradient: "from-amber-500 to-orange-600"
    },
    {
      icon: Key,
      name: "Kavach AccessManager",
      category: "Identity & Access",
      description: "Identity and access management solution with multi-factor authentication, single sign-on, and privileged access management. Ensures secure access to critical systems and data.",
      features: ["Multi-factor Auth", "Single Sign-On", "PAM", "Role-based Access"],
      gradient: "from-pink-500 to-rose-600"
    },
    {
      icon: Activity,
      name: "Kavach ComplianceHub",
      category: "Compliance Management",
      description: "Automated compliance management platform for GDPR, ISO 27001, SOC 2, and other frameworks. Streamlines audit preparation with continuous monitoring and evidence collection.",
      features: ["Multi-framework Support", "Evidence Collection", "Audit Reports", "Gap Analysis"],
      gradient: "from-emerald-500 to-green-600"
    }
  ];

  return (
    <section className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            Our Security Products
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive suite of <strong>cybersecurity products</strong> designed to protect your organization from evolving threats. From <strong>endpoint protection</strong> to <strong>cloud security</strong>, we've got you covered.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              {/* Product Header with Gradient */}
              <div className={`bg-gradient-to-r ${product.gradient} p-6 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full -ml-12 -mb-12"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <product.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{product.name}</h3>
                  <p className="text-sm opacity-90">{product.category}</p>
                </div>
              </div>

              {/* Product Content */}
              <div className="p-6">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-6">
                  <p className="text-sm font-semibold text-gray-800 mb-3">Key Features:</p>
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${product.gradient} mt-2 mr-2 flex-shrink-0`}></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className={`w-full bg-gradient-to-r ${product.gradient} text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}>
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Secure Your Organization?
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto opacity-90">
            Get in touch with our team to learn how <strong>Kavach Cloud products</strong> can protect your business from cyber threats. We offer customized solutions tailored to your security needs.
          </p>
          <Link to="/contact">
            <button className="bg-white text-purple-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg">
              Contact Us
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}