'use client'
import React from 'react'

const TAB_NAME = 'responsive-react-tabs';
const DEFAULT_CLASS = `${TAB_NAME}__tab-panel`

function TabPanel({
  children,
  className = "",
  id = "",
  selected = false,
  selectedClassName = `${DEFAULT_CLASS}--selected`,
  ...rest
}) {
  return (
    <div
      {...rest}
      className={`${DEFAULT_CLASS} ${className} ${selected ? selectedClassName : ''}`}
      role='tabpanel'
      id={`${TAB_NAME}-tab-panel-${id}`}
      aria-labelledby={`${TAB_NAME}-tab-${id}`}
    >
      {/* {selected ? children : null} */}{children}
    </div>
  )
}

export default TabPanel