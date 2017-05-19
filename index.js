const nyg = require('nyg');
const exec = require('child_process').exec;

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

let generator = nyg(prompts, globs);

// install using yarn if selected
generator.on('preinstall', () => {
  const done = generator.async();
  if(generator.config.yarn) {
    exec('yarn install', (err, stdout, stderr) => generator.end())
  } else {
    done();
  }
})

generator.run()