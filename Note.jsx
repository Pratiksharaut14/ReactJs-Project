import React from "react";

function Note() {
  return (
    <div>
      <div className="note">
        <h1>HTML</h1>
        <p>
          HTML is the standard markup language for Web pages.With HTML you can
          create your own Website. HTML describes the structure of a Web page.
          HTML consists of a series of elements.HTML elements tell the browser
          how to display the content.
        </p>
      </div>
      <div className="note">
        <h1>CSS</h1>
        <p>
          CSS is the language we use to style an HTML document. CSS stands for
          Cascading Style Sheets CSS describes how HTML elements are to be
          displayed on screen, paper, or in other media CSS saves a lot of work.
        </p>
      </div>

      <div className="note">
        <h1>REACT</h1>
        <p>
          React makes it painless to create interactive UIs. Design simple views
          for each state in your application, and React will efficiently update
          and render just the right components when your data changes.
        </p>
      </div>
    </div>
  );
}

export default Note;
