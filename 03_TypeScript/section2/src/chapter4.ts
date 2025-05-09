// 타입 별칭
type User = {
  id : number;
  name : string;
  nickname : string;
  birth : string;
  bio : string;
  location : string;
}

let user : User = {
  id :1,
  name : "이나현",
  nickname : "winterlood",
  birth : "1997.01.07",
  bio : "안녕하세요",
  location : "부천시",
};

export {};


// type CountryCodes = {
//   Korea : string;
//   UnitedState : string;
//   UnitedKingdom : string;
// }

// 인덱스 시그니처
type CountryCodes = {
  [key: string]: string;
}
let countryCodes = {
  Korea : 'ko',
  UnitedState : "us",
  UnitedKingdom : "uk",
}

type CountryNumberCodes = {
  [key : string] : number;
  Korea : string;
};

let countryNumberAndStringCodes : CountryNumberCodes = {
  Korea : '410',
}
