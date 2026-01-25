import cyberBg from "../assets/images/cyber-bg.jpg";
import founderImg from "../assets/images/user-avatar-two.png";

export default function AboutPage() {
  return (
    <div className="bg-white">

      {/* HERO SECTION */}
      <section
         className="relative py-36 bg-cover bg-center bg-no-repeat text-white"
         style={{ backgroundImage: `url(${cyberBg})` }}
      >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20"></div>

      <div className="relative container mx-auto px-6 text-center">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-wide">
         About Kavach Cloud
      </h1>
      <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
         Building a digital shield for businesses in the era of modern cyber threats.
      </p>
     </div>
    </section>

      {/* STORY + MISSION */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">

            <h2 className="text-4xl font-bold mb-8">
              Our Story
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Kavach Cloud was founded with a clear purpose — to make cybersecurity 
              accessible, effective, and future-ready for businesses of all sizes. 
              As digital transformation accelerates, we recognized the need for 
              security solutions that go beyond traditional defenses.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our name “Kavach” represents protection — a modern digital shield 
              designed to safeguard organizations while enabling innovation 
              with confidence.
            </p>

            <div className="w-24 h-1 bg-gradient-to-r from-sky-500 to-cyan-400 mx-auto my-12 rounded-full"></div>

            <h2 className="text-4xl font-bold mb-8">
              Our Mission
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              We believe cybersecurity should be proactive, intelligent, 
              and aligned with business goals. Through security assessments, 
              threat intelligence, DevSecOps, and training, we empower teams 
              to stay ahead of attackers.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              At Kavach Cloud, we are committed to delivering trust, 
              resilience, and long-term protection — helping organizations 
              grow securely in an increasingly connected world.
            </p>

          </div>
        </div>
      </section>

      {/* FOUNDER SECTION */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* Image */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-tr from-sky-500 to-cyan-400 rounded-full blur opacity-40"></div>
                <img
                  src={founderImg}
                  alt="Founder of Kavach Cloud"
                  className="relative w-72 h-72 rounded-full object-cover shadow-xl border-4 border-white"
                />
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-4xl font-bold mb-4">
                Our Founder
              </h2>
              <h3 className="text-2xl font-semibold text-gray-800 mb-1">
                Pancham Narang
              </h3>
              <p className="text-sm text-sky-600 font-medium mb-6">
                CEO & Founder — Kavach Cloud
              </p>

              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                Kavach Cloud was founded with a vision to create a safer 
                digital ecosystem for businesses embracing cloud and 
                modern technologies. Pancham established Kavach Cloud 
                to bridge the gap between advanced security innovation 
                and real-world business challenges.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed">
                He believes cybersecurity is not just about technology — 
                it’s about building trust, resilience, and confidence 
                in the digital age.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

