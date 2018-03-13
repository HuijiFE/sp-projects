/**
 * @author: duduluu
 */
import { now, today } from '@/common/util';

const main: HTMLElement | null = document.querySelector('.parcel-demo .main');

if (main) {
  main.style.textAlign = 'center';
}

// tslint:disable-next-line:no-console
console.log(`Today is ${today()}, Now is ${now()}.`);
