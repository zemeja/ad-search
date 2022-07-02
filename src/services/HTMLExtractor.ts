import * as cheerio from 'cheerio';
import IAdvert from 'src/model/Advert';

export const extractAd = (html: string): IAdvert => {

  const $ = cheerio.load(html)

  const extractedTitle = $('h1.nadpisdetail').text()
  const extractedDescription = $('.popisdetail').text()

  const advert: IAdvert = {
    title : extractedTitle,
    description: extractedDescription,
    price: 0,
    createdAt: ''
  }

  return advert
}
