import Navbar from "../Navbar";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-100 font-sans pt-20">
        <section
          id="about"
          className="w-full max-w-4xl px-6 py-20 text-center md:text-left"
        >
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center text-blue-400">
            👨‍💻 Tentang Saya
          </h2>

          {/* Intro */}
          <p className="text-gray-300 leading-relaxed mb-6 text-lg">
            Halo! Saya{" "}
            <span className="text-white font-semibold">Rifki Ahmad Fahreizi</span>, seorang{" "}
            <span className="text-blue-400 font-semibold">Software Developer</span>.
          </p>
          <p className="text-gray-400 leading-relaxed mb-6">
            Fokus saya adalah menciptakan solusi digital yang cepat, responsif, dan mudah digunakan, dengan desain yang menarik serta pengalaman pengguna yang optimal.
          </p>
          <p className="text-gray-400 leading-relaxed mb-10">
            Saya percaya bahwa pendekatan yang tepat dan integrasi teknologi yang efisien sangat penting untuk menghasilkan aplikasi yang{" "}
            <span className="italic">andal</span>,{" "}
            <span className="italic">efisien</span>, dan mudah dikembangkan seiring waktu.
          </p>

          {/* Hard Skills */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-blue-400 mb-6 text-center md:text-left">
              🔧 Hard Skills
            </h2>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {[
                "HTML/CSS",
                "JavaScript",
                "TypeScript",
                "Python",
                "React",
                "Next.js",
                "Bootstrap",
                "Tailwind",
                "Express.js",
                "Rest API",
                "SQL & NoSQL",
                "Git & GitHub",
                "Postman",
                "Docker",
                "CI/CD",
                "Linux Ubuntu",
                "Google Cloud",
              ].map((skill, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-gray-700 text-gray-200 rounded-full text-sm shadow hover:bg-blue-600 hover:text-white transition transform hover:scale-105"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="my-10 border-t border-gray-700"></div>

          {/* Soft Skills */}
          <div>
            <h2 className="text-2xl font-bold text-blue-400 mb-6 text-center md:text-left">
              🌟 Soft Skills
            </h2>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {[
                "Komunikasi Efektif",
                "Kerja Tim",
                "Problem Solving",
                "Manajemen Waktu",
                "Adaptasi Cepat",
                "Kepemimpinan",
                "Kreativitas",
                "Pemikiran Kritis",
                "Kemampuan Belajar",
              ].map((skill, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-gray-700 text-gray-200 rounded-full text-sm shadow hover:bg-green-600 hover:text-white transition transform hover:scale-105"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
