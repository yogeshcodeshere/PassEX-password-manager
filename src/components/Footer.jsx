import React from "react";

const Footer = () => {
  return (
    <footer className="mt-12">
      
      {/* Glow Line */}
      <div className="h-px w-full bg-linear-to-r from-transparent via-indigo-500/50 to-transparent " />

      <div className="border-t border-white/5 bg-black/60 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 py-6">

          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

            {/* Logo Section */}
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-white">
                Pass<span className="text-indigo-500">EX</span>
              </h2>

              <p className="mt-1 text-sm text-gray-400">
                Secure. Simple. Personal.
              </p>
            </div>

            {/* Links */}
            <div className="flex gap-6 text-sm text-gray-400">
              <a
                href="#"
                className="transition duration-200 hover:text-indigo-400"
              >
                Privacy
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="transition duration-200 hover:text-indigo-400"
              >
                GitHub
              </a>

              <a
                href="#"
                className="transition duration-200 hover:text-indigo-400"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-6 border-t border-white/5 pt-4">
            <p className="text-center text-sm text-gray-500">
              © {new Date().getFullYear()} PassEX • Designed & Developed by{" "}
              <span className="font-medium text-indigo-400">
                Yogesh Tanwar
              </span>
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;