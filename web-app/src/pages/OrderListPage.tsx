import {
    Box,
    Typography,
  } from "@mui/material";
  import React from "react";
  import useOrderListQuery from "../hooks/useOrderListQuery";
  import OrderList from "../components/OrderList";
  import { Loader } from "../App";
  
  const OrderListPage = (): JSX.Element => {
    const { data = [], isLoading } = useOrderListQuery();
    
    return (
      <Box display="flex" p={2} flexDirection="column">
        <Box display="flex" justifyContent="space-between" mb={2}>
          <Typography variant="h5" fontWeight={600}>
            Order List
          </Typography>
        </Box>
        {isLoading && <Loader />}
        {!isLoading && <OrderList orders={data} />}
      </Box>
    );
  };
  
  export default OrderListPage;
  