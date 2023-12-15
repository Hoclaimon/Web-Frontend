import "./featuredProperties.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-regular-svg-icons"

const FeaturedProperties = () => {
  return (
    <div className="fp">
        <div className="fpItem">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/cf/6d/69/entrance.jpg?w=700&h=-1&s=1"
                height={200}
                width={310} 
                alt="" 
                className="fpImg" />
            <span className="fpName">JW Marriott</span>
            <span className="fpCity">HaNoi</span>
            <span className="fpPrice">From 6.000.000 VND/night</span>
            <div className="fpRating">
                <button>4.7 <FontAwesomeIcon icon={faStar} /></button>
                <span>Excellent</span>
            </div>
        </div>

        <div className="fpItem">
            <img src="https://www.lottehotel.com/content/dam/lotte-hotel/global/common/company/saigon-hotel.jpg"
                height={200}
                width={310} 
                alt="" 
                className="fpImg" />
            <span className="fpName">Lottle Hotel SaiGon</span>
            <span className="fpCity">Ho Chi Minh</span>
            <span className="fpPrice">From 5.500.000 VND/night</span>
            <div className="fpRating">
                <button>4.6 <FontAwesomeIcon icon={faStar} /></button>
                <span>Excellent</span>
            </div>
        </div>

        <div className="fpItem">
            <img src="https://booking.muongthanh.com/images/hotels/hotels/original/dn1_1654683350.jpg"
                height={200}
                width={310} 
                alt="" 
                className="fpImg" />
            <span className="fpName">Muong Thanh Luxury DaNang Hotel</span>
            <span className="fpCity">Da Nang</span>
            <span className="fpPrice">From 4.000.000 VND/night</span>
            <div className="fpRating">
                <button>4.5 <FontAwesomeIcon icon={faStar} /></button>
                <span>Excellent</span>
            </div>
        </div>
    </div>
  )
}

export default FeaturedProperties