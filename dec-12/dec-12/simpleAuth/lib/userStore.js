var fs = require('fs');
var _ = require('lodash');
var USERFILE = './data/users.json';
var users = fs.existsSync(USERFILE)?
	JSON.parse(fs.readFileSync(USERFILE,'utf-8')):
	[];
var saveAll = function(){
	fs.writeFile(USERFILE,JSON.stringify(users));
};
exports.create = function(){
	return {
		save: function(user){
			if(_.some(users,{email:user.email}))
				return {error:'email already registered'};
			users.push(user);
			saveAll();
			return {};
		},
		load: function(email){
			return _.find(users,{email:email});
		}
	};
};