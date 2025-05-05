import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> PlantCare</h3>
              <p className="text-gray-400 mb-4">
              PlantCare adalah aplikasi mobile Android yang dirancang untuk membantu pengguna dalam mendeteksi dan mengelola penyakit tanaman secara efektif. Aplikasi ini merupakan bagian dari inisiatif teknologi PlantCare dalam menyediakan solusi cerdas untuk menjaga kesehatan tanaman. Repositori ini berisi kode sumber utama aplikasi yang memungkinkan pengalaman pengguna yang intuitif dan efisien di platform Android.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Android Native", "Firebase", "Retrofit", "XML"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/PlantCare-Bangkit/PlantCare-App"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  Lihat Projek →
                </a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Dicovent</h3>
              <p className="text-gray-400 mb-4">
              Dicovent adalah aplikasi mobile Android yang dirancang untuk memudahkan pengguna dalam melihat dan mengikuti berbagai event yang diselenggarakan oleh Dicoding. Aplikasi ini memungkinkan pengguna untuk menjelajahi daftar event yang akan datang maupun yang telah selesai dilaksanakan, lengkap dengan detail informasi setiap event. Repositori ini berisi kode sumber utama dari aplikasi Dicovent yang memberikan pengalaman pengguna yang informatif, praktis, dan terintegrasi langsung dengan kegiatan komunitas Dicoding.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Android Native", "Retrofit", "Room", "SharedPreferences", "XML"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Rosyidmw/Dicovent"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  Lihat Projek →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Asclepius</h3>
              <p className="text-gray-400 mb-4">
              Asclepius adalah aplikasi mobile Android yang dirancang untuk membantu pengguna dalam mendeteksi kanker kulit secara dini melalui teknologi kecerdasan buatan. Dengan memanfaatkan analisis gambar, aplikasi ini dapat mengidentifikasi tanda-tanda potensial kanker kulit dari foto yang diunggah pengguna. Repositori ini berisi kode sumber utama aplikasi Asclepius yang menghadirkan pengalaman deteksi medis yang cepat, intuitif, dan berbasis teknologi.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Android Native", "TFLite", "XML"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Rosyidmw/Asclepius-Submission"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  Lihat Projek →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">StoryApp</h3>
              <p className="text-gray-400 mb-4">
              StoryApp adalah aplikasi mobile Android yang memungkinkan pengguna untuk berbagi cerita melalui foto dan deskripsi, serta menambahkan titik lokasi berdasarkan GPS perangkat. Aplikasi ini mengharuskan pengguna untuk login terlebih dahulu sebelum dapat mengakses fitur utama. Setelah login, pengguna dapat membuat postingan yang berisi foto, teks, dan lokasi, yang kemudian akan ditampilkan dalam daftar cerita. Repositori ini berisi kode sumber utama aplikasi StoryApp yang menghadirkan pengalaman berbagi cerita yang aman, interaktif, dan berbasis lokasi secara real-time.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Android Native", "GMaps API", "Retrofit", "XML"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                <a
                  href="https://github.com/Rosyidmw/StorySubmission"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  Lihat Projek →
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> ToListApps</h3>
              <p className="text-gray-400 mb-4">
              ToList adalah aplikasi mobile Android untuk mencatat dan mengelola tugas harian dengan mudah dan terorganisir. Pengguna diwajibkan login menggunakan akun Google untuk memastikan keamanan serta sinkronisasi data. Setelah login, pengguna dapat menambahkan berbagai tugas sesuai kebutuhan, melihat jadwal melalui tampilan kalender, dan mengakses kembali seluruh data tugas tanpa khawatir kehilangan—karena semua informasi disimpan di database yang terhubung langsung dengan akun pengguna. Repositori ini berisi kode sumber utama aplikasi ToList yang menghadirkan pengalaman manajemen tugas yang aman, praktis, dan terintegrasi.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Firebase", "Flutter", "Supabase"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/ToListApps/ToList"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  Lihat Projek →
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> PoseDetection</h3>
              <p className="text-gray-400 mb-4">
              PoseDetection adalah aplikasi mobile Android yang mampu mendeteksi gerakan tangan secara real-time dengan memanfaatkan model dari TensorFlow Lite. Aplikasi ini dibangun menggunakan Jetpack Compose untuk menghadirkan antarmuka yang modern, responsif, dan intuitif. Dengan teknologi deteksi pose, pengguna dapat melihat dan menganalisis pergerakan tangan secara akurat melalui kamera perangkat..
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Jetpack Compose", "TFLite"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Rosyidmw/PoseDetectionJetpackCompose"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  Lihat Projek →
                </a>
              </div>
            </div>

          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};