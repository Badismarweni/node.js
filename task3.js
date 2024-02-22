var fs= require("fs"); //File system abreviation

//Asynchronous read
fs.readFile('welcome.txt', function (err,data){
    if (err) {
        return console.error(err);
    }
    console.log("Acynchronous read: "+ data.toString());
});

//synchronous read 
var data = fs.readFileSync('welcome.txt');
console.log("Synchronous read:" + data.toString());

console.log("program ended")