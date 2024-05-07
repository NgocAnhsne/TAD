import React, { useEffect, useState } from 'react';
import './style.scss';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import catfoot from '~/components/asset/img/catfoot.png';
import { LuCat } from "react-icons/lu";
export default function Shop() {
  
  const { id } = useParams();
  const [isVisibleLoading, setIsVisibleLoading] = useState(false);
  const [shopField, setShopField] = useState([]);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || {});

  useEffect(() => {
      fetchData();
  }, [id]);
  
  const fetchData = async () => {
      try {
          const result = await axios("http://127.0.0.1:8000/api/shop/user");
          setShopField(result.data.data);
      } catch (err) {
          console.log("something went wrong");
      }
  };

  const buyProduct = async (product) => {
    try {
      const response = await axios.post(`http://127.0.0.1:8000/api/bag/buy`, {
        id_user: user.id,
        name: product.name,
        description: product.description,
        image: product.image,
        status: product.status,
        price: product.price,
        value: product.value
      });
  
      const updatedCoin = user.coin - product.price;
      if (updatedCoin < 0) {
        alert("Không đủ tiền để mua sản phẩm này!");
        return;
      }
  
      await axios.put(`http://127.0.0.1:8000/api/bag/update/coin/${user.id}`, {
        newcoin: updatedCoin
      });
  
      const updatedUser = { ...user, coin: updatedCoin };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
  
      const productElement = document.getElementById(`product-${product.id}`);
      const shoppingCart = document.getElementById('shopping-cart');
      
      if (productElement && shoppingCart) {
        const productRect = productElement.getBoundingClientRect();
        const cartRect = shoppingCart.getBoundingClientRect();
        
        const deltaX = cartRect.left - productRect.left + cartRect.width / 2 - productRect.width / 2;
        const deltaY = cartRect.top - productRect.top + cartRect.height / 2 - productRect.height / 2;
  
        productElement.style.transitionDuration = '0.8s';
        productElement.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(0)`;
        setTimeout(() => {
          productElement.style.transitionDuration = '0s';
          productElement.style.transform = 'none';
        }, 800); 
      }
    } catch (error) {
      console.error('Error while buying product:', error);
    }
  };
  

  return (
    <div className='shop'>
        <div className='shop_header'>
            <div><h1>Cửa hàng bán đồ ăn</h1></div>
            <div className='shop_header_right'>
              <div className='shop_header_right_money'>
                <span>{user.coin}<img src={catfoot} alt="catfoot"/></span>
              </div>
              <Link to='/student/pet' className='shop_header_right_money' id='shopping-cart'>
                <LuCat/>
              </Link>
            </div>
        </div>
        <div className='shop_body'>
            {shopField.length > 0 ? (
                shopField.map((item, i) => (
                    <div className='shop_body_item' key={i} onClick={() => {buyProduct(item, user.id)}} id={`product-${item.id}`}>
                        <div className='shop_body_img'>
                            <img src={item.image} alt="product" />
                        </div>
                        <div className='shop_body_info'>
                            <div className='shop_body_info_name'>
                                <p>{item.name}</p>
                                <span>{item.description }</span>
                            </div>
                            <div className='shop_body_info_price'>
                                <span className='exp'> {item.value}EXP</span> 
                                <span>{item.price}<img src={catfoot} alt="catfoot" /></span>
                            </div>
                        </div>

                    </div>   
                    
                ))
            ) : (
                <div>
                    <h2 className="text-danger text-center">
                        Không có sản phẩm nào
                    </h2>
                </div>
            )}         
        </div>
    </div>
  );
}
