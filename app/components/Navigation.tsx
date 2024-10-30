import { Phone } from 'lucide-react'
import { NavLink } from './NavLink'

interface NavigationProps {
  currentSection: number;
  sections: string[];
  setCurrentSection: (index: number) => void;
  setDirection: (direction: number) => void;
}

export const Navigation = ({ currentSection, sections, setCurrentSection, setDirection }: NavigationProps) => (
  <>
    <header className="fixed top-0 left-0 right-0 z-40 p-4">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="w-8">
          <img src="/next.svg" alt="Logo" className="w-full" />
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <h1 className="text-2xl font-light">LawFirm</h1>
        </div>
        <div className="flex items-center space-x-6">
          <a href="tel:+1234567890" className="hover:opacity-70 transition-opacity">
            <Phone className="w-5 h-5" />
          </a>
          <button className="text-sm border border-white px-4 py-2 hover:bg-white hover:text-black transition-all duration-300">
            Free Consultation
          </button>
        </div>
      </nav>
    </header>

    {/* Section Indicators */}
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50">
      {sections.map((_, i) => (
        <button
          key={i}
          onClick={() => {
            setDirection(i > currentSection ? 1 : -1)
            setCurrentSection(i)
          }}
          className={`block w-2 h-2 my-2 rounded-full transition-all duration-300 ${
            currentSection === i ? 'bg-white scale-150' : 'bg-gray-500'
          }`}
        />
      ))}
    </div>
  </>
)
