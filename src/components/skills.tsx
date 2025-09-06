import { FaElementor, FaReact, FaVuejs, FaWordpress } from "react-icons/fa"
import { SiNextdotjs, SiNuxtdotjs, SiTypescript, SiTailwindcss, SiFramer, SiReacthookform, SiZod, SiJest, SiTestinglibrary } from "react-icons/si"
import { LiaTheaterMasksSolid } from "react-icons/lia";
import { GiBearFace } from "react-icons/gi";
import { TbLayoutGridAdd } from "react-icons/tb"
import { PiLinkSimpleBold } from "react-icons/pi"
export function Skills() {
  const skills = [
    { name: "React", icon: <FaReact className="text-sky-500" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
    { name: "Vue.js", icon: <FaVuejs className="text-green-500" /> },
    { name: "Nuxt.js", icon: <SiNuxtdotjs className="text-emerald-500" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },

    { name: "Wordpress", icon: <FaWordpress className="text-sky-400" /> },
    { name: "Elementor", icon: <FaElementor className="text-purple-500" /> },

    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "shadcn/ui", icon: <TbLayoutGridAdd className="text-violet-500" /> },
    { name: "Framer Motion", icon: <SiFramer className="text-pink-500" /> },

    { name: "Zustand", icon: <GiBearFace className="text-orange-500" /> },
    { name: "TanStack Query", icon: <PiLinkSimpleBold className="text-rose-500" /> },
    { name: "React Hook Form", icon: <SiReacthookform className="text-red-500" /> },
    { name: "Zod", icon: <SiZod className="text-green-600" /> },

    { name: "Jest", icon: <SiJest className="text-red-600" /> },
    { name: "React Testing Library", icon: <SiTestinglibrary className="text-yellow-500" /> },
    { name: "Playwright", icon: <LiaTheaterMasksSolid className="text-emerald-500" /> },
  ]

  return (
    <section id="skills" className="relative py-24 px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20" />

      {/* Floating gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/30 to-indigo-400/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-indigo-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-500" />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-balance">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground text-balance">
            The tools and technologies I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-20">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-lg overflow-hidden"
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              <div className="absolute inset-[1px] rounded-xl bg-white dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-700 transition-colors duration-300" />

              <span className="text-lg relative z-10">{skill.icon}</span>
              <span className="text-sm font-medium relative z-10">{skill.name}</span>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Years Experience", value: "1+" },
            { label: "Projects Completed", value: "50+" },
            { label: "Technologies Mastered", value: "15+" },
            { label: "Happy Clients", value: "5+" },
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105">
                <div className="text-2xl md:text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
