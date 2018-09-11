read me.
>mkdir jsenvi
>cd jsenvi
>git init
>git add README.md
>git commit -m "first commit"
>git remote add origin https://github.com/kvramire/jsenvi.git
>git push -u origin master
>git status
>git add RAEDME.md
testing global settings

JS Editor:
======================================
1. Atom, 2. WebStorm, 3. Brackets and 4. VScode
Can go for VSCode

.editorconfig: 
======================================
define settings and download plugin from https://editorconfig.org/
copy command: ext install EditorConfig
Press Ctl + P in VSCode editor and paste the command and hit enter.  Install plugin and reload code VS editor

Package Manager:- npm - defacto standard
======================================
> other packagers: bower, npm, jspm, jam, volo
> package.json (starterkit)- copy the content to package.json from https://gist.github.com/coryhouse/29bd1029b623beb4c7f79b748dcba844
> use Ctrl + ` in VScode to open terminal.
> run npm install command
>

Security Scanning:
======================================
> npm now has built in security s canning- run npm audit command

Development Webserver-
======================================
> Development webservers for js: http-server, live-server, express, budo, webpack dev server, browsersync
> http-server ultra simple > live server > express > webpack (comprehensive) > Browservsync 
> only express is fo rproduction.
> we use express for for tutorial
> run "node .\buildScripts\srcServer.js" command to start express webserver and loading srcServer.js file.

Sharing work-in-progress
=====================================
tools- localtunnel, ngrok, surge and now
localtunnel: 
1. npm install localtunnel -g 
2. Start your app
3. lt --port 3000

Task Automation - automating development evvironment and builds
================================================================
Automation tooling- npm scriptions
Tools- Grunt, Gulp and npm scripts
grunt > gulp* > npm scripts***

1. to start script: npm start
2. to run other scripts: npm run "script name"
3. OR npm run all

Transpiling javascript
===============================================
Babel, TypeScfipt and Elm, etc...
Babel transpiles from Latest spec to ES5 spec.
> Setup Babel to transpile the code to ES5
> add .babelrc, replace node with babel-node in npm scripts commands to transpile ES6 import syntax to ES5 javascript.

Bundling Application code with js bundler(s)
===================================================
> Common JS doesnot work in web browsers.
> There are at least five module formats in js.
> 1) IIFE, 2) AMD - Asynchronous Module Definition 3) Common JS (CJS) 4) Universal Module Definiton (UMD) 5) ES6 Modules
> Use ES6 module  in future projects.
> Tools available - Browserify (simple), Webpack (comprehensive), Rollup (tree-shaking, performance) and JSPM (runtime loader, package manager)
> We will use Webpack for this starter kit. Webpack is more than just JS. It handles css, images, fonts, html; bundle splitting and hot module reloading.
> webpack 2 offers tree shaking.
> webpack looks to be clear leader among the bundlers.

Sourcemaps
=================================================
> Debug
> debugger

Linting - coding standards
=================================================
> Enforce coding consistency and Avoid Mistakes
> avoif confirm/alert, trailing commas, Globals
> extra parantheseis, Overwriting a function, assignment in conditional, missing default case in switch, debugger / console.log, etc

> Linters - JSLint > JSHint, ESLint*, 
> ESLint is a defacto standard, use ethis.
> TypeScript: TSlint is the only linter.
> ESLint Config: Config format? Which built-in rules? Warnings or errors? Which plugins? and use preset instead?
> eslint-plugin-react, eslint-plugin-angular
> ESlint doesn't watch files. Get around, eslint-loader vs eslint-watch*
> ESlint doesn't support latest js features. Get around, Run ESLint directly vs babel-eslint

> Lint via an Automated Build Process: continuous feedback at one place, universal configuration, should be aprt of CI.

> sample at Githib Gist https://gist.github.com/coryhouse/61f866c7174220777899bcfff03dab7f

> "rules" : { "no-console": 1} -- 0 off, 1 Warning, 2 Error

Testing and CI
=============================================
> Testing startegies - 
> Framework, Assertion Library, Helper Libraries, Where to run tests, Where to place tests and When to run tests
> Frameworks: Mocha, Jasmine, Tape, QUnit, AVA, Jest
> Assertion library: chai, 
> Helper Library: JSDOM - Simlate the browser's DOM, Run DOM-related tests without a brower. Cheerio - jquery for the server, Query virtual DOM using jQuery selectors
> Where to run tests:  Browser - Karma, Testem, Headless Browser - PhantomJS, In-memory DOM - JSDOM, 
> Tests location: Centralized vs alongside
> Naming Test Files: (46%) fileName.spec.js, (39%) fileName.test.js, (15%) other
> run?- run unit tests every time you save
> unit tests (sinle) vs integration tests (multiple)

> Test Infrastrucutre: 1. Mocha Framework, 2. Chai Assertion Library, 3. JSDOM Helper Libraries, 4. Node to run tests,  5. pleace tests Alongside, and 6. run tests upon Save.

Contunuation Integration
====================================================
> Travis*, Appveyor, Jenkins*, CircleCI, semaphore, snapCI> let's try with Travis*, Appveyor,
> Travis run on unix server. It is integrated with github. it is great if repo is on github.
> Windows: Download AppVeyor from https://www.appveyor.com 
> AppVeyor run on Windows server. It is integrated with github. it is great if repo is on github.
 

HTTP Calls:
===================================================================
> Library option based Node, Browser and Node & Browser
> node: http i slow level api comes from node; and request is another popular high level library
> browser: XMLHttpRequest (more code), jQuery (abstraction and simple), Framework-based, Fetch*
> Node & Browser: isomorphic-fetch, xhr, SuperAgent and Axios*


Polyfill:
=================================

Mocking HTTP?
=======================
> Unit testing
> instant response
> Keep working when services are down
> rapid prototyping
> avoid inter-team bottlenecks
> work offline
> tools - Nock, 
> will use JSON Schema faker for schema declaration; 
> to generate random data use faker.js,
> to serve data via API let's use JSON Server.
Mocking Librarues
===============================
> JSON Schema - json-schema.org
> 

Project Structure:
=====================================
> Directory strucutre and file naming
> Framework usage
> Testing
> Mock API
> Automated deployment
Codifies decisions
Interactive examples of working with starter kit

never include java script in <script> </script> tag-
downsides- can't test this, lint this, reuse this, transpile this, import explicit dependencies
> advice: javascript belongs to .js file.
> don't write javascript code from server side code. pass json data from server side and write logic from a javascript file.
> organize code by feature -
> extract logic to POJOs

Production Build
============================
> Minification
> Sourcemaps
> Dynamic HTML
> Cache busting
> Bundle splitting
> Error logging

Minification-
> shortens variable and function names
> removes comments
> removes whitespace and new lines
> dead code elimination / Tree-shaking
> debug via source map














