export interface OrderDetail {
    id: number;
    status?: string;
    comment: string;
    order_code?: string;
}

export interface OrderPayload {
    user_id: number | null;
    variant_id: number | null;
    product_id: number | null;
}


export interface Variant {
    id: number;
    name: string;
    description: string;
    img_url: string;
    price: number;
}

export interface ProductInfo {
    id: number;
    name: string;
    description: string;
    img_url: string;
    variants: Variant[]
}

export interface Order {
    id: number;
    status: string | null;
    comment: string | null;
    order_code: string | null;
    created_at: string;
    product: {
        id: number;
        name: string;
        description: string;
        img_url: string;
    },
    variant: {
        id: number;
        name: string;
        description: string;
        img_url: string;
        price: string;
    },
    user: {
        id: number;
        first_name: string;
        last_name: string;
        email: string;
        phone_no: string;
    }
}

export interface OrderListResponse extends Array<Order> { }
export interface ProductListResponse extends Array<ProductInfo> { }
