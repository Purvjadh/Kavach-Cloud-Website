import {
  Code,
  ShieldCheck,
  SearchCheck,
  Bug,
  FileText,
  Workflow,
  Lock,
  CheckCircle,
} from "lucide-react";

export default function SourceCodeReview() {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Page Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent mb-6">
            Secure Source Code Review Services
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            <strong>Kavach Cloud</strong> provides industry-leading 
            <strong> source code review services</strong> to identify security vulnerabilities,
            insecure coding practices, and architectural risks before your software reaches production.
            Our security experts perform comprehensive 
            <strong> Static Application Security Testing (SAST)</strong> combined with manual review 
            to deliver highly accurate, actionable security insights.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          
          <div className="space-y-6 text-gray-700 text-base leading-relaxed">
            <p>
              Modern cyber threats exploit weak application code. At <strong>Kavach Cloud</strong>,
              our <strong>secure code review services</strong> help organizations proactively detect 
              vulnerabilities such as <strong>SQL Injection</strong>, <strong>XSS</strong>, 
              <strong>CSRF</strong>, <strong>Authentication flaws</strong>, 
              <strong>Authorization bypasses</strong>, and insecure data handling.
            </p>

            <p>
              We perform deep <strong>manual and automated static code analysis</strong> to examine 
              application logic, security controls, API flows, cryptographic implementations, 
              and third-party dependencies. Our review methodology follows 
              <strong> OWASP Top 10</strong>, <strong>CWE</strong>, <strong>NIST</strong>, and 
              <strong> secure SDLC best practices</strong>.
            </p>

            <p>
              Our services cover <strong>web applications</strong>, <strong>mobile apps</strong>,
              <strong> cloud-native platforms</strong>, <strong>APIs</strong>, and 
              <strong> backend services</strong>. We identify hidden logic flaws and 
              misconfigurations that automated scanners often miss.
            </p>

            <p>
              We help startups and enterprises integrate <strong>DevSecOps</strong> practices into 
              CI/CD pipelines, enabling continuous security throughout the 
              <strong> software development lifecycle</strong>.
            </p>

            <p>
              You receive a detailed <strong>security assessment report</strong> containing:
            </p>

            <ul className="list-disc ml-6 space-y-2">
              <li>Vulnerability findings with severity ratings</li>
              <li>Proof-of-concept exploitation examples</li>
              <li>Code-level remediation guidance</li>
              <li>Secure coding recommendations</li>
              <li>Executive risk summary</li>
            </ul>

            <p>
              Don’t let insecure code become your weakest link. Strengthen your 
              application security posture with professional 
              <strong> source code security reviews</strong>.
            </p>
          </div>

          {/* Right Sticky Card */}
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center p-12 sticky top-24 h-fit">
            <div className="text-center text-white">
              <Code className="w-40 h-40 mx-auto opacity-90" />
              <p className="text-xl font-semibold mt-6">Secure Code Review</p>
              <p className="text-sm mt-2 opacity-80">
                Identify Risks. Fix Faster. Build Secure.
              </p>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">

          <FeatureCard
            icon={<SearchCheck className="w-6 h-6 text-green-600" />}
            title="Static Code Analysis"
            desc="Automated and manual SAST to detect insecure functions, unsafe coding patterns, and logic flaws."
          />

          <FeatureCard
            icon={<Bug className="w-6 h-6 text-green-600" />}
            title="Vulnerability Discovery"
            desc="Identification of OWASP Top 10 risks, insecure authentication flows, and data exposure issues."
          />

          <FeatureCard
            icon={<ShieldCheck className="w-6 h-6 text-green-600" />}
            title="Secure Coding Guidance"
            desc="Developer-friendly remediation support and best practices to improve long-term security maturity."
          />

          <FeatureCard
            icon={<Lock className="w-6 h-6 text-green-600" />}
            title="Compliance Assurance"
            desc="Supports compliance with ISO 27001, PCI-DSS, GDPR, HIPAA, and industry security regulations."
          />
        </div>

        {/* Process Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
            Our Secure Code Review Process
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">

            <ProcessStep icon={<FileText />} title="Scope & Planning"
              desc="Define application scope, tech stack, and security requirements." />

            <ProcessStep icon={<SearchCheck />} title="Static Analysis"
              desc="Automated scanning and manual expert review of source code." />

            <ProcessStep icon={<Bug />} title="Vulnerability Reporting"
              desc="Detailed findings with severity ratings and PoC evidence." />

            <ProcessStep icon={<CheckCircle />} title="Remediation Support"
              desc="Developer guidance and re-testing to confirm fixes." />
          </div>
        </div>


       {/* CTA Section */}
<div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-12 text-center text-white">
  
  <h2 className="text-3xl md:text-4xl font-bold mb-5">
    Secure Your Software Before It Reaches Production
  </h2>

  <p className="text-lg max-w-4xl mx-auto mb-6 opacity-95 leading-relaxed">
    In today’s threat landscape, a single insecure line of code can lead to massive data breaches 
    and reputational damage. At <strong>Kavach Cloud</strong>, we deliver expert-led 
    <strong> source code security reviews</strong> that uncover vulnerabilities early, 
    eliminate hidden risks, and help your development team build security into every stage 
    of the software lifecycle.
  </p>

  <p className="text-base max-w-3xl mx-auto mb-8 opacity-90">
    From startups launching new applications to enterprises meeting compliance requirements, 
    our tailored <strong>secure code assessment services</strong> ensure your software remains 
    resilient against modern cyberattacks, regulatory penalties, and costly downtime.
  </p>

  {/* Single CTA Button */}
  <button className="bg-white text-green-600 px-12 py-4 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg">
    Request a Secure Code Review
  </button>

  {/* Supporting Trust Line */}
  <p className="text-sm mt-6 opacity-80">
    100% Confidential Code Handling • Expert Security Analysts • Actionable Remediation Reports
  </p>

</div>


      </div>
    </section>
  );
}

/* Reusable Components */

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}

function ProcessStep({ icon, title, desc }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
        {icon}
      </div>
      <h4 className="font-semibold text-gray-800 mb-2">{title}</h4>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  );
}

function FaqItem({ q, a }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h4 className="font-semibold text-gray-800 mb-2">{q}</h4>
      <p className="text-gray-600">{a}</p>
    </div>
  );
}
