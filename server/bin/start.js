const fs = require('fs');
const concurrently = require('concurrently');

async function run(){

  const params = ['npm run server'];

  if (fs.existsSync('../client')) 
    params.push('npm run client');
    
  concurrently(params);

}

run();