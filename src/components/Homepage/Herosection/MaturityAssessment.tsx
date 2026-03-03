import React, { useState } from 'react';
import { 
  BarChart3,
  ClipboardCheck,
  TrendingUp,
  Shield,
  Target,
  Users,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Layers,
  Gauge,
  PieChart,
  Award,
  FileText,
  Search,
  Brain,
  Building2,
  Network,
  Settings,
  Download,
  Calendar,
  ChevronRight,
  Code2
} from 'lucide-react';

interface MaturityLevelProps {
  level: string;
  description: string;
  color: string;
  percentage: number;
}

const MaturityLevel: React.FC<MaturityLevelProps> = ({ level, description, color, percentage }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-gray-900">{level}</h3>
        <span className={`text-sm font-medium px-3 py-1 rounded-full ${color}`}>
          {percentage}%
        </span>
      </div>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className={`h-2 rounded-full transition-all duration-500`}
          style={{ 
            width: `${percentage}%`,
            backgroundColor: color.includes('red') ? '#EF4444' : 
                           color.includes('yellow') ? '#F59E0B' :
                           color.includes('blue') ? '#3B82F6' :
                           color.includes('green') ? '#10B981' : '#8B5CF6'
          }}
        />
      </div>
    </div>
  );
};

interface FrameworkCardProps {
  icon: React.ReactNode;
  name: string;
  description: string;
  domains: number;
  popular: boolean;
}

const FrameworkCard: React.FC<FrameworkCardProps> = ({ icon, name, description, domains, popular }) => {
  return (
    <div className={`relative bg-white rounded-xl p-6 border ${popular ? 'border-purple-300 shadow-lg' : 'border-gray-200'} hover:shadow-lg transition-all`}>
      {popular && (
        <span className="absolute -top-3 right-4 bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
          Most Popular
        </span>
      )}
      <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-4">
        <div className="text-purple-600">{icon}</div>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{name}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500">{domains} domains</span>
        <button className="text-purple-600 font-medium text-sm hover:text-purple-700 flex items-center">
          View details
          <ChevronRight className="w-4 h-4 ml-1" />
        </button>
      </div>
    </div>
  );
};

interface AssessmentStepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  active: boolean;
}

const AssessmentStep: React.FC<AssessmentStepProps> = ({ number, title, description, icon, active }) => {
  return (
    <div className={`flex items-start gap-4 p-4 rounded-xl transition-all ${active ? 'bg-purple-50 border border-purple-100' : 'bg-white'}`}>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
        active ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-500'
      }`}>
        {number}
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <div className={`w-5 h-5 ${active ? 'text-purple-600' : 'text-gray-400'}`}>
            {icon}
          </div>
          <h4 className={`font-semibold ${active ? 'text-gray-900' : 'text-gray-600'}`}>{title}</h4>
        </div>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
};

const MaturityAssessment: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-purple-50 rounded-full px-4 py-2 mb-6">
            <BarChart3 className="w-4 h-4 text-purple-600 mr-2" />
            <span className="text-sm font-medium text-purple-600">Pillar 3: Diagnostic & Roadmap</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Maturity Assessment
          </h1>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            The third pillar that brings clarity and direction to your cybersecurity maturity journey is 
            <span className="text-purple-600 font-semibold"> Maturity Assessment</span> – 
            the diagnostic heartbeat that objectively reveals where you stand today, pinpoints critical gaps, 
            and maps a realistic path forward.
          </p>
        </div>

        {/* Value Proposition */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Brain className="w-6 h-6 mr-2" />
              Beyond Basic Assessment
            </h2>
            <p className="text-purple-100 leading-relaxed mb-6">
              Awareness educates, training builds skills, but without a structured security maturity assessment, 
              you're flying blind on progress. This advisory-led evaluation uses proven, industry-aligned frameworks 
              to benchmark your organization across people, processes, technology, and governance.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Breach reduction", value: "73%" },
                { label: "Faster response", value: "3.2x" },
                { label: "ROI improvement", value: "284%" },
                { label: "Compliance confidence", value: "94%" }
              ].map((stat, index) => (
                <div key={index} className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-purple-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <AlertCircle className="w-5 h-5 mr-2 text-amber-500" />
              The Cost of Flying Blind
            </h2>
            <ul className="space-y-4">
              {[
                "87% of organizations lack visibility into their actual security posture",
                "Average breach cost: $4.45M for unprepared organizations",
                "6-9 months average time to detect breaches without mature processes",
                "42% higher security spend without assessment-driven optimization"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Maturity Levels */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
            <Gauge className="w-6 h-6 mr-2 text-purple-600" />
            Maturity Level Framework
          </h2>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            <MaturityLevel 
              level="Initial"
              description="Ad-hoc, reactive practices with limited consistency"
              color="bg-red-100 text-red-700"
              percentage={15}
            />
            <MaturityLevel 
              level="Repeatable"
              description="Basic processes documented but inconsistently applied"
              color="bg-yellow-100 text-yellow-700"
              percentage={35}
            />
            <MaturityLevel 
              level="Defined"
              description="Standardized processes with clear ownership"
              color="bg-blue-100 text-blue-700"
              percentage={55}
            />
            <MaturityLevel 
              level="Managed"
              description="Measured, monitored, and continuously improved"
              color="bg-green-100 text-green-700"
              percentage={75}
            />
            <MaturityLevel 
              level="Optimizing"
              description="Proactive, data-driven security innovation"
              color="bg-purple-100 text-purple-700"
              percentage={95}
            />
          </div>
        </div>

        {/* Framework Selection */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 flex items-center">
              <Layers className="w-6 h-6 mr-2 text-purple-600" />
              Framework-Agnostic Benchmarking
            </h2>
            <button className="text-purple-600 font-medium text-sm hover:text-purple-700 flex items-center">
              Compare all frameworks
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FrameworkCard 
              icon={<Shield className="w-6 h-6" />}
              name="NIST Cybersecurity Framework"
              description="Identify, Protect, Detect, Respond, Recover - comprehensive enterprise security"
              domains={23}
              popular={true}
            />
            <FrameworkCard 
              icon={<Code2 className="w-6 h-6" />}
              name="OWASP SAMM"
              description="Software assurance maturity model for secure development lifecycle"
              domains={15}
              popular={false}
            />
            <FrameworkCard 
              icon={<Target className="w-6 h-6" />}
              name="CIS Controls"
              description="Prioritized set of actions to protect organizations from cyber threats"
              domains={18}
              popular={false}
            />
            <FrameworkCard 
              icon={<FileText className="w-6 h-6" />}
              name="ISO 27001"
              description="Information security management system requirements"
              domains={14}
              popular={false}
            />
            <FrameworkCard 
              icon={<Building2 className="w-6 h-6" />}
              name="CMMC"
              description="Cybersecurity Maturity Model Certification for defense contractors"
              domains={17}
              popular={false}
            />
            <FrameworkCard 
              icon={<Network className="w-6 h-6" />}
              name="Zero Trust Maturity"
              description="NIST Zero Trust Architecture implementation assessment"
              domains={12}
              popular={false}
            />
          </div>
        </div>

        {/* Assessment Process */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
            <ClipboardCheck className="w-6 h-6 mr-2 text-purple-600" />
            Holistic, Evidence-Based Assessment Process
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-3">
              {[
                {
                  number: 1,
                  title: "Discovery & Scoping",
                  description: "Define assessment boundaries, identify stakeholders, and select frameworks",
                  icon: <Search className="w-4 h-4" />
                },
                {
                  number: 2,
                  title: "Data Collection",
                  description: "Interviews, artifact reviews, technical testing, and simulations",
                  icon: <FileText className="w-4 h-4" />
                },
                {
                  number: 3,
                  title: "Analysis & Scoring",
                  description: "Evidence-based maturity scoring across all domains",
                  icon: <PieChart className="w-4 h-4" />
                },
                {
                  number: 4,
                  title: "Gap Analysis",
                  description: "Identify critical gaps and prioritize remediation efforts",
                  icon: <AlertCircle className="w-4 h-4" />
                },
                {
                  number: 5,
                  title: "Roadmap Development",
                  description: "Actionable plan with quick wins and strategic investments",
                  icon: <TrendingUp className="w-4 h-4" />
                },
                {
                  number: 6,
                  title: "Board Presentation",
                  description: "Executive-ready reporting with ROI projections",
                  icon: <Users className="w-4 h-4" />
                }
              ].map((step) => (
                <div 
                  key={step.number}
                  onMouseEnter={() => setActiveStep(step.number)}
                  className="cursor-pointer"
                >
                  <AssessmentStep 
                    {...step}
                    active={activeStep === step.number}
                  />
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-xl p-6 border border-purple-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Assessment Deliverables</h3>
              <ul className="space-y-3">
                {[
                  "Comprehensive maturity heat maps",
                  "Risk-prioritized findings register",
                  "Peer benchmarking analysis",
                  "30-60-90 day quick win roadmap",
                  "12-24 month strategic roadmap",
                  "ROI projections by initiative",
                  "Compliance gap analysis",
                  "Board-ready presentation deck"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Why Independent Assessment */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Award className="w-5 h-5 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Independent Advisory Expertise</h3>
            <p className="text-gray-600 text-sm mb-4">
              Neutral, experienced assessors provide unbiased perspective, benchmark against peers, 
              and guide remediation without vendor lock-in – turning assessment into a catalyst for 
              continuous improvement rather than a one-off report.
            </p>
            <ul className="space-y-2">
              {[
                "No vendor bias or product recommendations",
                "Industry peer benchmarking",
                "20+ years average assessor experience"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Settings className="w-5 h-5 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Continuous Improvement Cycle</h3>
            <p className="text-gray-600 text-sm mb-4">
              Regular assessments reduce breach likelihood, accelerate response times, optimize security spend, 
              and build defensible compliance narratives.
            </p>
            <div className="flex items-center justify-between mt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">73%</div>
                <div className="text-xs text-gray-500">Breach reduction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">54%</div>
                <div className="text-xs text-gray-500">Faster response</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">42%</div>
                <div className="text-xs text-gray-500">Cost optimization</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready for an honest view of your security posture?
          </h2>
          
          <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
            Get a clear, actionable roadmap to higher cybersecurity maturity levels. 
            Transform vague "we think we're secure" into quantifiable maturity milestones.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors group text-lg">
              Explore Framework Options
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="inline-flex items-center bg-transparent text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors border-2 border-white text-lg">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Assessment
            </button>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-4 text-sm text-purple-200">
            <span className="flex items-center">
              <Download className="w-4 h-4 mr-1" />
              Sample report available
            </span>
            <span>•</span>
            <span>30-min strategy call included</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaturityAssessment;