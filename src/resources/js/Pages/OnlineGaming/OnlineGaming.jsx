import "./OnlineGaming.style.css";
import { Row, Col, Container } from "react-bootstrap";
import Header from "../../Components/Headers/Header";
import Licence from "./../../assets/img/licence.png";
import LicenceBg from "./../../assets/img/licence-bg.png";
import TextCard from "../../Components/Cards/TextCard";
import TextCardImg from "../../Components/Cards/TextCardImg";
import CardBorder from "../../Components/Cards/CardBorder";
import TextHeader from "../../Components/Headers/TextHeader";
import Flag01 from "./../../assets/img/flat-01.png";
import Flag02 from "./../../assets/img/flat-02.png";
import Argentina from "./../../assets/img/Argentina.png";
import Australia from "./../../assets/img/Australia.png";
import Book from "./../../assets/img/book.png";
import Footer from "./../../Components/Footer";
import NavBar from "./../../Components/NavBar";
import right from "../../assets/img/right.svg"
import ActionButton from '../../Components/Resources/ActionButton';
import license from '../../assets/img/licence.png'

export default function OnlineGaming() {
    return (
        <div class="og-wrapper">
            <div className='ds-header-wrapper'>
                <h1>Online Gaming </h1>
                <h6>License </h6>
                <p>
                    Start your influential betting and gaming business with MOA’s advanced services that will turn the process into a delightful experience.   </p>
                <div className='casino-header-buttons-container'>
                    <button className='casino-header-contact-btn'>
                        <a href='/contact-us'>
                            <span>Contact Us</span>
                            <img src={right} />
                        </a>
                    </button>
                    <ActionButton video="true" videoId="bxRxCgM7skI" text="Watch the video" variant="transparent" href="#" className="px-5 text-dark" iconClass="bi bi-play-circle ps-2" />
                </div>
            </div>
            <div className='og-img-wrapper'>
                <div className='ds-grey-bg' />
                <div className='og-cols'>
                    <img src={license} />
                    <div className='og-cols-bg-img'>
                        <img src={LicenceBg} />
                    </div>
                    <div className="og-cols-text">
                        <h2>Why You Need an
                            Online Gaming License</h2>
                        <div>

                            <p>
                                There are several reasons why you need to consider getting a gaming license. Firstly, throughout your business operation process, you need to manage your budget in a practical way. Thus, your business requires settlement accounts. To allow your players to place deposits or make withdrawals, your company must also obtain third-party payment processors. Those processors usually prefer to work with licensed operators. Some countries ask you to follow additional regulations when running your gambling business, and getting an online gaming license allows you to avoid such problems. A betting and gaming business needs a license to build contracts with game providers. After all, a gaming license instills trust in your customers and indicates plans for reliable cooperation.
                            </p><p>
                                Are you starting a gambling business and don’t know how to get a gambling license? MOA Gaming will help you go through the entire process of licensing in a fast and simple way. MOA Gaming provides two gaming licenses: Curacao and Malta.
                            </p>
                        </div></div>
                </div>
            </div>
            <div className='og-mid-heading'>
                <h2>Online Gaming
                    Licenses</h2>
            </div>

            <div className='og-horizonal-card'>
                <div className='og-horizontal-cards-img'>
                    <img src={Flag01} />
                    <h2>
                        Curacao Gambling
                        License
                    </h2>
                </div>
                <div className='og-horizontal-cards-text'>
                    <p>The Curacao License is the most popular online gaming license in the world as it's also by far the most accessible. Many operators usually prefer the Curacao Gambling License because it offers an all-in-one solution, covering all the necessary gaming products. The licensing process is fast and cost-effective, which makes it a popular choice by many starting companies. </p>
                </div>

            </div>
            <div className='og-horizonal-card'>
                <div className='og-horizontal-cards-img'>
                    <img src={Flag02} />
                    <h2>
                        Malta Gambling
                        License
                    </h2>
                </div>
                <div className='og-horizontal-cards-text'>
                    <p>
                        Malta is a part of the European Union, making it a desirable jurisdiction to obtain a gambling license. It can offer protection both for licensed operators and online players. Malta’s gaming license has a high reputation thanks to anti-money laundering standards and financial laws and regulations.
                    </p><p>
                        The Malta gaming license has a variety of advantages. However, to acquire this license, you need more patience. The process is a little bit complicated in terms of requirements such as submission of very detailed paperwork, physical attendance for the process of signing, etc. Besides, it takes more time and is a bit more expensive. Nevertheless, if you have an authoritative betting and gaming business, then it’s worth getting it.
                    </p><p>
                        It’s hard to immediately decide which gaming license is better for your business. Every business is different when it comes to its services and products. By choosing MOA Gaming’s license service, our professional consultants will give you the best advice perfect for your business.
                    </p>
                </div>

            </div>

            <div className='og-vertical-cards-wrapper'>
                <div className='og-vertical-card'>
                    <img src={Australia} />
                    <h3>Australia Gambling License</h3>
                    <p>The land of the commonwealth, Australia is known for its highly developed Gambling industry as well as their generous natural environment.
                        Especially, Australian gambling license is one of the most popular licenses for online casinos worldwide. With this Australian gambling license, online gaming companies can operate legally with many great opportunities and makes their business profitable. To secure online gambling licenses in Australia, MOA Gaming works closely with Australian authorities to comply with due diligence and KYC policies. The responsibilities of offshore gambling companies are often complex and require careful consideration. MOA Gaming will help you find the solution that best suits their needs.</p>
                </div>

                <div className='og-vertical-card'>
                    <img src={Argentina} />
                    <h3>Argentina Gambling License</h3>
                    <p>TThe gambling license of Argentina, the second largest country in Latin America, is influential. As the regulation of gambling licenses in Argentina is organised under a federal model, regulatory competence over the relevant products is held by local jurisdictions. In general, a license is only applicable to operators and this should be reviewed on a case-by-case basis. Thus, the restrictions may vary from jurisdiction to jurisdiction. This process of obtaining a license can be complicated depending on which federal government you want to get, MOA Gaming has the advantage of making this process easy and fast.</p>
                </div>


            </div>

            <div className='og-mid-heading'>
                <h2>Gaming License Requirements</h2>
            </div>
            <div className='og-requirements-wraper'>
                <div className='og-req-col'>
                    <p>
                        To obtain a gaming license, any betting and gaming business must follow specific requirements determined by the chosen jurisdiction. The requirements represented by MOA Gaming are the following;
                    </p>
                    <p className='og-bold'>
                        1. Registration of operators company
                    </p>
                    <p className='og-bold'>
                        2. A list of corporate documents
                    </p>
                    <p className='og-bold'>
                        3. Bank account confirmation
                    </p>
                    <p className='og-bold'>
                        4. Documents of all employees
                    </p>
                    <p className='og-bold'>
                        5. Business growth plan
                    </p>
                    <p className='og-bold'>
                        6. Technical documentation
                    </p>
                    <p>The process of getting any license involves the following steps. First of all, we reach out to you and discuss your preferred markets and their requirements. After getting to know your business in detail, we sign a contract and create a step-by-step action plan for obtaining a gaming license on your behalf. Besides, we take responsibility for collecting all the necessary documentation and certificates on your behalf. Once the license is received, you can start engaging in gambling activities according to the regulations of your license.</p>
                </div>
                <div className='og-req-col'>
                    <img src={Book} />
                </div>
            </div>
        </div>
    );
}
