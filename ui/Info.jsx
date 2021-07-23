import React, { useState } from "react";
import { Mongo } from "meteor/mongo";
import { useTracker } from "meteor/react-meteor-data";
import { LinksCollection } from "../api/links";
// const LinksCollectionAsync = Mongo.createAsyncCollection("links");

export const Info = () => {
  // const [links, setLinks] = useState([]);
  // useTracker(() => {
  //   const handle = Meteor.subscribe("linksAsync");
  //   console.log(`handle ready`, handle.ready());
  //
  // LinksCollectionAsync.then(coll => {
  //   console.log(`coll.find`, coll.find);
  //
  //   const newLinks = coll.find().fetch();
  //   if (JSON.stringify(links) === JSON.stringify(newLinks)) {
  //     return;
  //   }
  //   setLinks(newLinks);
  // });
  // });
  const links = useTracker(() => {
    const handle = Meteor.subscribe("linksAsync");
    console.log(`handle ready`, handle.ready());

    return LinksCollection.find().fetch();
  });
  console.log(`links`, links);

  return (
    <div>
      <h2>Learn Meteor!</h2>
      <ul>
        {links.map(link => (
          <li key={link._id}>
            <a href={link.url} target="_blank">
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
