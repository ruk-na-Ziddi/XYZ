var fs = require('fs');

// fs.unlink('d:\download.jpg', function (err) {
//   if (err) throw err;
//   console.log('successfully deleted /tmp/hello');
// });

// fs.unlinkSync('d:\download.jpg')
// console.log('successfully deleted /tmp/hello');
// fs.rename('d:\ak.jpg', 'd:\ankur.jpg', function (err) {
//   if (err) throw err;
//   console.log('renamed complete');
// });
fs.stat('d:\my.mp3', function (err, stats) {
  if (err) throw err;
  console.log('stats: ' + JSON.stringify(stats));
});
// fs.renameSync('d:\ankur.jpg', 'd:\ak.jpg')
// console.log("renamed successfully");

// fs.truncate('d:\ak.jpg', 50, function(err){
// 	if(err) throw err;
// 	console.log('Iska to kam ho gya');
// });

// fs.readdirSync('d:\practice');
// console.log('kya karta hai tu');

