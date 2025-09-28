export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-100 font-sans">
      {/* Hero Section */}
      <section
        id="hero"
        className="flex flex-col md:flex-row items-center justify-center px-6 py-24 text-center md:text-left"
      >
        {/* Foto Profil */}
        <div className="flex-shrink-0 mb-10 md:mb-0 md:mr-12">
          <img
            src="/profile.jpg"
            alt="Foto Rifki"
            className="w-44 h-44 md:w-56 md:h-56 rounded-full border-4 border-blue-500 shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Teks Hero */}
        <div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
            Halo, Saya{" "}
            <span className="text-blue-400">Rifki Ahmad Fahreizi</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-lg mb-6">
            <span className="font-semibold text-gray-200">
              Software Developer
            </span>
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            <a
              href="#projects"
              className="px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg shadow text-white font-medium transition"
            >
              🚀 Lihat Proyek
            </a>
            <a
              href="#contact"
              className="px-5 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg shadow text-gray-200 font-medium transition"
            >
              📬 Hubungi Saya
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="w-full max-w-4xl px-6 py-20 text-center md:text-left"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-blue-400 text-center md:text-left">
          👨‍💻 Tentang Saya
        </h2>

        <div className="bg-gray-800 rounded-2xl shadow-lg p-8 md:p-10">
          <p className="text-gray-300 leading-relaxed mb-6">
            Halo! Saya{" "}
            <span className="text-white font-semibold">
              Rifki Ahmad Fahreizi
            </span>
            , seorang{" "}
            <span className="text-blue-400 font-semibold">
              Software Developer.
            </span>
          </p>

          <p className="text-gray-400 leading-relaxed mb-6">
            Fokus saya adalah menciptakan solusi digital yang cepat, responsif,
            dan mudah digunakan, dengan desain yang menarik serta pengalaman
            pengguna yang optimal.
          </p>

          <p className="text-gray-400 leading-relaxed mb-6">
            Saya percaya bahwa pendekatan yang tepat dan integrasi teknologi
            yang efisien sangat penting untuk menghasilkan aplikasi yang{" "}
            <span className="italic">andal</span>,{" "}
            <span className="italic">efisien</span>, dan mudah dikembangkan
            seiring waktu.
          </p>

          {/* Hard Skills */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-white mb-4">Hard Skills</h2>
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
                  className="px-4 py-2 bg-gray-700 text-gray-200 rounded-full text-sm shadow hover:bg-gray-600 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-white mb-4">Soft Skills</h2>
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
                  className="px-4 py-2 bg-gray-700 text-gray-200 rounded-full text-sm shadow hover:bg-gray-600 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full max-w-6xl px-6 py-20 mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center text-blue-400">
          🚀 Proyek Saya
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
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
              className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition"
            >
              <div
                className={`h-40 bg-gradient-to-r ${project.color} flex items-center justify-center`}
              >
                <span className="text-5xl">{project.icon}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{project.desc}</p>
                <a
                  href={project.link}
                  target={project.link !== "#" ? "_blank" : undefined}
                  rel={project.link !== "#" ? "noopener noreferrer" : undefined}
                  className="text-blue-400 hover:underline text-sm font-medium"
                >
                  Lihat Proyek →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certificate Section */}
      <section
        id="certificates"
        className="w-full max-w-5xl px-6 py-20 mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center text-blue-400">
          🎓 Sertifikat
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Cloud Practitioner Essentials (AWS)",
              issuer: "Amazon Web Services",
              link: "https://www.credly.com/badges/example", // Ganti dengan link kamu
            },
            {
              title: "Belajar Dasar Pemrograman Web",
              issuer: "Dicoding Indonesia",
              link: "https://www.dicoding.com/certificates/123ABC", // Ganti dengan link kamu
            },
            {
              title: "Machine Learning Developer Path",
              issuer: "Google & Bangkit Academy",
              link: "https://drive.google.com/file/d/yourcertificate", // Ganti dengan link kamu
            },
            {
              title: "React Fundamentals",
              issuer: "Frontend Masters",
              link: "#", // Ganti atau kosongkan jika belum tersedia
            },
          ].map((cert, i) => (
            <a
              key={i}
              href={cert.link}
              target={cert.link !== "#" ? "_blank" : undefined}
              rel={cert.link !== "#" ? "noopener noreferrer" : undefined}
              className="block bg-gray-800 rounded-xl p-6 shadow hover:-translate-y-1 hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-white mb-1">
                📄 {cert.title}
              </h3>
              <p className="text-gray-400 text-sm">Penerbit: {cert.issuer}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="w-full max-w-3xl px-6 py-20 mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-blue-400">
          📬 Kontak
        </h2>

        <div className="bg-gray-800 rounded-2xl shadow-lg p-8">
          <p className="text-gray-300 mb-6">
            Tertarik untuk bekerja sama atau sekadar menyapa? Hubungi saya di:
          </p>

          <div className="flex flex-col gap-4">
            {[
              {
                href: "mailto:ahmadfahreizirifki@gmail.com",
                label: "ahmadfahreizirifki@gmail.com",
                emoji: "📧",
              },
              {
                href: "https://linkedin.com/in/rifkiahmadfahreizi",
                label: "rifkiahmadfahreizi",
                emoji: "🔗",
              },
              {
                href: "https://github.com/rifkiaf",
                label: "rifkiaf",
                emoji: "🐱",
              },
            ].map((contact, i) => (
              <a
                key={i}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-4 py-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition"
              >
                <span className="text-2xl">{contact.emoji}</span>
                <span className="text-blue-400 font-medium">
                  {contact.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
