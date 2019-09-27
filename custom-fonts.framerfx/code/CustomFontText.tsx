import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import { url } from "framer/resource";
import styled, { createGlobalStyle } from "styled-components";

// // Moved to FontManager for better performance
// const GlobalStyle = createGlobalStyle`
//   @font-face {
//     font-family: Grand-Hotel;
//     src: url(${url("fonts/GrandHotel-Regular.otf")}) format("opentype");
//   }
//   @font-face {
//     font-family: Great-Vibes;
//     src: url(${url("fonts/GreatVibes-Regular.otf")}) format("opentype");
//   }
//   @font-face {
//     font-family: Roboto-Thin;
//     src: url(${url("fonts/Roboto-Thin.otf")}) format("truetype");
//   }
// `;

const Container = styled.div`
  height: 100%;
  font-size: ${({ fontSize }) => fontSize}px;
  font-family: ${({ fontFamily }) => fontFamily};
  color: ${({ color }) => color};
  text-align: center;
`;

// Define type of property
interface Props {
  text: string;
  fontSize: number;
  fontFamily: "Grand-Hotel" | "Great-Vibes" | "Roboto-Thin";
  color: string;
}

export class CustomFontText extends React.Component<Props> {
  // Set default properties
  static defaultProps = {
    text: "Hello World!",
    fontSize: 16,
    fontFamily: "Grand-Hotel",
    color: "black"
  };

  // Items shown in property panel
  static propertyControls: PropertyControls = {
    text: { type: ControlType.String, title: "Text" },
    fontSize: { type: ControlType.Number, title: "Size" },
    fontFamily: {
      type: ControlType.Enum,
      title: "Font",
      options: ["Grand-Hotel", "Great-Vibes", "Roboto-Thin"]
    },
    color: { type: ControlType.Color, title: "Color" }
  };

  render() {
    return (
      <Container {...this.props}>
        {this.props.text}
        {/* <GlobalStyle /> */}
      </Container>
    );
  }
}
