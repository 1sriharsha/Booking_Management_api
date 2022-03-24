import React from "react";
import ReactDOM from "react-dom";
import "./normalize.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";

// FontAwesome Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFilter,
  faPlus,
  faHouseUser,
  faBookmark,
  faLayerGroup,
  faBell,
  faGears,
  faPenToSquare,
  faReceipt,
  faHeadset,
  faLocationArrow,
  faEye,
  faEyeSlash,
  faArrowRightFromBracket,
  faUser,
  faClock,
  faBaseballBatBall,
  faMinus,
  faCircleInfo,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faFilter,
  faHouseUser,
  faBookmark,
  faLayerGroup,
  faBell,
  faGears,
  faPenToSquare,
  faReceipt,
  faHeadset,
  faLocationArrow,
  faEye,
  faEyeSlash,
  faArrowRightFromBracket,
  faUser,
  faClock,
  faBaseballBatBall,
  faPlus,
  faMinus,
  faCircleInfo,
  faBuilding
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
