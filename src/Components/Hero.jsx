/* eslint-disable react/prop-types */
import "./Hero.css";
const Hero = ({cName,img,title,text,url,buttonText,btnClass}) => {
  return (
    <>
        <div className={cName}>
            <img src={img} alt='Travel'/>
            <div className='hero-text'>
                <h1>{title}</h1>
                <p>{text}</p>
                <a href={url} className={btnClass}>{buttonText}</a>
            </div>
        </div>
    </>
  )
}

export default Hero;