import { type ReactNode } from 'react'

import { Navbar } from 'src/presentation/components'

import { ICON } from 'src/presentation/assets'

import S from './default.module.scss'
interface DefaultLayoutProps {
  children: ReactNode
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => (
  <div>
    <Navbar />
    <main>{children}</main>

    <a
      href="https://api.whatsapp.com/send?phone=5519988285625&text=Ol%C3%A1%2C%20tenho%20interesse%20em%20uma%20consultoria."
      target="_blank"
      rel="noopener noreferrer"
      className={S['whatsapp-button']}
    >
      <ICON.IconBrandWhatsapp className={S.icon} />
    </a>

  </div>
)

export default DefaultLayout
