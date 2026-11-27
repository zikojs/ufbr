import { createFileBasedRouter as createRouter } from "ziko/router";

export const renderer = async (target, component, props, wrapper, m) => {
    component = component?.default ?? component;

    if (!component) {
        throw new Error("Invalid Mithril component");
    }

    // Resolve function components with props
    if (typeof component === "function") {
        component = await component(props ?? {});
    }

    if (!component) {
        throw new Error("Mithril component returned an invalid value");
    }

    const page = {
        view: () => {
            let vnode = m(component, props ?? {});
            return wrapper ? wrapper(vnode) : vnode;
        }
    };

    m.mount(target, page);
};

export const createFileBasedRouter = ({
    pages,
    target,
    wrapper,
    extensions = [],
    m
}) => createRouter({
    pages,
    target,
    extensions: [...new Set(["js", "ts", ...extensions])],
    renderer: (target, component, props) =>
        renderer(target, component, props, wrapper, m)
});