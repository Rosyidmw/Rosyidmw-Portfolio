import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

    const frontendSkills = ["Android Native", "Dart", "Firebase", "Flutter", "Jetpack Compose", "Kotlin", "Retrofit", "XML"];

    const socialLinks = [
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/rosyidmktwbw/",
            icon: "linkedin.png", // letakkan file di folder public/icons
        },
        {
            name: "GitHub",
            url: "https://github.com/Rosyidmw",
            icon: "github.png",
        }
    ];

    return <section id="about" className="min-h-screen items-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                Tentang Saya
            </h2>

            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                <p className="text-gray-300 mb-6">
                Saya adalah pengembang aplikasi Android yang antusias, berpengalaman dalam membangun beberapa aplikasi mobile, dan aktif berkontribusi di komunitas teknologi seperti GDGOC serta lulusan program Bangkit.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Skills</h3>
                        <div className="flex flex-wrap gap-2">
                            {frontendSkills.map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                    {tech}
                              </span>
                            ))}
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Media Sosial</h3>
                        <div className="flex gap-6">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 bg-blue-500/10 text-blue-500 py-2 px-4 rounded-full hover:bg-blue-500/20 
                                               hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                >
                                    <img src={social.icon} alt={social.name} className="w-5 h-5" />
                                    <span>{social.name}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">Pendidikan</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>
                            <strong> Rekayasa Perangkat Lunak </strong> - Telkom University Campus Purwokerto
                            (2022 - Sekarang)
                        </li>
                        <li>
                            Mata Kuliah Relevan: Pemrograman Perangkat Bergerak, Pemrograman Berbasis Objek,
                            Pemrograman Web, Algoritma dan Struktur Data, Basis Data, Rekayasa Kebutuhan Perangkat Lunak, Android Dasar
                        </li>
                    </ul>
                </div>

                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">Organisasi</h3>
                    <div className="space-y-4 text-gray-300">
                        <div>
                        <h4 className="font-semibold">
                            Staff Android GDSC ITTP (2023 - 2024)
                        </h4>
                        <p>
                            Berkontribusi menjadi mentor untuk program Android Study Jam, membantu peserta dalam memahami dasar-dasar pengembangan aplikasi Android.
                        </p>
                        </div>

                        <div>
                        <h4 className="font-semibold">
                            Staff Mobile GDGOC TUP (2024 - Sekarang)
                        </h4>
                        <p>
                            Berkontribusi menjadi mentor untuk program Study Jam Mobile menggunakan Flutter, membantu peserta dalam memahami dasar-dasar pengembangan aplikasi Android menggunakan Flutter.
                        </p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        </RevealOnScroll>
    </section>;
}