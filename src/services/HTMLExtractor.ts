import * as cheerio from 'cheerio';
import IAdvert from 'src/model/Advert';

export const extractAd = (html: string): IAdvert => {

  const $ = cheerio.load(html);

  const extractedTitle = $('h1.nadpisdetail').text();
  const extractedDescription = $('.popisdetail').text();
  let extractedId = $('.drobky b').text().replace(/[^0-9]/g,'');
  const now = new Date();

  // todo: extract price from taxt, handle price on demand, add createdAt datetime
  const advert: IAdvert = {
    id: extractedId,
    title : extractedTitle,
    description: extractedDescription,
    price: 0,
    createdAt: now.toISOString()
  }

  return advert
}
