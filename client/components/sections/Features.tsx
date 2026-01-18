import { ChevronRight } from "lucide-react";

export default function Features() {
  const features = [
    {
      tagline: "Sync",
      heading: "Keep everyone on the same page",
      description: "Real-time collaboration without the meeting overhead",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/eeb5ec19a23fb3aece35c0702ff198e9e84375a1?width=811"
    },
    {
      tagline: "See what your data actually says",
      heading: "Dashboards that show you what matters, not noise",
      description: "Learn",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/75788a8cce1e184c2b0239984625b347f772d600?width=811"
    },
    {
      tagline: "Move",
      heading: "Turn decisions into action",
      description: "Ship updates, track progress, close the loop",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/cd171a471f5abd27c7e3c8d9825cd4efd1d64c14?width=811"
    }
  ];

  return (
    <section id="features" className="bg-white py-28 px-8 lg:px-16 scroll-mt-[72px]">
      <div className="max-w-container mx-auto flex flex-col gap-20">
        {/* Section Title */}
        <div className="max-w-[768px] mx-auto text-center flex flex-col gap-4">
          <span className="text-pf-dark font-semibold text-body-sm">Core</span>
          <div className="flex flex-col gap-6">
            <h2 className="font-heading text-h1 text-pf-dark">What matters most</h2>
            <p className="text-body-lg text-pf-dark">Three tools built for teams that move fast</p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col bg-pf-gray rounded-lg overflow-hidden border-0">
              <div className="p-8 flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <span className="text-pf-dark font-semibold text-body-sm">{feature.tagline}</span>
                  <div className="flex flex-col gap-4">
                    <h3 className="font-heading text-h2 text-pf-dark">{feature.heading}</h3>
                    <p className="text-body text-pf-dark">{feature.description}</p>
                  </div>
                </div>

                <button className="flex items-center gap-2 text-pf-dark text-body font-medium hover:gap-3 transition-all">
                  Learn
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              <img 
                src={feature.image} 
                alt={feature.heading} 
                className="w-full h-[233px] object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
