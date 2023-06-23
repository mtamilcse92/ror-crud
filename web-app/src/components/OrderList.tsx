import {
    Box,
  List,
} from "@mui/material";
import { OrderListResponse } from "../types/order";
import OrderListItem from "./OrderListItem";

type OrderListProps = {
  orders: OrderListResponse;
};

const OrderList = ({ orders }: OrderListProps) => {
  return (
    <Box display="flex" flexDirection="row" flexWrap="wrap" component={List} gap={2}>
      {orders.map((order) => (
        <OrderListItem key={order.id} order={order} />
      ))}
    </Box>
  );
};

export default OrderList;
