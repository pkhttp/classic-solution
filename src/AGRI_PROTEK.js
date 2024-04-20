import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function VESTIGE_AGRI_PROTEK() {
    return (
        <div>
            <Header />
            <div class="header">
                <div class="menu-bar">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-xxl-3 col-xl-3 col-lg-4">
                                <div class="all-department">
                                    <button href="Products" class="category-list-close"><i
                                        class="fa-light fa-bars"></i></button>
                                </div>
                            </div>
                            <div class="col-xxl-7 col-xl-7 col-lg-6">
                                <nav class="navbar navbar-expand-lg">
                                    <div class="container-fluid">
                                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                            aria-expanded="false" aria-label="Toggle navigation">
                                            <span class="navbar-toggler-icon"></span>
                                        </button>
                                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                            <nav id="revel-mobile-menu" class="revel-mobile-menu">
                                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                                    <li class="nav-item">
                                                        <a class="nav-link" href="/">Home</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link" href="/About">About</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link" href="/Products">Product</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link" href="/Blog">Blog</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link" href="/Contact">Contact</a>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

            <div class="shop-details py-120">
                <div class="container">
                    <div class="product-view-area">
                        <div class="row">
                            <div class="col-xl-6 col-lg-5 col-md-6">
                                <div class="part-img mr-30">
                                    <div class="img-box" id="bigPreview">
                                        <img src="assets/images/classic/agri product/image_63.png" alt="Image" />
                                    </div>

                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-7 col-md-6">
                                <div class="part-txt">
                                    <h2 class="main-product-title">VESTIGE AGRI PROTEK </h2>
                                    <p class="price"><span >₹760.00 </span> ₹630.00</p> 
                                    <ul class="short-details">                                    
                                        <li>Product Code :  <span>26018</span></li>
                                        <li>PV  :  <span>21.00</span></li>
                                        <li>NET CONTENT  : <span>250 g</span></li>

                                    </ul>
                                    <h3>Description</h3>
                                    <p class="dscr">Agri-Protek is a unique agricultural bio-enhancer, a product that is formulated from botanical plant extracts derived from sea plants. Without any fortification it encourages the growth of a variety of crops, competing for nutrients and it helps to develop resistance against all types of blasts, brown leaf spot, mildews, root rots, stem blights, and grain discolouration by producing enzymes and antibiosis. The microbial inoculants, when used as composite inoculums exhibited maximum efficiency in the suppression of diseases with the characteristic increase in chlorophyll content, a total number of leaves, shoot height and facilitating crop yield. An additional mechanism by Agri-Protek can be used as a systemic product. It helps in reducing plant diseases and acts as a biocontrol agent against parasitism on pathogens. Its application on roots and foliar application will work on the entire plant to prevent diseases.</p>
                                   
                                    
                                    <form>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default VESTIGE_AGRI_PROTEK
