# Design System Scripts

The script files in this directory are not used for frontend development for new projects and are therefore not included in the webpack configuration. Instead, the files are concatenated, minified, and fingerprinted using Hugo's native asset pipeline. You can see an example of these scripts and how they're used in Hugo in the `layouts/partials/scripts.html` file.

`*.js` inside of "design-system-scripts" are combined into a single `design-system-script.min.js`, which is called on every page of the Design System website *except* those pages created under page-templates.
