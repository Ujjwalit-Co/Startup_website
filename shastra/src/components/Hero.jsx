import React from "react";
import { assets } from "../assets/assets";

function Hero() {
  return (
    <section className="bg-[#fffaf5] px-5 sm:px-8 lg:px-12 py-10 lg:py-14">

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">

        {/* ================= LEFT SIDE ================= */}
        <div>

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            Turn Your Idea Into a
            <span className="block text-orange-500">
              Startup
            </span>
          </h1>

          <p className="mt-5 text-gray-600 text-base sm:text-lg leading-relaxed max-w-lg">
            Learn how to start, build, fund and grow your
            startup step by step.
          </p>

          {/* Buttons */}
          <div className="mt-7 flex flex-col sm:flex-row gap-4">

            <button
              className="px-6 py-3 bg-orange-500 text-white rounded-lg
              font-medium hover:bg-orange-600 transition"
            >
              Start Learning →
            </button>

            <button
              className="px-6 py-3 border border-orange-500
              text-orange-500 rounded-lg font-medium
              hover:bg-orange-50 transition"
            >
              View Roadmap
            </button>

          </div>

        </div>


        {/* ================= CENTER IMAGE ================= */}
        <div className="flex justify-center">

          <img
            src={assets.hero}
            alt="Startup illustration"
            className="w-full max-w-md object-contain"
          />

        </div>


        {/* ================= RIGHT SIDE ================= */}
        <div
          className="bg-white rounded-2xl p-5 sm:p-6
          shadow-sm border border-gray-100"
        >

          {/* Heading */}
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
            Your Startup Journey
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Follow your structured roadmap from idea to success.
          </p>


          {/* ================= 5 STEPS ================= */}
          <div className="mt-7 grid grid-cols-5 gap-1 sm:gap-2">

            {/* IDEA */}
            <div className="text-center">

              <div
                className="w-8 h-8 sm:w-9 sm:h-9 mx-auto
                rounded-full bg-orange-500 text-white
                flex items-center justify-center
                text-sm font-bold"
              >
                1
              </div>

              <p className="mt-2 text-[10px] sm:text-xs font-medium">
                Idea
              </p>

              <span className="text-[9px] sm:text-[10px] text-gray-400">
                Day 1
              </span>

            </div>


            {/* VALIDATE */}
            <div className="text-center">

              <div
                className="w-8 h-8 sm:w-9 sm:h-9 mx-auto
                rounded-full bg-gray-100 text-gray-700
                flex items-center justify-center
                text-sm font-bold"
              >
                2
              </div>

              <p className="mt-2 text-[10px] sm:text-xs font-medium">
                Validate
              </p>

              <span className="text-[9px] sm:text-[10px] text-gray-400">
                Day 2
              </span>

            </div>


            {/* PLAN */}
            <div className="text-center">

              <div
                className="w-8 h-8 sm:w-9 sm:h-9 mx-auto
                rounded-full bg-gray-100 text-gray-700
                flex items-center justify-center
                text-sm font-bold"
              >
                3
              </div>

              <p className="mt-2 text-[10px] sm:text-xs font-medium">
                Plan
              </p>

              <span className="text-[9px] sm:text-[10px] text-gray-400">
                Day 3
              </span>

            </div>


            {/* LAUNCH */}
            <div className="text-center">

              <div
                className="w-8 h-8 sm:w-9 sm:h-9 mx-auto
                rounded-full bg-gray-100 text-gray-700
                flex items-center justify-center
                text-sm font-bold"
              >
                4
              </div>

              <p className="mt-2 text-[10px] sm:text-xs font-medium">
                Launch
              </p>

              <span className="text-[9px] sm:text-[10px] text-gray-400">
                Day 4
              </span>

            </div>


            {/* GROW */}
            <div className="text-center">

              <div
                className="w-8 h-8 sm:w-9 sm:h-9 mx-auto
                rounded-full bg-gray-100 text-gray-700
                flex items-center justify-center
                text-sm font-bold"
              >
                5
              </div>

              <p className="mt-2 text-[10px] sm:text-xs font-medium">
                Grow
              </p>

              <span className="text-[9px] sm:text-[10px] text-gray-400">
                Day 5
              </span>

            </div>

          </div>


          {/* ================= PROGRESS ================= */}
          <div className="mt-8">

            <div className="flex justify-between items-center text-sm">

              <span className="font-medium text-gray-800">
                Current Step: 1/5
              </span>

              <span className="text-gray-500">
                20%
              </span>

            </div>


            {/* Progress Bar */}
            <div className="mt-2 w-full h-2 bg-gray-100 rounded-full overflow-hidden">

              <div
                className="w-[20%] h-full
                bg-orange-500 rounded-full"
              ></div>

            </div>

          </div>


          {/* ================= CURRENT GOAL ================= */}
          <div className="mt-7 bg-orange-50 rounded-xl p-4">

            <h3 className="font-semibold text-gray-800">
              🎯 Your Current Goal
            </h3>

            <div className="mt-3 flex items-center gap-2">

              <span
                className="w-5 h-5 rounded-full
                bg-orange-500 text-white
                flex items-center justify-center
                text-xs"
              >
                ✓
              </span>

              <span className="text-sm text-gray-700">
                Complete Step 1
              </span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;