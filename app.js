var express  = require('express');
var app      = express();     
var AWS = require('aws-sdk');

app.use(express.static(__dirname + '/public')); 

var dynamoDB = new AWS.DynamoDB.DocumentClient({
	accessKeyId: 'AKIAIKXAMZQUFK7UQDEQ',
	secretAccessKey: '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',
	region: 'ap-northeast-1'
});

app.get('/name',function(req,res){
	dynamoDB.get({
					TableName: 'AWS_Test',
					Key: {'ID':3, 'Name': "Sonali"}

				}, function(err, docs){
					console.log('err ', err, 'docs ',docs);
					res.json(docs);
				})
});

app.listen(80);
console.log("App listening on port 80");