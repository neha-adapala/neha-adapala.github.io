import { useScrollFadeIn } from '../hooks/useScrollFadeIn'
import { data } from '../data'
import './Art.css'

const Art = () => {
  const [sectionRef, sectionVisible] = useScrollFadeIn()

  return (
    <section id="art" className="art-section" ref={sectionRef}>
      <div className={`art-container ${sectionVisible ? 'visible' : ''}`}>
        <h2 className="section-title">Art</h2>
        
        <div className="art-grid">
          {data.art.map((artPiece, index) => (
            <div
              key={index}
              className="art-item"
              style={{
                animationDelay: `${index * 0.1}s`,
                opacity: sectionVisible ? 1 : 0,
                transform: sectionVisible ? 'scale(1)' : 'scale(0.9)',
                transition: `opacity 0.8s ease ${index * 0.1}s, transform 0.8s ease ${index * 0.1}s`
              }}
            >
              <div className="art-image-wrapper">
                {artPiece.image ? (
                  <img 
                    src={`${import.meta.env.BASE_URL}${encodeURI(artPiece.image.replace(/^\//, ''))}`} 
                    alt={artPiece.title}
                    className="art-image"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextElementSibling.style.display = 'flex'
                    }}
                  />
                ) : null}
                <div className="art-image-placeholder" style={{ display: artPiece.image ? 'none' : 'flex' }}>
                  <span>{artPiece.title || `Art Piece ${index + 1}`}</span>
                </div>
              </div>
              {artPiece.caption && (
                <p className="art-caption">{artPiece.caption}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Art
