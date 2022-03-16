import { Route, Link, BrowserRouter } from "react-router-dom";

const BlogItem = (props) => {
    const onClick = () => {
        window.location.href = "/blog/"+props.id;
      };
      let margin = 'mt-4';
      if(props.title1 == 'CHOOSE YOUR SOFTWARE'){
        margin = 'mt-5';
      }
    
    return (
        <div className={"col-md-12 "+margin } style={{cursor:'pointer'}}  onClick={onClick}>
            <div className="border rounded text-md-start position-relative">
                <h1
                    className="fw-bold text-light p-3 blog-title"
                    style={{ position: "absolute" }}
                >
                    {props.title1}
                    <br />
                    {props.title2}
                    <br />
                    {props.title3}
                </h1>
                <img src={props.img} style={{ maxWidth: "100%" }} />
                <div className="px-3 py-2">
                    <p>{props.text}</p>
                    <div className="text-md-start text-grey">
                        <div className="row">
                            <div className="col-md-6">
                                Reading time
                            </div>
                            <div className="col-md-6 text-end">
                                Date
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogItem;
