---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
publishdate: {{ .Date }}
lastmod: {{ .Date }} 
description: "Enter a description of fewer than 200 characters for page meta and page lead paragraph."
menu: 
    main:
        parent: "{{.Section | humanize | title}}"
        weight:
tags: ["{{ replace .Name "-" " " | lower }}"]
aliases: []
removefromsearch: false
draft: false
weight:
---



