storybook:
  npm -w @coderan/component-playground run storybook

watch-styles:
  npm -w @coderan/component-styles run watch

install *args:
  npm install {{args}}

npm *args:
  npm {{args}}

lerna *args:
  npx lerna {{args}}
