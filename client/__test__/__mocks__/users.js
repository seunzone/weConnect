export const signUp = {
  username: 'seunzone',
  email: 'darealseun@gmail.com',
  password: 'thazone',
  confirmPassword: 'thazone'
};

export const signUpResponse = {
  status: 'success',
  data: {
    user: {
      id: 1,
      username: 'seunzone',
      email: 'darealseun@gmail.com',
      token: ''
    }
  }
};

export const signIn = {
  email: 'darealseun@gmail.com',
  password: 'thazone'
};

export const signInResponse = {
  status: 'success',
  data: {
    user: {
      id: 1,
      username: 'seunzone',
      email: 'darealseun@gmail.com',
      token: ''
    }
  }
};

export const userReponseFailed = {
  status: 'fail',
  error: ['Some error why auth failed']
};
