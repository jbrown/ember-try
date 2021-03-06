'use strict';

var checkCanProceed = require('../utils/verify');

module.exports = {
  name: 'try:testall',
  description: 'Runs `ember test` with each of the dependency scenarios specified in config.' ,
  works: 'insideProject',

  run: function(commandOptions, rawArgs) {
    checkCanProceed({project: this.project});

    var config = require('../utils/config')({ project: this.project });

    var TestallTask = require('../tasks/testall');

    var testallTask = new TestallTask({
      ui: this.ui,
      project: this.project,
      config: config
    });

    return testallTask.run(commandOptions);
  }
};
