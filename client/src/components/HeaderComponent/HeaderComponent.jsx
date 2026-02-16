
import { Col, Row, Input } from 'antd';
import './HeaderComponent.scss'
const { Search } = Input;
import { ShoppingCart, Heart, MoonStar, Sun } from 'lucide-react';
import { useEffect } from 'react';

const HeaderComponent = ({ dark, setDark }) => {

  useEffect(() => {
    const theme = dark ? "dark" : "light";
    document.body.setAttribute("data-theme", theme);
  }, [dark]);

  return (
    <div>
      <Row className='header-wrapper' gutter={[48, 0]} align="middle">
        <Col flex="none">
          <div className="d-flex align-items-center justify-content-between gap-5">
            <h1 className='header-logo'>I-Shop</h1>
            {/* <MoonStar /> */}
            {dark
              ? (<Sun onClick={() => setDark(false)} />)
              : (<MoonStar onClick={() => setDark(true)} />
              )}
          </div>
        </Col>
        <Col flex="auto">
          <Search className='header-input'
            placeholder="Input search text"
            allowClear
            enterButton
            size="large"
          // onSearch={onSearch}
          />
        </Col>
        <Col span={6}>
          <div className="right d-flex align-items-center justify-content-between">
            <h3>Đăng nhập / Đăng ký</h3>

            <div className="d-flex gap-4 p-4">
              <ShoppingCart />
              <Heart />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default HeaderComponent