import styled from '@emotion/styled'
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { projects } from '@/features/projects/data/projects'
import { colors, motion } from '@/shared/styles/tokens'

const Carousel = styled.aside`
  --project-accent: ${colors.wine};
  --project-soft: ${colors.wineLight};

  position: relative;
  width: 100%;
  min-width: 0;
  max-width: 100%;
  overflow: hidden;
  border: 2px solid var(--project-accent);
  border-radius: 3px 3px 42px 3px;
  background: ${colors.black};
  box-shadow: 14px 14px 0 var(--project-soft);
  animation: carousel-enter 820ms 100ms ${motion.ease} both;

  &.project--blue {
    --project-accent: ${colors.blue};
    --project-soft: ${colors.blueSoft};
  }

  &.project--black {
    --project-accent: #e8a33b;
    --project-soft: #f6dfb9;
  }

  @keyframes carousel-enter {
    from { opacity: 0; transform: translateY(20px) scale(0.99); }
    to { opacity: 1; transform: translateY(0) scale(1); }
  }
`

const Topbar = styled.div`
  display: flex;
  min-height: 46px;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 0 16px;
  border-bottom: 1px solid rgb(255 255 255 / 11%);
  color: #dce4ea;
  font-size: 0.76rem;

  strong {
    min-width: 0;
    overflow: hidden;
    font-weight: 620;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  span {
    color: #91a3b1;
    font-variant-numeric: tabular-nums;
  }
`

const ImageViewport = styled.div`
  position: relative;
  display: grid;
  overflow: hidden;
  min-width: 0;
  aspect-ratio: 1.44;
  place-items: center;
  padding: clamp(6px, 1vw, 12px);
  background:
    linear-gradient(135deg, rgb(255 255 255 / 5%), transparent 38%),
    ${colors.ink};
`

const ProjectImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  max-width: 100%;
  object-fit: contain;
  object-position: center top;
  animation: image-change 360ms ${motion.ease} both;

  @keyframes image-change {
    from { opacity: 0.3; transform: scale(1.012); }
    to { opacity: 1; transform: scale(1); }
  }
`

const ProjectCaption = styled.div`
  display: grid;
  min-width: 0;
  gap: 16px;
  padding: 20px 20px 18px;
  background: ${colors.ink};
  color: ${colors.white};

  @media (min-width: 720px) {
    grid-template-columns: 1fr auto;
    align-items: center;
  }
`

const CaptionCopy = styled.div`
  display: grid;
  gap: 4px;

  strong {
    font-size: clamp(1.05rem, 1.5vw, 1.28rem);
    font-weight: 720;
    letter-spacing: -0.025em;
  }

  span {
    max-width: 68ch;
    color: #b9c7d1;
    font-size: clamp(0.8rem, 1vw, 0.94rem);
    line-height: 1.5;
  }
`

const CaptionKicker = styled.p`
  margin: 0;
  color: var(--project-soft);
  font-size: 0.7rem;
  font-weight: 720;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  min-height: 44px;
  justify-content: center;
  border-bottom: 2px solid var(--project-soft);
  color: ${colors.white};
  font-size: 0.76rem;
  font-weight: 630;
  text-decoration: none;
`

const Controls = styled.div`
  position: absolute;
  z-index: 2;
  top: 58px;
  right: 12px;
  display: flex;
  gap: 6px;
`

const ControlButton = styled.button`
  display: grid;
  width: 34px;
  height: 34px;
  place-items: center;
  border: 1px solid rgb(255 255 255 / 22%);
  border-radius: 50%;
  background: rgb(6 19 31 / 82%);
  color: ${colors.white};
  transition: border-color 160ms ease, background 160ms ease;

  &:hover {
    border-color: var(--project-soft);
    background: var(--project-accent);
  }

  &:focus-visible {
    outline: 2px solid var(--project-soft);
    outline-offset: 2px;
  }
`

const Pagination = styled.div`
  display: flex;
  gap: 7px;
  padding: 0 18px 17px;
  background: ${colors.ink};
`

const PaginationButton = styled.button<{ active: boolean }>`
  width: ${({ active }) => active ? '28px' : '8px'};
  height: 8px;
  border: 0;
  border-radius: 999px;
  padding: 0;
  background: ${({ active }) => active ? 'var(--project-soft)' : 'rgb(255 255 255 / 30%)'};
  transition: width 220ms ${motion.ease}, background 180ms ease;

  &:focus-visible {
    outline: 2px solid var(--project-soft);
    outline-offset: 3px;
  }
`

export function ProjectCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePreference = () => setReduceMotion(mediaQuery.matches)

    updatePreference()
    mediaQuery.addEventListener('change', updatePreference)
    return () => mediaQuery.removeEventListener('change', updatePreference)
  }, [])

  useEffect(() => {
    if (isPaused || reduceMotion) return

    const timer = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % projects.length)
    }, 2000)

    return () => window.clearTimeout(timer)
  }, [activeIndex, isPaused, reduceMotion])

  const activeProject = projects[activeIndex]
  const selectPrevious = () => setActiveIndex((activeIndex - 1 + projects.length) % projects.length)
  const selectNext = () => setActiveIndex((activeIndex + 1) % projects.length)

  return (
    <Carousel
      className={activeProject.className}
      aria-label="Capturas reales de proyectos"
      aria-roledescription="carrusel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false)
      }}
    >
      <Topbar>
        <strong>Vista real del producto</strong>
        <span>0{activeIndex + 1} / 0{projects.length}</span>
      </Topbar>

      <ImageViewport>
        <ProjectImage
          key={activeProject.name}
          src={activeProject.image}
          alt={`Dashboard de ${activeProject.name}`}
        />
      </ImageViewport>

      <ProjectCaption aria-live={isPaused ? 'polite' : 'off'}>
        <CaptionCopy>
          <CaptionKicker>{activeProject.category}</CaptionKicker>
          <strong>{activeProject.name}</strong>
          <span>{activeProject.evidence}</span>
        </CaptionCopy>
        <ProjectLink href={`/proyectos/${activeProject.slug}`} target="_blank" rel="noreferrer">
          Ver detalles técnicos <ArrowUpRight size={15} aria-hidden="true" />
        </ProjectLink>
      </ProjectCaption>

      <Controls>
        <ControlButton type="button" aria-label="Proyecto anterior" onClick={selectPrevious}>
          <ChevronLeft size={17} aria-hidden="true" />
        </ControlButton>
        <ControlButton type="button" aria-label="Proyecto siguiente" onClick={selectNext}>
          <ChevronRight size={17} aria-hidden="true" />
        </ControlButton>
      </Controls>

      <Pagination aria-label="Seleccionar proyecto">
        {projects.map((project, index) => (
          <PaginationButton
            key={project.name}
            type="button"
            active={index === activeIndex}
            aria-label={`Mostrar ${project.name}`}
            aria-current={index === activeIndex ? 'true' : undefined}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </Pagination>
    </Carousel>
  )
}
