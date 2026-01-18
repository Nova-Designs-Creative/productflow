import { Mail, Phone, MapPin, ChevronRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-pf-green-dark py-28 px-8 lg:px-16 scroll-mt-[72px]">
      <div className="max-w-container mx-auto flex flex-col gap-20">
        {/* Section Title */}
        <div className="max-w-[768px] flex flex-col gap-4">
          <span className="text-white font-semibold text-body-sm">Talk</span>
          <div className="flex flex-col gap-6">
            <h2 className="font-heading text-h1 text-white">Get in touch</h2>
            <p className="text-body-lg text-white">We're here to help. Reach out and let's talk.</p>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Left Column - Contact Info */}
          <div className="flex-1 max-w-[400px] flex flex-col gap-10">
            {/* Email */}
            <div className="flex flex-col gap-4">
              <Mail className="w-8 h-8 text-white" />
              <div className="flex flex-col gap-2">
                <h3 className="font-heading text-h3 text-white">Email</h3>
                <p className="text-body text-white">Send us a message</p>
                <a href="mailto:hello@productflowstudio.com" className="text-body text-white underline hover:text-pf-green-light">
                  hello@productflowstudio.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-4">
              <Phone className="w-8 h-8 text-white" />
              <div className="flex flex-col gap-2">
                <h3 className="font-heading text-h3 text-white">Phone</h3>
                <p className="text-body text-white">Call us during business hours</p>
                <a href="tel:+14155550100" className="text-body text-white underline hover:text-pf-green-light">
                  +1 (415) 555-0100
                </a>
              </div>
            </div>

            {/* Office */}
            <div className="flex flex-col gap-4">
              <MapPin className="w-8 h-8 text-white" />
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <h3 className="font-heading text-h3 text-white">Office</h3>
                  <p className="text-body text-white">415 Mission Street, San Francisco CA 94105</p>
                </div>
                
                <button className="flex items-center gap-2 text-white text-body font-medium hover:gap-3 transition-all">
                  Get directions
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Map Image */}
          <div className="flex-1">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/7e2e42a02c40e0fa85f610046170c1549625d480?width=1600" 
              alt="Office location" 
              className="w-full h-[516px] object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
