---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
componentfile: "components/{{.Name}}.html"
aliases: []
removefromsearch: true
draft: false
comments: "Unlike the corresponding file for the component page, content/components/{{.Name}}.md, this file is just used to render a small html snippet, as well as a css link inside an iFrame so that the end user of the rendered site can change viewport widths and see the responsive design for an individual component. This why these pages are removed from search as well." 
---

<!-- You do not need to put content here. If you want to add content for a component page, use the corresponding markdown file inside content/components -->
