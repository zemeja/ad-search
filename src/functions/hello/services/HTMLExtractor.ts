import * as cheerio from 'cheerio';

export const extractAd = (html: string): string => {

  const $ = cheerio.load(html)

  return $('h1.nadpisdetail').text()
}
