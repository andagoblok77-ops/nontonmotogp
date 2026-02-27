import React from 'react'

const Latest = () => {
  return (
     <section className="my-10 grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* Konten utama */}
      <div className="lg:col-span-3">
        <div className="flex items-center gap-2 mb-4 font-semibold">
          🕒 Update Terbaru
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-gray-100 p-3 rounded">
              <div className="bg-gray-400 h-32 rounded mb-2"></div>
              <p className="text-sm font-medium">Live Streaming {i}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar */}
      <aside className="hidden lg:flex flex-col gap-4">
        <div className="bg-gray-200 h-32 rounded"></div>
        <div className="bg-gray-200 h-32 rounded"></div>
      </aside>
    </section>
  )
}

export default Latest