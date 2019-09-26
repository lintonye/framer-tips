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

export function MultipleChildren(props) {
    return (
        <div style={style}>
            {React.Children.map(props.children, (c: React.ReactElement<any>) =>
                // Overwrite the default "position: absolute"
                React.cloneElement(c, {
                    style: { position: "relative" },
                })
            )}
        </div>
    )
}

addPropertyControls(MultipleChildren, {
    children: {
        type: ControlType.Array,
        title: "Content",
        propertyControl: {
            type: ControlType.ComponentInstance,
            title: "Page",
        },
    },
})
