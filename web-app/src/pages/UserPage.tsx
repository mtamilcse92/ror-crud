import {
  Box,
  Typography,
  InputAdornment,
  IconButton,
  Button,
  TextField,
} from "@mui/material";
import React from "react";
import useUserListQuery from "../hooks/useUserListQuery";
import UserList from "../components/UserList";
import useDebounceSearch from "../hooks/useDebounceSearch";
import SearchIcon from "@mui/icons-material/Search";
import { Loader } from "../App";

const inputProps={
  endAdornment: (
    <InputAdornment position="start">
      <IconButton>
        <SearchIcon />
      </IconButton>
    </InputAdornment>
  ),
};

const UserPage = (): JSX.Element => {
  const { value, onChange } = useDebounceSearch("", 500);
  const { data = [], isLoading } = useUserListQuery(value);

  const handleOnChange = (e: any) => {
    onChange(e.target.value);
  };

  return (
    <Box display="flex" p={2} flexDirection="column">
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Typography variant="h5" fontWeight={600}>
          User List
        </Typography>
        <Box display="flex" justifyContent="space-between" gap={2}>
          <TextField
            InputProps={inputProps}
            placeholder="Search...."
            onChange={handleOnChange}
          />
          <Button variant="outlined" href="/users/create">
            Create User
          </Button>
        </Box>
      </Box>
      {isLoading && <Loader />}
      {!isLoading && <UserList users={data} />}
    </Box>
  );
};

export default UserPage;
