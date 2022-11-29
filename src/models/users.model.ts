import { User } from '@interfaces/users.interface';

const userModel: User[] = [
  {
    id: 1,
    email: 'example1@email.com',
    password: '$2b$10$TBEfaCe1oo.2jfkBDWcj/usBj4oECsW2wOoDXpCa2IH9xqCpEK/hC',
    name: 'Ivan',
    lastName: 'Ivanov',
    gender: 'male',
    avatar: 'link',
  },
  {
    id: 2,
    email: 'example2@email.com',
    password: '$2b$10$TBEfaCe1oo.2jfkBDWcj/usBj4oECsW2wOoDXpCa2IH9xqCpEK/hC',
    name: 'Fedor',
    lastName: 'Fedorov',
    gender: 'male',
    avatar: 'link',
  },
  {
    id: 3,
    email: 'example3@email.com',
    password: '$2b$10$TBEfaCe1oo.2jfkBDWcj/usBj4oECsW2wOoDXpCa2IH9xqCpEK/hC',
    name: 'Anastasya',
    lastName: 'Ivanova',
    gender: 'female',
    avatar: 'link',
  },
  {
    id: 4,
    email: 'example4@email.com',
    password: '$2b$10$TBEfaCe1oo.2jfkBDWcj/usBj4oECsW2wOoDXpCa2IH9xqCpEK/hC',
    name: 'Anna',
    lastName: 'Fedorova',
    gender: 'female',
    avatar: 'link',
  },
];

export default userModel;
