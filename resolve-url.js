import https from 'https';

const url = 'https://maps.app.goo.gl/5gn1d1BiYvfm7Fun9';

https.get(url, (res) => {
  console.log(res.headers.location);
}).on('error', (e) => {
  console.error(e);
});
