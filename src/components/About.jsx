import { useState } from 'react'
import stackImage from '../assets/about/profile.png'
import qrImage from '../assets/about/linkedin-qr.png'
import { aboutContent, personalInfo, socialLinks } from '../data/portfolioData'

const About = () => {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <section
      id="about"
      className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Decorative Star 1 - Top Right */}
      <svg
        className="absolute top-12 right-8 md:right-16 w-8 h-8 text-black opacity-30 animate-pulse fill-current pointer-events-none"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
      </svg>

      {/* Decorative Star 2 - Bottom Left */}
      <svg
        className="absolute bottom-28 left-6 md:left-12 w-10 h-10 text-black opacity-30 animate-pulse fill-current pointer-events-none"
        style={{ animationDelay: '1s' }}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
      </svg>

      {/* Main Content Layout */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-16 items-center md:items-start relative z-10">
        {/* Left: 3D Interactive Rotating Profile & LinkedIn Scanner Card */}
        <div data-aos="fade-right" className="w-full md:w-[350px] shrink-0 flex flex-col items-center">
          {/* Card 3D Perspective Wrapper */}
          <div
            className="w-full max-w-[350px] h-[520px] cursor-pointer [perspective:1200px] select-none"
            onClick={() => setIsFlipped((prev) => !prev)}
            title="Click to flip card"
          >
            <div
              className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d]"
              style={{
                transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
              }}
            >
              {/* ================= FRONT SIDE: Profile Showcase ================= */}
              <div
                className="absolute inset-0 w-full h-full bg-[#111111] border border-white/15 rounded-3xl p-4 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] flex flex-col justify-between [backface-visibility:hidden]"
              >
                {/* Photo Container */}
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-black/40 shadow-inner">
                  <img
                    src={stackImage}
                    alt={`${personalInfo.name} — ${personalInfo.title}`}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle gradient vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                  {/* Status pill badge on top right */}
                  <div className="absolute top-3 right-3 bg-black/75 backdrop-blur-md border border-white/20 rounded-full px-3 py-1 flex items-center space-x-1.5 shadow-md">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] font-mono uppercase tracking-wider text-white font-semibold">
                      Open to Work
                    </span>
                  </div>

                  {/* Name on bottom of photo */}
                  <div className="absolute bottom-3 left-3 right-3 text-left">
                    <h3 className="text-xl font-black text-white tracking-tight drop-shadow-md">
                      {personalInfo.name}
                    </h3>
                    <p className="text-xs uppercase font-mono tracking-wider text-red-400 font-semibold drop-shadow-sm">
                      {personalInfo.title}
                    </p>
                  </div>
                </div>

                {/* Card Details & Flip Button */}
                <div className="pt-3 px-1 text-left space-y-2.5">
                  <div className="flex items-center justify-between text-xs text-white/70">
                    <div className="flex items-center space-x-1.5">
                      <svg className="w-3.5 h-3.5 text-red-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{personalInfo.location}</span>
                    </div>

                    <div className="flex space-x-1">
                      {['Java', 'React', 'MySQL'].map((tech) => (
                        <span key={tech} className="px-2 py-0.5 rounded-full bg-white/10 text-white/80 text-[10px] font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Prominent Flip-to-Scan CTA */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      setIsFlipped(true)
                    }}
                    className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#0077b5] to-[#00a0dc] hover:from-[#005e93] hover:to-[#0077b5] text-white text-xs font-bold flex items-center justify-center space-x-2 shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.68 1.68 0 1 0 0-3.36 1.68 1.68 0 0 0 0 3.36m1.4 9.74V10.13H5.06v8.37h2.8z" />
                    </svg>
                    <span>Tap to Scan LinkedIn QR</span>
                    <span className="text-sm">🔄</span>
                  </button>
                </div>
              </div>

              {/* ================= BACK SIDE: LinkedIn QR Scanner ================= */}
              <div
                className="absolute inset-0 w-full h-full bg-[#0d1117] border-2 border-[#0077b5]/50 rounded-3xl p-5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] flex flex-col justify-between items-center text-center [backface-visibility:hidden] [transform:rotateY(180deg)]"
              >
                {/* Header */}
                <div className="w-full flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-lg bg-[#0077b5] flex items-center justify-center text-white shadow-md">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.68 1.68 0 1 0 0-3.36 1.68 1.68 0 0 0 0 3.36m1.4 9.74V10.13H5.06v8.37h2.8z" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <h4 className="text-sm font-bold text-white tracking-wide">LinkedIn Scanner</h4>
                      <p className="text-[10px] text-[#00a0dc] font-mono">Scan to connect</p>
                    </div>
                  </div>

                  <span className="text-[11px] font-mono bg-white/10 text-white/80 px-2.5 py-1 rounded-full">
                    {personalInfo.firstName}
                  </span>
                </div>

                {/* QR Code Container with Scanner Frame */}
                <div className="relative p-3 bg-white rounded-2xl shadow-2xl my-2 group">
                  {/* Scanner overlay effect */}
                  <img
                    src={qrImage}
                    alt="Scan LinkedIn QR Code - Divya K J"
                    className="w-48 h-48 object-contain rounded-lg"
                  />
                  {/* Scan target corner brackets */}
                  <div className="absolute top-1 left-1 w-4 h-4 border-t-2 border-l-2 border-[#0077b5]" />
                  <div className="absolute top-1 right-1 w-4 h-4 border-t-2 border-r-2 border-[#0077b5]" />
                  <div className="absolute bottom-1 left-1 w-4 h-4 border-b-2 border-l-2 border-[#0077b5]" />
                  <div className="absolute bottom-1 right-1 w-4 h-4 border-b-2 border-r-2 border-[#0077b5]" />
                </div>

                {/* Instructions */}
                <div>
                  <p className="text-xs font-semibold text-white/90">
                    Scan with phone camera to connect
                  </p>
                  <p className="text-[11px] text-white/50 mt-0.5 font-mono">
                    Opens: linkedin.com/in/divya-kj-818940314
                  </p>
                </div>

                {/* Actions: Open LinkedIn link + Flip Back */}
                <div className="w-full space-y-2 pt-2 border-t border-white/10">
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#0077b5] hover:bg-[#005e93] text-white text-xs font-bold flex items-center justify-center space-x-1.5 shadow-md transition-colors"
                  >
                    <span>Open LinkedIn Profile</span>
                    <span>↗</span>
                  </a>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      setIsFlipped(false)
                    }}
                    className="w-full py-1.5 text-[11px] text-white/60 hover:text-white flex items-center justify-center space-x-1 transition-colors"
                  >
                    <span>🔄 Flip back to photo</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Subtext below card */}
          <p className="text-xs font-medium text-white/80 mt-3 flex items-center space-x-1">
            <span>💡</span>
            <span>Tap the card to rotate & view LinkedIn QR</span>
          </p>
        </div>

        {/* Right: Bio and Headings */}
        <div data-aos="fade-left" className="flex-1 mt-4 md:mt-0">
          <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight">
            {aboutContent.heading}
          </h2>

          <p
            className="text-lg font-bold leading-relaxed text-red-50 mt-6"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />
        </div>
      </div>

      {/* Torn-paper bottom SVG divider */}
      <svg
        className="absolute bottom-0 left-0 w-full h-14 md:h-24 pointer-events-none z-20 fill-white"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
      </svg>
    </section>
  )
}

export default About
