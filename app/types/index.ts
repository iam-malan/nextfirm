export interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export interface StatCardProps {
  number: string;
  label: string;
}

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
}

export interface SectionProps {
  direction: number;
}
