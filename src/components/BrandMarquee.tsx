import { brands } from "../data";

export function BrandMarquee() {
  // Duplicate array slightly to ensure smooth infinite loop
  const duplicatedBrands = [...brands, ...brands, ...brands];

  return (
    <section className="py-12 bg-black border-y border-gray-800 overflow-hidden">
      <div className="relative flex max-w-[100vw] overflow-hidden group">
        <div className="flex w-max animate-marquee space-x-12 px-6 item-center text-white/50 hover:text-white/80 transition-colors duration-300">
          {duplicatedBrands.map((brand, i) => (
            <div key={i} className="flex items-center justify-center">
              <span className="text-2xl md:text-4xl font-black uppercase tracking-widest whitespace-nowrap">{brand}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
