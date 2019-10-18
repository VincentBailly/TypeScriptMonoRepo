# TypeScriptMonoRepo

## Inner dev loop
Example working with the test app in package A:
```
/TypeScriptMonoRepo/packages/A $ yarn watch
```
Watching will:
- incrementally typecheck after each change.
- incrementally build and serve the test app after each change.

Both steps are independent from each other, this means that we don't need a successful type checking to test a change.

## Outer dev loop

Build full repo:
```
/TypeScriptMonoRepo $ yarn build
```
Building the full repo should be done to typecheck the full repo in one operation,
and to build the published assets before publishing.
