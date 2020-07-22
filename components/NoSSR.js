import React from "react";
const isServer = () => typeof window === `undefined`;

const NoSSR = (props) =>
  isServer() ? <></> : <React.Fragment>{props.children}</React.Fragment>;


  export default NoSSR;
