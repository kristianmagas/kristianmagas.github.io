function ShowUserProfile(){
	if(mainProg.Datacontrol.IsLoggedIn()){
		$("#mainContent").html("Profile");
	}else{
		$("#mainContent").html("");
	}
}