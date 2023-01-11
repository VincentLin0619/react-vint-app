import React, { useRef } from 'react';
import MainMenu from '../components/NavBar/MainMenu';
import Footer from '../components/Footer/Footer';
import './HotelItem.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationDot,
  faPeopleGroup,
  faHeartCircleCheck,
} from '@fortawesome/free-solid-svg-icons';

const HotelItem = () => {
  let comments = useRef(null);
  const photos = [
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1',
    },
  ];

  return (
    <div className="hotel">
      <MainMenu />
      <div className="hotel-container">
        <div className="hotel-headerbtn">
          <button>資訊 ＆ 房價</button>
          <button>設施</button>
          <button>訂房須知</button>
          <button>客房評價</button>
        </div>
        <div className="hotel-title">
          <div className="hotel-title_l">
            <span className="tag">飯店</span>
            <span className="hotelName">台南微醺文旅</span>
            <span className="info">
              <FontAwesomeIcon icon={faPeopleGroup} />
              推薦四人住宿
            </span>
            <div className="address">
              <FontAwesomeIcon icon={faLocationDot} /> 台中市西區No.28 Dade
              Stree
              <a href="#">顯示在地圖上</a>
            </div>
          </div>

          <div className="hotel-title_r">
            <button>現在就預訂</button>
            <div>
              <FontAwesomeIcon icon={faHeartCircleCheck} />
              買貴退差價
            </div>
          </div>
        </div>
        <div className="hotel-imgwrapper">
          <div className="hotelImg">
            {photos.slice(0, 6).map(
              (
                item,
                i //不管他再怎麼多 如果剛好有到7張照片就可以觀看更多，並往上加
              ) =>
                i >= 5 ? (
                  <div className="Imgwrap" key={i}>
                    <div className="more">
                      {photos.length > 6
                        ? `+${photos.length - 6}張照片`
                        : '觀看更多'}
                    </div>
                    <img src={item.src} alt="img" />
                  </div>
                ) : (
                  <div className="Imgwrap" key={i}>
                    <img src={item.src} alt="img" />
                  </div>
                )
            )}
          </div>
        </div>
        <div className="hotel-des"></div>
      </div>
      <Footer />
    </div>
  );
};

export default HotelItem;
