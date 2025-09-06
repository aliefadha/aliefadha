export function About() {
  return (
    <section id="about" className="relative py-32 px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20" />

      {/* Floating gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/30 to-indigo-400/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-indigo-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-500" />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
            Passionate about creating digital solutions that make a difference
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                I&apos;m a fullstack developer with over 2 years of experience building web applications that users love. I
                specialize in React, Node.js, and modern web technologies.
              </p>
              <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                My approach combines technical expertise with a deep understanding of user experience, ensuring that
                every project I work on is both functionally robust and delightfully intuitive.
              </p>
              <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                When I&apos;m not coding, you&apos;ll find me exploring new technologies, experimenting with side projects, and continuously improving my craft as a developer.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 pt-8">
              <div className="text-center p-6 rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-white/20 dark:border-slate-700/50">
                <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-white/20 dark:border-slate-700/50">
                <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Technologies Mastered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
