import * as anime from 'animejs';

const easing: string = 'easeInOutQuad';
const duration: number = 500;

/**
 * Component: Carousel
 */
export default class Gallery {
  private el: HTMLElement;

  private container: HTMLElement;
  private content: HTMLImageElement;

  private thumbnails: HTMLImageElement[];
  private selectedThumbnail: HTMLImageElement;

  private indicatorPrevious: HTMLElement | null;
  private indicatorNext: HTMLElement | null;

  private scollingStatus: boolean = false;

  private $selectedIndex: number = 0;
  public get selectedIndex(): number {
    return this.$selectedIndex;
  }
  public set selectedIndex(value: number) {
    if (this.scollingStatus || value === this.$selectedIndex) {
      return;
    }

    if (value < 0) {
      this.$selectedIndex = this.thumbnails.length - 1;
    } else if (value < this.thumbnails.length) {
      this.$selectedIndex = value;
    } else {
      this.$selectedIndex = 0;
    }
    this.select(this.$selectedIndex);
  }

  constructor(el: HTMLElement | string) {
    const dom: HTMLElement | null =
      typeof el === 'string' ? document.querySelector(el) : el;

    if (!dom) {
      throw Error(`The parameter el '${el}' is invalid.`);
    }

    this.el = dom;

    const containerDom: HTMLElement | null = this.el.querySelector(
      '.ylzt-gallery_container'
    );
    if (!containerDom) {
      throw Error('The container element for gallery no found.');
    }
    this.container = containerDom;

    this.content = document.createElement('img');
    this.content.className = 'ylzt-gallery_content';
    containerDom.appendChild(this.content);

    this.thumbnails = Array.from(
      this.el.querySelectorAll<HTMLImageElement>('.ylzt-gallery_thumbnail-content')
    );
    this.thumbnails.forEach((tb, index) => {
      tb.classList.remove('selected');
      tb.addEventListener('click', () => (this.selectedIndex = index));
    });
    if (this.thumbnails[1]) {
      this.$selectedIndex = 1;
      this.thumbnails[1].classList.add('selected');
      this.selectedThumbnail = this.thumbnails[1];
      this.content.src = this.thumbnails[1].src;
    }

    this.indicatorPrevious = this.el.querySelector('.ylzt-gallery_indicator-previous');
    if (this.indicatorPrevious) {
      this.indicatorPrevious.addEventListener('click', () => this.selectedIndex--);
    }

    this.indicatorNext = this.el.querySelector('.ylzt-gallery_indicator-next');
    if (this.indicatorNext) {
      this.indicatorNext.addEventListener('click', () => this.selectedIndex++);
    }

    setInterval(() => this.selectedIndex++, 3000);
  }

  private select(index: number): void {
    this.scollingStatus = true;

    this.selectedThumbnail.classList.remove('selected');
    this.selectedThumbnail = this.thumbnails[index];
    this.selectedThumbnail.classList.add('selected');

    const newContent: HTMLImageElement = document.createElement('img');
    newContent.className = 'ylzt-gallery_content';
    newContent.src = this.selectedThumbnail.src;

    this.container.insertBefore(newContent, this.content);
    anime({
      targets: this.content,
      easing,
      duration,
      opacity: 0,
      complete: () => {
        this.content.remove();
        this.content = newContent;
        this.scollingStatus = false;
      },
    });
  }
}
