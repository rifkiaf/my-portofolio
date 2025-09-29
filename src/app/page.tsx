import Navbar from "./Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-100 font-sans pt-20">
        {/* Hero Section */}
        <section
          id="hero"
          className="flex flex-col md:flex-row items-center justify-center px-6 py-24 text-center md:text-left gap-12"
        >
          {/* Foto Profil */}
          <div className="relative group">
            <div className="absolute inset-0 rounded-full bg-blue-500 blur-2xl opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <img
              src="/profile.jpg"
              alt="Foto Rifki"
              className="relative w-44 h-44 md:w-56 md:h-56 rounded-full border-4 border-blue-500 shadow-xl transform group-hover:scale-105 transition duration-500"
            />
          </div>

          {/* Teks Hero */}
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Halo, Saya
            </h1>
            <h2 className="text-3xl md:text-6xl font-extrabold mb-4 text-blue-400 whitespace-nowrap">
              Rifki Ahmad Fahreizi
            </h2>
            <p className="text-lg md:text-xl text-gray-400 mb-8">
              <span className="font-semibold text-gray-200">
                Software Developer
              </span>{" "}
              yang fokus membangun aplikasi modern, scalable, dan user-friendly.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href="/project"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl shadow-lg text-white font-medium transition-transform transform hover:scale-105"
              >
                🚀 Lihat Proyek
              </a>
              <a
                href="/contact"
                className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-xl shadow-lg text-gray-200 font-medium transition-transform transform hover:scale-105"
              >
                📬 Hubungi Saya
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
