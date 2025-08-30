import React from 'react'

const Logo = ({ className = "h-8 w-auto", size = "normal" }) => {
  const logoSrc = size === "small" ? "/images/logo-small.jpg" : "/images/logo-small.jpg"
  const logoSize = size === "small" ? "h-10 w-10" : "h-12 w-12"
  
  return (
    <div className={`flex items-center ${size === "small" ? "" : "space-x-3"} ${className}`}>
      {/* Logo图片 */}
      <img 
        src={logoSrc}
        alt="熵变智元 SHANG BIAN ZHI YUAN"
        className={`${logoSize} object-contain`}
        onError={(e) => {
          console.error('Logo image failed to load:', logoSrc);
          e.target.style.display = 'none';
          const parent = e.target.parentElement;
          const fallback = parent.querySelector('.logo-fallback');
          if (fallback) {
            fallback.classList.remove('hidden');
            fallback.classList.add('flex');
          }
        }}
      />
      
      {/* 文字部分 - 只在非small尺寸时显示 */}
      {size !== "small" && (
        <div className="flex flex-col">
          <div className="text-lg font-bold text-black tracking-tight">
            熵变智元
          </div>
          <div className="text-xs text-gray-600 tracking-wider -mt-1">
            SHANG BIAN ZHI YUAN
          </div>
        </div>
      )}
      
      {/* 文字fallback（图片加载失败时显示） - 只在small尺寸时显示 */}
      {size === "small" && (
        <div className="hidden flex-col logo-fallback">
          <div className="text-lg font-bold text-black tracking-tight">
            熵变智元
          </div>
          <div className="text-xs text-gray-600 tracking-wider -mt-1">
            SHANG BIAN ZHI YUAN
          </div>
        </div>
      )}
    </div>
  )
}

export default Logo
