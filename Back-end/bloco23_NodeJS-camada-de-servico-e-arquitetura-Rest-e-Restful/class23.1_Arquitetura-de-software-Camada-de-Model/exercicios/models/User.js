const connection = require('./connection');

const formatUser = ({ id, first_name: firstName, last_name: lastName, email }) => {
  return {
    id,
    firstName,
    lastName,
    email,
  };
}

const createNewUser =  () => {
  const [user] = connection.execute(
    'INSERT'
  )
}