import { Meteor } from "meteor/meteor";
import {Mongo} from 'meteor/mongo';

import {linksConnector } from '/api/linksInsert';


// Meteor.publish("links", async () => (await LinksCollectionAsync).find());
Meteor.publish("linksAsync", async () => {
  const coll = await linksConnector;
  console.log(`coll.findAsync`, coll.findAsync);

  const links = await coll.findAsync();
  console.log(`links`, links.fetch());

  return links;
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
