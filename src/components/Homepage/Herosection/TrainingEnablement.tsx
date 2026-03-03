import React from 'react';
import { 
  Code2,
  GraduationCap,
  GitBranch,
  Shield,
  Zap,
  Users,
  ArrowRight,
  CheckCircle,
  Target,
  Cpu,
  Gauge,
  Award,
  BookOpen,
  Gamepad2,
  BarChart3,
  Layers
} from 'lucide-react';

interface ProgramCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
  level: 'Beginner' | 'Intermediate' | 'Advanced';
}

const ProgramCard: React.FC<ProgramCardProps> = ({ icon, title, description, tags, level }) => {
  const levelColors = {
    Beginner: 'bg-green-100 text-green-700',
    Intermediate: 'bg-blue-100 text-blue-700',
    Advanced: 'bg-purple-100 text-purple-700'
  };

  return (
    <div className="group bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-blue-200">
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center group-hover:bg-indigo-100 transition-colors">
          <div className="text-indigo-600">{icon}</div>
        </div>
        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${levelColors[level]}`}>
          {level}
        </span>
      </div>
      
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-4">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>
      
      <button className="inline-flex items-center text-indigo-600 font-medium text-sm hover:text-indigo-700 group/btn">
        Learn more
        <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
      </button>
    </div>
  );
};

interface MetricCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  change: string;
  positive: boolean;
}

const MetricCard: React.FC<MetricCardProps> = ({ icon, value, label, change, positive }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center">
          {icon}
        </div>
        <div>
          <div className="text-2xl font-bold text-gray-900">{value}</div>
          <div className="text-sm text-gray-500">{label}</div>
        </div>
      </div>
      <div className={`text-sm ${positive ? 'text-green-600' : 'text-amber-600'}`}>
        {change}
      </div>
    </div>
  );
};

const TrainingEnablement: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-indigo-50 rounded-full px-4 py-2 mb-6">
            <GraduationCap className="w-4 h-4 text-indigo-600 mr-2" />
            <span className="text-sm font-medium text-indigo-600">Pillar 2: Skills Development</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Training & Enablement
          </h1>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            The second pillar fueling true cybersecurity maturity is 
            <span className="text-indigo-600 font-semibold"> Training & Enablement</span> – 
            where awareness evolves into actionable skills, especially for the people 
            actually building your software: developers and the broader workforce.
          </p>
        </div>

        {/* Key Differentiators */}
        <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-2xl p-8 mb-12 text-white">
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <Zap className="w-6 h-6 mr-2" />
            What sets high-impact Training & Enablement apart in 2026?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Gamepad2 className="w-6 h-6" />,
                title: "Hands-on Programs",
                description: "Interactive labs, gamified challenges, and real-world simulations"
              },
              {
                icon: <GitBranch className="w-6 h-6" />,
                title: "Shift-Left Integration",
                description: "Embed secure-by-design principles early in development"
              },
              {
                icon: <BarChart3 className="w-6 h-6" />,
                title: "Continuous Upskilling",
                description: "Micro-learning, CTF tournaments, security champions"
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Workforce Enablement",
                description: "Tailored programs for all roles, from devs to executives"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-3">
                  {item.icon}
                </div>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-indigo-100">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Programs Grid */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 flex items-center">
              <Code2 className="w-6 h-6 mr-2 text-indigo-600" />
              Developer-Focused Training Programs
            </h2>
            <button className="text-indigo-600 font-medium text-sm hover:text-indigo-700 flex items-center">
              View all programs
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProgramCard 
              icon={<Code2 className="w-6 h-6" />}
              title="Secure Coding Fundamentals"
              description="Master OWASP Top 10 fixes in your actual languages and frameworks - JavaScript, Python, Go, and .NET."
              tags={["JavaScript", "Python", "OWASP", "IDE Integration"]}
              level="Beginner"
            />
            <ProgramCard 
              icon={<Shield className="w-6 h-6" />}
              title="API Security Deep Dive"
              description="Build secure APIs from the ground up with hands-on practice in authentication, authorization, and data validation."
              tags={["REST", "GraphQL", "JWT", "OAuth"]}
              level="Intermediate"
            />
            <ProgramCard 
              icon={<Cpu className="w-6 h-6" />}
              title="Supply Chain Security"
              description="Combat zero-days in dependencies and master dependency scanning, SBOM management, and vulnerability remediation."
              tags={["Dependencies", "SBOM", "SCA", "Zero-days"]}
              level="Advanced"
            />
            <ProgramCard 
              icon={<Layers className="w-6 h-6" />}
              title="Cloud Native Security"
              description="Secure infrastructure-as-code, containers, and Kubernetes deployments with practical hands-on labs."
              tags={["K8s", "Docker", "Terraform", "AWS/Azure"]}
              level="Intermediate"
            />
            <ProgramCard 
              icon={<GitBranch className="w-6 h-6" />}
              title="DevSecOps Pipeline Integration"
              description="Embed security tools and gates into CI/CD pipelines without slowing down development velocity."
              tags={["CI/CD", "Automation", "Jenkins", "GitHub Actions"]}
              level="Intermediate"
            />
            <ProgramCard 
              icon={<Award className="w-6 h-6" />}
              title="Security Champions Program"
              description="Cultivate security advocates within development teams through advanced training and mentorship."
              tags={["Leadership", "Mentorship", "Advocacy"]}
              level="Advanced"
            />
          </div>
        </div>

        {/* Metrics Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
            <Gauge className="w-6 h-6 mr-2 text-indigo-600" />
            Measurable Impact
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <MetricCard 
              icon={<Target className="w-4 h-4 text-indigo-600" />}
              value="76%"
              label="Fewer critical vulns"
              change="↓ 23% from last quarter"
              positive={true}
            />
            <MetricCard 
              icon={<Zap className="w-4 h-4 text-indigo-600" />}
              value="3.2x"
              label="Faster remediation"
              change="↓ 65% average fix time"
              positive={true}
            />
            <MetricCard 
              icon={<BookOpen className="w-4 h-4 text-indigo-600" />}
              value="89%"
              label="Developer satisfaction"
              change="↑ 12% engagement increase"
              positive={true}
            />
            <MetricCard 
              icon={<Shield className="w-4 h-4 text-indigo-600" />}
              value="$2.8M"
              label="Cost avoidance"
              change="Estimated annual savings"
              positive={true}
            />
          </div>
        </div>

        {/* Framework Alignment */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-12 border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <Layers className="w-5 h-5 mr-2 text-indigo-600" />
            Aligned with Industry Frameworks
          </h2>
          
          <div className="flex flex-wrap gap-3">
            {["OWASP SAMM", "BSIMM", "DevSecOps Maturity Model", "NIST SSDF", "CMMC", "GDPR"].map((framework, index) => (
              <span key={index} className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 border border-gray-200">
                {framework}
              </span>
            ))}
          </div>
          
          <p className="text-gray-600 mt-4 text-sm">
            Benchmark progress and scale from ad-hoc to automated with proven maturity models
          </p>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-indigo-50 to-blue-50 rounded-3xl p-12 border border-indigo-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to empower your builders?
          </h2>
          
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Equip your teams with the tools, knowledge, and confidence to code securely from day one. 
            Transform your workforce into a secure development powerhouse.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors group text-lg">
              View Programs
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="inline-flex items-center bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors border-2 border-indigo-600 text-lg">
              Schedule Demo
            </button>
          </div>
          
          <div className="flex items-center justify-center gap-6 mt-8 text-sm text-gray-500">
            <span className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
              No credit card required
            </span>
            <span className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
              Start with 5 free seats
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingEnablement;