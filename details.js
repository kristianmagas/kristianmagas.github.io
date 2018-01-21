function ShowDetailsPage(datacontrol, id){
	$("#mainContent").html(getHtml(datacontrol.GetFacility(id)));
}

function getHtml(facility){
	var retVal = "";
	retVal += '<div class="row">';
	retVal += '<div class="col-lg-12" style="padding: 15px;">';
	retVal += '<div class="card">';
	retVal += '<div class="card-header">';
	retVal += '<h5>' + facility.Name + '</h5>';
	retVal += '</div>';
	retVal += '<div class="card-block">';
	retVal += '<img class="img-fluid rounded" src="http://placehold.it/900x300" alt="">';

	retVal += '<hr>';
				
	retVal += '<p>' + facility.Description + '</p>';
	retVal += '</div>';
	retVal += '</div>';
	retVal += '</div>';
    retVal += '</div>';
	
	return retVal;
}