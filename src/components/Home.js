import React, {useState} from "react";

export default function Home({ isSignedIn }) {
  const Redirect = useState()
  if (!isSignedIn) return <Redirect to="/login" />;

  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
}