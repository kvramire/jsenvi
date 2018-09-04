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



























