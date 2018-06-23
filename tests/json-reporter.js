const fs = require('fs');

module.exports = testResults => {
  const testResultsString = JSON.stringify(testResults);

  const outputFile = './tests/results.json';

  fs.writeFileSync(outputFile, testResultsString, err => {
    if (err) {
      console.warn('Unable to write test results JSON', err);
    }
  });

  return testResults;
};
