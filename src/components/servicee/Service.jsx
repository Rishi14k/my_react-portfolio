import React from 'react'
import "./Service.css"
import theme from "../../assets/theme_pattern.svg"
import Services_Data from '../../assets/services_data'

const Service = () => {
  return (
    <div id='service' className='services'>
        <div className="service-title">
            <h1>My Services</h1>
            <img src={theme} alt="" />
        </div>
        <div className="service-container">
            {Services_Data.map((service,index)=>{
                return <div key={index} className="services-formate">
                    <h3>{service.s_no}</h3>
                    <h2>{service.s_name}</h2>
                    <p>{service.s_desc}</p>

                   
                </div>
            })}
        </div>
    </div>
  )
}

export default Service