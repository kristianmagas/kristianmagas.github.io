function ShowDetailsPage(datacontrol, id){
	$("#mainContent").html(getDetailsHtml(datacontrol.GetFacility(id)));
}

function getDetailsHtml(facility){
	var retVal = "";
	retVal += '<div class="row">';
	retVal += '<div class="col-lg-12" style="padding: 15px;">';
	retVal += '<div class="card">';
	retVal += '<div class="card-header text-center">';
	retVal += '<h5>' + facility.Name + '</h5>';
	retVal += '</div>';
	retVal += '<div class="card-block">';
	retVal += '<div class="text-center">';
	retVal += '<img class="img-fluid rounded" src="http://placehold.it/900x300" alt="">';
	retVal += '</div>';

	retVal += '<hr>';
				
	retVal += '<p>' + facility.Description + '</p>';
	retVal += '</div>';
	retVal += '</div>';
	retVal += '</div>';
    retVal += '</div>';
	
	return retVal;
}