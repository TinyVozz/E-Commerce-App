import React from 'react'
import ProductCardComponent from '../ProductCardComponent/ProductCardComponent'

import { Col, Row } from 'antd';

const products = [
    {
        id: 1,
        title: "Nồi hầm dưỡng sinh KG3SC1 (3 Lít) - Hàng chính hãng",
        img: "https://salt.tikicdn.com/cache/280x280/ts/product/b7/95/39/0362b7a25b7624c7cf55061be706ee7e.jpg.webp",
        current: 2000000,
        original: 3000000,
        discount: 15,
    },
    {
        id: 2,
        title: "Điện thoại Samsung Galaxy A26 5G (8/128GB)",
        img: "https://salt.tikicdn.com/cache/280x280/ts/product/e3/9d/b3/7a965246188ce9d42ea6041b66f707da.jpg.webp",
        current: 2000000,
        original: 3000000,
        discount: 15,
    },
    {
        id: 3,
        title: "Điện Thoại Samsung Galaxy A56 5G - Hàng Chính Hãng",
        img: "https://salt.tikicdn.com/cache/280x280/ts/product/0e/04/3c/4846407d1f00e6d8cf815d326a2e078e.jpg.webp",
        current: 2000000,
        original: 3000000,
        discount: 15,
    },
    {
        id: 4,
        title: "Camera IP Wifi Trong Nhà EZVIZ C6N 1080p",
        img: "https://salt.tikicdn.com/cache/280x280/media/catalog/producttmp/3c/ff/4e/a66a029e723be04dda41a3d76c8f7ba8.png.webp",
        current: 2000000,
        original: 3000000,
        discount: 15,
    },
    {
        id: 5,
        title: "Máy làm sữa hạt Elmich CBE-8650 - Hàng chính hãng",
        img: "https://salt.tikicdn.com/cache/280x280/ts/product/63/76/a6/8f1f3713a38ac664f7208fd0dd5f9ae6.jpg.webp",
        current: 2000000,
        original: 3000000,
        discount: 15,
    },
    {
        id: 6,
        title: "Laptop Asus Expertbook B1502 - B1502CV (Intel Core i5-1335U | RAM 8GB | 512GB SSD | Intel UHD Graphics | 15.6 inch Full HD | Win 11 bản quyền) - Hàng Chính Hãng",
        img: "https://salt.tikicdn.com/cache/280x280/ts/product/c3/38/e0/78676b0c573733c58a097aaa70a97d37.jpg.webp",
        current: 2000000,
        original: 3000000,
        discount: 15,
    },
    {
        id: 7,
        title: "Nồi Cơm Điện Tử Toshiba RC-10NMFVN (WT) (1 Lít) - Hàng Chính Hãng",
        img: "https://salt.tikicdn.com/cache/280x280/ts/product/5f/09/c4/59156edcb6d7801e6db6f5186f2b27d3.jpg.webp",
        current: 2000000,
        original: 3000000,
        discount: 15,
    },
    {
        id: 8,
        title: "Lò Nướng Không Khí Lock&Lock EJF691 (10 Lít) - Hàng Chính Hãng",
        img: "https://salt.tikicdn.com/cache/280x280/media/catalog/producttmp/b1/62/be/7d41a91ead4025a21e4ed70905961309.jpg.webp",
        current: 2000000,
        original: 3000000,
        discount: 15,
    },
];

const ProductListComponent = () => {
    return (
        <div>
            <Row gutter={[12, 12]} className="mt-3">
                {products.map((item) => (
                    <Col span={6} key={item.id}>
                        <ProductCardComponent product={item} />
                    </Col>
                ))}
            </Row>
        </div >
    )
}

export default ProductListComponent