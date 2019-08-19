import { continents, countries, languages } from 'countries-list'

export const getCountries = () => {
  const countriesArr = Object.entries(countries)
  const countriesList = []
  for (const [code, countryObj] of countriesArr) {
    const continent = {
      code: countryObj.continent,
      name: continents[countryObj.continent]
    }
    const languagesArr = []
    countryObj.languages.forEach(languageCode => languagesArr.push(languages[languageCode].name))
    const country = {
      code: code,
      name: countryObj.name,
      native: countryObj.native,
      phone: countryObj.phone,
      continent: continent,
      capital: countryObj.capital,
      currency: countryObj.currency,
      languages: languagesArr,
      emoji: countryObj.emoji,
      emojiU: countryObj.emojiU
    }
    countriesList.push(country)
  }
  return countriesList
}

 export const getContinents = () => {
  const continentsArr = Object.entries(continents)
  const continentsList = []
  const countriesArray = getCountries()
  for (const [code, continentName] of continentsArr) {
    const countriesList = countriesArray.filter(country => country.continent.code === code)
    const continent = {
      code: code,
      name: continentName,
      countries: countriesList
    }

    continentsList.push(continent)
  }
  return continentsList
}
