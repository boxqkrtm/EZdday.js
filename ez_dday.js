var EZdday;
(function(){
EZdday = function (){
	this.targetUTC0 = 0;
	this.set = function(dateObj, localUtc){
		this.targetUTC0 = dateObj.getTime()-(localUtc*60*1000*60);
	}
	this.checkLocalUTC = function(){
		var result = new Date().getTimezoneOffset()/60;
		console.log(-result);
		return -result;
	}
	this.getTime = function(){
		var now = new Date().getTime()+(new Date().getTimezoneOffset()*1000*60);
		var remain = dday - now;
		return remain;
	}
	this.getDate = function(){
		var remain = this.getRemain();
		return Math.floor((remain-Math.floor(remain/3600/1000/24))/3600/1000/24);
	}
	this.getHours = function(){
		var remain = this.getRemain();
		return Math.floor(remain/3600/1000)%24;
	}
	this.getMinute = function(){
		var remain = this.getRemain();
		return Math.floor((remain/60/1000)%60);
	}
	this.getSeconds = function(){
		var remain = this.getRemain();
		return Math.floor((remain/1000)%60);
	}
	this.getRemain = function(){
		var now = new Date().getTime()+(new Date().getTimezoneOffset()*1000*60);
		var remain = this.targetUTC0 - now;
		return remain;
	}
}
})();

