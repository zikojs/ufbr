---
title: createFileBasedRouter
description: Create and configure a file-based router from your application's route modules.
---

`createFileBasedRouter` creates and initializes a file-based router from your application's page modules.

It uses the provided page modules to discover routes, resolve URL paths, and render the corresponding pages.

The router is configured through an options object passed to `createFileBasedRouter`.

## Usage

```ts
createFileBasedRouter({
    pages,
    target,
    base,
    lazy
});
```

## Parameters

| Option | Type | Description |
|---|---|---|
| `pages` | `Record<string, () => Promise<any>>` | Page modules, typically generated using `import.meta.glob()`. Object keys are used to derive file-based routes. |
| `target` | `HTMLElement \| Element` | DOM element where the router renders the current page. |
| `base` | `string` | Base path used to resolve application routes. |
| `lazy` | `boolean` | Enables or disables lazy loading of page modules. |

## Example

```js
import { createFileBasedRouter } from "ufbr";

createFileBasedRouter({
    pages: import.meta.glob("./pages/**/*.jsx"),
    target: document.getElementById("app"),
    base: "/",
    lazy: true
});
```

## Notes

- `pages` keys determine the routes according to UFBR's file-based routing conventions.
- `base` allows the application to be served from a subpath.
- `lazy` controls whether page modules are loaded lazily.