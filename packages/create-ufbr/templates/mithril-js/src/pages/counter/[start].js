import m from "mithril";

export default function Counter({start = 10} = {}){
    return  {
    count: start,
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
    }
    
};

// export default Counter;