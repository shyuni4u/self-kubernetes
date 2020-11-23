const express = require('express');
const cors = require('cors');
const shell = require('shelljs');
const xml2json = require('xml2json');

const app = express();
app.use(cors());
let port = 35100;

process.argv.forEach((val, index) => {
  if (index === 2 && Number(val) === parseInt(val, 10)) {
    port = val;
  }
});

app.get('/test', (req, res) => {
  res.send('network test');
});

app.get('/amd/api', (req, res) => {
  const startTime = new Date();
  shell.exec('rocm-smi -a --json', (code, stdout, stderr) => {
    const rs = {
      commandDelay: new Date() - startTime,
      smiResult: JSON.parse(stdout),
      error: stderr || 'ok'
    }
    res.send(rs);
  });
});

app.get('/amd/api/min', (req, res) => {
  const startTime = new Date();
  shell.exec('rocm-smi --showproductname --showuse --showmemuse --showtemp --json', (code, stdout, stderr) => {
    const rs = {
      commandDelay: new Date() - startTime,
      smiResult: JSON.parse(stdout),
      error: stderr || 'ok'
    }
    res.send(rs);
  });
});

app.get('/nvidia/api', (req, res) => {
  const startTime = new Date();
  shell.exec('nvidia-smi -x -q', (code, stdout, stderr) => {
    const rs = {
      commandDelay: new Date() - startTime,
      smiResult: JSON.parse(xml2json.toJson(stdout)),
      error: stderr || 'ok'
    }
    res.send(rs);
  });
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});


//  npm init
//  npm install express shelljs xml2json cors
//  npm install -g forever
//  forever start gpu_api.js
//  forever stopall
//  curl localhost:35100/api >> file.txt


//  ROCM-SMI
//  add **.bashrc**
//  export PATH="$PATH:/opt/rocm/bin"
//  export LD_LIBRARY_PATH="$LD_LIBRARY_PATH:/opt/rocm/lib"