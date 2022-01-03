import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";

const { createAsyncCollection } = Mongo;

export const linksCollection = Mongo.Collection.create("links");
async function insertLink({ title, url }) {
  console.log(`insertLink`);

  const promise = await linksCollection.insertAsync({
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
