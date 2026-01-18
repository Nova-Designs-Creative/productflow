import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "ProductFlow Studio killed our status meetings. We just check the dashboard and move on.",
      author: "Sarah Chen",
      role: "Product lead, Velocity",
      avatar: "https://api.builder.io/api/v1/image/assets/TEMP/5687a78033ee3f0655931a4eedf4b4445454b013?width=96"
    },
    {
      quote: "We cut our decision cycle in half. The data is always there, always current, always honest.",
      author: "Marcus Webb",
      role: "Founder, Compass Labs",
      avatar: "https://api.builder.io/api/v1/image/assets/TEMP/d3f63badc42756f5fae819926f3b656b17c67027?width=96"
    },
    {
      quote: "Our team finally speaks the same language. No more guessing what anyone meant.",
      author: "Elena Rodriguez",
      role: "Operations, Nexus",
      avatar: "https://api.builder.io/api/v1/image/assets/TEMP/701b4f3bb36edb5a2d90f61115a1a28797cf9128?width=96"
    }
  ];

  return (
    <section className="bg-pf-green-dark py-28 px-8 lg:px-16">
      <div className="max-w-container mx-auto flex flex-col gap-20">
        {/* Section Title */}
        <div className="max-w-[768px] mx-auto text-center flex flex-col gap-6">
          <h2 className="font-heading text-h1 text-white">Real stories</h2>
          <p className="text-body-lg text-white">From teams who ship faster</p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-8 bg-pf-green-darker rounded-lg flex flex-col gap-6">
              <div className="flex flex-col gap-6">
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-white fill-white" />
                  ))}
                </div>

                <p className="text-body-lg text-white">{testimonial.quote}</p>
              </div>

              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex flex-col flex-1">
                  <p className="text-body text-white font-semibold">{testimonial.author}</p>
                  <p className="text-body text-white">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
