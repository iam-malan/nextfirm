import Image from "next/image"
import { Button } from "../../components/ui/button"
import Link from "next/link"
import { LucideArrowRight, LucideMessageSquare, LucideStar } from "lucide-react"

export default function TestimonialsPage() {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/people.png"
            alt="Client Success"
            fill
            sizes="100vw"
            className="object-cover object-center brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 gold-gradient" style={{ fontFamily: 'Playfair Display' }}>
              Client Testimonials
            </h1>
            <p className="text-xl text-gray-300 mb-8" style={{ fontFamily: 'Cormorant Garamond' }}>
              Read what our clients say about their experience with C De Cerff Inc.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Corporate Client",
                company: "Tech Innovations Ltd",
                text: "C De Cerff Inc. provided exceptional guidance during our company's merger. Their expertise in corporate law and attention to detail made the complex process seamless.",
                rating: 5
              },
              {
                name: "Michael Chen",
                role: "Private Client",
                company: "Real Estate Developer",
                text: "The team's professionalism and dedication to my case exceeded all expectations. They provided clear communication throughout and achieved an outstanding result.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="gold-border backdrop-blur-sm p-8 rounded-lg"
              >
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <LucideStar key={i} className="w-5 h-5 text-[#BF953F]" />
                  ))}
                </div>
                <LucideMessageSquare className="w-8 h-8 mb-6 text-[#BF953F]" />
                <p className="text-gray-300 mb-6 text-lg" style={{ fontFamily: 'Cormorant Garamond' }}>
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-medium text-[#BF953F]" style={{ fontFamily: 'Playfair Display' }}>
                    {testimonial.name}
                  </div>
                  <div className="text-gray-400" style={{ fontFamily: 'Cormorant Garamond' }}>
                    {testimonial.role}
                  </div>
                  <div className="text-gray-500" style={{ fontFamily: 'Cormorant Garamond' }}>
                    {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More Testimonials */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "David Smith",
                role: "Business Owner",
                text: "Their strategic approach and attention to detail made all the difference in our case."
              },
              {
                name: "Emily Wong",
                role: "Family Law Client",
                text: "Compassionate and professional handling of our sensitive family matter."
              },
              {
                name: "James Anderson",
                role: "Property Developer",
                text: "Expert guidance through complex real estate transactions."
              },
              {
                name: "Lisa Thompson",
                role: "Corporate Executive",
                text: "Exceptional business law expertise and practical solutions."
              },
              {
                name: "Robert Martinez",
                role: "Startup Founder",
                text: "Invaluable support in establishing our company's legal framework."
              },
              {
                name: "Amanda Clarke",
                role: "Private Client",
                text: "Professional, responsive, and achieved excellent results."
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="gold-border backdrop-blur-sm p-6 rounded-lg"
              >
                <LucideMessageSquare className="w-6 h-6 mb-4 text-[#BF953F]" />
                <p className="text-gray-300 mb-6" style={{ fontFamily: 'Cormorant Garamond' }}>
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-medium text-[#BF953F]" style={{ fontFamily: 'Playfair Display' }}>
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-400" style={{ fontFamily: 'Cormorant Garamond' }}>
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Success Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 gold-gradient" style={{ fontFamily: 'Playfair Display' }}>
            Client Success
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "98%", label: "Client Satisfaction" },
              { number: "500+", label: "Cases Won" },
              { number: "20+", label: "Years Experience" },
              { number: "1000+", label: "Happy Clients" }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 gold-border rounded-lg backdrop-blur-sm"
              >
                <div className="text-3xl font-bold mb-2 text-[#BF953F]" style={{ fontFamily: 'Playfair Display' }}>
                  {stat.number}
                </div>
                <div className="text-gray-300" style={{ fontFamily: 'Cormorant Garamond' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/1.png"
            alt="Legal Consultation"
            fill
            sizes="100vw"
            className="object-cover object-center brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 gold-gradient" style={{ fontFamily: 'Playfair Display' }}>
              Join Our Success Stories
            </h2>
            <p className="text-xl text-gray-300 mb-8" style={{ fontFamily: 'Cormorant Garamond' }}>
              Let us help you achieve your legal objectives with excellence and dedication.
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
