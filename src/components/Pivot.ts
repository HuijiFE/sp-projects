/**
 * Component: Pivot
 */

export default class Pivot {
  private el: HTMLElement;

  private scrollingStatus: boolean = false;
  private $selectedIndex: number = 0;
  public get selectedIndex(): number {
    return this.$selectedIndex;
  }
  public set selectedIndex(value: number) {
    if (this.scrollingStatus || value === this.$selectedIndex) {
      return;
    }

    const lastIndex: number = this.$selectedIndex;

    if (value < 0) {
      this.$selectedIndex = this.avatars.length - 1;
    } else if (value < this.avatars.length) {
      this.$selectedIndex = value;
    } else {
      this.$selectedIndex = 0;
    }

    this.select(lastIndex, this.$selectedIndex);
  }

  private avatars: HTMLImageElement[];
  private contents: HTMLElement[];
  private images: HTMLElement[];

  constructor(el: HTMLElement | string) {
    const dom: HTMLElement | null =
      typeof el === 'string' ? document.querySelector(el) : el;

    if (!dom) {
      throw Error(`The parameter el '${el}' is invalid.`);
    }

    this.el = dom;

    this.avatars = Array.from(this.el.querySelectorAll('.ylzt-pivot_avatar'));
    this.contents = Array.from(this.el.querySelectorAll('.ylzt-pivot_content'));
    this.images = Array.from(this.el.querySelectorAll('.ylzt-pivot_image-container'));

    this.avatars.forEach((av, index) =>
      av.addEventListener('click', () => (this.selectedIndex = index))
    );

    setInterval(() => this.selectedIndex++, 3000);
  }

  private select(lastIndex: number, index: number): void {
    this.avatars[lastIndex].classList.remove('selected');
    this.contents[lastIndex].classList.remove('selected');
    this.images[lastIndex].classList.remove('selected');

    this.avatars[this.selectedIndex].classList.add('selected');
    this.contents[this.selectedIndex].classList.add('selected');
    this.images[this.selectedIndex].classList.add('selected');
  }
}
