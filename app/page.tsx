"use client";

import React, { use } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [hover, setHover] = useState(false);
  const router = useRouter();
  
  const mouseHover = () => {
    setHover(true)
  }

  const hoverStyle = {
    backgroundColor: hover ? "#FBA384" : "coral",
  }

  const mouseLeave = () => {
    setHover(false)
  }

  const enter = () => {
    router.push('/tracker')
  }

  return (
    <>
      <div className="intro-container">
        <h1 className="intro">Welcome to Coinfetti</h1>
        <h2>Where we help you save today, so you can celebrate tomorrow</h2>
        <button className="introbutton" style={hoverStyle} onMouseOver={mouseHover} onMouseLeave={mouseLeave} onClick={enter}>Click here to get started</button>
      </div>
    </>
  );
}
