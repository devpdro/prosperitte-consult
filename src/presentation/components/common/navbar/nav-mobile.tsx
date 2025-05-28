import { NavItem } from 'src/presentation/components'
import { NavMobileProps } from 'src/data/models'
import { MENU } from 'src/data/ui'
import { IconX } from '@tabler/icons-react';

import S from './nav-mobile.module.scss'

const NavMobile = ({ closeMenu }: NavMobileProps) => {
  const handleClick = () => {
    closeMenu()
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
              onClick={handleClick}
              blank="none"
              closeMenu={closeMenu}
            >
              {item.children}
            </NavItem>
          ))}
        </div>
        <aside className={S['right-section']}>
          <a href="https://api.whatsapp.com/send?phone=5519993273002&text=Ol%C3%A1!%20Vim%20do%20site%20da%20Prosp%C3%A9ritt%C3%A9%20Consult%20e%20tenho%20interesse%20em%20simular%20meu%20cons%C3%B3rcio.%20Poderiam%20me%20ajudar%20a%20encontrar%20a%20melhor%20op%C3%A7%C3%A3o?">
            <a className={S.link}>
              <span>Simular agora</span>
            </a>
          </a>
        </aside>
      </nav>
    </div>
  )
}

export default NavMobile
