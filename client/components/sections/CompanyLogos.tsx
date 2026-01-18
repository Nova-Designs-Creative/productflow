export default function CompanyLogos() {
  const logos = Array(6).fill(null);

  return (
    <section className="bg-white py-20 px-8 lg:px-16">
      <div className="max-w-container mx-auto flex flex-col gap-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {logos.map((_, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center p-4 bg-pf-gray rounded-lg h-[84px]"
            >
              <div className="w-[140px] h-14 bg-pf-dark/10 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
