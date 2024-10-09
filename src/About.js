import React from 'react';
import './About.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Services() {
    return (
        
        <div className="service">
        <div className="services">
            {/* <!-- 1 --> */}
            <div className="box glowing-card">
                <div className="service-content">
                    <div className="service-icon"><i class="bi bi-book-half"></i></div>
                    <div className="service-text">
                        <h4>Our Vision</h4><br/>
                        <p>At Mr.Bot, we believe in transforming the way people interact with technology. Our vision is to harness the power of artificial intelligence to create meaningful conversations that enhance user experiences and simplify everyday tasks.</p><br/>
                    </div>
                </div>
            </div>
            {/* <!-- 2 --> */}
            <div className="box">
                <div className="service-content">
                    <div className="service-icon"><i class="bi bi-globe"></i></div>
                    <div className="service-text">
                        <h4>Technology Behind the Bot</h4><br/>
                        <p> Our chatbot leverages OpenAI's advanced natural language processing technology to understand and respond to user inquiries seamlessly. With continuous learning and improvements, it provides accurate, context-aware responses that feel natural and engaging.</p><br/>
                    </div>
                </div>
            </div>
            {/* <!-- 3 --> */}
            <div className="box">
                <div className="service-content">
                    <div className="service-icon"><i class="bi bi-code-slash"></i></div>
                    <div className="service-text">
                        <h4>A Passion for AI Innovation</h4><br/>
                        <p>Developed by Deniya, our chatbot is the result of a deep passion for artificial intelligence and user experience. With a focus on creating smart, intuitive conversations, I strive to make technology more accessible and engaging for everyone. Join me on this journey as I continue to enhance and evolve the chatbot to meet your needs!</p><br/>
                    </div>
                </div>
            </div>
    
        </div>
        </div>
    );
}
export default Services;