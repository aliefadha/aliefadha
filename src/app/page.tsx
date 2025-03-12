"use client";

import { FlipWords } from "@/components/ui/flip-words";
import { WavyBackground } from "@/components/ui/wavy-background";

export default function Home() {
  const word = ["Coming Soon", "Segera", "即将推出", "قريباً", "近日公開", "Muy Pronto"]
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40">
      <div className="h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        <FlipWords className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20" words={word} />
      </div>
    </WavyBackground>
  )
}
