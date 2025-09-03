import Link from "next/link";
import Image from "next/image";

export default function Page() {
  const canvaEmbed =
    "https://www.canva.com/design/DAGbplfirz8/lSCilOKokFaeeRWKz4lJ4A/view?embed"; // Canva Share → More → Embed

  return (
    <div className="min-h-screen bg-[#0d2430] text-white antialiased">
      {/* Header */}
      <header className="sticky top-0 z-[9999] border-b border-white/10 bg-[#0d2430] backdrop-blur-xl" style={{ position: 'sticky', zIndex: 9999 }}>
        <div className="mx-auto flex max-w-7xl items-center justify-between" style={{ padding: '40px 80px' }}>
          <div className="flex items-baseline font-bold tracking-[0.2em]">
            <span className="text-2xl text-[#2aa68a]">MOOD</span><span className="text-2xl">CHANGER</span><span className="text-2xl text-[#2aa68a]">.AI</span>
          </div>
          <div className="flex items-center">
            <Image
              src="/flomadlogo.svg"
              alt="Flomad Labs"
              width={32}
              height={32}
              className="opacity-80 hover:opacity-100 transition-opacity brightness-0 invert"
              style={{ filter: 'brightness(0) saturate(100%) invert(64%) sepia(14%) saturate(1465%) hue-rotate(126deg) brightness(91%) contrast(87%)' }}
            />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2aa68a]/5 via-transparent to-[#0d2430]" />
        
        <div className="relative mx-auto max-w-7xl px-6 pt-64 pb-48 lg:pt-80 lg:pb-56">
          {/* Hero Text */}
          <div className="mb-12 text-center py-8">
            <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight lg:text-5xl text-white">
              Coming Soon
            </h1>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/70 lg:text-xl">
              We're building something amazing. While we craft the full experience, explore our presentation below to discover what MOODCHANGER.AI is all about.
            </p>
          </div>

          {/* Video Section */}
          <div className="mx-auto max-w-7xl">
            <div className="group relative z-10 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-3 shadow-2xl backdrop-blur-sm transition-all duration-500 hover:border-[#2aa68a]/30 hover:shadow-[#2aa68a]/20">
              <div className="relative w-full overflow-hidden rounded-2xl" style={{ paddingTop: "45%" }}>
                <iframe
                  src={canvaEmbed}
                  className="absolute left-0 top-0 h-full w-full border-0 z-0"
                  allowFullScreen
                  title="MOODCHANGER.AI Presentation"
                />
              </div>
              
              {/* Video overlay controls */}
              <div className="mt-4 flex items-center justify-between px-2">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-[#2aa68a] animate-pulse" />
                  <span className="text-sm font-medium text-white/90">Live Presentation</span>
                </div>
                <a
                  href={canvaEmbed}
                  target="_blank"
                  rel="noreferrer"
                  className="group/link inline-flex items-center gap-2 rounded-full bg-[#2aa68a]/20 px-4 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-[#2aa68a]/30 hover:scale-105"
                >
                  <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <span>Open presentation</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-8 py-16 text-sm text-white/70 md:flex-row">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} MoodChanger.AI</span>
            <span className="text-white/50">•</span>
            <span>A</span>
            <Link
              href="https://flomadlabs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#2aa68a] transition-colors hover:text-[#2aa68a]/80"
            >
              Flomad Labs
            </Link>
            <span>product</span>
          </div>
          <div className="flex items-center gap-6">
          </div>
        </div>
      </footer>
    </div>
  );
}
