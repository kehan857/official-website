import React from 'react'
import Logo from '../Logo/Logo'

const CornerLogos = () => {
  return (
    <>
      {/* 左上角Logo - 固定定位 */}
      <div className="fixed top-8 left-8 z-50 opacity-40 hover:opacity-100 transition-opacity duration-300">
        <Logo size="small" className="filter drop-shadow-lg" />
      </div>
      
      {/* 左下角Logo - 固定定位 */}
      <div className="fixed bottom-8 left-8 z-50 opacity-40 hover:opacity-100 transition-opacity duration-300">
        <Logo size="small" className="filter drop-shadow-lg" />
      </div>
    </>
  )
}

export default CornerLogos
