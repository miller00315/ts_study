type User = { userName: string; password: string };

type VerifyUser = (user: User, sentValue: User) => boolean;

const verifyUser: VerifyUser = (user, sentValue) => {
  return (
    user.userName === sentValue.userName && user.password === sentValue.password
  );
};

const bdUser = {
  userName: '1234',
  password: '123',
};

const sentUser = {
  userName: '123',
  password: '123',
};

console.log(verifyUser(bdUser, sentUser));
