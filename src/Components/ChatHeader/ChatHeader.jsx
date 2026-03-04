import React from "react";

export default function ChatHeader({ contact_selected }) {
  return (
    <div>
      <img src={contact_selected.profile_picture} alt={contact_selected.name} />
      <h3>{contact_selected.name}</h3>
    </div>
  );
}
