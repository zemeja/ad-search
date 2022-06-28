import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import {fetch} from "@functions/hello/services/pageBodyFetcher";
import {extractAd} from "@functions/hello/services/HTMLExtractor";

import schema from './schema';


const hello: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {

  const pageBody = await fetch(event.body.name);

  const ad = extractAd(pageBody);
  
  return formatJSONResponse({
    message: ad,
    event,
  });
};

export const main = middyfy(hello);
