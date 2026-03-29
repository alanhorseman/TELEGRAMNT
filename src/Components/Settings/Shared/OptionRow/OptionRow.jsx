import { useNavigate } from 'react-router'
import './OptionRow.css'

export default function OptionRow({icon, title, description, to}) {
  const navigate = useNavigate();
  
  return (
    <div className='optionRow' onClick={()=> navigate(to)}>
      {icon && <div className='optionIcon'>{icon}</div>}

      <div className='optionText'>
        <h3 className='optionTitle'>{title}</h3>
        {description && <p className='optionDescription'>{description}</p>}
      </div>
    </div>
  )
}
