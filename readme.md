# Smart Wearables Benchmark
---

This project is being made with Foundation 6
You can learn more about this awesome framework here:  <https://foundation.zurb.com/sites/docs/>

---
### Panini

With Panini we can keep the code more organized and avoid repeated code lines... But how?

First of all, it uses layouts so you don't have to add all the default HTML5 settings to each page of the website. It's done automatically when rendered.

In this project only one layout is being used and you can find it under _/src/layouts/default.html_.

Every page created should be saved under _/src/pages/_. Note that you only need to code "the content" of the page, since the standard layout is already defined and will always be injected in all pages.

You can always rely on HTML5 partials (_/src/partials/_) to keep the code more organized. Insert them anywhere in the HTML5 code with **{{> name-of-your-partial}}**.

---
### Sass

Foundation 6 uses Sass as a default customizer to their built-in components, so I decided to stick with Sass instead of going for regular CSS3. Don't worry, SCSS is just like CSS, but more intelligent. If you know how to work with one, you shouldn't have problems with the other :)

All files are saved under _/src/assets/scss/components/_. Default Foundation settings are in _settings.scss_ and there you can truly find A LOT of styling. Please, try to make the fewest changes as possible in that file, or we might have problems with Foundation's functionalities.

After you create a SCSS file in the components folder, don't forget to import it in the _app.scss_ file :)

---
### JavaScript

No secret here, if you want to use some JS, just edit the file _/src/assets/js/app.js_

---
### PS.: Everything you need to customize is in the src folder. Simply ignore anything else.
