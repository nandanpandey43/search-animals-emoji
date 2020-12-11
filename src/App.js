import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🐒": "Monkey",
  "🦍": "Gorilla",
  "🦊": "Fox",
  "🐺": "Wolf",
  "🦝": "Raccon",
  "🐅": "Tiger",
  "🐎": "Horse",

   /** add some more to show how the app now expands when there's new data */
};


const emojis = Object.keys(emojiDictionary);

export default function App() {

  const [emoji, setEmoji] = useState(""); /** concept 2 is useState */
  const [meaning, setMeaning] = useState("translation will appear here..");

  function changeHandler(event) {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);

    if (inputEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[inputEmoji]);
    } else {
      setMeaning("failure to recognise this emoji");
    }
  }

  function emojiClickHandler(inputEmoji) {
    setMeaning(emojiDictionary[inputEmoji]);
  }

  



  return (
    <div className="App">
      <h1>know the 🐻 <span style={{color: "blue"}}>Animals</span></h1>
      {/* <p style = {{padding: "1em"}}>Also you can search with animal name</p> */}
      
      <input
        onChange={changeHandler}
        value={emoji}
        placeholder={"Search your emoji"}
        style={{
          padding: "1em",
          minWidth: "80%"
        }}
      />

      <h2 style = {{paddingTop: "0.5em"}}> {emoji} </h2> {/** Concept 1: JSX */}
      <h3> {meaning} </h3> {/** how much part is re-rendered. */}
      {
        /** Bonus feature; if time permmits */
        /**
         * concepts to cover: mapping a list
         * click handler on list item
         */
        emojis.map((emoji) => (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
          >
            {" "}
            {emoji}{" "}
          </span>
        ))
      }
  
    </div>
  );
}
