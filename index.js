const nyg = require('nyg');

const prompts = [
  {
    type: "input",
    name: "project",
    message: "What is the project name?",
    default: "sketch-"+Date.now()
  },
  {
    type: "input",
    name: "description",
    message: "Project description?",
    default: ""
  },
  {
    type: "confirm",
    message: "run yarn install?",
    name: "yarn",
    default: true
  }
];

const globs = [
  {base: 'template/', glob: '*'}
];

nyg(prompts, globs).run();
