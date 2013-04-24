/* 
 * Project Name	:	Digital Deals
 * Project Code : 	01683
 * Author		: 	Jaganathan k 	  Email: jaganathan.kamalakannan@photoninfotech.net 
 *		    	  	Karthikeyan S     Email: karthikeyan.shanmugam@photoninfotech.net 
 * Manager		: 	Shivashankari N   Email: shivashankari.n@photon.in
 */

/*Descriptions	:	Verify whether the application displays stores available with in 200 miles on searching for a zip code. */

#import "Deals_CommonFunctions.js"

function A_SMT_009() {

	startTestCase("A_SMT_009");
	getMainWindow();
	landingPageTilesVerification();
	searchStore();
}
A_SMT_009();
