import { useState } from 'react';
import '../CSS/Carousel.css';
import Button from './Button';

export default function Carousel({ slides }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    function nextSlide() {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    function prevSlide() {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    function goToSlide(index) {
        setCurrentSlide(index);
    };

    return (
        <>
            <div className="carousel-container">
                <div className="carousel">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
                        >
                            <img src={slide} alt='' />
                        </div>
                    ))}
                </div>
                <Button type="carousel-btn prev" handler={prevSlide}>&#10094;</Button>
                <Button type="carousel-btn next" handler={nextSlide}>&#10095;</Button>
                <div className="carousel-dots">
                    {slides.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${index === currentSlide ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};