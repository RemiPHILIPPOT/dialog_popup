import React, { useState } from "react";
import Modal from "./lib/components/Modal";
export default function App() {
  const [show, setShow] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    className: "App"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setShow(true)
  }, "Show Modal"), /*#__PURE__*/React.createElement(Modal, {
    title: "My Modal",
    onValidate: () => setShow(false),
    show: show
  }, "This is modal body"));
}