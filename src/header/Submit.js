import React from "react";
import submitIcon from "../assets/submit-icon.svg";
function App() {
  return (
    <div className="nav-item submit">
      <img src={submitIcon} alt="img" />
      <span>写文章</span>
    </div>
  );
}

export default App;
