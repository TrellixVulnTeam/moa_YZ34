import "./MarketingServices.style.css";
import { Row, Col, Container } from "react-bootstrap";
import Header from "../../Components/Headers/Header";
import Collage from "./../../assets/img/collage.png";
import HeadingAndText from "../../Components/Cards/HeadingAndText";
import TextCardImg from "../../Components/Cards/TextCardImg";
import ListCard from "../../Components/Cards/ListCard";
import TextHeader from "../../Components/Headers/TextHeader";
import OneB from "./../../assets/img/1B.png";
import TwoB from "./../../assets/img/2B.png";
import ThreeB from "./../../assets/img/3B.png";
import FourB from "./../../assets/img/4B.png";
import Footer from "./../../Components/Footer";
import NavBar from "./../../Components/NavBar";

export default function MarketingServices() {
    return (
        <Container fluid>
            <NavBar/>
            <Row style={{ position: "relative" }}>
                <Header
                    head="Marketing Services"
                    text="MOA Gaming’s online marketing and advertising package is an efficient and affordable solution for monetizing your online iGaming business. Our services are executed on time and with much dedication by our professionals to make sure your business is prospering with growing revenue streams."
                    btnTitle="Contact us"
                    watchBtnClass="text-dark"
                    bgimg="grey.png"
                    headcolor="#000"
                    textcolor="#000"
                    href="./contact-us"
                    videoId="owZy7RH_tVs"
                />
                <div className="text-center">
                    <div>
                        <img
                            className="designingimg"
                            src={Collage}
                            style={{
                                maxWidth: "90%",
                                position: "relative",
                                marginTop: "-10%",
                            }}
                            alt="logo"
                        />
                    </div>
                </div>
                <HeadingAndText
                    head="What is an iGaming Marketing Service?"
                    subhead="Your Reliable Choice for Business Growth"
                    text="MOA Gaming offers two kinds of marketing services. The first one comprises the entire process of launching your business, and the second one implies operating it.  When it comes to launching your online betting and gaming business, there is a large variety of components. MOA Gaming provides marketing services that will make that process uncomplicated for you. Here is the list of essential elements provided by MOA Gaming to launch your fully-functioning iGaming business. "
                />

                <Container>
                    <ListCard
                        head1="Research Of Target Markets"
                        head2="Creating a Marketing Plan "
                        head3="Executing a Marketing Strategy "
                        list1item1="Define the gamer persona."
                        list1item2="Determine the goals and objectives of the business."
                        list1item3="Analyze sports & casino features of target markets."
                        list1item4="Consult with local experts on business needs."
                        list1item5="Determine timeframes and budget for deliverables."
                        list1item6="Prepare a presentation on the conducted research."
                        list2item1="Create an advertising plan and strategy for your business. "
                        list2item2="Implement SEO analysis for your website."
                        list2item3="Determine your users based on demographics."
                        list2item4="Research and find patterns, habits, and preferences among your users."
                        list3item1="Identify specific KPIs according to your business needs and goals."
                        list3item2="Determine marketing strategy goals."
                        list3item3="Plan and develop a marketing strategy based on identified objectives."
                        list3item4="Determine tactics that will help the success of the strategy."
                        head1color="#FFF"
                        head2color="#FFF"
                        head3color="#FFF"
                    />
                </Container>
            <HeadingAndText
                bgcolor="#1D1D1F"
                col1padding={5}
                col2padding={3}
                fontcolor="#FFFFFF"
                head="MOA Gaming Online Marketing Service"
                text="We provide an iGaming software that’s designed by people who focus on sustainability and growth. Striving to skyrocket your revenue streams, we get you noticed in the industry through our innovative products and solutions. Among many other casino software providers, our professionals are ready to deliver premium quality services. Always looking at the big picture, we created software that is easy to set up with services meant for all types of businesses.  Contact us, and we’ll reach out to you for anything your business needs. MOA Gaming - your reliable partner in the iGaming market. We’ve got you covered!"
            />

                <TextHeader
                    height="200px"
                    color="#000"
                    text="MOA Gaming’s marketing service will help the existing operators to run cost-effective operations. We will take care of the attraction of new customers, and the retention of the existing ones. We’ll improve your website SEO, set up loyalty programs, and work closely with the affiliates to ensure limitless growth of your revenues. "
                />

                <HeadingAndText
                    bgcolor="#1D1D1F"
                    col1padding={5}
                    col2padding={3}
                    fontcolor="#FFFFFF"
                    head="MOA Gaming Online Marketing Service"
                    text="We provide an iGaming software that’s designed by people who focus on sustainability and growth. Striving to skyrocket your revenue streams, we get you noticed in the industry through our innovative products and solutions. Among many other casino software providers, our professionals are ready to deliver premium quality services. Always looking at the big picture, we created software that is easy to set up with services meant for all types of businesses.  Contact us, and we’ll reach out to you for anything your business needs. MOA Gaming - your reliable partner in the iGaming market. We’ve got you covered!"
                />

                <TextHeader
                    height="200px"
                    color="#000"
                    head="Support Team Duties"
                    text="By getting the MOA Gaming professional customer support package, you will get a team of qualified specialists who will manage the following aspects of your business:"
                />
                <div className="m-padding">
                    <TextCardImg
                        img={OneB}
                        head="How to Boost Your Revenue With Affiliate Program Marketing?"
                        text="MOA Gaming offers a unique affiliate program aimed at attracting new affiliates who will promote your online gambling website, bring new users, generate revenue, and ultimately grow the gaming & betting website. It’s a type of performance-based marketing where the gambling business rewards affiliates for the number of users or customers they bring through the affiliate marketing program. "
                        headcolor="#2A324B"
                        align="left"
                    />
                    <TextCardImg
                        img={TwoB}
                        head="Why You Need the  Player Retention Program?"
                        text="The Player Retention Program is a strategy aimed at keeping your players on your website as long as possible. With MOA Gaming Player Retention Program, you can give your players the best experience and earn their trust and loyalty. "
                        headcolor="#2A324B"
                        align="left"
                    />
                    <TextCardImg
                        img={ThreeB}
                        head="Why SEO is Crucial for Your Betting and Gaming Business"
                        text="Website traffic is everything for an online betting and gaming operator, whether you are just running a sports betting platform or an all-in-one online casino. Being constantly available for your potential clients must be your priority at all costs. This is where Search Engine Optimization (SEO) comes into play. "
                        headcolor="#2A324B"
                        align="left"
                    />
                    <TextCardImg
                        img={FourB}
                        head="Should You Run a Loyalty Program on Your Online Casino?"
                        text="Attracting new customers to your online gambling website is only the first step to the success of your business. Your next priority must be keeping them loyal to your brand and engaged in the services and products your online website offers. MOA Gaming’s marketing services offer a loyalty program for your online betting and gaming business. Our team of experienced marketers will help you develop a unique loyalty program by rewarding customer engagement with the correct initiative. "
                        headcolor="#2A324B"
                        align="left"
                    />
                </div>
                <Footer/>
             </Row>
        </Container>
    );
}
