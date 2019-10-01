import * as React from "react"
import { Override, Data, useInvertedScale } from "framer"

// Learn more: https://framer.com/docs/overrides/

const appState = Data({
    menuMode: "closed",
})

export function MenuBar(props): Override {
    return {
        onTap: () => {
            appState.menuMode = appState.menuMode === "open" ? "closed" : "open"
        },
    }
}

export function Icon(props): Override {
    return {
        animate: appState.menuMode,
        variants: {
            open: { rotate: 180 },
            closed: { rotate: 0 },
        },
    }
}

export function MenuContentFrame(props): Override {
    const { scaleY } = useInvertedScale()
    return {
        animate: appState.menuMode,
        originY: 0,
        variants: {
            open: { scaleY: 1 },
            closed: { scaleY: 0 },
        },
    }
}

export function MenuContent(props): Override {
    const { scaleY } = useInvertedScale()
    return {
        scaleY,
    }
}
