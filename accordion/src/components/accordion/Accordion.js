import React, { useState, useEffect } from "react"

function Accordion() {
  const [isActive, setIsActive] = useState(false)

  const accordionData = {
    title: "Section 1",
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`
  }

  const { title, content } = accordionData

  return (
    <div className="accordion">
      <div className="accordion-item">
        <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
          <div>{title}</div>
          <div>+</div>
        </div>
        <div className="accordion-content"></div>
      </div>
    </div>
  )
}

export default Accordion
