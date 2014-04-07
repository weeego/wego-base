var Db = require('mongodb').Db;
var Server = require('mongodb').Server;
var db_name = 'wego'; // 数据库名，从云平台获取
var db_host = '127.0.0.1'; // 数据库地址
var db_port = '27017'; // 数据库端口
var username = 'zuaa'; // 用户名（API KEY）
var password = 'aaaaaaaa'; // 密码(Secret KEY)

var db = new Db(db_name, new Server(db_host, db_port, {}), {
	w : 1
});

db.open(function(err, db) {
	db.authenticate(username, password, function(err, result) {
		if (err) {
			throw err;
			console.info('mongodb connected');
		}
	});
});

exports.add = function(tname, obj) {
	db.collection(tname, function(err, collection) {
		collection.insert(obj, function(err, docs) {
			if (err) {
				console.log(err);
				return;
			}
		});
	});
}
exports.find = function(tname, obj,obj2) {
	db.collection(tname, function(err, collection) {
		collection.find(obj,obj2).toArray(function(err, docs) {
			console.log(docs.length);
			return docs;
		});
	});
}

exports.drop = function(argument) {
	db.dropCollection(argument, {
		safe : true
	}, function(err, result) {
		console.log(result);
	})
}
exports.update = function(argument) {
	// body...
}

exports.del = function(argument) {
	// body...
}
