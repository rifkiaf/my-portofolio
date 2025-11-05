import Navbar from "../Navbar";

export default function Course() {
  const courses = [
    {
      icon: "☁️",
      title: "Cloud Computing",
      platform: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
      duration: "Feb 2024 - Jun 2024",
      courses: [
        "Google IT Support",
        "Google Cloud Engineer Learning Path",
        "Belajar Dasar Pemrograman Web",
        "Belajar Dasar Pemrograman JavaScript",
        "Application Development with Cloud Run",
        "Belajar Membuat Aplikasi Back-End untuk Pemula dengan Google Cloud",
        "Menjadi Google Cloud Engineer",
        "Introduction to AI",
        "Google Cloud Computing Foundations",
        "Applied Machine Learning for Cloud Engineer",
        "Preparing for Associate Cloud Engineer Certification",
        "Capstone / Final Project",
        "Soft skill & Career Development",
      ],
      color: "bg-gradient-to-br from-red-600 via-red-500 to-red-400",
      certificate: "/certificate/bangkit-batch1-2024.pdf",
    },
    {
      icon: "🖥️",
      title: "Front-End & Back-End Developer",
      platform: "Coding Camp powered by DBS Foundation",
      duration: "Feb 2025 - Jul 2025",
      courses: [
        "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
        "Pengenalan ke Logika Pemrograman",
        "Belajar Dasar Git dengan Github",
        "Belajar Dasar Pemrograman Web",
        "Belajar Dasar Pemrograman JavaScript",
        "Belajar Membuat Aplikasi Front-End Web untuk Pemula",
        "Belajar Membuat Aplikasi Back-End untuk Pemula",
        "Belajar Fundamental Front-End Web Development",
        "Belajar Pengembangan Web Intermediate",
        "Capstone / Final Project",
        "Soft Skills & Career Development",
      ],
      color: "bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600",
      certificate: "/certificate/codingcamp-2025.pdf",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center min-h-screen bg-gray-900 text-gray-100 font-sans pt-20 px-4">
        <section className="w-full max-w-6xl py-20 mx-auto" id="courses">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-16 text-center text-blue-400 tracking-wide">
            📚 Kursus & Pembelajaran
          </h2>

          {/* Grid 2 kolom di md ke atas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {courses.map((course, i) => (
              <div
                key={i}
                className="group bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl border border-gray-700"
              >
                {/* Header Icon */}
                <div className={`${course.color} w-full h-40 flex items-center justify-center`}>
                  <span className="text-6xl text-white drop-shadow">{course.icon}</span>
                </div>

                {/* Konten */}
                <div className="p-6 flex flex-col space-y-4">
                  <h3 className="text-2xl font-bold text-white">{course.title}</h3>

                  <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
                    <div>
                      <span className="font-semibold text-gray-500">Platform:</span> {course.platform}
                    </div>
                    <div>
                      <span className="font-semibold text-gray-500">Durasi:</span> {course.duration}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-blue-400 mb-2">Courses</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm max-h-48 overflow-auto pr-2">
                      {course.courses.map((step, idx) => (
                        <li key={idx}>{step}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-2 flex justify-end">
                    {course.certificate ? (
                      <a
                        href={course.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm shadow-md transition-colors duration-300"
                      >
                        Lihat Sertifikat →
                      </a>
                    ) : (
                      <span className="px-5 py-2 rounded-lg bg-gray-700 text-gray-400 font-medium text-sm cursor-not-allowed">
                        Sertifikat Tidak Tersedia
                      </span>
                    )}
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
