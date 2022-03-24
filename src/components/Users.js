import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "./Card";
import { getUsers } from "../redux/actions/users";

const Users = (props) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <>
      {loading && <p>Loading...</p>}
      {users.length > 0 &&
        users.map((user) => {
          return <Card key={user.id} user={user} />;
        })}
      {users.length === 0 && !loading && <p>No users to show</p>}
      {error && !loading && <p>{error}</p>}
    </>
  );
};

export default Users;
