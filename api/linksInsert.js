import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";

const { createAsyncCollection } = Mongo;

export const linksConnector = createAsyncCollection("links");
async function insertLink({ title, url }) {
  console.log(`insertLink`);

  const promise = await (await linksConnector).insertAsync({
    title,
    url,
    createdAt: new Date()
  });
  console.log(`promise`, promise);
}

Meteor.methods({
  async insert(arg) {
    console.log("insert");
    console.trace();
    await insertLink(arg);
  },
  async insertAsync(arg) {
    console.log(`insertAsync`);

    console.trace();
    await insertLink(arg);
  }
});
