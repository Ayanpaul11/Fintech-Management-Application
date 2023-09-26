import React from "react";
import abclogo from "./../images/abclogo.svg";
function Logos() {
  return (
    <div className="abc">
      <div className="abclogo">
        <img src={abclogo} width="150px" height="80px" />
        <p id="Text">Invoice List</p>
      </div>
      <img
        src="https://mms.businesswire.com/media/20210503005090/en/875206/23/Highradius-logo_1_%282%29.jpg"
        alt="Logo"
        width="150px"
        height="80px"
      ></img>
    </div>
  );
}

export default Logos;
