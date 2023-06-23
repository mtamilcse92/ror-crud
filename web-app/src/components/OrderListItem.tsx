import React from "react";
import {
  Box,
  Card,
  Chip,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { Order } from "../types/order";

type OrderListItemProps = {
  order: Order;
};

const OrderListItem = ({ order }: OrderListItemProps) => {
  return (
    <Box component={Card} width={700} variant="outlined" sx={{ px: 1, py: 1 }}>
      <ListItem
        key={order.id}
        sx={{
            alignItems: 'flex-start',
          backgroundColor: order.status === "Delivered" ? "#d0f0d0" : "inherit",
          opacity: order.status === "Processing" ? 0.7 : 1,
        }}
      >
        <ListItemText
          primary={order.product.name}
          secondary={
            <React.Fragment>
              <Typography variant="body2" component="div">
                <Box display="flex" mt={2} flexDirection="column" gap={2}>
                  <Box display="flex" gap={2}>
                    <strong>User:</strong> {order.user.first_name}
                  </Box>
                  <Box display="flex" gap={2}>
                    <strong>Email:</strong> {order.user.email}
                  </Box>
                  <Box display="flex" alignItems="center" gap={2}>
                    <strong>Status:</strong>{" "}
                    <Chip
                      variant="outlined"
                      label={order.status || "In Progress"}
                    />
                  </Box>
                </Box>
              </Typography>
            </React.Fragment>
          }
        />
        <Box display="flex" gap={2} flexDirection="column">
          <Typography
            variant="body2"
            component="div"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <div>
              <strong>Product:</strong> {order.product.name}
            </div>
            <Box sx={{ mx: 2 }}>|</Box>
            <div>
              <strong>Price:</strong> ₹ {order.variant.price}
            </div>
          </Typography>
          <Typography
            variant="body2"
            component="div"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <div>
              <strong>Variant:</strong> {order.variant.name}
            </div>
          </Typography>
        </Box>
      </ListItem>
    </Box>
  );
};

export default OrderListItem;
