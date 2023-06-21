import { Box, Button, Typography } from "@mui/material";
import useOrderCreateMutation from "../hooks/useOrderCreateMutation";
import { useParams } from "react-router-dom";
import useUserDetailQuery from "../hooks/useUserDetailQuery";
import UserListItem from "../components/UserListItem";
import { useState } from "react";
import { OrderPayload, ProductInfo } from "../types/order";
import useProductListQuery from "../hooks/useProductListQuery";
import ProductList from "../components/ProductList";

const defaultOrder: OrderPayload = {
  user_id: null,
  product_id: null,
  variant_id: null,
};

const CreateUserPage = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const [order, setOrder] = useState<OrderPayload>({ ...defaultOrder, user_id: Number(id) });
  const { data: userDetail } = useUserDetailQuery(Number(id));
  const { mutateAsync } = useOrderCreateMutation();
  const { data: products } = useProductListQuery();

  const handleSubmit = () => {
    mutateAsync(order);
  };

  const handleProductSelect = (updatedOrder: OrderPayload) => setOrder({...order, ...updatedOrder })

  return (
    <Box display="flex" p={2} flexDirection="column">
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Typography variant="h5" sx={{ mb: 2 }} fontWeight={600}>
          New Order
        </Typography>
        <Button disabled={!order.product_id || !order.variant_id} variant="outlined" onClick={handleSubmit}>
          Add Order
        </Button>
      </Box>
      {userDetail && <UserListItem deletable={false} creatable={false} user={userDetail} />}
      <ProductList order={order} products={products || []} handleProductSelect={handleProductSelect} />
    </Box>
  );
};

export default CreateUserPage;
