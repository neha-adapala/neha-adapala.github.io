import { useScrollFadeIn } from '../hooks/useScrollFadeIn'
import { data } from '../data'
import './Contact.css'

const Contact = () => {
  const [sectionRef, sectionVisible] = useScrollFadeIn()
  const [contactRef, contactVisible] = useScrollFadeIn({ threshold: 0.2 })

  return (
    <section id="contact" className="contact-section" ref={sectionRef}>
      <div className={`contact-container ${sectionVisible ? 'visible' : ''}`}>
        <h2 className="section-title">Contact me</h2>
        
        <div 
          className={`contact-links ${contactVisible ? 'visible' : ''}`}
          ref={contactRef}
        >
          <div className="contact-boxes-wrapper">
            <div className="contact-boxes-header-bg"></div>
            <div className="contact-boxes">
              {data.about.contact.map((contact, index) => (
                <div 
                  key={index} 
                  className="contact-box"
                  style={{
                    opacity: contactVisible ? 1 : 0,
                    transform: contactVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`
                  }}
                >
                  <div className="contact-box-header">
                    <h4 className="contact-box-title">{contact.name}</h4>
                  </div>
                  <div className="contact-box-content">
                    <a 
                      href={contact.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="contact-box-text"
                    >
                      {contact.text}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
