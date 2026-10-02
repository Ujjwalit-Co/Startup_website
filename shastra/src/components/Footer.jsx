import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-10">

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center">
                <RocketLaunchIcon sx={{ fontSize: 22 }} />
              </div>

              <h2 className="text-xl font-bold">
                Startup <span className="text-orange-500">Setu</span>
              </h2>
            </div>

            <p className="mt-4 text-sm text-gray-400 leading-relaxed max-w-xs">
              Learn, build and grow your startup with a structured
              step-by-step learning journey.
            </p>

            {/* Social Icons */}
            <div className="mt-5 flex items-center gap-3">

              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-orange-500 transition"
              >
                <InstagramIcon sx={{ fontSize: 19 }} />
              </a>

              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-orange-500 transition"
              >
                <LinkedInIcon sx={{ fontSize: 19 }} />
              </a>

              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-orange-500 transition"
              >
                <YouTubeIcon sx={{ fontSize: 19 }} />
              </a>

            </div>

          </div>


          {/* Learn */}
          <div>

            <h3 className="font-semibold text-lg">
              Learn
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-gray-400">

              <a href="#" className="hover:text-orange-500 transition">
                Startup Basics
              </a>

              <a href="#" className="hover:text-orange-500 transition">
                Problem & Idea
              </a>

              <a href="#" className="hover:text-orange-500 transition">
                Market Research
              </a>

              <a href="#" className="hover:text-orange-500 transition">
                Business Model
              </a>

            </div>

          </div>


          {/* Resources */}
          <div>

            <h3 className="font-semibold text-lg">
              Resources
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-gray-400">

              <a href="#" className="hover:text-orange-500 transition">
                Startup Guides
              </a>

              <a href="#" className="hover:text-orange-500 transition">
                Video Tutorials
              </a>

              <a href="#" className="hover:text-orange-500 transition">
                Templates
              </a>

              <a href="#" className="hover:text-orange-500 transition">
                Useful Tools
              </a>

            </div>

          </div>


          {/* Company */}
          <div>

            <h3 className="font-semibold text-lg">
              Startup Setu
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-gray-400">

              <a href="#" className="hover:text-orange-500 transition">
                About Us
              </a>

              <a href="#" className="hover:text-orange-500 transition">
                Community
              </a>

              <a href="#" className="hover:text-orange-500 transition">
                Contact
              </a>

              <a href="#" className="hover:text-orange-500 transition">
                Privacy Policy
              </a>

            </div>

          </div>

        </div>


        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-3">

          <p className="text-sm text-gray-500">
            © 2026 Startup Setu. All rights reserved.
          </p>

          <p className="text-sm text-gray-500">
            Built for future entrepreneurs 🚀
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;