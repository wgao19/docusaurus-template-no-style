# Docusaurus Template No Style

🦖 Opinionated minimum style template for Docusaurus 2

The motivation of creating this template:

- to learn how Docusaurus 2 works
- to create a template with nearly no styling so that I can add my own styling without much hassle later on

## 💚 [>> DEMO >>](https://docusaurus-template-no-style.netlify.com/) 💚

## Using this template

```shell
$ npx @docusaurus/init@next init [your-project-name] https://github.com/wgao19/docusaurus-template-no-style.git
$ cd your-project-name
$ yarn start
```

## Overwriting styles for this template

Depending on how fine-grained you wish to overwrite the styles, you have a few options:

To modify the styling without changing the DOM structure of individual components, you may swizzle the `Layout` component and update the CSS there:

```shell
$ yarn swizzle @wgao19/docusaurus-theme-no-style Layout
```

This will copy the `Layout` component to your site's `src` directory. Restart your dev server, and then the site will be using the component in your code.

Most of the styles provided in this theme is inside the `Layout` component.

If you need to modify the DOM structure and / or styling for individual component, swizzle the corresponding component with the same command.

For list of components to swizzle, refer to the [theme](https://github.com/wgao19/docusaurus-theme-no-style/tree/master/src/theme).

## About this template

This template uses [@wgao19/docusaurus-theme-no-style](https://github.com/wgao19/docusaurus-theme-no-style) nearly directly.

Check out [Docusaurus 2](http://docusaurus-2.netlify.com/) docs for more information on developing with D2.

### Logo credit

Icons made by [Darius Dan](https://www.flaticon.com/authors/darius-dan) from [flaticon](https://www.flaticon.com/).
