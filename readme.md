### Learning Panda CSS

Read from the documentation in this order:

- (writing styles)[https://panda-css.com/docs/concepts/writing-styles]
- (combining styles)[https://panda-css.com/docs/concepts/merging-styles]
- (using CSS tokens)[https://panda-css.com/docs/theming/usage]
  - (available tokens to use)[https://panda-css.com/docs/customization/theme#tokens]
- (utilities and shorthands)[https://panda-css.com/docs/utilities/background]
- (conditional styles)[https://panda-css.com/docs/concepts/conditional-styles]

#### Notes on Responsive Design

By default Panda uses simple names for breakpoints: `sm`, `md`, `lg`, etc. This will be confusing in situations like:

```tsx
const $title = css({
	mt: "4",
	bg: "gray.2",
	md: { bg: "gray.3" },
})
```

In order to make it more clear use the `@` prefix for breakpoints: `"@md": {...}`:

```tsx
const $title = css({
	mt: "4",
	bg: "gray.2",
	"@md": { bg: "gray.3" },
})
```

The following breakpoints are defined:

```tsx
breakpoints: {
	"@xs": "420px",
	"@sm": "640px",
	"@md": "768px",
	"@lg": "1024px",
	"@xl": "1280px",
	"@xxl": "1440px",
	"@wide": "2560px",
}
```

Resources

- [screensiz.es](https://screensiz.es/) - a collection of screen sizes
