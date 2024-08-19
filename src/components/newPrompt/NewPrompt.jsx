import React, { useEffect, useRef } from "react";
import "./NewPrompt.css";
export default function NewPrompt() {

    const endRef = useRef(null);

    useEffect(() => {
      endRef.current.scrollIntoView({ behavior: "smooth" });
    }, []);
    
  return (
    <>
    <div className="endChat" ref={endRef}></div>
      <form className="newForm">
        <label htmlFor="file">
          <img src="/attachment.png" alt="file" />
        </label>
        <input id="file" type="file" multiple={false} hidden />
        <input type="text" placeholder="Ask anything...." />
        <button type="submit">
          <img src="/arrow.png" alt="" />
        </button>
      </form>
    </>
  );
}
