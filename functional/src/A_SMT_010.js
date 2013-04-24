/* 
 * Project Name	:	Digital Deals
 * Project Code : 	01683
 * Author		: 	Jaganathan k 	  Email: jaganathan.kamalakannan@photoninfotech.net 
 *		    	  	Karthikeyan S     Email: karthikeyan.shanmugam@photoninfotech.net 
 * Manager		: 	Shivashankari N   Email: shivashankari.n@photon.in
 */

/*Descriptions	:	Verify whether the application displays all stores in the state on searching for a state name. */

#import "Deals_CommonFunctions.js"

function A_SMT_010() {

	startTestCase("A_SMT_010");
	getMainWindow();
	landingPageTilesVerification();
	stateSearchVerification();
	
}
A_SMT_010();
