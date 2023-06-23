import {
    Box,
  List,
} from "@mui/material";
import { UserListResponse } from "../types/users";
import UserListItem from "./UserListItem";

type UserListProps = {
  users: UserListResponse;
};

const UserList = ({ users }: UserListProps) => {
  return (
    <Box display="flex" flexDirection="column" component={List} gap={2}>
      {users.map((user) => (
        <UserListItem key={user.id} user={user} />
      ))}
    </Box>
  );
};

export default UserList;
