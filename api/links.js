import {Mongo} from 'meteor/mongo';

const {Collection, createAsyncCollection} = Mongo;

if (Meteor.isClient) {
  export const LinksCollection = new Collection('links');
} else {
  export const LinksCollectionAsync = createAsyncCollection('links');
}
