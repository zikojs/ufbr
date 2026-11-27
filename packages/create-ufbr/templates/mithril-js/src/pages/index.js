import m from "mithril";

const Counter = {
    count: 0,

    view() {
        return m("main", [
            m("h1", `Count: ${this.count}`),

            m("button", {
                onclick: () => this.count++
            }, "Increment"),

            m("button", {
                onclick: () => this.count--
            }, "Decrement")
        ]);
    }
};

export default Counter;