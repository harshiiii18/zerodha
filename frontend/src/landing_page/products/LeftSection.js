import React from "react";

function LeftSection({
    imageURL,
    productName,
    productDesription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore,
}) {
    return (
        <div className="container mt-5 p-5">
            <div className="row ">
                <div className="col-6">
                    <img src={imageURL} alt="url"/>
                </div>
                <div className="col-6 p-5 mt-5">
                    <h1>{productName}</h1>
                    <p>{productDesription}</p>
                    <div className="mb-3">
                        <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href={learnMore} style={{marginLeft:"50px", textDecoration:"none"}}>Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                    <div className="mt-2">
                        <a href={googlePlay}>
                            <img src="media/images/googlePlayBadge.svg" alt="description"/>
                        </a>
                        <a href={appStore}>
                            <img src="media/images/appstoreBadge.svg" alt="app store"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;
