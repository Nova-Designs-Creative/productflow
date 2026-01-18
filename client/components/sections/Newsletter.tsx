export default function Newsletter() {
  return (
    <section className="bg-white">
      <div className="px-8 lg:px-16 py-28">
        <div className="max-w-container mx-auto flex flex-col gap-20">
          <div className="max-w-[768px] mx-auto text-center flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <h2 className="font-heading text-h1 text-pf-dark">Stay in the loop</h2>
              <p className="text-body-lg text-pf-dark">Get tips, updates, and stories from teams shipping faster</p>
            </div>

            <div className="w-full max-w-[513px] mx-auto flex flex-col gap-4">
              <div className="flex gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-0 py-2 border-b border-pf-dark/15 bg-transparent text-body text-pf-dark placeholder:text-pf-dark/60 focus:outline-none focus:border-pf-dark transition-colors"
                />
                <button className="px-3 py-[6px] bg-pf-dark text-white text-body font-medium rounded-md border border-pf-dark hover:bg-pf-dark/90 transition-colors whitespace-nowrap">
                  Subscribe
                </button>
              </div>
              
              <p className="text-tiny text-pf-dark text-left">
                We respect your inbox. Unsubscribe anytime, no questions asked.
              </p>
            </div>
          </div>
        </div>
      </div>

      <img 
        src="https://api.builder.io/api/v1/image/assets/TEMP/9381b4dabd1919ec373a93c286cd817e8f6c597a?width=2880" 
        alt="Newsletter" 
        className="w-full h-[810px] object-cover rounded-lg px-8 lg:px-16"
      />
    </section>
  );
}
