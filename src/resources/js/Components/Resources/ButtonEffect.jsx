
import '../../assets/css/button-effect.css';
import rightArrow from '../../assets/img/right.svg';

const ButtonEffect = (props)=>{
    let styled = { color: `${props.textcolor}` };
        if (props.style) {
            styled = { ...styled, ...props.style };
        }
    return(
       <span>
            <button className={'btn-effect slideRightAnimate '+props.className}  style={styled}   >
            <a href={props.href}>
            <span>{props.text}</span>
            <img src={rightArrow} className='about-us-right-btn-icon' />
            <img />
            </a>
        </button>
       </span>
    );
}
export default ButtonEffect;