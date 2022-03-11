import React from "react";

export default function User({ userData }) {
  const img = userData.avatar_url;
  const name = userData.name;
  const id = userData.id;
  const repos = userData.public_repos;
  const url = userData.html_url;
  const following = userData.following;
  const followers = userData.followers;
  const createdAt = userData.created_at;
  return (
    <div className="user">
      <img src={img} alt={`${name}-img`} />
      <div className="user-name">
        <h2> {name} </h2> <p>id: {id} </p>
      </div>
      <p> Location : {userData.location} </p>
      <p> Repositories count: {repos} </p>
      <p>
        Profile URL:{" "}
        <a href={url} target="_blank" rel="noreferrer">
          {" "}
          {url}
        </a>
      </p>
      <div className="flw">
        <p> Following: {following} </p>
        <p> Followers: {followers} </p>
      </div>
      <p> User Since: {createdAt?.split("T")[0]} </p>
    </div>
  );
}
