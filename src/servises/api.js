import axios from 'axios';

const fetchUsers = axios.get(
  'https://yalantis-react-school-api.yalantis.com/api/task0/users',
);

export default fetchUsers;
