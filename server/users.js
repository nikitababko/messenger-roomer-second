const users = [];

const addUser = ({ id, name, room }) => {
  name = name.trim().toLowerCase();
  name = room.trim().toLowerCase();

  const existingUser = users.find((user) => user.room === room && user.name === name);

  if (existingUser) {
    return { error: 'Username is taken' };
  }

  const user = { id, name, room };

  users.push(user);

  return { user };
};

const removeUser = () => {
  //
};

const getUser = () => {
  //
};

const getUsersInRoom = () => {
  //
};