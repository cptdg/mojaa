export function Footer() {
  return (
    <footer className="py-12 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h2 className="text-xl font-black tracking-tighter uppercase text-gray-900">Mojaa</h2>
          <p className="mt-2 text-sm text-gray-500">
            Premium Sports & Lifestyle Footwear and Apparel.
          </p>
        </div>
        <div className="flex gap-6 text-sm font-medium text-gray-500">
          <a href="#" className="hover:text-black transition-colors">About Us</a>
          <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
        </div>
        <div className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Mojaa. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
