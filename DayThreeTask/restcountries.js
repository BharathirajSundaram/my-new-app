function getUserDetails() {
    var http = new XMLHttpRequest(); // initializing XMLHttpRequest class
    http.open('GET', "https://restcountries.com/v3.1/all"); //using open() method passing http method and URL to fetch the data
    http.send() // sending the http request
    http.onload = () => {
        if (http.status === 200) {
            let response = http.response;
            let responseType = typeof response;
            //console.log(response);
            //console.log(responseType);
            let jsonObj = JSON.parse(response);
            // let objType = typeof jsonObj;
            // console.log(objType);
            console.log(jsonObj)
            console.log("=========================")
            for (const country of jsonObj) {
                //console.log(country.name.common, country.flags.svg) //To Print the Flags in SVG
                //console.log(country.name.common, country.flags.png) //To Print the Flags in PNG
                console.log("Country Name : " + country.name.common,"  || ",country.flags.png," ||  ", country.flags.svg," ||  ", " Region Name : " + country.region, "  || ", " Sub Region : " + country.subregion, " ||  ", " Population : " + country.population)
            }
            console.log("=========================")

        }
        else {
            console.log("Error in fetching the data");
        }
    }
}