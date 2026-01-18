import { Check } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Starter plan",
      price: 19,
      yearlyPrice: 199,
      features: [
        "Real-time team sync",
        "Basic dashboards",
        "Five team members"
      ]
    },
    {
      name: "Professional plan",
      price: 29,
      yearlyPrice: 499,
      features: [
        "Everything in Starter",
        "Advanced analytics",
        "Unlimited team members",
        "Priority support"
      ]
    },
    {
      name: "Enterprise plan",
      price: 49,
      yearlyPrice: 999,
      features: [
        "Everything in Professional",
        "Custom integrations",
        "Dedicated account manager",
        "Security and compliance",
        "SLA guarantee"
      ]
    }
  ];

  return (
    <section id="pricing" className="bg-white py-28 px-8 lg:px-16 scroll-mt-[72px]">
      <div className="max-w-container mx-auto flex flex-col gap-20">
        {/* Section Title */}
        <div className="max-w-[768px] mx-auto text-center flex flex-col gap-4">
          <span className="text-pf-dark font-semibold text-body-sm">Plans</span>
          <div className="flex flex-col gap-6">
            <h2 className="font-heading text-h1 text-pf-dark">Simple pricing</h2>
            <p className="text-body-lg text-pf-dark">Pick the plan that fits your team</p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="p-8 bg-pf-gray rounded-lg flex flex-col justify-between gap-8">
              <div className="flex flex-col gap-8">
                {/* Price */}
                <div className="flex flex-col">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-heading text-h3 text-pf-dark flex-1">{plan.name}</h3>
                    <div className="w-12 h-12 bg-pf-dark rounded-full"></div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="text-pf-dark">
                      <span className="font-heading text-display">${plan.price}</span>
                      <span className="font-heading text-h2">/mo</span>
                    </div>
                    <p className="text-body text-pf-dark">or ${plan.yearlyPrice} yearly</p>
                  </div>
                </div>

                <div className="h-px bg-pf-dark/15"></div>

                {/* Features */}
                <div className="flex flex-col gap-4">
                  <p className="text-body text-pf-dark">Includes</p>
                  <div className="flex flex-col gap-4 py-2">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-4">
                        <Check className="w-6 h-6 text-pf-dark flex-shrink-0 mt-0.5" strokeWidth={2} />
                        <p className="text-body text-pf-dark flex-1">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <button className="w-full px-3 py-[6px] bg-pf-dark text-white text-body font-medium rounded-md border border-pf-dark hover:bg-pf-dark/90 transition-colors">
                Get started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
