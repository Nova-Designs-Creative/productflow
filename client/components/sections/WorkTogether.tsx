export default function WorkTogether() {
  const tabs = [
    {
      heading: "Work together better",
      description: "Your team stays connected without drowning in messages. Everyone knows the plan, sees the progress, and moves in the same direction."
    },
    {
      heading: "Build with confidence",
      description: "Stop guessing. ProductFlow Studio gives you the facts you need to ship with certainty. Your decisions rest on solid ground, not hunches."
    },
    {
      heading: "Ship what matters",
      description: "Priorities become clear. Distractions fade. You launch faster because you focus on what actually moves the needle for your users."
    }
  ];

  return (
    <section className="bg-white py-28 px-8 lg:px-16">
      <div className="max-w-container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          {/* Left Image */}
          <div className="flex-1">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/a6c628e86e497eb034bed5eceb440cfec1d2235a?width=1200" 
              alt="Collaboration" 
              className="w-full h-[600px] object-cover rounded-lg"
            />
          </div>

          {/* Right Tabs */}
          <div className="flex-1 flex flex-col gap-10">
            {tabs.map((tab, index) => (
              <div 
                key={index} 
                className={`h-[130px] pl-8 flex flex-col justify-center gap-4 ${
                  index === 0 ? 'border-l border-pf-dark bg-pf-gray' : ''
                }`}
              >
                <h3 className="font-heading text-h2 text-pf-dark">{tab.heading}</h3>
                <p className="text-body text-pf-dark">{tab.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
