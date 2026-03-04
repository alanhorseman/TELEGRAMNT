const contacts = [
  {
    id: 1,
    name: 'Carla',
    last_time_connection: 'Hace 2 horas',
    profile_picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDJ5vtsJwnQQHGzSkAj0WbgZBH16X4MkrNwg&s',
    messages: [
      {
        id: 1,
        text: 'Hola Bojack!',
        send_by_me: true,
        create_at: '2024-02-01',
        is_read: true,
      },
      {
        id: 2,
        text: 'Hola Carla que tal!',
        send_by_me: false,
        create_at: '2024-02-01',
        is_read: false,
      }
    ]
  },
  {
    id: 2,
    name: 'Alan',
    last_time_connection: 'Hace 1 horas',
    profile_picture: 'https://ih1.redbubble.net/image.5788381704.7150/st,small,507x507-pad,600x600,f8f8f8.jpg',
    messages: [
      {
        id: 1,
        text: 'Bojack de Retosando?!',
        send_by_me: true,
        create_at: '2024-01-27',
        is_read: true,
      },
      {
        id: 2,
        text: 'Horseman obviamente!',
        send_by_me: false,
        create_at: '2024-01-28',
        is_read: false,
      }
    ]
  },
]

export default contacts;