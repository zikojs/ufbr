// import './index.css'

import { createFileBasedRouter } from "ufbr/crank";

const pages = import.meta.glob('./pages/**/*.jsx')
const app = createFileBasedRouter(
    {
        pages,
        target : document.body,
    }
)
