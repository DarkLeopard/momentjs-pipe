import {Pipe, PipeTransform} from '@angular/core';
declare const moment;

/**
 * Moment JS must be connected in angular.json:
 *    "scripts": [ "node_modules/moment/min/moment-with-locales.js" ]
 *
 * Locales can be set in main.ts generally:
 *    declare const moment;
 *    moment.locale(lang);
 *
 *    lang like a 'en'
 *    if using angular translate:
 *    lang = TranslateService.prototype.getBrowserLang()
 */


@Pipe({
  name: 'momentPipe'
})
export class MomentPipe implements PipeTransform {
  transform(value: Date | any /** any = moment*/, ...args: any[]): any {
    let [format] = args;
    return moment(value).format(format);
  }
}
