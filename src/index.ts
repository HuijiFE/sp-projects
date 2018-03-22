/**
 * entry
 */

import MediaWrapper from '@/components/MediaWrapper';
import Sections from '@/components/Sections';
import Gallery from '@/components/Gallery';
import Pivot from '@/components/Pivot';

const sections: Sections = new Sections('#sections');
const mediaWrapperPlayer: MediaWrapper = new MediaWrapper('#play-video-button');

const section2gallery: Gallery = new Gallery('#section-2-gallery');

const section3pivot: Pivot = new Pivot('#section-3-pivot');

const section4gallery: Gallery = new Gallery('#section-5-gallery');
