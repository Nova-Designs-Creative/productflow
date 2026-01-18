interface CTASectionProps {
  heading: string;
  description: string;
  primaryCTA: string;
  secondaryCTA?: string;
  image: string;
}

export default function CTASection({ 
  heading, 
  description, 
  primaryCTA, 
  secondaryCTA,
  image 
}: CTASectionProps) {
  return (
    <section className="bg-white">
      <div className="px-8 lg:px-16 py-28">
        <div className="max-w-container mx-auto flex flex-col gap-20">
          <div className="max-w-[768px] mx-auto text-center flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <h2 className="font-heading text-h1 text-pf-dark">{heading}</h2>
              <p className="text-body-lg text-pf-dark">{description}</p>
            </div>

            <div className="flex items-center justify-center gap-4 flex-wrap">
              <button className="px-3 py-[6px] bg-pf-dark text-white text-body font-medium rounded-md border border-pf-dark hover:bg-pf-dark/90 transition-colors">
                {primaryCTA}
              </button>
              {secondaryCTA && (
                <button className="px-3 py-[6px] bg-pf-dark/5 text-pf-dark text-body font-medium rounded-md border border-transparent hover:bg-pf-dark/10 transition-colors">
                  {secondaryCTA}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <img 
        src={image} 
        alt={heading} 
        className="w-full h-[810px] object-cover rounded-lg px-8 lg:px-16"
      />
    </section>
  );
}
