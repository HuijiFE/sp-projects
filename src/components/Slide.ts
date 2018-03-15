import * as anime from 'animejs';

const easing: string = 'easeInOutQuad';
const offset: number = 0;
const duration: number = 500;
const zIndexBase: number = 500;

/**
 * Component: Slide
 */
export default class Slide {
  private statusScrolling: boolean = false;

  private el: HTMLElement;
  private items: HTMLElement[];
  private contents: HTMLElement[];
  private indicatorPrevious: HTMLElement | null;
  private indicatorNext: HTMLElement | null;

  private $frontIndex: number = 0;
  public get frontIndex(): number {
    return this.$frontIndex;
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
    this.el.addEventListener('wheel', (event: WheelEvent) => {
      this.scroll(event.deltaY > 0 ? 1 : -1);
      event.stopPropagation();
    });

    const itemsWrapper: HTMLElement | null = dom.querySelector(
      '.poe-slide_items-wrapper'
    );
    if (itemsWrapper) {
      // tslint:disable-next-line:no-inner-html
      itemsWrapper.innerHTML = `
${itemsWrapper.innerHTML}
${itemsWrapper.innerHTML}
${itemsWrapper.innerHTML}
      `;
      this.items = <HTMLElement[]>Array.from(itemsWrapper.children);
      this.$frontIndex = Math.floor(this.items.length / 2);
    }
    const contentWrapper: HTMLElement | null = dom.querySelector(
      '.poe-slide_content-wrapper'
    );
    if (contentWrapper) {
      // tslint:disable-next-line:no-inner-html
      contentWrapper.innerHTML = `
${contentWrapper.innerHTML}
${contentWrapper.innerHTML}
${contentWrapper.innerHTML}
      `;

      this.contents = Array.from(dom.querySelectorAll('.poe-slide_content'));
    }

    this.indicatorPrevious = dom.querySelector('.poe-slide_indicator-previous');
    if (this.indicatorPrevious) {
      this.indicatorPrevious.addEventListener('click', () => this.scroll(-1));
    }

    this.indicatorNext = dom.querySelector('.poe-slide_indicator-next');
    if (this.indicatorNext) {
      this.indicatorNext.addEventListener('click', () => this.scroll(1));
    }

    this.scroll(0);
  }

  private item(index: number): HTMLElement {
    if (index < 0) {
      return this.items[this.items.length + index];
    } else if (index < this.items.length) {
      return this.items[index];
    } else {
      return this.items[index - this.items.length];
    }
  }

  private allotItems(direction: number): void {
    if (direction > 0) {
      const boy: HTMLElement | undefined = this.items.shift();
      if (boy) {
        this.items.push(boy);
      }
      const girl: HTMLElement | undefined = this.contents.shift();
      if (girl) {
        this.contents.push(girl);
      }
    }
    if (direction < 0) {
      const boy: HTMLElement | undefined = this.items.pop();
      if (boy) {
        this.items.unshift(boy);
      }
      const girl: HTMLElement | undefined = this.contents.pop();
      if (girl) {
        this.contents.unshift(girl);
      }
    }
  }

  private scroll(direction: number): void {
    if (this.statusScrolling) {
      return;
    }
    this.statusScrolling = true;

    this.allotItems(direction);

    this.items.forEach((item, index) => {
      let translateX: number = 0;
      let scale: number = 1;
      let zIndex: number = zIndexBase;
      let opacity: number | { value: number }[] = 1;

      if (index === this.frontIndex) {
        zIndex = zIndexBase + 18;
      } else if (index - this.frontIndex === -1) {
        translateX = -200;
        scale = 0.8;
        zIndex = zIndexBase + 12;
      } else if (index - this.frontIndex === 1) {
        translateX = 200;
        scale = 0.8;
        zIndex = zIndexBase + 12;
      } else if (index - this.frontIndex === -2) {
        translateX = -350;
        scale = 0.6;
        zIndex = zIndexBase + 6;
      } else if (index - this.frontIndex === 2) {
        translateX = 350;
        scale = 0.6;
        zIndex = zIndexBase + 6;
      } else if (index - this.frontIndex <= -3) {
        translateX = -400;
        scale = 0.5;
        opacity = 0;
      } else if (index - this.frontIndex >= 3) {
        translateX = 400;
        scale = 0.5;
        opacity = 0;
      }

      anime({
        targets: item,
        easing,
        offset,
        duration,
        opacity,
        translateX,
        scale,
        zIndex,
        // complete: () => console.log(index),
      });
    });

    this.contents.forEach((content, index) =>
      anime({
        targets: content,
        duration,
        offset,
        opacity: index === this.frontIndex ? 1 : 0,
      })
    );

    anime({
      targets: this.el,
      duration,
      offset,
      complete: () => {
        this.statusScrolling = false;
      },
    });
  }
}
