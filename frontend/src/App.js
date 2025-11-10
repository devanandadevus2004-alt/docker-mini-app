import React, { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState("Loading...");

  useEffect(() => {
    fetch("https://docker-mini-app-3-r78m.onrender.com/api/hello")
      .then((res) => res.json())
      .then((data) => setMsg(data.message))
      .catch((err) => setMsg("Backend not reachable"));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🚀 Docker Mini App</h1>
      <h3>{msg}</h3>
    </div>
  );
}

export default App;