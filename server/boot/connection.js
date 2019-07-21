'use strict';

module.exports = async (server) => {
  const {getSampleData} = require('./utils');
  console.log(await getSampleData(server));
};
