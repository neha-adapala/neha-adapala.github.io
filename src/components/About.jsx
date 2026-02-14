import { useScrollFadeIn } from '../hooks/useScrollFadeIn'
import { data } from '../data'
import './About.css'

const About = () => {
  const [sectionRef, sectionVisible] = useScrollFadeIn()
  const [introRef, introVisible] = useScrollFadeIn({ threshold: 0.2 })
  const [orgsRef, orgsVisible] = useScrollFadeIn({ threshold: 0.2 })
  const [mediaRef, mediaVisible] = useScrollFadeIn({ threshold: 0.1 })

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className={`about-container ${sectionVisible ? 'visible' : ''}`}>
        {/* Three Column Layout - Top Section */}
        <div 
          className={`about-main ${introVisible ? 'visible' : ''}`}
          ref={introRef}
        >
          {/* Column 1: Profile Image */}
          <div className="profile-photo">
            <img 
              src={`${import.meta.env.BASE_URL}neha_headshot.png`} 
              alt="Neha Adapala"
              className="profile-image"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.nextElementSibling.style.display = 'flex'
              }}
            />
            <div className="photo-placeholder" style={{ display: 'none' }}>
              <span>Profile Photo</span>
            </div>
          </div>
          
          {/* Column 2: Intro + Academic Text */}
          <div className="intro-text">
            <p className="paragraph">{data.about.intro1}</p>
            <p className="paragraph">{data.about.intro2}</p>
          </div>
          
          {/* Column 3: Personal Interests + Writing */}
          <div className="personal-text">
            <p className="paragraph">{data.about.personal1}</p>
            <p className="paragraph">{data.about.personal2}</p>
          </div>
        </div>

        {/* Organizations Section */}
        <div 
          className={`organizations ${orgsVisible ? 'visible' : ''}`}
          ref={orgsRef}
        >
          <h3 className="subsection-title">Organizations @ UCLA</h3>
          <div className="org-cards-wrapper">
            <div className="org-cards-header-bg"></div>
            <div className="org-cards">
              {data.about.organizations.map((org, index) => (
                <div 
                  key={index} 
                  className="org-card"
                  style={{
                    opacity: orgsVisible ? 1 : 0,
                    transform: orgsVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`
                  }}
                >
                  <div className="org-card-header">
                    <h4 className="org-title">{org.name}</h4>
                  </div>
                  <div className="org-card-content">
                    <p className="org-subtitle">{org.subtitle}</p>
                    <div className="org-building">
                      {org.building.split('\n').map((line, idx) => {
                        if (idx === 0) {
                          // "Currently building:" line - make italic
                          return (
                            <span key={idx} className="org-building-label">
                              {line}
                            </span>
                          )
                        } else {
                          // Project name line - make first word bold
                          const parts = line.split(' - ')
                          return (
                            <span key={idx} className="org-building-project">
                              <span className="org-project-name">{parts[0]}</span>
                              {parts.length > 1 && ` - ${parts.slice(1).join(' - ')}`}
                            </span>
                          )
                        }
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Media Section */}
        <div 
          className={`media-inspirations ${mediaVisible ? 'visible' : ''}`}
          ref={mediaRef}
        >
          <h3 className="subsection-title">Media I like (w/ my favorite takeaways)</h3>
          <div className="media-grid">
            {data.about.media.map((item, index) => (
              <div 
                key={index} 
                className="media-item"
                style={{
                  opacity: mediaVisible ? 1 : 0,
                  transform: mediaVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`
                }}
              >
                <div className="media-cover">
                  {item.image ? (
                    <img 
                      src={`${import.meta.env.BASE_URL}${encodeURI(item.image.replace(/^\//, ''))}`} 
                      alt={item.title}
                      className="media-cover-image"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.nextElementSibling.style.display = 'flex'
                      }}
                    />
                  ) : null}
                  <span style={{ display: item.image ? 'none' : 'block' }}>{item.title}</span>
                </div>
                <div className="media-text">
                  <p className="media-title">{item.title}</p>
                  {item.author && <p className="media-author">- {item.author}</p>}
                  <p className="media-takeaway">&gt;&gt; {item.takeaway}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
