/* 
 * Project Name	:	Digital Deals
 * Project Code : 	01683
 * Author		: 	Jaganathan k 	  Email: jaganathan.kamalakannan@photoninfotech.net 
 *		    	  	Karthikeyan S     Email: karthikeyan.shanmugam@photoninfotech.net 
 * Manager		: 	Shivashankari N   Email: shivashankari.n@photon.in
 */

/*Descriptions	: 	Verify whether the application displays “YOUR LOCAL STORE” modal on selecting “YOUR LOCAL STORE”. */

#import "Deals_CommonFunctions.js"

function A_SMT_016() {
	
	startTestCase("A_SMT_016");
	getMainWindow();
	menuButtonVerification();
	myLocalStoreOverlayVerification();
}
A_SMT_016();