import {Meteor} from 'meteor/meteor';
import {LinksCollectionAsync} from "../api/links";

async function insertLink({title, url}) {
  const promise = (await LinksCollectionAsync).insert({title, url, createdAt: new Date()});
  console.log(`promise`, promise);
}

Meteor.methods({
  async insert(arg) {
    console.log('insert')
    console.trace();
    await insertLink(arg);
  },
  async insertAsync(arg) {
    console.log(`insertAsync`);

    console.trace();
    await insertLink(arg);
  }
})

Meteor.publish('links', async () => (await LinksCollectionAsync).find());
// Meteor.publish('linksAsync', async () => LinksCollection.find());

Meteor.startup(async () => {
  const Links = await LinksCollectionAsync;
  console.log(`Links`, Links);
  console.log(`Links.find().count()`, Links.find().count());
  console.log(`Links.find()`, Links.find().fetch());

  // If the Links collection is empty, add some data.
  if (Links.find().count() === 0) {
    await insertLink({
      title: 'Do the Tutorial',
      url: 'https://www.meteor.com/tutorials/react/creating-an-app'
    });

    await insertLink({
      title: 'Follow the Guide',
      url: 'http://guide.meteor.com'
    });

    await insertLink({
      title: 'Read the Docs',
      url: 'https://docs.meteor.com'
    });

    await insertLink({
      title: 'Discussions',
      url: 'https://forums.meteor.com'
    });
  }
});
