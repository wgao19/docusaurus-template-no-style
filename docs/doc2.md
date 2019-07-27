---
id: doc2
title: Docusaurus Theme No Style
sidebar_label: Docusaurus Theme No Style
---

This theme is a trim down from [@docusaurus/theme-classic](https://github.com/facebook/docusaurus/tree/master/packages/docusaurus-theme-classic) of [Docusaurus 2](http://docusaurus-2.netlify.com/) to contain only _opinionated minimum styles_:

- all css selectors are using only semantic html tags with roles, no class names used
- docs and blog page layout with grid with 2 side sections and 1 main in middle
- accessory sections have paddings with a fixed value 1rem

## Overwriting styles for this theme

Depending on how fine-grained you wish to overwrite the styles, you have a few options:

To modify the styling without changing the DOM structure of individual components, you may swizzle the `Layout` component and update the CSS there:

```shell
$ yarn swizzle docusaurus-theme-no-style Layout
```

This will copy the `Layout` component to your site's `src` directory. Restart your dev server, and then the site will be using the component in your code.

Most of the styles provided in this theme is inside the `Layout` component.

If you need to modify the DOM structure and / or styling for individual component, swizzle the corresponding component with the same command.

To see the list of components provided by this theme, refer [here](./src/theme/).
