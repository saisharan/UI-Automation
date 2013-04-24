/* 
 * Project Name	:	Digital Deals
 * Project Code : 	01683
 * Author		: 	Jaganathan k 	  Email: jaganathan.kamalakannan@photoninfotech.net 
 *		    	  	Karthikeyan S     Email: karthikeyan.shanmugam@photoninfotech.net 
 * Manager		: 	Shivashankari N   Email: shivashankari.n@photon.in
 */

/*Descriptions	:	1. Checkout header bar should be displayed with the sign in page once the cart page fades out.
 					2. User should get navigated back to the cart page on tapping the Back to Cart button from the header.
*/

#import "Deals_CommonFunctions.js"

function A_SMT_041() {

	startTestCase("A_SMT_041");
	getMainWindow();
	landingPageTilesVerification();
	prodQuantityCartAddRemoveCheckout();
	
}
A_SMT_041();
