const args = require('yargs-parser')(process.argv.slice(2))
const membersDb = require('../../data-access/members-db');
const eventsDb = require('../../data-access/events-db');

const printHelp = () => {
  console.log(`
    Help usage:
    --seed  <database>
    --index  list <collection>
    --show   find <collection> by {ID}
    --help   print help
  `);
}

const valid = args.index || args.show

if (args.help || !valid) {
  printHelp()
  process.exit(1)
}

if (args.index) {

}

if (args.show) {

}
