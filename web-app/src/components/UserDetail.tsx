import {
  ListItemText,
  Card,
  Typography,
  Stack,
  Box,
} from "@mui/material";
import { UserInfo } from "../types/users";
import { OrderListResponse } from "../types/order";
import { format } from 'date-fns';

type UserDetailProps = {
  user: UserInfo;
  orders: OrderListResponse;
};

const UserDetail = ({ user, orders }: UserDetailProps) => {

  return (
    <Stack flexDirection="column" gap={2}>
        <Card variant="outlined" sx={{ px: 2, py: 1 }}>
            <ListItemText sx={{ width: 250 }} primaryTypographyProps={{ variant: 'h6', fontWeight: 600, marginBottom: 2 }} primary={`${user.first_name} ${user.last_name}`} secondary={`${user.email}, ${user.phone_no}`} />
        </Card>
        <Typography variant="h5" fontWeight={600}>
            Orders
        </Typography>
        <Stack gap={2} flexDirection="row">
            {orders.map((order) => {
                return <Box minWidth={300} p={2} py={3} component={Card} display="flex" gap={2} flexDirection="column">
                <Typography
                  variant="body2"
                  component="div"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <div>
                    <strong>Product:</strong> {order?.product?.name ?? '-'}
                  </div>
                </Typography>
                <Typography
                  variant="body2"
                  component="div"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <div>
                    <strong>Order Date:</strong> {format(new Date(order?.created_at), 'mm-dd-yyyy')}
                  </div>
                </Typography>
                <Typography
                  variant="body2"
                  component="div"
                  sx={{ display: "flex", justifyContent: 'space-between', alignItems: "center" }}
                >
                  <div>
                    <strong>Variant:</strong> {order?.variant?.name ?? '-'}
                  </div>
                  <Box sx={{ mx: 2 }}>|</Box>
                  <div>
                    <strong>Price:</strong> ₹ {order?.variant?.price ?? '0.00'}
                  </div>
                </Typography>
              </Box>
            })}
        </Stack>
    </Stack>
  );
};

export default UserDetail;
