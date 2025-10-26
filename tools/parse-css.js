const fs = require('fs');
const path = require('path');
(async ()=>{
  try{
    const postcss = require('postcss');
    const css = fs.readFileSync(path.join(__dirname,'..','src','index.css'), 'utf8');
    const root = postcss.parse(css, { from: 'src/index.css' });
    console.log('Parsed OK, rules count:', root.nodes.length);
  }catch(e){
    console.error('PARSE ERROR:');
    console.error(e && e.stack ? e.stack : e);
    process.exitCode = 1;
  }
})();