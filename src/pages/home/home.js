import React from "react";
import style from "./style.module.css";
import iconGooglePlay from "../../assets/images/icon google play.svg";
import iconAppStore from "../../assets/images/icon app store.svg";
import iconHandphone from "../../assets/images/icon handphone.svg";
import iconIkan from "../../assets/images/icon Ikan.svg";
import component1 from "../../assets/images/Component 1.svg";
import component2 from "../../assets/images/Component 2.svg";
import component3 from "../../assets/images/Component 3.svg";
import iconIkan2 from "../../assets/images/icon ikan satu.svg";
import iconHandphone2 from "../../assets/images/icon handphone 2.svg";
import iconIkan3 from "../../assets/images/icon ikan tiga.svg";
import iconHandphone3 from "../../assets/images/icon handphone 3.svg";
import iconIkan4 from "../../assets/images/icon ikan 4.svg";
import iconHandphone4 from "../../assets/images/icon handphone 4.svg";
import person from "../../assets/images/person 1.svg";
import star from "../../assets/images/star.svg";
import manCourrier from "../../assets/images/man courrier.svg";
import logo from "../../assets/images/JBG Logo 1.svg";
import facebook from "../../assets/images/facebook.svg";
import twitter from "../../assets/images/twitter.svg";
import instagram from "../../assets/images/instagram.svg";

const Home = () => {
  return (
    <section>
      <div className={style.customContainerHome}>
        {/* START LAYER 1 */}
        <section>
          {/* NAVBAR */}
          <nav className="navbar navbar-expand-lg mt-3">
            <div className="container">
              <a className="navbar-brand" href="#" style={{ color: "#dc1e23" }}>
                Toko Ikan
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-lg-0">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      href="#"
                      style={{ color: "#dc1e23" }}
                    >
                      Beranda
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="#keunggulan">
                      Keunggulan
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="#fitur-aplikasi">
                      Fitur Aplikasi
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="#testimonial">
                      Testimonial
                    </a>
                  </li>
                </ul>
                <div className="d-flex">
                  <button className={style.buttonDownload}>Download</button>
                </div>
              </div>
            </div>
          </nav>
          {/* END NAVBAR */}

          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div>
                  <h1 className={`mt-4 ${style.header}`}>
                    Kirim berbagai jenis ikan dengan mudah
                  </h1>
                </div>
                <div className="mt-4">
                  <span className="text-secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Amet, dolorem est praesentium reprehenderit vero!
                  </span>
                </div>
                <div className="mt-4">
                  <div className="row">
                    <div className={`col-auto ${style.buttonGooglePlay}`}>
                      <div className="row">
                        <div className="col-auto">
                          <img
                            className={`mt-2 ${style.icon}`}
                            src={iconGooglePlay}
                            alt=""
                          />
                        </div>
                        <div className="col-auto">
                          <div>
                            <span style={{ fontSize: "10px" }}>GET IN ON</span>
                          </div>
                          <div>
                            <span>Google Play</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={`col-auto ${style.buttonAppStore}`}>
                      <div className="row">
                        <div className="col-auto">
                          <img
                            className={`mt-2 ${style.icon}`}
                            src={iconAppStore}
                            alt=""
                          />
                        </div>
                        <div className="col-auto">
                          <div>
                            <span style={{ fontSize: "9px" }}>
                              DOWNLOAD ON THE
                            </span>
                          </div>
                          <div>
                            <span>App Store</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="row">
                    <div className="col-auto text-center">
                      <div>
                        <h5 className={style.activeUsers}>1.9k+</h5>
                      </div>
                      <div>
                        <span className="text-secondary">Active Users</span>
                      </div>
                    </div>
                    <div className="col-auto text-center">
                      <div>
                        <h5 className={style.newFeatures}>20+</h5>
                      </div>
                      <div>
                        <span className="text-secondary">New Features</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className={style.backgroundRed}>
                  <img className={style.iconIkan} src={iconIkan} alt="ikan" />
                  <img
                    className={style.iconHandphone}
                    src={iconHandphone}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* END LAYER 1 */}
        {/* START LAYER 2 */}
        <section>
          <div className={`container-fluid ${style.customContainerPengiriman}`}>
            <div className="row">
              <div
                style={{ color: "white", borderRight: "1px solid white" }}
                className="col-md-6 text-center mt-5"
              >
                <div>
                  <h3>Lacak Pengiriman Anda</h3>
                </div>
                <div className="mt-4">
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quam, quidem, unde quos nihil molestiae similique possimus
                    error pariatur sit dolorum eveniet.
                  </span>
                </div>
                <form className="mt-5">
                  <div className="row">
                    <div className="col-md-8">
                      <input
                        className={style.containerInput}
                        type="text"
                        placeholder="Lacak Pengiriman"
                      />
                    </div>
                    <div className="col-md-4">
                      <button className={style.containerLacak}>Lacak</button>
                    </div>
                  </div>
                </form>
              </div>
              <div
                style={{ color: "white" }}
                className="col-md-6 text-center mt-5"
              >
                <div>
                  <h3>Cek Tarik Pengiriman Anda</h3>
                </div>
                <div className="row mt-4">
                  <div className="col-md-6">
                    <input
                      className={style.containerInput}
                      type="text"
                      placeholder="Origin"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      className={style.containerInput}
                      type="text"
                      placeholder="Destination"
                    />
                  </div>
                </div>
                <div className="mt-5">
                  <button className={style.containerCheck}>Check</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* END LAYER 2 */}
        {/* START LAYER 3 */}
        <section id="keunggulan">
          <div className="container">
            <div className="text-center mt-4 p-5">
              <div>
                <h1 style={{ fontWeight: "700" }}>Keunggulan Kami</h1>
              </div>
              <div className="mt-4">
                <span className="text-secondary">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quia, facere eligendi veniam architecto enim blanditiis
                  commodi sapiente vero libero voluptas provident excepturi
                  iusto!
                </span>
              </div>
            </div>
            <div className="mt-4">
              <div className="row">
                <div className="col-md-4">
                  <div className={`${style.cardCutom}`}>
                    <img
                      src={component1}
                      className={`${style.customImageCard}`}
                      alt="..."
                    />
                    <div className="card-body text-center">
                      <h5 className="mt-3">Kirim Ke Berbagai Negara</h5>
                      <p className="card-text mt-3 text-secondary">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className={`${style.cardCutom}`}>
                    <img
                      src={component2}
                      className={`${style.customImageCard}`}
                      alt="..."
                    />
                    <div className="card-body text-center">
                      <h5 className="mt-3">Mudah Di Gunakan</h5>
                      <p className="card-text mt-3 text-secondary">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className={`${style.cardCutom}`}>
                    <img
                      src={component3}
                      className={`${style.customImageCard}`}
                      alt="..."
                    />
                    <div className="card-body text-center">
                      <h5 className="mt-3">Pengiriman Aman</h5>
                      <p className="card-text mt-3 text-secondary">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* END LAYER 3 */}
        {/* START LAYER 4 */}
        <section id="fitur-aplikasi">
          <div className="container mt-5">
            <div className="row">
              <div className="col-md-6 mt-5">
                <div>
                  <h1 style={{ fontWeight: "700" }}>
                    Berbagai metode pengiriman
                  </h1>
                </div>
                <div className="mt-4">
                  <span className="text-secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                    magni expedita ducimus incidunt eveniet officiis repellendus
                    corrupti! At vel odio molestiae, necessitatibus assumenda
                    tempora? Dignissimos veniam corrupti sint vitae ab!
                  </span>
                </div>
              </div>
              <div className="col-md-6 mt-4">
                <div className={style.backgroundRed}>
                  <img className={style.iconIkan} src={iconIkan2} alt="" />
                  <img
                    className={style.iconHandphone}
                    src={iconHandphone2}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* END LAYER 4 */}
        {/* START LAYER 5 */}
        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className={style.backgroundCustomRed}>
                  <img
                    className={style.customIconHandphone}
                    src={iconHandphone3}
                    alt=""
                  />
                  <img
                    className={style.customIconIkan}
                    src={iconIkan3}
                    alt=""
                  />
                </div>
              </div>
              <div className="col-md-6 mt-5">
                <div>
                  <h1 style={{ fontWeight: "700" }}>
                    Lacak Status Pengiriman Anda
                  </h1>
                </div>
                <div className="mt-4">
                  <span className="text-secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                    magni expedita ducimus incidunt eveniet officiis repellendus
                    corrupti! At vel odio molestiae, necessitatibus assumenda
                    tempora? Dignissimos veniam corrupti sint vitae ab!
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* END LAYER 5 */}
        {/* START LAYER 6 */}
        <section>
          <div className="container mt-5">
            <div className="row">
              <div className="col-md-6 mt-5">
                <div>
                  <h1 style={{ fontWeight: "700" }}>
                    Cek Schedule Pengiriman Anda
                  </h1>
                </div>
                <div className="mt-4">
                  <span className="text-secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                    magni expedita ducimus incidunt eveniet officiis repellendus
                    corrupti! At vel odio molestiae, necessitatibus assumenda
                    tempora? Dignissimos veniam corrupti sint vitae ab!
                  </span>
                </div>
              </div>
              <div className="col-md-6 mt-4">
                <div className={style.backgroundRed}>
                  <img
                    className={style.customIconIkan4}
                    src={iconIkan4}
                    alt=""
                  />
                  <img
                    className={style.iconHandphone}
                    src={iconHandphone4}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* END LAYER 6 */}
        {/* START LAYER 7 */}
        <section id="testimonial">
          <div className="container">
            <div className="text-center mt-4 p-5">
              <div>
                <h1 style={{ fontWeight: "700" }}>Testimonial</h1>
              </div>
              <div className="mt-4">
                <span className="text-secondary">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quia, facere eligendi veniam architecto enim blanditiis
                  commodi sapiente vero libero voluptas provident excepturi
                  iusto!
                </span>
              </div>
            </div>
            <div className="mt-4">
              <div className="row">
                <div className="col-md-3">
                  <div className={`${style.cardCutomTestimonial}`}>
                    <div className="row">
                      <div className="col-md-4">
                        <img
                          src={person}
                          className={`${style.customImageCardTestimonial}`}
                          alt="..."
                        />
                      </div>
                      <div className="col-auto">
                        <img
                          src={star}
                          className={`${style.customIconStar}`}
                          alt="..."
                        />
                        <img
                          src={star}
                          className={`${style.customIconStar}`}
                          alt="..."
                        />
                        <img
                          src={star}
                          className={`${style.customIconStar}`}
                          alt="..."
                        />
                        <img
                          src={star}
                          className={`${style.customIconStar}`}
                          alt="..."
                        />
                        <img
                          src={star}
                          className={`${style.customIconStar}`}
                          alt="..."
                        />
                      </div>
                    </div>
                    <div className="card-body">
                      <h5 style={{ color: "#133240" }} className="mt-3">
                        Floyd Miles
                      </h5>
                      <p className="card-text mt-3 text-secondary">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className={`${style.cardCutomTestimonial}`}>
                    <div className="row">
                      <div className="col-md-4">
                        <img
                          src={person}
                          className={`${style.customImageCardTestimonial}`}
                          alt="..."
                        />
                      </div>
                      <div className="col-auto">
                        <img
                          src={star}
                          className={`${style.customIconStar}`}
                          alt="..."
                        />
                        <img
                          src={star}
                          className={`${style.customIconStar}`}
                          alt="..."
                        />
                        <img
                          src={star}
                          className={`${style.customIconStar}`}
                          alt="..."
                        />
                        <img
                          src={star}
                          className={`${style.customIconStar}`}
                          alt="..."
                        />
                        <img
                          src={star}
                          className={`${style.customIconStar}`}
                          alt="..."
                        />
                      </div>
                    </div>
                    <div className="card-body">
                      <h5 style={{ color: "#133240" }} className="mt-3">
                        Ronald Richards
                      </h5>
                      <p className="card-text mt-3 text-secondary">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className={`${style.cardCutomTestimonial}`}>
                    <div className="row">
                      <div className="col-md-4">
                        <img
                          src={person}
                          className={`${style.customImageCardTestimonial}`}
                          alt="..."
                        />
                      </div>
                      <div className="col-auto">
                        <img
                          src={star}
                          className={`${style.customIconStar}`}
                          alt="..."
                        />
                        <img
                          src={star}
                          className={`${style.customIconStar}`}
                          alt="..."
                        />
                        <img
                          src={star}
                          className={`${style.customIconStar}`}
                          alt="..."
                        />
                        <img
                          src={star}
                          className={`${style.customIconStar}`}
                          alt="..."
                        />
                        <img
                          src={star}
                          className={`${style.customIconStar}`}
                          alt="..."
                        />
                      </div>
                    </div>
                    <div className="card-body">
                      <h5 style={{ color: "#133240" }} className="mt-3">
                        Savannah Nguyen
                      </h5>
                      <p className="card-text mt-3 text-secondary">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className={`${style.cardCutomTestimonial}`}>
                    <div className="row">
                      <div className="col-md-4">
                        <img
                          src={person}
                          className={`${style.customImageCardTestimonial}`}
                          alt="..."
                        />
                      </div>
                      <div className="col-auto">
                        <img
                          src={star}
                          className={`${style.customIconStar}`}
                          alt="..."
                        />
                        <img
                          src={star}
                          className={`${style.customIconStar}`}
                          alt="..."
                        />
                        <img
                          src={star}
                          className={`${style.customIconStar}`}
                          alt="..."
                        />
                        <img
                          src={star}
                          className={`${style.customIconStar}`}
                          alt="..."
                        />
                        <img
                          src={star}
                          className={`${style.customIconStar}`}
                          alt="..."
                        />
                      </div>
                    </div>
                    <div className="card-body">
                      <h5 style={{ color: "#133240" }} className="mt-3">
                        Floyd Miles
                      </h5>
                      <p className="card-text mt-3 text-secondary">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* END LAYER 7 */}
        {/* START LAYER 8 */}
        <section>
          <div className={style.customContainerCourrier}>
            <div className="container mt-5">
              <div className="row">
                <div style={{ color: "white" }} className="col-md-6 mt-5">
                  <div style={{ width: "70%" }}>
                    <h1>Available and Download Anytime!</h1>
                  </div>
                  <div>
                    <span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </span>
                  </div>
                  <div className="mt-4">
                    <div className="row">
                      <div className={`col-auto ${style.buttonGooglePlay}`}>
                        <div className="row">
                          <div className="col-auto">
                            <img
                              className={`mt-2 ${style.icon}`}
                              src={iconGooglePlay}
                              alt=""
                            />
                          </div>
                          <div className="col-auto">
                            <div>
                              <span style={{ fontSize: "10px" }}>
                                GET IN ON
                              </span>
                            </div>
                            <div>
                              <span>Google Play</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={`col-auto ${style.buttonAppStore}`}>
                        <div className="row">
                          <div className="col-auto">
                            <img
                              className={`mt-2 ${style.icon}`}
                              src={iconAppStore}
                              alt=""
                            />
                          </div>
                          <div className="col-auto">
                            <div>
                              <span style={{ fontSize: "9px" }}>
                                DOWNLOAD ON THE
                              </span>
                            </div>
                            <div>
                              <span>App Store</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{ color: "white" }}
                  className="col-md-6 text-center mt-5"
                >
                  <img
                    className={style.containerManCourrier}
                    src={manCourrier}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* END LAYER 8 */}
        {/* START FOOTER */}
        <footer>
          <div className="container mt-5">
            <div className="row">
              <div className="col-md-6">
                <div>
                  <img src={logo} alt="logo" />
                </div>
                <div className="mt-3">
                  <span className="text-secondary">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Porro harum pariatur quaerat quibusdam nemo accusamu
                  </span>
                </div>
                <div className="row mt-4">
                  <div className="col-auto">
                    <img src={facebook} alt="facebook" />
                  </div>
                  <div className="col-auto">
                    <img src={twitter} alt="twitter" />
                  </div>
                  <div className="col-auto">
                    <img src={instagram} alt="instagram" />
                  </div>
                </div>
              </div>
              <div className="col-md-3 mt-3">
                <div>
                  <h5>Menu Bantuan</h5>
                </div>
                <div className="mt-3">
                  <a className="nav-link text-secondary" href="#keunggulan">
                    Keunggulan
                  </a>
                </div>
                <div className="mt-3">
                  <a className="nav-link text-secondary" href="#fitur-aplikasi">
                    Fitur Aplikasi
                  </a>
                </div>
                <div className="mt-3">
                  <a className="nav-link text-secondary" href="#testimonial">
                    Testimoni
                  </a>
                </div>
              </div>
              <div className="col-md-3 mt-3">
                <div>
                  <h5>Informasi Kontak</h5>
                </div>
                <div className="mt-3">
                  <span className="text-secondary">0812-9797-1227</span>
                </div>
                <div className="mt-3">
                  <span className="text-secondary">0812-9797-1227</span>
                </div>
                <div className="mt-3">
                  <span className="text-secondary">
                    Jbgtranshipping@gmail.com
                  </span>
                </div>
              </div>
            </div>
            <div className="text-center mt-4">
              <span className="text-secondary">All right reserved@2022</span>
            </div>
          </div>
        </footer>
        {/* END FOOTER */}
      </div>
    </section>
  );
};

export default Home;
