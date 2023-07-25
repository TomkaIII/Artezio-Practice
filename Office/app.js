// const fs  = require('fs');
// const http = require('http');
// const path = require('path');

// const port = 3000;

// const createPath = (page) => path.resolve(__dirname, 'Views', `${page}.html`);

// var basePath = '';

// const server = http.createServer((req,res) =>{
//     res.setHeader('Content-Type','text/html');

//     console.log('12');
//     switch(req.url){
//         case '/':
//             basePath = createPath('office');
//             break;
//         default:
//             break;
//     }

//     fs.readFile(basePath, (err, data) =>{
//         if(err){
//             console.log(err);
//             res.end;
//         }
//         else{
//             res.write(data);
//             res.end();
//         }
//     });
// });



// server.listen(port, 'localhost', (error) =>{
//    error ? console.log(error): console.log(`listening port ${port}`); 
// })