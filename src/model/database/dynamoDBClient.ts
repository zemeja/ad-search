import * as AWS from "aws-sdk";
import { DocumentClient } from "aws-sdk/clients/dynamodb";

export default dynamoDBClient = (): DocumentClient => {
  return new AWS.DynamoDB.DocumentClient();
};