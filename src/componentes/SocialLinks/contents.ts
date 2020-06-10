import { Linkedin } from '@styled-icons/boxicons-logos/Linkedin'
import { Instagram } from '@styled-icons/boxicons-logos/Instagram'
import { Github } from '@styled-icons/boxicons-logos/Github'

export interface Link {
  label: string
  url: string
  icon: React.FC
}

export interface Content {
  links: Array<Link>
}

const links: Array<Link> = [
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/jonathan-felipe-da-silva-76855a156/',
    icon: Linkedin,
  },
  {
    label: 'Instagram',
    url: 'https://www.instagram.com/jonathansilva259/',
    icon: Instagram,
  },
  {
    label: 'Github',
    url: 'https://github.com/jonathanfsilva/',
    icon: Github,
  },
]

const content: Content = { links }

export default content
