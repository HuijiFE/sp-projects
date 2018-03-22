import * as anime from 'animejs';

const easing: string = 'easeInOutQuad';
const duration: number = 500;

/**
 * Component: MediaWrapper
 */
export default class MediaWrapper {
  private el: HTMLElement;
  private toggle: HTMLElement;
  private closeButton: HTMLElement | null;

  /**
   * Instance a new MediaWrapper component.
   * @param toggle Query selector string or a DOM for the toggle button.
   */
  public constructor(toggle: string | HTMLElement) {
    const toggleDom: HTMLElement | null =
      typeof toggle === 'string' ? document.querySelector(toggle) : toggle;

    if (!toggleDom) {
      throw Error(`The parameter toggle '${toggle}' is invalid.`);
    }

    if (!toggleDom.dataset.mediaWrapperTarget) {
      throw Error(
        'Missing data set mediaWrapperTarget, make sure you have set the "data-media-wrapper-target" attribute.'
      );
    }

    const dom: HTMLElement | null = document.querySelector(
      toggleDom.dataset.mediaWrapperTarget
    );

    if (!dom) {
      throw Error('The media wrapper target no found.');
    }

    this.el = dom;

    this.toggle = toggleDom;
    this.toggle.addEventListener('click', () => this.open());

    this.closeButton = dom.querySelector('.ylzt-media-wrapper_close-button');
    if (this.closeButton) {
      this.closeButton.addEventListener('click', () => this.close());
    }
  }

  public open(): void {
    anime({
      targets: this.el,
      easing,
      duration,
      opacity: 1,
      begin: () => (this.el.style.display = 'initial'),
    });
  }

  public close(): void {
    anime({
      targets: this.el,
      easing,
      duration,
      opacity: 0,
      complete: () => (this.el.style.display = 'none'),
    });
  }
}
