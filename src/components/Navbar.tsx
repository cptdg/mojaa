import { motion } from "motion/react";
import { Globe } from "lucide-react";

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-md border-b border-gray-100"
    >
      <div className="flex items-center gap-2">
        <h1 className="text-2xl font-bold tracking-tighter text-black uppercase">Mojaa</h1>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
          <Globe className="w-4 h-4" />
          <span>Select Region</span>
        </div>
      </div>
    </motion.nav>
  );
}
