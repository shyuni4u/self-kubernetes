const express = require('express');
const shell = require('shelljs');
const xml2json = require('xml2json');

const app = express();
const port = 35100;

app.get('/test', (req, res) => {
  shell.exec('ls', (code, stdout, stderr) => {
    res.send(stdout);
  });
});

app.get('/api', (req, res) => {
  shell.exec('rocm-smi -a --json', (code, stdout, stderr) => {
    res.send(xml2json.toJson(stdout));
  });
});

// app.get('/api', (req, res) => {
//   shell.exec('nvidia-smi -x -q', (code, stdout, stderr) => {
//     res.send(xml2json.toJson(stdout));
//   });
// });

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});


//  npm init
//  npm install express shelljs
//  npm install -g forever
//  forever start gpu_api.js
//  forever stopall
//  curl localhost:35100/api >> file.txt


//  ROCM-SMI
//  add **.bashrc**
//  export PATH="$PATH:/opt/rocm/bin"
//  export LD_LIBRARY_PATH="$LD_LIBRARY_PATH:/opt/rocm/lib"