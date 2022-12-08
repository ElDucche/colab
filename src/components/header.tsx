import Link from 'next/link';
import React, { useState } from 'react'
import {HiOutlineBell} from 'react-icons/hi2'

const Header = () => {
  const [count, setCount] = useState(0);
  return (
    <div className='navbar bg-base-100 border-b pr-6 pt-4'>
        <div className='flex-1'>
          <a href={"/"} className='btn btn-ghost'>
            <svg width="100" height="50" viewBox="0 0 349 188" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M57.3255 93.7276H86.1857L115.046 50H86.1857L57.3255 93.7276ZM115.044 137.456H86.1834L57.3232 93.7285H86.1834L115.044 137.456Z" fill="#7F61FD"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M108.052 93.7276H79.1919L50.3317 50H79.1919L108.052 93.7276ZM50.3301 137.456H79.1903L108.05 93.7285H79.1903L50.3301 137.456Z" fill="#2B4EFF"/>
              <path d="M129.331 93.318C129.331 89.37 130.213 85.8436 131.976 82.7388C133.777 79.5957 136.211 77.1617 139.278 75.4369C142.383 73.6737 145.851 72.7921 149.684 72.7921C154.169 72.7921 158.098 73.942 161.471 76.2418C164.844 78.5416 167.201 81.7231 168.543 85.7861H159.286C158.366 83.8696 157.063 82.4322 155.377 81.4739C153.728 80.5157 151.812 80.0365 149.627 80.0365C147.289 80.0365 145.2 80.5923 143.36 81.7039C141.558 82.7771 140.14 84.3104 139.105 86.3035C138.109 88.2967 137.61 90.6349 137.61 93.318C137.61 95.9628 138.109 98.301 139.105 100.332C140.14 102.326 141.558 103.878 143.36 104.99C145.2 106.063 147.289 106.599 149.627 106.599C151.812 106.599 153.728 106.12 155.377 105.162C157.063 104.166 158.366 102.709 159.286 100.792H168.543C167.201 104.894 164.844 108.094 161.471 110.394C158.136 112.656 154.207 113.786 149.684 113.786C145.851 113.786 142.383 112.924 139.278 111.199C136.211 109.436 133.777 107.002 131.976 103.897C130.213 100.792 129.331 97.266 129.331 93.318Z" fill="white"/>
              <path d="M187.262 113.959C184.196 113.959 181.436 113.288 178.983 111.947C176.53 110.567 174.594 108.631 173.176 106.14C171.796 103.648 171.106 100.773 171.106 97.5152C171.106 94.2571 171.815 91.3823 173.233 88.8908C174.69 86.3994 176.664 84.4829 179.155 83.1413C181.647 81.7614 184.426 81.0714 187.492 81.0714C190.559 81.0714 193.338 81.7614 195.829 83.1413C198.321 84.4829 200.276 86.3994 201.694 88.8908C203.15 91.3823 203.879 94.2571 203.879 97.5152C203.879 100.773 203.131 103.648 201.636 106.14C200.18 108.631 198.187 110.567 195.657 111.947C193.165 113.288 190.367 113.959 187.262 113.959ZM187.262 106.944C188.719 106.944 190.08 106.599 191.345 105.91C192.648 105.181 193.683 104.108 194.449 102.69C195.216 101.272 195.599 99.5467 195.599 97.5152C195.599 94.4871 194.794 92.1681 193.184 90.5582C191.613 88.91 189.677 88.0859 187.377 88.0859C185.078 88.0859 183.142 88.91 181.57 90.5582C180.037 92.1681 179.27 94.4871 179.27 97.5152C179.27 100.543 180.018 102.881 181.513 104.53C183.046 106.14 184.963 106.944 187.262 106.944Z" fill="white"/>
              <path d="M215.533 107.059H224.318V113.441H207.483V70.8945H215.533V107.059Z" fill="white"/>
              <path d="M226.464 97.4C226.464 94.1802 227.097 91.3246 228.361 88.8332C229.665 86.3417 231.409 84.4252 233.594 83.0836C235.817 81.742 238.289 81.0712 241.011 81.0712C243.387 81.0712 245.457 81.5504 247.22 82.5086C249.022 83.4669 250.459 84.6743 251.532 86.1309V81.5887H259.639V113.441H251.532V108.784C250.497 110.279 249.06 111.525 247.22 112.521C245.419 113.48 243.33 113.959 240.953 113.959C238.27 113.959 235.817 113.269 233.594 111.889C231.409 110.509 229.665 108.573 228.361 106.082C227.097 103.552 226.464 100.658 226.464 97.4ZM251.532 97.515C251.532 95.5601 251.149 93.8928 250.382 92.5129C249.616 91.0946 248.581 90.0214 247.278 89.2931C245.974 88.5265 244.575 88.1432 243.08 88.1432C241.585 88.1432 240.206 88.5073 238.941 89.2356C237.676 89.9639 236.641 91.0372 235.836 92.4554C235.069 93.8353 234.686 95.4835 234.686 97.4C234.686 99.3165 235.069 101.003 235.836 102.46C236.641 103.878 237.676 104.97 238.941 105.737C240.244 106.503 241.624 106.887 243.08 106.887C244.575 106.887 245.974 106.523 247.278 105.794C248.581 105.028 249.616 103.954 250.382 102.575C251.149 101.156 251.532 99.4698 251.532 97.515Z" fill="white"/>
              <path d="M273.25 86.2459C274.285 84.7126 275.703 83.4669 277.505 82.5086C279.345 81.5504 281.434 81.0712 283.772 81.0712C286.493 81.0712 288.947 81.742 291.131 83.0836C293.355 84.4252 295.099 86.3417 296.364 88.8332C297.667 91.2863 298.318 94.1419 298.318 97.4C298.318 100.658 297.667 103.552 296.364 106.082C295.099 108.573 293.355 110.509 291.131 111.889C288.947 113.269 286.493 113.959 283.772 113.959C281.395 113.959 279.306 113.499 277.505 112.579C275.742 111.621 274.324 110.394 273.25 108.899V113.441H265.201V70.8945H273.25V86.2459ZM290.096 97.4C290.096 95.4835 289.694 93.8353 288.889 92.4554C288.122 91.0372 287.088 89.9639 285.784 89.2356C284.519 88.5073 283.14 88.1432 281.645 88.1432C280.188 88.1432 278.808 88.5265 277.505 89.2931C276.24 90.0214 275.205 91.0946 274.4 92.5129C273.634 93.9311 273.25 95.5985 273.25 97.515C273.25 99.4315 273.634 101.099 274.4 102.517C275.205 103.935 276.24 105.028 277.505 105.794C278.808 106.523 280.188 106.887 281.645 106.887C283.14 106.887 284.519 106.503 285.784 105.737C287.088 104.97 288.122 103.878 288.889 102.46C289.694 101.041 290.096 99.3548 290.096 97.4Z" fill="white"/>
            </svg>
          </a>
        </div>
        <div className="flex-none">
          <div className="indicator">
            <span className="indicator-item badge badge-secondary">{count}</span> 
            <button className="btn btn-square btn-ghost border" onClick={() => setCount(count + 1)}>
              <HiOutlineBell size={25}/>
            </button>
          </div>
        </div>
    </div>
  )
}

export default Header;