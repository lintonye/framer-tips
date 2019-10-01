import * as React from "react";
import { PropertyControls, ControlType, Size } from "framer";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-auto-rows: 100px;
  grid-gap: 8px;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
`;

const Item = styled.div`
  div {
    position: relative !important;
    width: 100% !important;
    height: 100% !important;
  }
`;

// Define type of property
interface Props {
  text: string;
}

export class FluidGrid extends React.Component<Props> {
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
      <Container {...this.props}>
        {Array(10)
          .fill(0)
          .map(_ => (
            <Item>{this.props.children}</Item>
          ))}
      </Container>
    );
  }
}
