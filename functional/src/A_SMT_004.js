/* 
 * Project Name	:	Digital Deals
 * Project Code : 	01683
 * Author		: 	Jaganathan k 	  Email: jaganathan.kamalakannan@photoninfotech.net 
 *		    	  	Karthikeyan S     Email: karthikeyan.shanmugam@photoninfotech.net 
 * Manager		: 	Shivashankari N   Email: shivashankari.n@photon.in
 */


/*Descriptions	:	Verify whether the application takes the user out of application to launch the Map on tapping “Get Directions”. */

#import "Deals_CommonFunctions.js"

function A_SMT_004() {

	startTestCase("A_SMT_004");
	getMainWindow();
	localStoreDisplayGetDirectionPopUpVerify();
	
}
A_SMT_004();
