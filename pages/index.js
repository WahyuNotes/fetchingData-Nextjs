import { useGetUsersQuery } from "./services/users";

export default function Home() {
  const { data, error, isLoading, isSuccess, isError } = useGetUsersQuery();

  return (
    <div>
      <h1>Wellcome</h1>
      <h1>{isLoading && "Loading..."}</h1>
      <h1>{isError && error.error}</h1>

      {isSuccess &&
        data &&
        data.map((user, index) => {
          return <h1 key={index}>{user.name}</h1>;
        })}
    </div>
  );
}
