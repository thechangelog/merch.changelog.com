# merch.changelog.com

## What is this?

This is the theme behind [merch.changelog.com](https://merch.changelog.com).

## Dependencies

- Theme Kit: https://shopify.dev/tools/theme-kit
- Gulp.js: https://gulpjs.com

## Building

You will need Gulp to build the CSS:

```
npm install --global gulp-cli
```

Followed by:

```
gulp sass
```

## Deploying

First, make sure you have the [Shopify CLI](https://shopify.dev/docs/api/shopify-cli) installed:

```
npm install -g @shopify/cli@latest
```

Push changes to Shopify via:

```
shopify theme push --store=changelog
```

## Config

We git ignore `config/settings_data.json` because this file is modified locally on Shopify when admins make changes in the Theme Editor. We do not ignore `config/settings_schema.json`, however, because it works in tandem with `{% schema %}` blocks to define available config settings in the Theme Editor.

## Code of Conduct

[Contributor Code of Conduct](https://changelog.com/coc). By participating in this project you agree to abide by its terms.
