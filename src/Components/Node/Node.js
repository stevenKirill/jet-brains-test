import React, { useState } from "react";
import "./Node.css";
import Item from "../Item/Item.js";

export default function Node({ topLevelIds }) {
  return (
    <ul className="node">
      {topLevelIds.map(pageId => (
        <Item pageId={pageId} />
      ))}
    </ul>
  );
}
