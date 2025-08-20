export default function Home() {
  return (
    <main className="bg-indigo-100 h-screen w-screen flex items-center justify-center"> 
      <section className="bg-white p-6 rounded-xl shadow-lg w-80">
        
        <header className="flex justify-between items-center mb-4">
          <section>
            <p className="text-gray-400 text-sm">Tue Feb 19, 2025</p>
            <h1 className="text-xl font-semibold text-blue-950">List Tailwind</h1>
          </section>
          <time className="text-gray-400 text-sm">9:31:25 p.m.</time>
        </header>

        <section className="grid grid-cols-7 gap-1 mb-4">
          {['s', 'm', 't', 'w', 't', 'f', 's'].map((day, index) => (
            <span key={index} className="text-center text-xs text-gray-500 font-medium p-2 block">
              {day}
            </span>
          ))}
          {[24, 25, 26, 27, 28, 29, 30].map((date, index) => (
            <span key={index} className="text-center text-sm text-gray-700 p-2 block">
              {date}
            </span>
          ))}
        </section>

        <ul className="space-y-3">
          {/* Completed tasks */}
          <li className="flex items-center justify-between bg-green-50 rounded-lg p-3">
            <label className="flex items-center gap-3">
              <input type="checkbox" checked className="w-5 h-5 bg-green-500 rounded-full appearance-none relative checked:bg-green-500 checked:after:content-['✓'] checked:after:absolute checked:after:text-white checked:after:text-xs checked:after:left-1/2 checked:after:top-1/2 checked:after:transform checked:after:-translate-x-1/2 checked:after:-translate-y-1/2" />
              <span className="text-gray-600 text-sm line-through">take out the trash</span>
            </label>
            <span className="text-blue-500 text-xs bg-blue-50 px-2 py-1 rounded">9:00 AM</span>
          </li>

          <li className="flex items-center justify-between bg-green-50 rounded-lg p-3">
            <label className="flex items-center gap-3">
              <input type="checkbox" checked className="w-5 h-5 bg-green-500 rounded-full appearance-none relative checked:bg-green-500 checked:after:content-['✓'] checked:after:absolute checked:after:text-white checked:after:text-xs checked:after:left-1/2 checked:after:top-1/2 checked:after:transform checked:after:-translate-x-1/2 checked:after:-translate-y-1/2" />
              <span className="text-gray-700 text-sm line-through">do homework</span>
            </label>
            <span className="text-blue-500 text-xs bg-blue-50 px-2 py-1 rounded">12:00 PM</span>
          </li>

          <li className="flex items-center justify-between bg-blue-50 rounded-lg p-3">
            <label className="flex items-center gap-3">
              <input type="checkbox" className="w-5 h-5 border-2 border-gray-300 rounded-full appearance-none" />
              <span className="text-gray-700 text-sm">go to grocery store</span>
            </label>
            <span className="text-blue-500 text-xs bg-blue-100 px-2 py-1 rounded">1:00 PM</span>
          </li>

          <li className="flex items-center justify-between bg-blue-50 rounded-lg p-3">
            <label className="flex items-center gap-3">
              <input type="checkbox" className="w-5 h-5 border-2 border-gray-300 rounded-full appearance-none" />
              <span className="text-gray-700 text-sm">run 5 kilometers</span>
            </label>
            <span className="text-blue-500 text-xs bg-blue-100 px-2 py-1 rounded">4:20 PM</span>
          </li>

          <li className="flex items-center justify-between bg-blue-50 rounded-lg p-3">
            <label className="flex items-center gap-3">
              <input type="checkbox" className="w-5 h-5 border-2 border-gray-300 rounded-full appearance-none" />
              <span className="text-gray-700 text-sm"></span>
            </label>
            <span className="text-blue-500 text-xs bg-blue-100 px-2 py-1 rounded">9:00 PM</span>
          </li>

          <li className="flex items-center justify-between bg-blue-50 rounded-lg p-3">
            <label className="flex items-center gap-3">
              <input type="checkbox" className="w-5 h-5 border-2 border-gray-300 rounded-full appearance-none" />
              <span className="text-gray-700 text-sm">Take out the trash</span>
            </label>
            <span className="text-blue-500 text-xs bg-blue-100 px-2 py-1 rounded">9:00 AM</span>
          </li>
        </ul>
      </section>
    </main>
  );
}