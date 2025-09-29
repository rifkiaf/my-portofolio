import Navbar from "../Navbar";

export default function ProjectPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-100 font-sans pt-20">
        <section id="projects" className="w-full max-w-6xl px-6 py-20 mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-16 text-center text-blue-400 tracking-wide">
            🚀 Proyek Saya
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: "🍎",
                title: "Website - SariBuah",
                desc: "Website e-commerce buah segar dengan tampilan menarik dan fitur prediksi stok yang membantu pengelolaan inventaris secara efisien.",
                color: "from-green-700 to-green-400",
                link: "https://web-buah-next.vercel.app/",
              },
              {
                icon: "🏪",
                title: "Website - PasarKu",
                desc: "Platform pasar tradisional online hasil kolaborasi tim frontend backend, dan machine learning, dengan fitur prediksi kualitas produk untuk pengalaman belanja terbaik.",
                color: "from-yellow-500 to-orange-600",
                link: "https://pasarku-fe-prod.vercel.app/",
              },
              {
                icon: "📱",
                title: "Mobile Apps - DEBUSA (Detektif Buah Sayur)",
                desc: "Aplikasi edukasi untuk anak SD yang mendeteksi 5 jenis buah dan 5 jenis sayur dengan prediksi akurat dan fitur kuis. Proyek kolaborasi tim cloud, mobile, dan machine learning.",
                color: "from-green-400 to-yellow-300",
                link: "https://github.com/Capstone-DEBUSA",
              },
              {
                icon: "✍️",
                title: "Blog Platform",
                desc: "Platform blog modern dengan Markdown editor & sistem komentar.",
                color: "from-purple-500 to-pink-600",
                link: "#",
              },
            ].map((project, i) => (
              <div
                key={i}
                className="group bg-gray-800 rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-3 hover:shadow-2xl transition duration-300 relative"
              >
                {/* Header Icon */}
                <div
                  className={`h-44 bg-gradient-to-r ${project.color} flex items-center justify-center`}
                >
                  <span className="text-6xl transform group-hover:scale-110 transition duration-300">
                    {project.icon}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg md:text-xl font-bold mb-3 text-white text-center">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 text-center">
                    {project.desc}
                  </p>
                  <div className="flex justify-center">
                    <a
  href={project.link}
  target={project.link !== "#" ? "_blank" : undefined}
  rel={project.link !== "#" ? "noopener noreferrer" : undefined}
  className="relative px-6 py-2.5 rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 text-white font-medium text-sm shadow-md 
             overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
>
  <span className="relative z-10">Lihat Proyek →</span>
  <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition duration-500"></span>
</a>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
