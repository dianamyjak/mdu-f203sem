"use strict"; // to enable strict mode and modern JavaScript functionality

async function fetchInstagramPosts(userName) {
  let url = `https://instagram.com/${userName}/?__a=1`;
  let response = await fetch(url); // fetch and wait the response
  let data = await response.json(); // read response body and wait for parsing the JSON
  console.log(data);
  // let posts = data.graphql.user.edge_owner_to_timeline_media.edges;
  // TODO: call appendPosts with ig posts
}

function appendPosts(posts) {
  // TODO: Append posts using a loop
}

fetchInstagramPosts("erhvervsakademiaarhus");