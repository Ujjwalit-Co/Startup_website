import React from 'react'
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import SearchIcon from "@mui/icons-material/Search";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import BuildIcon from "@mui/icons-material/Build";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

function LearningModules() {
  return (
    <section className="px-5 sm:px-8 lg:px-12 py-10">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-7">
          <p className="text-orange-500 font-semibold text-sm">
            LEARN & GROW
          </p>

          <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-gray-900">
            Learning Modules
          </h2>

          <p className="mt-2 text-gray-500 text-sm sm:text-base">
            Learn the essential concepts you need to build your startup.
          </p>
        </div>


        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

          {/* Card 1 */}
          <div className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition">

            <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center">
              <RocketLaunchIcon
                className="text-orange-500"
                sx={{ fontSize: 28 }}
              />
            </div>

            <h3 className="mt-5 text-lg font-bold text-gray-900">
              Startup Basics
            </h3>

            <p className="mt-2 text-sm text-gray-500 leading-relaxed">
              Understand startups, entrepreneurship and how businesses grow.
            </p>

            <button className="mt-5 text-sm font-semibold text-orange-500 group-hover:text-orange-600">
              Start Learning →
            </button>
          </div>


          {/* Card 2 */}
          <div className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition">

            <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center">
              <LightbulbIcon
                className="text-orange-500"
                sx={{ fontSize: 28 }}
              />
            </div>

            <h3 className="mt-5 text-lg font-bold text-gray-900">
              Problem & Idea
            </h3>

            <p className="mt-2 text-sm text-gray-500 leading-relaxed">
              Find real-world problems and turn them into useful startup ideas.
            </p>

            <button className="mt-5 text-sm font-semibold text-orange-500">
              Start Learning →
            </button>
          </div>


          {/* Card 3 */}
          <div className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition">

            <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center">
              <SearchIcon
                className="text-orange-500"
                sx={{ fontSize: 28 }}
              />
            </div>

            <h3 className="mt-5 text-lg font-bold text-gray-900">
              Market Research
            </h3>

            <p className="mt-2 text-sm text-gray-500 leading-relaxed">
              Learn how to understand customers, competitors and market demand.
            </p>

            <button className="mt-5 text-sm font-semibold text-orange-500">
              Start Learning →
            </button>
          </div>


          {/* Card 4 */}
          <div className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition">

            <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center">
              <BusinessCenterIcon
                className="text-orange-500"
                sx={{ fontSize: 28 }}
              />
            </div>

            <h3 className="mt-5 text-lg font-bold text-gray-900">
              Business Model
            </h3>

            <p className="mt-2 text-sm text-gray-500 leading-relaxed">
              Understand how your startup creates, delivers and earns value.
            </p>

            <button className="mt-5 text-sm font-semibold text-orange-500">
              Start Learning →
            </button>
          </div>


          {/* Card 5 */}
          <div className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition">

            <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center">
              <BuildIcon
                className="text-orange-500"
                sx={{ fontSize: 28 }}
              />
            </div>

            <h3 className="mt-5 text-lg font-bold text-gray-900">
              MVP & Product
            </h3>

            <p className="mt-2 text-sm text-gray-500 leading-relaxed">
              Learn how to build and test a minimum viable product.
            </p>

            <button className="mt-5 text-sm font-semibold text-orange-500">
              Start Learning →
            </button>
          </div>


          {/* Card 6 */}
          <div className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition">

            <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center">
              <AccountBalanceIcon
                className="text-orange-500"
                sx={{ fontSize: 28 }}
              />
            </div>

            <h3 className="mt-5 text-lg font-bold text-gray-900">
              Funding & Investors
            </h3>

            <p className="mt-2 text-sm text-gray-500 leading-relaxed">
              Explore funding options and understand how startup investment works.
            </p>

            <button className="mt-5 text-sm font-semibold text-orange-500">
              Start Learning →
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default LearningModules;