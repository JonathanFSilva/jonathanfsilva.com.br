import { Location } from '@styled-icons/evil/Location'
import { User } from '@styled-icons/evil/User'
import { Gear } from '@styled-icons/evil/Gear'
import { Envelope } from '@styled-icons/evil/Envelope'

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
    label: 'Home',
    url: '/',
    icon: Location,
  },
  {
    label: 'About',
    url: '/about',
    icon: User,
  },
  {
    label: 'Skills',
    url: '/skills',
    icon: Gear,
  },
  {
    label: 'Contact',
    url: '/contact',
    icon: Envelope,
  },
]

const content: Content = { links }

export default content
