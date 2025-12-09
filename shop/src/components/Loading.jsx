import React from "react";

function Loading({ message = "Loading..." }) {
  return (
    <div className="loading-center">
      <div style={{textAlign:"center"}}>
        <div className="spinner" />
        <div style={{marginTop:8, color:"#666"}}>{message}</div>
      </div>
    </div>
  );
}

export default Loading;