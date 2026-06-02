import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[70vh] px-4 pt-24 text-center bg-gray-50 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative z-10 max-w-4xl"
      >
        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wide text-gray-800 uppercase bg-gray-100 border border-gray-200 rounded-full">
          The Ultimate Destination
        </span>
        <h2 className="mb-6 text-5xl font-extrabold tracking-tight text-gray-900 uppercase sm:text-7xl lg:text-8xl">
          Premium Sports <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500">& Lifestyle</span>
        </h2>
        <p className="max-w-2xl mx-auto mb-10 text-lg text-gray-600 sm:text-xl">
          Discover the top global brands including Nike, Adidas, Puma, and more. Select your country portal to start shopping authentic gear.
        </p>
        
        <motion.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block"
        >
          <a href="#regions" className="flex items-center gap-2 px-8 py-4 font-semibold text-white transition-colors bg-black rounded-full hover:bg-gray-800">
            Choose Your Region
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
