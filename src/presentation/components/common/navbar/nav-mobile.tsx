'use client'

import { usePathname, useRouter } from 'next/navigation'
import { NavItem } from 'src/presentation/components'
import { NavMobileProps } from 'src/data/models'
import { MENU } from 'src/data/ui'
import { IconX } from '@tabler/icons-react';

import S from './nav-mobile.module.scss'

const NavMobile = ({ closeMenu }: NavMobileProps) => {
  const pathname = usePathname()
  const router = useRouter()

  const handleClick = (link: string) => {
    closeMenu()
    if (link.startsWith('#')) {
      if (pathname !== '/') {
        router.push(`/?scrollTo=${link.replace('#', '')}`)
      } else {
        const el = document.getElementById(link.replace('#', ''))
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }
    } else {
      router.push(link)
    }
  }

  return (
    <div className={S['mobile-nav-container']}>
      <nav className={S['mobile-nav']}>
        <section className={S['close-section']}>
          <IconX onClick={closeMenu} className={S['close-icon']} />
        </section>
        <div className={S['nav-items']}>
          {MENU.map((item, key) => (
            <NavItem
              key={key}
              label={item.label}
              new={item.new}
              link={item.link}
              onClick={() => handleClick(item.link ?? '#')}
              blank="none"
              closeMenu={closeMenu}
            >
              {item.children}
            </NavItem>
          ))}
        </div>
        <aside className={S['right-section']}>
          <a href="https://api.whatsapp.com/send?phone=5519993273002&text=Ol%C3%A1!%20Vim%20do%20site%20da%20Prosp%C3%A9ritt%C3%A9%20Consult%20e%20tenho%20interesse%20em%20simular%20meu%20cons%C3%B3rcio.%20Poderiam%20me%20ajudar%20a%20encontrar%20a%20melhor%20op%C3%A7%C3%A3o?" className={S.link}>
            <span>Simular agora</span>
          </a>
        </aside>
      </nav>
    </div>
  )
}

export default NavMobile
