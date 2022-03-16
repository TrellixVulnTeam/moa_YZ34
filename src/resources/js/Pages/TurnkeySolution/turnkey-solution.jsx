import {React,Component} from "react";
import { Row,Container } from "react-bootstrap";
import FeatureCard from "../../Components/Cards/FeatureCard";
import PartnerCard from "../../Components/Cards/PartnersCard";
import TextCard from "../../Components/Cards/TextCard";
import Components from "../../Components/Components";
import Header from "../../Components/Headers/Header";
import TextHeader from "../../Components/Headers/TextHeader";
import TextImageSection from "../../Components/TextImageSection";
import Footer from "./../../Components/Footer";
import NavBar from "./../../Components/NavBar";


class TurnkeySolution extends Component{
    render(){
        return(
        <Container fluid>
           <NavBar
            logo="moa-logo-black.svg"
            textClass="text-dark"
            bg="rgba(255, 255, 255, 0.1)"
            borderBottom="1px solid rgba(0, 0, 0, 0.2)"
            />
           <Row>
               <Header 
               buttonBG='#C360B0' 
               height='calc(95vh - 100px)'
               href="./contact-us" 
               heading="top" 
               btnLessPedding="true" 
               h2Class="h2-lg-head" 
               textwidth="78" 
               btnTitle="Contact us" 
               hideWatchBtn="true" 
               head='Turnkey' 
               head1="Solution" 
               text='MOA Gaming’s Turnkey solution is one of the most reliable and cost-effective methods for starting your online betting and gaming business. You get a one-of-a-kind opportunity to build an independent online betting and gaming business from the very beginning.' 
               bgcolor='#B28DAC' />
               <TextImageSection image='gear.png' bgcolor='#B28DAC' imgbgcolor='rgba(138, 23, 116, 0.29)' head1='About' head2='Turnkey' head3='Solution' footline='A Convenient Business Solution' text1='To save you from the trouble of creating a website from scratch — our advanced Turnkey solution offers you a set of convenient configurations along with the freedom to limitlessly customize a wide range of features and services based on your preferences and business objectives. By choosing the Turnkey online casino, you get complete control of your business, change margins, limits, etc. The Turnkey betting and gaming software offers 24/7 multi-lingual and multi-currency client support, a dedicated account manager, and technical support.' text2='Operating under your own license — get an entirely customizable and adjusted website with a powerful back-office for your online business. MOA Gaming turnkey solution offers highly adaptable features and services that are aimed at helping you to set up your website, along with Sportsbook, Pre-match and Live Betting, 5000+ Slot Games, Live Casino, Skill Games, Virtual Sports & VR Casino, Gaming License Acquisition, Risk Management, and a secure payment solution. '/>
               <TextHeader fontClass="fs-4-8" height='300px' color='#CC74BB' head='Components of the Turnkey Solution' text=''/>
               <Components head='Components of the Turnkey Solution' image1='1P.png' image2='2P.png' image3='3P.png' image4='4P.png' color='#CC74BB' head1='MOA Gaming sportbook' head2='Advanced Gaming Suite' head3='Simple Interface' head4='Helpful Account Manager' text1={'You get a Sportsbook with live and\npre-match events'} text2={'You’ll be provided with a Gaming\nSuite with 5000 slots, live casino, etc.'} text3={'Access to a platform that is fully\ncustomizable and pleasing to the eye.'} text4={'To make your business operation\nmore enhanced, you’ll get a chance\nto work with a dedicated account\nmanager.'} text1class="p-4 text-center f18 position-absolute" text2class="p-4 text-center f18 position-absolute" text3class="p-4 text-center f18 position-absolute" text4class="p-4 text-center f18 position-absolute" />

               <TextHeader fontClass="pb-4"  color='#CC74BB' head='Turnkey Vs White Lable' text='MOA Gaming’s White Label is a ready-made solution offering you all the necessary elements and features needed for establishing a strong betting and gaming business under our Curacao and Malta licenses.'/>
               <FeatureCard head1='Turnkey' head2='White Label' 
                    list1item1='Operation under operator’s own gaming license'
                    list1item2='Time-consuming'
                    list1item3='Start from scratch'
                    list1item4='Wide range of settings '
                    list1item5='Operator reports to the regulator'
                    list1item6='Operator’s agreement with payment providers'
                    list1item7='24/7 Support'

                    list2item1='Operation under MOA Gaming license '
                    list2item2='Quick start'
                    list2item3='Only the main settings available'
                    list2item4='MOA Gaming reports to the regulator'
                    list2item5='Integrated payment methods'
                    list2item6='24/7 Support'

                    list1tickcolor='pink-item'
                    list2tickcolor='blue-item'
                    head1color='#CC74BB'
                    head2color='#6464DD'
                    bgclass="bg-oned"
                    btnclass="bgdark"
                    />
                    
                    <PartnerCard head='Casino Game Providers' color='#CC74BB' footline1='Best providers' footline2=' of the entire industry.'/>
                    <TextCard head='What Is Turnkey' head1="Solution?" text='Turnkey solution is a highly flexible gambling solution that provides you with a ready-made gaming platform while giving you total freedom to choose and customize the features you want to include in your online gambling website.' headcolor='#CC74BB' start='true' bgcolor="#fbf4fa"/>
                    <TextCard head='Why Choose a Turnkey Solution?' text='Turnkey solution is a highly flexible gambling solution that provides you with a ready-made gaming platform. Here you get complete freedom to choose and customize the features you want to include in your online gambling website.' headcolor='#CC74BB' start='false' bgcolor="#fbf4fa"/>
                    <TextCard head='What Is The Difference Between White Label And Turnkey Solutions?' text='The main difference between the two is that with Turnkey solution, you basically start an online casino and operate under your own gaming license, while with White Label, you rent/franchise a pre-made online casino and operate under one of MOA Gaming licenses. ' headcolor='#CC74BB' start='false' bgcolor="#fbf4fa"/>
                    <div className="pt-5 mb-5 mt-5"></div>
                    <Footer/>
           </Row>
        </Container>
        )
    }
}

export default TurnkeySolution;