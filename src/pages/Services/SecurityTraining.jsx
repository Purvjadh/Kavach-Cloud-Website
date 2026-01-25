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

          {/* Left Content */}
          <div className="space-y-6 text-gray-700 text-base leading-relaxed">

            <p>
              Human error remains one of the leading causes of security breaches. 
              At <strong>Kavach Cloud</strong>, our 
              <strong> cybersecurity training programs</strong> help organizations 
              build a security-first culture that minimizes risks from phishing, 
              social engineering, insider threats, and accidental data exposure.
            </p>

            <p>
              We offer a wide range of training modules including 
              <strong> security awareness programs</strong>, 
              <strong> secure coding workshops</strong>, 
              <strong> incident response simulations</strong>, and 
              <strong> role-based technical training</strong> 
              designed for employees, developers, IT administrators, 
              and security professionals.
            </p>

            <p>
              Our training content follows globally recognized frameworks such as 
              <strong> OWASP</strong>, <strong>NIST</strong>, and 
              <strong> MITRE ATT&CK</strong>, ensuring participants gain 
              industry-relevant knowledge and hands-on practical skills 
              to handle real-world cyber threats.
            </p>
            <p>
              Our cybersecurity training programs also include 
              <strong> executive and leadership security briefings</strong> designed 
              to help decision-makers understand cyber risk, regulatory responsibilities, 
              and security investment priorities. This ensures security awareness is 
              embedded not only at technical levels but also in strategic business planning.
            </p>

            <p>
              Services include 
              <strong> phishing simulation campaigns</strong>, 
              <strong> cloud security training</strong>, 
              <strong> DevSecOps and secure SDLC workshops</strong>, and 
              <strong> compliance and data privacy awareness sessions</strong> 
              aligned with regulatory requirements.
            </p>

            <p>
              We also provide <strong>customized training roadmaps</strong>, 
              <strong>skill-level assessments</strong>, and 
              <strong>post-training performance reports</strong> 
              to measure knowledge improvement and identify further learning needs 
              across your organization.
            </p>

            <p>
              Our experts conduct <strong>hands-on labs</strong>, 
              <strong>capture-the-flag (CTF) exercises</strong>, and 
              <strong>realistic attack simulations</strong> to ensure participants 
              not only learn security concepts but also apply them in practical environments.
            </p>

            <p>
              Additionally, we offer <strong>training effectiveness analytics</strong>, 
              measuring user behavior improvements, phishing click-rate reductions, 
              and response readiness over time. These insights help leadership 
              track security maturity growth and demonstrate compliance with 
              audit and regulatory training requirements.
            </p>

            <p>
              Educate. Empower. Protect. 
              Build a resilient, security-aware workforce with 
              <strong> Kavach Cloud Cybersecurity Training</strong>.
            </p>

          </div>

          {/* Right Card */}
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
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Security Awareness Training
            </h3>
            <p className="text-gray-600">
              Train employees to recognize 
              <strong> phishing attacks</strong>, 
              <strong> social engineering</strong>, 
              and everyday cyber risks that lead to breaches.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Secure Development Training
            </h3>
            <p className="text-gray-600">
              Hands-on workshops for 
              <strong> secure coding</strong>, 
              <strong> DevSecOps practices</strong>, and 
              application security best practices.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <Lock className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Incident Response Simulation
            </h3>
            <p className="text-gray-600">
              Practical 
              <strong> incident response drills</strong> 
              and tabletop exercises that prepare teams 
              for real-world cyber attack scenarios.
            </p>
          </div>

        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-orange-600 to-yellow-600 rounded-2xl p-14 text-center text-white">
          
          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            Train Your Team Against Cyber Threats
          </h2>

          <p className="text-base md:text-lg max-w-4xl mx-auto mb-5 opacity-95 leading-relaxed">
            Technology alone cannot stop cyber attacks — people play a critical role 
            in defending your organization. Our expert-led 
            <strong> Cybersecurity Training Services</strong> equip your workforce 
            with practical knowledge, real attack awareness, and security best practices 
            to reduce human-driven security incidents.
          </p>

          <button className="bg-white text-orange-600 px-12 py-4 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg">
            Request Training Program
          </button>

        </div>

      </div>
    </section>
  );
}
