import React from 'react'

export const Logo = () => {

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="916" height="889" viewBox="0 0 916 889">
        <defs>
          <linearGradient id="logo-a" x1="50%" x2="50%" y1="6.824%" y2="38.546%">
            <stop offset="0%" stopColor="#3407F6"/>
            <stop offset="100%" stopColor="#FC0F0F"/>
          </linearGradient>
        </defs>
        <g fill="none" fillRule="evenodd" transform="translate(-42 410)">
          <text fill="url(#logo-a)" stroke="#060606" strokeWidth="2" fontFamily="Bungee-Regular, Bungee" fontSize="50">
            <tspan x="149.417" y="74">scramples</tspan>
          </text>
          <text fill="#020100" fontFamily="Roboto-Italic, Roboto" fontSize="40" fontStyle="italic">
            <tspan x="257.078" y="130">wordgame</tspan>
          </text>
        </g>
      </svg>

    )
}