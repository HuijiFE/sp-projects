/**
 * entry
 */

import MediaWrapper from '@/components/MediaWrapper';
import Pilot from '@/components/Pilot';
import Sections from '@/components/Sections';
import Slide from '@/components/Slide';

const sections: Sections = new Sections('#sections');
const mediaWrapperPlayer: MediaWrapper = new MediaWrapper('#play-video-button');
const slide: Slide = new Slide('#section-2-slide');
const pilot: Pilot = new Pilot('#section-3-pilot');
