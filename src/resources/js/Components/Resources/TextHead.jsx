import { Container,Col } from 'react-bootstrap';

const TextHead = (props)=>{
    let align = false;
    let alignClass = '';
    if(props.align){
        align = 'true';
        if(props.align){
            alignClass = 'text-end';
        }
    }
    return (
        <Container className={'px-5 pt-8 mt-lg-5 TextHead '+ alignClass} >
            <figure className="text-right">
                    <h1>{props.heading}</h1>
                    <figcaption>
                        {props.caption}
                    </figcaption>
            </figure>
            <Col xs={12} md={8} className={ align ? "float-end pb-8": ''}>
                <p className='pt-4'>{props.text1}</p>
                <p className='pt-4'>{props.text2}</p>
            </Col>
        </Container>
    )
}
export default TextHead;