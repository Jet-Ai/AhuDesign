import dictionary from './translations.json';
export type Locale = 'sk' | 'az' | 'en';
export function getLocale(segments?:string[]):Locale {return segments?.[0]==='az'?'az':segments?.[0]==='en'?'en':'sk'}
export function translate(locale:Locale,text:string):string {return (dictionary as Record<string,Record<Locale,string>>)[text]?.[locale] ?? text}
