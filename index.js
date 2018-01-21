function ShowIndexPage(datacontrol){
	var tmpHtml = "";
	var fac = datacontrol.GetFacilities();
	
	tmpHtml = "<div class='row'>";
	for(var i = 0; i < fac.length; i++){
		tmpHtml += getFacilityHtml(fac[i]);
		if(i%2 == 1){
			tmpHtml+="</div><div class='row'>";
		}
	}
	tmpHtml += "</div>";
	
	$("#mainContent").html(tmpHtml);
}

function getFacilityHtml(facility){
	var retVal = '<div class="col-lg-6" style="padding: 15px; cursor: pointer;" onclick="mainProg.GoToPage(\'objekt\', \'' + facility.ID + '\');">';
	retVal += '<div class="card">';
	retVal += '<div class="card-header">';
	retVal += '<h5>' + facility.Name + '</h5>';
	retVal += '</div>';
	retVal += '<div class="card-block">';
	retVal += '<img class="img-fluid rounded" src="http://placehold.it/900x300" alt="">';
				
	retVal += '<p>' + facility.Description + '</p>';
	retVal += '</div>';
	retVal += '</div>';
	retVal += '</div>';
	
	return retVal;
}