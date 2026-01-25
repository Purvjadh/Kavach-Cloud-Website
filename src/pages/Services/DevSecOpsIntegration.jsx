import { GitBranch, ShieldCheck, Code, Lock } from "lucide-react";

export default function DevSecOpsIntegration() {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Page Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
            DevSecOps Integration Services
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            <strong>Kavach Cloud</strong> provides professional 
            <strong> DevSecOps integration services</strong> to embed 
            security directly into your software development lifecycle. 
            We help organizations automate security testing, improve code quality, 
            strengthen cloud security, and deliver secure applications at speed.
          </p>
        </div>

        {/* Main Content Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">

          {/* Left Content */}
          <div className="space-y-6 text-gray-700 text-base leading-relaxed">

            <p>
              In today’s rapid development environments, security can no longer be an afterthought. 
              At <strong>Kavach Cloud</strong>, our 
              <strong> DevSecOps integration services</strong> ensure that security 
              is embedded into every stage of your CI/CD pipeline — from 
              code commit and build to deployment and production monitoring.
            </p>

            <p>
              We help organizations implement 
              <strong>automated security testing</strong>, 
              <strong>static and dynamic application security testing (SAST/DAST)</strong>, 
              <strong>software composition analysis (SCA)</strong>, and 
              <strong>container image scanning</strong> to identify vulnerabilities 
              early in the development process.
            </p>

            <p>
              Our DevSecOps engineers integrate industry-leading tools into 
              <strong>CI/CD pipelines</strong>, enabling continuous security checks, 
              automated policy enforcement, and real-time vulnerability management — 
              without disrupting developer productivity.
            </p>

            <p>
              We design <strong>secure pipeline architectures</strong>, 
              implement <strong>infrastructure-as-code (IaC) security</strong>, 
              enforce <strong>secrets management</strong>, and automate 
              <strong>cloud security controls</strong> to protect workloads 
              across on-premise, cloud, and hybrid environments.
            </p>

            <p>
              Our services also include <strong>DevSecOps maturity assessments</strong>, 
              <strong>toolchain selection and integration</strong>, 
              <strong>developer security training</strong>, and 
              <strong>continuous compliance monitoring</strong> to build 
              long-term secure development culture.
            </p>

            <p>
              We further assist in implementing <strong>runtime application self-protection (RASP)</strong>, 
              <strong>API security testing</strong>, and <strong>software bill of materials (SBOM)</strong> 
              generation to improve visibility into application components and supply chain risks. 
              These measures help organizations defend against modern threats such as dependency 
              hijacking and pipeline injection attacks.
            </p>
            <p>
              In addition, our experts provide <strong>DevSecOps governance frameworks</strong>, 
              <strong>toolchain optimization</strong>, and <strong>security metrics dashboards</strong> 
              that enable leadership teams to track security maturity, vulnerability trends, 
              and compliance status in real time — transforming security into a measurable, 
              continuous improvement process.
            </p>

            <p>
              At the end of the engagement, you receive a detailed 
              <strong>DevSecOps maturity report</strong>, implementation roadmap, 
              and <strong>hands-on deployment support</strong> to ensure 
              sustainable and scalable secure software delivery.
            </p>

            <p>
              Deliver faster. Ship safer. Build security into your DevOps DNA 
              with <strong>Kavach Cloud DevSecOps Integration</strong>.
            </p>

          </div>

          {/* Right Card */}
          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center p-12 sticky top-24 h-fit">
            <div className="text-center text-white">
              <GitBranch className="w-40 h-40 mx-auto opacity-90" />
              <p className="text-xl font-semibold mt-6">DevSecOps</p>
              <p className="text-sm mt-2 opacity-80">Secure CI/CD Pipelines</p>
            </div>
          </div>

        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <Code className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Automated Security Testing
            </h3>
            <p className="text-gray-600">
              Integrate <strong>SAST</strong>, <strong>DAST</strong>, 
              <strong>SCA</strong>, and <strong>dependency scanning</strong> 
              directly into pipelines to detect vulnerabilities early.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Secure Pipeline Architecture
            </h3>
            <p className="text-gray-600">
              Design and implement 
              <strong>secure CI/CD pipelines</strong> with 
              continuous monitoring, access control, and compliance enforcement.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <Lock className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Secrets & Cloud Security
            </h3>
            <p className="text-gray-600">
              Implement 
              <strong>secure secrets management</strong>, 
              <strong>container security</strong>, and 
              <strong>cloud workload protection</strong> 
              across DevOps environments.
            </p>
          </div>

        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-14 text-center text-white">
          
          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            Integrate Security Into Every Build
          </h2>

          <p className="text-base md:text-lg max-w-4xl mx-auto mb-5 opacity-95 leading-relaxed">
            Modern software delivery demands speed — but speed without security 
            leads to costly breaches. Our expert-led 
            <strong> DevSecOps integration services</strong> help you embed 
            automated security controls into every phase of development, 
            ensuring vulnerabilities are detected and resolved before release.
          </p>

          <button className="bg-white text-indigo-600 px-12 py-4 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg">
            Request DevSecOps Consultation
          </button>

         

        </div>

      </div>
    </section>
  );
}
