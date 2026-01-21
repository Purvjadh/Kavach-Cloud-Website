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
        icon: Shield,
        title: "Advanced Reverse Engineering",
        description: "Deep analysis of software, malware, and firmware.",
        features: ["Binary analysis", "Firmware inspection", "Protocol reversing"],
        gradient: "from-purple-600 to-indigo-600",
        link: "/services/reverse-engineering"
    },
    {
        icon: Bug,
        title: "Malware Development & Analysis",
        description: "Custom malware development and advanced malware behavior analysis.",
        features: ["Red team payloads", "Threat analysis", "Evasion techniques"],
        gradient: "from-red-600 to-pink-600",
        link: "/services/malware-analysis"
    },
    {
        icon: Target,
        title: "Penetration Testing",
        description: "Offensive security testing to identify vulnerabilities.",
        features: ["Web & API testing", "Network attacks", "Mobile testing", "Exploit validation"],
        gradient: "from-orange-600 to-yellow-600",
        link: "/services/penetration-testing"
    },

    /* Other services (links can be added later) */
    {
        icon: Activity,
        title: "Incident Response & Forensics",
        description: "Rapid incident handling and forensic investigation.",
        features: ["Threat containment", "Log analysis", "Timeline reconstruction"],
        gradient: "from-blue-600 to-cyan-600",
        link: "/services"
    },
    {
        icon: Users,
        title: "Red Team & Social Engineering",
        description: "Simulated real-world attack testing.",
        features: ["Phishing campaigns", "Adversary simulation", "Human testing"],
        gradient: "from-pink-600 to-purple-600",
        link: "/services"
    },
    {
        icon: Cloud,
        title: "Cloud Security Testing",
        description: "AWS, Azure, and GCP security assessments.",
        features: ["Cloud misconfigurations", "IAM review", "Container security"],
        gradient: "from-cyan-600 to-blue-600",
        link: "/services"
    },
    {
        icon: Radar,
        title: "Threat Hunting",
        description: "Proactive threat detection and analysis.",
        features: ["Threat detection", "IOC analysis", "Behavior tracking"],
        gradient: "from-indigo-600 to-purple-600",
        link: "/services"
    },
    {
        icon: Code,
        title: "Source Code Review",
        description: "Security-focused code reviews.",
        features: ["OWASP issues", "Logic flaws", "Secure coding"],
        gradient: "from-green-600 to-teal-600",
        link: "/services"
    },
    {
        icon: Network,
        title: "Network Security Assessment",
        description: "Network architecture and security testing.",
        features: ["Firewall review", "Segmentation testing", "Network attacks"],
        gradient: "from-yellow-600 to-orange-600",
        link: "/services"
    },
    {
        icon: Server,
        title: "Active Directory Security",
        description: "AD security hardening services.",
        features: ["Privilege review", "Attack path analysis", "Monitoring"],
        gradient: "from-blue-600 to-indigo-600",
        link: "/services"
    },
    {
        icon: FileCheck,
        title: "Compliance Readiness",
        description: "ISO, GDPR, PCI-DSS compliance preparation.",
        features: ["Gap analysis", "Audit support", "Risk remediation"],
        gradient: "from-emerald-600 to-green-600",
        link: "/services"
    },
    {
        icon: Lock,
        title: "Zero Trust Security",
        description: "Zero Trust architecture implementation.",
        features: ["Least privilege", "Continuous verification", "Access control"],
        gradient: "from-slate-600 to-gray-600",
        link: "/services"
    },
    {
        icon: GitBranch,
        title: "DevSecOps Integration",
        description: "Security in CI/CD pipelines.",
        features: ["SAST & DAST", "Pipeline security", "Secure SDLC"],
        gradient: "from-violet-600 to-purple-600",
        link: "/services"
    },
    {
        icon: Smartphone,
        title: "Mobile & IoT Security",
        description: "Mobile and IoT security testing.",
        features: ["App testing", "Firmware review", "Device hardening"],
        gradient: "from-teal-600 to-cyan-600",
        link: "/services"
    },
    {
        icon: Eye,
        title: "Threat Intelligence",
        description: "Cyber threat monitoring services.",
        features: ["Threat tracking", "Dark web monitoring", "IOC feeds"],
        gradient: "from-rose-600 to-red-600",
        link: "/services"
    },
    {
        icon: Briefcase,
        title: "vCISO Services",
        description: "Virtual CISO security leadership.",
        features: ["Risk management", "Security roadmap", "Policy guidance"],
        gradient: "from-neutral-600 to-slate-600",
        link: "/services"
    },
    {
        icon: GraduationCap,
        title: "Security Training",
        description: "Employee awareness training.",
        features: ["Phishing simulation", "Security culture", "User assessment"],
        gradient: "from-amber-600 to-yellow-600",
        link: "/services"
    }
];