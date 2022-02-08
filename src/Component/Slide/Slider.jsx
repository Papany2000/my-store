import React, {useState, useEffect} from "react"
import slide1 from "../../Images/slide1.jpg"
import slide2 from "../../Images/slide2.jpg"
import slide3 from "../../Images/slide3.jpg"
import slide4 from "../../Images/slide4.jpg"
import slide5 from "../../Images/slide5.jpg"
import slide6 from "../../Images/slide6.jpg"
import slide7 from "../../Images/slide7.jpg"
import slide8 from "../../Images/slide8.jpg"
import slide9 from "../../Images/slide9.jpg"
import slide10 from "../../Images/slide10.jpg"
import slide11 from "../../Images/slide11.jpg"
import slide12 from "../../Images/slide12.jpg"
import slide13 from "../../Images/slide13.jpg"
import slide14 from "../../Images/slide14.jpg"
import slide15 from "../../Images/slide15.jpg"
import slide16 from "../../Images/slide16.jpg"
import style from "./Slider.module.css"
const img = [
    <img key={slide1} src={slide1} alt = "foto"/>,
    <img key={slide2} src={slide2} alt = "foto"/>,
    <img key={slide3} src={slide3} alt = "foto"/>,
    <img key={slide4} src={slide4} alt = "foto"/>,
    <img key={slide5} src={slide5} alt = "foto"/>,
    <img key={slide6} src={slide6} alt = "foto"/>,
    <img key={slide7} src={slide7} alt = "foto"/>,
    <img key={slide8} src={slide8} alt = "foto"/>,
    <img key={slide9} src={slide9} alt = "foto"/>,
    <img key={slide10} src={slide10} alt = "foto"/>,
    <img key={slide11} src={slide11} alt = "foto"/>,
    <img key={slide12} src={slide12} alt = "foto"/>,
    <img key={slide13} src={slide13} alt = "foto"/>,
    <img key={slide14} src={slide14} alt = "foto"/>,
    <img key={slide15} src={slide15} alt = "foto"/>,
    <img key={slide16} src={slide16} alt = "foto"/>,
    ]


const Slider  = () => {

  
    const [activeIndex, setActiveIndex] = useState(0);
 
    
    useEffect(() => {
        
         setInterval(() => {
            
            setActiveIndex((current) => {
               
                const res = current === img.length - 1 ? 0 : current + 1
             
                return res
            })
        }, 3000)
       
        return () => clearInterval()
    }, [])
     
    
    const prevImgIndex = activeIndex ? activeIndex - 1 : img.length - 1
   
    const nextImgIndex = activeIndex === img.length - 1 ? 0 : activeIndex + 1
    return (
        <div className={style.slider}>
            <div className={style.prev}
                    key={prevImgIndex}>
                {img[prevImgIndex]}
            </div>
            <div className={style.sliderImg}
                    key={activeIndex}>
                {img[activeIndex]}
            </div>
            <div className={style.next}
                    key={nextImgIndex}>
                {img[nextImgIndex]}
            </div>
        </div>
    )

}
export default Slider