import './AffilateAgentPlatforms.style.css';
import Affilate from '../../Components/Headers/Affilate';
import TextHead from '../../Components/Resources/TextHead';
import Footer from '../../Components/Footer';
import AffilateSoftware from '../../Components/AffilateAgentPlatforms/AffilateSoftware';
import { Row, Container, Col } from 'react-bootstrap';
import Features from '../../Components/AffilateAgentPlatforms/Features';
import NavBar from "./../../Components/NavBar";

export default function AffilateAgentPlatforms(){
 return(
    <Container fluid>
        <NavBar />
        <Row>
            <Container fluid className='dark-bg'>
                <Row>
                    <Affilate/>
                </Row>
                <div className='liner-bg'>
                    <AffilateSoftware/>
                </div>
                
            </Container>
            <TextHead heading="Affiliate Software" caption="Software Designed To Build Revenue" text1='Make your website accessible for brand-new players and bring increased profit to your business with the affiliate network of your casino and betting business. Our affiliate management software is developed to make it even easier to monitor and calculate your revenues. We offer the most comprehensive affiliate platform, rebuilt with the latest technological enhancements.' text2='Increase your brand awareness and attract new players with our innovative marketing tools, including the Banner Management Program and the JSON/XML feed. Our Affiliate Software will give you full control of all incoming cash streams, as well as automated and manual commission payout. Moreover, with MOA Gaming, you can launch your affiliate platform in the shortest time possible.'/>
            <TextHead heading="Agent Management System" caption="A Fully Reliable System" text1='Our highly adaptable and technologically advanced Agent Management System allows agents to have all the necessary information about their players and complete insight into the amount of risk involved. We offer desktop and mobile versions and a progressive web application. Agents recommend players to place bets and enjoy gaming online and oﬄine according to their preferences. MOA Gaming’s unique agent management system has been fully rebuilt, incorporating the latest technologies.' text2='The system keeps sports betting agents up to date about their players balance and bet history. Then, based on each player’s generated income, an agent receives a reward, which can be paid via automated or manual payment systems. With our agent system, your business has extensive regulation over all the incoming cash streams including real and credit transactions,as well as reliable global and multi-currency control over all your agents.' align="right" />
            <Features
                head1='Growing Customer Base'
                caption1='An innovative way to attract new customers and develop your betting and gaming business.'
                head2='Innovative Marketing Tools'
                caption2='With our Affiliate platform, you get tools that make business management more flexible, including tools such as the Banner Management Program and the JSON/XML feed.'
                head3='Outstanding Features'
                caption3='Reporting and monitoring are now easier thanks to our advanced features.'
                head4='Automated and Manual Commission Payout'
                caption4='We offer the ability to attain your commission payout both automatically and manually.'
                head5='FTransparency with All Incoming Cash Streams'
                caption5='MOA Gaming’s affiliate platform allows you to control and review your incoming cash streams thoroughly.'
                head6='API Integration'
                caption6='With the management of risks done well, your business has the biggest chances of reaching its goals. '/>
                <Footer/>
        </Row>  
    </Container>
 )
}