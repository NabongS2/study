
let user : {
  id? : number; name : string;
} = {
  id: 1,
  name: "이나현",
};

let dog : {
  name: string, color: string,
}= {
  name: "돌돌이", color: "brown",
};

user = {
  name: "홍길동",
}

let config : {
  readonly apiKey: string;
} = {
  apiKey : "MY API KEY",
}

config.apiKey = "hacked";