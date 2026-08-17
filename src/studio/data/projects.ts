import restaurantHero from '../assets/restaurant-hero.jpg';
import restaurantBento from '../assets/restaurant-bento.jpg';
import restaurantTeaser from '../assets/restaurant-teaser.jpg';
import restaurantCta from '../assets/restaurant-cta.jpg';
import dentistTop from '../assets/dentist-top.jpg';
import dentistMid from '../assets/dentist-mid.jpg';
import dentistLow from '../assets/dentist-low.jpg';
import dentistDeep from '../assets/dentist-deep.jpg';
import barberHero from '../assets/barber-hero.jpg';
import barberServices from '../assets/barber-services.jpg';
import barberMenu from '../assets/barber-menu.jpg';
import barberCraft from '../assets/barber-craft.jpg';
import mawjHero from '../assets/mawj-hero.jpg';
import mawjDining from '../assets/mawj-dining.jpg';
import mawjCoast from '../assets/mawj-coast.jpg';
import mawjReserve from '../assets/mawj-reserve.jpg';
import rihlaHero from '../assets/rihla-hero.jpg';
import rihlaDestinations from '../assets/rihla-destinations.jpg';
import rihlaVoices from '../assets/rihla-voices.jpg';
import rihlaContact from '../assets/rihla-contact.jpg';

export interface ProjectImages {
  [id: string]: { src: string; caption: string }[];
}

/**
 * Screenshots per project id (text lives in the translations file).
 * The first image is the cover shown in the browser mockup.
 */
export const projectImages: ProjectImages = {
  'beit-al-sham': [
    { src: restaurantHero, caption: 'Cinematic landing — Umayyad courtyard hero, Arabic preloader, floating badges' },
    { src: restaurantBento, caption: 'Signature dishes — bento grid with custom photography and gold marquee' },
    { src: restaurantTeaser, caption: 'Story teaser — cream editorial band with parallax' },
    { src: restaurantCta, caption: 'Parallax quote band + quick reservation widget' },
  ],
  'stretton-dental': [
    { src: dentistTop, caption: 'Welcome hero — expert care, exceptional smiles' },
    { src: dentistMid, caption: 'Services & practice highlights' },
    { src: dentistLow, caption: 'Why choose us — trust building' },
    { src: dentistDeep, caption: 'Contact & appointment paths' },
  ],
  'crown-blade': [
    { src: barberHero, caption: 'Dark cinematic hero — staggered word reveal over the master’s chair' },
    { src: barberServices, caption: 'Three signature services with brass icons and honest prices' },
    { src: barberMenu, caption: 'Full price list — eight services with dotted leaders' },
    { src: barberCraft, caption: 'Craft band — parallax photo, counters and the since-2012 badge' },
  ],
  'mawj': [
    { src: mawjHero, caption: 'Editorial Riviera hero — cream canvas, brass accents, the sea beyond the pool' },
    { src: mawjDining, caption: 'Dining — a kitchen that cooks what the Mediterranean brings in each morning' },
    { src: mawjCoast, caption: 'The coast — Latakia’s shoreline with an animated route' },
    { src: mawjReserve, caption: 'Reserve — trilingual booking flow, EN · DE · AR' },
  ],
  'rihla': [
    { src: rihlaHero, caption: 'Cream-and-ember hero — a journey through time' },
    { src: rihlaDestinations, caption: 'Destinations — Syria’s cities as editorial stories' },
    { src: rihlaVoices, caption: 'Voices — travellers’ stories in their own words' },
    { src: rihlaContact, caption: 'Contact — plan your journey, Arabic RTL' },
  ],
};
