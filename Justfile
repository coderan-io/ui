storybook:
  npm -w packages/playground run storybook

watch-styles:
  npm -w packages/styles run watch

install *args:
  npm install {{args}}

npm *args:
  npm {{args}}

