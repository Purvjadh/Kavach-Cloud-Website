import {
    Shield,
    Bug,
    Target,
    Activity,
    Users,
    Cloud,
    Radar,
    Code,
    Network,
    Server,
    FileCheck,
    Lock,
    GitBranch,
    Smartphone,
    Eye,
    Briefcase,
    GraduationCap
} from "lucide-react";

export const services = [{
        id: 1,
        icon: Shield,
        title: "Advanced Reverse Engineering",
        slug: "advanced-reverse-engineering",
        description: "Deep analysis of software, malware, and firmware ",
        features: ["Binary analysis", "Firmware inspection", "Protocol reversing"],
        color: "purple",
        gradient: "from-purple-600 to-indigo-600",

    },
    {
        id: 2,
        icon: Bug,
        title: "Malware Development & Analysis",
        slug: "malware-development-analysis",
        description: "Custom malware development and advanced malware behavior analysis.",
        features: ["Red team payloads", "Threat analysis", "Evasion techniques"],
        color: "red",
        gradient: "from-red-600 to-pink-600"
    },
    {
        id: 3,
        icon: Target,
        title: "Penetration Testing",
        slug: "penetration-testing",
        description: "Offensive security testing to identify and exploit real-world vulnerabilities.",
        features: ["Web & API testing", "Network attacks", "Mobile testing", "Exploit validation"],
        color: "orange",
        gradient: "from-orange-600 to-yellow-600"
    },
    {
        id: 4,
        icon: Activity,
        title: "Incident Response & Forensics",
        slug: "incident-response-forensics",
        description: "Rapid incident handling and detailed forensic investigation.",
        features: ["Threat containment", "Log analysis", "Timeline reconstruction"],
        color: "blue",
        gradient: "from-blue-600 to-cyan-600"
    },
    {
        id: 5,
        icon: Users,
        title: "Red Team & Social Engineering",
        slug: "red-team-social-engineering",
        description: "Simulated real-world attacks to test organizational security posture.",
        features: ["Phishing campaigns", "Adversary simulation", "Human factor testing"],
        color: "pink",
        gradient: "from-pink-600 to-purple-600"
    },
    {
        id: 6,
        icon: Cloud,
        title: "Cloud Security Testing",
        slug: "cloud-security-testing",
        description: "Security assessment of AWS, Azure, and GCP environments.",
        features: ["Cloud misconfigurations", "IAM review", "Container security", "Risk remediation"],
        color: "cyan",
        gradient: "from-cyan-600 to-blue-600"
    },
    {
        id: 7,
        icon: Radar,
        title: "Threat Hunting & Malware Analysis",
        slug: "threat-hunting-malware-analysis",
        description: "Proactive threat detection and advanced malware investigations.",
        features: ["Threat detection", "IOC analysis", "Behavioral analysis"],
        color: "indigo",
        gradient: "from-indigo-600 to-purple-600"
    },
    {
        id: 8,
        icon: Code,
        title: "Source Code Review",
        slug: "source-code-review",
        description: "Security-focused review of application source code.",
        features: ["Secure coding review", "Logic flaws", "OWASP issues", "Hardening guidance"],
        color: "green",
        gradient: "from-green-600 to-teal-600"
    },
    {
        id: 9,
        icon: Network,
        title: "Network Security Assessment",
        slug: "network-security-assessment",
        description: "Evaluation of network architecture and security controls.",
        features: ["Firewall review", "Segmentation testing", "Network attacks"],
        color: "yellow",
        gradient: "from-yellow-600 to-orange-600"
    },
    {
        id: 10,
        icon: Server,
        title: "Active Directory Security",
        slug: "active-directory-security",
        description: "Hardening Active Directory against modern attack techniques.",
        features: ["Privilege review", "Attack path analysis", "AD hardening", "Monitoring setup"],
        color: "blue",
        gradient: "from-blue-600 to-indigo-600"
    },
    {
        id: 11,
        icon: FileCheck,
        title: "Compliance Readiness",
        slug: "compliance-readiness",
        description: "Preparation for ISO, GDPR, PCI-DSS, and regulatory audits.",
        features: ["Gap analysis", "Policy mapping", "Audit support", "Risk remediation"],
        color: "emerald",
        gradient: "from-emerald-600 to-green-600"
    },
    {
        id: 12,
        icon: Lock,
        title: "Zero Trust Security",
        slug: "zero-trust-security",
        description: "Implementation of Zero Trust architecture across infrastructure.",
        features: ["Least privilege", "Continuous verification", "Access control", "Identity security"],
        color: "slate",
        gradient: "from-slate-600 to-gray-600"
    },
    {
        id: 13,
        icon: GitBranch,
        title: "DevSecOps Integration",
        slug: "devsecops-integration",
        description: "Embedding security into CI/CD and development pipelines.",
        features: ["SAST & DAST", "Pipeline security", "Automated scans", "Secure SDLC"],
        color: "violet",
        gradient: "from-violet-600 to-purple-600"
    },
    {
        id: 14,
        icon: Smartphone,
        title: "Mobile & IoT Security",
        slug: "mobile-iot-security",
        description: "Security testing of mobile applications and IoT devices.",
        features: ["Mobile app testing", "IoT firmware review", "Insecure APIs", "Device hardening"],
        color: "teal",
        gradient: "from-teal-600 to-cyan-600"
    },
    {
        id: 15,
        icon: Eye,
        title: "Threat Intelligence",
        slug: "threat-intelligence",
        description: "Cyber threat intelligence and dark web monitoring.",
        features: ["Threat actor tracking", "Dark web monitoring", "IOC feeds", "Early warning"],
        color: "rose",
        gradient: "from-rose-600 to-red-600"
    },
    {
        id: 16,
        icon: Briefcase,
        title: "vCISO Services",
        slug: "vciso-services",
        description: "Virtual CISO services for strategic security leadership.",
        features: ["Security roadmap", "Risk management", "Executive guidance", "Policy oversight"],
        color: "neutral",
        gradient: "from-neutral-600 to-slate-600"
    },
    {
        id: 17,
        icon: GraduationCap,
        title: "Security Training",
        slug: "security-training",
        description: "Employee security awareness and phishing simulation programs.",
        features: ["Awareness training", "Phishing simulations", "User assessments", "Security culture"],
        color: "amber",
        gradient: "from-amber-600 to-yellow-600"
    }
];