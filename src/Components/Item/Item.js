import React, { useState, useContext } from "react";
import cn from "classnames";
import "./Item.css";
import Node from "../Node/Node.js";
import { PagesContext } from "../../App";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
import arrow from './arrow.svg';
function Item({ pageId, location }) {
  const { pages, anchors, url, setUrl } = useContext(PagesContext);
  const [isOpened, setIsOpened] = useState(false);
  function handleClick(event) {
    setIsOpened(prev => !prev);
    if (pages[pageId].url) setUrl(pages[pageId].url);
  }
  const currentPage = pages[pageId];
  console.log(currentPage);
  const titleClassName = cn("title", {
    titleWithArrow: currentPage.pages
  });
  return (
    <li className="list-item">
      <div
        style={{
          backgroundColor: url === pages[pageId].url ? "#F0F0F0" : "inherit"
        }}
      >
        <img src = {arrow} onClick={ handleClick } className = 'titleWithArrow' style={{
            transform: isOpened && currentPage.pages ? 'initial' : 'rotate(180deg)'
            }}/>
        {pages[pageId].url ? (
          <NavLink
            to={`/${pages[pageId].url}`}
            className={titleClassName}
            activeStyle={{ fontWeight: 1000, color: "red" }}
          >
            <h4 className="element">
              {pages[pageId].title}
            </h4>
          </NavLink>
        ) : (
          <h4 className="element">
            {pages[pageId].title}
          </h4>
        )}
        {url === pages[pageId].url && currentPage.anchors ? (
          <ul className="anchors">
            {currentPage.anchors.map(anchorId => {
              const pathName = `/${anchors[anchorId].url}${
                anchors[anchorId].anchor
              }`;
              return (
                <li>
                  <NavLink
                    to={pathName}
                    className="anchor"
                    style={{
                      color:
                        location.pathname + location.hash == pathName
                          ? 'red'
                          : 'black'
                    }}
                  >
                    {anchors[anchorId].title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        ) : null}
      </div>
      {isOpened && currentPage.pages ? (
        <Node topLevelIds={currentPage.pages} />
      ) : null}
    </li>
  );
}
export default withRouter(Item);
