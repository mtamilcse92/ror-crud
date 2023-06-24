import React from "react";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Box,
  Card,
  Button,
} from "@mui/material";
import { Delete as DeleteIcon, Edit as EditIcon } from "@mui/icons-material";
import { UserInfo } from "../types/users";
import useUserDeleteMutation from "../hooks/useUserDeleteMutation";
import { Link } from "react-router-dom";

type UserListItemProps = {
  user: UserInfo;
  deletable?: boolean;
  creatable?: boolean;
};

const UserListItem = ({ user, deletable = true, creatable = true }: UserListItemProps) => {
  const { mutateAsync } = useUserDeleteMutation();
  const handleDelete = () => mutateAsync(user.id);

  return (
    <Card variant="outlined" sx={{ px: 2, py: 1 }}>
      <ListItem key={user.id}>
            <ListItemText sx={{ width: 200 }} primaryTypographyProps={{ variant: 'h6', fontWeight: 600, marginBottom: 2 }} primary={`${user.first_name} ${user.last_name}`} secondary={`${user.email}, ${user.phone_no}`} />
            <Box display="flex">
            </Box>
            <Box display="flex" component={ListItemSecondaryAction} gap={3} justifyContent="space-between">
              <Button color="secondary" href={`/users/${user.id}/details`} disabled={user.orders.length === 0} variant="text">Total Orders: ( {user.orders.length} )</Button>
              {creatable && <Button variant="outlined" href={`/users/${user.id}/orders/create`}>Create Order</Button>}
              <Link to={`/users/${user.id}/edit`}>
                <IconButton
                  edge="end"
                  color="primary"
                  aria-label="edit"
                >
                  <EditIcon />
                </IconButton>
              </Link>
             {deletable && <IconButton
                edge="end"
                color="error"
                aria-label="delete"
                onClick={handleDelete}
              >
                <DeleteIcon />
              </IconButton>}
            </Box>
          </ListItem>
      </Card>
  );
};

export default UserListItem;
