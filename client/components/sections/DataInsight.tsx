import { ChevronRight } from "lucide-react";

export default function DataInsight() {
  return (
    <section className="bg-pf-green-light py-28 px-8 lg:px-16">
      <div className="max-w-container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-20 min-h-[640px]">
          {/* Left Content */}
          <div className="flex-1 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <span className="text-pf-dark font-semibold text-body-sm">Insight</span>
              <div className="flex flex-col gap-6">
                <h2 className="font-heading text-h1 text-pf-dark">See the signal in your data</h2>
                <p className="text-body-lg text-pf-dark">
                  ProductFlow Studio transforms raw information into clarity. Watch patterns emerge that matter, cut through the static, and know exactly what to do next.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <button className="px-3 py-[6px] bg-pf-dark/5 text-pf-dark text-body font-medium rounded-md border border-transparent hover:bg-pf-dark/10 transition-colors">
                Explore
              </button>
              <button className="flex items-center gap-2 text-pf-dark text-body font-medium hover:gap-3 transition-all">
                Details
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/82d458dd76d971ed28e70aea1c6e6aea877bbcd9?width=1200" 
              alt="Data visualization" 
              className="w-full h-[640px] object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
