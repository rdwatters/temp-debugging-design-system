# Change Log

## 0.5.2

- Updated `rpds-cli.sh` and `README.md` to reference new VSTS repo where project will live permanently

## 0.5.1

- Improved CLI
    - `help`/`-h` (command quick reference)
    - `version`/`-v` 
- Add auto-generation of JavaScript documentation in module files using special delimiters (`/*@@`, `@@*/`) [#10](https://github.com/rdwatters/design-system-starter-kit/issues/10)
    - Bug Fix ([#11](https://github.com/rdwatters/design-system-starter-kit/issues/11), [8fd0097](https://github.com/rdwatters/design-system-starter-kit/commit/8fd00978464304fd72ac8f6f4e6cab5ac896ebaa))

## 0.5.0

- Add automatic favicon generation. [61d6c73](https://github.com/rdwatters/design-system-starter-kit/commit/61d6c734fb9a5dd075efb06f7a7a5a564efa46a6)
- Add automatic web manifest generation. [61d6c73](https://github.com/rdwatters/design-system-starter-kit/commit/61d6c734fb9a5dd075efb06f7a7a5a564efa46a6)
- Improve `rename-component` to remove existing calls to `{{ partial "<component-name>" . }}` within existing page templates. [507c5ad](https://github.com/rdwatters/design-system-starter-kit/commit/507c5ad405796231f0ec6eea3a7faac64d226433)
- Upgrade Webpack to 4.16.3 and add source mapping of modules for local dev. [4f56961](https://github.com/rdwatters/design-system-starter-kit/commit/4f56961df31374130f4e8a9dcd366092d6a051dd)
  
## 0.4.1

- Add uniform `rename-*` command for elements, components, and page templates.
    - Page templates: [cdbe626](https://github.com/rdwatters/design-system-starter-kit/commit/cdbe6268d9e7090d94375da8307308cde8a85186)
    - Components: [181b508](https://github.com/rdwatters/design-system-starter-kit/commit/181b508e3dfa26e31602cce7b3d33f6eb775557f)

## 0.4

- Add `rename-elements` command. [9c0fa19](https://github.com/rdwatters/design-system-starter-kit/commit/9c0fa1994163e360d449ff6affaa746e1d867a4c)
