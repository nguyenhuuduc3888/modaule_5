import {Injectable} from '@angular/core';
// @ts-ignore
import {addMonths, addYears, differenceInDays, differenceInMonths, differenceInYears} from 'date-fns';


@Injectable({
  providedIn: 'root'
})
export class DateUntilService {
  getDiffToNow(diff: string | number | Date): string {
    const result: string[] = [];
    const now = new Date();
    diff = new Date(diff);
    const years = differenceInYears(now, diff);
    if (years > 0) {
      result.push(`${years}years`);
      diff = addYears(diff, years);
    }
    const days = differenceInDays(now, diff);
    if (days > 0) {
      result.push(`${days}days`);
    }
    return result.join('');
  }

  constructor() {
  }
}
