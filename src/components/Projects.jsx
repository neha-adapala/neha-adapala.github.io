import { useScrollFadeIn } from '../hooks/useScrollFadeIn'
import { data } from '../data'
import './Projects.css'

const Projects = () => {
  const [sectionRef, sectionVisible] = useScrollFadeIn()

  return (
    <section id="projects" className="projects-section" ref={sectionRef}>
      <div className={`projects-container ${sectionVisible ? 'visible' : ''}`}>
        <h2 className="section-title">Projects</h2>
        
        <div className="projects-list">
          {data.projects.map((project, projectIndex) => (
            <div 
              key={projectIndex} 
              className="project-item"
              style={{
                opacity: sectionVisible ? 1 : 0,
                transform: sectionVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.6s ease ${projectIndex * 0.2}s, transform 0.6s ease ${projectIndex * 0.2}s`
              }}
            >
              <div className="project-box">
                <div className="project-content">
                  <div className="project-text">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <ul className="project-features">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="project-feature">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="project-images">
                    <div className={`project-images-grid project-images-grid-${project.gridLayout || '2x2'}`}>
                      {project.images.map((image, imageIndex) => (
                        <div key={imageIndex} className="project-image-wrapper">
                          <img 
                            src={`${import.meta.env.BASE_URL}${encodeURI(image.src.replace(/^\//, ''))}`} 
                            alt={image.alt}
                            className="project-image"
                            onError={(e) => {
                              // Fallback if image doesn't exist
                              e.target.style.display = 'none'
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
