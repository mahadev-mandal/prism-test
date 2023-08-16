import React, { useState } from 'react'

const TAB_NAME = 'responsive-react-tabs';

function Accordion({ heading, content }) {
  const [active, setActive] = useState(false);
  return (
    <div className={`${TAB_NAME}__accrodion ${active ? 'active' : ''}`}>
      <h2 className={`${TAB_NAME}__accrodion--heading`} onClick={() => setActive(!active)}>
        {heading}
        <span>{active ? '-' : '+'}</span>
      </h2>
      {active && <div className={`${TAB_NAME}__accrodion--content `}>
        {content}
      </div>}
    </div>
  )
}

export default Accordion