import './searchItem.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-regular-svg-icons"

const SearchItem = () => {
  return (
    <div className='searchItem'>
        <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/cf/6d/69/entrance.jpg?w=700&h=-1&s=1" 
             width={250}
             height={200}
             alt="" 
             className="siImg" />
        
        <div className="siDesc">
            <h1 className='siTitle'>JW Marriott</h1>
            <span className="siDistance">3 km from center</span>
            <span className="siTaxi">Free airpot taxi</span>
            <span className="siSubTitle">Luxury room for boss</span>
            <span className="siFeatures">1 bathroom - 50m2 - 1 full bed</span>
            <span className="siCancelOp">Free cancellation</span>
        </div>
        <div className="siDetail">
            <div className="siRating">
                <span>Exellent</span>
                <button>4.6 <FontAwesomeIcon icon={faStar} /></button>
            </div>

            <div className="siDetailTexts">
                <span className="siPrice">$100</span>
                <span className="siTaxOp">Include taxes and fees</span>
                <button className='siCheckButton'>See availability</button>
            </div>
        </div>
    </div>
  )
}

export default SearchItem