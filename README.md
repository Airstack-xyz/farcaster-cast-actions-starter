# ☀️ GM

A Farcaster [Cast Actions](https://warpcast.com/~/add-cast-action?actionType=post&name=GM&icon=sun&postUrl=https%3A%2F%2Fgm-fc.vercel.app%2Fapi%2Fgm) starter template built with [Airstack Frog Recipes](https://docs.airstack.xyz/airstack-docs-and-faqs/frames/airstack-frog-recipes-and-middleware).

## Prerequisites

- [Airstack API key](https://docs.airstack.xyz/airstack-docs-and-faqs/get-started/get-api-key)
- [Vercel KV DB](https://vercel.com/docs/storage/vercel-kv/quickstart#create-a-kv-database)

## Deployment

First, install all the dependencies:

```sh
npm i
```

Build your project:

```sh
npm run build
```

And setup your project by deploying on Vercel:

```sh
npm run deploy
```

Once you have your project setup, you can go to https://vercel.com to create a [Vercel KV](https://vercel.com/docs/storage/vercel-kv/quickstart#create-a-kv-database) instance under your project.

Then, also add the [Airstack API key](https://docs.airstack.xyz/airstack-docs-and-faqs/get-started/get-api-key) to your project's environment variable:

```
AIRSTACK_API_KEY=xxx
```

Access the GM cast actions from the `https://<VERCEL-SUBDOMAIN>.vercel.app/api/gm` endpoint.
