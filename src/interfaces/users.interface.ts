export interface User {
  id: number;
  email: string;
  password: string;
  name: string;
  lastName: string;
  avatar: string;
  gender: 'male' | 'female';
}
