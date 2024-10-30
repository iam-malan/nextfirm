import { NavLinkProps } from '../types'

export const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <a href={href} className="relative group px-3 py-2">
    {children}
    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
  </a>
)
