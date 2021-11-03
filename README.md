# docusaurus-plugin-hubspot
> Plugin to enable Hubspot with Docusaurus

## Installation

```npm i docusaurus-plugin-hotjar```

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

<details>
<summary>I could use some help...</summary>
<p>

```c#
public class Order
{
    public int OrderId { get; set; }
    public int CustomerId { get; set; }

    public List<int> Products { get; set; }
}
\```

</p>
</details>