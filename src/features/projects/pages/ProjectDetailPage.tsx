import styled from '@emotion/styled'
import { ArrowLeft, ArrowUpRight, GitFork } from 'lucide-react'
import { useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { projects } from '@/features/projects/data/projects'
import { colors, motion } from '@/shared/styles/tokens'

const DetailPage = styled.article`
  --project-accent: ${colors.wine};
  --project-soft: ${colors.wineLight};

  position: relative;
  overflow: hidden;
  background: ${colors.paper};
  color: ${colors.black};

  &.project--blue {
    --project-accent: ${colors.blue};
    --project-soft: ${colors.blueSoft};
  }

  &.project--black {
    --project-accent: ${colors.black};
    --project-soft: #dde1e7;
  }
`

const DetailHero = styled.section`
  position: relative;
  display: grid;
  min-height: calc(100svh - 92px);
  align-items: center;
  gap: 58px;
  padding: 72px clamp(24px, 4.5vw, 86px) 92px;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: clamp(140px, 22vw, 360px);
    height: 8px;
    background: var(--project-accent);
    content: '';
  }

  @media (min-width: 940px) {
    grid-template-columns: minmax(0, 0.86fr) minmax(0, 1.14fr);
    gap: clamp(76px, 6vw, 124px);
  }
`

const HeroCopy = styled.div`
  position: relative;
  z-index: 1;
  min-width: 0;
  max-width: 720px;
  animation: detail-copy-enter 680ms ${motion.ease} both;

  @keyframes detail-copy-enter {
    from { opacity: 0; transform: translateY(24px); }
    to { opacity: 1; transform: translateY(0); }
  }
`

const BackLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: ${colors.muted};
  font-size: 0.88rem;
  font-weight: 650;
  text-decoration: none;
  transition: color 180ms ease, gap 180ms ${motion.ease};

  &:hover {
    gap: 12px;
    color: var(--project-accent);
  }
`

const ProjectName = styled.h1`
  margin: 52px 0 0;
  color: var(--project-accent);
  font-size: clamp(3.6rem, 6.3vw, 7.4rem);
  font-weight: 740;
  line-height: 0.88;
  letter-spacing: -0.072em;
`

const ProjectPromise = styled.p`
  max-width: 610px;
  margin: 36px 0 0;
  color: ${colors.blue};
  font-size: clamp(1.32rem, 2.1vw, 1.9rem);
  font-weight: 680;
  line-height: 1.3;
`

const ProjectStatement = styled.p`
  max-width: 650px;
  margin: 20px 0 0;
  color: ${colors.muted};
  font-size: clamp(1.04rem, 1.35vw, 1.24rem);
  line-height: 1.65;
`

const HeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 34px;
`

const ActionLink = styled.a`
  display: inline-flex;
  min-height: 50px;
  align-items: center;
  gap: 9px;
  border: 1px solid var(--project-accent);
  padding: 0 19px;
  background: var(--project-accent);
  color: ${colors.white};
  font-size: 0.9rem;
  font-weight: 680;
  text-decoration: none;
  transition: transform 180ms ${motion.ease};

  &:hover { transform: translateY(-3px); }
`

const ProjectVisual = styled.figure`
  position: relative;
  z-index: 1;
  width: 100%;
  min-width: 0;
  max-width: 100%;
  margin: 0;
  border: 2px solid var(--project-accent);
  background: ${colors.black};
  box-shadow: 15px 15px 0 var(--project-soft);
  animation: detail-visual-enter 760ms 100ms ${motion.ease} both;

  img {
    display: block;
    width: 100%;
    height: auto;
    max-width: 100%;
    object-fit: contain;
  }

  figcaption {
    padding: 17px 19px;
    background: ${colors.black};
    color: rgb(255 255 255 / 76%);
    font-size: 0.82rem;
    line-height: 1.45;
  }

  @keyframes detail-visual-enter {
    from { opacity: 0; transform: translateY(28px); }
    to { opacity: 1; transform: translateY(0); }
  }
`

const DetailSection = styled.section`
  position: relative;
  padding: 104px clamp(24px, 4.5vw, 86px) 116px;
  border-top: 1px solid ${colors.line};
`

const SectionHeading = styled.div`
  display: grid;
  gap: 24px;

  @media (min-width: 860px) {
    grid-template-columns: minmax(240px, 0.72fr) minmax(0, 1.28fr);
    gap: 58px;
  }

  h2 {
    margin: 0;
    color: var(--project-accent);
    font-size: clamp(2.7rem, 5vw, 5.5rem);
    line-height: 0.94;
    letter-spacing: -0.065em;
  }

  p {
    max-width: 780px;
    margin: 0;
    color: ${colors.muted};
    font-size: clamp(1.08rem, 1.5vw, 1.34rem);
    line-height: 1.65;
  }
`

const Trace = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 48px;

  span {
    border: 1px solid var(--project-accent);
    border-radius: 999px;
    padding: 10px 14px;
    background: var(--project-soft);
    color: var(--project-accent);
    font-size: 0.84rem;
    font-weight: 680;
  }
`

const StackGrid = styled.div`
  display: grid;
  gap: 22px;
  margin-top: 58px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1120px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`

const StackCard = styled.article`
  min-height: 206px;
  border: 2px solid var(--project-accent);
  padding: 28px 25px;
  background: ${colors.white};
  box-shadow: 10px 10px 0 var(--project-accent);
  transition: box-shadow 180ms ${motion.ease}, transform 180ms ${motion.ease};

  &:hover {
    box-shadow: 14px 14px 0 var(--project-soft);
    transform: translate(-3px, -3px);
  }

  h3 {
    margin: 0;
    color: var(--project-accent);
    font-size: clamp(1.3rem, 1.75vw, 1.65rem);
    line-height: 1.08;
    letter-spacing: -0.04em;
  }

  ul {
    display: grid;
    gap: 10px;
    margin: 26px 0 0;
    padding: 0;
    color: ${colors.muted};
    font-size: 1rem;
    line-height: 1.45;
    list-style: none;
  }

  li {
    display: flex;
    align-items: baseline;
    gap: 9px;
  }

  li::before {
    width: 7px;
    height: 7px;
    flex: 0 0 7px;
    border-radius: 50%;
    background: var(--project-accent);
    content: '';
  }
`

const RepositoryBand = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 28px;
  padding: 72px clamp(24px, 4.5vw, 86px) 80px;
  background: var(--project-accent);
  color: ${colors.white};

  @media (min-width: 760px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  h2 {
    max-width: 760px;
    margin: 0;
    font-size: clamp(2rem, 4vw, 4.3rem);
    line-height: 0.98;
    letter-spacing: -0.055em;
  }

  a {
    display: inline-flex;
    min-height: 52px;
    flex: 0 0 auto;
    align-items: center;
    gap: 9px;
    border: 1px solid rgb(255 255 255 / 72%);
    padding: 0 20px;
    color: ${colors.white};
    font-weight: 680;
    text-decoration: none;
    transition: background 180ms ease, color 180ms ease;
  }

  a:hover {
    background: ${colors.white};
    color: var(--project-accent);
  }
`

export function ProjectDetailPage() {
  const { projectSlug } = useParams()
  const project = projects.find((item) => item.slug === projectSlug)

  useEffect(() => {
    if (!project) return
    document.title = `${project.name} — Proyecto de Andrés Cuello`
    window.scrollTo(0, 0)
  }, [project])

  if (!project) return <Navigate replace to="/" />

  return (
    <DetailPage className={project.className}>
      <DetailHero aria-labelledby="project-title">
        <HeroCopy>
          <BackLink href="/#proyectos"><ArrowLeft size={17} aria-hidden="true" /> Volver al portafolio</BackLink>
          <ProjectName id="project-title">{project.name}</ProjectName>
          <ProjectPromise>{project.promise}</ProjectPromise>
          <ProjectStatement>{project.statement}</ProjectStatement>
          <HeroActions>
            <ActionLink href={project.url} target="_blank" rel="noreferrer">
              Ver repositorio <GitFork size={17} aria-hidden="true" />
            </ActionLink>
          </HeroActions>
        </HeroCopy>
        <ProjectVisual>
          <img src={project.image} alt={project.imageAlt} />
          <figcaption>Captura funcional del proyecto {project.name}.</figcaption>
        </ProjectVisual>
      </DetailHero>

      <DetailSection aria-labelledby="decision-title">
        <SectionHeading>
          <h2 id="decision-title">Decisión técnica</h2>
          <p>{project.stackIntro}</p>
        </SectionHeading>
        <Trace aria-label={`Tecnologías principales de ${project.name}`}>
          {project.highlights.map((technology) => <span key={technology}>{technology}</span>)}
        </Trace>
      </DetailSection>

      <DetailSection aria-labelledby="stack-title">
        <SectionHeading>
          <h2 id="stack-title">Stack del proyecto</h2>
          <p>{project.context}</p>
        </SectionHeading>
        <StackGrid>
          {project.stack.map((group) => (
            <StackCard key={group.title}>
              <h3>{group.title}</h3>
              <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </StackCard>
          ))}
        </StackGrid>
      </DetailSection>

      <RepositoryBand>
        <h2>El código cuenta el resto de la historia.</h2>
        <a href={project.url} target="_blank" rel="noreferrer">
          Explorar {project.name} <ArrowUpRight size={18} aria-hidden="true" />
        </a>
      </RepositoryBand>
    </DetailPage>
  )
}
