import React from 'react'

const Logo = ({ className = "h-8 w-auto" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      {/* 蓝色几何图标 */}
      <div className="relative mr-3">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* 主要的几何形状 - 基于熵变智元logo */}
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E90FF" />
              <stop offset="50%" stopColor="#0066CC" />
              <stop offset="100%" stopColor="#003D99" />
            </linearGradient>
          </defs>
          
          {/* 六边形外框 */}
          <path 
            d="M20 2 L32 10 L32 26 L20 34 L8 26 L8 10 Z" 
            fill="url(#logoGradient)" 
            stroke="#0066CC" 
            strokeWidth="1"
          />
          
          {/* 内部交错的三角形和线条 */}
          <path 
            d="M14 12 L20 8 L26 12 L26 18 L20 22 L14 18 Z" 
            fill="white" 
            opacity="0.9"
          />
          
          {/* 中心的S形曲线 - 代表熵变 */}
          <path 
            d="M16 14 Q20 16 24 14 Q20 18 16 20 Q20 22 24 20" 
            stroke="#0066CC" 
            strokeWidth="2" 
            fill="none"
          />
          
          {/* 装饰性的小三角 */}
          <polygon 
            points="12,16 16,14 16,18" 
            fill="#1E90FF"
          />
          <polygon 
            points="28,16 24,14 24,18" 
            fill="#1E90FF"
          />
        </svg>
      </div>
      
      {/* 文字部分 */}
      <div className="flex flex-col">
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
