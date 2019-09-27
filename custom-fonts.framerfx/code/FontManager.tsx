import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import { url } from "framer/resource";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Grand-Hotel;
    src: url(${url("fonts/GrandHotel-Regular.otf")}) format("opentype");
  }
  @font-face {
    font-family: Great-Vibes;
    src: url(${url("fonts/GreatVibes-Regular.otf")}) format("opentype");
  }
  @font-face {
    font-family: Roboto-Thin;
    src: url(${url("fonts/Roboto-Thin.otf")}) format("truetype");
  }
`;

const style: React.CSSProperties = {
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  color: "#8855FF",
  background: "transparent",
  overflow: "hidden"
};

// Define type of property
interface Props {
  text: string;
}

export class FontManager extends React.Component<Props> {
  // Set default properties
  static defaultProps = {
    text: "Hello World!"
  };

  // Items shown in property panel
  static propertyControls: PropertyControls = {
    text: { type: ControlType.String, title: "Text" }
  };

  render() {
    return (
      <div style={style}>
        <GlobalStyle />
      </div>
    );
  }
}
