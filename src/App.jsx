export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-pink-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-xl text-center">
        <h1 className="text-3xl font-bold text-gray-800">
          Tailwind is Installed 🎉
        </h1>
        <button className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
          Click Me
        </button>
      </div>
    </div>
  );
}