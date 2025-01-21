# docusaurus-plugin-hubspot
>
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

## Setup

Add to `plugins` in `docusaurus.config.js`:

```js
{
  plugins: [
    [
      'docusaurus-plugin-hubspot',
      {
        accountId: HUBSPOT_ACCOUNT_ID,
        async: false, // OPTIONAL: sets the async attribute on the script tag, defaults to false
        defer: false, // OPTIONAL: sets the defer attribute on the script tag, defaults to false     
      }
    ],
    ...
  ]
}
```
