const readline = require('readline');

const logger = (err, res) => {
  res.statuses.forEach(status => {
    console.log('==============================');
    console.log(status.id);
    console.log(`${status.user.name}: ${status.text}`);
    console.log('==============================');
  });
}

const questioner = (settings) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('Get most recent tweets?', (ans) => {
    console.log(ans);
    settings.recent = ans == 'y' || ans == 'Y' || ans == '';
  });
  
  rl.question('Output file name: ', (ans) => {
    console.log(ans);
    settings.outputFileName = ans;
  });
  
}



module.exports = {
  logger,
  questioner
}