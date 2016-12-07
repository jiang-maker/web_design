var express = require('express');
var router = express.Router();
var mysql = require('mysql');


/* 创建链接池 */
var connection= mysql.createPool({
	host:'localhost',
  	port:'3306',
  	user:'root',
  	password:'root',
  	database:'baidunews'
});
//获取新闻列表
router.get('/getnews', function(req, res, next){
	connection.query('SELECT * FROM `news`',function (err,rows) {
		// body...
		res.json(rows);
	});
});
//获取模态框内容，修改新闻
router.get('/editnews', function(req, res,next) {
	// body...
	var newsid = req.query.newsid;
	connection.query('SELECT * FROM `news` WHERE id=?',[newsid],function(err,rows) {
		// body...
		res.json(rows);
		// console.log(rows);
	});
});
router.post('/updatenews', function(req, res, next){
	var newsid = req.body.id,
		newstype=req.body.newstype,
		newstitle=req.body.newstitle,
		newsimg =req.body.newsimg,
		newstime=req.body.newstime,
		newssrc= req.body.newssrc;
	connection.query('UPDATE `news` SET `newstype`=?,`newsimg`=?,`newstitle`=?,`newstime`=?,`newssrc`=? WHERE `id`=?',[newstype,newsimg,newstitle,newstime,newssrc,newsid],function (err,rows) {
		// body...
		// console.log(rows.changedRows);
		
		res.json(rows);
	});
	
});
//删除新闻
router.post('/deletenews',function (req,res) {
	// body...
	var newsid =req.body.newsid;
	connection.query('DELETE FROM `news` WHERE `news`.`id`= ?',[newsid],function (err,result) {
		// body...
		res.json(result);
	});
});
//创建新闻
router.post('/createnews',function (req,res) {
	// body...
	var newstype = req.body.newstype,
		newstitle =req.body.newstitle,
		newsimg=req.body.newsimg,
		newstime=req.body.newstime,
		newssrc=req.body.newssrc;
	connection.query('INSERT INTO `news` (`newstype`,`newstitle`,`newsimg`,`newstime`,`newssrc`) VALUES (?,?,?,?,?)',[newstype,newstitle,newsimg,newstime,newssrc],function(err,result) {
		// body...
		res.json(result);
	});
});
module.exports = router;
