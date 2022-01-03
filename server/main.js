import { Meteor } from "meteor/meteor";

import {linksCollection } from '/api/linksInsert';


const collection = new Mongo.Collection('myCollection');
const collAsync = Mongo.Collection.create('myCollection');
console.log('test 1');

new Mongo.Collection('myCollection2');
new Mongo.Collection('myCollection2');
console.log('test 2');

Mongo.Collection.create('myCollection3');
Mongo.Collection.create('myCollection3');
console.log('test 3');

Meteor.publish("linksAsync", async () => {
  const linksCursor = linksCollection.find();
  const links= await linksCursor.fetchAsync();
  // console.log(`links`, links);

  return linksCursor;
});

Meteor.startup(async () => {
  // const Links = await LinksCollectionAsync;
  // console.log(`Links`, Links);
  // console.log(`Links.find().count()`, Links.find().count());
  // console.log(`Links.find()`, Links.find().fetch());

  // console.log(`LinksOldCollection.find()`, LinksOldCollection.find().fetch().length);
  // console.log(`(await LinksOldCollection).find()`, (await LinksOldCollection).find().fetch().length);

  // if (Links.find().count()) {
  //   return;
  // }

  // await insertLink({
  //   title: "Do the Tutorial",
  //   url: "https://www.meteor.com/tutorials/react/creating-an-app"
  // });
});
