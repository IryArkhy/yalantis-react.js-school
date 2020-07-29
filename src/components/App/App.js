import React, { useState, useEffect } from 'react';
import MonthList from '../MonthsList';
import Layout from '../Layout';
import fetchUsers from '../../servises/api';
import '../../styles.global.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [usersNumberByMonth, setNumber] = useState({});

  useEffect(() => {
    setUsers([]);
    fetchUsers
      .then(res => {
        setUsers(res.data);
        setNumber(
          res.data.reduce((acc, { dob }) => {
            const monthNumber = new Date(dob).getMonth();
            if (!acc[monthNumber]) {
              acc[monthNumber] = 1;
              return acc;
            }
            acc[monthNumber] += 1;
            return acc;
          }, {}),
        );
      })
      .catch(error => new Error(error));
  }, []);

  return (
    <Layout>
      <h1>Users</h1>
      <MonthList users={users} userCounter={usersNumberByMonth} />
    </Layout>
  );
};

export default App;
