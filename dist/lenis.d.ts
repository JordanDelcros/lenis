export default class Lenis {
    constructor({ duration, easing, smooth, smoothTouch, touchMultiplier, direction, gestureDirection, wrapper, content, }?: {
        duration?: number;
        easing?: (t: any) => number;
        smooth?: boolean;
        smoothTouch?: boolean;
        touchMultiplier?: number;
        direction?: string;
        gestureDirection?: string;
        wrapper?: Window & typeof globalThis;
        content?: HTMLElement;
    });
    options: {
        duration: number;
        easing: (t: any) => number;
        smooth: boolean;
        smoothTouch: boolean;
        touchMultiplier: number;
        direction: string;
        gestureDirection: string;
        wrapper: Window & typeof globalThis;
        content: HTMLElement;
    };
    duration: number;
    easing: (t: any) => number;
    smooth: boolean;
    smoothTouch: boolean;
    touchMultiplier: number;
    direction: string;
    gestureDirection: string;
    wrapperNode: Window & typeof globalThis;
    contentNode: HTMLElement;
    wrapperHeight: any;
    wrapperWidth: any;
    wrapperObserver: ResizeObserver;
    contentHeight: number;
    contentWidth: number;
    contentObserver: ResizeObserver;
    targetScroll: any;
    scroll: any;
    lastScroll: any;
    animate: Animate;
    virtualScroll: any;
    get scrollProperty(): string;
    start(): void;
    stopped: boolean;
    stop(): void;
    destroy(): void;
    onWindowResize: () => void;
    onWrapperResize: ([entry]: [any]) => void;
    onContentResize: ([entry]: [any]) => void;
    get limit(): number;
    onVirtualScroll: ({ deltaY, deltaX, originalEvent: e }: {
        deltaY: any;
        deltaX: any;
        originalEvent: any;
    }) => void;
    raf(now: any): void;
    now: any;
    isScrolling: boolean;
    get velocity(): number;
    setScroll(value: any): void;
    onScroll: (e: any) => void;
    notify(): void;
    scrollTo(target: any, { offset, immediate, duration, easing, }?: {
        offset?: number;
        immediate?: boolean;
        duration?: number;
        easing?: (t: any) => number;
    }): void;
}
declare class Animate {
    to(target: any, { duration, easing, ...keys }?: {
        duration?: number;
        easing?: (t: any) => any;
    }): void;
    target: any;
    fromKeys: {};
    toKeys: {};
    keys: string[];
    duration: number;
    easing: (t: any) => any;
    currentTime: any;
    isRunning: boolean;
    stop(): void;
    raf(deltaTime: any): void;
    get progress(): number;
}
export {};
