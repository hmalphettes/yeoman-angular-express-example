Angular Webapp Scaffolded by Yeoman [![Build Status](https://secure.travis-ci.org/hmalphettes/yeoman-angular-express-example.png?branch=master)](http://travis-ci.org/hmalphettes/yeoman-angular-express-example)

# Tour the stack
This might be the stack you are looking for:
- angularjs
- twitter-bootstrap
- nodejs express with socket.io
- testacular

It deploys on cloudfoundry.

# Setup and Development
- Tests: `grunt express-test`
- Run in dev mode: `grunt express-server`
- Run in production mode: `grunt build && node app`

# How was this project generated?
I am glad you ask: with yeoman.

Yeoman, the doc is fantastic but it is a beta:

    "Expect nothing to work."

Here is what worked today: March 11th 2013 around noon Singapore time.

Note: one can take the project as a seed and get going.

## Setting up yeoman:
- Install the latest yeoman with the audit script: `curl -L get.yeoman.io | bash` (https://github.com/yeoman/yeoman/wiki/Manual-Install)
- Install everything the audit script tells you.

## Scaffolding angular with twitter-bootstrap
- Make a package.json file: `npm init`.
- Add the latest generators for angular and testacular:
```
    devDependencies: {
        "generator-angular": "*",
        "generator-testacular": "*"
    }
```

Now continue with the Getting-Started Documentatin of Yeoman:
```
yo angular --minsafe
```
Opt out of RequireJS: at the time of this writing that would break testacular.
Opt in of everything else. Including Twitter-Bootstrap's SaaS flavor.

Ok ready to test run all this:
```
grunt server
```
Will open the browser on port 9000

Now run the testacular tests.
```
grunt test
```

## Step 2: Scaffold express
Yeoman will serve the files with a naive static setup of nodejs's express.
We want express instead. Luckily other people got started in that direction (Thanks https://github.com/blai/grunt-express).

Add to package.json my fork of that project.
`"grunt-express": "git://github.com/hmalphettes/grunt-express.git"`

Add grunt by doing something along those lines:
https://github.com/blai/grunt-express-example

The fork is to take care of one detail:
https://github.com/blai/grunt-express/pull/2

## Step 3: Push to Cloudfoundry
TODO: add a manifest.yml template and a grunt task.
For now: `vmc push`
