import Navbar from "../Navbar";

export default function CertificationPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-100 font-sans pt-20">
        <section
          id="certificates"
          className="w-full max-w-6xl px-6 py-20 mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center text-blue-400">
            🎓 Sertifikat
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[
              {
                title: "Financial Literacy",
                issuer: "Dicoding",
                link: "https://www.dicoding.com/certificates/L4PQEV01OPO1",
              },
              {
                title: "Belajar Pengembangan Web Intermediate",
                issuer: "Dicoding",
                link: "https://www.dicoding.com/certificates/RVZKWJ5Y4ZD5",
              },
              {
                title: "Belajar Back-End Pemula dengan JavaScript",
                issuer: "Dicoding",
                link: "https://www.dicoding.com/certificates/L4PQEJ7K2PO1",
              },
              {
                title: "Belajar Fundamental Front-End Web Development",
                issuer: "Dicoding",
                link: "https://www.dicoding.com/certificates/72ZD56R3LZYW",
              },
              {
                title: "Belajar Dasar Pemrograman JavaScript",
                issuer: "Dicoding",
                link: "https://www.dicoding.com/certificates/KEXL72EW4XG2",
              },
              {
                title: "Belajar Membuat Front-End Web untuk Pemula",
                issuer: "Dicoding",
                link: "https://www.dicoding.com/certificates/KEXL7YE64XG2",
              },
              {
                title: "Belajar Dasar Pemrograman Web",
                issuer: "Dicoding",
                link: "https://www.dicoding.com/certificates/1OP821R0QPQK",
              },
              {
                title: "Belajar Dasar Git dengan GitHub",
                issuer: "Dicoding",
                link: "https://www.dicoding.com/certificates/1RXYE0LQ1ZVM",
              },
              {
                title:
                  "Pengenalan ke Logika Pemrograman (Programming Logic 101)",
                issuer: "Dicoding",
                link: "https://www.dicoding.com/certificates/JLX19DN46P72",
              },
              {
                title:
                  "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
                issuer: "Dicoding",
                link: "https://www.dicoding.com/certificates/MRZMNQ38KPYQ",
              },
              {
                title: "Belajar Membuat Aplikasi Web dengan React",
                issuer: "Dicoding",
                link: "https://www.dicoding.com/certificates/EYX4J4V06ZDL",
              },
              {
                title: "Belajar Dasar AI",
                issuer: "Dicoding",
                link: "https://www.dicoding.com/certificates/81P2483KJZOY",
              },
              {
                title: "Belajar Penerapan Machine Learning dengan Google Cloud",
                issuer: "Dicoding",
                link: "https://www.dicoding.com/certificates/KEXL183O4XG2",
              },
              {
                title: "Menjadi Google Cloud Engineer",
                issuer: "Dicoding",
                link: "https://www.dicoding.com/certificates/NVP7QOQGVZR0",
              },
              {
                title:
                  "Belajar Membuat Aplikasi Back-End untuk Pemula dengan Google Cloud",
                issuer: "Dicoding",
                link: "https://www.dicoding.com/certificates/ERZR10LJWZYV",
              },
              {
                title: "Belajar Dasar Structured Query Language (SQL)",
                issuer: "Dicoding",
                link: "https://www.dicoding.com/certificates/EYX4J3WRJZDL",
              },
              {
                title: "Belajar Dasar Manajemen Proyek",
                issuer: "Dicoding",
                link: "https://www.dicoding.com/certificates/1RXY6750MZVM",
              },
              {
                title: "Belajar Machine Learning untuk Pemula",
                issuer: "Dicoding",
                link: "https://www.dicoding.com/certificates/N9ZO7MQ0DZG5",
              },
              {
                title: "Memulai Pemrograman dengan Python",
                issuer: "Dicoding",
                link: "https://www.dicoding.com/certificates/1RXYM0NG1XVM",
              },
              {
                title: "Belajar Dasar Visualisasi Data",
                issuer: "Dicoding",
                link: "https://www.dicoding.com/certificates/81P2G3KWYPOY",
              },
              {
                title: "Google IT Support",
                issuer: "Coursera",
                link: "https://coursera.org/share/646884296944ea8714f76a0f87d47a99",
              },
              {
                title: "Coding Camp Front-End and Back-End Developer",
                issuer: "Coding Camp powered by DBS Foundation",
                link: "/certificate/codingcamp-2025.pdf",
              },
              {
                title: "Bangkit Cloud Computing",
                issuer:
                  "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
                link: "/certificate/bangkit-batch1-2024.pdf",
              },
            ].map((cert, i) => {
              return (
                <a
                  key={i}
                  href={cert.link}
                  target={cert.link !== "#" ? "_blank" : undefined}
                  rel={cert.link !== "#" ? "noopener noreferrer" : undefined}
                  className="group block bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all border border-gray-700 hover:border-blue-500"
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">
                      📄 {cert.title}
                    </h3>
                  </div>
                  {/* Issuer */}
                  <p className="text-gray-400 text-sm mb-3">
                    Penerbit:{" "}
                    <span className="text-gray-200">{cert.issuer}</span>
                  </p>
                </a>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}
