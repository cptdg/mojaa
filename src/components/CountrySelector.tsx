import { motion } from "motion/react";
import { countries } from "../data";
import { ArrowRight } from "lucide-react";

export function CountrySelector() {
  return (
    <section id="regions" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h3 className="text-3xl font-bold tracking-tight text-gray-900 uppercase sm:text-4xl">Available Regions</h3>
          <p className="mt-4 text-gray-500">Pick your localized Mojaa store to see exclusive styles and prices.</p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {countries.map((country, index) => (
            <motion.a
              href={country.url}
              key={country.code}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="group relative block overflow-hidden rounded-2xl bg-gray-100 aspect-[4/5]"
            >
              <img 
                src={country.image} 
                alt={`${country.name} shopping region`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity group-hover:opacity-90" />
              
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">{country.flag}</span>
                  <p className="text-sm font-semibold tracking-wider text-gray-300 uppercase">{country.domain}</p>
                </div>
                <div className="flex items-center justify-between">
                  <h4 className="text-3xl font-bold text-white uppercase">{country.name}</h4>
                  <div className="flex items-center justify-center w-10 h-10 text-black transition-colors bg-white rounded-full group-hover:bg-gray-200">
                    <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
