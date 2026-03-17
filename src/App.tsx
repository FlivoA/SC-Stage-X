import { useEffect, useState } from "react";
import UtilityNav from "./components/UtilityNav";
import MainNav from "./components/MainNav";
import CTIHighlights from "./components/CTIHighlights";
import Footer from "./components/Footer";
import ContactPopup from "./components/ContactPopup";
import RequestPopup from "./components/RequestPopup";
import WhoWeGuidePage from "./components/WhoWeGuidePage";
import NewWhoWeGuidePage from "./components/NewWhoWeGuidePage";
import OurIntelligencePage from "./components/OurIntelligencePage";
import LatestInsightPage from "./components/LatestInsightPage";
import EventsPage from "./components/EventsPage";
import AIThreatsPage from "./components/AIThreatsPage";
import ThreatActorPage from "./components/ThreatActorPage";
import Insight1Page from "./components/insights/Insight1Page";
import Insight2Page from "./components/insights/Insight2Page";
import Insight3Page from "./components/insights/Insight3Page";
import Insight4Page from "./components/insights/Insight4Page";
import Insight5Page from "./components/insights/Insight5Page";
import Insight6Page from "./components/insights/Insight6Page";
import Insight7Page from "./components/insights/Insight7Page";
import Insight8Page from "./components/insights/Insight8Page";
import Insight9Page from "./components/insights/Insight9Page";
import ThreatIntelligencePage from "./components/ThreatIntelligencePage";
import ResearchPage from "./components/ResearchPage";
import SpeakersPage from "./components/SpeakersPage";
import AgendaPage from "./components/AgendaPage";
import RequestLandingPage from "./components/RequestLandingPage";
import Seo from "./components/Seo";
import Home from "./components/Home";
import PrevHome from "./components/PrevHome";
import NewIntelligentPage from "./components/NewIntelligentPage";
import BFSIPage from "./components/NestedNavbar/BFSIPage";
import InsurancePage from "./components/NestedNavbar/InsuranceOrganization";
import EnterprisePage from "./components/NestedNavbar/EnterprisePage";
import TechnologyPage from "./components/NestedNavbar/TechnologyPage";
import ExecutiveLeadership from "./components/NestedNavbar/ExecutiveLeadership";


// nested navbar pages of our intelligence
import ThreatAnalysis from "./components/NestedNavbar/ThreatAnalysis";
import ResearchBriefs from "./components/NestedNavbar/ResearchBriefs";
import CredentialReports from "./components/NestedNavbar/CredentialReports";
import IndustryAddessments from "./components/NestedNavbar/IndustryAddessments";
import SecurityStudies from "./components/NestedNavbar/SecurityStudies";



// nested navbar pages of latest-insight

import FeaturedReports from "./components/NestedNavbar/FeaturedReports";
import Publications from "./components/NestedNavbar/Publications";
import AdviseryNotes from "./components/NestedNavbar/AdviseryNotes";  
// import caseStudies from "./components/NestedNavbar/CaseStudies";  
import News from "./components/NestedNavbar/News";





// footer pages
import OurMandate from "./components/Footer/OurMandate";
import GovernancePrinciples from "./components/Footer/GovernancePrinciples";
import AdvisoryPositioning from "./components/Footer/AdvisoryPositioning";
import ResearchAnalysis from "./components/Footer/ResearchAnalysis";
import IndustryPerspectives from "./components/Footer/IndustryPerspectives";
import Briefings from "./components/Footer/Briefings";
import PrivacyPolicy from "./components/Footer/PrivacyPolicy";
import SearchCareers from "./components/Footer/SearchCareers";
import OurCulture from "./components/Footer/OurCulture";
import CareersBlog from "./components/Footer/CareersBlog"
import TermsOfUse from "./components/Footer/TermsOfUse";
import CertificationDisclaimer from "./components/Footer/CertificationDisclaimer";
import CaseStudies from "./components/NestedNavbar/CaseStudies";
import SecurityAwareness from "./components/Homepage/Herosection/SecurityAwareness";
import TrainingEnablement from "./components/Homepage/Herosection/TrainingEnablement";
import MaturityAssessment from "./components/Homepage/Herosection/MaturityAssessment";
import CertificationFramework from "./components/Homepage/Herosection/CertificationFramework";
import DeveloperSecurityTraining from "./components/Homepage/Herosection/DeveloperSecurityTraining";
import WorkforceEnablement from "./components/Homepage/Herosection/WorkforceEnablement";
import Bgv from "./components/Homepage/Herosection/Bgv";
import AdvisoryEngagement from "./components/Homepage/Herosection/AdvisoryEngagement";
import OrganizationalCertification from "./components/Homepage/Herosection/OrganizationalCertification";
import IndividualCertification from "./components/Homepage/Herosection/IndividualCertification";
import FrameWork from "./components/Homepage/Herosection/FrameWork";
import Eligibility from "./components/Homepage/Herosection/Eligibility";
import ApplyCertification from "./components/Homepage/Herosection/ApplyCertification";
import SecurityGovernance from "./components/Homepage/Herosection/SecurityGovernance";
import DataProtection from "./components/Homepage/Herosection/DataProtection";
import SecureDevelopment from "./components/Homepage/Herosection/SecureDevelopment";
import ComplianceAlignment from "./components/Homepage/Herosection/ComplianceAlignment";
import CouncilMethodology from "./components/Homepage/Herosection/CouncilMethodology";
import OurMission from "./components/Homepage/Herosection/OurMission";
import GovernanceAbout from "./components/Homepage/Herosection/GovernanceAbout";
import Leadership from "./components/Homepage/Herosection/Leadership";
import CouncilMembers from "./components/Homepage/Herosection/CouncilMembers";
import Careers from "./components/Homepage/Herosection/Careers";
import Contact from "./components/Homepage/Herosection/Contact";


const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [isAtTop, setIsAtTop] = useState(true);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isBriefingOpen, setIsBriefingOpen] = useState(false);

  useEffect(() => {
    setIsAtTop(true);
  }, []);

  const handleNavigate = (page: string, options?: { search?: string }) => {
    setCurrentPage(page);

    if (typeof window !== "undefined") {
      const basePath = page === "home" ? "/" : `/${page}`;
      const targetPath = `${basePath}${options?.search ?? ""}`;
      if (window.location.pathname + window.location.search !== targetPath) {
        window.history.pushState({ page }, "", targetPath);
      }
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  };

  // Sync pseudo-route from URL path for deep links and programmatic navigations
  useEffect(() => {
    const syncFromLocation = () => {
      const path =
        (typeof window !== "undefined" ? window.location.pathname : "/") || "/";
      const page = path.replace(/^\//, "") || "home";
      setCurrentPage(page);
    };
    syncFromLocation();
    window.addEventListener("popstate", syncFromLocation);
    return () => window.removeEventListener("popstate", syncFromLocation);
  }, []);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "prev-home":
        return (
          <PrevHome
            onNavigate={handleNavigate}
            onBriefingClick={() => setIsBriefingOpen(true)}
          />
        );
      case "our-intelligence":
        return <NewIntelligentPage />;
      // nested navbar pages   of our intelligence
      case "our-intelligence/threat-analysis":
        return <ThreatAnalysis />;
      case "our-intelligence/security-maturity":
        return <SecurityStudies />;
      case "our-intelligence/industry-risk":
        return <IndustryAddessments />;
      case "our-intelligence/credential-exposure":
        return <CredentialReports />;
      case "our-intelligence/research-briefs":
        return <ResearchBriefs />;

      case "who-we-guide":
        return <NewWhoWeGuidePage />;
      case "who-we-guide/bfsi":
        return <BFSIPage onNavigate={handleNavigate} />;
      case "who-we-guide/insurance":
        return <InsurancePage onNavigate={handleNavigate} />;
      case "who-we-guide/enterprise":
        return <EnterprisePage onNavigate={handleNavigate} />;
      case "who-we-guide/technology":
        return <TechnologyPage onNavigate={handleNavigate} />;
      case "who-we-guide/cxo":
        return <ExecutiveLeadership onNavigate={handleNavigate} />;
      // case 'about':
      //     return <About />;
      case "latest-insight":
        return <LatestInsightPage onNavigate={handleNavigate} />;
      case "latest-insight/featured-reports":
        return <FeaturedReports />;
      case "latest-insight/news":
        return <News />;
      case "latest-insight/publications":
        return <Publications />;
      case "latest-insight/advisory":
        return <AdviseryNotes />;
      case "latest-insight/case-studies":
        return <CaseStudies />;
      case "insight-1":
        return <Insight1Page />;
      case "insight-2":
        return <Insight2Page />;
      case "insight-3":
        return <Insight3Page />;
      case "insight-4":
        return <Insight4Page />;
      case "insight-5":
        return <Insight5Page />;
      case "insight-6":
        return <Insight6Page />;
      case "insight-7":
        return <Insight7Page />;
      case "insight-8":
        return <Insight8Page />;
      case "insight-9":
        return <Insight9Page />;
      case "events":
        return <EventsPage onNavigate={handleNavigate} />;
      case "ai-threats":
        return <AIThreatsPage />;
      case "threat-actor":
        return <ThreatActorPage />;
      case "threat-intelligence":
        return <ThreatIntelligencePage />;
      case "research":
        return <ResearchPage />;
      case "speakers":
        return <SpeakersPage />;
      case "agenda":
        return <AgendaPage />;
      case "request":
        return <RequestLandingPage />;
      case "new-intelligent":
        return <NewIntelligentPage />;
      case "old-who-we-guide":
        return (
          <>
            <WhoWeGuidePage onNavigate={handleNavigate} />
            <CTIHighlights variant="grid-only" onNavigate={handleNavigate} />
          </>
        );
      case "old-our-intelligence":
        return <OurIntelligencePage />;
      case "our-mandate":
        return <OurMandate/>;
      case "governance-principles":
        return <GovernancePrinciples/>;
      case "advisory-positioning":
        return <AdvisoryPositioning/>;
      case "research-and-analysis":
        return <ResearchAnalysis/>;
      case "industry-perspectives":
        return <IndustryPerspectives/>;
      case "briefings":
        return <Briefings/>;
      case "privacy-policy":
        return <PrivacyPolicy/>;
      case "search-careers":
        return <SearchCareers/>;
      case "our-culture":
        return <OurCulture/>;
      case "careers-blog":
       return <CareersBlog/>;
      case "terms-of-use":
        return <TermsOfUse/>
      case "certification-disclaimer":
        return <CertificationDisclaimer/>
      case "programs/security-awareness":
        return <SecurityAwareness />;
      case "programs/developer-training":
        return <DeveloperSecurityTraining />;
      case "programs/workforce":
        return <WorkforceEnablement />;
      case "programs/bgv":
        return <Bgv />;
      case "programs/advisory-engagement":
        return <AdvisoryEngagement />;
      case "certification/org-cert":
        return <OrganizationalCertification />;
      case "certification/individual-cert":
        return <IndividualCertification />;
      case "certification/framework":
        return <FrameWork />;
      case "certification/eligibility":
        return <Eligibility />;
      case "certification/apply":
        return <ApplyCertification />;
      case "standards/governance":
        return <SecurityGovernance />;
      case "standards/data-protection":
        return <DataProtection />;
      case "standards/secure-dev":
        return <SecureDevelopment />;
      case "standards/compliance":
        return <ComplianceAlignment />;
      case "standards/methodology":
        return <CouncilMethodology />;
      case "about/mission":
        return <OurMission />;
      case "about/governance-about":
        return <GovernanceAbout />;
      case "about/leadership":
        return <Leadership />;
      case "about/members":
        return <CouncilMembers />;
      case "about/careers":
        return <Careers />;
      case "about/contact":
        return <Contact />;
      case "training-enablement":
        return <TrainingEnablement />
      case "maturity-assessment":
        return <MaturityAssessment/>
      case "certification-framework":
        return <CertificationFramework/>
      default:
        return <Home />;
    }
  };

  const titles: Record<string, { t: string; d: string }> = {
    home: {
      t: "BFSI – Intelligence That Clarifies",
      d: "Independent Cyber Threat Research. Trusted by Leaders. Backed by Analysts.",
    },
    "prev-home": {
      t: "Previous Home – BFSI",
      d: "Objective research intelligence and executive guidance to act with confidence.",
    },
    "our-intelligence": {
      t: "Our Intelligence – BFSI",
      d: "Explore our methodology, threat domains, and how we deliver clarity.",
    },
    "threat-analysis": {
      t: "Threat Landscape Analysis – BFSI",
      d: "Overview and analysis of the current cyber threat landscape.",
    },
    "who-we-guide": {
      t: "Who We Guide – BFSI",
      d: "We guide boards, CISOs, and leaders where context matters most.",
    },
    "latest-insight": {
      t: "Latest Insights – BFSI",
      d: "Read our latest research, briefings, and cyber threat insights.",
    },
    events: {
      t: "Events – BFSI",
      d: "Upcoming and past events, briefings, and research presentations.",
    },
    "ai-threats": {
      t: "AI Threats – BFSI",
      d: "Analysis of AI-powered threats and real-world exposure.",
    },
    "threat-actor": {
      t: "Threat Actor Research – BFSI",
      d: "Profiles and assessments of emerging threat actors.",
    },
    "threat-intelligence": {
      t: "Threat Intelligence – BFSI",
      d: "Intelligence services and reporting to inform executive action.",
    },
    research: {
      t: "Research – BFSI",
      d: "Deep-dive research with evidence-driven findings and context.",
    },
    speakers: {
      t: "Speakers – BFSI",
      d: "Meet our speakers and subject-matter experts.",
    },
    agenda: {
      t: "Agenda – BFSI",
      d: "Event agenda and session details.",
    },
    request: {
      t: "Request a Briefing – BFSI",
      d: "Request a confidential executive briefing from BFSI.",
    },
    "new-intelligent": {
      t: "New Intelligent – BFSI",
      d: "Explore BFSI intelligence and newsletter resources.",
    },
    about: {
      t: "About – BFSI",
      d: "Learn about our organization and mission.",
    },
  };

  const currentMeta = titles[currentPage] ?? titles.home;

  return (
    <div className="min-h-screen bg-white">
      <Seo title={currentMeta.t} description={currentMeta.d} />
      {currentPage !== "research" &&
        currentPage !== "speakers" &&
        currentPage !== "agenda" && (
          <>
            {currentPage !== "home" && <UtilityNav />}
            <MainNav
              currentPage={currentPage}
              onNavigate={handleNavigate}
              isAtTop={currentPage === "home" ? false : isAtTop}
              onThreatReportClick={() => setIsBriefingOpen(true)}
            />
          </>
        )}
      {renderCurrentPage()}
      {currentPage !== "research" &&
        currentPage !== "speakers" &&
        currentPage !== "agenda" &&
        currentPage !== "request" && (
          <>
            <Footer onContactClick={() => setIsContactOpen(true)} />
            <ContactPopup
              isOpen={isContactOpen}
              onClose={() => setIsContactOpen(false)}
              showTrigger={false}
            />
            <RequestPopup
              isOpen={isBriefingOpen}
              onClose={() => setIsBriefingOpen(false)}
            />
          </>
        )}
    </div>
  );
};

export default App;

