## Introduction:

This is a mono-repo project. To add dependency at root level, run with `-W`. For example, see below  
`yarn add --dev -W prettier`

** Commit should be done via `yarn commit`. Don't use `git commit` **

### How to run

- Setup commands
- `$ git clone {repo}`
- `$ cd ps-monorepo`
- `$ yarn`
- Platform specific commands
  - [Web] `yarn web`
  - [iOS-Pod] `cd packages/mobile/ios && pod update && pod install && cd -`
  - [iOS] `yarn ios` (pod should be installed before this step)
  - [Android] `yarn android` ( Add sdk path in local.properties)

### To generate APP Bundle:

- Install Prerequisites as mentioned above.
- Install the packages using : `yarn`
- Build the application using `yarn ginie:android:bundle`

## Contributing

### Linting

`eslint` rules are maintained as packages within this repository.

JavaScript files that aren't formatted by `prettier` will cause `eslint` to fail. You should either use an editor's prettier plugin to format your files when you save them, or run `yarn prettier` before committing your changes.

Lint errors MUST be fixed before a pull request will be accepted.

### Git commit guidelines

This project follows [conventional-commits](https://conventionalcommits.org) for commiting code. Specifically, we follow a slight variation on the [Angular commit conventions](https://github.com/angular/angular.js/blob/31fb6fa6db826d90b9268997b5d1e3b8b0ae010a/DEVELOPERS.md#commits), so read that and become familiar. This enables us to automatically generate CHANGELOGs for each package, and calculate semver.

We use `yarn commit` instead of `git commit`. This uses the [`commitizen-cli`](https://github.com/commitizen/cz-cli) with a custom adaptor to assist in writing the commit according to the correct structure.

The commit message structure is:

```
type(scope): summary

description

breaking
```

i.e.

```
fix(survey): update api endpoint for survey submit

```

##### Commit Summary Wording

When writing your commit summary:

- Explain why, not how.
  - Bad: "use overflow-wrap and word-break"
  - Good: "prevent long URLs from overflowing"
- Write in the [imperative case](https://chris.beams.io/posts/git-commit/#imperative).

If in doubt, try and complete the following sentence:

> If applied, this commit will...

i.e.

- **Bad (how, not why):** If applied, this commit will _use overflow-wrap and word-break_.
- **Bad (not imperitive):** If applied, this commit will _fix a bug causing long URLs to overflow_.
- **Good:** If applied, this commit will _prevent long URLs from overflowing_.

## Editor

We recommend [Visual Studio Code](https://code.visualstudio.com/) for the editor.
