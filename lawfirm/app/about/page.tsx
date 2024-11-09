'use client'

import Image from "next/image"
import { Button } from "../../components/ui/button"
import Link from "next/link"
import { LucideArrowRight } from "lucide-react"
import { useEffect } from "react"

export default function AboutPage() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    const handleScroll = () => {
      reveals.forEach(element => {
        const windowHeight = window.innerHeight
        const elementTop = element.getBoundingClientRect().top
        const elementVisible = 150

        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active')
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 min-h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/lawbooks.png"
            alt="Law Library"
            fill
            sizes="100vw"
            className="object-cover object-center brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 fade-in gold-gradient" style={{ fontFamily: 'Playfair Display' }}>
              About Our Firm
            </h1>
            <p className="text-xl text-gray-300 mb-8 fade-in" style={{ fontFamily: 'Cormorant Garamond', animationDelay: '0.2s' }}>
              A legacy of excellence in legal practice, serving South Africa with distinction.
            </p>
          </div>
        </div>

        {/* Wave Transition */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden translate-y-1">
          <svg 
            preserveAspectRatio="none" 
            viewBox="0 0 1440 120" 
            className="relative block w-full h-[120px]"
          >
            <path 
              d="M0,0 C720,120 720,0 1440,0 L1440,120 L0,120 Z" 
              fill="#000" 
              className="transition-all duration-300"
            />
          </svg>
        </div>
      </section>

      {/* History Section */}
      <section className="relative bg-black pt-20 pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] reveal">
              <Image
                src="/images/1.png"
                alt="Our History"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center rounded-lg"
              />
              <div className="absolute inset-0 bg-black/10 rounded-lg" />
            </div>
            
            <div className="reveal">
              <h2 className="text-4xl font-bold mb-6 gold-gradient" style={{ fontFamily: 'Playfair Display' }}>
                Our History
              </h2>
              <p className="text-gray-300 mb-6 text-lg" style={{ fontFamily: 'Cormorant Garamond' }}>
                Founded in 1995, C De Cerff Inc. has grown to become one of South Africa's most respected law firms. 
                Our journey is marked by unwavering commitment to excellence and client success.
              </p>
              <p className="text-gray-300 mb-8 text-lg" style={{ fontFamily: 'Cormorant Garamond' }}>
                We've built our reputation on combining traditional legal wisdom with innovative approaches, 
                ensuring our clients receive the most effective representation possible.
              </p>
              <Button 
                className="bg-[#BF953F] hover:bg-[#AA771C] text-white"
                asChild
              >
                <Link href="/contact" className="group">
                  Schedule a Consultation
                  <LucideArrowRight className="ml-2 inline-block transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Wave Transition */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden translate-y-1">
          <svg 
            preserveAspectRatio="none" 
            viewBox="0 0 1440 120" 
            className="relative block w-full h-[120px]"
          >
            <path 
              d="M0,120 C720,0 720,120 1440,120 L1440,0 L0,0 Z" 
              fill="#1a1a1a" 
              className="transition-all duration-300"
            />
          </svg>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-[#1a1a1a] relative pt-20 pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 gold-gradient reveal" style={{ fontFamily: 'Playfair Display' }}>
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                description: "We maintain the highest standards in legal practice and client service."
              },
              {
                title: "Integrity",
                description: "Our practice is founded on unwavering ethical principles and transparency."
              },
              {
                title: "Innovation",
                description: "We embrace modern solutions while respecting legal traditions."
              }
            ].map((value, index) => (
              <div
                key={index}
                className="gold-border backdrop-blur-sm p-8 rounded-lg reveal"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h3 className="text-2xl font-bold mb-4 text-[#BF953F]" style={{ fontFamily: 'Playfair Display' }}>
                  {value.title}
                </h3>
                <p className="text-gray-300" style={{ fontFamily: 'Cormorant Garamond' }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Wave Transition */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden translate-y-1">
          <svg 
            preserveAspectRatio="none" 
            viewBox="0 0 1440 120" 
            className="relative block w-full h-[120px]"
          >
            <path 
              d="M0,0 C720,120 720,0 1440,0 L1440,120 L0,120 Z" 
              fill="#000" 
              className="transition-all duration-300"
            />
          </svg>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-black relative pt-20 pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 gold-gradient reveal" style={{ fontFamily: 'Playfair Display' }}>
            Our Leadership
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "C De Cerff",
                role: "Founder & Senior Partner",
                description: "Leading our firm with over 25 years of experience in corporate and commercial law."
              },
              {
                name: "Sarah Williams",
                role: "Managing Partner",
                description: "Expert in Family Law and Civil Litigation."
              },
              {
                name: "Michael Brown",
                role: "Partner",
                description: "Leading our Criminal Defense practice with distinction."
              }
            ].map((member, index) => (
              <div
                key={index}
                className="gold-border backdrop-blur-sm p-8 rounded-lg reveal"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h3 className="text-2xl font-bold mb-2 text-[#BF953F]" style={{ fontFamily: 'Playfair Display' }}>
                  {member.name}
                </h3>
                <p className="text-[#BF953F]/80 mb-4" style={{ fontFamily: 'Cormorant Garamond' }}>
                  {member.role}
                </p>
                <p className="text-gray-300" style={{ fontFamily: 'Cormorant Garamond' }}>
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Wave Transition */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden translate-y-1">
          <svg 
            preserveAspectRatio="none" 
            viewBox="0 0 1440 120" 
            className="relative block w-full h-[120px]"
          >
            <path 
              d="M0,120 C720,0 720,120 1440,120 L1440,0 L0,0 Z" 
              fill="#1a1a1a" 
              className="transition-all duration-300"
            />
          </svg>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative bg-[#1a1a1a]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/people.png"
            alt="Legal Consultation"
            fill
            sizes="100vw"
            className="object-cover object-center brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center reveal">
            <h2 className="text-4xl font-bold mb-6 gold-gradient" style={{ fontFamily: 'Playfair Display' }}>
              Ready to Work Together?
            </h2>
            <p className="text-xl text-gray-300 mb-8" style={{ fontFamily: 'Cormorant Garamond' }}>
              Let us help you navigate your legal challenges with expertise and dedication.
            </p>
            <Button 
              className="bg-[#BF953F] hover:bg-[#AA771C] text-white"
              size="lg"
              asChild
            >
              <Link href="/contact" className="group">
                Schedule a Consultation
                <LucideArrowRight className="ml-2 inline-block transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
