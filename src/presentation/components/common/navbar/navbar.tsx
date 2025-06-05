'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { IconMenu2, IconChevronDown, IconBrandWhatsapp } from '@tabler/icons-react';
import { usePathname } from 'next/navigation';

import { NavMobile } from 'src/presentation/components'
import { IMAGE } from 'src/presentation/assets'
import { MENU } from 'src/data/ui'

import S from './navbar.module.scss'

interface MenuItem {
  label: string
  link: string
  new?: string
}

const Navbar = () => {
  const [isSideMenuOpen, setSideMenu] = useState(false)

  const pathname = usePathname();

  const handleSmoothScroll = (id: string) => (e: React.MouseEvent) => {
    const isHome = pathname === '/';
    if (isHome) {
      e.preventDefault();
      const el = document.getElementById(id.replace('#', ''));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={S.navbar}>
      <div className={S.container}>
        <section className={S['left-section']}>
          <Link href="/" legacyBehavior>
            <a>
              <Image src={IMAGE.LOGO} alt="Logo Prosperitte Consult" className={S.logo} />
            </a>
          </Link>
          {isSideMenuOpen && <NavMobile closeMenu={() => setSideMenu(false)} />}
        </section>

        <div className={S['nav-items']}>
          {MENU.map((item, key) => (
            <div key={key} className={S['nav-link']}>
              {item.link && item.link.startsWith('#') ? (
                <a
                  href={pathname === '/' ? item.link : `/${item.link}`}
                  className={S['link-text']}
                  onClick={handleSmoothScroll(item.link)}
                >
                  <span>{item.label}</span>
                  {item.children && <IconChevronDown className={`${S['arrow-icon']} ${S['rotate-180']}`} />}
                </a>
              ) : (
                <Link href={item.link ?? '#'} className={S['link-text']}>
                  <span>{item.label}</span>
                  {item.children && <IconChevronDown className={`${S['arrow-icon']} ${S['rotate-180']}`} />}
                </Link>
              )}
              {item.children && (
                <div className={S.dropdown}>
                  {item.children.map((item: MenuItem, key: number) => (
                    <Link key={key} href={item.link} className={S['dropdown-link']}>
                      <span className={S['link-label']}>{item.label}</span>
                      {item.new && <p className={S.new}>{item.new}</p>}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <aside className={S['right-section']}>
            <IconBrandWhatsapp className={S.icon} />
            <a href="https://api.whatsapp.com/send?phone=5519993273002&text=Ol%C3%A1!%20Vim%20do%20site%20da%20Prosp%C3%A9ritt%C3%A9%20Consult%20e%20tenho%20interesse%20em%20simular%20meu%20cons%C3%B3rcio.%20Poderiam%20me%20ajudar%20a%20encontrar%20a%20melhor%20op%C3%A7%C3%A3o?" className={S.link}>
              <span>Simular agora</span>
            </a>
          </aside>

        </div>


        <IconMenu2 onClick={() => setSideMenu(true)} className={S['menu-icon']} />
      </div>
    </nav>
  )
}

export default Navbar
