## Encyclopedia

This is a PWA app `(progressive web application)` which we can get information about countries such as their names, currencies, regions, locations, weathers, etc.

## Requirements

- [ ] Search countries: user can search countries by name and see matched countries with the query
- [ ] Show result of countries: user can see the search results and could pick one.
- [ ] Show country info: after choosing a country, user transfered to the information page
- [ ] Show country location: user can see the country location on the map and could interact with the map.
- [ ] Show country currency: user can see the exchange of the country currency and choose between variant currencies.
- [ ] Show country weather: user can see today weather of the country.

In the project directory, you can run:

## Conventions

[Airbnb](https://github.com/airbnb/javascript/tree/master/react), eslint, prettier

PascalCase for folder names, file names, components, reference naming

camelcase for variables, methods

Styled components for css `(also emotion js & glamorous)`

## Project Structure

Directory Layout :
component-centric file layout

```
- src/
--+ components/
----+ App/
------- index.jsx
------- index.css
----+ Search/
------+ __tests__
--------- SearchBar.test.jsx
------- index.jsx
------- index.css
------- SearchBar.jsx
------- Results.jsx
------- ResultItem.jsx
----+ Country/
------+ __tests__
--------- Info.test.jsx
------- index.jsx
------- index.css
------- Info.jsx
------- Location.jsx
------- Currency.jsx
------- Weather.jsx
--+ services/
----- useFetch.js
----+ country/
------- getCountryByName.js
------- getCountryByFullName.js
----+ currency/
------- getCurrencyExchange.js
----+ weather/
------- getTodayWeatherByCapital.js
```
