import img1 from "./img/Banner_1.jpg"
import img2 from "./img/gridImg1.jpg"
import img3 from "./img/gridImg2.webp"
import img4 from "./img/gridImg3.jpg"
import img5 from "./img/gridImg4.jpg"
import img6 from "./img/services_img1.webp"
import img7 from "./img/services_img2.webp"
import img8 from "./img/services_img3.webp"
import img9 from "./img/services_img4.webp"
import img10 from "./img/services_img5.webp"
import img11 from "./img/services_img6.webp"
import thinkpad from "./img/Thinkpad.webp"
import laptop from "./img/product1.webp"
import Gen from "./img/gen.webp";
import hp_pro from "./img/hp-pro.webp"
import watch from "./img/watch.webp";
import TV from "./img/Lg-tv.webp";
import IPhone15 from "./img/IPhone15.webp"
import steam from "./img/steampro.webp"
import bag from "./img/laptop-bag.webp"
import longjack from "./img/Longjack.webp"
import computing from "./img/Computing.webp"
import Electronics from "./img/Electronics.jpg_SkqVj8hk3.jpg"
import Power from "./img/Power.jpg_rJ_ViL2kh.webp"
import groceries from "./img/Groceries.jpg_SJiNs8hkh.jpg"
import kitchen from "./img/Kitchen.jpg_HJtVsL3y3.webp"
import mobile from "./img/mobile.jpg_BJhA-RuE6.webp"
import lg from "./img/Lg.webp"
import hp from "./img/hp-logo.webp"
import itec from "./img/itec.webp"
import intel from "./img/intel.webp"
import drugfield from "./img/drugfield.webp"
import tecno from "./img/Tecno.webp"
import thinkbook from "./img/Thinkbook.webp"
import hp_g9 from "./img/hp-gopro.png"
import neo from "./img/neo.webp"
import intelcore from "./img/intel-core.webp"
import prelude from "./img/hp-Prelude.webp"
import kidstore from "./img/specialKid.jpg"
import cereals from "./img/cereals.webp"
import Booze from "./img/Booze.webp"
import Home from "./img/furniture.jpg"
import Footer from "./footer"
import NavBar from "./NavBar"
import Banner from "./Banner";
import ScrollNav from "./scroll-nav"

const Body_SecOne = () => {
    return (
        <div>
        <Banner />
            <ScrollNav />
            <NavBar />
            <div className="Body-SecOne-container">
                <div className="Body_SecOne">
                    <div className="secOne_Carousel">
                        <img src={img1} alt="img" />
                    </div>
                    <div className="SecOne_grid">
                        <img src={img2} alt="img" className="section-one-grid-image" />
                        <img src={img3} alt="img" className="section-one-grid-image" />
                        <img src={img4} alt="img" className="section-one-grid-image" />
                        <img src={img5} alt="img" className="section-one-grid-image" />
                    </div>
                </div>
                <div className="Section_one_services-container">
                    <div className="Section_one_services">
                        <div className="service_one">
                            <img src={img6} alt="img" />
                        </div>
                        <div className="service_two">
                            <img src={img7} alt="img" />
                        </div>
                        <div className="service_three">
                            <img src={img8} alt="img" />
                        </div>
                        <div className="service_four">
                            <img src={img9} alt="img" />
                        </div>
                        <div className="service_five">
                            <img src={img10} alt="img" />
                        </div>
                        <div className="service_six">
                            <img src={img11} alt="img" />
                        </div>
                    </div>
                    <div className="Deals_Section">
                        <div className="Deals_Section_container">
                            <div className="head">
                                <span>Today's Deals</span>
                                <a href="/">See All items</a>
                            </div>
                            <div className="Deals_Section_Items col-lg-12">
                                <div className="Deals_Section_Item_1 d-flex">
                                    <img src={laptop} alt="img" />
                                    <div className="Deals_Section_Item_1_text">
                                        <header >Lenovo V15 G3 Iap 15.6" Laptop -</header>
                                        <div className="deals-price d-flex align-items-center justify-content-between">
                                            <span>&#8358;312,800</span>
                                            <s>&#8358;444,127</s>
                                            <div className="discount-box">
                                                <p className="discount-box-p">-30%</p>
                                            </div>
                                        </div>
                                        <p className="Deals_Section_Item_1_text-p">You save &#8358;131,327</p>
                                    </div>
                                </div>
                                <div className="Deals_Section_Item_1 d-flex">
                                    <img src={Gen} alt="img" />
                                    <div className="Deals_Section_Item_1_text">
                                        <header >Lenovo V15 G3 Iap 15.6" Laptop -</header>
                                        <div className="deals-price d-flex align-items-center justify-content-between">
                                            <span>&#8358;312,800</span>
                                            <s>&#8358;444,127</s>
                                            <div className="discount-box">
                                                <p className="discount-box-p">-30%</p>
                                            </div>
                                        </div>
                                        <p className="Deals_Section_Item_1_text-p">You save &#8358;131,327</p>
                                    </div>
                                </div>
                                 <div className="Deals_Section_Item_1 d-flex">
                                    <img src={hp_pro} alt="img" />
                                    <div className="Deals_Section_Item_1_text">
                                        <header >Lenovo V15 G3 Iap 15.6" Laptop -</header>
                                        <div className="deals-price d-flex align-items-center justify-content-between">
                                            <span>&#8358;312,800</span>
                                            <s>&#8358;444,127</s>
                                            <div className="discount-box">
                                                <p className="discount-box-p">-30%</p>
                                            </div>
                                        </div>
                                        <p className="Deals_Section_Item_1_text-p">You save &#8358;131,327</p>
                                    </div>
                                </div> 
                                <div className="Deals_Section_Item_1 d-flex">
                                    <img src={watch} alt="img" />
                                    <div className="Deals_Section_Item_1_text">
                                        <header >Lenovo V15 G3 Iap 15.6" Laptop -</header>
                                        <div className="deals-price d-flex align-items-center justify-content-between">
                                            <span>&#8358;312,800</span>
                                            <s>&#8358;444,127</s>
                                            <div className="discount-box">
                                                <p className="discount-box-p">-30%</p>
                                            </div>
                                        </div>
                                        <p className="Deals_Section_Item_1_text-p">You save &#8358;131,327</p>
                                    </div>
                                </div>
                                 <div className="Deals_Section_Item_1 d-flex">
                                    <img src={TV} alt="img" />
                                    <div className="Deals_Section_Item_1_text">
                                        <header >Lenovo V15 G3 Iap 15.6" Laptop -</header>
                                        <div className="deals-price d-flex align-items-center justify-content-between">
                                            <span>&#8358;312,800</span>
                                            <s>&#8358;444,127</s>
                                            <div className="discount-box">
                                                <p className="discount-box-p">-30%</p>
                                            </div>
                                        </div>
                                        <p className="Deals_Section_Item_1_text-p">You save &#8358;131,327</p>
                                    </div>
                                </div>
                                <div className="Deals_Section_Item_1 d-flex">
                                    <img src={IPhone15} alt="img" />
                                    <div className="Deals_Section_Item_1_text">
                                        <header >Lenovo V15 G3 Iap 15.6" Laptop -</header>
                                        <div className="deals-price d-flex align-items-center justify-content-between">
                                            <span>&#8358;312,800</span>
                                            <s>&#8358;444,127</s>
                                            <div className="discount-box">
                                                <p className="discount-box-p">-30%</p>
                                            </div>
                                        </div>
                                        <p className="Deals_Section_Item_1_text-p">You save &#8358;131,327</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Sponsored_Section">
                        <h2>Sponsored Products</h2>
                        <hr />
                        <div className="Sponsored_Section-container">
                            <div className="sponsored-item-1">
                                <img src={steam} alt="img" />
                                <h3>11 Stream 11 Pro G4- Intel...</h3>
                                <div className="sponsored-price">
                                    <h4>&#8358;103,500</h4>
                                </div>
                            </div>
                            <div className="sponsored-item-1">
                                <img src={steam} alt="img" />
                                <h3>11 Stream 11 Pro G4- Intel...</h3>
                                <div className="sponsored-price">
                                    <h4>&#8358;103,500</h4>
                                </div>
                            </div>
                            <div className="sponsored-item-1">
                                <img src={steam} alt="img" />
                                <h3>11 Stream 11 Pro G4- Intel...</h3>
                                <div className="sponsored-price">
                                    <h4>&#8358;103,500</h4>
                                </div>
                            </div>
                            <div className="sponsored-item-1">
                                <img src={steam} alt="img" />
                                <h3>11 Stream 11 Pro G4- Intel...</h3>
                                <div className="sponsored-price">
                                    <h4>&#8358;103,500</h4>
                                </div>
                            </div>
                            <div className="sponsored-item-1">
                                <img src={steam} alt="img" />
                                <h3>11 Stream 11 Pro G4- Intel...</h3>
                                <div className="sponsored-price">
                                    <h4>&#8358;103,500</h4>
                                </div>
                            </div>
                            <div className="sponsored-item-1">
                                <img src={steam} alt="img" />
                                <h3>11 Stream 11 Pro G4- Intel...</h3>
                                <div className="sponsored-price">
                                    <h4>&#8358;103,500</h4>
                                </div>
                            </div>
                            <div className="sponsored-item-1">
                                <img src={laptop} alt="img" />
                                <h5>Organic Blessed Thistle - 1...</h5>
                                <div className="sponsored-price">
                                    <h3>#312,800</h3>
                                    <s>#150,000</s>
                                    <div className="discount-price">-10%</div>
                                </div>
                                <p>You save $14160</p>
                            </div>
                        </div>
                    </div>
                    <div className="categories-container ">
                        <img src={computing} alt="img" />
                        <img src={Electronics} alt="img" />
                        <img src={Power} alt="img" />
                        <img src={groceries} alt="img" />
                        <img src={kitchen} alt="img" />
                        <img src={mobile} alt="img" />
                    </div>
                    <div className="official-store">
                        <h3>Official Store</h3>
                    </div>
                    <div className="sponsors">
                        <div className="sponsors-container">
                            <img src={lg} alt="img" />
                            <img src={hp} alt="img" />
                            <img src={itec} alt="img" />
                            <img src={intel} alt="img" />
                            <img src={drugfield} alt="img" />
                            <img src={tecno} alt="img" />
                            <img src={lg} alt="img" />
                            <img src={hp} alt="img" />
                            <img src={itec} alt="img" />
                            <img src={intel} alt="img" />
                            <img src={drugfield} alt="img" />
                            <img src={tecno} alt="img" />
                            <img src={lg} alt="img" />
                            <img src={hp} alt="img" />
                            <img src={itec} alt="img" />
                            <img src={intel} alt="img" />
                            <img src={drugfield} alt="img" />
                            <img src={tecno} alt="img" />
                        </div>
                    </div>
                    <div className="Deals_Section">
                        <div className="Deals_Section_container">
                            <div className="container-head">
                                <h3>Recommended for you</h3>
                                <a href="/">See All items</a>
                            </div>
                            <hr />
                            <div className="Deals_Section_Items col-lg-12">
                                <div className="Deals_Section_Item_1 d-flex">
                                    <img src={thinkpad} alt="img" />
                                    <div className="Deals_Section_Item_1_text">
                                        <header >Lenovo Thinkpad E14, intel Core ...-</header>
                                        <div className="deals-price d-flex align-items-center justify-content-between">
                                            <h3>&#8358;666,700</h3>
                                            <s>&#8358;953,381</s>
                                            <div className="discount-box">
                                                <span>-30%</span>
                                            </div>
                                        </div>
                                        <p>You save &#8358;286,681</p>
                                    </div>
                                </div>
                                <div className="Deals_Section_Item_1 d-flex">
                                    <img src={thinkbook} alt="img" />
                                    <div className="Deals_Section_Item_1_text">
                                        <header >Lenovo Thinkbook 14-,i5,8gb Base...</header>
                                        <div className="deals-price d-flex align-items-center justify-content-between">
                                            <h3>&#8358;600,000</h3>
                                            <s>&#8358;858,000</s>
                                            <div className="discount-box">
                                                <span>-30%</span>
                                            </div>
                                        </div>
                                        <p>You save &#8358;258,000</p>
                                    </div>
                                </div>
                                <div className="Deals_Section_Item_1 d-flex">
                                    <img src={hp_g9} alt="img" />
                                    <div className="Deals_Section_Item_1_text">
                                        <header >HP Pro 240 G9 AIO PC Bundle 23.8...    </header>
                                        <div className="deals-price d-flex align-items-center justify-content-between">
                                            <h3>&#8358;433,650</h3>
                                            <s>&#8358;620,119.5</s>
                                            <div className="discount-box">
                                                <span>-30%</span>
                                            </div>
                                        </div>
                                        <p>You save &#8358;186,469.5</p>
                                    </div>
                                </div>
                                <div className="Deals_Section_Item_1 d-flex">
                                    <img src={neo} alt="img" />
                                    <div className="Deals_Section_Item_1_text">
                                        <header >Lenovo Neo 30a -22"AIO intel...</header>
                                        <div className="deals-price d-flex align-items-center justify-content-between">
                                            <h3>&#8358;290,850</h3>
                                            <s>&#8358;415,915</s>
                                            <div className="discount-box">
                                                <span>-30%</span>
                                            </div>
                                        </div>
                                        <p>You save &#8358;125,056</p>
                                    </div>
                                </div>
                                <div className="Deals_Section_Item_1 d-flex">
                                    <img src={intelcore} alt="img" />
                                    <div className="Deals_Section_Item_1_text">
                                        <header >Hp Laptop 15 intel Core 15-10210</header>
                                        <div className="deals-price d-flex align-items-center justify-content-between">
                                            <h3>&#8358;449,400</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="Deals_Section_Item_1 d-flex">
                                    <img src={prelude} alt="img" />
                                    <div className="Deals_Section_Item_1_text">
                                        <header >HP Prelude Pro Recycle Top Loaded..</header>
                                        <div className="deals-price d-flex align-items-center justify-content-between">
                                            <h3>&#8358;$4950</h3>
                                            <s>&#8358;12,375</s>
                                            <div className="discount-box">
                                                <span>-60%</span>
                                            </div>
                                        </div>
                                        <p>You save &#8358;743</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="kidshop ">
                        <img src={kidstore} alt="img" />
                    </div>
                    <div className="booze-cereals">
                        <img src={cereals} alt="img" />
                        <img src={Booze} alt="img" />
                    </div>
                    <div className="shop-now">
                        <div className="shop-now-div">
                            <img src={Home} alt="img" />
                            <div className="shop-now-div-text p-3">
                                <h4>Home Furnishings</h4>
                                <p>Get up to 70% off</p>
                                <a href="#">SHOP NOW &#8594; </a>
                            </div>
                        </div>
                        <div className="shop-now-div">
                            <img src={Home} alt="img" />
                            <div className="shop-now-div-text p-3">
                                <h4>Home Furnishings</h4>
                                <p>Get up to 70% off</p>
                                <a href="">SHOP NOW &#8594; </a>
                            </div>
                        </div>
                        <div className="shop-now-div">
                            <img src={Home} alt="img" />
                            <div className="shop-now-div-text p-3">
                                <h4>Home Furnishings</h4>
                                <p>Get up to 70% off</p>
                                <a href="">SHOP NOW &#8594; </a>
                            </div>
                        </div>
                        <div className="shop-now-div">
                            <img src={Home} alt="img" />
                            <div className="shop-now-div-text p-3">
                                <h4>Home Furnishings</h4>
                                <p>Get up to 70% off</p>
                                <a href="">SHOP NOW &#8594; </a>
                            </div>
                        </div>
                    </div>
                    <div className="closing-text">
                        <h5>Konga Online Shopping in Nigeria - Best Shopping Site</h5>
                        <p>Konga.com is Nigeria’s number one online Shopping destination.We pride ourselves in having everything you could possibly need for life and living at the best prices than anywhere else. Our access to Original Equipment Manufacturers and premium sellers gives us a wide range of products at very low prices. Some of our popular categories include electronics, mobile phones, computers, fashion, beauty products, home and kitchen, Building and construction materials and a whole lot more from premium brands. Some of our other categories include Food and drinks, automotive and industrial, books, musical equipment, babies and kids items, sports and fitness, to mention a few. To make your shopping experience swift and memorable, there are also added services like gift vouchers, consumer promotion activities across different categories and bulk purchases with hassle-free delivery. Enjoy free shipping rates for certain products and with the bulk purchase option, you can enjoy low shipping rates, discounted prices and flexible payment. When you shop on our platform, you can pay with your debit card or via KongaPay, which is a convenient and secured payment solution. Get the best of lifestyle services online. Don't miss out on the biggest sales online which takes place on special dates yearly.</p>
                    </div>

                </div>

            </div>
                <Footer />
        </div>

    )
}

export default Body_SecOne;