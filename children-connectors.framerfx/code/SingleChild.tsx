import * as React from "react"
import { PropertyControls, ControlType, addPropertyControls } from "framer"

const style: React.CSSProperties = {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "#8855FF",
    background: "rgba(136, 85, 255, 0.1)",
    overflow: "hidden",
}

export function SingleChild(props) {
    return <div style={style}>{props.children}</div>
}

addPropertyControls(SingleChild, {
    text: { type: ControlType.String, title: "Text" },
})
