import "./propertyList.css"

const PropertyList = () => {
  return (
    <div className="pList">
        <div className="pListItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/370564672.jpg?k=4f37af06c05a6f5dfc7db5e8e71d2eb66cae6eec36af7a4a4cd7a25d65ceb941&o=&hp=1" 
                 width={310}
                 height={200}
                 alt="" 
                 className="pListImg" />
            <div className="pListTitles">
                <span>Hotels</span> <br/>
                <span>10 hotels</span>
            </div>
        </div>

        <div className="pListItem">
            <img src="https://connorgroup.com/static/2e58451ff52c8752da7936803fcef971/70ff9/2512-weddington-int-8952-ZF-8353-93284-1-018.jpg" 
                 width={310}
                 height={200}
                 alt="" 
                 className="pListImg" />
            <div className="pListTitles">
                <span>Apartments</span> <br/>
                <span>10 apartments</span>
            </div>
        </div>

        <div className="pListItem">
            <img src="https://media.cntraveler.com/photos/53da60a46dec627b149e66f4/master/pass/hilton-moorea-lagoon-resort-spa-moorea-french-poly--110160-1.jpg" 
                 width={310}
                 height={200}
                 alt="" 
                 className="pListImg" />
            <div className="pListTitles">
                <span>Resorts</span> <br/>
                <span>10 resorts</span>
            </div>
        </div>

        <div className="pListItem">
            <img src="https://pqr.vn/wp-content/uploads/2020/06/villas-la-gi2.jpg" 
                 width={310}
                 height={200}
                 alt="" 
                 className="pListImg" />
            <div className="pListTitles">
                <span>Villas</span> <br/>
                <span>10 villas</span>
            </div>
        </div>

        <div className="pListItem">
            <img src="https://images.rezfusion.com/evrn/PINNAC/186135/1988780924.jpg?optimize=true&rotate=true&quality=70&width=1600" 
                 width={310}
                 height={200}
                 alt=""  
                 className="pListImg" />
            <div className="pListTitles">
                <span>Cabins</span> <br/>
                <span>10 cabins</span>
            </div>
        </div>
    </div>
  )
}

export default PropertyList