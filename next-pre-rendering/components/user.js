function UsersComponent({ user }) {
  return (
    <>
      <p>{user.name}</p>
      <p>{user.email}</p>
    </>
  );
}

export default UsersComponent;
