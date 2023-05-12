// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // /*Mise en place */
  // The base URL of the OpenWeatherMap API
  meteoApiBaseUrl: "https://api.openweathermap.org/data/2.5/weather?appid=61bd6ca2484cb853179f3fe9490689e0",
  // The query parameter for the city
  meteoApiNameParam: "q",
  // The query parameter for the language
  meteoApiLangParam: "lang",
  // The query parameter for the units
  meteoApiUnitsParam: "units",


};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
