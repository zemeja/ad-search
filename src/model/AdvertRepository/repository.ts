import { DocumentClient } from "aws-sdk/clients/dynamodb";
import IAdvert from 'src/model/Advert';

export default class AdvertRepository {
    private TableName: string = "Adverts"

    constructor (private docClient: DocumentClient) {

    }

    async createAdvert(advert: IAdvert): Promise<IAdvert> {
        await this.docClient.put({
            TableName: this.TableName,
            Item: advert
        }).promise()
        return advert as IAdvert;
    }
}