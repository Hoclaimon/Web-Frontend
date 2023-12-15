import './hotel.css'
import Navbar from "../../components/navbar/Navbar"
import MailList from "../../components/mailList/MailList"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const Hotel = () => {

  const [slideNumber, setSlideNumber] = useState(0)
  const [open, setOpen] = useState(false)

  const photo = [
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/434795469.jpg?k=788df0fda34f9f7698d412e93ba2253046086ada25e78fa379c8141f840d5dcc&o=&hp=1'
    },
    {
      src: 'https://vn.jwmarriotthanoi.com/resourcefiles/roomssmallimages/phong-deluxe-view-thanh-pho-twin.jpg?version=1272023014827'
    },
    {
      src: 'https://bitexco.com.vn/wp-content/uploads/2019/01/Deluxe-Suite-990x660.jpg'
    },
    {
      src: 'https://jw-marriott-hotel-hong-kong.hotelmix.vn/data/Photos/OriginalPhoto/13540/1354042/1354042457/Jw-Marriott-Hotel-Hong-Kong-Exterior.JPEG'
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/488066775.jpg?k=624c3f5d623f9b33fe6cb9b2782d96b41f625a2bc7d325ae1e8e4ad1149012e8&o=&hp=1'
    },
    {
      src: 'https://s7d1.scene7.com/is/image/marriotts7prod/jw-hanjw-deluxe-suite-16026:Wide-Hor?wid=1336&fit=constrain'
    }
  ]

  const handleOpen = (index) => {
    setSlideNumber(index);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSliderNumber;
    if (direction==='R') {
      newSliderNumber = slideNumber === 5 ? 0 : slideNumber+1
    } else {
      newSliderNumber = slideNumber === 0 ? 5 : slideNumber-1
    }

    setSlideNumber(newSliderNumber);
  };

  return (
    <div>
      <Navbar />
      <div className="hotelContainer">
        {open && <div className="slider">
          <FontAwesomeIcon icon={ faCircleXmark } className='close'
          onClick={ () => setOpen(false) }/>

          <FontAwesomeIcon icon={ faCircleArrowLeft } className='arrow' 
            onClick={ () => handleMove('L') }/>
          <div className="sliderWrapper">
            <img src={ photo[slideNumber].src } alt="" className="sliderImg" />
          </div>
          <FontAwesomeIcon icon={ faCircleArrowRight } className='arrow'
            onClick={ () => handleMove('R') }/>

        </div>}
        <div className="hotelWrapper">
          <button className='bookNow'>Reserve or Book now!</button>
          <h1 className="hotelTitle">JW Marriott</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={ faLocationDot }/>
            <span>Some where in Ha Noi</span>
          </div>
          <span className='hotelDistance'>Good location - 3 km from center</span>
          <span className="hotelPriceHighLight">
            Book a stay over $100 and get a free airport taxi!
          </span>
          <div className="hotelImages">
            {photo.map((photo, index) => (
              <div className="hotelImgWrapper" key={index}>
                <img onClick={ () => handleOpen(index) } src={ photo.src } height={210} width={300} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Luxury hotel</h1>
              <p className="hotelDesc">
              JW Marriott Hanoi dành được sự yêu mến của những thực khách
               sành điệu nhất bởi những lựa chọn tinh tế đến từ 6 nhà 
               hàng và 3 quầy bar với ẩm thực đa dạng đến từ nhiều 
               quốc gia. Đến với khách sạn JW Marriott Hanoi, khách hàng 
               sẽ được chào đón bởi sự thân thiện của đội ngũ nhân viên 
               tận tình và tận hưởng những dịch vụ cao cấp bậc nhất khu 
               vực, đảm bảo sẽ mang đến cho khách hàng một trải nghiệm 
               ấn tượng không thể nào quên.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located near the heart of the city, this property has
                an good location score of 9.0!
              </span>
              <h2> <b>$700</b> (9 nights) </h2>
              <button>Reserve or Book now!</button>
            </div>
          </div>
        </div>
        <MailList />
      </div>
    </div>
  )
}

export default Hotel