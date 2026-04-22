import React from 'react'

import { Card } from 'antd';
const { Meta } = Card;
import { ShoppingCartOutlined, CheckCircleOutlined } from '@ant-design/icons';

const ProductCardComponent = ({ product }) => {
    return (
        <Card
            size="small"
            hoverable="true"
            className="main-bg border card-animate custom-title"
            style={{ width: 240 }}
            cover={
                <img
                    className="border p-0"
                    draggable={false}
                    alt={product.title}
                    src={product.img}
                />
            }
            actions={[
                <span className="action-btn text-primary">
                    <ShoppingCartOutlined key="shop-act" />
                    Giỏ hàng
                </span>
                ,
                <span className="action-btn text-success" key="setting">
                    <CheckCircleOutlined key="buy-act" />
                    Mua ngay
                </span>,
            ]}
        >
            <Meta title={product.title} description={
                <div className="product-price">
                    <h2 className="price-current product-price">{product.current.toLocaleString("vi-VN")} đ</h2>
                    <span className="price-original">{product.original.toLocaleString("vi-VN")} đ</span> <span className="price-discount ms-2"> -{product.discount}%</span>
                </div>
            } />
        </Card>
    )
}

export default ProductCardComponent