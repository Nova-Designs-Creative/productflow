import { ChevronRight } from "lucide-react";

export default function GetStarted() {
  const steps = [
    {
      tagline: "Connect",
      heading: "Plug in your tools and data sources",
      description: "ProductFlow Studio talks to what you already use",
      cta: "Integrate",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/742359ef39656af6ee22a28737a05953cb9f91f5?width=811"
    },
    {
      tagline: "Align",
      heading: "Your team sees the same picture",
      description: "Dashboards sync across everyone, always current",
      cta: "View",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/ac31f785568bc90cbfc98e3c12b4e5f60cba163b?width=811"
    },
    {
      tagline: "Decide",
      heading: "Act on what the data tells you",
      description: "Turn insight into action without the friction",
      cta: "Execute",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/6f7ac7f498c9c334f0d10c20f12b490f679b0b0b?width=811"
    }
  ];

  return (
    <section className="bg-pf-dark py-28 px-8 lg:px-16">
      <div className="max-w-container mx-auto flex flex-col gap-20">
        {/* Section Title */}
        <div className="max-w-[768px] mx-auto text-center flex flex-col gap-4">
          <span className="text-white font-semibold text-body-sm">Simple</span>
          <div className="flex flex-col gap-6">
            <h2 className="font-heading text-h1 text-white">Get started in minutes</h2>
            <p className="text-body-lg text-white">No setup headaches, no learning curve that kills momentum</p>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col bg-pf-dark-secondary rounded-lg overflow-hidden border-0">
              <img 
                src={step.image} 
                alt={step.heading} 
                className="w-full h-[233px] object-cover"
              />
              
              <div className="p-8 flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <span className="text-white font-semibold text-body-sm">{step.tagline}</span>
                  <div className="flex flex-col gap-4">
                    <h3 className="font-heading text-h2 text-white">{step.heading}</h3>
                    <p className="text-body text-white">{step.description}</p>
                  </div>
                </div>

                <button className="flex items-center gap-2 text-white text-body font-medium hover:gap-3 transition-all">
                  {step.cta}
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
