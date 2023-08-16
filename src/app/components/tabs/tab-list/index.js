'use client'
import React from 'react'

const DEFAULT_CLASS = 'responsive-react-tabs__tab-list'

function TabList({
  children,
  className = '',
  ...rest
}) {
  return (
    <ul {...rest} className={`${DEFAULT_CLASS} ${className}`} role='tablist'>
      {children}
    </ul>
  )
}

export default TabList

