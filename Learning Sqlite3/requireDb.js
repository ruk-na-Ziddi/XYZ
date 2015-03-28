var sqlite3=require('sqlite3');
var db=new sqlite3.Database('foo.db');
db.serialize(function() {
  db.run("CREATE TABLE if not exists foo (num)");
  db.run("INSERT INTO foo  VALUES (?)", 1);
  db.run("DELETE TABLE bar");
});