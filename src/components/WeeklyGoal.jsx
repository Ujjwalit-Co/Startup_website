import React from 'react'
import TrackChangesIcon from '@mui/icons-material/TrackChanges';

function WeeklyGoal() {
  return (
    <section className="px-5 sm:px-8 lg:px-12 py-10">
      
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-6">
          <p className="text-orange-500 font-semibold text-sm">
            WEEK 1
          </p>

          <div className='mt-1 flex items-center gap-3'>
            <div className='w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center'>
            <TrackChangesIcon className='text-orange-500' sx={{fontSize: 32}} />
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              This Week's Goal
            </h2>
          </div>
        </div>


        {/* Goal Card */}
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5 sm:p-7">

          {/* Top */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

            <div>
              <p className="text-sm text-gray-500">
                Week 1
              </p>

              <h3 className="mt-1 text-xl font-bold text-gray-900">
                Find Your Startup Idea
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Understand problems and discover a meaningful startup idea.
              </p>
            </div>

            {/* Progress */}
            <div className="sm:text-right">

              <p className="text-sm font-medium text-gray-700">
                2/4 Completed
              </p>

              <div className="mt-2 w-32 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="w-1/2 h-full bg-orange-500 rounded-full"></div>
              </div>

            </div>

          </div>


          {/* Goals */}
          <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-4">

            {/* Completed */}
            <div className="flex items-center gap-3 p-4 rounded-xl bg-orange-50">

              <div className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs">
                ✓
              </div>

              <p className="text-sm text-gray-700">
                Understand what a startup is
              </p>

            </div>


            {/* Completed */}
            <div className="flex items-center gap-3 p-4 rounded-xl bg-orange-50">

              <div className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs">
                ✓
              </div>

              <p className="text-sm text-gray-700">
                Find a real-world problem
              </p>

            </div>


            {/* Pending */}
            <div className="flex items-center gap-3 p-4 rounded-xl border border-gray-100">

              <div className="w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center text-xs">
                ○
              </div>

              <p className="text-sm text-gray-700">
                Validate your idea
              </p>

            </div>


            {/* Pending */}
            <div className="flex items-center gap-3 p-4 rounded-xl border border-gray-100">

              <div className="w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center text-xs">
                ○
              </div>

              <p className="text-sm text-gray-700">
                Create a basic business plan
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default WeeklyGoal;