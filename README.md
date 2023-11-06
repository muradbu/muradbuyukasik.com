# muradbuyukasik.com

Welcome to my personal site.

I've built this site as an effort to learn htmx and Go. The goal is to build a site with no help from big frameworks and keep JavaScript to a minimum.

## Developing

### TailwindCSS

This project uses TailwindCSS without Node.js.

You need to download their binary executable from their [Releases](https://github.com/tailwindlabs/tailwindcss/releases/tag/v3.3.5).

E.g. if you've downloaded it to `bin/tailwindcss`, run the CLI in watch mode like this:

```bash
bin/tailwindcss -i public/assets/css/input.css -o public/assets/css/output.css --watch
```

### Templ

I'm writing reusable components with [Templ](https://templ.guide/). Follow their [installation instructions](https://templ.guide/quick-start/installation) to get their CLI, so you can write and compile components yourself with: `templ generate --watch`

### Dev Server

Since I'm deploying this to Vercel (for now), you need to install Vercel CLI with npm (or download their standalone executable). Run the dev server with `vercel dev`.

## Deploying

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fmuradbu%2Fmuradbuyukasik.com&project-name=muradbuyukasik-com&repository-name=muradbuyukasik-com&demo-title=Murad's%20Homepage&demo-description=Built%20with%20htmx%20%26%20Go%2C%20deployed%20on%20Vercel%20for%20free.&demo-url=https%3A%2F%2Fmuradbuyukasik.com)
