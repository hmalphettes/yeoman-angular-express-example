Angular Webapp Scaffolded by Yeoman

The doc looks good but it is a beta:
"Expect nothing to works."

Here is what worked today: March 11th 2013 around noon.

# Scaffolding recipe:
- Latest yeoman with the audit script: `curl -L get.yeoman.io | bash`
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

```
grunt test
```
Runs the testacular tests.

