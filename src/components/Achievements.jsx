import { useScrollFadeIn } from '../hooks/useScrollFadeIn'
import { data } from '../data'
import './Achievements.css'

const Achievements = () => {
  const [sectionRef, sectionVisible] = useScrollFadeIn()
  const [awardsRef, awardsVisible] = useScrollFadeIn({ threshold: 0.2 })
  const [newsRef, newsVisible] = useScrollFadeIn({ threshold: 0.2 })

  return (
    <section id="achievements" className="achievements-section" ref={sectionRef}>
      <div className={`achievements-container ${sectionVisible ? 'visible' : ''}`}>
        {/* Awards Section */}
        <div 
          className={`awards-section ${awardsVisible ? 'visible' : ''}`}
          ref={awardsRef}
        >
          <h2 className="section-title">Awards</h2>
          
          <div className="awards-layout">
            {data.achievements.map((achievement, index) => (
              <div 
                key={index} 
                className="award-row"
                style={{
                  opacity: awardsVisible ? 1 : 0,
                  transform: awardsVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`
                }}
              >
                <div className="award-date-wrapper">
                  <div className="award-date-bg"></div>
                  <div className="award-date">{achievement.date}</div>
                </div>
                <div className="award-description">{achievement.title}</div>
              </div>
            ))}
          </div>
        </div>

        {/* In the News Section */}
        {data.inTheNews && (
          <div 
            className={`in-the-news ${newsVisible ? 'visible' : ''}`}
            ref={newsRef}
          >
            <h3 className="subsection-title">In the News</h3>
            <div className="news-boxes-wrapper">
              <div className="news-boxes-header-bg"></div>
              <div className="news-boxes">
                {data.inTheNews.map((news, index) => (
                  <div 
                    key={index} 
                    className="news-box"
                    style={{
                      opacity: newsVisible ? 1 : 0,
                      transform: newsVisible ? 'translateY(0)' : 'translateY(20px)',
                      transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`
                    }}
                  >
                    <div className="news-box-header">
                      <h4 className="news-box-title">{news.source}</h4>
                    </div>
                    <div className="news-box-content">
                      <p className="news-box-text">{news.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Achievements
