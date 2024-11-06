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

Then ensure you have the most recent `config/settings_data.json` from Shopify's Theme Editor. If you do not, pushing your local `settings_data.json` will override any changes made there.

Push changes to Shopify via:

```
shopify theme push --store=changelog
```

If you want to get rid of this error message:

```
Failed to delete file "config/settings_data.json" from remote theme.
```

## Code of Conduct

[Contributor Code of Conduct](https://changelog.com/coc). By participating in this project you agree to abide by its terms.
