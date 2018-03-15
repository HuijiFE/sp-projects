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
    const timeNow: Date = new Date();
    // tslint:disable-next-line:no-inner-html
    dateTime.innerHTML = `${timeNow
      .toLocaleDateString('zh-CN')
      .split('/')
      .join('-')} ${timeNow.toLocaleTimeString('zh-CN', { hour12: false })}`;
  }, 1000);
}
