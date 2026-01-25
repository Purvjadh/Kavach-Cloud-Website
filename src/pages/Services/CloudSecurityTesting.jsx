import { Cloud, Shield, Lock, Search } from 'lucide-react';

export default function CloudSecurityTesting() {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Page Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-6">
            Cloud Security Testing Services
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            <strong>Kavach Cloud</strong> provides professional <strong>cloud security testing services</strong> and <strong>cloud penetration testing solutions</strong> to help startups and businesses secure their AWS, Azure, and GCP environments. Our expert <strong>cloud security specialists</strong> conduct comprehensive <strong>security assessments</strong> to identify misconfigurations, vulnerabilities, and compliance gaps in your cloud infrastructure.
          </p>
        </div>

        {/* Main Content Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          
          <div className="space-y-6 text-gray-700 text-base leading-relaxed">
            <p>
              Are you concerned about security risks in your cloud infrastructure? At <strong>Kavach Cloud</strong>, we offer <strong>professional cloud security assessment services in India</strong> that can help protect your business from cloud-specific threats. Our <strong>cloud penetration testing</strong> and <strong>security audit services</strong> help organizations identify vulnerabilities in cloud configurations, IAM policies, and containerized applications before attackers exploit them.
            </p>

            <p>
              Our team of <strong>certified cloud security experts</strong> specializes in <strong>AWS security testing</strong>, <strong>Azure security assessments</strong>, and <strong>Google Cloud Platform (GCP) security audits</strong>. We follow industry frameworks including <strong>CIS Benchmarks</strong>, <strong>AWS Well-Architected Framework</strong>, <strong>Azure Security Benchmark</strong>, and <strong>NIST Cloud Security</strong> standards to ensure comprehensive coverage.
            </p>

            <p>
              We take a systematic approach to <strong>cloud security testing</strong>, evaluating IAM configurations, network security groups, encryption settings, logging and monitoring, API security, and serverless function security. This enables us to provide detailed findings with remediation guidance specific to your cloud environment and compliance requirements.
            </p>

            <p>
              <strong>Kavach Cloud</strong> conducts thorough assessments of <strong>cloud misconfigurations</strong> including exposed S3 buckets, overly permissive IAM roles, insecure security groups, unencrypted storage, and weak API authentication. Our services include <strong>Kubernetes security testing</strong>, <strong>Docker container security</strong>, <strong>serverless security assessment</strong>, and <strong>cloud access control review</strong>.
            </p>

            <p>
              We also provide <strong>cloud compliance assessments</strong> for standards like <strong>ISO 27001</strong>, <strong>SOC 2</strong>, <strong>PCI-DSS</strong>, <strong>HIPAA</strong>, and <strong>GDPR</strong>. From <strong>identity and access management (IAM) review</strong> to <strong>data encryption validation</strong>, we ensure your cloud infrastructure meets security best practices and regulatory requirements.
            </p>

            <p>
              Our <strong>cloud security reports</strong> deliver executive summaries, detailed vulnerability findings with <strong>CVSS scores</strong>, configuration remediation steps, IAM policy recommendations, and compliance gap analysis to enhance your organization's <strong>cloud security posture</strong> and reduce attack surface.
            </p>

            <p>
              Don't leave your cloud security to chance. Let <strong>Kavach Cloud</strong> help you secure your cloud infrastructure through professional security testing and assessments that protect your business data and ensure compliance.
            </p>
          </div>

          <div className="bg-gradient-to-br from-cyan-600 to-blue-600 rounded-2xl flex items-center justify-center p-12 sticky top-24 h-fit">
            <div className="text-center text-white">
              <Cloud className="w-40 h-40 mx-auto opacity-90" />
              <p className="text-xl font-semibold mt-6">Cloud Security</p>
              <p className="text-sm mt-2 opacity-80">AWS | Azure | GCP</p>
            </div>
          </div>

        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
              <Search className="w-6 h-6 text-cyan-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Cloud Configuration Review
            </h3>
            <p className="text-gray-600">
              Comprehensive assessment of <strong>cloud misconfigurations</strong> including exposed storage buckets, weak security groups, public snapshots, and insecure API endpoints across AWS, Azure, and GCP environments using automated tools and manual validation.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Lock className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              IAM Security Assessment
            </h3>
            <p className="text-gray-600">
              In-depth review of <strong>Identity and Access Management</strong> policies, role permissions, service accounts, and privilege escalation paths. We identify overly permissive policies and recommend <strong>least privilege access</strong> implementations.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-cyan-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Container & Kubernetes Security
            </h3>
            <p className="text-gray-600">
              Security testing of <strong>containerized applications</strong>, Docker images, and Kubernetes clusters including RBAC misconfigurations, exposed dashboards, insecure pod security policies, and <strong>container escape vulnerabilities</strong>.
            </p>
          </div>

        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-cyan-600 to-blue-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Secure Your Cloud Infrastructure with Expert Testing
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto opacity-90">
            Partner with <strong>Kavach Cloud</strong> for comprehensive <strong>cloud security testing</strong>, <strong>AWS security assessments</strong>, and <strong>cloud penetration testing services</strong> that help startups and businesses secure their cloud environments and maintain compliance. Contact us today for professional cloud security services in India.
          </p>

          <button className="bg-white text-cyan-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg">
            Request Cloud Security Assessment
          </button>
        </div>

      </div>
    </section>
  );
}