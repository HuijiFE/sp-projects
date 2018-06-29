/**
 * @author: duduluu
 */
import { now, today } from './common/util';

const main = document.querySelector('.parcel-demo .main');

if (main) {
  const section = document.createElement('section');
  const dateTime = document.createElement('h2');
  section.appendChild(dateTime);
  main.appendChild(section);
  setInterval(() => {
    const time = new Date();
    const text = `${time
      .toLocaleDateString('zh-CN')
      .split('/')
      .join('-')} ${time.toLocaleTimeString('zh-CN', { hour12: false })}`;

    if (dateTime.innerHTML !== text) {
      // tslint:disable-next-line:no-inner-html
      dateTime.innerHTML = text;
    }
  }, 100);
}
