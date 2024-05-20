import { Metadata } from "next";

export const metadata: Metadata = {
    title: "404 Error",
  };

export default function NotFound(){

    
    return(
    <div>
        <main className="fix">
      
        <section className="breadcrumb__area breadcrumb__bg breadcrumb_bg py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="breadcrumb__content">
                            <h2 className="title text-white">404 Error</h2>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item "><a className="text-white" href='/'>Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">404 Page</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div className="breadcrumb__shape">
                <img src="assets/img/images/breadcrumb_shape01.png" alt=""/>
                <img src="assets/img/images/breadcrumb_shape02.png" alt="" className="rightToLeft"/>
                <img src="assets/img/images/breadcrumb_shape03.png" alt=""/>
                <img src="assets/img/images/breadcrumb_shape04.png" alt=""/>
                <img src="assets/img/images/breadcrumb_shape05.png" alt="" className="alltuchtopdown"/>
            </div>
        </section>
       
        <section className="error-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="error-content">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 649 323" fill="none">
                                <path d="M39.3651 6.43777C47.246 -5.80467 96.8509 7.09739 94.8741 25.6194C92.8973 44.1413 58.6061 132.108 67.146 142.028C75.6858 151.949 119.966 150.629 120.625 148.651C121.284 146.672 131.195 88.4674 133.172 79.2064C135.148 69.9454 182.724 71.9243 185.36 89.127C187.995 106.33 171.495 210.813 169.492 239.915C167.489 269.017 172.128 294.795 166.198 300.758C160.241 306.721 110.689 307.38 106.735 297.46C102.781 287.539 117.594 203.557 112.481 198.913C107.394 194.296 22.1537 203.531 4.96856 187.014C-12.1638 170.471 18.8853 38.1784 39.3651 6.43777Z" fill="currentcolor" />
                                <path d="M488.498 6.41139C493.4 -4.06329 550.78 -2.95514 546.932 19.1551C543.084 41.2654 513.985 143.268 520.258 148.149C526.531 153.031 567.017 154.376 570.891 152.793C574.766 151.21 585.098 76.3041 586.969 64.2464C588.841 52.1886 647.065 51.7137 648.013 66.2252C648.962 80.7368 626.585 308.198 620.707 318.541C614.829 328.857 560.559 319.148 557.317 310.098C554.075 301.048 573.052 206.327 568.282 204.006C563.511 201.684 472.868 212.897 459.083 194.56C445.298 176.223 479.193 26.2262 488.498 6.41139Z" fill="currentcolor" />
                                <path d="M329.403 17.6776C381.539 20.8438 437.1 85.143 427.19 175.748C417.279 266.352 363.774 315.955 291.739 311.998C219.703 308.04 197.932 216.749 205.18 145.326C212.429 73.9031 253.415 13.0603 329.403 17.6776Z" fill="currentcolor" />
                                <path d="M301.86 90.1824C324.554 98.1242 331.591 154.297 307.817 179.125C284.042 203.926 244.4 182.766 242.397 151.025C240.394 119.285 275.423 80.9214 301.86 90.1824Z" fill="white" />
                                <path d="M373.869 121.897C376.109 122.715 378.191 124.087 380.01 125.67C389.13 133.611 391.976 147.411 388.365 158.967C386.837 163.848 384.174 168.545 380.089 171.632C375.081 175.405 368.439 176.46 362.219 175.774C357.659 175.273 352.993 173.822 349.857 170.471C347.617 168.096 346.351 164.956 345.534 161.817C341.581 146.513 350.331 118.519 370.785 121.158C371.865 121.29 372.893 121.554 373.869 121.897Z" fill="white" />
                                <path d="M358.133 156.751C362.704 156.751 366.409 153.042 366.409 148.466C366.409 143.89 362.704 140.181 358.133 140.181C353.562 140.181 349.857 143.89 349.857 148.466C349.857 153.042 353.562 156.751 358.133 156.751Z" fill="#684500" />
                                <path d="M296.167 136.698C300.737 136.698 304.443 132.989 304.443 128.414C304.443 123.838 300.737 120.129 296.167 120.129C291.596 120.129 287.89 123.838 287.89 128.414C287.89 132.989 291.596 136.698 296.167 136.698Z" fill="#684500" />
                                <path d="M327.532 232.527C326.82 232.527 326.082 232.29 325.476 231.841C323.974 230.707 323.658 228.543 324.791 227.039C325.423 226.195 340.526 206.406 356.42 207.778C358.318 207.937 359.688 209.599 359.53 211.499C359.372 213.398 357.711 214.77 355.814 214.612C345.771 213.741 333.937 226.274 330.247 231.182C329.588 232.052 328.56 232.527 327.532 232.527Z" fill="#684500" />
                                <path d="M363.932 113.902C355.919 113.902 349.303 111.791 348.803 111.633C347.01 111.053 346.035 109.1 346.615 107.306C347.195 105.512 349.145 104.536 350.938 105.116C351.148 105.169 371.048 111.501 380.827 100.895C382.119 99.4962 384.28 99.417 385.677 100.71C387.074 102.003 387.153 104.166 385.861 105.565C379.746 112.134 371.259 113.902 363.932 113.902Z" fill="#684500" />
                                <path d="M319.414 84.4042C318.096 84.4042 316.831 83.6391 316.277 82.3462C316.198 82.1615 308.265 64.3519 295.244 61.4496C288.945 60.0512 282.197 62.4258 275.212 68.5735C273.789 69.8135 271.628 69.6816 270.389 68.2568C269.15 66.8321 269.282 64.6685 270.705 63.4285C279.43 55.7769 288.207 52.8746 296.773 54.8007C313.194 58.4945 322.208 78.7843 322.577 79.6286C323.341 81.37 322.551 83.3752 320.811 84.1404C320.337 84.2987 319.862 84.4042 319.414 84.4042Z" fill="#684500" />
                            </svg>
                            <h2 className="title">OOPS! Nothing Was Found</h2>
                            <p>Oops! it could be you or us, there is no page here. It might have <br/> been moved or deleted.Back To Home</p>
                            <a className='btn btn-two' href='/'>Go Back To Home Page</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    </main>
</div>
    );
}