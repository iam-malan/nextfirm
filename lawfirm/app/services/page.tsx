import Image from "next/image"
import { Button } from "../../components/ui/button"
import Link from "next/link"
import { 
  LucideArrowRight, 
  LucideScale, 
  LucideShield, 
  LucideUsers,
  LucideBuilding,
  LucideGavel,
  LucideFileText,
  LucideHome,
  LucideBriefcase,
  LucideHeartHandshake
} from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/1.png"
            alt="Legal Services"
            fill
            sizes="100vw"
            className="object-cover object-center brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 gold-gradient" style={{ fontFamily: 'Playfair Display' }}>
              Our Legal Services
            </h1>
            <p className="text-xl text-gray-300 mb-8" style={{ fontFamily: 'Cormorant Garamond' }}>
              Comprehensive legal solutions tailored to your unique needs.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: LucideScale,
                title: "Corporate Law",
                description: "Expert guidance in business law, mergers & acquisitions, and corporate governance.",
                features: [
                  "Business Formation",
                  "Contract Negotiation",
                  "Corporate Compliance",
                  "Mergers & Acquisitions"
                ]
              },
              {
                icon: LucideUsers,
                title: "Family Law",
                description: "Compassionate support for family matters with a focus on amicable resolution.",
                features: [
                  "Divorce Proceedings",
                  "Child Custody",
                  "Estate Planning",
                  "Marriage Contracts"
                ]
              },
              {
                icon: LucideShield,
                title: "Criminal Defense",
                description: "Strong defense strategies backed by years of courtroom experience.",
                features: [
                  "Criminal Litigation",
                  "White Collar Crime",
                  "DUI Defense",
                  "Appeals"
                ]
              }
            ].map((service, index) => (
              <div
                key={index}
                className="gold-border backdrop-blur-sm p-8 rounded-lg"
              >
                <service.icon className="w-12 h-12 mb-6 text-[#BF953F]" />
                <h3 className="text-2xl font-bold mb-4 text-[#BF953F]" style={{ fontFamily: 'Playfair Display' }}>
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6" style={{ fontFamily: 'Cormorant Garamond' }}>
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300" style={{ fontFamily: 'Cormorant Garamond' }}>
                      <LucideArrowRight className="w-4 h-4 mr-2 text-[#BF953F]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 gold-gradient" style={{ fontFamily: 'Playfair Display' }}>
            Additional Areas of Practice
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: LucideBuilding,
                title: "Real Estate Law",
                description: "Property transactions, leasing agreements, and property disputes."
              },
              {
                icon: LucideGavel,
                title: "Civil Litigation",
                description: "Representing clients in civil disputes and court proceedings."
              },
              {
                icon: LucideFileText,
                title: "Intellectual Property",
                description: "Protection of patents, trademarks, and copyrights."
              },
              {
                icon: LucideHome,
                title: "Property Law",
                description: "Residential and commercial property matters."
              },
              {
                icon: LucideBriefcase,
                title: "Employment Law",
                description: "Workplace disputes and employment contracts."
              },
              {
                icon: LucideHeartHandshake,
                title: "Mediation",
                description: "Alternative dispute resolution services."
              }
            ].map((service, index) => (
              <div
                key={index}
                className="gold-border backdrop-blur-sm p-6 rounded-lg"
              >
                <service.icon className="w-8 h-8 mb-4 text-[#BF953F]" />
                <h3 className="text-xl font-bold mb-2 text-[#BF953F]" style={{ fontFamily: 'Playfair Display' }}>
                  {service.title}
                </h3>
                <p className="text-gray-300" style={{ fontFamily: 'Cormorant Garamond' }}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 gold-gradient" style={{ fontFamily: 'Playfair Display' }}>
            Our Process
          </h2>
          <div className="max-w-4xl mx-auto">
            {[
              {
                number: "01",
                title: "Initial Consultation",
                description: "We begin with a thorough discussion of your legal needs and objectives."
              },
              {
                number: "02",
                title: "Strategy Development",
                description: "Our team develops a customized legal strategy tailored to your specific case."
              },
              {
                number: "03",
                title: "Implementation",
                description: "We execute the strategy with precision and regular communication."
              },
              {
                number: "04",
                title: "Resolution",
                description: "We work diligently to achieve the best possible outcome for your case."
              }
            ].map((step, index) => (
              <div
                key={index}
                className="flex items-start mb-12"
              >
                <div className="text-3xl font-bold text-[#BF953F] mr-6" style={{ fontFamily: 'Playfair Display' }}>
                  {step.number}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-[#BF953F]" style={{ fontFamily: 'Playfair Display' }}>
                    {step.title}
                  </h3>
                  <p className="text-gray-300" style={{ fontFamily: 'Cormorant Garamond' }}>
                    {step.description}
                  </p>
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
            src="/images/lawbooks.png"
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
              Need Legal Assistance?
            </h2>
            <p className="text-xl text-gray-300 mb-8" style={{ fontFamily: 'Cormorant Garamond' }}>
              Contact us today for a confidential consultation about your case.
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
