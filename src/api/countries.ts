import { Country, JsonCountry } from "@/models/country";

export const getRandomContry = async () => {
  try {
    const res = await require("@/json/countries.json");
    const data: JsonCountry[] = res.filter(
      (elem: JsonCountry) =>
        elem.independent === true && elem.capital.length != 0 && elem.flag
    );

    const randomId = Math.round(Math.random() * (data.length - 1));

    const randomCountry: Country = {
      name: data[randomId].translations.fra.common,
      code: data[randomId].cca2,
      capital: data[randomId].capital[0],
      flagUrl: `/data/${data[randomId].cca2.toLowerCase()}.png`,
      region: data[randomId].region,
    };
    console.log(randomCountry);

    return { country: randomCountry };
  } catch (error:any) {
    return { error: error };
  }
};

export const getRandomNames = async (response: string) => {
  const data :string[] = [];
  for (let i = 0; i < 4; i++) {
    const country = await getRandomContry();
    country.country && data.push(country.country.name);
  }
  data.push(response);
  data.sort((a,b)=>{
    if (a < b) {
      return -1
    }
    if (a>b) {
      return 1
    }
    return 0
  })
  return data;
};

export const getRandomCapitals = async (response:string) => {
  const data : string[] = [];
  for (let i = 0; i < 4; i++) {
    const country = await getRandomContry();
    country.country && data.push(country.country?.capital);
  }
  data.push(response)
  data.sort((a,b)=>{
    if (a < b) {
      return -1
    }
    if (a>b) {
      return 1
    }
    return 0
  })
  return data;
};


