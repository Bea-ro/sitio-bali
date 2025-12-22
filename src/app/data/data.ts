import {
  ContactDetails,
  Customer,
  Member,
  Paragraph,
  ReferenceLink,
  Result,
  Service,
} from '../models/models';

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
    icon: 'M256 128C256 110.3 270.3 96 288 96L352 96C369.7 96 384 110.3 384 128L384 192C384 209.7 369.7 224 352 224L344 224L344 288L464 288C503.8 288 536 320.2 536 360L536 416L544 416C561.7 416 576 430.3 576 448L576 512C576 529.7 561.7 544 544 544L480 544C462.3 544 448 529.7 448 512L448 448C448 430.3 462.3 416 480 416L488 416L488 360C488 346.7 477.3 336 464 336L344 336L344 416L352 416C369.7 416 384 430.3 384 448L384 512C384 529.7 369.7 544 352 544L288 544C270.3 544 256 529.7 256 512L256 448C256 430.3 270.3 416 288 416L296 416L296 336L176 336C162.7 336 152 346.7 152 360L152 416L160 416C177.7 416 192 430.3 192 448L192 512C192 529.7 177.7 544 160 544L96 544C78.3 544 64 529.7 64 512L64 448C64 430.3 78.3 416 96 416L104 416L104 360C104 320.2 136.2 288 176 288L296 288L296 224L288 224C270.3 224 256 209.7 256 192L256 128z',
  },
  {
    name: 'Santiago Arellano',
    position: 'DPO e INTERNACIONALES',
    image: '/v1760802190/bali/bali-asociados-presentacion-asesoria_ohtywl.jpg',
    icon: 'M119.7 263.7L150.6 294.6C156.6 300.6 164.7 304 173.2 304L194.7 304C203.2 304 211.3 307.4 217.3 313.4L246.6 342.7C252.6 348.7 256 356.8 256 365.3L256 402.8C256 411.3 259.4 419.4 265.4 425.4L278.7 438.7C284.7 444.7 288.1 452.8 288.1 461.3L288.1 480C288.1 497.7 302.4 512 320.1 512C337.8 512 352.1 497.7 352.1 480L352.1 477.3C352.1 468.8 355.5 460.7 361.5 454.7L406.8 409.4C412.8 403.4 416.2 395.3 416.2 386.8L416.2 352.1C416.2 334.4 401.9 320.1 384.2 320.1L301.5 320.1C293 320.1 284.9 316.7 278.9 310.7L262.9 294.7C258.7 290.5 256.3 284.7 256.3 278.7C256.3 266.2 266.4 256.1 278.9 256.1L313.6 256.1C326.1 256.1 336.2 246 336.2 233.5C336.2 227.5 333.8 221.7 329.6 217.5L309.9 197.8C306 194 304 189.1 304 184C304 178.9 306 174 309.7 170.3L327 153C332.8 147.2 336.1 139.3 336.1 131.1C336.1 123.9 333.7 117.4 329.7 112.2C326.5 112.1 323.3 112 320.1 112C224.7 112 144.4 176.2 119.8 263.7zM528 320C528 285.4 519.6 252.8 504.6 224.2C498.2 225.1 491.9 228.1 486.7 233.3L473.3 246.7C467.3 252.7 463.9 260.8 463.9 269.3L463.9 304C463.9 321.7 478.2 336 495.9 336L520 336C522.5 336 525 335.7 527.3 335.2C527.7 330.2 527.8 325.1 527.8 320zM64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320z',
  },
  {
    name: 'Lorena Pérez',
    position: 'Administración',
    image: '/v1760802190/bali/bali-asociados-presentacion-asesoria_ohtywl.jpg',
    icon: 'M129.5 464L179.5 304L558.9 304L508.9 464L129.5 464zM320.2 512L509 512C530 512 548.6 498.4 554.8 478.3L604.8 318.3C614.5 287.4 591.4 256 559 256L179.6 256C158.6 256 140 269.6 133.8 289.7L112.2 358.4L112.2 160C112.2 151.2 119.4 144 128.2 144L266.9 144C270.4 144 273.7 145.1 276.5 147.2L314.9 176C328.7 186.4 345.6 192 362.9 192L480.2 192C489 192 496.2 199.2 496.2 208L544.2 208C544.2 172.7 515.5 144 480.2 144L362.9 144C356 144 349.2 141.8 343.7 137.6L305.3 108.8C294.2 100.5 280.8 96 266.9 96L128.2 96C92.9 96 64.2 124.7 64.2 160L64.2 448C64.2 483.3 92.9 512 128.2 512L320.2 512z',
  },
  {
    name: 'Inmaculada Romero',
    position: 'Responsable Área Laboral',
    image: '/v1760802190/bali/bali-asociados-presentacion-asesoria_ohtywl.jpg',
    icon: 'M264 112L376 112C380.4 112 384 115.6 384 120L384 160L256 160L256 120C256 115.6 259.6 112 264 112zM208 120L208 160L128 160C92.7 160 64 188.7 64 224L64 320L576 320L576 224C576 188.7 547.3 160 512 160L432 160L432 120C432 89.1 406.9 64 376 64L264 64C233.1 64 208 89.1 208 120zM576 368L384 368L384 384C384 401.7 369.7 416 352 416L288 416C270.3 416 256 401.7 256 384L256 368L64 368L64 480C64 515.3 92.7 544 128 544L512 544C547.3 544 576 515.3 576 480L576 368z',
  },
  {
    name: 'Mercedes Sánchez',
    position: 'Departamento Laboral',
    image: '/v1760802190/bali/bali-asociados-presentacion-asesoria_ohtywl.jpg',
    icon: 'M264 112L376 112C380.4 112 384 115.6 384 120L384 160L256 160L256 120C256 115.6 259.6 112 264 112zM208 120L208 160L128 160C92.7 160 64 188.7 64 224L64 320L576 320L576 224C576 188.7 547.3 160 512 160L432 160L432 120C432 89.1 406.9 64 376 64L264 64C233.1 64 208 89.1 208 120zM576 368L384 368L384 384C384 401.7 369.7 416 352 416L288 416C270.3 416 256 401.7 256 384L256 368L64 368L64 480C64 515.3 92.7 544 128 544L512 544C547.3 544 576 515.3 576 480L576 368z',
  },
  {
    name: 'Belén García',
    position: 'Responsable Área Contable',
    image: '/v1760802190/bali/bali-asociados-presentacion-asesoria_ohtywl.jpg',
    icon: 'M192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 128C512 92.7 483.3 64 448 64L192 64zM224 128L416 128C433.7 128 448 142.3 448 160L448 192C448 209.7 433.7 224 416 224L224 224C206.3 224 192 209.7 192 192L192 160C192 142.3 206.3 128 224 128zM240 296C240 309.3 229.3 320 216 320C202.7 320 192 309.3 192 296C192 282.7 202.7 272 216 272C229.3 272 240 282.7 240 296zM320 320C306.7 320 296 309.3 296 296C296 282.7 306.7 272 320 272C333.3 272 344 282.7 344 296C344 309.3 333.3 320 320 320zM448 296C448 309.3 437.3 320 424 320C410.7 320 400 309.3 400 296C400 282.7 410.7 272 424 272C437.3 272 448 282.7 448 296zM216 416C202.7 416 192 405.3 192 392C192 378.7 202.7 368 216 368C229.3 368 240 378.7 240 392C240 405.3 229.3 416 216 416zM344 392C344 405.3 333.3 416 320 416C306.7 416 296 405.3 296 392C296 378.7 306.7 368 320 368C333.3 368 344 378.7 344 392zM424 416C410.7 416 400 405.3 400 392C400 378.7 410.7 368 424 368C437.3 368 448 378.7 448 392C448 405.3 437.3 416 424 416zM192 488C192 474.7 202.7 464 216 464L328 464C341.3 464 352 474.7 352 488C352 501.3 341.3 512 328 512L216 512C202.7 512 192 501.3 192 488zM424 464C437.3 464 448 474.7 448 488C448 501.3 437.3 512 424 512C410.7 512 400 501.3 400 488C400 474.7 410.7 464 424 464z',
  },
  {
    name: 'Álvaro Tejero',
    position: 'Departamento Contable',
    image: '/v1760802190/bali/bali-asociados-presentacion-asesoria_ohtywl.jpg',
    icon: 'M192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 128C512 92.7 483.3 64 448 64L192 64zM224 128L416 128C433.7 128 448 142.3 448 160L448 192C448 209.7 433.7 224 416 224L224 224C206.3 224 192 209.7 192 192L192 160C192 142.3 206.3 128 224 128zM240 296C240 309.3 229.3 320 216 320C202.7 320 192 309.3 192 296C192 282.7 202.7 272 216 272C229.3 272 240 282.7 240 296zM320 320C306.7 320 296 309.3 296 296C296 282.7 306.7 272 320 272C333.3 272 344 282.7 344 296C344 309.3 333.3 320 320 320zM448 296C448 309.3 437.3 320 424 320C410.7 320 400 309.3 400 296C400 282.7 410.7 272 424 272C437.3 272 448 282.7 448 296zM216 416C202.7 416 192 405.3 192 392C192 378.7 202.7 368 216 368C229.3 368 240 378.7 240 392C240 405.3 229.3 416 216 416zM344 392C344 405.3 333.3 416 320 416C306.7 416 296 405.3 296 392C296 378.7 306.7 368 320 368C333.3 368 344 378.7 344 392zM424 416C410.7 416 400 405.3 400 392C400 378.7 410.7 368 424 368C437.3 368 448 378.7 448 392C448 405.3 437.3 416 424 416zM192 488C192 474.7 202.7 464 216 464L328 464C341.3 464 352 474.7 352 488C352 501.3 341.3 512 328 512L216 512C202.7 512 192 501.3 192 488zM424 464C437.3 464 448 474.7 448 488C448 501.3 437.3 512 424 512C410.7 512 400 501.3 400 488C400 474.7 410.7 464 424 464z',
  },
  {
    name: 'Marta García',
    position: 'Departamento Contable',
    image: '/v1760802190/bali/bali-asociados-presentacion-asesoria_ohtywl.jpg',
    icon: 'M192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 128C512 92.7 483.3 64 448 64L192 64zM224 128L416 128C433.7 128 448 142.3 448 160L448 192C448 209.7 433.7 224 416 224L224 224C206.3 224 192 209.7 192 192L192 160C192 142.3 206.3 128 224 128zM240 296C240 309.3 229.3 320 216 320C202.7 320 192 309.3 192 296C192 282.7 202.7 272 216 272C229.3 272 240 282.7 240 296zM320 320C306.7 320 296 309.3 296 296C296 282.7 306.7 272 320 272C333.3 272 344 282.7 344 296C344 309.3 333.3 320 320 320zM448 296C448 309.3 437.3 320 424 320C410.7 320 400 309.3 400 296C400 282.7 410.7 272 424 272C437.3 272 448 282.7 448 296zM216 416C202.7 416 192 405.3 192 392C192 378.7 202.7 368 216 368C229.3 368 240 378.7 240 392C240 405.3 229.3 416 216 416zM344 392C344 405.3 333.3 416 320 416C306.7 416 296 405.3 296 392C296 378.7 306.7 368 320 368C333.3 368 344 378.7 344 392zM424 416C410.7 416 400 405.3 400 392C400 378.7 410.7 368 424 368C437.3 368 448 378.7 448 392C448 405.3 437.3 416 424 416zM192 488C192 474.7 202.7 464 216 464L328 464C341.3 464 352 474.7 352 488C352 501.3 341.3 512 328 512L216 512C202.7 512 192 501.3 192 488zM424 464C437.3 464 448 474.7 448 488C448 501.3 437.3 512 424 512C410.7 512 400 501.3 400 488C400 474.7 410.7 464 424 464z',
  },
  {
    name: 'Carolina Pérez',
    position: 'Departamento Contable',
    image: '/v1760802190/bali/bali-asociados-presentacion-asesoria_ohtywl.jpg',
    icon: 'M192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 128C512 92.7 483.3 64 448 64L192 64zM224 128L416 128C433.7 128 448 142.3 448 160L448 192C448 209.7 433.7 224 416 224L224 224C206.3 224 192 209.7 192 192L192 160C192 142.3 206.3 128 224 128zM240 296C240 309.3 229.3 320 216 320C202.7 320 192 309.3 192 296C192 282.7 202.7 272 216 272C229.3 272 240 282.7 240 296zM320 320C306.7 320 296 309.3 296 296C296 282.7 306.7 272 320 272C333.3 272 344 282.7 344 296C344 309.3 333.3 320 320 320zM448 296C448 309.3 437.3 320 424 320C410.7 320 400 309.3 400 296C400 282.7 410.7 272 424 272C437.3 272 448 282.7 448 296zM216 416C202.7 416 192 405.3 192 392C192 378.7 202.7 368 216 368C229.3 368 240 378.7 240 392C240 405.3 229.3 416 216 416zM344 392C344 405.3 333.3 416 320 416C306.7 416 296 405.3 296 392C296 378.7 306.7 368 320 368C333.3 368 344 378.7 344 392zM424 416C410.7 416 400 405.3 400 392C400 378.7 410.7 368 424 368C437.3 368 448 378.7 448 392C448 405.3 437.3 416 424 416zM192 488C192 474.7 202.7 464 216 464L328 464C341.3 464 352 474.7 352 488C352 501.3 341.3 512 328 512L216 512C202.7 512 192 501.3 192 488zM424 464C437.3 464 448 474.7 448 488C448 501.3 437.3 512 424 512C410.7 512 400 501.3 400 488C400 474.7 410.7 464 424 464z',
  },
  {
    name: 'Antonio Cabrejas',
    position: 'Responsable Área Fiscal',
    image: '/v1760802190/bali/bali-asociados-presentacion-asesoria_ohtywl.jpg',
    icon: 'M302.7 69.1C313.2 62.3 326.8 62.3 337.3 69.1L561.3 213.1C573.2 220.8 578.7 235.4 574.7 249C570.7 262.6 558.2 272 544 272L512 272L512 480L563.2 518.4C571.3 524.4 576 533.9 576 544C576 561.7 561.7 576 544 576L96 576C78.3 576 64 561.7 64 544C64 533.9 68.7 524.4 76.8 518.4L128 480L128 480L128 272L96 272C81.8 272 69.3 262.6 65.3 249C61.3 235.4 66.8 220.7 78.7 213.1L302.7 69.1zM400 272L400 480L464 480L464 272L400 272zM288 480L352 480L352 272L288 272L288 480zM176 272L176 480L240 480L240 272L176 272z',
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

export const referenceLinks: ReferenceLink[] = [
  {
    name: 'Agencia Tributaria',
    url: 'https://www.agenciatributaria.es/',
    icon: '/logos-links-interes/aeat.webp',
  },
  {
    name: 'Seguridad Social',
    url: 'https://www.seg-social.es/wps/portal/wss/internet/Inicio',
    icon: '/logos-links-interes/ss.webp',
  },
  {
    name: 'SEPE',
    url: 'https://www.sepe.es/HomeSepe/',
    icon: '/logos-links-interes/sepe.webp',
  },
  {
    name: 'Registradores España',
    url: 'https://www.registradores.org/',
    icon: '/logos-links-interes/registradores.webp',
  },
  {
    name: 'Comunidad de Madrid',
    url: 'https://www.comunidad.madrid/',
    icon: '/logos-links-interes/cm.webp',
  },
  {
    name: 'Ayuntamiento Madrid',
    url: 'https://www.madrid.es/portal/site/munimadrid',
    icon: '/logos-links-interes/ayuntamiento.webp',
  },
  {
    name: 'FNMT',
    url: 'https://www.sede.fnmt.gob.es/es/certificados/persona-fisica',
    icon: '/logos-links-interes/fnmt.webp',
  },
  {
    name: 'RMC',
    url: 'http://www.rmc.es/Deno_solicitud.aspx',
    icon: '/logos-links-interes/rmc.webp',
  },
  {
    name: 'Ipyme',
    url: 'http://www.ipyme.org/es-ES/creaciondelaempresa/Paginas/TramitesAdministrativos.aspx',
    icon: '/logos-links-interes/ipyme.webp',
  },
  {
    name: 'Calendarios Laborales',
    url: 'https://www.calendarioslaborales.com/calendario-laboral-madrid-2021.htm',
    icon: '/logos-links-interes/calendarios.webp',
  },
  {
    name: 'Servicios CCOO',
    url: 'https://www.ccoo-servicios.es/convenios/pagweb/1376.html',
    icon: '/logos-links-interes/ccoo.webp',
  },
  {
    name: 'Procedimientos VIES',
    url: 'https://www.agenciatributaria.gob.es/AEAT.sede/tramitacion/ZZ09.shtml',
    icon: '/logos-links-interes/vies.webp',
  },
];
