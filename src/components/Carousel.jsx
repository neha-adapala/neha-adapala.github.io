import { useEffect, useRef } from 'react'
import './Carousel.css'

const Carousel = ({ items, scrollY }) => {
  const carouselRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    const carousel = carouselRef.current
    const container = containerRef.current
    if (!carousel || !container) return

    const handleScroll = () => {
      const containerRect = container.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const containerTop = containerRect.top
      const containerBottom = containerRect.bottom
      const containerHeight = containerRect.height

      // Only animate when carousel is in view
      if (containerTop < windowHeight && containerBottom > 0) {
        // Calculate scroll progress (0 to 1) based on container position
        const scrollProgress = Math.max(
          0,
          Math.min(1, (windowHeight - containerTop) / (windowHeight + containerHeight))
        )
        // Translate from -50% to 50% as user scrolls
        const translateX = (scrollProgress - 0.5) * 100
        carousel.style.transform = `translateX(${translateX}%)`
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrollY])

  return (
    <div className="carousel-container" ref={containerRef}>
      <div className="carousel" ref={carouselRef}>
        {items.map((item, index) => (
          <div key={index} className="carousel-box">
            <div className="box-image">
              <span>Project Image</span>
            </div>
            <div className="box-content">
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Carousel
