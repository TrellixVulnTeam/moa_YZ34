import {React,Component} from "react";
import { Row, Container } from "react-bootstrap";
import FeatureCard from "../../Components/Cards/FeatureCard";
import PartnerCard from "../../Components/Cards/PartnersCard";
import TextCard from "../../Components/Cards/TextCard";
import RetailComponents from "../../Components/RetailComponents";
import Header from "../../Components/Headers/Header";
import TextHeader from "../../Components/Headers/TextHeader";
import TextImageSection from "../../Components/TextImageSection";
import Footer from "./../../Components/Footer";
import NavBar from "./../../Components/NavBar";

class WhiteLabelSolution extends Component{
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
                <Header buttonBG='#6464DD' height='calc(88vh - 100px)'  btnClass="mt-3" href="/contact-us" h2Class="h2-lg-head" heading="top" btnTitle="Contact us" textWidthClass="w-md-52" hideWatchBtn="true"  head='White Label Solution' text='MOA Gaming offers a unique range of top-quality solutions for starting your online betting and gaming business.' bgcolor='#8484AD' />
                <TextImageSection image='laptop.png' bgcolor='#8484AD' readmore="true" imgbgcolor='rgba(48, 0, 183, 0.25)'  head1='About' head2='White Label' head3='Solution' footline='A Solid Starting Point' text1='A fundamental element of MOA’s offered solutions is the White Label solution. White Label online casino & sportsbook software is a highly convenient, time-efficient online gambling solution for operators about to create their online casino and gaming business. It’s packed with ready-made features and services that will help you enter a new market with all the essential assets you need for your website to function fully.'/>
                <TextHeader fontClass="fs-4-8" height='300px' color='#6464DD' head='Components of the White Label Solution' text=''/>
                <RetailComponents image1='1B.png' image2='2B.png' image3='3B.png' image4='4B.png' color='#6464DD' head1='MOA Gaming License' head2='Superb Sportsbook' head3='Awesome Gaming Suite' head4='Time-Saving' text1={'Your business will operate under the\nMOA Gaming license.'} text2={'You receive a unique Sportsbook with\nlive and pre-match games.'} text3={'You’ll be provided with a Gaming\nSuite with 5000 slots, a dynamic live\ncasino, etc.'} text4={'You get the chance to start your\nbetting and gaming business within\nthe shortest time possible.'} text1class="p-4 text-center f18 position-absolute" text2class="p-4 text-center f18 position-absolute" text3class="p-4 text-center f18 position-absolute" text4class="p-4 text-center f18 position-absolute" />
                <TextHeader height='300px' color='#6464DD' head='Turnkey vs White Label' fontClass="f-6-4" text='MOA Gaming’s White Label is a ready-made solution offering you all the necessary elements and features needed for establishing a strong betting and gaming business under our Curacao and Malta licenses.'/>
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
                        <PartnerCard head='Casino Game Providers' fsize="8.6vmin" color='#6464DD' footline1='Best providers' footline2=' of the entire industry.'/>         
                        <TextCard head='What Is White Label?' text='White Label solution is basically a starter kit platform with all the necessary assets to start and operate a fully functioning online casino business from zero. It typically includes a gaming license, custom website, game content, risk management, payment solutions, and a number of other components and services. In short, it’s an ideal solution for those who want to start an online casino website with all the necessary assets and within a short time.' headcolor='#6464DD' start='true' bgcolor="#f3f3fd"/>
                        <TextCard head='Why Choose White Label Solution?' text='The advantage of a white label solution is that you get a fully set online casino website with all its necessary features without having to go through different lengthy processes like getting an online gambling license, finding a trustable software provider, creating a website, and other similar procedures which typically take lots of time and effort.' headcolor='#6464DD' start='false' bgcolor="#f3f3fd"/>
                        <TextCard head='What Is The Difference Between White Label And Turnkey Solutions?' text='With Turnkey solution, you start an online gambling business and operate under your existing gaming license. Meanwhile, with White Label, you get an online casino website, risk management service, technical support, and other valuable assets and operate under the gambling license provided by MOA Gaming. Generally speaking, with Turnkey Solution, you get more control in terms of website customization and preferences. Whereas with White Label solution, most of the essential elements are equipped in advance, and our professional team provides the entire website management to the online gambling operator. ' headcolor='#6464DD' start='false' bgcolor="#f3f3fd"/>
                        <div className="mb-5 pb-5"></div>
                        <div className="mb-5"></div>
                        <Footer/>
            </Row>
         </Container>
        )
    }
}

export default WhiteLabelSolution;