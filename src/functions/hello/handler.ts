import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import {fetch} from "src/services/pageBodyFetcher";
import {extractAd} from "src/services/HTMLExtractor";
import advertPersister from 'src/services/AdvertPersister';
import schema from './schema';


const hello: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {

  const pageBody = await fetch(event.body.url);

  const ad = extractAd(pageBody);

  const savedAd = await advertPersister.createAdvert(ad);

  return formatJSONResponse({
    savedAd,
    event,
  });
};

export const main = middyfy(hello);
