import { ContactDetails, Service } from '../models/models';

export const contactDetails: ContactDetails = {
  url: 'https://baliasociados.com',
  longName: 'Bali Asociados, S.L.',
  shortName: 'Bali Asociados',
  address1: 'C/ Modesto Lafuente 41, 2ª planta ',
  address2: '28003 Madrid',
  phone: '123 456 789',
  email: 'contacto@baliasociados.com',
  open: '9:00 a 18:00h lunes a viernes',
  cif: 'B84133586',
};

export const IMAGEPREURL = 'https://res.cloudinary.com/dnlceaase/image/upload/f_auto,q_auto';

export const services: Service[] = [
  {
    name: 'Contabilidad',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: '/v1760802190/bali/bali-asociados-presentacion-asesoria_ohtywl.jpg',
  },
  {
    name: 'Lorem ipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: '/v1760802190/bali/bali-asociados-presentacion-asesoria_ohtywl.jpg',
  },
  {
    name: 'Lorem ipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: '/v1760802190/bali/bali-asociados-presentacion-asesoria_ohtywl.jpg',
  },
];
