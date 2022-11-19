// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api: 'http://54.186.68.154:9103/',
  admin_api:'http://54.69.18.32:8103/',
  googleApiKey:"AIzaSyAH6ad7dNsXULAcPX6iFcZzOI-AC00rADA",
  razorpay_gateway:"rzp_test_lVMzdSz4aW5Jxi",
  email_buyer_notification:[ 'ganesh.g@dfarm.in', 'manjunath.m@dfarminc.com', 'm.hrishikesh@dfarminc.com'],
  email_seller_notification:['ganesh.g@dfarm.in', 'm.hrishikesh@dfarminc.com']
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
