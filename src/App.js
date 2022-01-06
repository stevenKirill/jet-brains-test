import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Node from "./Components/Node/Node.js";
import json from './data/HelpTOC.json';
import "./App.css";

export const PagesContext = React.createContext();

function App() {
  const [data, setData] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    handleClick();
  }, []);

  async function handleClick() {
    setData(json);
  };

  if (data === null) {
    return (
      <img
        className="loader"
        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjI0IiBoZWlnaHQ9IjIwOSIgdmVyc2lvbj0iMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjMgMjhoMjAxdjEzSDIzem0wIDU2aDIwMXYxM0gyM3ptMC0yOGgxNzh2MTNIMjN6TTAgMGgyMDF2MTNIMHptMjMgMTQwaDIwMXYxM0gyM3ptMCA1NmgyMDF2MTNIMjN6bTAtMjhoMTc4djEzSDIzek0wIDExMmgyMDF2MTNIMHoiIGZpbGw9IiNFQkVCRUIiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg=="
      />
    );
  }

  const { pages, anchors } = data.entities;
  const topLevelIds = data.topLevelIds;

  return (
    <BrowserRouter>
      <div className="wrapper">
        <PagesContext.Provider value={{ pages, anchors, url, setUrl }}>
          <Node topLevelIds={topLevelIds} />
        </PagesContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
