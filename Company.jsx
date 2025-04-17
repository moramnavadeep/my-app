import './Company.css'
import image1 from '../../assets/Company1.png'
import image2 from '../../assets/Company2.png'
import image4 from '../../assets/Company4.png'
import image3 from '../../assets/Company5.png'


const Company = () => {
  return (
<section className="company-wrapper">
    <div className="paddings  innerWidth flexCenter company-container">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image4} alt="" />
        <img src={image3} alt="" />

    </div>
</section>
  )
}

export default Company