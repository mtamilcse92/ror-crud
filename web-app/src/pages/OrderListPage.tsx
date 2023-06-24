import {
  Autocomplete,
    Box,
    TextField,
    Typography,
  } from "@mui/material";
  import React, { useMemo, useState } from "react";
  import useOrderListQuery from "../hooks/useOrderListQuery";
  import OrderList from "../components/OrderList";
  import { Loader } from "../App";
import useUserListQuery from "../hooks/useUserListQuery";
  
  const OrderListPage = (): JSX.Element => {
    const [user, setUser] = useState('');
    console.log('----', user)
    const { data = [], isLoading } = useOrderListQuery(user);
    const { data: users = [] } = useUserListQuery();

    const userOptions = useMemo(() => users.map(({ first_name, last_name, id }) => ({ label: `${first_name} ${last_name}`, value: id })), [users]);

    const handleAutocompleteChange = (
      event: React.SyntheticEvent<unknown>,
      option: any
    ) => {
      setUser(option?.value ?? '');
    };
    
    return (
      <Box display="flex" p={2} flexDirection="column">
        <Box display="flex" justifyContent="space-between" mb={2}>
          <Typography variant="h5" fontWeight={600}>
            Order List
          </Typography>
          <Autocomplete
            disablePortal
            options={userOptions}
            sx={{ width: 300 }}
            onChange={handleAutocompleteChange}
            renderInput={(params) => <TextField {...params} label="Users" />}
          />
        </Box>
        {isLoading && <Loader />}
        {!isLoading && <OrderList orders={data} />}
      </Box>
    );
  };
  
  export default OrderListPage;
  