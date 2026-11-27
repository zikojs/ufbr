import { createFileBasedRouter } from "ufbr/mithril";
import m from 'mithril'

const pages = import.meta.glob('./pages/**/*.js')
const app = createFileBasedRouter(
    {
        pages,
        target : document.body,
        m
    }
)
