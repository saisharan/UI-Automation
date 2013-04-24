/* 
 * Project Name	:	Digital Deals
 * Project Code : 	01683
 * Author		: 	Jaganathan k 	  Email: jaganathan.kamalakannan@photoninfotech.net 
 *		    	  	Karthikeyan S     Email: karthikeyan.shanmugam@photoninfotech.net 
 * Manager		: 	Shivashankari N   Email: shivashankari.n@photon.in
 */

/*Descriptions	:	1. Products count and "View Cart" button should be displayed when there are products in the 				   cart.
					2. Products count should get increased for every product added to the cart.
					3. List of added products should be displayed on tapping the View Cart button.
					4. PDP of the product should be displayed on tapping the title of the product.
 					
 */

#import "Deals_CommonFunctions.js"

function A_SMT_039() {

	startTestCase("A_SMT_039");
	getMainWindow();
	
	
	natStatTxtVrftn(LANDING_MYDEALS_TEXT);
	scrlBtnTap(IMAGES_INDEX, AllDEALS_BUTTON_INDEX);
	timeDelay();
	natStatTxtVrftn(AllDEALS_TITLE);
	timeDelay();
	tapUsingCoordinates(ALLDEALS_PRODUCT1_X, ALLDEALS_PRODUCT1_Y);
	natStatTxtVrftn(PDP_PRODUCTDETAIL_TITLE);
	webLinkVrftn(IMAGES_INDEX, PRODUCT_DETAIL_OVERVIEW_INDEX);
	webBtnTap(IMAGES_INDEX,ADDTOCART_BUTTON);
	webBtnVrftn(IMAGES_INDEX, PRODUCT_CHECKOUT_BUTTON);
	natBtnTap(IMAGES_INDEX, GLOBAL_BACK_BUTTON);
	timeDelay();
	tapUsingCoordinates(ALLDEALS_PRODUCT2_X, ALLDEALS_PRODUCT2_Y);
	natStatTxtVrftn(natBtnVrftn);
	webLinkVrftn(IMAGES_INDEX, PRODUCT_DETAIL_OVERVIEW_INDEX);
	webBtnTap(IMAGES_INDEX,ADDTOCART_BUTTON);
	webBtnVrftn(IMAGES_INDEX, PRODUCT_CHECKOUT_BUTTON)
	tapUsingCoordinates(VIEWCART_X, VIEWCART_Y);
	natBtnVrftn(CLOSE_BUTTON);
	natBtnVrftn(CHECKOUT_BUTTON);
	webLinkTap(IMAGES_INDEX,CHECKOUT_PRODUCT_LINK);
	webLinkVrftn(IMAGES_INDEX, PRODUCT_DETAIL_OVERVIEW_INDEX);

}	
A_SMT_039();