import * as React from "react"
import { Override, useAnimation } from "framer"

// Learn more: https://framer.com/docs/overrides/

export function AnimateOnLoad1(props): Override {
    return {
        animate: { scale: 1.5 },
    }
}

export function AnimateOnLoad2(props): Override {
    const animControl = useAnimation()
    animControl.start({ scale: 1.5, rotate: 90 })
    return {
        animate: animControl,
    }
}

export function AnimateOnLoad1Delayed(props): Override {
    return {
        animate: { scale: 1.5 },
        transition: { delay: 1 },
    }
}

export function AnimateOnLoad2Delayed(props): Override {
    const animControl = useAnimation()
    animControl.start({ scale: 1.5, rotate: 90 })
    return {
        animate: animControl,
        transition: { delay: 1 },
    }
}
