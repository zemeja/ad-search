import dynamoDBClient from "src/model/database/dynamoDBClient";
import AdvertRepository from "src/model/AdvertRepository/repository";

const advertPersister = new AdvertRepository(dynamoDBClient());

export default advertPersister;