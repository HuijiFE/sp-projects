import * as anime from 'animejs';

const easing: string = 'easeInOutQuad';
const duration: number = 500;

/**
 * Component: Pilot
 */
export default class Pilot {
  private statusScrolling: boolean = false;

  private el: HTMLElement;
  private images: HTMLElement[];
  private labels: HTMLElement[];
  private icons: HTMLElement[];

  private $selectedIndex: number = 0;
  public get selectedIndex(): number {
    return this.$selectedIndex;
  }
  public set selectedIndex(value: number) {
    if (!this.statusScrolling && -1) {
      if (value < 0) {
        this.$selectedIndex = this.images.length - 1;
      } else if (value < this.images.length) {
        this.$selectedIndex = value;
      } else {
        this.$selectedIndex = 0;
      }
      this.select(this.$selectedIndex);
    }
  }

  public constructor(el: string | HTMLElement) {
    const dom: HTMLElement | null =
      typeof el === 'string' ? document.querySelector(el) : el;

    if (!dom) {
      throw Error(`The parameter el '${el}' is invalid.`);
    }

    this.el = dom;
    this.el.addEventListener('wheel', (event: WheelEvent) => {
      this.selectedIndex += event.deltaY > 0 ? 1 : -1;
      event.stopPropagation();
    });

    this.images = Array.from(dom.querySelectorAll('.poe-pilot_image'));
    this.labels = Array.from(dom.querySelectorAll('.poe-pilot_label'));
    this.icons = Array.from(dom.querySelectorAll('.poe-pilot_icon'));
    this.icons.forEach((icon, index) =>
      icon.addEventListener('click', () => (this.selectedIndex = index))
    );

    this.selectedIndex++;
  }

  private select(targetIndex: number): void {
    if (this.statusScrolling) {
      return;
    }
    this.statusScrolling = true;

    this.images.forEach((image, index) => {
      anime({
        targets: image,
        duration,
        easing,
        opacity: index === targetIndex ? 1 : 0,
      });
      anime({
        targets: this.labels[index],
        duration,
        easing,
        opacity: index === targetIndex ? 1 : 0,
      });
      anime({
        targets: this.icons[index],
        duration,
        easing,
        begin: () =>
          (this.icons[index].className = `poe-pilot_icon ${
            index === targetIndex ? 'active' : ''
          }`),
      });
    });

    anime({
      targets: this.el,
      duration,
      complete: () => (this.statusScrolling = false),
    });
  }
}
