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
    description:
      'Estudiamos la forma mas adecuada para optimizar los recursos de nuestros clientes, mediante el conocimiento de sus necesidades. Dirección financiera y fiscal externa, coordinación contable-laboral, cuadro de mando y comité mensual.',
    image: '/v1760802190/bali/bali-asociados-presentacion-asesoria_ohtywl.jpg',
  },
  {
    name: 'Contable',
    description:
      'Contabilidad al día, conciliaciones, cierres mensuales/anual, libros y depósito de cuentas. Reporting D+5. Adaptamos nuestras herramientas a los sistemas de gestión de cada empresa, para facilitar la comunicación entre nuestros clientes y nuestro equipo para que existe una comunicación fluida en todo momento.',
    image: '/v1760802190/bali/bali-asociados-presentacion-asesoria_ohtywl.jpg',
  },
  {
    name: 'Fiscal',
    description:
      'Planificación y presentación de modelos (IS/IVA/IRPF/retenciones), inspecciones y recursos, pagos fraccionados. Mediante la formación continua de nuestro equipo, ponemos nuestro conocimiento a disposición de nuestros clientes el conocimiento que obtenemos de la diversidad y modificación de normas tributarias sobre las que gira nuestro entorno.',
    image: '/v1760802190/bali/bali-asociados-presentacion-asesoria_ohtywl.jpg',
  },
  {
    name: 'Laboral',
    description:
      'Contratación, nóminas y seguros sociales, auditoría de costes, convenios y políticas retributivas. Estudiamos con detalle las necesidades en RRHH de nuestro clientes, elaboramos las nóminas de sus trabajadores, y elaboramos los Seguros sociales, altas, bajas, despidos, conciliaciones, dando luz al ecosistema que surge entre los trabajadores y las entidades.',
    image: '/v1760802190/bali/bali-asociados-presentacion-asesoria_ohtywl.jpg',
  },
  {
    name: 'Constitución de empresas',
    description:
      'Elección de forma jurídica, estatutos, alta censal/IAE, banca y puesta en marcha compliant. Explicamos los caminos mas sencillos para constituir una empresa, o generar una actividad económica a título personal, simplificando los procesos a mecanismos sencillos, rápidos y seguros.',
    image: '/v1760802190/bali/bali-asociados-presentacion-asesoria_ohtywl.jpg',
  },
  {
    name: 'Estrategia y marketing',
    description:
      'Diagnóstico, propuesta de valor, pricing, plan comercial, embudo y calendario de acciones.',
    image: '/v1760802190/bali/bali-asociados-presentacion-asesoria_ohtywl.jpg',
  },
];

export const customers: Customer[] = [
  {
    name: 'Autónomos',
    path: 'M96 96C60.7 96 32 124.7 32 160L32 480C32 515.3 60.7 544 96 544L544 544C579.3 544 608 515.3 608 480L608 160C608 124.7 579.3 96 544 96L96 96zM176 352L240 352C284.2 352 320 387.8 320 432C320 440.8 312.8 448 304 448L112 448C103.2 448 96 440.8 96 432C96 387.8 131.8 352 176 352zM152 256C152 225.1 177.1 200 208 200C238.9 200 264 225.1 264 256C264 286.9 238.9 312 208 312C177.1 312 152 286.9 152 256zM392 208L504 208C517.3 208 528 218.7 528 232C528 245.3 517.3 256 504 256L392 256C378.7 256 368 245.3 368 232C368 218.7 378.7 208 392 208zM392 304L504 304C517.3 304 528 314.7 528 328C528 341.3 517.3 352 504 352L392 352C378.7 352 368 341.3 368 328C368 314.7 378.7 304 392 304z',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua.',
  },
  {
    name: 'Empresas',
    path: 'M192 112C183.2 112 176 119.2 176 128L176 512C176 520.8 183.2 528 192 528L272 528L272 448C272 430.3 286.3 416 304 416L336 416C353.7 416 368 430.3 368 448L368 528L448 528C456.8 528 464 520.8 464 512L464 128C464 119.2 456.8 112 448 112L192 112zM128 128C128 92.7 156.7 64 192 64L448 64C483.3 64 512 92.7 512 128L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM224 176C224 167.2 231.2 160 240 160L272 160C280.8 160 288 167.2 288 176L288 208C288 216.8 280.8 224 272 224L240 224C231.2 224 224 216.8 224 208L224 176zM368 160L400 160C408.8 160 416 167.2 416 176L416 208C416 216.8 408.8 224 400 224L368 224C359.2 224 352 216.8 352 208L352 176C352 167.2 359.2 160 368 160zM224 304C224 295.2 231.2 288 240 288L272 288C280.8 288 288 295.2 288 304L288 336C288 344.8 280.8 352 272 352L240 352C231.2 352 224 344.8 224 336L224 304zM368 288L400 288C408.8 288 416 295.2 416 304L416 336C416 344.8 408.8 352 400 352L368 352C359.2 352 352 344.8 352 336L352 304C352 295.2 359.2 288 368 288z',
    description:
      'Microempresas, pymes, empresas de reducidad dimensión, empresas y grandes empresas.',
  },
  {
    name: 'Grupos',
    path: 'M192 112C183.2 112 176 119.2 176 128L176 512C176 520.8 183.2 528 192 528L272 528L272 448C272 430.3 286.3 416 304 416L336 416C353.7 416 368 430.3 368 448L368 528L448 528C456.8 528 464 520.8 464 512L464 128C464 119.2 456.8 112 448 112L192 112zM128 128C128 92.7 156.7 64 192 64L448 64C483.3 64 512 92.7 512 128L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM224 176C224 167.2 231.2 160 240 160L272 160C280.8 160 288 167.2 288 176L288 208C288 216.8 280.8 224 272 224L240 224C231.2 224 224 216.8 224 208L224 176zM368 160L400 160C408.8 160 416 167.2 416 176L416 208C416 216.8 408.8 224 400 224L368 224C359.2 224 352 216.8 352 208L352 176C352 167.2 359.2 160 368 160zM224 304C224 295.2 231.2 288 240 288L272 288C280.8 288 288 295.2 288 304L288 336C288 344.8 280.8 352 272 352L240 352C231.2 352 224 344.8 224 336L224 304zM368 288L400 288C408.8 288 416 295.2 416 304L416 336C416 344.8 408.8 352 400 352L368 352C359.2 352 352 344.8 352 336L352 304C352 295.2 359.2 288 368 288z',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua.',
  },
];

export const homeParagraphs: Paragraph[] = [
  {
    title: 'Un equipo cualificado',
    text: 'El criterio técnico y ejecución. Diseñamos el plan y lo implementamos con calendario, KPIs y reporting adaptado',
    image: '/v1760802190/bali/bali-asociados-presentacion-asesoria_ohtywl.jpg',
  },
  {
    title: 'Cumplimiento primero',
    text: 'Decisiones basadas en datos y normativa, minimizando riesgos y sanciones.',
    image: '/v1760802190/bali/bali-asociados-presentacion-asesoria_ohtywl.jpg',
  },
  {
    title: 'Metodología de trabajo',
    text: '1) Diagnóstico (0–30 días): recopilación de información, mapa de riesgos y oportunidades. 2) Plan (día 30): fiscal/contable/laboral + negocio, KPIs, calendario y responsables. 3) Ejecución (mes a mes): cumplimiento, reporting y seguimiento en fechas. 4) Revisión (trimestral): ajustes, alertas y objetivos siguientes.',
    image: '/v1760802190/bali/bali-asociados-presentacion-asesoria_ohtywl.jpg',
  },
];

export const nosotrosParagraphs: Paragraph[] = [
  {
    title: 'Diferenciales',
    text: 'Reporting financiero mensualmente antes del día 5. • Calendario fiscal-laboral y avisos proactivos. • Cuadro de mando con KPIs clave (margen, cash-flow, coste de personal, periodos medios). • Defensa y representación ante AEAT y TGSS.• Integración contable con bancos y ERPs habituales.',
    image: '/v1760802190/bali/bali-asociados-presentacion-asesoria_ohtywl.jpg',
  },
  {
    title: 'Resultados',
    text: 'Distribución: reducción de carga fiscal efectiva −12% en 12 meses.• Servicios técnicos: cierres y reporting en D+5; cero sanciones en el ejercicio.• E‑commerce: recuperación de IVA intracomunitario; mejora de cash‑flow +8%.',
    image: '/v1760802190/bali/bali-asociados-presentacion-asesoria_ohtywl.jpg',
  },
  {
    title: 'Lorem ipsum dolor sit amet',
    text: 'plan de acción con calendario y entregables.',
    image: '/v1760802190/bali/bali-asociados-presentacion-asesoria_ohtywl.jpg',
  },
];
