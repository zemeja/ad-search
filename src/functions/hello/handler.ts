import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import {fetch} from "src/services/pageBodyFetcher";
import {extractAd} from "src/services/HTMLExtractor";

import schema from './schema';


const hello: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {

  const pageBody = await fetch(event.body.name);

  const ad = extractAd(pageBody);

  return formatJSONResponse({
    ad,
    event,
  });
};

export const main = middyfy(hello);
