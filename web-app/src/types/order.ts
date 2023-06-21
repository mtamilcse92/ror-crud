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

export interface ProductListResponse extends Array<ProductInfo> {}
