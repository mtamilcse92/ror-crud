import React from "react";
import { Box, Typography } from "@mui/material";
import SelectableCard from "./SelectableCard";
import { OrderPayload, ProductListResponse } from "../types/order";

type UserListProps = {
  products: ProductListResponse;
  order: OrderPayload;
  handleProductSelect: (updatedOrder: OrderPayload) => void;
};

const ProductList = ({
  products,
  order,
  handleProductSelect,
}: UserListProps) => {
  const selectedProduct = products.find(({ id }) => id === order.product_id);

  return (
    <Box display="flex" flexDirection="row" gap={2} mt={3}>
      <Box display="flex" flex={1} flexDirection="column">
        <Typography>Products</Typography>
        <Box display="flex" gap={2} mt={2} flexWrap="wrap">
          {products.map((product) => (
            <SelectableCard
              selected={order.product_id === product.id}
              onSelect={() => handleProductSelect({ ...order, "product_id": product.id, "variant_id": null })}
              title={product.name}
              description={product.description}
            />
          ))}
        </Box>
      </Box>
      <Box display="flex" flex={1} flexDirection="column">
        <Typography>Variants</Typography>
        <Box display="flex" gap={2} mt={2} flexWrap="wrap">
          {selectedProduct?.variants.map((variant) => (
            <SelectableCard
              selected={order.variant_id === variant.id}
              onSelect={() => handleProductSelect({ ...order, "variant_id": variant.id})}
              title={`${variant.name} - ${variant.price}`}
              description={variant.description}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ProductList;
