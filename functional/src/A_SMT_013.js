/* 
 * Project Name	:	Digital Deals
 * Project Code : 	01683
 * Author		: 	Jaganathan k 	  Email: jaganathan.kamalakannan@photoninfotech.net 
 *		    	  	Karthikeyan S     Email: karthikeyan.shanmugam@photoninfotech.net 
 * Manager		: 	Shivashankari N   Email: shivashankari.n@photon.in
 */

/*Descriptions	:	Verify whether the application displays "Manage your Deals" as last tile always. */

#import "Deals_CommonFunctions.js"

function A_SMT_013() {
	
	startTestCase("A_SMT_013");
	getMainWindow();
	lastTilesVerification();
}
A_SMT_013();