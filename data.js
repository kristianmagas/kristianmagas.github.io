var Dataset = function(){
	this.UsersTable = [];
	this.FacilityTable = [];
	this.PostsTable = [];
	this.EventsTable = [];
	this.ReseravtionsTable = []
	this.ReviewsTable = [];
	this.GaleryTable = [];
	this.ImageTabel = [];
};

var DataControl = function(){
	var mainDS = new Dataset();
	
	this.GetAllTables = function(){
		return mainDS;
	};
	
	this.RegisterUser = function(user){
		mainDS.UsersTable.push(user);
	};
	
	this.LogIn = function(user, pass){
		if($.grep(mainDS.UsersTable, function(x) { return x.Login == user && x.Password == pass}).length > 0){
			document.cookie = "user=" + user;
		}
	};
	
	this.LogOut = function(){
		document.cookie = "user=";
	};
	
	this.IsLoggedIn = function(){
		var user = document.cookie.split(";");
		
		user = $.grep(user, function(x) { return x.trim().indexOf("user=") == 0; });
		if(user.length > 0){
			user = user[0].split("=")[1];
		}else{
			user = "";
		}
		
		return $.grep(mainDS.UsersTable, function(x) { return x.Login == user}).length > 0;
	};
	
	this.GetFacilities = function(){
		return mainDS.FacilityTable;
	};
	
	this.GetFacility = function(id){
		if($.grep(mainDS.FacilityTable, function(x) { return x.ID == id; }).length > 0){
			return $.grep(mainDS.FacilityTable, function(x) { return x.ID == id; })[0];
		}else{
			return null;
		}
	};
	
	this.RegisterFacility = function(facility){
		mainDS.FacilityTable.push(facility);
	};
}