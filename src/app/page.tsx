import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { Notable } from 'next/font/google'

const notable = Notable({ 
  weight: '400',
  subsets: ['latin'] 
})

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative">
      {/* Background Image with Strong Blur */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/workspace.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(16px)',
        }}
      />
      
      {/* Overlay to darken the background */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Title Bar */}
      <div className="relative z-20 text-center pt-8 sm:pt-12 mb-8 sm:mb-16">
        <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-wider ${notable.className}`}>S3M</h1>
      </div>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-24 -mt-20 sm:-mt-30 md:-mt-40 lg:-mt-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 w-full max-w-6xl relative z-20">
          <Link href="https://zed-two.vercel.app/" className="block w-full">
            <Card className="hover:bg-slate-800/90 transition-colors cursor-pointer bg-slate-900/80 min-h-[250px] sm:min-h-[300px] border-slate-700 overflow-hidden">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl sm:text-3xl md:text-4xl text-slate-100 font-bold">ZED</CardTitle>
                <CardDescription className="text-sm sm:text-base text-slate-300">Enjoy clean and organized video conferencing with ZED</CardDescription>
              </CardHeader>
              <div className="relative w-full h-[200px]">
                <Image
                  src="/1.png"
                  alt="ZED Interface"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="text-center mt-4 pb-8">
                <p className="text-sm sm:text-base text-slate-200">
                  Experience seamless video conferencing with our modern, intuitive interface. Schedule meetings, join instantly, and manage recordings all in one place.
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link href="https://papyrus-nine.vercel.app/" className="block w-full">
            <Card className="hover:bg-slate-800/90 transition-colors cursor-pointer bg-slate-900/80 min-h-[250px] sm:min-h-[300px] border-slate-700 overflow-hidden">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl sm:text-3xl md:text-4xl text-slate-100 font-bold">Papyrus</CardTitle>
                <CardDescription className="text-sm sm:text-base text-slate-300">Collaborate on documents with Papyrus</CardDescription>
              </CardHeader>
              <div className="relative w-full h-[200px]">
                <Image
                  src="/2.png"
                  alt="Papyrus Interface"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="text-center mt-4 pb-8">
                <p className="text-sm sm:text-base text-slate-200">
                  Create, edit, and manage your documents with ease. Enjoy real-time collaboration features and a clean, modern document management system.
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </main>
  )
}
