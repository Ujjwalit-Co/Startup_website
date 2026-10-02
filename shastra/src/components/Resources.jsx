import MenuBookIcon from "@mui/icons-material/MenuBook";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import DescriptionIcon from "@mui/icons-material/Description";
import BuildCircleIcon from "@mui/icons-material/Build";

function Resources() {
  return (
    <section className="px-5 sm:px-8 lg:px-12 py-10">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-7">
          <p className="text-orange-500 font-semibold text-sm">
            RESOURCES
          </p>

          <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-gray-900">
            Resources to Help You
          </h2>

          <p className="mt-2 text-gray-500 text-sm sm:text-base">
            Explore useful resources to learn faster and build your startup.
          </p>
        </div>


        {/* Resource Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">


          {/* Card 1 */}
          <div className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition">

            <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center">
              <MenuBookIcon
                className="text-orange-500"
                sx={{ fontSize: 28 }}
              />
            </div>

            <h3 className="mt-5 text-lg font-bold text-gray-900">
              Startup Guides
            </h3>

            <p className="mt-2 text-sm text-gray-500 leading-relaxed">
              Read simple guides to understand startup concepts and strategies.
            </p>

            <button className="mt-5 text-sm font-semibold text-orange-500 hover:text-orange-600">
              Explore Guides →
            </button>

          </div>


          {/* Card 2 */}
          <div className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition">

            <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center">
              <PlayCircleIcon
                className="text-orange-500"
                sx={{ fontSize: 28 }}
              />
            </div>

            <h3 className="mt-5 text-lg font-bold text-gray-900">
              Video Tutorials
            </h3>

            <p className="mt-2 text-sm text-gray-500 leading-relaxed">
              Learn startup concepts through easy-to-follow video tutorials.
            </p>

            <button className="mt-5 text-sm font-semibold text-orange-500 hover:text-orange-600">
              Watch Videos →
            </button>

          </div>


          {/* Card 3 */}
          <div className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition">

            <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center">
              <DescriptionIcon
                className="text-orange-500"
                sx={{ fontSize: 28 }}
              />
            </div>

            <h3 className="mt-5 text-lg font-bold text-gray-900">
              Templates
            </h3>

            <p className="mt-2 text-sm text-gray-500 leading-relaxed">
              Use ready-made templates for planning and organizing your startup.
            </p>

            <button className="mt-5 text-sm font-semibold text-orange-500 hover:text-orange-600">
              View Templates →
            </button>

          </div>


          {/* Card 4 */}
          <div className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition">

            <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center">
              <BuildCircleIcon
                className="text-orange-500"
                sx={{ fontSize: 28 }}
              />
            </div>

            <h3 className="mt-5 text-lg font-bold text-gray-900">
              Useful Tools
            </h3>

            <p className="mt-2 text-sm text-gray-500 leading-relaxed">
              Discover tools that can help you research, plan and grow.
            </p>

            <button className="mt-5 text-sm font-semibold text-orange-500 hover:text-orange-600">
              Explore Tools →
            </button>

          </div>

        </div>
      </div>

    </section>
  );
}

export default Resources;