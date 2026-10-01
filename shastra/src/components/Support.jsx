import HelpIcon from "@mui/icons-material/HelpOutlined";
import GroupsIcon from "@mui/icons-material/Groups";
import ChatIcon from "@mui/icons-material/Chat";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Support() {
  return (
    <section className="px-5 sm:px-8 lg:px-12 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Support Box */}
        <div className="bg-[#fff7ed] rounded-3xl p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Side */}
            <div>
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm">
                <HelpIcon sx={{ fontSize: 28, color: "#f97316" }} />
              </div>

              <h2 className="mt-5 text-2xl sm:text-3xl font-bold text-gray-900">
                Need Help With Your Startup?
              </h2>

              <p className="mt-3 text-gray-600 text-sm sm:text-base leading-relaxed max-w-lg">
                Get guidance, connect with other founders and find the support
                you need at every stage of your startup journey.
              </p>

              <button className="mt-6 inline-flex items-center gap-2 px-5 py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition">
                Get Support
                <ArrowForwardIcon sx={{ fontSize: 19 }} />
              </button>
            </div>

            {/* Right Side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Community */}
              <div className="bg-white rounded-2xl p-5 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center">
                  <GroupsIcon sx={{ fontSize: 24, color: "#f97316" }} />
                </div>

                <h3 className="mt-4 font-bold text-gray-900">Community</h3>

                <p className="mt-2 text-sm text-gray-500">
                  Connect with fellow founders and learners.
                </p>

                <button className="mt-4 text-sm font-semibold text-orange-500">
                  Join Community →
                </button>
              </div>

              {/* Ask Experts */}
              <div className="bg-white rounded-2xl p-5 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center">
                  <ChatIcon sx={{ fontSize: 24, color: "#f97316" }} />
                </div>

                <h3 className="mt-4 font-bold text-gray-900">Ask Experts</h3>

                <p className="mt-2 text-sm text-gray-500">
                  Get answers and guidance from experienced people.
                </p>

                <button className="mt-4 text-sm font-semibold text-orange-500">
                  Ask a Question →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Support;