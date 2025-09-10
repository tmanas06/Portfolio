import React, { useState, useEffect } from 'react'

// Profile placeholder image - guaranteed to work
const PROFILE_PLACEHOLDER_SRC = 
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMUYyOTM3Ii8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjcwIiByPSIzMCIgZmlsbD0iIzY0NjY3QSIvPgo8cGF0aCBkPSJNMzAgMTYwQzMwIDEzNS44IDE5LjUyIDEyMCAxMDAgMTIwQzE4MC40OCAxMjAgMTcwIDEzNS44IDE3MCAxNjBIMzBaIiBmaWxsPSIjNjQ2NjdBIi8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTkwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOUNBM0FGIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiPk1hbmFzPC90ZXh0Pgo8L3N2Zz4K'

// List of IPFS gateways to try in order
const IPFS_GATEWAYS = [
  'https://ipfs.io/ipfs/',
  'https://gateway.pinata.cloud/ipfs/',
  'https://cloudflare-ipfs.com/ipfs/',
  'https://dweb.link/ipfs/',
  'https://ipfs.filebase.io/ipfs/'
]

export function ImageWithFallback(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [currentSrc, setCurrentSrc] = useState(props.src)
  const [gatewayIndex, setGatewayIndex] = useState(0)
  const [showFallback, setShowFallback] = useState(false)
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null)

  const { src, alt, style, className, ...rest } = props

  // Check if this is a profile image
  const isProfileImage = alt?.toLowerCase().includes('profile') || 
                        (src && (src.toString().includes('profile.jpg') || src.toString().includes('bafkreicdrmmy574lkwcyfaiphazgfok62i3voz3mknlvnt7emuuhjfh5xq')))

  // Extract CID from IPFS URL
  const extractCID = (url: string) => {
    const match = url.match(/\/ipfs\/([a-zA-Z0-9]+)/)
    return match ? match[1] : null
  }

  // Try next gateway when current one fails
  const tryNextGateway = () => {
    const cid = extractCID(src as string)
    if (cid && gatewayIndex < IPFS_GATEWAYS.length - 1) {
      const nextIndex = gatewayIndex + 1
      setGatewayIndex(nextIndex)
      setCurrentSrc(IPFS_GATEWAYS[nextIndex] + cid)
      setShowFallback(false)
    } else {
      setShowFallback(true)
    }
  }

  const handleError = () => {
    console.log('ImageWithFallback: Error loading image', currentSrc)
    if (src && src.toString().includes('/ipfs/')) {
      tryNextGateway()
    } else {
      setShowFallback(true)
    }
  }

  const handleLoad = () => {
    console.log('ImageWithFallback: Image loaded successfully', currentSrc)
    setShowFallback(false)
    // Clear any pending timeout
    if (timeoutId) {
      clearTimeout(timeoutId)
      setTimeoutId(null)
    }
  }

  // Reset when src changes
  useEffect(() => {
    console.log('ImageWithFallback: Setting new src', src)
    setCurrentSrc(src)
    setShowFallback(false)
    setGatewayIndex(0)
    
    // For profile images, show fallback immediately only if IPFS
    if (isProfileImage && src && src.toString().includes('/ipfs/')) {
      console.log('ImageWithFallback: Profile image with IPFS, showing fallback immediately')
      setShowFallback(true)
      return
    }
    
    // Skip timeout for local images (they should load quickly)
    const isLocalImage = src && (src.toString().startsWith('/') || src.toString().startsWith('./') || src.toString().startsWith('../'))
    if (isLocalImage) {
      console.log('ImageWithFallback: Local image detected, skipping timeout')
      return
    }
    
    // Set a longer timeout to show fallback if image doesn't load within 10 seconds
    const timeout = setTimeout(() => {
      console.log('ImageWithFallback: Timeout reached, showing fallback')
      if (!showFallback) {
        setShowFallback(true)
      }
    }, 10000)
    setTimeoutId(timeout)

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [src, isProfileImage])

  // Always show something - either the image or fallback
  if (showFallback) {
    return (
      <img 
        src={PROFILE_PLACEHOLDER_SRC} 
        alt={isProfileImage ? "Profile Placeholder" : "Image Placeholder"} 
        className={className} 
        style={style} 
        {...rest} 
      />
    )
  }

  return (
    <img 
      src={currentSrc} 
      alt={alt} 
      className={className} 
      style={style} 
      {...rest} 
      onError={handleError}
      onLoad={handleLoad}
    />
  )
}
