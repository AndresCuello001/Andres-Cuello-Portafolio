import styled from '@emotion/styled'
import { Blocks, Braces, PanelsTopLeft, Search, ShieldCheck, type LucideIcon } from 'lucide-react'
import { useState } from 'react'
import { colors, motion } from '@/shared/styles/tokens'

type SystemLayer = {
  name: string
  description: string
  example: string
  icon: LucideIcon
}

const layers: SystemLayer[] = [
  {
    name: 'Necesidad',
    description: 'Entender el problema antes de elegir la tecnología.',
    example: 'CarIsRD parte de una pregunta real: ¿cómo confiar en el historial de un vehículo usado?',
    icon: Search,
  },
  {
    name: 'Dominio',
    description: 'Convertir las reglas importantes en comportamiento verificable.',
    example: 'El kilometraje no puede retroceder y una identidad vehicular no puede duplicarse.',
    icon: Blocks,
  },
  {
    name: 'API',
    description: 'Exponer contratos claros y errores que ayuden a corregir.',
    example: 'Las respuestas distinguen una entrada inválida de un conflicto con el estado actual.',
    icon: Braces,
  },
  {
    name: 'Interfaz',
    description: 'Hacer que el sistema sea comprensible para una persona.',
    example: 'La historia se presenta como una línea de tiempo atribuida a sus fuentes.',
    icon: PanelsTopLeft,
  },
  {
    name: 'Evidencia',
    description: 'Comprobar que las reglas continúan funcionando.',
    example: 'QualityFlow ejecuta escenarios de API e interfaz y conserva evidencia de los fallos.',
    icon: ShieldCheck,
  },
]

const Map = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 28px 28px 88px 28px;
  background: ${colors.ink};
  color: ${colors.white};
  box-shadow: 18px 20px 0 ${colors.blueSoft};

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    width: 74px;
    height: 74px;
    border-radius: 0 0 0 74px;
    background: ${colors.wine};
    content: '';
  }
`

const MapHeader = styled.div`
  position: relative;
  z-index: 1;
  padding: 28px 28px 18px;

  p {
    max-width: 24ch;
    margin: 0;
    color: #cbd5e5;
    font-size: 0.82rem;
    line-height: 1.5;
  }

  strong {
    display: block;
    max-width: 15ch;
    margin-top: 8px;
    font-size: clamp(1.35rem, 3vw, 2rem);
    font-weight: 630;
    line-height: 1.04;
    letter-spacing: -0.045em;
  }
`

const MapBody = styled.div`
  display: grid;
  gap: 20px;
  padding: 12px 22px 26px;

  @media (min-width: 520px) {
    grid-template-columns: minmax(170px, 0.82fr) minmax(190px, 1.18fr);
    align-items: stretch;
  }
`

const StepList = styled.div`
  position: relative;
  display: grid;
  align-content: start;
  gap: 4px;

  &::before {
    position: absolute;
    top: 20px;
    bottom: 20px;
    left: 24px;
    width: 1px;
    background: #526078;
    content: '';
    transform-origin: top;
    animation: trace-line 900ms ${motion.ease} both;
  }

  @keyframes trace-line {
    from { transform: scaleY(0); }
    to { transform: scaleY(1); }
  }
`

const Step = styled.button<{ active: boolean }>`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 34px 1fr;
  gap: 10px;
  width: 100%;
  align-items: center;
  border: 0;
  border-radius: 14px;
  padding: 10px 11px 10px 8px;
  background: ${({ active }) => active ? '#263654' : 'transparent'};
  color: ${({ active }) => active ? colors.white : '#b9c4d6'};
  font: inherit;
  font-size: 0.84rem;
  font-weight: ${({ active }) => active ? 650 : 520};
  text-align: left;
  transition: background 180ms ease, color 180ms ease, transform 180ms ${motion.ease};

  &:hover {
    color: ${colors.white};
    transform: translateX(3px);
  }
`

const StepIcon = styled.span<{ active: boolean }>`
  display: grid;
  width: 34px;
  height: 34px;
  place-items: center;
  border: 1px solid ${({ active }) => active ? colors.wineLight : '#526078'};
  border-radius: 50%;
  background: ${({ active }) => active ? colors.wine : colors.ink};
  color: ${({ active }) => active ? colors.white : '#dce3ef'};
`

const Detail = styled.div`
  display: flex;
  min-height: 220px;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #3d4b65;
  border-radius: 20px 20px 58px 20px;
  padding: 22px;
  background: #1b2a45;

  span {
    color: ${colors.wineLight};
    font-size: 0.74rem;
    font-weight: 700;
  }

  h2 {
    margin: 14px 0 8px;
    font-size: 1.35rem;
    font-weight: 650;
    letter-spacing: -0.035em;
  }

  p {
    margin: 0;
    color: #cbd5e5;
    font-size: 0.88rem;
    line-height: 1.6;
  }

  small {
    display: block;
    margin-top: 22px;
    color: #8f9db2;
    font-size: 0.72rem;
    line-height: 1.45;
  }
`

export function SystemMap() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeLayer = layers[activeIndex]

  return (
    <Map aria-label="Proceso para convertir una necesidad en un producto verificable">
      <MapHeader>
        <p>Un producto es un sistema, no una colección de pantallas.</p>
        <strong>De la necesidad a la evidencia.</strong>
      </MapHeader>

      <MapBody>
        <StepList aria-label="Capas del proceso">
          {layers.map((layer, index) => {
            const Icon = layer.icon
            const active = index === activeIndex

            return (
              <Step
                key={layer.name}
                type="button"
                active={active}
                aria-pressed={active}
                onClick={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <StepIcon active={active}><Icon size={15} aria-hidden="true" /></StepIcon>
                {layer.name}
              </Step>
            )
          })}
        </StepList>

        <Detail aria-live="polite">
          <div>
            <span>0{activeIndex + 1} / 05</span>
            <h2>{activeLayer.name}</h2>
            <p>{activeLayer.description}</p>
          </div>
          <small>{activeLayer.example}</small>
        </Detail>
      </MapBody>
    </Map>
  )
}
