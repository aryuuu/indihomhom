const fs = require('fs');


const logger = (err, res) => {
  fs.writeFileSync(`./outputs/indihomhom`, '|id|username|tweet|\n');

  res.statuses.forEach(async status => {
    console.log('==============================');
    console.log(status.id);
    console.log(`${status.user.name}: ${status.text}`);
    console.log('==============================');
    await fs.appendFile(
      './outputs/indihomhom', 
      `|${status.id}|${status.user.name}|${status.text}|\n`, 
      (err) => {
        if (err) throw err;
      }
    );
  });
}

module.exports = {
  logger,
}