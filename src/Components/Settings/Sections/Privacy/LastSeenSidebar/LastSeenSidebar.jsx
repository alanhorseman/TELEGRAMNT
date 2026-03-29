import { useState } from 'react'
import SectionTemplate from '../../../Shared/SectionTemplate/SectionTemplate'
import RadioOption from '../../../Shared/RadioOption/RadioOption'

export default function LastSeenSidebar() {
  const [selectedOption, setSelectedOption] = useState('Nadie')
  const options = ['Todos', 'Mis contactos', 'Mis contactos, excepto', 'Nadie']

  return (
    <div>
      <SectionTemplate title={'Hora de ult. vez y En linea'} backTo={'/settings/privacy'}>
        <p>Quien puede ver mi hora de ultima vez</p>
        {options.map((option)=>{
          <RadioOption key={option} label={option} isSelected={selectedOption === option} onSelect={() => setSelectedOption(option)}/>
        })}      
      </SectionTemplate>
    </div>
  )
}
