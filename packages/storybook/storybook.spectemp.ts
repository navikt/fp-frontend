import initStoryshots from '@storybook/addon-storyshots';

initStoryshots({
  storyKindRegex: /^SupportMenySakIndex$/,
  storyNameRegex: /^((?!.*?visMenyUtenBeslutterGodkjenningOgTilbakesending).)*$/,
});
