import carIsRdImage from '@/assets/projects/carisrd-dashboard.png'
import stockPilotImage from '@/assets/projects/stockpilot-dashboard.png'
import turnoFlowImage from '@/assets/projects/turnoflow-dashboard.png'

export const projects = [
  {
    slug: 'carisrd',
    name: 'CarIsRD',
    className: 'project--wine',
    category: 'Historial vehicular verificable',
    promise: 'De una pregunta real a una respuesta verificable.',
    context: 'Conecta contexto local, reglas de dominio, interfaz y pruebas ejecutables.',
    statement: 'Historial vehicular verificable para que compradores y propietarios entiendan el pasado de un vehículo antes de tomar una decisión.',
    evidence: 'VIN y placa únicos, kilometraje protegido y eventos asociados a una fuente verificable.',
    highlights: ['C#', '.NET 8', 'Minimal APIs', 'Clean Architecture', 'JSON atómico'],
    stackIntro: 'El historial se construye como evidencia: las reglas viven en el dominio y la interfaz explica cada dato sin ocultar su procedencia.',
    stack: [
      { title: 'API y plataforma', items: ['C#', '.NET 8', 'ASP.NET Core Minimal APIs'] },
      { title: 'Arquitectura', items: ['Clean Architecture', 'Modelo de dominio', 'RFC 7807 Problem Details'] },
      { title: 'Datos e interfaz', items: ['System.Text.Json', 'Escritura atómica', 'Vanilla JavaScript'] },
      { title: 'Entrega y pruebas', items: ['Docker', 'GitHub Actions', 'Reqnroll · NUnit · Playwright'] },
    ],
    image: carIsRdImage,
    imageAlt: 'Panel principal de CarIsRD con historial vehicular y actividad reciente',
    url: 'https://github.com/AndresCuello001/CarIsRD',
  },
  {
    slug: 'turnoflow',
    name: 'TurnoFlow',
    className: 'project--blue',
    category: 'Agenda para negocios de servicios',
    promise: 'De horarios dispersos a una agenda coordinada.',
    context: 'Modela la duración de cada servicio y evita conflictos antes de confirmar una cita.',
    statement: 'Agenda operativa que calcula disponibilidad y protege al negocio contra reservas superpuestas para una misma persona del equipo.',
    evidence: 'La disponibilidad se calcula; una reserva superpuesta se rechaza antes de afectar la agenda.',
    highlights: ['C#', '.NET 8', 'Minimal APIs', 'TimeOnly converter', 'HTTP 409'],
    stackIntro: 'La tecnología sostiene una regla central: la disponibilidad se calcula y los cruces se rechazan antes de confirmar una cita.',
    stack: [
      { title: 'API y plataforma', items: ['C#', '.NET 8', 'ASP.NET Core Minimal APIs'] },
      { title: 'Reglas de agenda', items: ['TimeOnly', 'Intervalos sin solapamiento', 'DomainException · HTTP 409'] },
      { title: 'Datos e interfaz', items: ['System.Text.Json', 'SemaphoreSlim', 'Vanilla JavaScript'] },
      { title: 'Entrega', items: ['Docker', 'GitHub Actions', 'Build Release automatizado'] },
    ],
    image: turnoFlowImage,
    imageAlt: 'Panel operativo de TurnoFlow con citas, servicios e ingresos',
    url: 'https://github.com/AndresCuello001/TurnoFlow',
  },
  {
    slug: 'stockpilot',
    name: 'StockPilot',
    className: 'project--black',
    category: 'Inventario y punto de venta',
    promise: 'De movimientos aislados a un inventario trazable.',
    context: 'Cada cambio queda registrado y las ventas se validan completas antes de afectar existencias.',
    statement: 'Inventario y punto de venta para pequeños comercios, con alertas de reposición y operaciones que protegen la consistencia de los datos.',
    evidence: 'Cada cambio genera un movimiento y las ventas de varias líneas se confirman como una sola operación.',
    highlights: ['C#', '.NET 8', 'Minimal APIs', 'Ventas atómicas', 'Movement ledger'],
    stackIntro: 'Cada venta se trata como una operación completa: primero se validan sus líneas y después se actualiza el inventario como una sola unidad.',
    stack: [
      { title: 'API y plataforma', items: ['C#', '.NET 8', 'ASP.NET Core Minimal APIs'] },
      { title: 'Dominio de inventario', items: ['Movement ledger', 'Ventas multi-línea atómicas', 'DomainException'] },
      { title: 'Datos e interfaz', items: ['System.Text.Json', 'Escritura serializada', 'Vanilla JavaScript'] },
      { title: 'Entrega', items: ['Docker', 'GitHub Actions', 'Build Release automatizado'] },
    ],
    image: stockPilotImage,
    imageAlt: 'Panel de StockPilot con inventario, existencias y alertas de reposición',
    url: 'https://github.com/AndresCuello001/StockPilot',
  },
] as const

export type PortfolioProject = (typeof projects)[number]
