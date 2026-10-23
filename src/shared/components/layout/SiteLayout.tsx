import styled from '@emotion/styled'
import { Outlet } from 'react-router-dom'
import { SiteFooter } from '@/shared/components/layout/SiteFooter'
import { SiteHeader } from '@/shared/components/layout/SiteHeader'
import { colors } from '@/shared/styles/tokens'

const Page = styled.div`
  min-height: 100vh;
  overflow: clip;
  background: ${colors.paper};
  color: ${colors.ink};
`

const Main = styled.main`
  min-height: 70vh;
`

export function SiteLayout() {
  return (
    <Page>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <SiteHeader />
      <Main id="contenido">
        <Outlet />
      </Main>
      <SiteFooter />
    </Page>
  )
}
