'use client'
export const TAB_NAME = 'responsive-react-tabs';
import React, { useState } from 'react'
import Tab from './tab';
import TabPanel from './tab-Panel';
import Accordion from './accordion'
import { useDeviceSize } from 'react-device-sizes';



const getTabLists = (children) => {
  let t = children[0]?.props.children
  if (!t) {
    return []
  }
  if (Array.isArray(t)) {
    return t;
  }
  return [t]
}
const getTabPanels = (children) => {
  let p = children.filter((item, index) => index !== 0)
  if (!p) {
    return []
  }
  if (Array.isArray(p)) {
    return p;
  }
  return [p]
}

function Tabs({
  children,
  onSelect,
  className,
  ...rest
}) {
  const deviceSizes = useDeviceSize();
  const [selected, setSelected] = useState(0);

  const handleTabClick = (index) => {
    setSelected(index)
  }
  if (!deviceSizes.mdDown)
    return (
      <div className={`${TAB_NAME} ${className}`}>
        <ul {...rest} className={`${TAB_NAME}__tab-list ${className}`} role='tablist'>
          {getTabLists(children).map((item, index) => (
            <Tab
              {...item.props}
              key={index}
              onClick={() => handleTabClick(index)}
              selected={selected === index}
              id={index}
            >

            </Tab>
          ))}
        </ul>
        {getTabPanels(children).map((item, index) => (
          <TabPanel
            {...item.props} key={index}
            selected={selected === index}
            id={index}
          />
        ))}
      </div>
    )
  return (
    <div className={`${TAB_NAME}__accrodion--wrapper ${className}`}>
      {
        getTabLists(children).map((item, index) => (
          <Accordion
            key={index}
            heading={item.props.children}
            content={getTabPanels(children)[index]}
          />
        ))
      }
    </div>
  )
}

export default Tabs
