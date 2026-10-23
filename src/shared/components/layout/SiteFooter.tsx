import styled from '@emotion/styled'
import { BriefcaseBusiness, Mail, Send } from 'lucide-react'
import type { FormEvent } from 'react'
import { siteConfig } from '@/shared/config/site'
import { colors, motion } from '@/shared/styles/tokens'

const Footer = styled.footer`
  border-top: 1px solid ${colors.line};
  background: ${colors.blueSoft};
`

const ContactArea = styled.div`
  width: 100%;
  padding: 104px clamp(24px, 4.5vw, 86px) 112px;
`

const ContactIntro = styled.div`
  width: 100%;
  max-width: 920px;
  margin: 0 auto;
  text-align: left;
`

const ContactMark = styled.span`
  display: block;
  width: 72px;
  height: 4px;
  margin: 0 0 28px;
  background: ${colors.wine};
`

const ContactTitle = styled.h2`
  margin: 0;
  color: ${colors.blue};
  font-size: clamp(3.2rem, 7vw, 7.2rem);
  font-weight: 760;
  line-height: 0.92;
  letter-spacing: -0.075em;
`

const ContactLead = styled.p`
  max-width: 690px;
  margin: 30px 0 0;
  color: ${colors.muted};
  font-size: clamp(1.06rem, 1.4vw, 1.3rem);
  line-height: 1.65;
`

const DirectLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 12px;
  margin-top: 32px;
`

const DirectLink = styled.a`
  display: inline-flex;
  min-height: 48px;
  align-items: center;
  gap: 9px;
  border: 1px solid ${colors.black};
  border-radius: 999px;
  padding: 0 18px;
  background: transparent;
  color: ${colors.black};
  font-size: 0.92rem;
  font-weight: 650;
  text-decoration: none;
  transition: background 180ms ease, color 180ms ease, transform 180ms ${motion.ease};

  &:hover {
    background: ${colors.black};
    color: ${colors.white};
    transform: translateY(-2px);
  }
`

const ContactForm = styled.form`
  display: grid;
  max-width: 920px;
  gap: 22px;
  margin: 58px auto 0;
  text-align: left;

  @media (min-width: 720px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`

const Field = styled.label`
  display: grid;
  gap: 9px;
  color: ${colors.black};
  font-size: 0.9rem;
  font-weight: 680;

  &:last-of-type {
    grid-column: 1 / -1;
  }

  input,
  textarea {
    width: 100%;
    border: 1px solid ${colors.black};
    border-radius: 0;
    padding: 15px 16px;
    background: ${colors.white};
    color: ${colors.black};
    font: inherit;
    font-weight: 450;
    outline: none;
    transition: border-color 160ms ease, box-shadow 160ms ease;
  }

  textarea {
    min-height: 168px;
    resize: vertical;
    line-height: 1.55;
  }

  input:focus,
  textarea:focus {
    border-color: ${colors.wine};
    box-shadow: 5px 5px 0 ${colors.wine};
  }
`

const FormFooter = styled.div`
  display: flex;
  grid-column: 1 / -1;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;

  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  small {
    max-width: 52ch;
    color: ${colors.muted};
    font-size: 0.78rem;
    line-height: 1.5;
  }
`

const SubmitButton = styled.button`
  display: inline-flex;
  min-height: 52px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: 1px solid ${colors.wine};
  border-radius: 14px 14px 26px 14px;
  padding: 0 22px;
  background: ${colors.wine};
  color: ${colors.white};
  font: inherit;
  font-size: 0.92rem;
  font-weight: 680;
  transition: background 180ms ease, transform 180ms ${motion.ease};

  &:hover {
    background: #68142d;
    transform: translateY(-2px);
  }
`

const LegalBar = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 6px;
  padding: 26px clamp(24px, 4.5vw, 86px) 30px;
  background: ${colors.black};
  color: rgb(255 255 255 / 78%);
  font-size: 0.8rem;

  @media (min-width: 720px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  p {
    margin: 5px 0;
  }
`

const currentYear = new Date().getFullYear()

export function SiteFooter() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') ?? '').trim()
    const replyTo = String(data.get('email') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()
    const subject = encodeURIComponent(`Contacto desde el portafolio - ${name}`)
    const body = encodeURIComponent(`Nombre: ${name}\nCorreo: ${replyTo}\n\n${message}`)

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`
  }

  return (
    <Footer id="contacto" aria-labelledby="titulo-contacto">
      <ContactArea>
        <ContactIntro>
          <ContactMark aria-hidden="true" />
          <ContactTitle id="titulo-contacto">Contáctame.</ContactTitle>
          <ContactLead>
            Busco activamente retos donde pueda ampliar mis habilidades y aportar valor desde el
            primer día, construyendo soluciones .NET claras, mantenibles y enfocadas en problemas reales.
          </ContactLead>

          <DirectLinks aria-label="Formas de contacto directo">
            <DirectLink href={`mailto:${siteConfig.email}`}>
              <Mail size={18} aria-hidden="true" /> {siteConfig.email}
            </DirectLink>
            <DirectLink href={siteConfig.linkedInUrl} target="_blank" rel="noreferrer">
              <BriefcaseBusiness size={18} aria-hidden="true" /> LinkedIn
            </DirectLink>
          </DirectLinks>
        </ContactIntro>

        <ContactForm onSubmit={handleSubmit}>
          <Field>
            Nombre
            <input name="name" type="text" autoComplete="name" required />
          </Field>
          <Field>
            Tu correo
            <input name="email" type="email" autoComplete="email" required />
          </Field>
          <Field>
            Mensaje
            <textarea name="message" required />
          </Field>
          <FormFooter>
            <small>Al continuar se abrirá tu aplicación de correo. Esta página no almacena tus datos.</small>
            <SubmitButton type="submit">
              Preparar correo <Send size={17} aria-hidden="true" />
            </SubmitButton>
          </FormFooter>
        </ContactForm>
      </ContactArea>

      <LegalBar>
        <p>© {currentYear} {siteConfig.name}.</p>
        <p>Diseñado y construido con intención.</p>
      </LegalBar>
    </Footer>
  )
}
