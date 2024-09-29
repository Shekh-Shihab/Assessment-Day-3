import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [authLink, setAuthLink] = useState("");
  const [twitterMethod, setTwitterMethod] = useState(false)
  const navigate = useNavigate();
  const signInWithTwitter = async () => {
    try {
      const response = await fetch("http://localhost:4000/getAuthLink");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      response.json().then((data) => {
        console.log(data);
        setAuthLink(data.url);
        setTwitterMethod(true);
      });
    } catch (error) {
      console.error("Error fetching auth link:", error);
    }
  };
  
  return (
    <>
    <h1>Choose a Sign in Method</h1>
    <div>
      <button onClick={signInWithTwitter}>Twitter</button>
    </div>
    <div>
    {twitterMethod && <button
        onClick={(event) => {
          event.preventDefault();
          window.open(authLink, "_blank");
        }}
      >
        Sign in with Twitter
      </button>}
    </div>
    </>
  );
};

export default Login;
