
export default function BrandsBanner() {
  const brands = [
    { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
    { name: "Samsung", logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg" },
    { name: "Sony", logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "Dell", logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg" },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="sr-only">Our Trusted Brands</h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70">
          {brands.map((brand) => (
            <div 
              key={brand.name} 
              className="h-8 md:h-10 w-auto grayscale hover:grayscale-0 transition-all"
            >
              <img 
                src={brand.logo} 
                alt={brand.name} 
                className="h-full w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
