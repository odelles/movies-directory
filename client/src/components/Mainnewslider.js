import React from 'react'

export default function Mainnewslider(props) {
  return (
    <div>
        <div className="container-fluid">
        <div className="row">
            <div className="col-lg-7 px-0">
                <div className="owl-carousel main-carousel position-relative">
                    <div className="position-relative overflow-hidden" style={{height: "500px"}}>
                        <img className="img-fluid h-100" src={props.Image1} alt="hello" style={{objectFit: "cover"}}/>
                        <div className="overlay">
                            <div className="mb-2">
                                <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                    href="/">Business</a>
                                <a className="text-white" href="/">Jan 01, 2045</a>
                            </div>
                            <a className="h2 m-0 text-white text-uppercase font-weight-bold" href="/">Lorem ipsum dolor sit amet elit. Proin vitae porta diam...</a>
                        </div>
                    </div>
                    <div className="position-relative overflow-hidden" style={{height: "500px"}}>
                        <img className="img-fluid h-100" src="img/news-800x500-2.jpg" style={{objectit: "cover"}}/>
                        <div className="overlay">
                            <div className="mb-2">
                                <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                    href="/">Business</a>
                                <a className="text-white" href="/">Jan 01, 2045</a>
                            </div>
                            <a className="h2 m-0 text-white text-uppercase font-weight-bold" href="/">Lorem ipsum dolor sit amet elit. Proin vitae porta diam...</a>
                        </div>
                    </div>
                    <div className="position-relative overflow-hidden" style={{height: "500px"}}>
                        <img className="img-fluid h-100" src="img/news-800x500-3.jpg" style={{objectFit: "cover"}}/>
                        <div className="overlay">
                            <div className="mb-2">
                                <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                    href="/">Business</a>
                                <a className="text-white" href="/">Jan 01, 2045</a>
                            </div>
                            <a className="h2 m-0 text-white text-uppercase font-weight-bold" href="/">Lorem ipsum dolor sit amet elit. Proin vitae porta diam...</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-5 px-0">
                <div className="row mx-0">
                    <div className="col-md-6 px-0">
                        <div className="position-relative overflow-hidden" style={{height: "250px"}}>
                            <img className="img-fluid w-100 h-100" src="img/news-700x435-1.jpg" style={{objectFit: "cover"}}/>
                            <div className="overlay">
                                <div className="mb-2">
                                    <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                        href="/">Business</a>
                                    <a className="text-white" href="/"><small>Jan 01, 2045</small></a>
                                </div>
                                <a className="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="/">Lorem ipsum dolor sit amet elit...</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 px-0">
                        <div className="position-relative overflow-hidden" style={{height: "250px"}}>
                            <img className="img-fluid w-100 h-100" src="img/news-700x435-2.jpg" style={{objectFit: "cover"}}/>
                            <div className="overlay">
                                <div className="mb-2">
                                    <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                        href="/">Business</a>
                                    <a className="text-white" href="/"><small>Jan 01, 2045</small></a>
                                </div>
                                <a className="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="/">Lorem ipsum dolor sit amet elit...</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 px-0">
                        <div className="position-relative overflow-hidden" style={{height: "250px"}}>
                            <img className="img-fluid w-100 h-100" src="img/news-700x435-3.jpg" style={{objectFit: "cover"}}/>
                            <div className="overlay">
                                <div className="mb-2">
                                    <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                        href="/">Business</a>
                                    <a className="text-white" href="/"><small>Jan 01, 2045</small></a>
                                </div>
                                <a className="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="/">Lorem ipsum dolor sit amet elit...</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 px-0">
                        <div className="position-relative overflow-hidden" style={{height: "250px"}}>
                            <img className="img-fluid w-100 h-100" src="img/news-700x435-4.jpg" style={{objectFit:"cover"}}/>
                            <div className="overlay">
                                <div className="mb-2">
                                    <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                        href="/">Business</a>
                                    <a className="text-white" href="/"><small>Jan 01, 2045</small></a>
                                </div>
                                <a className="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="/">Lorem ipsum dolor sit amet elit...</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>

  )
}
