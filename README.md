# docusaurus-plugin-hubspot
> Plugin to enable Hubspot with Docusaurus

## Installation

<details>
<summary>NPM</summary>
<p>

```bash
npm i docusaurus-plugin-hubspot
```

</p>
</details>

<details>
<summary>YARN</summary>
<p>

```bash
yarn add docusaurus-plugin-hubspot
```

</p>
</details>


``````

## Setup

Add to plugins in `docusaurus.config.js`:

```
{
  plugins: [
    'docusaurus-plugin-hotjar',
    ...
  ]
}
```

Add the hotjar configuration to `themeConfig` in the `docusaurus.config.js` file:

```
{
  themeConfig: {
    hotjar: {
      applicationId: HOTJAR_ID,
    },
    ...
  }
}
```

