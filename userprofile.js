function ShowUserProfile(){
	if(mainProg.Datacontrol.IsLoggedIn()){
		$("#mainContent").html(getUserProfile());
	}else{
		$("#mainContent").html("");
	}
}

function getUserProfile(){
	var retVal = "";
	
	retVal += '<div class="row" style="margin-top: 15px;">';
	
	retVal += '<div class="col-lg-3">';
	retVal += '<img class="rounded-circle img-fluid d-block mx-auto" src="http://placehold.it/200x200" alt="">';
	retVal += '</div>';
	
	retVal += '<div class="col-lg-9">';
	
	retVal += '<div class="form-group">';
	retVal += '<label for="profile_firstname">Ime:</label>';
	retVal += '<input id="profile_firstname" type="text" class="form-control">';
	retVal += '</div>';
	retVal += '<div class="form-group">';
	retVal += '<label for="profile_lastname">Prezime:</label>';
	retVal += '<input id="profile_lastname" type="text" class="form-control">';
	retVal += '</div>';
	retVal += '<div class="form-group">';
	retVal += '<label for="profile_email">E-Mail:</label>';
	retVal += '<input id="profile_email" type="text" class="form-control">';
	retVal += '</div>';
	retVal += '<div class="form-group">';
	retVal += '<label for="profile_password">Lozinka:</label>';
	retVal += '<input id="profile_password" type="text" class="form-control">';
	retVal += '</div>';
	retVal += '<div class="form-group">';
	retVal += '<label for="profile_confirmpass">Potvrda lozinke:</label>';
	retVal += '<input id="profile_confirmpass" type="text" class="form-control">';
	retVal += '</div>';
	retVal += '<button type="button" class="btn btn-secondary" onclick="ShowLoginPage();" style="margin-right: 15px;">Spremi</button>';
	
	retVal += '</div>';
	retVal += '';
	retVal += '';
	retVal += '';
	
	retVal += '</div>';
	
	return retVal;
}