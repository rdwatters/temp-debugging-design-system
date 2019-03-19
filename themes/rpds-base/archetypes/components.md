---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
publishdate: {{ .Date }}
lastmod: {{ .Date }} 
description: "Enter a meta description for the {{ replace .Name "-" " " | title }} component of fewer than 200 characters that will be used for HTML meta and sharing the rendered page."
layout: "component"
componentfile: "components/{{.Name}}.html"
scssfile: "assets/scss/components/_{{.Name}}.scss"
jsmodule: "assets/scripts/modules/{{.Name}}.js"
maxwidth: "100%"
menu: 
    main:
        parent: "Components"
        weight:
tags: ["{{ replace .Name "-" " " | lower }}"]
aliases: []
removefromsearch: false
draft: false
weight:
commentsforauthors: "Use the maxwidth value to set a default maxwidth for the rendered component on the page. The rendering will use an iframe that pulls in the {{.Name}}.html component."
---

## Usage


### When to Use 

<!-- Add description of when it is appropriate to use this component here -->


### When not to Use 

<!-- Add description of when it is not appropriate to use this component here -->

## Developer Notes

<!-- Javascript notes can be imported directly from individual js module files using special delimiters -->

