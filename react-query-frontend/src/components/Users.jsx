import React from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import axios from "axios";

const fetchUsers = async () => {
  const { data } = await axios.get("http://localhost:3001/users");
  return data;
};

const updateUser = async (updatedUser) => {
  const { data } = await axios.put(
    `http://localhost:3001/users/${updatedUser.id}`,
    updatedUser
  );
  return data;
};

function Users() {
  const queryClient = useQueryClient();

  const { data, error, isLoading, isFetching } = useQuery("users", fetchUsers, {
    staleTime: 1000 * 60, // 1 minute
    cacheTime: 1000 * 60 * 10,
  });

  const mutation = useMutation(updateUser, {
    onSuccess: () => {
      queryClient.invalidateQueries("users");
    },
  });

  if (isLoading) return "Loading...";
  if (error) return "An error occurred";

  const handleUpdateUser = (user) => {
    mutation.mutate({ ...user, name: "Updated Name" });
  };

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            {user.name}
            <button onClick={() => handleUpdateUser(user)}>Update</button>
          </li>
        ))}
      </ul>
      {isFetching && <div>Updating...</div>}
    </div>
  );
}

export default Users;
