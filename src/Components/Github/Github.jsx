import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  return (
    <div>
      <div>Foolowers : {data.followers}</div>
      <div>
        <img src={data.avatar_url} width={200} alt="" />
      </div>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const res = await fetch("https://api.github.com/users/AsadRahimLodhi");
  return res.json();
};
