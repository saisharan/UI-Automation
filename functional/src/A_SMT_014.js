/* 
 * Project Name	:	Digital Deals
 * Project Code : 	01683
 * Author		: 	Jaganathan k 	  Email: jaganathan.kamalakannan@photoninfotech.net 
 *		    	  	Karthikeyan S     Email: karthikeyan.shanmugam@photoninfotech.net 
 * Manager		: 	Shivashankari N   Email: shivashankari.n@photon.in
 */

/*Descriptions	:	Verify whether the user can tap on tiles and view the related grid view of products on that category. */

#import "Deals_CommonFunctions.js"

function A_SMT_014() {
	
	startTestCase("A_SMT_014");
	getMainWindow();
	weeklyDealsVerification();
	homePageNavigation();
}
A_SMT_014();