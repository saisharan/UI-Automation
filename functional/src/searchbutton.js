function searchbutton()
{
	
	var target = UIATarget.localTarget();
	var frontapp = target.frontMostApp();
	var mainwindow = frontapp.mainWindow();
	target.logElementTree();
	target. delay(2);	
	var imagebutton =mainwindow.images()[0].buttons()["leftMenuButton"];	
	imagebutton.tap();	
	
	target.frontMostApp().mainWindow().images()[0].tableViews()[0].cells()[2].tap();
	
	
	//var searchbtn=mainWindow().tableViews()[0].cells()[0].tableViews()[0].cells()[1].tap();
	//searchbtn.tap();
}
searchbutton();
