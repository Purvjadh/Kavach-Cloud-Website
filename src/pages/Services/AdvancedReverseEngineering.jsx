import { Shield, Code, Search, Lock } from 'lucide-react';

export default function AdvancedReverseEngineering() {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Page Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            Advanced Reverse Engineering Services
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            <strong>Kavach Cloud</strong> provides professional <strong>reverse engineering services</strong> and <strong>binary analysis solutions</strong> to help startups and businesses understand software vulnerabilities, analyze malware, and secure firmware. Our expert team specializes in <strong>software reverse engineering</strong>, <strong>protocol analysis</strong>, and <strong>security research</strong> to protect your digital infrastructure.
          </p>
        </div>

        {/* Main Content Section - Text on Left, Image on Right */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          
          {/* Left Side - Text Content */}
          <div className="space-y-6 text-gray-700 text-base leading-relaxed">
            <p>
              Are you struggling to understand how proprietary software works or identify hidden vulnerabilities in your applications? At <strong>Kavach Cloud</strong>, we offer <strong>professional reverse engineering services in India</strong> that can help take your security analysis to the next level. Our <strong>advanced reverse engineering</strong> and <strong>binary analysis services</strong> help security teams dissect software, understand malicious code behavior, and identify security weaknesses in compiled applications.
            </p>

            <p>
              Our team of <strong>reverse engineering experts</strong> uses cutting-edge disassemblers, decompilers, and debugging tools to analyze binary files, firmware, and protocols. We specialize in <strong>x86/x64 assembly analysis</strong>, <strong>ARM architecture reverse engineering</strong>, <strong>mobile app decompilation</strong>, and <strong>IoT firmware analysis</strong>. We understand that reverse engineering is not just about taking things apart, it's a tool to identify security flaws and improve software protection.
            </p>

            <p>
              We take a systematic approach to <strong>software reverse engineering</strong>, starting with a deep understanding of your security objectives, target applications, and threat scenarios. This enables us to deliver comprehensive analysis that reflects your organization's unique security requirements and compliance needs.
            </p>

            <p>
              <strong>Kavach Cloud</strong> conducts detailed <strong>malware reverse engineering</strong>, <strong>vulnerability research</strong>, and <strong>exploit analysis</strong> to help enterprises understand attack mechanisms. Our services include <strong>firmware reverse engineering</strong> for embedded devices, <strong>protocol reverse engineering</strong> for proprietary communication systems, and <strong>anti-tampering analysis</strong> for software protection mechanisms.
            </p>

            <p>
              We also specialize in <strong>obfuscation analysis</strong> and <strong>code unpacking</strong> to reveal hidden functionality in protected binaries. From <strong>PE file analysis</strong> to <strong>ELF binary examination</strong>, we ensure your security team understands the complete attack surface of your software ecosystem.
            </p>

            <p>
              Our <strong>reverse engineering research services</strong> deliver detailed documentation including <strong>assembly code analysis</strong>, <strong>function call graphs</strong>, <strong>data flow diagrams</strong>, and <strong>vulnerability reports</strong> to enhance your organization's <strong>security research capabilities</strong> and <strong>exploit development prevention</strong> strategies.
            </p>

            <p>
              Don't settle for black-box security testing. Let <strong>Kavach Cloud</strong> help you understand the inner workings of software through professional reverse engineering that protects your business from sophisticated attacks and intellectual property theft.
            </p>
          </div>

          {/* Right Side - Image/Placeholder */}
          <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center p-12 sticky top-24 h-fit">
            <div className="text-center text-white">
              <Shield className="w-40 h-40 mx-auto opacity-90" />
              <p className="text-xl font-semibold mt-6">Reverse Engineering</p>
              <p className="text-sm mt-2 opacity-80">Binary & Firmware Analysis</p>
            </div>
          </div>

        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Code className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Binary Analysis & Disassembly
            </h3>
            <p className="text-gray-600">
              Deep <strong>static analysis</strong> of compiled binaries using industry-leading tools like IDA Pro, Ghidra, and Binary Ninja. We analyze <strong>assembly code</strong>, identify vulnerabilities, and document software behavior for security research and <strong>exploit development prevention</strong>.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <Search className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Firmware Reverse Engineering
            </h3>
            <p className="text-gray-600">
              Comprehensive <strong>firmware extraction</strong> and analysis for embedded devices, routers, IoT systems, and industrial control systems. We identify <strong>backdoors</strong>, <strong>hardcoded credentials</strong>, and security vulnerabilities in device firmware.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Lock className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Protocol Reverse Engineering
            </h3>
            <p className="text-gray-600">
              Analysis of proprietary network protocols and communication standards through <strong>packet capture analysis</strong>, <strong>traffic reconstruction</strong>, and <strong>protocol fuzzing</strong> to identify security weaknesses and ensure secure implementation.
            </p>
          </div>

        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Uncover Hidden Vulnerabilities with Expert Reverse Engineering
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto opacity-90">
            Partner with <strong>Kavach Cloud</strong> for comprehensive <strong>reverse engineering</strong>, <strong>binary analysis</strong>, and <strong>security research services</strong> that help startups and businesses understand software internals and protect against sophisticated attacks. Contact us today for professional reverse engineering services in India.
          </p>

          <button className="bg-white text-purple-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg">
            Request Reverse Engineering Consultation
          </button>
        </div>

      </div>
    </section>
  );
}