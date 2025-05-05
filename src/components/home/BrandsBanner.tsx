
export default function BrandsBanner() {
  const brands = [
    { name: "Burberry", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Burberry_logo_PNG7.png" },
    { name: "Gucci", logo: "https://upload.wikimedia.org/wikipedia/commons/7/79/1960s_Gucci_Logo.svg" },
    { name: "Louis Vuitton", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Louis_Vuitton_logo_and_wordmark.svg" },
    { name: "Chanel", logo: "https://upload.wikimedia.org/wikipedia/commons/6/60/Chanel_logo_interlocking_cs.svg" },
    { name: "Prada", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Prada_logo.svg" },
    { name: "Dior", logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/DIOR_Logo.svg" },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          Our <span className="text-[#800020]">Premium</span> Fabric Partners
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          We collaborate with the finest fabric manufacturers and luxury brands to bring you exceptional quality and craftsmanship.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {brands.map((brand) => (
            <div 
              key={brand.name} 
              className="h-12 md:h-16 w-auto grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
            >
              <img 
                src={brand.logo} 
                alt={brand.name} 
                className="h-full w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
