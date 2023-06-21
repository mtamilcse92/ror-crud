import { OrderDetail } from "./order";

export interface UserInfo {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    phone_no: string;
    orders: OrderDetail[]
}

export interface UserListResponse extends Array<UserInfo> {}
