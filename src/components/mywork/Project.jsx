// import React from 'react'
// import "./projects.css"
// import theme from "../../assets/theme_pattern.svg"
// import mywork_data from "../../assets/mywork_data"
// import arrow_icon from "../../assets/arrow_icon.svg"


// const Project = () => {
//   return (
//     <div id='project' className='mywork'>
//         <div className="mywork-title">
//             <h1>My Latest Projects</h1>
//             <img src={theme} alt="" />
//         </div>
//         <div className="mywork-container">
//             {mywork_data.map((work,index)=>{
//               return <img key={index} src={work.w_img} alt='img'/>
//             })}
//         </div>
//         {/* <div className="mywork-showmore">
//           <p>Show more</p>
//           <img src={arrow_icon} alt="->" />
//         </div> */}
//     </div>
//   )
// }

// export default Project




import React from 'react'
import Slider from 'react-slick'
import './projects.css'
import theme from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Project = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }
  

  return (
    <div id='project' className='mywork'>
      <div className="mywork-title">
        <h1>My Projects</h1>
        <img src={theme} alt="" />
      </div>

      <div className="mywork-slider">
        <Slider {...settings}>
          {mywork_data.map((work, index) => (
            <div key={index} className="mywork-card">
              <img src={work.w_img} alt="Project" className="project-image" />
              <div className="mywork-links">
                <a href={work.githubLink} target="_blank" rel="noopener noreferrer">View Code</a>
                <a href={work.livePreviewLink} target="_blank" rel="noopener noreferrer">Live Preview</a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Project

