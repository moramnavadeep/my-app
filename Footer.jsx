import React from 'react'
import logo from '../../assets/site.png'
import './footer.css'

const Footer = () => {
  return (
    <div className="f-wrapper">
        <div className="innerWidth paddings flexCenter f-container">

            {/* left side     */}
            <div className="flexColStart f-left">
                <img src={logo} alt="" width={120}/>


                <span className="secondaryText">
                    our vision is to make all people <br />
                    the best place to live for them.
                </span>
 

            </div>

            {/* right side  */}
            <div className=" flexColStart f-right">
                <span className='primaryText'>
                    information
                </span>
                <span className='secondaryText'>
                    124, Newyork, fl 251 , usa
                </span>

                <div className="flexCenter f-menu">
                    <span>
                        property
                    </span>
                    <span>
                        services
                    </span>
                    <span>
                        products
                    </span>
                    <span>
                    about us
                    </span>

                </div>


            </div>

        </div>
    </div>
  )
}

export default Footer