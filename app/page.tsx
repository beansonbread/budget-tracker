"use client";

import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [hover, setHover] = useState(false); 
  const [user, setUser] = useState("");
  const router = useRouter();

  
  const mouseHover = () => {
    setHover(true)
  }

  const hoverStyle = {
    backgroundColor: hover ? "#FBA384" : "coral", //if mouse hovering it will change the style to "#FBA384" otherwise itll make it coral
  }

  const mouseLeave = () => {
    setHover(false)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      alert("Enter your name");
      return;
    }
    localStorage.setItem("username", user);
    router.push('/tracker');
  } //this prevents from submitting and checks if user entered a name. if they did, it'll store the name as username in local storage to use in tracker page. when a name is entered, itll route the user ot the tracker page

  return (
    <>
      <div className="intro-container">
        <h1 className="intro">Welcome to Coinfetti</h1>
        <h2 style={{fontStyle: "italic"}}>We help you save today, so you can celebrate tomorrow</h2>
        <form onSubmit={handleSubmit} className="user">
        <label style={{marginTop: 20, marginBottom: 20}}>Let's start by entering your name</label>
        <input value={user} onChange={(e)=> setUser(e.target.value)} />
        <button className="introbutton" style={hoverStyle} onMouseOver={mouseHover} onMouseLeave={mouseLeave} type="submit">Click here to get started</button>
      </form>
      </div>
    </>
  );
}
