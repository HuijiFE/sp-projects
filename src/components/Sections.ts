import * as anime from 'animejs';

const easing: string = 'easeInOutQuad';

/**
 * Component: Section
 */
export default class Sections {
  private statusScrolling: boolean = false;

  private el: HTMLElement;
  private items: HTMLElement[];
  private indicators: HTMLElement[];

  private $selectedIndex: number = 0;
  public get selectedIndex(): number {
    return this.$selectedIndex;
  }
  public set selectedIndex(value: number) {
    if (!this.statusScrolling && -1 < value && value < this.items.length) {
      this.$selectedIndex = value;
      this.scroll(this.$selectedIndex);
    }
  }

  /**
   * Instance a new Sections component.
   * @param el Query selector string or a DOM.
   */
  public constructor(el: string | HTMLElement) {
    const dom: HTMLElement | null =
      typeof el === 'string' ? document.querySelector(el) : el;

    if (!dom) {
      throw Error(`The parameter el '${el}' is invalid.`);
    }

    this.el = dom;
    this.el.addEventListener(
      'wheel',
      (event: WheelEvent) => (this.selectedIndex += event.deltaY > 0 ? 1 : -1)
    );

    this.items = Array.from(dom.querySelectorAll('.ylzt-sections_item'));

    this.indicators = Array.from(dom.querySelectorAll('.ylzt-sections_indicator'));
    this.indicators.forEach((item, index) =>
      item.addEventListener('click', () => this.selectedIndex++)
    );
  }

  private scroll(targetIndex: number): void {
    this.statusScrolling = true;
    anime({
      targets: this.items,
      translateY: `${targetIndex * -100}%`,
      duration: 640,
      easing,
      complete: () => (this.statusScrolling = false),
    });
  }
}
