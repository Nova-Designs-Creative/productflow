export default function Hero() {
  return (
    <section className="bg-pf-dark-secondary min-h-[600px] lg:min-h-[900px] flex items-center overflow-hidden">
      <div className="w-full flex flex-col lg:flex-row items-stretch">
        {/* Left Content */}
        <div className="flex-1 flex items-center justify-center lg:justify-end px-8 lg:px-16 py-12 lg:py-20">
          <div className="max-w-[560px] flex flex-col gap-6 lg:gap-8">
            <div className="flex flex-col gap-4 lg:gap-6">
              <h1 className="font-heading text-[48px] leading-[110%] lg:text-display text-white -tracking-[0.48px] lg:-tracking-[0.84px]">
                Ship faster, decide smarter
              </h1>
              <p className="text-body lg:text-body-lg text-white">
                ProductFlow Studio cuts through the noise. Get your team aligned, your data clear, and your next move obvious.
              </p>
            </div>

            <div className="flex items-center gap-4 flex-wrap">
              <button className="px-3 py-[6px] bg-pf-green text-pf-dark text-body font-medium rounded-md border border-pf-green hover:bg-pf-green/90 transition-colors">
                Start
              </button>
              <button className="px-3 py-[6px] bg-white/10 text-white text-body font-medium rounded-md border border-transparent hover:bg-white/20 transition-colors">
                Demo
              </button>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 h-[300px] lg:h-auto">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/8a6e27f25597c488bab312c93c2a9972a01296fb?width=1440" 
            alt="Hero" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
