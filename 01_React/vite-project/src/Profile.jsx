const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

export default function Profile({user}) {
  // if 혹은 삼항 연산자로 조건부 렌더링 가능
  // return user.name ?
  //   (
  //     <>
  //       {/* 중괄호 안에 복잡한 계산 */}
  //       <h1>{user.name}</h1>
  //       <img
  //         className="avatar"
  //         src={user.imageUrl}
  //         alt={'Photo of ' + user.name}
  //         style={{
  //           width: user.imageSize,
  //           height: user.imageSize
  //         }}
  //       />
  //     </>
  //   )
  // : (<div>not fonud name</div>)

  return user.imageSize &&
    (
      <>
        {/* 중괄호 안에 복잡한 계산 */}
        <h1>{user.name}</h1>
        <img
          className="avatar"
          src={user.imageUrl}
          alt={'Photo of ' + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize
          }}
        />
      </>
    )
}