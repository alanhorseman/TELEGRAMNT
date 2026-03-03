export default function Messages({ contact_selected }) {
  return (
    <div>
      {contact_selected.messages.map((m) => {
        return (
          <div key={m.id}>
            {m.send_by_me ? (
              <h3>Enviado por Mi</h3>
            ) : (
              <h3>Enviado por {contact_selected.name}</h3>
            )}
            <p>{m.text}</p>
            <span>{m.create_at}</span>
          </div>
        );
      })}
    </div>
  );
}
