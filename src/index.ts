/**
 * @author: duduluu
 */
import { now, today } from '@/common/util';

const main: HTMLElement | null = document.querySelector('.parcel-demo .main');

if (main) {
  const section: HTMLElement = document.createElement('section');
  const dateTime: HTMLElement = document.createElement('h2');
  section.appendChild(dateTime);
  main.appendChild(section);
  setInterval(() => {
    const time: Date = new Date();
    const text: string = `${time
      .toLocaleDateString('zh-CN')
      .split('/')
      .join('-')} ${time.toLocaleTimeString('zh-CN', { hour12: false })}`;

    if (dateTime.innerHTML !== text) {
      // tslint:disable-next-line:no-inner-html
      dateTime.innerHTML = text;
    }
  }, 100);
}
