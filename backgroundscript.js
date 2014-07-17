function remove_affiliate_links( details ) {
	if ( details.url.match( /&tag=[a-zA-Z0-9\-]*/ ) != null) {
		return {
			redirectUrl: details.url.replace( /(&tag=[a-zA-Z0-9\-]*)/, '' )
		};
	}
}

chrome.webRequest.onBeforeRequest.addListener( remove_affiliate_links, { urls: ["*://www.amazon.com/*", "*://www.amazon.co.uk/*", "*://amazon.com/*", "*://amazon.co.uk/*"] }, ["blocking"] );
