var UserModel = (function(){
	this.ID = "";
	this.Login = "";
	this.EMail = "";
	this.Name = "";
	this.LaseName = "";
	this.Tags = [];
	this.Status = "";
	this.Description = "";
});

var FacilityModel = function(){
	this.ID = "";
	this.Name = "";
	this.Description = "";
	this.OIB = "";
	this.Tags = [];
};

var PostModel = function(){
	this.ID = "";
	this.Title = "";
	this.Text = "";
	this.GaleryID = null;
	this.UserID = null;
	this.FacilityID = null;
}

var EventModel = function(){
	this.ID = "";
	this.Title = "";
	this.Text = "";
	this.StartDate = new Date();
	this.EndDate = new Date();
	this.GaleryID = null;
	this.FacilityID = null;
	this.UserID = null;
}

var ReservationModel = function(){
	this.ID = "";
	this.Hash = "";
	this.UserID = null;
	this.FacilityID = null;
	this.StartDate = new Date();
	this.Status = "";
}

var ReviewModel = function(){
	this.ID = "";
	this.UserID = null;
	this.FacilityID = null;
	this.Text = "";
	this.Score = 0;
}

var GaleryModel = function(){
	this.ID = "";
	this.Name = "";
	this.Description = "";
}

var ImageModel = function(){
	this.ID 0 "";
	this.GaleryID = null;
	this.Name = "";
	this.Path = "";
	this.Description = "";
}