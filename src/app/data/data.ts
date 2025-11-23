import { ContactDetails, Customer, Paragraph, Service } from '../models/models';

export const contactDetails: ContactDetails = {
  url: 'https://baliasociados.com',
  longName: 'Bali Asociados en Gestión, S.L.',
  shortName: 'Bali Asociados',
  address1: 'C/ Modesto Lafuente 41, 2ºB',
  address2: '28003 Madrid',
  phone: '91 237 85 28',
  email: 'info@baliasociados.com',
  open: '9:00 a 17:00h lunes a viernes',
  cif: 'B84133586',
};

export const IMAGEPREURL = 'https://res.cloudinary.com/dnlceaase/image/upload/f_auto,q_auto';

export const services: Service[] = [
  {
    name: 'Asesoría integral',
    intro:
      'Nos encargamos de la dirección financiera y fiscal, la coordinación contable-laboral y el seguimiento estratégico del negocio.',
    description:
      'El servicio de asesoría integral parte del estudio de las necesidades del negocio para identificar la mejor manera de optimizar recursos.\n\nIncluye dirección financiera y fiscal externa, coordinación contable-laboral, elaboración de cuadro de mando y participación en comité mensual para el seguimiento estratégico del negocio.',
    image: '/v1760802190/bali/bali-asociados-presentacion-asesoria_ohtywl.jpg',
  },
  {
    name: 'Contable',
    intro:
      'Llevamos tu contabilidad al día y proporcionamos toda la información financiera que necesitas de forma precisa y ágil.',
    description:
      'Nuestro equipo lleva la contabilidad de cada cliente al día, realizando conciliaciones, cierres mensuales y anuales, libros y depósitos de cuentas. El servicio incluye reporting D+5 para la toma de decisiones más ágil.\n\nIdentificamos los mejores métodos y procesos en función de cada tipo de cliente y adaptamos nuestras herramientas a los sistemas de gestión de cada empresa, garantizando una comunicación fluida en todo momento.\n\nContamos con sistemas de lectura OCR de facturas físicas, importación directa desde procesadores de texto u hojas de cálculo y traslado de bancos desde la web de cada entidad.',
    image: '/v1760802190/bali/bali-asociados-presentacion-asesoria_ohtywl.jpg',
  },
  {
    name: 'Fiscal',
    intro:
      'Gestionamos y optimizamos todo tipo de obligaciones fiscales con seguridad y anticipación.',
    description:
      'Partiendo del encuadre fiscal de las actividades de cada negocio, planificamos y presentamos todos los modelos tributarios (IS, IVA, IRPF y retenciones), asegurado el cumplimiento con las obligaciones locales, autonómicas o internacionales.\n\nDeterminamos la tributación en operaciones singulares, gestionamos pagos fraccionados y te acompañamos en inspecciones y recursos. Además, nuestro equipo se mantiene actualizado en normativa tribuataria para facilitarte su conocimiento y evolución.',
    image: '/v1760802190/bali/bali-asociados-presentacion-asesoria_ohtywl.jpg',
  },
  {
    name: 'Laboral',
    intro:
      'Tras un estudio detallado de las necesidades en el ámbito laboral o de Recursos Humanos de cada negocio, gestionamos todo lo necesario.',
    description:
      'El equipo de Bali Asociados analiza cada negocio para diagnosticar y tramitar todo lo necesario en el ámbito laboral.\n\nAltas de autónomos (RETA), elaboración de contratos o subtontrataciones, nóminas y seguros sociales, sanciones o despidos y conciliaciones. Elaboración de convenios y políticas retributivas.\n\nPolíticas de igualdad: análisis de brecha salarial, protocolos antiacoso, canales de denuncias y planes de igualdad.\n\nTambién se da cobertura a la coordinación de Prevención de Riesgos Laborales y ERTE. Y se realizan auditorías de costes y laborales.',
    image: '/v1760802190/bali/bali-asociados-presentacion-asesoria_ohtywl.jpg',
  },
  {
    name: 'Constitución de empresas',
    intro:
      'Identificamos las vías más sencillas y seguras para crear empresas o iniciar actividades económicas a título personal.',
    description:
      'Nuestro equipo te acompaña en la puesta en marcha de tu negocio, ya sea como autónomo o sociedad.\n\nElegimos la forma jurídica más adecuada, elaboramos los estatutos, gestionamos altas censales, IAE y cuentas bancarias y ponemos en marcha compliant.\n\nNos enfocamos en simplificar y agilizar todos los trámites con garantía de seguridad.',
    image: '/v1760802190/bali/bali-asociados-presentacion-asesoria_ohtywl.jpg',
  },
  {
    name: 'Estrategia y marketing',
    intro:
      'Analizando el punto de partida del negocio y su sector, nuestro equipo elabora un plan de Marketing 360 con resultados medibles.',
    description:
      'A partir de un diagnóstico completo de la situación del negocio y el mercado, identificamos tu propuesta de valor y diseñamos la estrategia de pricing más efectiva.\n\nDesarrollamos un plan comercial integral, incluyendo embudos de conversión y un calendario de acciones. Cada iniciativa está alineada con los objetivos de tu negocio para ganartizar resultados medibles.',
    image: '/v1760802190/bali/bali-asociados-presentacion-asesoria_ohtywl.jpg',
  },
];

export const customers: Customer[] = [
  {
    name: 'Autónomos',
    path: 'M96 96C60.7 96 32 124.7 32 160L32 480C32 515.3 60.7 544 96 544L544 544C579.3 544 608 515.3 608 480L608 160C608 124.7 579.3 96 544 96L96 96zM176 352L240 352C284.2 352 320 387.8 320 432C320 440.8 312.8 448 304 448L112 448C103.2 448 96 440.8 96 432C96 387.8 131.8 352 176 352zM152 256C152 225.1 177.1 200 208 200C238.9 200 264 225.1 264 256C264 286.9 238.9 312 208 312C177.1 312 152 286.9 152 256zM392 208L504 208C517.3 208 528 218.7 528 232C528 245.3 517.3 256 504 256L392 256C378.7 256 368 245.3 368 232C368 218.7 378.7 208 392 208zM392 304L504 304C517.3 304 528 314.7 528 328C528 341.3 517.3 352 504 352L392 352C378.7 352 368 341.3 368 328C368 314.7 378.7 304 392 304z',
    description:
      'Trabajamos de la mano del autónomo para poner en marcha su actividad y asegurar el cumplimiento con sus obligaciones.',
  },
  {
    name: 'Empresas',
    path: 'M192 112C183.2 112 176 119.2 176 128L176 512C176 520.8 183.2 528 192 528L272 528L272 448C272 430.3 286.3 416 304 416L336 416C353.7 416 368 430.3 368 448L368 528L448 528C456.8 528 464 520.8 464 512L464 128C464 119.2 456.8 112 448 112L192 112zM128 128C128 92.7 156.7 64 192 64L448 64C483.3 64 512 92.7 512 128L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM224 176C224 167.2 231.2 160 240 160L272 160C280.8 160 288 167.2 288 176L288 208C288 216.8 280.8 224 272 224L240 224C231.2 224 224 216.8 224 208L224 176zM368 160L400 160C408.8 160 416 167.2 416 176L416 208C416 216.8 408.8 224 400 224L368 224C359.2 224 352 216.8 352 208L352 176C352 167.2 359.2 160 368 160zM224 304C224 295.2 231.2 288 240 288L272 288C280.8 288 288 295.2 288 304L288 336C288 344.8 280.8 352 272 352L240 352C231.2 352 224 344.8 224 336L224 304zM368 288L400 288C408.8 288 416 295.2 416 304L416 336C416 344.8 408.8 352 400 352L368 352C359.2 352 352 344.8 352 336L352 304C352 295.2 359.2 288 368 288z',
    description:
      'Prestamos servicio a negocios de cualquier tamaño: microempresas, pymes, empresas de reducida dimensión, empresas y grandes empresas.',
  },
  {
    name: 'Grupos',
    path: 'M352 64C316.7 64 288 92.7 288 128L288 160L240 160L240 88C240 74.7 229.3 64 216 64C202.7 64 192 74.7 192 88L192 160L128 160L128 88C128 74.7 117.3 64 104 64C90.7 64 80 74.7 80 88L80 162C52.4 169.1 32 194.2 32 224L32 512C32 547.3 60.7 576 96 576L544 576C579.3 576 608 547.3 608 512L608 320C608 284.7 579.3 256 544 256L480 256L480 128C480 92.7 451.3 64 416 64L352 64zM416 176L416 208C416 216.8 408.8 224 400 224L368 224C359.2 224 352 216.8 352 208L352 176C352 167.2 359.2 160 368 160L400 160C408.8 160 416 167.2 416 176zM400 256C408.8 256 416 263.2 416 272L416 304C416 312.8 408.8 320 400 320L368 320C359.2 320 352 312.8 352 304L352 272C352 263.2 359.2 256 368 256L400 256zM416 368L416 400C416 408.8 408.8 416 400 416L368 416C359.2 416 352 408.8 352 400L352 368C352 359.2 359.2 352 368 352L400 352C408.8 352 416 359.2 416 368zM528 352C536.8 352 544 359.2 544 368L544 400C544 408.8 536.8 416 528 416L496 416C487.2 416 480 408.8 480 400L480 368C480 359.2 487.2 352 496 352L528 352zM288 368L288 400C288 408.8 280.8 416 272 416L240 416C231.2 416 224 408.8 224 400L224 368C224 359.2 231.2 352 240 352L272 352C280.8 352 288 359.2 288 368zM272 256C280.8 256 288 263.2 288 272L288 304C288 312.8 280.8 320 272 320L240 320C231.2 320 224 312.8 224 304L224 272C224 263.2 231.2 256 240 256L272 256zM160 368L160 400C160 408.8 152.8 416 144 416L112 416C103.2 416 96 408.8 96 400L96 368C96 359.2 103.2 352 112 352L144 352C152.8 352 160 359.2 160 368zM144 256C152.8 256 160 263.2 160 272L160 304C160 312.8 152.8 320 144 320L112 320C103.2 320 96 312.8 96 304L96 272C96 263.2 103.2 256 112 256L144 256z',
    description:
      'Nuestro equipo al completo se dedica al asesoramiento integral especializado para grupos de empresas.',
  },
];

export const homeParagraphs: Paragraph[] = [
  {
    name: 'Un equipo cualificado',
    description:
      'El criterio técnico y ejecución. Diseñamos el plan y lo implementamos con calendario, KPIs y reporting adaptado',
    image: '/v1760802190/bali/bali-asociados-presentacion-asesoria_ohtywl.jpg',
  },
  {
    name: 'Cumplimiento primero',
    description: 'Decisiones basadas en datos y normativa, minimizando riesgos y sanciones.',
    image: '/v1760802190/bali/bali-asociados-presentacion-asesoria_ohtywl.jpg',
  },
];

export const nosotrosParagraphs: Paragraph[] = [
  {
    name: 'Metodología de trabajo',
    description:
      '1) Diagnóstico (0–30 días): recopilación de información, mapa de riesgos y oportunidades. 2) Plan (día 30): fiscal/contable/laboral + negocio, KPIs, calendario y responsables. 3) Ejecución (mes a mes): cumplimiento, reporting y seguimiento en fechas. 4) Revisión (trimestral): ajustes, alertas y objetivos siguientes.',
    image: '/v1760802190/bali/bali-asociados-presentacion-asesoria_ohtywl.jpg',
  },
  {
    name: 'Diferenciales',
    description:
      'Reporting financiero mensualmente antes del día 5. • Calendario fiscal-laboral y avisos proactivos. • Cuadro de mando con KPIs clave (margen, cash-flow, coste de personal, periodos medios). • Defensa y representación ante AEAT y TGSS.• Integración contable con bancos y ERPs habituales.',
    image: '/v1760802190/bali/bali-asociados-presentacion-asesoria_ohtywl.jpg',
  },
  {
    name: 'Resultados',
    description:
      'Distribución: reducción de carga fiscal efectiva −12% en 12 meses.• Servicios técnicos: cierres y reporting en D+5; cero sanciones en el ejercicio.• E‑commerce: recuperación de IVA intracomunitario; mejora de cash‑flow +8%.',
    image: '/v1760802190/bali/bali-asociados-presentacion-asesoria_ohtywl.jpg',
  },
];
