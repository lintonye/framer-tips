import * as React from "react"
import { PropertyControls, ControlType, addPropertyControls } from "framer"

const style: React.CSSProperties = {
    height: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    alignItems: "center",
    justifyItems: "center",
    textAlign: "center",
    color: "#8855FF",
    background: "rgba(136, 85, 255, 0.1)",
    overflow: "hidden",
}

// Overwrite the default "position: absolute"
function cloneElement(e) {
    return React.cloneElement(e, {
        style: { position: "relative", transform: "translate(0,0)" },
    })
}

export function MultipleChildrenWithTitles(props) {
    const { ceo, cto, coo } = props

    return (
        <div style={style}>
            <div>CEO</div>
            <div>CTO</div>
            <div>COO</div>
            <div>{ceo[0] ? cloneElement(ceo[0]) : "Who?"}</div>
            <div>{cto[0] ? cloneElement(cto[0]) : "Who?"}</div>
            <div>{coo[0] ? cloneElement(coo[0]) : "Who?"}</div>
        </div>
    )
}

addPropertyControls(MultipleChildrenWithTitles, {
    ceo: {
        type: ControlType.ComponentInstance,
        title: "CEO",
    },
    cto: {
        type: ControlType.ComponentInstance,
        title: "CTO",
    },
    coo: {
        type: ControlType.ComponentInstance,
        title: "COO",
    },
})
