import React from 'react';
import { Shield, AlertTriangle, Target, Users, TrendingUp, ArrowRight, CheckCircle, Lock, Brain, Bell } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="group bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-blue-100">
      <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
        <div className="text-blue-600">{icon}</div>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

interface StatItemProps {
  value: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ value, label }) => {
  return (
    <div className="text-center">
      <div className="text-3xl font-bold text-blue-600 mb-1">{value}</div>
      <div className="text-sm text-gray-500">{label}</div>
    </div>
  );
};

const SecurityAwareness: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-50 rounded-full px-4 py-2 mb-6">
            <Shield className="w-4 h-4 text-blue-600 mr-2" />
            <span className="text-sm font-medium text-blue-600">Foundation of Security</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Security Awareness
          </h1>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            The first pillar in building a robust security maturity journey is 
            <span className="text-blue-600 font-semibold"> Security Awareness</span> – 
            the foundational layer that turns everyday employees into your strongest 
            line of defense against evolving cyber threats.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-md border-l-4 border-blue-500">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-amber-600" />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                    Beyond Traditional Training
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    In today's hyper-connected world, where phishing attacks, ransomware, 
                    and social engineering exploits dominate headlines, security awareness 
                    isn't just another checkbox training session. It's industry-focused 
                    education that digs deep into root causes of breaches, human risk 
                    factors, and real-world threat behaviors.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Target className="w-6 h-6 mr-2" />
                Why This Matters
              </h3>
              <p className="text-blue-50 leading-relaxed mb-4">
                Because even the most advanced tools and policies crumble if people 
                remain the weakest link. Effective security awareness programs bridge 
                that gap by transforming human vulnerability into organizational strength.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <StatItem value="84%" label="of breaches involve human element" />
                <StatItem value="5x" label="ROI on security awareness" />
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            <FeatureCard 
              icon={<Lock className="w-6 h-6" />}
              title="Root-Cause Resolution"
              description="Addressing vulnerabilities like poor password habits, unsafe file sharing, and sophisticated scam prevention"
            />
            <FeatureCard 
              icon={<Brain className="w-6 h-6" />}
              title="Role-Relevant Content"
              description="Developer-specific secure coding basics and executive-level boardroom risk insights"
            />
            <FeatureCard 
              icon={<Bell className="w-6 h-6" />}
              title="Continuous Engagement"
              description="Bite-sized, resonant content delivered through modern learning methodologies"
            />
            <FeatureCard 
              icon={<TrendingUp className="w-6 h-6" />}
              title="Measurable Impact"
              description="Reduced incident rates, faster threat detection, and stronger organizational resilience"
            />
          </div>
        </div>

        {/* Key Benefits Section */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
            <Users className="w-6 h-6 mr-2 text-blue-600" />
            Driving Behavioral Change
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Simulations and gamified challenges",
              "Ongoing reinforcement programs",
              "Real-time threat intelligence integration"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-12 border border-blue-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to elevate your team's vigilance?
          </h2>
          
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Dive deeper into tailored security awareness strategies that actually move the needle. 
            Start building unbreakable human firewalls today!
          </p>
          
          <button className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors group text-lg">
            Learn More About Security Awareness
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <p className="text-sm text-gray-500 mt-6">
            Join industry leaders in building a security-first culture
          </p>
        </div>
      </div>
    </section>
  );
};

export default SecurityAwareness;