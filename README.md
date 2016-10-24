### 🎨 Dynamic accent color (primary) with plain CSS

This explores the ways to use a dynamic accent color (primary color) in a HTML app without preprocessors, without inline styles and without the upcoming yet poorly supported `CSS variables`. 


* [`currentColor`](https://rawgit.com/zdanowiczkonrad/dynamic-accent/master/01-currentcolor.html)
* [`classnames`](https://rawgit.com/zdanowiczkonrad/dynamic-accent/master/02-classnames.html)

First one uses a globally defined color and `currentColor` attribute, while the second one just uses proper class composition. Both examples uses a bit of JS that is purely to demonstrate the dynamic change of the primary color with respect to the `DRY` principle (one place to change the styles).
