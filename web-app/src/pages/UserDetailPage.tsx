import {
    Box,
    Typography,
  } from "@mui/material";
  import { Loader } from "../App";
import useUserDetailQuery from "../hooks/useUserDetailQuery";
import { useParams } from "react-router-dom";
import UserDetail from "../components/UserDetail";
import useOrderListQuery from "../hooks/useOrderListQuery";
  
  const UserDetailPage = (): JSX.Element => {
  const { id } = useParams<{ id: string }>()
  const { data, isLoading } = useUserDetailQuery(Number(id));
  const { data: orders = [] } = useOrderListQuery(id);
  
    return (
      <Box display="flex" p={2} flexDirection="column">
        <Box display="flex" justifyContent="space-between" mb={2}>
          <Typography variant="h5" fontWeight={600}>
            User Details
          </Typography>
        </Box>
        {isLoading && <Loader />}
        {data && <UserDetail user={data} orders={orders} />}
      </Box>
    );
  };
  
  export default UserDetailPage;
  