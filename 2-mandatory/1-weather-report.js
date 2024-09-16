/*
    Imagine we're making a weather app!
    
    We have a list of cities that the user wants to track.
    We also already have a temperatureService function which will take a city as a parameter and return a temparature.

    Implement the function below:
        - take the array of cities as a parameter
        - return an array of strings, which is a statement about the temperature of each city.
            For example, "The temperature in London is 10 degrees"
        - Hint: you can call the temperatureService function from your function
*/

function getTemperatureReport(cities) {
  let result = cities.map((city) => {
    return `The temperature in ${city} is ${temperatureService(city)} degrees`;
  });
  return result;
}

/* ======= TESTS - DO NOT MODIFY ===== */

function temperatureService(city) {
  let temparatureMap = new Map();

  temparatureMap.set("London", 10);
  temparatureMap.set("Paris", 12);
  temparatureMap.set("Barcelona", 17);
  temparatureMap.set("Dubai", 27);
  temparatureMap.set("Mumbai", 29);
  temparatureMap.set("São Paulo", 23);
  temparatureMap.set("Lagos", 33);

  return temparatureMap.get(city);
}

test("should return a temperature report for the user's cities", () => {
  let usersCities = ["London", "Paris", "São Paulo"];

  expect(getTemperatureReport(usersCities)).toEqual([
    "The temperature in London is 10 degrees",
    "The temperature in Paris is 12 degrees",
    "The temperature in São Paulo is 23 degrees",
  ]);
});

test("should return a temperature report for the user's cities (alternate input)", () => {
  let usersCities = ["Barcelona", "Dubai"];

  expect(getTemperatureReport(usersCities)).toEqual([
    "The temperature in Barcelona is 17 degrees",
    "The temperature in Dubai is 27 degrees",
  ]);
});

test("should return an empty array if the user hasn't selected any cities", () => {
  expect(getTemperatureReport([])).toEqual([]);
});
