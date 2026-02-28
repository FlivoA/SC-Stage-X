import React from 'react';
import OptimizedImage from './OptimizedImage';

const heroCards = [
    {
        heading: 'Security Awareness',
        title: 'Industry-focused education addressing root causes of data exposure, governance gaps, and operational risk.',
        href: '#',
        cta: 'Learn More'
    },
    {
        heading: 'Training & Enablement ',
        title: 'Developer and workforce training aligned with secure development lifecycle (SDLC) practices and regulatory expectations. ',
        href: '#',
        cta: 'View Programs '

    },
    {
        heading: 'Maturity Assessment',
        title: 'Advisory security maturity evaluation framework enabling organizations to identify capability gaps and improvement pathways.',
        href: '#',
        cta: 'Explore Framework'
    },
    {
        heading: 'Certification Framework',
        title: 'Independent certification indicating structured alignment with defined security standards and governance practices.',
        href: '#',
        cta: 'View Certification'
    },
];

const ctiCards = [
    {
        title: 'Understanding the Root Causes of Security Failures in Regulated Environment',
        href: '#',
    },
    {
        title: 'Secure Development Lifecycle: Why Governance Gaps Persist',
        href: '#',
    },
    {
        title: 'Background Verification, Human Risk, and Access Governance Alignment',
        href: '#',
    },
    {
        title: 'Credential Leak Intelligence: Analysis of 300+ Incidents',
        href: '#',
    },
];


const Home: React.FC = () => (
    <main>
        {/* Section 1 - Hero */}
        <section className="relative bg-white overflow-hidden" aria-label="Temporary hero">
            <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-0 pt-4 sm:pt-6 lg:pt-0 pb-12 sm:pb-16 lg:pb-0 lg:h-[877px]">
                {/* Top white band */}
                <div className="flex flex-col lg:flex-row h-auto lg:h-[325px] pr-0  sm:pr-6 lg:pr-12 mb-2">
                    <div className="mt-6 mb-4 sm:mt-8 lg:mt-10 max-w-full lg:max-w-[980px] ml-0 lg:-ml-3">
                        <p className="text-[#0A2A57] text-sm sm:text-base md:text-lg lg:text-[22px] leading-tight lg:leading-[1.1] font-extrabold tracking-[-0.01em]">
                            Enterprise Security Policies Enforcement & Certification Council
                        </p>
                        <div className="relative inline-block group max-w-4xl">

                            <h1 className="mt-3 text-[#0A2A57] text-2xl sm:text-4xl md:text-5xl lg:text-[50px] leading-tight lg:leading-[1.1] font-extrabold tracking-[-0.03em] whitespace-nowrap">
                                {/* Enabling Enterprise Securit   */}
                                <br /> Through Structured Standards
                            </h1>

                            <p className="absolute top-1/2 left-full ml-6 -translate-y-1/2 w-[360px] p-5 rounded-xl shadow-2xl bg-blue-600 text-black text-sm leading-relaxed opacity-0 translate-x-3 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0 pointer-events-none z-40 ">

                                Security Council strengthens organizational security maturity through
                                education-first awareness programs, structured enablement frameworks,
                                and independent certification aligned with regulated industry expectations.
                            </p>

                        </div>


                        <div className="mt-6 flex gap-x-7">
                            <a
                                href="#"
                                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-md bg-[#0000D3] px-5 py-3 text-sm sm:text-base font-semibold text-white shadow-sm ring-1 ring-black/5 transition-colors hover:bg-blue-800"
                                aria-label="View Latest Research"
                            >
                                Explore Programs
                                <span className="translate-y-1px" aria-hidden>
                                    ↗
                                </span>
                            </a>
                            <a
                                href="#"
                                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-md bg-[#0000D3] px-5 py-3 text-sm sm:text-base font-semibold text-white shadow-sm ring-1 ring-black/5 transition-colors hover:bg-blue-800"
                                aria-label="View Latest Research"
                            >
                                Request Consultation
                                <span className="translate-y-[1px]" aria-hidden>
                                    ↗
                                </span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Middle background band */}
                <div className="relative mt-10 sm:mt-12 lg:mt-0 h-auto lg:h-[512px] overflow-visible">
                    {/* Full-bleed background image spanning viewport width */}
                    <div className="absolute top-0 left-1/2 z-0 h-full w-full max-w-none -translate-x-1/2">
                        <OptimizedImage
                            src="/homepage/Section 1/Background.webp"
                            alt="Executive meeting background"
                            className="h-full w-full object-cover"
                            eager
                        />
                        <div className="home-hero-overlays pointer-events-none absolute inset-0" />
                    </div>

                    {/* Primary hero panel */}
                    <div className="relative z-10 flex justify-center lg:block">
                        <div className="block w-full max-w-md sm:max-w-lg rounded-3xl bg-[#041A3F]/95 px-6 py-8 text-white shadow-2xl ring-1 ring-black/20 lg:hidden">
                            <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight tracking-[-0.01em]">
                                A Structured Approach to Security Maturity
                            </h2>
                            <p className="mt-3 text-lg text-white/80">
                                Security readiness requires more than reactive controls. Security Council provides a structured, advisory-led framework designed to improve awareness, enable capability, and validate preparedness.
                            </p>
                            <div className="mt-6 flex flex-col gap-4">
                                {heroCards.map((card) => (
                                    <div
                                        key={card.title}
                                        className="rounded-2xl bg-white px-4 py-4 text-[#0A2A57] shadow-lg ring-1 ring-black/10"
                                    >
                                        <h2 className='text-sm font-extrabold'>
                                            {card.heading}
                                        </h2>
                                        <h3 className="text-base sm:text-base font-medium leading-snug">
                                            {card.title}
                                        </h3>
                                        <a
                                            href={card.href}
                                            className="mt-2 inline-flex items-center text-sm font-semibold text-[#0000D3] hover:underline"
                                        >
                                            {card.cta} <span className="ml-1 translate-y-[1px]" aria-hidden>
                                                ↗
                                            </span>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative hidden w-full lg:absolute lg:right-[80px] lg:top-[-200px] lg:block lg:h-[710px] lg:w-[420px]">
                            <OptimizedImage
                                src="/homepage/Section 1/Rectangle 1127.webp"
                                alt="Right panel rectangle"
                                className="block h-full w-full object-cover object-top"
                                eager
                            />
                            {/* Vertical white border line on the card */}
                            <div className="pointer-events-none absolute left-4 top-78 h-[66%] w-[25px] bg-white z-20" />
                            {/* Heading on top of the blue panel */}
                            <div className="absolute top-14 left-12 right-8 pr-6 z-30">

                                <div className="relative inline-block group max-w-[420px]">

                                    <h2 className="text-white text-[30px] leading-[1.2] font-extrabold tracking-[-0.01em] cursor-pointer">
                                        A Structured Approach to Security Maturity
                                    </h2>

                                    <p className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 w-[320px] p-4 rounded-lg shadow-xl bg-blue-600 text-black text-[13px] opacity-0 scale-95 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 pointer-events-none ">
                                        Security readiness requires more than reactive controls.
                                        Security Council provides a structured, advisory-led framework
                                        designed to improve awareness, enable capability, and validate preparedness.
                                    </p>

                                </div>

                            </div>





                            {/* Stacked cards overlay */}
                            <div className="absolute left-20 right-6 bottom-6 w-[380px] z-30">
                                <div className="flex flex-col gap-3">
                                    {heroCards.map((card) => (
                                        <div

                                            key={card.title}
                                            className="relative bg-white/95 rounded-xl shadow-xl ring-1 ring-black/5 px-4 py-4 pr-5"
                                        >
                                            <h2 className='text-[17px] font-extrabold'>
                                                {card.heading}
                                            </h2>
                                            <div className="relative group inline-block max-w-xs">

                                                {/* Short Text (5 words visible by default) */}
                                                <p className="text-black text-[13px] font-semibold leading-[1.2]">
                                                    {card.title.length > 42 ? card.title.slice(0, 42) + "..." : card.title}
                                                </p>

                                                {/* Full Paragraph Popup */}
                                                <p className="absolute left-0 top-full mt-2 w-[280px] p-3 rounded-lg shadow-xl bg-blue-600 text-black text-[13px] leading-relaxed opacity-0 scale-95 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 pointer-events-none z-40 ">

                                                    {card.title}
                                                </p>

                                            </div>
                                            <a
                                                href={card.href}
                                                className="mt-2 inline-flex items-center text-[#0000D3] font-semibold text-sm hover:underline"
                                            >
                                                {card.cta} <span className="ml-1 translate-y-[1px]" aria-hidden>
                                                    ↗
                                                </span>
                                            </a>
                                            <div className="pointer-events-none absolute top-0 right-0 hidden h-full w-[120px] rounded-r-xl bg-gradient-to-r from-transparent to-white/60 lg:block" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom-left logo within background band */}
                    <div className="pointer-events-none hidden md:block absolute bottom-6 left-4 md:left-2 md:-translate-x-2 lg:bottom-10 lg:left-6 lg:translate-x-0 z-20">
                        <OptimizedImage
                            src="/logo_sc.webp"
                            alt="Security Council logo"
                            className="w-32 sm:w-44 md:w-52 lg:w-[420px] opacity-95 logo-white"
                            eager
                        />
                    </div>
                </div>

                {/* Bottom spacer to extend Section 1 */}
                <div className="h-10 sm:h-12 lg:h-[60px]" />
            </div>
        </section>

        {/* Section 2 - CTI Reports */}


        {/* SECTION 3 – Research & Insights */}
        <section className="bg-white pb-20">

            {/* ================= FULL WIDTH IMAGE ================= */}
            <div className="relative w-full">

                <OptimizedImage
                    src="homepage/Section 2/cardimage.png"
                    alt="Security intelligence background"
                    className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover"
                    eager
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-[#031B3E]/65" />

                {/* Center Text */}
                <div className="absolute inset-0 flex items-center justify-center text-center px-6">
                    <div className="max-w-3xl text-white">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                            Security Maturity Requires Structured Insight.
                        </h2>

                        <p className="mt-6 text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed">
                            Independent analysis and advisory perspectives designed to inform
                            enterprise and regulated-sector decision-making.
                        </p>
                    </div>
                </div>
            </div>

            {/* ================= FLOATING PANEL ================= */}
            <div className="relative z-20 -mt-16 sm:-mt-20 lg:-mt-24 px-6">

                <div className="mx-auto max-w-6xl bg-white rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.15)] p-8 sm:p-12">

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                        {ctiCards.map((card) => (
                            <div
                                key={card.title}
                                className="flex flex-col justify-between p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white"
                            >
                                <div>
                                    <p className="text-[#0A2A57] font-bold text-lg leading-snug">
                                        {card.title}
                                    </p>
                                </div>

                                <a
                                    href={card.href}
                                    className="mt-4 inline-flex items-center text-sm font-semibold text-[#0000D3] hover:underline"
                                >
                                    Read Insight ↗
                                </a>
                            </div>
                        ))}

                    </div>

                    {/* CTA */}
                    <div className="mt-12 text-center">
                        <a
                            href="#"
                            className="inline-flex items-center gap-3 bg-[#0000D3] text-white px-8 py-4 rounded-md font-semibold shadow-lg hover:bg-blue-800 transition duration-300"
                        >
                            Explore More Reports ↗
                        </a>
                    </div>

                </div>
            </div>

        </section>





        {/* section4 -Industry Focus  */}

        <section className="relative py-24 px-6 bg-gradient-to-b from-white to-gray-100 overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-20">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 text-gray-900">
                        Serving Regulated and Enterprise Sectors
                    </h2>

                    <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Security Council programs are designed for industries where governance,
                        compliance readiness, and operational resilience are mission-critical.
                    </p>
                </div>

                {/* Industry Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Card 1 */}
                    <div className="group bg-white/70 backdrop-blur-lg p-8 rounded-3xl border border-gray-200 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 text-center">
                        <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-xl font-bold">
                            💳
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition">
                            Banking & Financial Services (BFSI)
                        </h3>
                    </div>

                    {/* Card 2 */}
                    <div className="group bg-white/70 backdrop-blur-lg p-8 rounded-3xl border border-gray-200 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 text-center">
                        <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-full bg-green-100 text-green-600 text-xl font-bold">
                            🛡️
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-green-600 transition">
                            Insurance
                        </h3>
                    </div>

                    {/* Card 3 */}
                    <div className="group bg-white/70 backdrop-blur-lg p-8 rounded-3xl border border-gray-200 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 text-center">
                        <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-full bg-red-100 text-red-600 text-xl font-bold">
                            🏥
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-red-600 transition">
                            Healthcare
                        </h3>
                    </div>

                    {/* Card 4 */}
                    <div className="group bg-white/70 backdrop-blur-lg p-8 rounded-3xl border border-gray-200 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 text-center">
                        <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 text-xl font-bold">
                            🏢
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-purple-600 transition">
                            Enterprise Organizations
                        </h3>
                    </div>

                </div>
            </div>
        </section>



        {/* SECTION 5 – Advisory & Engagement Model  */}

        <section className="relative py-28 px-6 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
            <div className="max-w-6xl mx-auto text-center">

                {/* Headline */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-10 text-gray-900 leading-tight">
                    Advisory-Led. Subscription-Based. Standards-Driven.
                </h2>

                {/* Divider */}
                <div className="w-24 h-1 bg-blue-600 mx-auto mb-10 rounded-full"></div>

                {/* Content Card */}
                <div className="bg-white shadow-xl rounded-3xl p-10 md:p-14 border border-gray-100">

                    <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6 max-w-3xl mx-auto">
                        Security Council operates through a structured subscription engagement model,
                        providing continuous access to awareness resources, training programs,
                        advisory assessments, and certification lifecycle support.
                    </p>

                    <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-10 max-w-3xl mx-auto">
                        Organizations engage voluntarily to strengthen operational readiness,
                        improve governance alignment, and demonstrate commitment to structured
                        security standards.
                    </p>

                    {/* CTA */}
                    <button className="inline-flex items-center gap-2 bg-[#0000D3] text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg">
                        Learn About Engagement Model
                        <span className="text-lg">→</span>
                    </button>

                </div>

            </div>
        </section>


        {/* SECTION 6 – Certification Positioning  */}
        <section className="bg-[#F8FAFC] py-20 px-6 md:px-16">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0A2A57]">
                        Security Council Certification
                    </h2>

                    <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed">
                        Certification reflects structured participation in defined awareness,
                        training, and governance practices. It indicates preparedness and
                        commitment — not regulatory authority or enforcement.
                    </p>

                    {/* Criteria List */}
                    <ul className="mt-8 space-y-4">
                        <li className="flex items-start">
                            <span className="w-2 h-2 mt-2 bg-[#0A2A57] rounded-full mr-3"></span>
                            <span className="text-gray-700">
                                Completion of structured enablement programs
                            </span>
                        </li>

                        <li className="flex items-start">
                            <span className="w-2 h-2 mt-2 bg-[#0A2A57] rounded-full mr-3"></span>
                            <span className="text-gray-700">
                                Alignment with recommended governance practices
                            </span>
                        </li>

                        <li className="flex items-start">
                            <span className="w-2 h-2 mt-2 bg-[#0A2A57] rounded-full mr-3"></span>
                            <span className="text-gray-700">
                                Participation in advisory maturity evaluation
                            </span>
                        </li>
                    </ul>

                    {/* CTA */}
                    <button className="mt-10 bg-[#0000D3] text-white px-6 py-3 rounded-lg hover:bg-[#081f40] transition duration-300 shadow-md">
                        View Certification Framework →
                    </button>
                </div>

                {/* Right Side – Optional Visual Block */}
                <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100">
                    <div className="text-center">
                        <div className="w-20 h-20 mx-auto bg-[#0A2A57]/10 rounded-full flex items-center justify-center">
                            <span className="text-3xl font-bold text-[#0A2A57]">✓</span>
                        </div>

                        <h3 className="mt-6 text-xl font-semibold text-[#0A2A57]">
                            Structured Certification Model
                        </h3>

                        <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                            Built around enablement, governance alignment, and advisory
                            maturity assessment to support enterprise readiness.
                        </p>
                    </div>
                </div>

            </div>
        </section>




        {/* Section 7 - Newsletter */}
        <section className="relative bg-white overflow-hidden" aria-label="Section 4">
            <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-0 py-16 sm:py-20 lg:py-0 lg:h-[373px]">
                {/* Mobile / tablet layout */}
                <div className="flex flex-col gap-6 lg:hidden">
                    <div className="relative overflow-hidden rounded-3xl bg-[#031B3E] px-6 py-10 text-white sm:px-8">
                        <OptimizedImage
                            src="/homepage/Section 4/background.webp"
                            alt=""
                            className="absolute inset-0 h-full w-full object-cover"
                            eager
                            aria-hidden="true"
                        />
                        <div className="absolute inset-0 bg-[#031B3E]/75" aria-hidden />
                        <div className="relative flex flex-col gap-6">
                            <div className="text-center sm:text-left">
                                <h3 className="mb-3 text-2xl font-bold leading-tight text-white">
                                    Security Council Briefing
                                </h3>
                                <p className="text-sm sm:text-base leading-relaxed text-white/85">
                                    Receive structured security awareness insights, governance guidance, and certification updates directly to your inbox.
                                </p>
                            </div>
                            <div className="flex flex-col gap-3">
                                <label
                                    htmlFor="newsletterEmailHomeMobile"
                                    className="text-sm font-semibold text-white"
                                >
                                    Work Email
                                </label>
                                <input
                                    id="newsletterEmailHomeMobile"
                                    type="email"
                                    className="h-[52px] w-full rounded-md border border-white/40 bg-white/90 px-3 text-sm text-[#002856] placeholder:text-[#25416D]/70 focus:border-white focus:outline-none"
                                    placeholder="you@company.com"
                                    aria-label="Work Email"
                                />
                                <button className="inline-flex h-[52px] w-full items-center justify-center rounded-md bg-white text-sm font-bold text-[#0000D3] transition-colors hover:bg-[#E7E9FF]">
                                    Subscribe
                                    <svg className="ml-2 h-4 w-4" viewBox="0 0 25 24" fill="none">
                                        <circle cx="12.75" cy="12" r="12" fill="#0000D3" />
                                        <path
                                            d="M6.75 10.8C6.30817 10.8 5.95 11.1582 5.95 11.6C5.95 12.0419 6.30817 12.4 6.75 12.4V11.6V10.8ZM19.3157 12.1657C19.6281 11.8533 19.6281 11.3468 19.3157 11.0344L14.2245 5.94318C13.9121 5.63076 13.4056 5.63076 13.0931 5.94318C12.7807 6.2556 12.7807 6.76213 13.0931 7.07455L17.6186 11.6L13.0931 16.1255C12.7807 16.4379 12.7807 16.9445 13.0931 17.2569C13.4056 17.5693 13.9121 17.5693 14.2245 17.2569L19.3157 12.1657ZM6.75 11.6V12.4H18.75V11.6V10.8H6.75V11.6Z"
                                            fill="white"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <p className="text-xs leading-relaxed text-white/70">
                                By clicking the "Continue" button, you are agreeing to the Security Council Terms of
                                Use and Privacy Policy.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Desktop layout */}
                <div className="hidden lg:block">
                    <div className="absolute inset-0 z-0">
                        <OptimizedImage
                            src="/homepage/Section 4/background.webp"
                            alt=""
                            className="h-full w-full object-cover"
                            eager
                            aria-hidden="true"
                        />
                    </div>
                    {/* Newsletter overlay copied from LatestInsightPage */}
                    <div className="absolute inset-0 flex items-center justify-center px-4 z-10">
                        <div className="flex w-full max-w-6xl flex-col items-center gap-8 rounded-md border border-white/30 bg-white/55 px-4 py-8 shadow-[0_18px_50px_rgba(0,0,0,0.08)] supports-[backdrop-filter]:backdrop-blur-[3px] sm:w-[90%] sm:px-8 sm:py-10 lg:h-[238px] lg:flex-row lg:items-center lg:gap-[46px] lg:px-[96px]">
                            <div className="w-full text-center lg:w-[560px] lg:text-left">
                                <h3 className="mb-3 text-xl sm:text-2xl lg:text-[32px] font-bold leading-tight lg:leading-[38px] text-[#002856]">
                                    Security Council Briefing
                                </h3>
                                <p className="text-sm sm:text-base lg:text-[18px] leading-relaxed lg:leading-[30px] text-black">
                                    Receive structured security awareness insights, governance guidance, and certification updates directly to your inbox.
                                </p>
                            </div>
                            <div className="w-full lg:w-[621px]">
                                <div className="mb-2">
                                    <label
                                        htmlFor="newsletterEmailHome"
                                        className="text-sm sm:text-base lg:text-[15px] font-bold text-[#002856]"
                                    >
                                        Work Email
                                    </label>
                                </div>
                                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                                    <input
                                        id="newsletterEmailHome"
                                        type="email"
                                        className="h-[50px] w-full border border-[#757575] bg-white px-3 text-sm sm:h-[54px] sm:text-base lg:text-[16px]"
                                        placeholder="you@company.com"
                                        aria-label="Work Email"
                                    />
                                    <button
                                        className="flex h-[50px] px-6 sm:px-8 w-full items-center justify-center rounded border-2 border-[#0000D3] bg-[#0000D3] text-sm font-bold text-white transition-colors hover:bg-blue-800 sm:h-[58px] sm:w-[150px] sm:text-base"
                                    >
                                        Subscribe
                                        <svg
                                            className="ml-2 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6"
                                            viewBox="0 0 25 24"
                                            fill="none"
                                        >
                                            <circle cx="12.75" cy="12" r="12" fill="white" />
                                            <path
                                                d="M6.75 10.8C6.30817 10.8 5.95 11.1582 5.95 11.6C5.95 12.0419 6.30817 12.4 6.75 12.4V11.6V10.8ZM19.3157 12.1657C19.6281 11.8533 19.6281 11.3468 19.3157 11.0344L14.2245 5.94318C13.9121 5.63076 13.4056 5.63076 13.0931 5.94318C12.7807 6.2556 12.7807 6.76213 13.0931 7.07455L17.6186 11.6L13.0931 16.1255C12.7807 16.4379 12.7807 16.9445 13.0931 17.2569C13.4056 17.5693 13.9121 17.5693 14.2245 17.2569L19.3157 12.1657ZM6.75 11.6V12.4H18.75V11.6V10.8H6.75V11.6Z"
                                                fill="#0000D3"
                                            />
                                        </svg>
                                    </button>

                                </div>
                                <p className="mt-2 text-xs sm:text-sm lg:text-[12px] leading-relaxed lg:leading-[18px] text-black">
                                    By clicking the &quot;Continue&quot; button, you are agreeing to the{' '}
                                    <span className="text-[#0000D3]">Security Council Terms of Use</span> and{' '}
                                    <span className="text-[#0000D3]">Privacy Policy.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* section 8 -Final Call to Action */}
        <section className="relative py-12 px-6" style={{ backgroundColor: "rgb(0, 40, 86)" }}>
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

                {/* Left Content */}
                <div className="md:w-2/3 text-center md:text-left">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight text-white">
                        Strengthen Your Organization’s Security Readiness.
                    </h2>
                    <p className="mt-3 text-white/80 text-base sm:text-lg leading-relaxed">
                        Engage with Security Council to advance awareness, enable capability,
                        and validate security maturity.
                    </p>
                </div>

                {/* Right Button */}
                <div className="md:w-auto flex justify-center md:justify-end">
                    <a
                        href="#contact"
                        className="inline-block px-8 py-3 bg-[#0000D3] text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                    >
                        Request Consultation →
                    </a>
                </div>

            </div>
        </section>



    </main>
);

export default Home;


