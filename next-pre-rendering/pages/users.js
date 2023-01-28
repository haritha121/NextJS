import UsersComponent from "../components/user";

function Users({ users }) {
  return (
    <>
      <h1>Users Data</h1>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <UsersComponent user={user} />
          </div>
        );
      })}
    </>
  );
}

export default Users;
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);
  return {
    props: {
      users: data,
    },
  };
}
