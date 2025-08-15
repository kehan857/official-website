import React from 'react'
import logoImage from '../../assets/images/logo.png'

const Logo = ({ className = "h-8 w-auto" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      {/* Logo图片 */}
      <img 
        src={logoImage}
        alt="熵变智元 SHANG BIAN ZHI YUAN"
        className="h-10 w-auto object-contain"
        onError={(e) => {
          // 如果图片加载失败，显示文字fallback
          e.target.style.display = 'none';
          e.target.nextElementSibling.style.display = 'flex';
        }}
      />
      
      {/* 文字fallback（图片加载失败时显示） */}
      <div className="hidden flex-col">
        <div className="text-lg font-bold text-black tracking-tight">
          熵变智元
        </div>
        <div className="text-xs text-gray-600 tracking-wider -mt-1">
          SHANG BIAN ZHI YUAN
        </div>
      </div>
    </div>
  )
}

export default Logo
