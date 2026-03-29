import React from 'react'
import { useNavigate } from 'react-router'
import LeftArrowIcon from '../../../Icons/LetfArrowIcon/LeftArrowIcon';

export default function SectionTemplate({title, children, backTo}) {
  const navigate = useNavigate();

  return (
    <div>
       <header>
        <button onClick={() => navigate(backTo)}>
          <LeftArrowIcon />
        </button>
        <h2>{title}</h2>
       </header>

       <div>
        {children}
       </div>
    </div>
  )
}
