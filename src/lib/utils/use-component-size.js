import React, { useState, useCallback, useLayoutEffect } from 'react';

const getSize = (el) => {
  if (!el) {
    console.log('No element')
    return {
      width: 0,
      height: 0
    }
  }

  return {
    width: el.offsetWidth,
    height: el.offsetHeight
  }
}

const useComponentSize = (ref, handler) => {
  const _useState = useState(getSize(ref ? ref.current : {}))
  const ComponentSize = _useState[0]
  const setComponentSize = _useState[1]

  const handleResize = useCallback(
    function handleResize() {
      if (ref.current) {
        setComponentSize(getSize(ref.current))

        handler(getSize(ref.current));
      }
    },
    [ref]
  )

  useLayoutEffect(
    function () {
      if (!ref.current) {
        return
      }

      handleResize()

      window.addEventListener('resize', handleResize)

      return function () {
        window.removeEventListener('resize', handleResize)
      }

      if (typeof ResizeObserver === 'function') {
        const resizeObserver = new ResizeObserver(function () {
          handleResize()
        })
        resizeObserver.observe(ref.current)

        return function () {
          resizeObserver.disconnect(ref.current)
          resizeObserver = null
        }
      } else {
      }
    },
    [ref.current]
  )

  return ComponentSize
}

export default useComponentSize;
