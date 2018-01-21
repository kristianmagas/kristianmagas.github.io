var Program = function(){
	var dummyMain = this;
	this.Datacontrol = new DataControl();
	
	this.GoToPage = function(page, id){
		switch(page){
			case "registracija":
				if(dummyMain.Datacontrol.IsLoggendIn()){
					ShowUserProfile();
				}else{
					ShowRegistrationPage();
				}
				break;
			case "login":	
				
				break;
			case "profil":
				ShowUserProfile();
				break;
			case "objekt":
				ShowDetailsPage(dummyMain.Datacontrol, id);
				break;
			case "profil objekta":
			
				break;
			default:
				ShowIndexPage(dummyMain.Datacontrol);
				break;
		}
	}
	
	
	FillDummyData(dummyMain.Datacontrol);
	this.GoToPage("index");
}