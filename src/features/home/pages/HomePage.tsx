import styled from '@emotion/styled'
import {
  ArrowDown,
  ArrowUpRight,
  GitFork,
  UserRound,
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { ProjectCarousel } from '@/features/home/components/ProjectCarousel'
import { projects, type PortfolioProject } from '@/features/projects/data/projects'
import { siteConfig } from '@/shared/config/site'
import { colors, motion } from '@/shared/styles/tokens'

const Hero = styled.section`
  display: grid;
  width: 100%;
  min-height: calc(100svh - 92px);
  align-items: center;
  gap: 56px;
  padding: 72px clamp(24px, 4.5vw, 86px) 88px;
  background: ${colors.paper};

  @media (min-width: 960px) {
    grid-template-columns: minmax(0, 0.82fr) minmax(0, 1.18fr);
    gap: clamp(48px, 5vw, 92px);
    padding-top: 84px;
    padding-bottom: 104px;
  }

  @media (min-width: 1500px) {
    grid-template-columns: minmax(0, 0.76fr) minmax(0, 1.24fr);
  }
`

const HeroCopy = styled.div`
  min-width: 0;
  max-width: 720px;
  animation: hero-enter 720ms ${motion.ease} both;

  @keyframes hero-enter {
    from { opacity: 0; transform: translateY(18px); }
    to { opacity: 1; transform: translateY(0); }
  }
`

const Role = styled.p`
  display: block;
  align-items: center;
  margin: 30px 0 0;
  color: ${colors.wine};
  font-size: clamp(1.25rem, 1.8vw, 1.72rem);
  font-weight: 720;
  line-height: 1.15;
  letter-spacing: -0.035em;
`

const Title = styled.h1`
  max-width: 740px;
  margin: 0;
  color: ${colors.blue};
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(4rem, 7vw, 7.4rem);
  font-weight: 700;
  line-height: 0.84;
  letter-spacing: -0.075em;
  text-shadow: clamp(3px, 0.32vw, 6px) clamp(3px, 0.32vw, 6px) 0 ${colors.wineLight};
`

const Lead = styled.p`
  max-width: 650px;
  margin: 30px 0 0;
  color: ${colors.muted};
  font-size: clamp(1.05rem, 1.45vw, 1.28rem);
  line-height: 1.65;
`

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 34px;
`

const PrimaryAction = styled.a`
  display: inline-flex;
  min-height: 50px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: 1px solid ${colors.wine};
  border-radius: 14px 14px 26px 14px;
  padding: 0 20px;
  background: ${colors.wine};
  color: ${colors.white};
  font-size: 0.9rem;
  font-weight: 650;
  text-decoration: none;
  transition: transform 180ms ${motion.ease}, background 180ms ease;

  &:hover {
    background: #68142d;
    transform: translateY(-3px);
  }
`

const SecondaryAction = styled(PrimaryAction)`
  border-color: ${colors.line};
  border-radius: 14px;
  background: ${colors.white};
  color: ${colors.ink};

  &:hover {
    background: ${colors.surface};
  }
`

const AboutAction = styled(SecondaryAction)`
  border-color: ${colors.black};
  background: transparent;
  color: ${colors.black};

  &:hover {
    border-color: ${colors.black};
    background: ${colors.black};
    color: ${colors.white};
  }
`

const AboutSection = styled.section`
  width: 100%;
  min-height: calc(100svh - 92px);
  padding: 94px clamp(24px, 4.5vw, 86px) 104px;
`

const AboutHeading = styled.div`
  position: relative;
  border-bottom: 1px solid ${colors.line};
  padding-bottom: 64px;

  &::after {
    position: absolute;
    bottom: -2px;
    left: 0;
    width: min(190px, 34vw);
    height: 3px;
    background: ${colors.wine};
    content: '';
    opacity: 0;
    transform: scaleX(0);
    transform-origin: left;
  }

  .about-visible &::after {
    animation: divider-draw 760ms 420ms ${motion.ease} forwards;
  }

  @keyframes divider-draw {
    to { opacity: 1; transform: scaleX(1); }
  }
`

const AboutLabel = styled.p`
  margin: 0 0 28px;
  color: ${colors.blue};
  font-size: 0.82rem;
  font-weight: 680;
  letter-spacing: 0.04em;
  opacity: 0;
  transform: translateY(14px);

  .about-visible & {
    animation: about-label-enter 520ms ${motion.ease} forwards;
  }

  @keyframes about-label-enter {
    to { opacity: 1; transform: translateY(0); }
  }
`

const AboutTitleGroup = styled.div`
  display: grid;
  gap: 30px;
  width: 100%;
`

const AboutTitle = styled.h2`
  margin: 0;
  color: ${colors.blue};
  font-size: clamp(3.4rem, 6.6vw, 7.4rem);
  font-weight: 760;
  line-height: 0.9;
  letter-spacing: -0.075em;
  text-align: left;
  opacity: 0;
  filter: blur(7px);
  transform: translateY(38px);

  .about-visible & {
    animation: about-rise 720ms ${motion.ease} forwards;
  }

  @keyframes about-rise {
    to { opacity: 1; filter: blur(0); transform: translateY(0); }
  }
`

const AboutLead = styled.p`
  max-width: 940px;
  margin: 0;
  color: ${colors.muted};
  font-size: clamp(1.12rem, 1.55vw, 1.38rem);
  line-height: 1.65;
  text-align: left;
  opacity: 0;
  filter: blur(5px);
  transform: translateY(28px);

  .about-visible & {
    animation: lead-rise 680ms 160ms ${motion.ease} forwards;
  }

  @keyframes lead-rise {
    to { opacity: 1; filter: blur(0); transform: translateY(0); }
  }
`

const SkillsGrid = styled.div`
  display: grid;
  gap: 26px;
  margin-top: 58px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1100px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`

const SkillCard = styled.article`
  position: relative;
  min-height: 204px;
  border: 2px solid ${colors.black};
  padding: 30px 26px;
  background: ${colors.white};
  color: ${colors.black};
  box-shadow: 10px 10px 0 ${colors.black};
  opacity: 0;
  filter: blur(4px);
  transform: translateY(38px);
  transition: transform 180ms ${motion.ease}, box-shadow 180ms ${motion.ease};

  .about-visible & {
    animation: card-rise 660ms 260ms ${motion.ease} forwards;
  }

  &:nth-of-type(2) { animation-delay: 350ms; }
  &:nth-of-type(3) { animation-delay: 440ms; }
  &:nth-of-type(4) { animation-delay: 530ms; }

  &:hover {
    box-shadow: 14px 14px 0 ${colors.wine};
    transform: translate(-3px, -3px);
  }

  @keyframes card-rise {
    to { opacity: 1; filter: blur(0); transform: translateY(0); }
  }

  h3 {
    margin: 0;
    font-size: clamp(1.45rem, 1.9vw, 1.92rem);
    font-weight: 740;
    line-height: 1.08;
    letter-spacing: -0.045em;
  }

  p {
    margin: 26px 0 0;
    color: ${colors.muted};
    font-size: clamp(1rem, 1.15vw, 1.14rem);
    line-height: 1.65;
  }
`

const ProjectsSection = styled.section`
  width: 100%;
`

const ProjectShowcase = styled.article`
  --project-accent: ${colors.wine};
  --project-soft: ${colors.wineLight};

  position: relative;
  overflow: hidden;
  border-top: 1px solid ${colors.line};
  padding: 96px 0 104px;
  background: ${colors.paper};
  color: ${colors.black};

  &:first-of-type {
    margin-top: 116px;
  }

  &:last-of-type {
    border-bottom: 1px solid ${colors.line};
  }

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: clamp(130px, 19vw, 320px);
    height: 8px;
    background: var(--project-accent);
    content: '';
  }

  &::after {
    position: absolute;
    right: clamp(-150px, -8vw, -70px);
    bottom: -210px;
    width: clamp(330px, 38vw, 610px);
    aspect-ratio: 1;
    border: clamp(50px, 6vw, 92px) solid var(--project-soft);
    border-radius: 50%;
    content: '';
    pointer-events: none;
  }

  &.project--blue {
    --project-accent: ${colors.blue};
    --project-soft: ${colors.blueSoft};
  }

  &.project--black {
    --project-accent: ${colors.black};
    --project-soft: #dde1e7;
  }
`

const ProjectGrid = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1520px;
  margin: 0 auto;
  padding: 0 clamp(24px, 4.5vw, 86px);
`

const ProjectStory = styled.div`
  opacity: 0;
  transform: translateY(32px);

  .project-visible & {
    animation: project-enter 760ms ${motion.ease} forwards;
  }

  @keyframes project-enter {
    to { opacity: 1; transform: translateY(0); }
  }
`

const ProjectHeader = styled.div`
  display: grid;
  gap: 28px;

  @media (min-width: 860px) {
    grid-template-columns: minmax(320px, 0.84fr) minmax(0, 1.16fr);
    align-items: end;
    gap: clamp(48px, 6vw, 110px);
  }
`

const ProjectName = styled.h2`
  margin: 0;
  color: var(--project-accent);
  font-size: clamp(3rem, 8vw, 7.5rem);
  font-weight: 680;
  line-height: 0.88;
  letter-spacing: -0.075em;
`

const ProjectStatement = styled.p`
  max-width: 700px;
  margin: 0;
  color: ${colors.ink};
  font-size: clamp(1.12rem, 2vw, 1.45rem);
  line-height: 1.55;
`

const ProjectTrace = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  margin-top: 34px;

  span {
    border: 1px solid var(--project-accent);
    border-radius: 999px;
    padding: 9px 13px;
    background: var(--project-soft);
    color: var(--project-accent);
    font-size: 0.82rem;
    font-weight: 650;
    opacity: 0;
    transform: translateY(14px);
  }

  .project-visible & span {
    animation: trace-enter 440ms 340ms ${motion.ease} forwards;
  }

  .project-visible & span:nth-of-type(2) { animation-delay: 410ms; }
  .project-visible & span:nth-of-type(3) { animation-delay: 480ms; }
  .project-visible & span:nth-of-type(4) { animation-delay: 550ms; }
  .project-visible & span:nth-of-type(5) { animation-delay: 620ms; }

  @keyframes trace-enter {
    to { opacity: 1; transform: translateY(0); }
  }
`

const ProjectActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 34px;

  a {
    display: inline-flex;
    min-height: 48px;
    align-items: center;
    gap: 9px;
    border: 1px solid var(--project-accent);
    padding: 0 17px;
    color: var(--project-accent);
    font-size: 0.9rem;
    font-weight: 680;
    text-decoration: none;
    transition: background 180ms ease, color 180ms ease, transform 180ms ${motion.ease};
  }

  a:first-of-type {
    background: var(--project-accent);
    color: ${colors.white};
  }

  a:hover {
    transform: translateY(-3px);
  }

  a:not(:first-of-type):hover {
    background: var(--project-soft);
  }
`

function ProjectCase({ project }: { project: PortfolioProject }) {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        observer.disconnect()
      }
    }, { threshold: 0.2 })

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <ProjectShowcase
      ref={sectionRef}
      className={`${project.className}${visible ? ' project-visible' : ''}`}
      aria-labelledby={`proyecto-${project.name.toLowerCase()}`}
    >
      <ProjectGrid>
        <ProjectStory>
          <ProjectHeader>
            <ProjectName id={`proyecto-${project.name.toLowerCase()}`}>{project.name}</ProjectName>
            <ProjectStatement>{project.statement}</ProjectStatement>
          </ProjectHeader>
          <ProjectTrace aria-label={`Tecnologías principales de ${project.name}`}>
            {project.highlights.map((technology) => <span key={technology}>{technology}</span>)}
          </ProjectTrace>
          <ProjectActions>
            <a href={`/proyectos/${project.slug}`} target="_blank" rel="noreferrer">
              Ver detalles técnicos <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a href={project.url} target="_blank" rel="noreferrer">
              Ver repositorio <GitFork size={16} aria-hidden="true" />
            </a>
          </ProjectActions>
        </ProjectStory>
      </ProjectGrid>
    </ProjectShowcase>
  )
}

const ScrollCue = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 9px;
  margin-top: 36px;
  color: ${colors.muted};
  font-size: 0.78rem;
  font-weight: 600;
  text-decoration: none;
`

export function HomePage() {
  const aboutSectionRef = useRef<HTMLElement>(null)
  const [aboutVisible, setAboutVisible] = useState(false)

  useEffect(() => {
    document.title = `${siteConfig.name} - ${siteConfig.role}`
  }, [])

  useEffect(() => {
    const section = aboutSectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setAboutVisible(true)
        observer.disconnect()
      }
    }, { threshold: 0.18 })

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Hero id="inicio" aria-labelledby="titulo-principal">
        <HeroCopy>
          <Title id="titulo-principal">
            {siteConfig.name}
          </Title>
          <Role>{siteConfig.role}</Role>
          <Lead>
            Trabajo en equipo para transformar necesidades reales en soluciones claras,
            mantenibles y capaces de impulsar el desarrollo tecnológico.
          </Lead>
          <Actions>
            <PrimaryAction href="#proyectos">
              Ver proyectos <ArrowDown size={17} aria-hidden="true" />
            </PrimaryAction>
            <SecondaryAction href={siteConfig.githubUrl} target="_blank" rel="noreferrer">
              Explorar GitHub <GitFork size={17} aria-hidden="true" />
            </SecondaryAction>
            <AboutAction href="#sobre-mi">
              Sobre mí <UserRound size={17} aria-hidden="true" />
            </AboutAction>
          </Actions>
        </HeroCopy>

        <ProjectCarousel />
      </Hero>

      <AboutSection
        ref={aboutSectionRef}
        id="sobre-mi"
        className={aboutVisible ? 'about-visible' : undefined}
        aria-labelledby="titulo-sobre-mi"
      >
        <AboutHeading>
          <AboutLabel>Perfil profesional</AboutLabel>
          <AboutTitleGroup>
            <AboutTitle id="titulo-sobre-mi">Sobre mí y mis stacks</AboutTitle>
            <AboutLead>
              Soy Andrés Cuello, desarrollador Full Stack .NET. Transformo necesidades reales en
              productos confiables, conectando dominio, API e interfaz mientras impulso al equipo
              hacia una entrega clara y mantenible.
            </AboutLead>
          </AboutTitleGroup>
        </AboutHeading>
        <SkillsGrid aria-label="Habilidades que aporto a los proyectos">
          <SkillCard>
            <h3>Producto y dominio</h3>
            <p>Necesidades reales · Reglas de negocio · Arquitectura</p>
          </SkillCard>
          <SkillCard>
            <h3>Backend y datos</h3>
            <p>C# · .NET · REST APIs · SQL</p>
          </SkillCard>
          <SkillCard>
            <h3>Interfaz y calidad</h3>
            <p>React · TypeScript · Accesibilidad · Pruebas</p>
          </SkillCard>
          <SkillCard>
            <h3>Trabajo en equipo</h3>
            <p>Git · Comunicación · Liderazgo técnico · Entrega</p>
          </SkillCard>
        </SkillsGrid>
        <ScrollCue href="#proyectos">Continuar a los proyectos <ArrowDown size={14} aria-hidden="true" /></ScrollCue>
      </AboutSection>

      <ProjectsSection id="proyectos" aria-label="Proyectos destacados">
        {projects.map((project) => <ProjectCase key={project.name} project={project} />)}
      </ProjectsSection>
    </>
  )
}
