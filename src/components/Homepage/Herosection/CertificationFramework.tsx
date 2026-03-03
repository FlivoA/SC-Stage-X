import React, { useState } from 'react';
import { 
  Award,
  Shield,
  BadgeCheck,
  Building2,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Star,
  FileCheck,
  Scale,
  Globe,
  Lock,
  Briefcase,
  Download,
  Calendar,
  ChevronRight,
  Sparkles,
  Medal,
  Target,
  Eye,
  Clock,
  HeartHandshake,
  FileSpreadsheet
} from 'lucide-react';

interface CertificationLevelProps {
  level: string;
  title: string;
  description: string;
  color: string;
  icon: React.ReactNode;
  requirements: string[];
  popular?: boolean;
}

const CertificationLevel: React.FC<CertificationLevelProps> = ({ 
  level, title, description, color, icon, requirements, popular 
}) => {
  return (
    <div className={`relative bg-white rounded-2xl p-6 border ${popular ? 'border-amber-300 shadow-xl' : 'border-gray-200'} hover:shadow-2xl transition-all duration-300 group`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-sm font-semibold px-4 py-1 rounded-full flex items-center gap-1 shadow-lg">
          <Sparkles className="w-4 h-4" />
          Most Popular
          <Sparkles className="w-4 h-4" />
        </div>
      )}
      
      <div className="text-center mb-6">
        <div className={`w-16 h-16 mx-auto ${color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
          <div className="text-white w-8 h-8">{icon}</div>
        </div>
        <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{level}</span>
        <h3 className="text-xl font-bold text-gray-900 mt-1">{title}</h3>
      </div>
      
      <p className="text-gray-600 text-sm mb-6 text-center">{description}</p>
      
      <div className="space-y-3 mb-6">
        {requirements.map((req, index) => (
          <div key={index} className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
            <span className="text-sm text-gray-600">{req}</span>
          </div>
        ))}
      </div>
      
      <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${
        popular 
          ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-600 hover:to-amber-700' 
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      }`}>
        View Certification Details
      </button>
    </div>
  );
};

interface AccreditationBadgeProps {
  icon: React.ReactNode;
  name: string;
  description: string;
}

const AccreditationBadge: React.FC<AccreditationBadgeProps> = ({ icon, name, description }) => {
  return (
    <div className="bg-white rounded-xl p-4 border border-gray-200 hover:border-amber-200 transition-all hover:shadow-md">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center text-amber-600">
          {icon}
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-xs text-gray-500">{description}</p>
        </div>
      </div>
    </div>
  );
};

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  stat: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description, stat }) => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200">
      <div className="flex items-start justify-between mb-3">
        <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600">
          {icon}
        </div>
        <span className="text-2xl font-bold text-amber-600">{stat}</span>
      </div>
      <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

const CertificationFramework: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'levels' | 'process' | 'benefits'>('levels');

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-amber-50 rounded-full px-4 py-2 mb-6">
            <Award className="w-4 h-4 text-amber-600 mr-2" />
            <span className="text-sm font-medium text-amber-600">Pillar 4: External Validation</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Certification Framework
          </h1>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            The fourth and crowning pillar of a truly structured security maturity approach is the 
            <span className="text-amber-600 font-semibold"> Certification Framework</span> – 
            the independent, third-party validation that proves your organization has achieved and 
            is maintaining a credible, defensible level of cybersecurity resilience.
          </p>
        </div>

        {/* Why Certification Matters */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-amber-600 to-amber-700 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <BadgeCheck className="w-6 h-6 mr-2" />
              Beyond Internal Confidence
            </h2>
            <p className="text-amber-100 leading-relaxed mb-6">
              In 2026's high-stakes environment—where supply-chain scrutiny, zero-trust mandates, 
              evolving regulations, and board-level accountability are non-negotiable—an independent 
              cybersecurity certification delivers external credibility, competitive edge, and often 
              contractual must-have status.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Faster vendor approval", value: "67%" },
                { label: "Insurance premium reduction", value: "32%" },
                { label: "RFP win rate increase", value: "43%" },
                { label: "Customer trust score", value: "+89%" }
              ].map((stat, index) => (
                <div key={index} className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-amber-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <Shield className="w-5 h-5 mr-2 text-amber-500" />
              Independent, Unbiased Validation
            </h2>
            <p className="text-gray-600 mb-4">
              Conducted by accredited third-party assessors (no in-house self-attestation bias), 
              ensuring objective evaluation against recognized benchmarks like NIST-aligned models, 
              OWASP SAMM maturity paths, or standards echoing CMMC-style rigor.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <div className="flex -space-x-2">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-semibold">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <span className="text-sm text-gray-500">Accredited by 20+ global bodies</span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-gray-100 rounded-lg p-1">
            {[
              { id: 'levels', label: 'Certification Levels', icon: <Medal className="w-4 h-4" /> },
              { id: 'process', label: 'Assessment Process', icon: <FileCheck className="w-4 h-4" /> },
              { id: 'benefits', label: 'Business Benefits', icon: <TrendingUp className="w-4 h-4" /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === tab.id 
                    ? 'bg-white text-amber-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Certification Levels */}
        {activeTab === 'levels' && (
          <div className="mb-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <CertificationLevel 
                level="Level 1"
                title="Foundational Hygiene"
                description="Essential security practices and baseline controls"
                color="bg-gray-500"
                icon={<Shield className="w-8 h-8" />}
                requirements={[
                  "Basic access controls",
                  "Antivirus/malware protection",
                  "Security awareness training",
                  "Incident response plan"
                ]}
              />
              <CertificationLevel 
                level="Level 2"
                title="Managed Practices"
                description="Documented and consistently applied processes"
                color="bg-blue-500"
                icon={<FileCheck className="w-8 h-8" />}
                requirements={[
                  "Risk management program",
                  "Regular vulnerability scans",
                  "Access reviews",
                  "Security metrics tracking"
                ]}
              />
              <CertificationLevel 
                level="Level 3"
                title="Defined & Measured"
                description="Quantifiable security controls and monitoring"
                color="bg-purple-500"
                icon={<Target className="w-8 h-8" />}
                requirements={[
                  "Continuous monitoring",
                  "Threat intelligence program",
                  "Security champions network",
                  "Third-party risk management"
                ]}
                popular={true}
              />
              <CertificationLevel 
                level="Level 4"
                title="Optimized Defense"
                description="Proactive, data-driven security innovation"
                color="bg-amber-500"
                icon={<Award className="w-8 h-8" />}
                requirements={[
                  "Automated threat hunting",
                  "AI-powered defense",
                  "Zero trust architecture",
                  "Security chaos engineering"
                ]}
              />
            </div>
          </div>
        )}

        {/* Assessment Process */}
        {activeTab === 'process' && (
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center">
              <Eye className="w-6 h-6 mr-2 text-amber-600" />
              Rigorous Third-Party Validation Process
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: 1,
                  title: "Pre-Assessment",
                  description: "Documentation review, scoping, and readiness evaluation",
                  items: ["Policy review", "Control mapping", "Gap analysis prep"]
                },
                {
                  step: 2,
                  title: "On-Site Assessment",
                  description: "In-depth interviews, evidence collection, and technical testing",
                  items: ["Artifact validation", "Technical testing", "Staff interviews"]
                },
                {
                  step: 3,
                  title: "Certification Decision",
                  description: "Independent review board evaluation and final determination",
                  items: ["Finding verification", "Remediation planning", "Certificate issuance"]
                }
              ].map((phase, index) => (
                <div key={index} className="relative">
                  <div className="absolute -top-3 left-4 w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold">
                    {phase.step}
                  </div>
                  <div className="pt-8 px-6 pb-6 bg-gray-50 rounded-xl border border-gray-200 h-full">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{phase.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{phase.description}</p>
                    <ul className="space-y-2">
                      {phase.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-between p-4 bg-amber-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-amber-600" />
                <span className="text-sm text-gray-700">Typical timeline: 8-12 weeks from kickoff to certification</span>
              </div>
              <button className="text-amber-600 font-medium text-sm hover:text-amber-700 flex items-center">
                View sample timeline
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        )}

        {/* Business Benefits */}
        {activeTab === 'benefits' && (
          <div className="mb-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <BenefitCard 
                icon={<Briefcase className="w-5 h-5" />}
                title="RFP Advantage"
                description="Win more contracts with certified security posture"
                stat="+43%"
              />
              <BenefitCard 
                icon={<Scale className="w-5 h-5" />}
                title="Insurance Savings"
                description="Lower cyber insurance premiums"
                stat="-32%"
              />
              <BenefitCard 
                icon={<HeartHandshake className="w-5 h-5" />}
                title="Partner Trust"
                description="Accelerate vendor approval processes"
                stat="2.5x"
              />
              <BenefitCard 
                icon={<Globe className="w-5 h-5" />}
                title="Global Compliance"
                description="Streamline multi-jurisdiction requirements"
                stat="80%"
              />
            </div>

            <div className="mt-8 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">The Ultimate Win</h3>
              <p className="text-gray-700 mb-6">
                Certification closes the loop on your maturity journey: from human vigilance, 
                through skilled enablement and honest assessment, to externally recognized excellence. 
                Teams feel proud, leadership gains defensible metrics, and the organization stands 
                taller against threats and scrutiny.
              </p>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-amber-500 fill-current" />
                  <span>92% employee pride increase</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-amber-500 fill-current" />
                  <span>76% board confidence boost</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Accreditation Bodies */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
            <Globe className="w-6 h-6 mr-2 text-amber-600" />
            Globally Recognized Accreditations
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <AccreditationBadge 
              icon={<Shield className="w-5 h-5" />}
              name="NIST CSF"
              description="National Institute of Standards"
            />
            <AccreditationBadge 
              icon={<Lock className="w-5 h-5" />}
              name="ISO 27001"
              description="International Standards"
            />
            <AccreditationBadge 
              icon={<Target className="w-5 h-5" />}
              name="CMMC"
              description="Defense Industry Ready"
            />
            <AccreditationBadge 
              icon={<Building2 className="w-5 h-5" />}
              name="FedRAMP"
              description="Federal Compliance"
            />
          </div>
        </div>

        {/* Ongoing Commitment */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-16">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Clock className="w-8 h-8 text-amber-600" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                Proof of Ongoing Commitment
              </h2>
              <p className="text-gray-600 mb-4 max-w-3xl">
                Unlike one-time stamps, strong frameworks require periodic reassessments, 
                continuous monitoring evidence, and remediation tracking—reinforcing that 
                security maturity is a living program, not a project.
              </p>
              <div className="flex gap-6">
                {[
                  { label: "Annual recertification", value: "Required" },
                  { label: "Quarterly health checks", value: "Included" },
                  { label: "Continuous monitoring", value: "24/7" }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="text-sm font-semibold text-gray-900">{item.value}</div>
                    <div className="text-xs text-gray-500">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-amber-600 to-orange-600 rounded-3xl p-12 text-white relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>
          
          <div className="relative z-10">
            <Award className="w-16 h-16 mx-auto mb-6" />
            
            <h2 className="text-3xl font-bold mb-4">
              Ready to earn your independent seal of approval?
            </h2>
            
            <p className="text-lg text-amber-100 mb-8 max-w-2xl mx-auto">
              Transform your hard-earned maturity into externally recognized excellence that 
              opens doors and builds unbreakable trust.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center bg-white text-amber-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors group text-lg">
                <FileSpreadsheet className="w-5 h-5 mr-2" />
                View Certification Options
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="inline-flex items-center bg-transparent text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors border-2 border-white text-lg">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Assessor Call
              </button>
            </div>
            
            <div className="mt-8 flex items-center justify-center gap-6 text-sm text-amber-200">
              <span className="flex items-center">
                <Download className="w-4 h-4 mr-1" />
                Download certification guide
              </span>
              <span>•</span>
              <span className="flex items-center">
                <BadgeCheck className="w-4 h-4 mr-1" />
                30-min eligibility review
              </span>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Trusted by 2,500+ certified organizations worldwide</p>
          <div className="flex justify-center gap-8 mt-4">
            {['Defense', 'Finance', 'Healthcare', 'Tech', 'Critical Infrastructure'].map((industry, index) => (
              <span key={index} className="text-xs text-gray-400">{industry}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationFramework;