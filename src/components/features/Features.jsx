import "./features.css"

const Features = () => {
  return (
    <div className="features">
        <div className="featureItem">
            <img src='https://vietnam.travel/sites/default/files/styles/top_banner/public/2017-06/vietnam-travel-5.jpg?itok=XVnHP3ty'
                 width={310}
                 height={200}
                 alt=""
                 className="featuredImg" />
            <div className="featureTitles">
                <h2>Hà Nội</h2>
                <h3>Thủ đô Việt Nam</h3>
            </div>
        </div>

        <div className="featureItem">
            <img src='https://www.new7wonders.com/app/uploads/sites/5/2016/10/ho-chi-minh-city-1348092-1920x1280.jpg'
                 width={310}
                 height={200}
                 alt=""
                 className="featuredImg" />
            <div className="featureTitles">
                <h2>Hồ Chí Minh</h2>
                <h3>Trung tâm kinh tế</h3>
            </div>
        </div>

        <div className="featureItem">
            <img src='https://vitracotour.com/wp-content/uploads/2022/04/nhung_diem_du_lich_da_nang2.jpg'
                 width={310}
                 height={200}
                 alt=""
                 className="featuredImg" />
            <div className="featureTitles">
                <h2>Đà Nẵng</h2>
                <h3>Cầu Rồng</h3>
            </div>
        </div>
    </div>
  )
}

export default Features