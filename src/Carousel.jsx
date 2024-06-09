import React,{useState} from 'react'

export default function Carousel() {

    const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "History Of Rajasthan",
      description: "The history of the Indian state of Rajasthan is about 5000 years old. The history of Rajasthan can be classified into three parts owing to the different epochs- Ancient, Medieval and Modern.",
      image: "/path/to/image1.jpg",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
      <>
          <div className="relative mt-8 bg-gray-900 text-white flex flex-col md:flex-row items-center p-4">
      <div className="md:w-1/2 p-4">
        <h2 className="text-lg">RAJASTHAN</h2>
        <h1 className="text-3xl font-bold">{slides[currentSlide].title}</h1>
        <p className="mt-4">{slides[currentSlide].description}</p>
        <button className="mt-4 px-4 py-2 bg-orange-500 text-white rounded" onClick={nextSlide}>Show More</button>
      </div>
      <div className="md:w-1/2">
        <img src={slides[currentSlide].image} alt={slides[currentSlide].title} className="w-full h-auto" />
        <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white">&#10094;</button>
        <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white">&#10095;</button>
      </div>
    </div>
      </>
  )
}
