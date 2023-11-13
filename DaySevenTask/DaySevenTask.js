function getCountriesInAsia() {


    let countries = []

    URL = 'https://restcountries.com/v3.1/all'
    const http1 = new XMLHttpRequest();
    http1.open('GET', URL)
    http1.send()
    http1.onload = () => {
        if (http1.status === 200) {
            countries = JSON.parse(http1.response)
            //Question 1
            var asainCountries = countries.filter((countries) => {
                return (countries.region === "Asia") ? console.log(countries.name.common) : "Asian countries not found!!"
            })





            //Question 2
            pop_2_lac = countries.filter((country) => {
                return country.population < 200000 ? console.log(country.name.common) : "No Countries < population < 200000!!"
                console.log(pop_2_lac)
            })

        }



        //Question 3
        countries.forEach(country => {
            console.log(country.name.common, country.capital, country.flags.png, " ||  ", country.flags.svg)
        })


        //Question 4
        let worldPop = countries.reduce((worldPop, country) => {
            return worldPop + country.population
        }, 0)
        console.log(worldPop)
    }


    // Question 5
    let usd_countries = countries.filter((country) => {
        return (country.currencies || country.currencies.USD) ? console.log(country.currencies.USD.name) : "No Countries with USD"

        

    });console.log(usd_countries)


}







