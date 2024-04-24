import {
  GetObjectCommand,
  PutObjectCommand,
  S3Client
} from "@aws-sdk/client-s3";
import { env } from "./env";


async function main() {
  const s3Client = new S3Client({
    region: 'us-east-1',
    credentials: {
      accessKeyId: env.AWS_ACCESS_KEY_ID,
      secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
    },
  });


  // CREATE
  await s3Client.send(
    new PutObjectCommand({
      Bucket: "brasilapi-states-cache",
      Key: "SP.json",
      Body: `[{ nome: "Adamantina" }]`,
    })
  );
  console.log("Created with success! \n");

  // READ
  const storedFileInS3 = await s3Client.send(
    new GetObjectCommand({
      Bucket: "brasilapi-states-cache",
      Key: "SP.json",
    })
  );

  const rawData = await storedFileInS3.Body?.transformToString();
  console.log("[rawData]", rawData);
  const lastModified = storedFileInS3.LastModified; // UTC time
  console.log("[lastModified]", lastModified);
}
main();