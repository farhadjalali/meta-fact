/*
  Docked progress bar at the top of the page.
*/

import { FC } from 'react'
import './style.scss'

type Props = {
  progress: number
}

export const ProgressBar: FC<Props> = ({ progress }) => {
  // Hide the progress bar when it's 100%
  const opacity = progress === 100 ? 0 : 1

  // Width of the progress bar based on the progress
  const width = `${progress}%`

  return (
    <div className="progress-bar">
      <div style={{ width, opacity }}></div>
    </div>
  )
}
