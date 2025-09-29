import Navbar from "../Navbar";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-100 font-sans pt-20">
        <section
          id="contact"
          className="w-full max-w-3xl px-6 py-20 mx-auto text-center"
        >
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-blue-400">
            📬 Kontak
          </h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto">
            Tertarik untuk bekerja sama, berdiskusi, atau sekadar menyapa?
            Silakan hubungi saya melalui salah satu platform berikut:
          </p>

          {/* Card Container */}
          <div className="bg-gray-800/60 rounded-2xl shadow-lg p-8 backdrop-blur-sm border border-gray-700">
            <div className="flex flex-col gap-4">
              {[
                {
                  href: "mailto:ahmadfahreizirifki@gmail.com",
                  label: "ahmadfahreizirifki@gmail.com",
                  emoji: "📧",
                },
                {
                  href: "https://linkedin.com/in/rifkiahmadfahreizi",
                  label: "linkedin.com/in/rifkiahmadfahreizi",
                  emoji: "🔗",
                },
                {
                  href: "https://github.com/rifkiaf",
                  label: "github.com/rifkiaf",
                  emoji: "🐱",
                },
              ].map((contact, i) => (
                <a
                  key={i}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-5 py-3 bg-gray-700/70 rounded-lg hover:bg-blue-600 hover:text-white transition transform hover:scale-105 shadow-md"
                >
                  <span className="text-2xl">{contact.emoji}</span>
                  <span className="font-medium">{contact.label}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
