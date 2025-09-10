import React, { useState } from 'react'

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallback?: string[]
}

export function ImageWithFallback({ src, fallback = [], alt, ...props }: ImageWithFallbackProps) {
  const [currentSrcIndex, setCurrentSrcIndex] = useState(0)

  const sources = [src, ...fallback]

  const handleError = () => {
    if (currentSrcIndex < sources.length - 1) {
      setCurrentSrcIndex((prev) => prev + 1)
    }
  }

  return (
    <img
      src={sources[currentSrcIndex]}
      alt={alt}
      onError={handleError}
      {...props}
    />
  )
}
