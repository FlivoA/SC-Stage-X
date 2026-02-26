import React, { useState } from 'react';
import OptimizedImage from './OptimizedImage';

interface MainNavProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  isAtTop?: boolean;
  onThreatReportClick?: () => void;
}



const MainNav: React.FC<MainNavProps> = ({
  currentPage,
  onNavigate,
  isAtTop = true,
  onThreatReportClick,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

  const handleNavigateAndClose = (page: string) => {
    onNavigate(page);
    setMenuOpen(false);
    setOpenMobileDropdown(null);
  };


  const toggleMobileDropdown = (id: string) => {
    setOpenMobileDropdown(prev => (prev === id ? null : id));
  };

  return (
    <>
      <nav
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
          isAtTop
            ? 'top-[36px] sm:top-[40px] lg:top-[44px] bg-white/95'
            : 'top-0 bg-white/80 shadow-[0_10px_40px_rgba(0,0,0,0.08)] backdrop-blur-md'
        }`}
      >
        <div className="mx-auto flex w-full items-center px-3 py-3 sm:px-4 sm:py-4 lg:px-6">

          {/* Logo */}
          <button
            onClick={() => handleNavigateAndClose('home')}
            aria-label="Go to home"
            className="ml-2 lg:ml-10 flex items-center"
          >
            <OptimizedImage
              src="/logo_sc.webp"
              alt="Security Council"
              className="h-6 w-auto sm:h-7 md:h-8 lg:h-9"
              eager
            />
          </button>

          {/* ================= DESKTOP MENU ================= */}
          <div className="hidden lg:flex items-center gap-8 ml-10 text-[#002856]">

            {NAV_LINKS.map((nav) => (
              <div key={nav.id} className="relative group">

                {/* MAIN NAV CLICKABLE */}
                <button
                  onClick={() => handleNavigateAndClose(nav.id)}
                  className={`pb-2 text-[15px] font-medium transition-colors hover:text-blue-700 ${
                    currentPage === nav.id
                      ? 'border-b-2 border-[#0000D3]'
                      : 'border-b-2 border-transparent'
                  }`}
                >
                  {nav.label}
                </button>

                {/* DROPDOWN */}
                <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-xl rounded-md min-w-[260px] py-3 z-50">
                  {nav.children?.map((child) => (
                    <button
                      key={child.id}
                      onClick={() => handleNavigateAndClose(child.id)}
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      {child.label}
                    </button>
                  ))}
                </div>
              </div>
            ))}

          </div>

          {/* ================= RIGHT CTA ================= */}
          <div className="hidden lg:flex flex-col ml-auto">
            <button
              className="h-[52px] w-[300px] rounded border border-[#0000D3] bg-[#0000D3] text-white text-sm font-bold hover:bg-blue-800"
              onClick={onThreatReportClick}
            >
              Request a Threat Posture Report
            </button>
            <span className="mt-1 text-xs font-medium text-[#002856]">
              or call 1 855 687 3726
            </span>
          </div>

          {/* ================= MOBILE TOGGLE ================= */}
          <div className="lg:hidden ml-auto">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="h-9 w-9 flex items-center justify-center border rounded"
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t px-4 py-4">
            {NAV_LINKS.map((nav) => (
              <div key={nav.id} className="mb-4">

                {/* Parent Row */}
                <div className="flex justify-between items-center">
                  {/* Navigate */}
                  <button
                    onClick={() => handleNavigateAndClose(nav.id)}
                    className="font-medium text-[#002856]"
                  >
                    {nav.label}
                  </button>

                  {/* Expand */}
                  <button
                    onClick={() => toggleMobileDropdown(nav.id)}
                    className="text-sm text-gray-500"
                  >
                    {openMobileDropdown === nav.id ? "−" : "+"}
                  </button>
                </div>

                {/* Children */}
                {openMobileDropdown === nav.id && (
                  <div className="ml-4 mt-2 flex flex-col gap-2">
                    {nav.children?.map((child) => (
                      <button
                        key={child.id}
                        onClick={() => handleNavigateAndClose(child.id)}
                        className="text-sm text-gray-600 text-left hover:text-blue-700"
                      >
                        {child.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>

      {/* Spacer */}
      <div className={`${isAtTop ? 'h-[88px] lg:h-[116px]' : 'h-[64px] lg:h-[116px]'}`} />
    </>
  );
};

/* ================= NAV DATA ================= */

const NAV_LINKS = [
  {
    id: 'who-we-guide',
    label: 'Who We Guide',
    children: [
      { id: 'who-we-guide/bfsi', label: 'BFSI Institutions' },
      { id: 'who-we-guide/insurance', label: 'Insurance Organizations' },
      { id: 'who-we-guide/enterprise', label: 'Enterprise Organizations' },
      { id: 'who-we-guide/technology', label: 'Technology & Product Teams' },
      { id: 'who-we-guide/cxo', label: 'Executive Leadership (CXO)' },
    ],
  },

  {
    id: 'our-intelligence',
    label: 'Our Intelligence',
    children: [
      { id: 'threat-analysis', label: 'Threat Landscape Analysis' },
      { id: 'credential-exposure', label: 'Credential Exposure Reports' },
      { id: 'industry-risk', label: 'Industry Risk Assessments' },
      { id: 'security-maturity', label: 'Security Maturity Studies' },
      { id: 'research-briefs', label: 'Research Briefs' },
    ],
  },
  {
    id: 'latest-insight',
    label: 'Latest Insight',
    children: [
      { id: 'featured-reports', label: 'Featured Reports' },
      { id: 'publications', label: 'Publications' },
      { id: 'advisory', label: 'Advisory Notes' },
      { id: 'case-studies', label: 'Case Studies' },
      { id: 'news', label: 'News & Announcements' },
    ],
  },
  {
    id: 'events',
    label: 'Programs',
    children: [
      { id: 'security-awareness', label: 'Security Awareness Programs' },
      { id: 'developer-training', label: 'Developer Security Training' },
      { id: 'workforce', label: 'Workforce Enablement' },
      { id: 'bgv', label: 'Background Verification (BGV) Guidance' },
      { id: 'advisory-engagement', label: 'Advisory Engagement' },
    ],
  },
  {
    id: 'certification',
    label: 'Certification',
    children: [
      { id: 'org-cert', label: 'Organizational Certification' },
      { id: 'individual-cert', label: 'Individual Certification' },
      { id: 'framework', label: 'Certification Framework' },
      { id: 'eligibility', label: 'Eligibility Criteria' },
      { id: 'apply', label: 'Apply for Certification' },
    ],
  },
  {
    id: 'standards',
    label: 'Standards',
    children: [
      { id: 'governance', label: 'Security Governance Framework' },
      { id: 'data-protection', label: 'Data Protection Standards' },
      { id: 'secure-dev', label: 'Secure Development Guidelines' },
      { id: 'compliance', label: 'Compliance Alignment' },
      { id: 'methodology', label: 'Council Methodology' },
    ],
  },
  {
    id: 'about',
    label: 'About',
    children: [
      { id: 'mission', label: 'Our Mission' },
      { id: 'governance-about', label: 'Governance' },
      { id: 'leadership', label: 'Leadership' },
      { id: 'members', label: 'Council Members' },
      { id: 'careers', label: 'Careers' },
      { id: 'contact', label: 'Contact' },
    ],
  },
];

export default MainNav;
