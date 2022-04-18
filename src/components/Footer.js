import React from "react";

export default function Footer() {
  return (
    <header className="bg-black">
      <footer>
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
          <p style={{ color: "white" }}>&copy;2022 Sara Binte Zinnat.</p>
        </div>
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
          <p style={{ color: "white" }}>Created with: <a href="http://git-scm.com/" style={{ color: "yellow" }}  target="_blank">
          git</a>, <a href="https://reactjs.org/" style={{ color: "yellow" }}  target="_blank">
          react</a>, <a href="https://www.sanity.io/" style={{ color: "yellow" }}  target="_blank">
          sanity.io</a> and <a href="https://atom.io/" style={{ color: "yellow" }}  target="_blank">atom</a></p>
        </div>
      </footer>
    </header>
  );
}
