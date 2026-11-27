import type { Component, Vnode } from "mithril";

export declare function createFileBasedRouter(options: {
    pages: Record<
        string,
        () => Promise<{
            default: Component;
        }>
    >;
    target?: HTMLElement;
    wrapper?: (component: Component) => Component;
    extensions?: string[];
    m: {
        render: (target: HTMLElement, vnode: any) => void;
    };
}): void;