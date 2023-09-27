import { Country, JsonCountry } from "@/models/country";

export const getRandomContry = async () => {
  try {
    const res = await require("@/json/countries.json");
    const data: JsonCountry[] = res.filter((elem:JsonCountry)=> elem.independent === true );

    const randomId = Math.round(Math.random() * 249);

    const randomCountry: Country = {
      name: data[randomId].translations.fra.common,
      code: data[randomId].cca2,
      capital: data[randomId].capital[0],
      flagUrl: `/data/${data[randomId].cca2.toLowerCase()}.png`,
      region: data[randomId].region,
    };
    console.log(randomCountry);

    if (randomCountry.capital.length === 0) {
      randomCountry.capital = "aucune";
    }

    return { country: randomCountry };
  } catch (error) {
    return { error: error };
  }
};
