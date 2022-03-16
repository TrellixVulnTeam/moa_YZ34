import ActionButton from "../Resources/ActionButton";

const Affilate = () => {
    return (
        <section className="d-flex align-top justify-content-center affilate">
            <div className="text-center position-relative">
                <div className="row d-none d-lg-flex h-8"></div>
                <h2 className="h2-md-head">Affilate and Agent<br/>Platforms</h2>
                <p className="mt-4 pt-4">Built to skyrocket the traffic and revenue streams of your online casino and betting business — MOA Gaming presents<br/>two brilliant solutions; affiliate marketing software and an agent management system.</p>
                <p className="pt-5 mt-4">
                    <ActionButton text="Contact us" variant="dark" href="./contact-us" className="px-5 btn-black" iconClass="bi bi-chevron-right ps-2"/>
                    <ActionButton video="true" videoId="r5g0KBaR12w" text="Watch the video" variant="transparent" href="#" className="px-5 text-light" iconClass="bi bi-play-circle ps-2"/>
                </p>
                <div className="row d-none d-lg-flex h-5"></div>
                <h1 className="mt-5 pt-md-5">Agent Affilate Platform</h1>
                <div className="col-12 d-none d-lg-block mt-3 pt-5">
                    <p className="text-light px-3">MOA Gaming is delighted to offer a wide range of engaging games, including our unique Powerball game,<br/>skill games,quick games, etc. </p>    
                </div>
                <div className="row d-block d-sm-none mt-0 pt-2">
                    <p className="text-light px-3">MOA Gaming is delighted to offer a wide range of engaging games, including our unique Powerball game, skill games,quick games, etc. </p>    
                </div>
            </div>
        </section> 
    );
}

export default Affilate;