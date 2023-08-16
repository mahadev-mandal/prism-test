'use client'
import React, { useEffect, useRef } from 'react'
const TAB_NAME = 'responsive-react-tabs';

const DEFAULT_CLASS = `${TAB_NAME}__tab`

function Tab({
  children,
  id = '',
  className = '',
  selected = false,
  disabled = false,
  disabledClassName = `${DEFAULT_CLASS}--disabled`,
  selectedClassName = `${DEFAULT_CLASS}--selected`,
  tabIndex,
  onClick,
  tabRef,
  focus,
  ...rest
}) {
  let nodeRef = useRef();

  useEffect(() => {
    if (selected && focus) {
      nodeRef.current.focus();
    }
  }, [selected, focus]);

  return (
    <li
      {...rest}
      className={`${DEFAULT_CLASS} ${className} ${disabled ? disabledClassName : ''} ${selected ? selectedClassName : ''} `}
      ref={(node) => {
        nodeRef.current = node;
        if (tabRef) tabRef(node);
      }}
      role='tab'
      id={`${TAB_NAME}-tab-${id}`}
      onClick={onClick}
      aria-selected={selected ? 'true' : 'false'}
      aria-disabled={disabled ? 'true' : 'false'}
      aria-controls={`${TAB_NAME}-panel-${id}`}
      tabIndex={tabIndex || (selected ? '0' : null)}
      data-rttab
    >
      {children}
    </li>
  )
}

export default Tab