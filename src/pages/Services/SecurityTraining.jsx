import { GraduationCap, Users, ShieldCheck, Lock } from "lucide-react";

export default function SecurityTraining() {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Page Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent mb-6">
            Cybersecurity Training Services
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            <strong>Kavach Cloud</strong> provides professional 
            <strong> cybersecurity training programs</strong> to empower 
            employees, developers, and security teams with the knowledge 
            and skills needed to defend against modern cyber threats.
          </p>
        </div>

        {/* Main Content Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">

          <div className="space-y-6 text-gray-700 text-base leading-relaxed">
            <p>
              Human error remains one of the biggest security risks. 
              At <strong>Kavach Cloud</strong>, our 
              <strong> security training programs</strong> help organizations 
              build a strong security culture and reduce the risk of 
              phishing attacks, social engineering, and data breaches.
            </p>

            <p>
              We offer 
              <strong> security awareness training</strong>, 
              <strong> secure coding workshops</strong>, 
              <strong> incident response simulations</strong>, and 
              <strong> role-based security training</strong> 
              tailored for employees, developers, and IT teams.
            </p>

            <p>
              Our training modules follow 
              <strong> OWASP</strong>, 
              <strong> NIST</strong>, and 
              <strong> MITRE ATT&CK</strong> frameworks to ensure 
              industry-relevant learning and practical security knowledge.
            </p>

            <p>
              Services include 
              <strong> phishing simulation exercises</strong>, 
              <strong> cloud security training</strong>, 
              <strong> DevSecOps workshops</strong>, and 
              <strong> compliance awareness sessions</strong>.
            </p>

            <p>
              With <strong>Kavach Cloud</strong>, you receive 
              <strong> training reports</strong>, 
              knowledge assessments, and 
              improvement recommendations to strengthen 
              your organization’s security posture.
            </p>

            <p>
              Educate. Empower. Protect. 
              Build a security-first workforce with 
              <strong> Kavach Cloud Security Training</strong>.
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-600 to-yellow-600 rounded-2xl flex items-center justify-center p-12 sticky top-24 h-fit">
            <div className="text-center text-white">
              <GraduationCap className="w-40 h-40 mx-auto opacity-90" />
              <p className="text-xl font-semibold mt-6">Security Training</p>
              <p className="text-sm mt-2 opacity-80">Build a Security-First Culture</p>
            </div>
          </div>

        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Security Awareness Training
            </h3>
            <p className="text-gray-600">
              Train employees to recognize 
              <strong> phishing</strong>, 
              <strong> social engineering</strong>, and 
              common cyber threats.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Secure Development Training
            </h3>
            <p className="text-gray-600">
              Hands-on workshops for 
              <strong> secure coding</strong>, 
              <strong> DevSecOps</strong>, and 
              application security best practices.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <Lock className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Incident Response Simulation
            </h3>
            <p className="text-gray-600">
              Practical 
              <strong> incident response drills</strong> 
              and tabletop exercises to prepare teams 
              for real cyber attacks.
            </p>
          </div>

        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-orange-600 to-yellow-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Train Your Team Against Cyber Threats
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto opacity-90">
            Partner with <strong>Kavach Cloud</strong> for 
            <strong> Cybersecurity Training Services</strong> that 
            empower your workforce and strengthen organizational security.
          </p>

          <button className="bg-white text-orange-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg">
            Request Training Program
          </button>
        </div>

      </div>
    </section>
  );
}
