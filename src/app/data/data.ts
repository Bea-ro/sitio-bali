import { ContactDetails, Customer, Member, Paragraph, Result, Service } from '../models/models';

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

export const services: Service[] = [
  {
    name: 'Asesoría integral',
    intro:
      'Nos encargamos de la dirección financiera y fiscal, la coordinación contable-laboral y el seguimiento estratégico del negocio.',
    description:
      'El servicio de asesoría integral parte del estudio de las necesidades del negocio para identificar la mejor manera de optimizar recursos.\n\nIncluye dirección financiera y fiscal externa, coordinación contable-laboral, elaboración de cuadro de mando y participación en comité mensual para el seguimiento estratégico del negocio.',
    image: '/v1763924773/bali/asesoria-inrtegral-ba_ul1xsj.webp',
  },
  {
    name: 'Contable',
    intro:
      'Llevamos tu contabilidad al día y proporcionamos toda la información financiera que necesitas de forma precisa y ágil.',
    description:
      'Nuestro equipo lleva la contabilidad de cada cliente al día, realizando conciliaciones, cierres mensuales y anuales, libros y depósitos de cuentas. El servicio incluye reporting D+5 para la toma de decisiones más ágil.\n\nIdentificamos los mejores métodos y procesos en función de cada tipo de cliente y adaptamos nuestras herramientas a los sistemas de gestión de cada empresa, garantizando una comunicación fluida en todo momento.\n\nContamos con sistemas de lectura OCR de facturas físicas, importación directa desde procesadores de texto u hojas de cálculo y traslado de bancos desde la web de cada entidad.',
    image: '/v1763921631/bali/asesoria-contable-ba_nu1dcp.webp',
  },
  {
    name: 'Fiscal',
    intro:
      'Gestionamos y optimizamos todo tipo de obligaciones fiscales con seguridad y anticipación.',
    description:
      'Partiendo del encuadre fiscal de las actividades de cada negocio, planificamos y presentamos todos los modelos tributarios (IS, IVA, IRPF y retenciones), asegurado el cumplimiento con las obligaciones locales, autonómicas o internacionales.\n\nDeterminamos la tributación en operaciones singulares, gestionamos pagos fraccionados y te acompañamos en inspecciones y recursos. Además, nuestro equipo se mantiene actualizado en normativa tribuataria para facilitarte su conocimiento y evolución.',
    image: '/v1763923977/bali/asesoria-fiscal-ba_vrrxug.webp',
  },
  {
    name: 'Laboral',
    intro:
      'Tras un estudio detallado de las necesidades en el ámbito laboral o de Recursos Humanos de cada negocio, gestionamos todo lo necesario.',
    description:
      'El equipo de Bali Asociados analiza cada negocio para diagnosticar y tramitar todo lo necesario en el ámbito laboral.\n\nAltas de autónomos (RETA), elaboración de contratos o subtontrataciones, nóminas y seguros sociales, sanciones o despidos y conciliaciones. Elaboración de convenios y políticas retributivas.\n\nPolíticas de igualdad: análisis de brecha salarial, protocolos antiacoso, canales de denuncias y planes de igualdad.\n\nTambién se da cobertura a la coordinación de Prevención de Riesgos Laborales y ERTE. Y se realizan auditorías de costes y laborales.',
    image: '/v1763922698/bali/asesoria-laboral-ba_e7aux2.webp',
  },
  {
    name: 'Constitución de empresas',
    intro:
      'Identificamos las vías más sencillas y seguras para crear empresas o iniciar actividades económicas a título personal.',
    description:
      'Nuestro equipo te acompaña en la puesta en marcha de tu negocio, ya sea como autónomo o sociedad.\n\nElegimos la forma jurídica más adecuada, elaboramos los estatutos, gestionamos altas censales, IAE y cuentas bancarias y ponemos en marcha compliant.\n\nNos enfocamos en simplificar y agilizar todos los trámites con garantía de seguridad.',
    image: '/v1763924292/bali/constitucion-empresas-ba_oupmkt.webp',
  },
  {
    name: 'Estrategia y marketing',
    intro:
      'Analizando el punto de partida del negocio y su sector, nuestro equipo elabora un plan de Marketing 360 con resultados medibles.',
    description:
      'A partir de un diagnóstico completo de la situación del negocio y el mercado, identificamos tu propuesta de valor y diseñamos la estrategia de pricing más efectiva.\n\nDesarrollamos un plan comercial integral, incluyendo embudos de conversión y un calendario de acciones. Cada iniciativa está alineada con los objetivos de tu negocio para ganartizar resultados medibles.',
    image: '/v1763922225/bali/estrategia-y-marketing-ba_zf7kjo.webp',
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

export const nuestroTrabajo: Paragraph = {
  name: '¿Cómo trabajamos?',
  description:
    'Lo primero que hace el equipo de Bali Asociados es elaborar un mapa de riesgos y oportunidades a partir de la información recopilada, obteniendo un diagnóstico preciso de la situación de cada negocio.\n\nCon dicho diagnóstico, se diseña e implementa un plan personalizado con calendario, responsables y KPIs, realizando un seguimiento y reporting adaptado mensual y trimestral.\n\nAdemás, cada trimestre se realizan los ajustes necesarios, revisando próximos objetivos y alertas. Siempre con la máxima del cumplimiento.',
  image: '/v1763925408/bali/como-trabajamos-ba_p2nj4p.webp',
};

export const trabajoHome: Paragraph = {
  name: '',
  description:
    'Tenemos un equipo de especialistas dedicado a facilitar tu día a día. Asesores permanentemente actualizados para que cuentes con toda la información que necesitas en tiempo real.\n\nTomarás decisiones ágiles basadas en datos y normativa.',
  image: '/v1763924893/bali/reporting-ba_meqhhy.webp',
};

export const results: Result[] = [
  {
    number: '−12%',
    description: 'reducción de la carga fiscal efectiva en doce meses',
  },
  {
    number: '0',
    description: 'sanciones en el ejercicio gracias a cierres y reporting D+5',
  },
  {
    number: '+8%',
    description: 'mejora de cash flow gracias a recuperación de IVA intracomunitario',
  },
];

export const team: Member[] = [
  {
    name: 'Alfonso Carmona',
    position: 'Director del DESPACHO',
    image: '/v1760802190/bali/bali-asociados-presentacion-asesoria_ohtywl.jpg',
  },
  {
    name: 'Santiago Arellano',
    position: 'DPO e INTERNACIONALES',
    image: '/v1760802190/bali/bali-asociados-presentacion-asesoria_ohtywl.jpg',
  },
  {
    name: 'Lorena Pérez',
    position: 'Administración',
    image: '/v1760802190/bali/bali-asociados-presentacion-asesoria_ohtywl.jpg',
  },
  {
    name: 'Inmaculada Romero',
    position: 'Responsable Área Laboral',
    image: '/v1760802190/bali/bali-asociados-presentacion-asesoria_ohtywl.jpg',
  },
  {
    name: 'Mercedes Sánchez',
    position: 'Departamento Laboral',
    image: '/v1760802190/bali/bali-asociados-presentacion-asesoria_ohtywl.jpg',
  },
  {
    name: 'Belén García',
    position: 'Responsable Área Contable',
    image: '/v1760802190/bali/bali-asociados-presentacion-asesoria_ohtywl.jpg',
  },
  {
    name: 'Álvaro Tejero',
    position: 'Departamento Contable',
    image: '/v1760802190/bali/bali-asociados-presentacion-asesoria_ohtywl.jpg',
  },
  {
    name: 'Marta García',
    position: 'Departamento Contable',
    image: '/v1760802190/bali/bali-asociados-presentacion-asesoria_ohtywl.jpg',
  },
  {
    name: 'Carolina Pérez',
    position: 'Departamento Contable',
    image: '/v1760802190/bali/bali-asociados-presentacion-asesoria_ohtywl.jpg',
  },
  {
    name: 'Antonio Cabrejas',
    position: 'Responsable Área Fiscal',
    image: '/v1760802190/bali/bali-asociados-presentacion-asesoria_ohtywl.jpg',
  },
];

export const diferencias: Customer[] = [
  {
    name: 'Reporting D+5',
    path: 'M64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320zM384 416C384 399.8 378 384.9 368 373.7L437.5 234.8C443.4 222.9 438.6 208.5 426.8 202.6C415 196.7 400.5 201.5 394.6 213.3L325.1 352.2C323.4 352.1 321.7 352 320 352C284.7 352 256 380.7 256 416C256 451.3 284.7 480 320 480C355.3 480 384 451.3 384 416z',
    description: 'Reporting financiero mensual antes del día 5 ',
  },
  {
    name: 'Proactividad',
    path: 'M216 64C229.3 64 240 74.7 240 88L240 128L400 128L400 88C400 74.7 410.7 64 424 64C437.3 64 448 74.7 448 88L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 88C192 74.7 202.7 64 216 64zM216 176L160 176C151.2 176 144 183.2 144 192L144 240L496 240L496 192C496 183.2 488.8 176 480 176L216 176zM144 288L144 480C144 488.8 151.2 496 160 496L480 496C488.8 496 496 488.8 496 480L496 288L144 288z',
    description: 'Calendario fiscal-laboral y avisos proactivos',
  },
  {
    name: 'Cuadro de mando',
    path: 'M576 160C576 210.2 516.9 285.1 491.4 315C487.6 319.4 482 321.1 476.9 320L384 320C366.3 320 352 334.3 352 352C352 369.7 366.3 384 384 384L480 384C533 384 576 427 576 480C576 533 533 576 480 576L203.6 576C212.3 566.1 222.9 553.4 233.6 539.2C239.9 530.8 246.4 521.6 252.6 512L480 512C497.7 512 512 497.7 512 480C512 462.3 497.7 448 480 448L384 448C331 448 288 405 288 352C288 299 331 256 384 256L423.8 256C402.8 224.5 384 188.3 384 160C384 107 427 64 480 64C533 64 576 107 576 160zM181.1 553.1C177.3 557.4 173.9 561.2 171 564.4L169.2 566.4L169 566.2C163 570.8 154.4 570.2 149 564.4C123.8 537 64 466.5 64 416C64 363 107 320 160 320C213 320 256 363 256 416C256 446 234.9 483 212.5 513.9C201.8 528.6 190.8 541.9 181.7 552.4L181.1 553.1zM192 416C192 398.3 177.7 384 160 384C142.3 384 128 398.3 128 416C128 433.7 142.3 448 160 448C177.7 448 192 433.7 192 416zM480 192C497.7 192 512 177.7 512 160C512 142.3 497.7 128 480 128C462.3 128 448 142.3 448 160C448 177.7 462.3 192 480 192z',
    description: 'KPIs clave (margen, cash-flow, coste de personal, períodos medios)',
  },
  {
    name: 'Defensa y representación',
    path: 'M320 64C324.6 64 329.2 65 333.4 66.9L521.8 146.8C543.8 156.1 560.2 177.8 560.1 204C559.6 303.2 518.8 484.7 346.5 567.2C329.8 575.2 310.4 575.2 293.7 567.2C121.3 484.7 80.6 303.2 80.1 204C80 177.8 96.4 156.1 118.4 146.8L306.7 66.9C310.9 65 315.4 64 320 64z',
    description: 'Defensa y representación ante AEAT y TGSS',
  },
  {
    name: 'Integración',
    path: 'M415.9 274.5C428.1 271.2 440.9 277 446.4 288.3L465 325.9C475.3 327.3 485.4 330.1 494.9 334L529.9 310.7C540.4 303.7 554.3 305.1 563.2 314L582.4 333.2C591.3 342.1 592.7 356.1 585.7 366.5L562.4 401.4C564.3 406.1 566 411 567.4 416.1C568.8 421.2 569.7 426.2 570.4 431.3L608.1 449.9C619.4 455.5 625.2 468.3 621.9 480.4L614.9 506.6C611.6 518.7 600.3 526.9 587.7 526.1L545.7 523.4C539.4 531.5 532.1 539 523.8 545.4L526.5 587.3C527.3 599.9 519.1 611.3 507 614.5L480.8 621.5C468.6 624.8 455.9 619 450.3 607.7L431.7 570.1C421.4 568.7 411.3 565.9 401.8 562L366.8 585.3C356.3 592.3 342.4 590.9 333.5 582L314.3 562.8C305.4 553.9 304 540 311 529.5L334.3 494.5C332.4 489.8 330.7 484.9 329.3 479.8C327.9 474.7 327 469.6 326.3 464.6L288.6 446C277.3 440.4 271.6 427.6 274.8 415.5L281.8 389.3C285.1 377.2 296.4 369 309 369.8L350.9 372.5C357.2 364.4 364.5 356.9 372.8 350.5L370.1 308.7C369.3 296.1 377.5 284.7 389.6 281.5L415.8 274.5zM448.4 404C424.1 404 404.4 423.7 404.5 448.1C404.5 472.4 424.2 492 448.5 492C472.8 492 492.5 472.3 492.5 448C492.4 423.6 472.7 404 448.4 404zM224.9 18.5L251.1 25.5C263.2 28.8 271.4 40.2 270.6 52.7L267.9 94.5C276.2 100.9 283.5 108.3 289.8 116.5L331.8 113.8C344.3 113 355.7 121.2 359 133.3L366 159.5C369.2 171.6 363.5 184.4 352.2 190L314.5 208.6C313.8 213.7 312.8 218.8 311.5 223.8C310.2 228.8 308.4 233.8 306.5 238.5L329.8 273.5C336.8 284 335.4 297.9 326.5 306.8L307.3 326C298.4 334.9 284.5 336.3 274 329.3L239 306C229.5 309.9 219.4 312.7 209.1 314.1L190.5 351.7C184.9 363 172.1 368.7 160 365.5L133.8 358.5C121.6 355.2 113.5 343.8 114.3 331.3L117 289.4C108.7 283 101.4 275.6 95.1 267.4L53.1 270.1C40.6 270.9 29.2 262.7 25.9 250.6L18.9 224.4C15.7 212.3 21.4 199.5 32.7 193.9L70.4 175.3C71.1 170.2 72.1 165.2 73.4 160.1C74.8 155 76.4 150.1 78.4 145.4L55.1 110.5C48.1 100 49.5 86.1 58.4 77.2L77.6 58C86.5 49.1 100.4 47.7 110.9 54.7L145.9 78C155.4 74.1 165.5 71.3 175.8 69.9L194.4 32.3C200 21 212.7 15.3 224.9 18.5zM192.4 148C168.1 148 148.4 167.7 148.4 192C148.4 216.3 168.1 236 192.4 236C216.7 236 236.4 216.3 236.4 192C236.4 167.7 216.7 148 192.4 148z',
    description: 'Integración contable con bancos y ERPs habituales',
  },
];
