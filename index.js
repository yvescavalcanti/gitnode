const { exec } = require('child_process');
const path = require('path');
var express = require('express');
var app = express();

const gitBranch = 'git branch -a';

app.get('/branches', function (req, res) {
	exec(gitBranch, (err, stdout, stderr) => {
		if (err) {
		//some err occurred
			console.error(err)
		} else {
		// the *entire* stdout and stderr (buffered)
		res.json({branches:stdout.split('\n').map(el => el.trim()).filter(el => el !== "")});
		// console.log(`stderr: ${stderr}`);
		}
	});
  
	//res.send('Hello World!');
});

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
