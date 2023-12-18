## eXabyte '24
This is the official repository for the website of eXabyte 2024. 

### Project Structure
The repository contains all the routes as well as the custom tags and various (mostly images) assets used throughout the project.
```
root
|
|--- assets
|    |
|    --- images
|    |   |___ sponsor-logos
|    |   |___ teams-pictures
|    |
|    --- logos
|        |___ exabyte.png
|        |___ exabyte_dark.png
|        |___ eXabyte_light.png
|        |___ insta.svg
|        |___ site.svg
|
|--- custom-tags
|    |___ loader
|    |___ mobile-menu
|    |___ page-transition-animation
|
|
|--- events
|    |___ index.html
|    |___ styles.css
|    |___ script.js
|
|--- sponsors
|    |___ index.html
|    |___ styles.css
|    |___ script.js
|
|--- magazines
|    |___ index.html
|    |___ styles.css
|    |___ script.js
|
|--- about
|    |___ index.html
|    |___ styles.css
|    |___ script.js
|
|--- contact
|    |___ index.html
|    |___ styles.css
|    |___ script.js
|
|
|--- favicon
|
|
|--- particlesJS
|
|___ index.html
|___ styles.css
|___ script.js
|___ globalStyles.css
```

- **assets**: contains all the images and other misc. assets that is required in the website including sponsors' brand logos and the pictures of the team for the `About Us` page.
- **custom tags**: all custom html elements like navigation bar/menu, route transition, etc. so that they need to be re-written on every page route. [how to use the custom tags?](#custom%20tags%20usage)
- **\[routes]**: the `contact`, `about`, `magazines`, `sponsors`, `events` correspond to their respective routes `www.exabyte.sxccal.edu/contact` and so so.
- **favicon**: contains favicons of various sizes.
- **particlesJS**: contains the particlesJS script along with the configuration(s).
- **index.html | styles.css | script.js**: landing page files.
- **globalStyles.css**: universal css classes which are required by all the pages.
### Custom Tags Usage
- In the pages that require a certain custom tag (say mobile-menu), in the head section of the page include the `/custom-tags/mobile-menu/component.js`, this script registers the custom tag for that page. 
- Also import the `/custom-tags/mobile-menu/styles.css`, this contains the styles for all the html elements used in the mobile-menu custom tag.
- Right after the `<body>` tag, place the custom tags like
    ```html
    <body>
         <custom-mobile-menu>
         <custom-loader>
         .
         .
         .
    </body>
    ```
- And before closing the body tag `</body>`, import all other scripts present in the folder of the custom tag:
    ```html
    <body>
         <custom-mobile-menu>
         <custom-loader>
         .
         .
         .
         <script src="/custom-tags/mobile-menu/script.js"></script>
         <script src="/custom-tags/loader/animate.js"></script>
    </body>
    ```

==**IMPORTANT**==: To use the `page-transition-animation` custom tag, the custom tags for nav (both mobile and desktop) need to be included first.

### CSS Methodology
The project uses a utility-first CSS methodology like Tailwind CSS. Each tag consists of small, single-purpose utility classes that have been composed together to create layouts and designs. This, although involves a little more effort but, ensures that the CSS is expandable, readable and manageable in the long term and scale.
It's best if Tailwind CSS class names are used, if not then the names should be very much readable.

Example:
Instead of having something like this:
```html
<div class="card">
    <div class="heading">...</div>
    <div class="avatar">...</div>
    <div class="content">...</div>
</div>
```
```css
.card {
    display:flex;
    flex-direction: column;
    position: relative;
    padding: 1rem;
    border-radius: 10px;
}
.heading {
    font-size: large;
    font-weight: bold;
    padding: 1rem;
}
.avatar {
    border-radius: 100%;
    padding: 1rem;
}
.content {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    font-size: small;
}
```

we use the following:

```html
<div class="card flex flex-dir-col relative p-1rem border-radius-10px">
    <div class="heading font-large font-bold p-1rem">...</div>
    <div class="avatar border-radius-100 p-1rem">...</div>
    <div class="content flex flex-dir-col p-1rem font-small">...</div>
</div>
```
```css
.flex {
  display: flex;
}
.flex-dir-col {
  flex-direction: column;
}
.relative {
  position: relative;
}
.p-1rem {
  padding: 1rem
}
.font-large {
  font-size: large;
}
.font-small {
  font-size: small;
}
.border-radius-10px {
  border-radius: 10px;
}
.border-radius-100 {
  border-radius: 100%;
}
```

In the short term although this seems a lot more work but as the project scales up this methodology eliminates a major portion of CSS confusion: naming conventions.

More about utility-first methodology here:
1. [In Defense of Utility First CSS](https://www.freecodecamp.org/news/in-defense-of-utility-first-css-4f406acee6fb/)
2. [About Utility First CSS](https://xenox.dev/tailwind-css-utility-first-css-framework/)

### Managing Reactivity
Continuing our utility-first approach, we completely separate the mobile and desktop layouts without sharing any layout between the two.
All the pages should look like this:
```html
<body>
	<div class="mobile">
		<!-- Mobile Layout and Design -->
	</div>
	<div class="desktop">
		<!-- Desktop Layout and Design -->
	</div>
</body>
```
and the corresponding CSS are defined in `globalStyles.css` as follows:
```css
@media only screen and (max-width: 850px) {
	.mobile {
		display: block;
	}

	.desktop {
		display: none;
	}
}

  

@media only screen and (min-width: 850px) {
	.mobile {
		display: none;
	}

	.desktop {
		display: block;
	}
}