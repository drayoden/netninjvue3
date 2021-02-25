### The net ninja Vue 3 YT: 20.12.1

github - NOTE: follows udemy course: https://github.com/iamshaunjp/Vue-3-Firebase

* JS/TS framework - after doing the react tut, vue seems very similar regarding routing, SPA,  etc.
* create SPA (single page app) or widgets
    * handles routing in the browser not the server
    * only a single HTML page is sent to browser with the vue package
    * i.e. a link is handled in vue JS bundle
* Unlike react, you can have multiple root components (parents)
* render content from one component anywhere in the DOM
* vscode Vue syntax highlight extention: Vetur
* will use the vue.js CDN first -- see v3.vuejs.org
* created app.js -- vue code will go here
* tut4 - Vue CLI for full Vue apps
    * install - must have node installed (npm), istall globally: `npm install -g @vue/cli`
    * will attempt to creaate new branch 'cli' from this point on... I will delete everything except for the .git folder.
    * create vue project -> `vue create <projname>` -- I used `vue create .` -- inside /data/netninjvue3
        * deslected `linter... `
        * choose version 3.x of vue
        * choose dedicated config file
        * do NOT use for future project
    * files/folders: ones I know: `node_modules/`  `public/` -> index.html `src/` -> main.js .gitignore package* README.md
        * index.html -> `id=app` -- just like react, vue injects the root 'app' component here.
        * main.js -> just like App.js in react, register root component; `App` defined in src/App.vue
        * src/App.vue -> all vue files must have a `template` section and can include `script` and/or `style` sections
    * start server - `npm run serve`
    * src/assets -> images go here
    * template refs -> reference to a DOM element (query selector)
    * App.vue is the root component (parent), other component are then 'nested' into the root component, i.e. Header.vue, Article.vue, Footer.vue (children)
        * You can then 'nest' other compoenents in a child component i.e. Header.vue or Article.vue, etc.
    * `<style scoped>` -- the 'scope' is for the component, performance hit, can just use more specific selectors.
    * global css file, see commented import in main.js can override global styles in each component.
    * slots - pass templates to components, i.e. pass a form to the modal component.
    * teleport - 

* reaction timer game (tut6) - branch reaction -- app.vue and two internal components; block.vue & results.vue
    * new app -- deleted everything but README.md, .gitignore and .git/.
        * `vue create .` -- did not create reaction-time directory
        * manually created config, removed linter, selected vue3, did not save for future projects
    * lifecycle hooks diagram: https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram, the red bubbles are the hooks we can use. 
    * custom events with data - pass reaction time from block to app then to results
    * pass data p->c (props), c->p (custom events)

* forms - branch forms - 
    * deleted everything, almost
    * new vue app in current directory
    * two-way data binding -- see Signupform.vue
        * as we type an email address or password in the form 'v-model' allows data binding from the form to the component
        * we can also bind data from the component to the form by giving email and password initial values in the component.
    * keyboard events
    * note @submit in the form tag, .prevent does exaclty what you think it does. tut7 (39:43)
 * vue router - since ONE html page is sent to the browser, vue switches out components as needed, all content in 'injected' into the App.vue (root; id="root").
    * vue looks at the route and nests components into the root as needed.
    * vue router is a separate package - the vue cli can install the router when a new app is created.
    





    



