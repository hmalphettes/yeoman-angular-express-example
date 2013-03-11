Angular Webapp Scaffolded by Yeoman

Yeoman: the doc looks but it is a beta:
"Expect nothing to works."

Here is what worked today: March 11th 2013 around noon.

# Scaffolding recipe:
- Install the latest yeoman with the audit script: `curl -L get.yeoman.io | bash` (https://github.com/yeoman/yeoman/wiki/Manual-Install)
- Install everything the audit script tells you.
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
Opt in of everything else.

Ok ready to test run all this:
```
grunt server
```
Should open the browser on port 3000

Now run the testacular tests.
```
grunt test
```

# Step 2: Scaffold express
Add to package.json
`"grunt-express": "git://github.com/blai/grunt-express.git"`

Add grunt by doing something along those lines:
https://github.com/blai/grunt-express-example

# Step 3: Push to Cloudfoundry

