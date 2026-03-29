import './RadioOption.css'

export default function RadioOption({label, isSelected, onSelect}) {
  return (
    <div>
      <div className={`radio-button-container= ${isSelected ? 'active' : ''}`} onClick={onSelect}>
        <div className='radio-button-outer'>
          {isSelected && <div className='radio-button-innet'/>}
        </div>
        <span className='radio-option-label'>{label}</span>
      </div>
    </div>
  )
}
