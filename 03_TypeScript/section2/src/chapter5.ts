// enum 타입
// 여러가지 값 들에 각각 이름을 부여해 열거해두고 사용하는 타입
enum Role {
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
}


enum Language {
  korean = "ko",
  english = "en",
}

const user1 = {
  name : "이나현",
  role : Role.ADMIN, // 관리자
  language : Language.korean,
}

const user2 = {
  name : "홍길동",
  role : Role.ADMIN, // 일반 유저
  language : Language.english,
}

const user3 = {
  name : "아무개",
  role : Role.GUEST, // 게스트
  Language : Language.korean,
}

console.log(user1, user2, user3);
