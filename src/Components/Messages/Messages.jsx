import './Messages.css'

export default function Messages({ contact_selected }) {
  return (
    <div className='messages-container'>
      {contact_selected.messages.map((m) => {
        return (
          <div key={m.id} className='message'>
            {m.send_by_me ? (
              <p className='rigth-message right-message bubble-message'>{m.text}</p>
            ) : (
              <p className='left-message bubble-message'>{m.text}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
