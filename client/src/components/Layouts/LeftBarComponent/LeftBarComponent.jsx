import './LeftBarComponent.scss'

function LeftBarComponent() {
  const categories = [
    {
      name: "Máy Tính - Laptop",
      img: "https://salt.tikicdn.com/cache/100x100/ts/category/92/b5/c0/3ffdb7dbfafd5f8330783e1df20747f6.png"
    },
    {
      name: "Điện thoại - Phụ kiện",
      img: "https://salt.tikicdn.com/cache/100x100/ts/category/54/c0/ff/fe98a4afa2d3e5142dc8096addc4e40b.png"
    },
    {
      name: "Thiết bị điện gia dụng",
      img: "https://salt.tikicdn.com/cache/100x100/ts/category/61/d4/ea/e6ea3ffc1fcde3b6224d2bb691ea16a2.png"
    },
    {
      name: "Quần áo",
      img: "https://salt.tikicdn.com/cache/100x100/ts/category/00/5d/97/384ca1a678c4ee93a0886a204f47645d.png"
    },
    {
      name: "Nhà cửa đời sống",
      img: "https://salt.tikicdn.com/cache/100x100/ts/category/40/0f/9b/62a58fd19f540c70fce804e2a9bb5b2d.png"
    },
    {
      name: "Mỹ phẩm",
      img: "https://salt.tikicdn.com/cache/100x100/ts/category/73/0e/89/bf5095601d17f9971d7a08a1ffe98a42.png"
    },

    // 🔥 Thêm mới
    {
      name: "Giày dép",
      img: "https://cdn-icons-png.flaticon.com/128/2589/2589175.png"
    },
    {
      name: "Đồng hồ - Trang sức",
      img: "https://cdn-icons-png.flaticon.com/128/3081/3081986.png"
    },
    {
      name: "Đồ chơi - Mẹ & Bé",
      img: "https://cdn-icons-png.flaticon.com/128/3081/3081826.png"
    },
    {
      name: "Sách - Văn phòng phẩm",
      img: "https://cdn-icons-png.flaticon.com/128/29/29302.png"
    },
    {
      name: "Thể thao - Dã ngoại",
      img: "https://cdn-icons-png.flaticon.com/128/857/857681.png"
    },
    {
      name: "Ô tô - Xe máy",
      img: "https://cdn-icons-png.flaticon.com/128/743/743007.png"
    }
  ];

  return (
    <div className='leftbar-wrapper py-4'>
      <div className="category">
        <div className="title px-4">
          Danh mục
        </div>

        {categories.map((item, index) => (
          <div className="item px-4" key={index}>
            <img src={item.img} alt={item.name} />
            <span>{item.name}</span>
          </div>
        ))}
      </div>

    </div>
  )
}

export default LeftBarComponent