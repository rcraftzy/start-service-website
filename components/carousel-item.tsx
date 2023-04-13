'use client'

import { useCallback, useContext } from "react"
import { CarouselContext } from "./carousel"
import styles from "../styles/carousel.module.css"

interface Props {
  index: number
  children: JSX.Element
}

const CarouselItem: React.FC<Props> = ({children, index}) => {
  const {embla: emblaApi, selectedIndex } = useContext(CarouselContext)
  const isActivate = selectedIndex === index
  const handleClick = useCallback(() => {
    if (emblaApi === undefined) return
    emblaApi.scrollTo(index)
  }, [emblaApi, index])

  return (
    <div className={`${styles.slide} relative ${isActivate ? 'active' : ''}`} onClick={handleClick}>{children}</div>
  )
}

export default CarouselItem
