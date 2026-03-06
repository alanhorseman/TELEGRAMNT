const contacts = [
  {
    id: 1,
    name: 'Mr Peanutbutter',
    last_time_connection: 'Hace 2 horas',
    profile_picture: 'https://ih1.redbubble.net/image.5788381704.7150/st,small,507x507-pad,600x600,f8f8f8.jpg',
    
    messages: [
      {
        id: 1,
        text: 'Hola Bojack!',
        send_by_me: false,
        create_at: '2024-02-01',
        is_read: true,
      },
      {
        id: 2,
        text: 'Agggh que quieres?!',
        send_by_me: true,
        create_at: '2024-02-01',
        is_read: false,
      }
    ]
  },
  {
    id: 2,
    name: 'Bojack Horseman',
    last_time_connection: 'Hace 1 horas',
    profile_picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDJ5vtsJwnQQHGzSkAj0WbgZBH16X4MkrNwg&s',
    messages: [
      {
        id: 1,
        text: 'Bojack?!',
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
  {
    id: 3,
    name: 'Diane Nguyen',
    last_time_connection: 'Ayer',
    profile_picture: 'https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/37/1536954237-diane-bojack-horseman.png?crop=0.9083769633507853xw:1xh;center,top&resize=980:*',
    messages: [
      {
        id: 1,
        text: '¿Ya terminaste de leer mi borrador?',
        send_by_me: false,
        create_at: '2024-03-05',
        is_read: true,
      },
      {
        id: 2,
        text: 'Lo estoy haciendo ahora mismo, Diane.',
        send_by_me: true,
        create_at: '2024-03-05',
        is_read: true,
      }
    ]
  },
  {
    id: 4,
    name: 'Todd Chavez',
    last_time_connection: 'En línea',
    profile_picture: 'https://sketchok.com/images/articles/01-cartoons/042-bojack/03/10.jpg',
    messages: [
      {
        id: 1,
        text: '¡HOORAY! ¡Tengo una idea para un negocio millonario!',
        send_by_me: false,
        create_at: '2024-03-06',
        is_read: false,
      },
      {
        id: 2,
        text: '¿Otra vez, Todd? ¿Qué es ahora?',
        send_by_me: true,
        create_at: '2024-03-06',
        is_read: true,
      }
    ]
  },
  {
    id: 5,
    name: 'Princess Carolyn',
    last_time_connection: 'Hace 5 min',
    profile_picture: 'https://pbs.twimg.com/media/GMMealrXoAAa2Dl.jpg',
    messages: [
      {
        id: 1,
        text: 'Tengo una reunión con un pez gordo en 10 minutos. Aterriza, Bojack.',
        send_by_me: false,
        create_at: '2024-03-06',
        is_read: true,
      }
    ]
  },
  {
    id: 6,
    name: 'Sarah Lynn',
    last_time_connection: 'Hace 2 días',
    profile_picture: 'https://sketchok.com/images/articles/01-cartoons/042-bojack/06/09.jpg',
    messages: [
      {
        id: 1,
        text: '¡Sarah Lynn!?',
        send_by_me: true,
        create_at: '2024-03-04',
        is_read: true,
      },
      {
        id: 2,
        text: '¡Quiero ser arquitecta!',
        send_by_me: false,
        create_at: '2024-03-04',
        is_read: true,
      }
    ]
  }
]

export default contacts;