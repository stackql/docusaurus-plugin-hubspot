# docusaurus-plugin-hubspot

Plugin for [Docusaurus](https://docusaurus.io/) to [install the HubSpot Tracking code](https://knowledge.hubspot.com/reports/install-the-hubspot-tracking-code). Allowing HubSpot to monitor your Docusaurus site traffic.

The following script tag is inserted into the head tag

```html
<!-- Start of HubSpot Embed Code -->
<script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/YOUR_HUB_ID.js"></script>
<!-- End of HubSpot Embed Code -->
```

## Installation

Install the package using your preferred package manager

### NPM

```bash
npm install --save docusaurus-plugin-hubspot
```

### Yarn

```bash
yarn add docusaurus-plugin-hubspot
```

```bash
pnpm add docusaurus-plugin-hubspot
```

## Configuration

| Name        | Type      | Default      | Description            |
| :---------: | :-------: | :----------: |:---------------------: |
| `hubId`     | `number`  | **Required** | [Hub ID](https://knowledge.hubspot.com/account-management/manage-multiple-hubspot-accounts#check-your-current-account) identifies your company's account |
| `async`     | `boolean` | `true`       | sets the async attribute on the script tag |
| `defer`     | `boolean` | `true`       | sets the defer attribute on the script tag |

### Example configuration

To configure the plugin add the plugins and options to `docusaurus.config.js`

```js
{
  plugins: [
    [
      'docusaurus-plugin-hubspot',
      {
        hubId: YOUR_HUB_ID,  
        async: true, 
        defer: true,
      }
    ],
    ...
  ]
}
```

## Troubleshooting

If you are experiencing issues refer to HubSpot Support article for "[Troubleshoot the HubSpot tracking code](https://knowledge.hubspot.com/reports/how-do-i-know-if-my-hubspot-tracking-code-is-working)."
