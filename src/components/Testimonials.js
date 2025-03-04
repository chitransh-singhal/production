import React from "react";
import '../App.css';

const Testimonials = () => {
    return (
        <div className="Testimonials">
            <div className="top-text">
                <h2 className="title-top-text out-Testimonial">Testimonial<i className="bi bi-chat-dots"></i></h2>
            </div>
            <div className="top-text-img">
                <h3>Hear from <br />
                    <samp> Satisfied Clients </samp></h3>
                <img src="/assets/img-bg.png" alt="" />
            </div>
            <div className="bg-text">
                <h4>“Their professionalism and creativity were outstanding. The team's keen understanding of our vision translated into a compelling narrative that was spot-on with our expectations.”</h4>
                <div className="image"></div>

                <div className="title">
                    <img src="https://c4.wallpaperflare.com/wallpaper/326/481/271/girl-sexy-face-model-wallpaper-preview.jpg" alt="" />
                    <h5>first</h5>
                </div>
                <div className="testimonial-buttons">
                    <button className="testimonial-btn prev">
                        <i className="bi bi-chevron-left"></i>
                    </button>
                    <button className="testimonial-btn next">
                        <i className="bi bi-chevron-right"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;