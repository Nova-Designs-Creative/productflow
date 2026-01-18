export default function FAQ() {
  const faqs = [
    {
      question: "How long is setup?",
      answer: "Most teams are up and running in under an hour. Connect your tools, invite your people, and start seeing your data in one place. No engineering required."
    },
    {
      question: "Can we try it free?",
      answer: "Yes. Start with our Starter plan and see if it fits. No credit card needed, no tricks. If it's not for you, walk away clean."
    },
    {
      question: "What if we need custom features?",
      answer: "Our Enterprise plan includes custom integrations and a dedicated account manager who works with your team. Reach out and we'll talk through what you need."
    },
    {
      question: "How secure is our data?",
      answer: "We encrypt everything in transit and at rest. We're SOC 2 compliant and audit regularly. Your data is yours, and we treat it that way."
    },
    {
      question: "Do you offer support?",
      answer: "Yes. Starter plans get email support. Professional and Enterprise get priority support and direct access to our team. We're here when you need us."
    }
  ];

  return (
    <section className="bg-white py-28 px-8 lg:px-16">
      <div className="max-w-container mx-auto flex flex-col gap-20">
        {/* Section Title */}
        <div className="max-w-[768px] mx-auto text-center flex flex-col gap-6">
          <h2 className="font-heading text-h1 text-pf-dark">Questions</h2>
          <p className="text-body-lg text-pf-dark">Everything you need to know about ProductFlow Studio</p>
        </div>

        {/* FAQ List */}
        <div className="max-w-[768px] mx-auto w-full flex flex-col gap-12">
          {faqs.map((faq, index) => (
            <div key={index} className="flex flex-col gap-4">
              <h3 className="text-body-lg text-pf-dark font-bold">{faq.question}</h3>
              <p className="text-body text-pf-dark">{faq.answer}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="max-w-[560px] mx-auto text-center flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h3 className="font-heading text-h2 text-pf-dark">Still have questions?</h3>
            <p className="text-body-lg text-pf-dark">Reach out anytime. We're happy to talk.</p>
          </div>

          <div className="flex justify-center">
            <button className="px-3 py-[6px] bg-pf-dark/5 text-pf-dark text-body font-medium rounded-md border border-transparent hover:bg-pf-dark/10 transition-colors">
              Contact
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
