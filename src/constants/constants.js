import { GiSaxophone } from 'react-icons/gi';
import { BsPersonSquare } from 'react-icons/bs';
import { LuPartyPopper } from 'react-icons/lu';
import { MdOutlineFoodBank } from 'react-icons/md';
import { MdFamilyRestroom } from 'react-icons/md';
import {
  FaGraduationCap,
  FaStreetView,
  FaHeart,
  FaBirthdayCake,
} from 'react-icons/fa';

import birthday from '../assets/birthday.jpg';
import dinner from '../assets/dinner.jpg';
import family from '../assets/family.jpg';
import graduation from '../assets/graduation.jpg';
import party from '../assets/party.jpg';
import performance from '../assets/performance.jpg';
import portrait from '../assets/portrait.jpg';
import street from '../assets/street.jpg';
import wedding from '../assets/wedding.jpg';

export const servicesData = [
  {
    icon: FaStreetView,
    title: 'Street Photography',
    content:
      'Authentic and raw street photography, capturing the essence of everyday life in vibrant, urban settings.',
    backgroundImage: street,
  },
  {
    icon: BsPersonSquare,
    title: 'Portraits',
    content:
      'Creating personalized, high-quality portraits that reflect individual personalities and style',
    backgroundImage: portrait,
  },
  {
    icon: LuPartyPopper,
    title: 'Parties',
    content:
      'From lively gatherings to casual hangouts, we bring the energy of your party to life through dynamic photography.',
    backgroundImage: party,
  },
  {
    icon: GiSaxophone,
    title: 'Live Performance',
    content:
      'Capturing the passion, energy, and emotion of live performances, whether on stage or in the studio.',
    backgroundImage: performance,
  },
  {
    icon: MdOutlineFoodBank,
    title: 'Dinner',
    content:
      'Elegant and intimate photos from dinner events, capturing the warmth of shared moments over a meal.',
    backgroundImage: dinner,
  },
  {
    icon: MdFamilyRestroom,
    title: 'Family Photos',
    content:
      ' Timeless family portraits that celebrate love, unity, and togetherness, perfect for any season.',
    backgroundImage: family,
  },
  {
    icon: FaGraduationCap,
    title: 'Graduation',
    content:
      ' Mark this milestone achievement with vibrant and celebratory graduation photos that will be cherished for years.',
    backgroundImage: graduation,
  },
  {
    icon: FaHeart,
    title: 'Wedding',
    content:
      ' Beautiful, heartfelt wedding photography that captures the love and emotions of your special day.',
    backgroundImage: wedding,
  },
  {
    icon: FaBirthdayCake,
    title: 'Birthdays',
    content:
      ' Capture every joyful moment of your special day with stunning birthday portraits and candid shots.',
    backgroundImage: birthday,
  },
];
