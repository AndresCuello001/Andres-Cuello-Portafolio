import styled from '@emotion/styled'
import { GitFork, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { siteConfig } from '@/shared/config/site'
import { colors, motion } from '@/shared/styles/tokens'

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 30;
  border-bottom: 1px solid rgb(255 255 255 / 14%);
  background: ${colors.wine};
`

const HeaderInner = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  min-height: 92px;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 0 clamp(20px, 4.5vw, 86px);
`

const Brand = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 16px;
  color: ${colors.white};
  text-decoration: none;

  &:hover > span:first-of-type {
    height: 48px;
  }
`

const BrandMark = styled.span`
  display: block;
  width: 3px;
  height: 38px;
  border-radius: 999px;
  background: ${colors.white};
  transition: height 220ms ${motion.ease};
`

const BrandText = styled.span`
  display: grid;
  gap: 2px;

  strong {
    font-family: Georgia, 'Times New Roman', serif;
    font-size: 1.38rem;
    font-weight: 700;
    letter-spacing: -0.035em;
    line-height: 1;
  }

  small {
    color: rgb(255 255 255 / 72%);
    font-size: 0.78rem;
    letter-spacing: 0.015em;
  }

  @media (max-width: 390px) {
    small { display: none; }
  }
`

const DesktopNavigation = styled.nav`
  display: none;
  align-items: center;
  gap: 10px;

  @media (min-width: 760px) {
    display: flex;
  }
`

const NavigationLink = styled.a`
  display: inline-flex;
  min-height: 48px;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  padding: 0 18px;
  color: rgb(255 255 255 / 80%);
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 1.04rem;
  font-weight: 600;
  text-decoration: none;
  transition: background 180ms ease, color 180ms ease;

  &:hover {
    background: rgb(255 255 255 / 11%);
    color: ${colors.white};
  }
`

const GithubLink = styled.a`
  display: inline-flex;
  min-height: 48px;
  align-items: center;
  gap: 8px;
  border: 1px solid rgb(255 255 255 / 72%);
  border-radius: 999px;
  padding: 0 18px;
  color: ${colors.white};
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 1.02rem;
  font-weight: 650;
  text-decoration: none;
  transition: background 180ms ease, color 180ms ease, transform 180ms ${motion.ease};

  &:hover {
    background: ${colors.white};
    color: ${colors.wine};
    transform: translateY(-2px);
  }
`

const MenuButton = styled.button`
  display: grid;
  width: 48px;
  height: 48px;
  place-items: center;
  border: 1px solid ${colors.line};
  border-radius: 14px;
  background: ${colors.white};
  color: ${colors.ink};

  @media (min-width: 760px) {
    display: none;
  }
`

const MobileNavigation = styled.nav<{ open: boolean }>`
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  left: 0;
  display: ${({ open }) => open ? 'grid' : 'none'};
  gap: 6px;
  padding: 12px;
  border: 1px solid ${colors.line};
  border-radius: 20px;
  background: ${colors.white};
  box-shadow: 0 20px 50px rgb(21 34 56 / 16%);

  a {
    border-radius: 12px;
    padding: 15px 16px;
    color: ${colors.ink};
    font-family: Georgia, 'Times New Roman', serif;
    font-size: 1.04rem;
    font-weight: 600;
    text-decoration: none;
  }

  a:hover {
    background: ${colors.surface};
  }

  @media (min-width: 760px) {
    display: none;
  }
`

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  return (
    <Header>
      <HeaderInner>
        <Brand href="/#inicio" aria-label="Ir al inicio">
          <BrandMark aria-hidden="true" />
          <BrandText>
            <strong>{siteConfig.name}</strong>
            <small>{siteConfig.role}</small>
          </BrandText>
        </Brand>

        <DesktopNavigation aria-label="Navegación principal">
          {siteConfig.navigation.map((item) => (
            <NavigationLink key={item.to} href={item.to}>{item.label}</NavigationLink>
          ))}
          <GithubLink href={siteConfig.githubUrl} target="_blank" rel="noreferrer">
            <GitFork size={18} aria-hidden="true" /> GitHub
          </GithubLink>
        </DesktopNavigation>

        <MenuButton
          type="button"
          aria-controls="menu-movil"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
        </MenuButton>

        <MobileNavigation id="menu-movil" open={menuOpen} aria-label="Navegación móvil">
          {siteConfig.navigation.map((item) => (
            <a key={item.to} href={item.to} onClick={() => setMenuOpen(false)}>{item.label}</a>
          ))}
          <a href={siteConfig.githubUrl} target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>
            GitHub
          </a>
        </MobileNavigation>
      </HeaderInner>
    </Header>
  )
}
