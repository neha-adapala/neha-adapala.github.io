import './Landing.css'

const Landing = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Circle parameters
  const radius = 350
  const centerX = 400
  const centerY = 400
  const fontSize = 30

  // Calculate arc path for each navigation item
  // Each item gets a small arc segment of the circle
  // Input angles are in clock degrees (0° = 12:00 top, 90° = 3:00 right, 180° = 6:00 bottom, 270° = 9:00 left)
  // SVG uses: 0° = right (3:00), 90° = bottom (6:00), 180° = left (9:00), 270° = top (12:00)
  const getArcPath = (startClockAngle, endClockAngle, r = radius) => {
    // Convert clock angle to SVG angle: clock 0° (top) = SVG 270°, so subtract 90°
    const startSVGAngle = (startClockAngle - 90 + 360) % 360
    const endSVGAngle = (endClockAngle - 90 + 360) % 360
    
    const startAngleRad = (startSVGAngle * Math.PI) / 180
    const endAngleRad = (endSVGAngle * Math.PI) / 180
    
    const x1 = centerX + r * Math.cos(startAngleRad)
    const y1 = centerY + r * Math.sin(startAngleRad)
    const x2 = centerX + r * Math.cos(endAngleRad)
    const y2 = centerY + r * Math.sin(endAngleRad)
    
    // Determine if we need a large arc
    let angleDiff = endSVGAngle - startSVGAngle
    if (angleDiff < 0) angleDiff += 360
    const largeArc = angleDiff > 180 ? 1 : 0
    
    // Direction: 1 for clockwise
    return `M ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2}`
  }

  return (
    <section id="landing" className="landing">
      <div className="landing-content">
        <div className="name-container">
          <h1 className="name">
            <span className="name-line">Neha</span>
            <span className="name-line">Adapala</span>
          </h1>
          
          {/* Rotating Circle Container with SVG */}
          <div className="rotating-circle">
            <svg 
              width="800" 
              height="800" 
              viewBox="0 0 800 800"
              className="circle-svg"
            >
              {/* About Me - Top (11:30-1:00) */}
              {/* Clock: 11:30 = 345° (30 min before 12 = 30°), 1:00 = 30° */}
              <g className="nav-group nav-about-me" onClick={() => scrollToSection('about')}>
                {/* Highlight block */}
                <rect
                  x={centerX - 60}
                  y={centerY - radius - 8}
                  width="120"
                  height="12"
                  fill="#F4E6A1"
                  opacity="0.3"
                  transform={`rotate(-5 ${centerX} ${centerY - radius})`}
                  className="nav-highlight"
                />
                <path
                  id="path-about-me"
                  d={getArcPath(345, 30)}
                  fill="none"
                />
                <text 
                  fontSize={fontSize}
                  fill="#5789FF"
                  fontFamily="EB Garamond, serif"
                  fontWeight="400"
                  letterSpacing="0.1em"
                  className="nav-text-about-me"
                >
                  <textPath href="#path-about-me" startOffset="33%" textAnchor="middle">
                    About Me
                  </textPath>
                </text>
                
              </g>

              {/* Projects - Right (2:00-4:00) */}
              {/* Clock: 2:00 = 60°, 4:00 = 120° */}
              <g className="nav-group nav-projects" onClick={() => scrollToSection('projects')}>
                <path
                  id="path-projects"
                  d={getArcPath(60, 120)}
                  fill="none"
                />
                <text 
                  fontSize={fontSize}
                  fill="#1A2C59"
                  fontFamily="EB Garamond, serif"
                  fontWeight="400"
                  letterSpacing="0.1em"
                  className="nav-text-projects"
                >
                  <textPath href="#path-projects" startOffset="20%" textAnchor="middle">
                    Projects
                  </textPath>
                </text>
              </g>

              {/* Achievements - Bottom-right (4:30-6:30) */}
              {/* Clock: 4:30 = 135°, 6:30 = 195° */}
              <g className="nav-group nav-achievements" onClick={() => scrollToSection('achievements')}>
                <path
                  id="path-achievements"
                  d={getArcPath(135, 195)}
                  fill="none"
                />
                <text 
                  fontSize={fontSize}
                  fill="#1A2C59"
                  fontFamily="EB Garamond, serif"
                  fontWeight="400"
                  letterSpacing="0.1em"
                  className="nav-text-achievements"
                >
                  <textPath href="#path-achievements" startOffset="25%" textAnchor="middle">
                    Achievements
                  </textPath>
                </text>
              </g>

              {/* Art - Bottom-left (6:30-7:30) */}
              {/* Clock: 6:30 = 195°, 7:30 = 225° */}
              <g className="nav-group nav-art" onClick={() => scrollToSection('art')}>
                <path
                  id="path-art"
                  d={getArcPath(195, 225)}
                  fill="none"
                />
                <text 
                  fontSize={fontSize}
                  fill="#1A2C59"
                  fontFamily="EB Garamond, serif"
                  fontWeight="400"
                  letterSpacing="0.1em"
                  className="nav-text-art"
                >
                  <textPath href="#path-art" startOffset="55%" textAnchor="middle">
                    Art
                  </textPath>
                </text>
              </g>

              {/* Contact - Left (8:00-10:00) */}
              {/* Clock: 8:00 = 240°, 10:00 = 300° */}
              <g className="nav-group nav-contact" onClick={() => scrollToSection('contact')}>
                <path
                  id="path-contact"
                  d={getArcPath(240, 300)}
                  fill="none"
                />
                <text 
                  fontSize={fontSize}
                  fill="#1A2C59"
                  fontFamily="EB Garamond, serif"
                  fontWeight="400"
                  letterSpacing="0.1em"
                  className="nav-text-contact"
                >
                  <textPath href="#path-contact" startOffset="70%" textAnchor="middle">
                    Contact
                  </textPath>
                </text>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Landing
