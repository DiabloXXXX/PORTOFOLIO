declare module "lenis" {
    interface LenisOptions {
        duration?: number
        easing?: (t: number) => number
        lerp?: number
        orientation?: "vertical" | "horizontal"
        gestureOrientation?: "vertical" | "horizontal" | "both"
        smoothWheel?: boolean
        smoothTouch?: boolean
        touchMultiplier?: number
        wheelMultiplier?: number
        infinite?: boolean
        autoResize?: boolean
    }

    export default class Lenis {
        constructor(options?: LenisOptions)
        raf(time: number): void
        destroy(): void
        start(): void
        stop(): void
        scrollTo(
            target: string | HTMLElement | number,
            options?: { offset?: number; immediate?: boolean; duration?: number }
        ): void
    }
}
