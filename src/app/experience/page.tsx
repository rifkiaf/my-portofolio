"use client";

import Navbar from "../Navbar";

export default function Experience() {
  const experiences = [
  {
    icon: "⚙️",
    title: "DevOps Engineer Intern",
    company: "IDstar Cipta Teknologi",
    duration: "Nov 2025 - Present",
    tasks: [
      "Membangun dan mengelola pipeline CI/CD.",
      "Memantau & optimalkan performa server dan cloud.",
      "Automasi konfigurasi menggunakan Terraform/Ansible.",
      "Integrasi aplikasi dengan tim development.",
      "Menjaga keamanan, backup, dan troubleshooting sistem.",
    ],
    color: "bg-gradient-to-br from-red-700 via-red-600 to-red-500",
  },
  {
    icon: "🖥️", 
    title: "Asisten Laboratorium",
    company: "Lepkom Gunadarma",
    duration: "Jan 2023 - Aug 2025",
    tasks: [
      "Membantu mahasiswa saat praktikum dan menangani kendala teknis.",
      "Mengajar workshop teknologi dan pemrograman dasar.",
      "Mendukung proses sertifikasi LSP dan persiapan asesmen peserta.",
      "Menjaga kesiapan perangkat dan lingkungan laboratorium.",
    ],
    color: "bg-gradient-to-br from-green-900 via-green-800 to-green-700",
  },
];

  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center min-h-screen bg-gray-900 text-gray-100 pt-20 px-4">
        <section className="w-full max-w-4xl py-20">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-16 text-center text-blue-400 tracking-wide">
            💼 Pengalaman Kerja
          </h2>

          {/* LIST VERTICAL */}
          <div className="flex flex-col gap-8">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="group bg-gray-800 rounded-2xl p-5 border border-gray-700 shadow-lg 
                 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                {/* HEADER */}
                <div className="flex items-center gap-5">
                  {/* Icon dengan glow */}
                  <div className="relative flex-shrink-0">
                    <div
                      className={`${exp.color} absolute inset-0 blur-xl opacity-35 rounded-full`}
                    ></div>
                    <div
                      className={`${exp.color} w-18 h-18 rounded-full flex items-center justify-center
                       text-4xl text-white shadow-lg relative`}
                    >
                      {exp.icon}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex flex-col gap-1">
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      {exp.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-400">
                      <span className="font-semibold text-gray-500">
                        Perusahaan:
                      </span>{" "}
                      {exp.company}
                    </p>
                    <p className="text-xs md:text-sm text-gray-400">
                      <span className="font-semibold text-gray-500">
                        Durasi:
                      </span>{" "}
                      {exp.duration}
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gray-700/60 my-4"></div>

                {/* Tasks */}
                <div className="flex flex-col gap-1">
                  <h4 className="font-semibold text-blue-400 mb-1 text-base">
                    Tugas & Tanggung Jawab
                  </h4>
                  <ul className="list-disc ml-4 text-gray-300 text-sm space-y-1">
                    {exp.tasks.map((task, idx) => (
                      <li key={idx}>{task}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
