// Assumes PODCASTINDEX_KEY & PODCASTINDEX_SECRET are defined as environment variables.
if (!process.env.PODCASTINDEX_KEY || !process.env.PODCASTINDEX_SECRET) {
    console.error('No PODCASTINDEX_KEY or PODCASTINDEX_SECRET environment variables set.');
    process.exit(1)
}

console.log(`Authenticating with: ${process.env.PODCASTINDEX_KEY} / ${process.env.PODCASTINDEX_SECRET}`);

const api = require('podcast-index-api')(process.env.PODCASTINDEX_KEY, process.env.PODCASTINDEX_SECRET);

api.searchByTitle('The Big Bang Theory').then(function (results) {
    console.log(results);
})