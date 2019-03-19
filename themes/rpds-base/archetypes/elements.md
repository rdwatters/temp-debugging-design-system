---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
publishdate: {{ .Date }}
lastmod: {{ .Date }} 
description: "Enter a meta description of fewer than 180 characters for this element."
scssfile: "_{{.Name}}.scss"
menu: 
    main:
        parent: "{{ replace .Section "-" " " | title }}"
        weight:
tags: ["{{ replace .Name "-" " " | lower }}"]
aliases: []
removefromsearch: false
draft: false
weight:
---

<!-- Add any relevant description of the element here-->



