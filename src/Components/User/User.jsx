import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();
  return <div className="m-4 text-orange-700 p-4 text-3xl">User : {id}</div>;
}

export default User;
