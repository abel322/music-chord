export const studyPathData = [
  {
    id: 1,
    title: 'Técnica de Manos y Control de Baquetas',
    subtitle: 'El Alfabeto del Baterista',
    color: '#1976d2',
    description:
      'Los rudimentos son el alfabeto del baterista. Dominar estos patrones fundamentales es esencial para desarrollar velocidad, control y musicalidad en la batería.',
    books: [
      {
        id: 'stick-control',
        title: 'Stick Control - George Lawrence Stone',
        subtitle: 'Método Fundamental de Control de Baquetas',
        description:
          '⚠️ REGLA DE ORO: Practica cada ejercicio 20 veces sin parar antes de pasar al siguiente. Esta es la recomendación del autor para obtener resultados satisfactorios. Enfócate en la igualdad de sonido entre ambas manos y usa siempre metrónomo.',
        exercises: [
          {
            name: 'Single Beat Combinations',
            pattern: 'Páginas 5, 6 y 7',
            focus: 'Control básico y alternancia de manos',
            description: 'Patrones fundamentales de golpes simples. Base de toda técnica.',
            bpm: '60-120',
          },
          {
            name: 'Triplets',
            pattern: 'Páginas 8 y 9',
            focus: 'Subdivisión en tresillos',
            description: 'Desarrollo de fluidez en grupos de tres notas.',
            bpm: '60-100',
          },
          {
            name: 'Short Roll Combinations (Single Beat Rolls)',
            pattern: 'Página 10',
            focus: 'Redobles cortos con golpes simples',
            description: 'Introducción a redobles de 5, 7 y 9 golpes.',
            bpm: '50-100',
          },
          {
            name: 'Flam Beats',
            pattern: 'Páginas 16-23',
            focus: 'Técnica de flam y aplicación rítmica',
            description: 'Desarrollo de flams limpios y controlados. Sección extensa y fundamental.',
            bpm: '50-90',
          },
        ],
      },

      {
        id: 'rudimental-reference',
        title: "The Drummer's Rudimental Reference Book - John Wooton",
        subtitle: 'Sistema de Progresión por Tiers (Niveles)',
        description:
          '📊 SISTEMA DE TIERS: Este método organiza los rudimentos en 4 niveles de dificultad. NO avances al siguiente Tier sin dominar completamente el anterior. Los rudimentos "padre" del Tier 1 son la base de todo.',
        tiers: [
          {
            tier: 'Tier 1',
            level: 'Rudimentos Padre (Fundamentales)',
            color: '#4CAF50',
            sections: [
              { name: 'Single Stroke Roll', pages: 'Pág. 29', description: 'Base de toda técnica' },
              {
                name: 'Multiple Bounce Roll',
                pages: 'Pág. 41',
                description: 'Redoble de múltiples rebotes',
              },
              {
                name: 'Double Stroke Roll',
                pages: 'Pág. 44',
                description: 'Golpes dobles fundamentales',
              },
              { name: 'Single Paradiddle', pages: 'Pág. 70', description: 'Paradiddle básico' },
              { name: 'Flam', pages: 'Pág. 76', description: 'Golpe apoyado fundamental' },
              { name: 'Drag', pages: 'Pág. 109', description: 'Arrastre básico' },
            ],
          },
          {
            tier: 'Tier 2',
            level: 'Derivados (Básico-Intermedio)',
            color: '#FF9800',
            sections: [
              { name: '5 Stroke Roll', pages: 'Pág. 49', description: 'Redoble de 5 golpes' },
              { name: '7 Stroke Roll', pages: 'Pág. 49', description: 'Redoble de 7 golpes' },
              { name: 'Double Paradiddle', pages: 'Pág. 70', description: 'Paradiddle doble' },
              { name: 'Flam Accent', pages: 'Pág. 81', description: 'Flam con acento' },
              { name: 'Flam Tap', pages: 'Pág. 87', description: 'Flam con tap' },
              { name: 'Single Drag Tap', pages: 'Pág. 112', description: 'Drag con tap' },
            ],
          },
          {
            tier: 'Tier 3',
            level: 'Complejos (Intermedio-Avanzado)',
            color: '#F44336',
            sections: [
              { name: '9 Stroke Roll', pages: 'Pág. 49', description: 'Redoble de 9 golpes' },
              { name: '11 Stroke Roll', pages: 'Pág. 49', description: 'Redoble de 11 golpes' },
              { name: 'Triple Paradiddle', pages: 'Pág. 70', description: 'Paradiddle triple' },
              { name: 'Flam Paradiddle', pages: 'Pág. 85', description: 'Flam con paradiddle' },
              { name: 'Double Drag Tap', pages: 'Pág. 115', description: 'Drag doble con tap' },
            ],
          },
          {
            tier: 'Tier 4',
            level: 'Maestría (Avanzado)',
            color: '#9C27B0',
            sections: [
              { name: '17 Stroke Roll', pages: 'Pág. 49', description: 'Redoble de 17 golpes' },
              { name: 'Pataflafla', pages: 'Pág. 92', description: 'Rudimento complejo' },
              { name: 'Swiss Army Triplet', pages: 'Pág. 94', description: 'Tresillo suizo' },
              { name: 'Inverted Flam Tap', pages: 'Pág. 97', description: 'Flam tap invertido' },
            ],
          },
        ],
      },

      {
        id: 'master-studies',
        title: 'Master Studies - Joe Morello',
        subtitle: 'Control, Técnica y Sensibilidad Avanzada',
        description:
          '🎯 FILOSOFÍA MORELLO: Este NO es un libro de instrucciones sobre "cómo tocar", sino un recurso para perfeccionar la ejecución independientemente de la técnica que uses.',
        levels: [
          {
            level: 'Nivel Básico',
            subtitle: 'Fundamentos del Acento y el Control',
            color: '#4CAF50',
            description:
              'Se trabaja la distinción clara entre dos niveles dinámicos: la nota acentuada y la nota suave (tap).',
            lessons: [
              { name: 'Accent Studies', pages: 'Pág. 6', description: 'Estudios de acentos' },
              { name: '8th Notes With Accents', pages: 'Pág. 6', description: 'Corcheas con acentos' },
              { name: 'Triplets With Accents', pages: 'Pág. 12', description: 'Tresillos con acentos' },
            ],
          },
          {
            level: 'Nivel Intermedio',
            subtitle: 'Desarrollo del Rebote y la Velocidad',
            color: '#FF9800',
            description:
              'Control de la presión de los dedos para pasar de golpes simples a redobles cerrados (buzz rolls).',
            lessons: [
              {
                name: 'Buzz Roll Studies',
                pages: 'Pág. 20',
                description: 'Estudios de redoble cerrado',
              },
              {
                name: '8th Notes With Buzz Rolls',
                pages: 'Pág. 20',
                description: 'Corcheas con buzz rolls',
              },
              { name: 'Velocity', pages: 'Pág. 45', description: 'Velocidad y relajación' },
            ],
          },
          {
            level: 'Nivel Avanzado',
            subtitle: 'Resistencia, Dinámica e Independencia',
            color: '#F44336',
            description:
              'Exige relajación extrema y resistencia física superior, además de coordinación avanzada.',
            lessons: [
              {
                name: 'The Stone "Killer"',
                pages: 'Pág. 54',
                description: 'Ejercicio estrella para ganar resistencia extrema',
              },
              {
                name: 'Ostinato Studies',
                pages: 'Pág. 76',
                description: 'Independencia total: una mano mantiene un patrón fijo mientras la otra improvisa',
              },
              { name: 'Flam Studies', pages: 'Pág. 82', description: 'Estudios de flams' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 2,
    title: 'Fraseo Profesional en Rudimentos',
    subtitle: 'De la Técnica a la Musicalidad',
    color: '#9c27b0',
    description:
      'Transforma los rudimentos en frases musicales aplicables en solos y grooves. Estos ejercicios desarrollan el "vocabulario" del baterista profesional.',
    books: [
      {
        id: 'gaddiments',
        title: 'Gaddiments - Steve Gadd',
        subtitle: 'Rudimentos Híbridos y Desplazamientos',
        description:
          '🎵 EL TOQUE GADD: No se trata solo de velocidad, sino de la calidad del sonido. Los acentos deben ser claros, pero las notas no acentuadas (ghost notes) deben ser muy suaves y consistentes.',
        levels: [
          {
            level: 'Nivel Inicial',
            subtitle: 'Calentamiento y Cimientos',
            color: '#4CAF50',
            description:
              'Establece el control necesario para los desplazamientos. Se centra en la fluidez y el calentamiento básico.',
            lessons: [
              { name: 'Warm Up', pages: 'Pág. 1', description: 'Calentamiento' },
              {
                name: 'Flam Paradiddles Displaced',
                pages: 'Pág. 3',
                description: 'Flam paradiddles desplazados',
              },
            ],
          },
          {
            level: 'Nivel Intermedio',
            subtitle: 'Variaciones y Desplazamientos',
            color: '#FF9800',
            description:
              'Introduce variaciones rítmicas y cambios en el "sticking" (digitación) que desafían la coordinación.',
            lessons: [
              { name: 'Flam Tap Variations', pages: 'Pág. 5', description: 'Variaciones de flam tap' },
              {
                name: 'Fladiflaflas Displaced',
                pages: 'Pág. 11',
                description: 'Fladiflaflas desplazados',
              },
            ],
          },
          {
            level: 'Nivel Avanzado',
            subtitle: 'Híbridos Complejos y Aplicación de Drags',
            color: '#F44336',
            description:
              'Máxima complejidad. Combina rudimentos híbridos suizos con arrastres (drags) y desplazamientos rítmicos.',
            lessons: [
              {
                name: 'Swiss Flamadiddles Displaced',
                pages: 'Pág. 14',
                description: 'Swiss flamadiddles desplazados',
              },
              {
                name: 'Flam Accents w/Drags',
                pages: 'Pág. 18',
                description: 'Flam accents con drags',
              },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 3,
    title: 'Independencia y Coordinación',
    subtitle: 'Cada Extremidad con Vida Propia',
    color: '#4caf50',
    description:
      'El reto de la batería es que cada extremidad haga algo distinto sin que una interfiera con la otra.',
    books: [
      {
        id: '4-way-coordination',
        title: '4-Way Coordination - Marvin Dahlgren & Elliot Fine',
        subtitle: 'La Biblia de la Independencia',
        description:
          '🎯 INDEPENDENCIA ABSOLUTA: Este no es un libro de ritmos específicos, sino un método puramente técnico diseñado para que tus cuatro extremidades funcionen de manera totalmente independiente.',
        levels: [
          {
            level: 'Nivel 1: Básico',
            subtitle: 'Coordinación Melódica',
            color: '#4CAF50',
            description:
              'Solo una mano o un pie toca a la vez. Es el punto de partida esencial para conectar el cerebro con cada extremidad de forma individual.',
            lessons: [
              {
                name: 'Melodic Coordination (Exercises in 8th Notes)',
                pages: 'Pág. 4',
                description: 'Corcheas simples alternando extremidades',
              },
              {
                name: 'Eighth Note Solos',
                pages: 'Pág. 7',
                description: 'Solos básicos en corcheas para aplicar la alternancia',
              },
              {
                name: 'Melodic Coordination (Exercises in Triplets)',
                pages: 'Pág. 9',
                description: 'Introducción al tresillo alternando manos y pies',
              },
            ],
          },
          {
            level: 'Nivel 2: Intermedio',
            subtitle: 'Coordinación Armónica de 2 Partes',
            color: '#FF9800',
            description:
              'Tocar más de una mano o pie al mismo tiempo. Comienzas a tocar patrones con las manos mientras los pies hacen algo distinto.',
            lessons: [
              {
                name: 'Two-Part Harmonic Coordination (8th Notes)',
                pages: 'Pág. 15',
                description: 'Combinaciones de dos extremidades en corcheas',
              },
              {
                name: 'Combining 8th Notes and Triplets',
                pages: 'Pág. 23',
                description: 'El reto de tocar un ritmo diferente en cada capa',
              },
            ],
          },
          {
            level: 'Nivel 3: Avanzado',
            subtitle: 'Coordinación a 4 Vías e Independencia Total',
            color: '#F44336',
            description:
              'El núcleo del libro, donde las cuatro extremidades trabajan de manera simultánea e independiente.',
            lessons: [
              {
                name: 'Four-Way Coordination',
                pages: 'Pág. 24',
                description: 'Ejercicios básicos integrando las 4 extremidades',
              },
              {
                name: 'Complete Independence in Multiple Time Signatures',
                pages: 'Pág. 32',
                description: 'Ejercicios en compases de 2/4, 3/4, 4/4, 5/4 y 6/4',
              },
            ],
          },
        ],
      },
      {
        id: 'drumset-control',
        title: 'Drumset Control - Ron Spagnardi',
        subtitle: 'Agilidad y Fluidez por Todo el Set',
        description:
          '🥁 MOVIMIENTO FLUIDO: Método técnico diseñado para desarrollar agilidad, velocidad y precisión al moverte por toda la batería.',
        levels: [
          {
            level: 'Parte 1: Tresillos',
            subtitle: 'Nivel Básico',
            color: '#4CAF50',
            description: 'Establece los fundamentos del movimiento rítmico ternario por el set.',
            lessons: [
              { name: 'One Group Of Triplets', pages: 'Pág. 4', description: 'Un grupo de tresillos' },
              {
                name: 'Two Groups Of Triplets',
                pages: 'Pág. 5',
                description: 'Dos grupos de tresillos',
              },
              { name: 'Triplet Fills', pages: 'Pág. 17', description: 'Rellenos de tresillos' },
            ],
          },
          {
            level: 'Parte 2: Semicorcheas',
            subtitle: 'Nivel Intermedio',
            color: '#FF9800',
            description: 'Se incrementa la densidad de notas y se trabaja la subdivisión binaria.',
            lessons: [
              {
                name: 'One Group Of 16th Notes',
                pages: 'Pág. 18',
                description: 'Un grupo de semicorcheas',
              },
              {
                name: 'Four Groups Of 16th Notes',
                pages: 'Pág. 29',
                description: 'Cuatro grupos de semicorcheas',
              },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 4,
    title: 'Control de Pies',
    subtitle: 'Nivelando el Pie Débil',
    color: '#ff9800',
    description:
      'Es común que el pie izquierdo (hi-hat) sea el más débil. Estos ejercicios buscan nivelarlo con el derecho.',
    books: [
      {
        id: 'bass-drum-control',
        title: 'Bass Drum Control - Colin Bailey',
        subtitle: 'Técnica, Control y Velocidad del Pedal',
        description:
          '🦶 DOMINIO DEL PEDAL: Método clásico diseñado específicamente para desarrollar la técnica, el control, la flexibilidad y la velocidad del pie en el bombo.',
        levels: [
          {
            level: 'Nivel 1: Básico',
            subtitle: 'Fundamentos y Desarrollo de Control',
            color: '#4CAF50',
            description:
              'Se centra en la postura correcta y en establecer la coordinación básica entre el pie y el pulso.',
            lessons: [
              {
                name: 'Prefacio e Instrucciones de Técnica',
                pages: 'Págs. 2-3',
                description: 'Explicación del agarre del pedal y el movimiento del pie',
              },
              {
                name: 'Control Development',
                pages: 'Pág. 4',
                description: 'Ejercicios iniciales con negras y tresillos',
              },
              {
                name: 'Accents',
                pages: 'Pág. 5',
                description: 'Desarrollo de diferentes intensidades dinámicas con el pie',
              },
            ],
          },
          {
            level: 'Nivel 2: Intermedio',
            subtitle: 'Patrones de Semicorcheas y Rudimentos',
            color: '#FF9800',
            description: 'Introduce la velocidad y la aplicación de patrones rítmicos más complejos.',
            lessons: [
              {
                name: 'Single Bass Drum Beats',
                pages: 'Pág. 6',
                description: 'Ejercicios de un solo golpe combinados con manos en semicorcheas',
              },
              {
                name: 'Double Bass Drum Beats',
                pages: 'Pág. 7',
                description: 'Introducción de golpes dobles rápidos',
              },
            ],
          },
          {
            level: 'Nivel 3: Avanzado',
            subtitle: 'Resistencia, Independencia y Solos',
            color: '#F44336',
            description:
              'Exige alta capacidad física y coordinación avanzada entre las cuatro extremidades.',
            lessons: [
              {
                name: 'Endurance Exercise',
                pages: 'Pág. 18',
                description: 'Secuencias de 4 a 15 golpes seguidos',
              },
              {
                name: 'Contrapuntal Exercises',
                pages: 'Págs. 27-28',
                description: 'Independencia total con patrones cruzados',
              },
            ],
          },
        ],
      },
    ],
    exercises: [
      {
        name: 'Talón Arriba vs. Talón Abajo',
        pattern: 'Técnicas de pedal',
        focus: 'Potencia vs. Control fino',
        description: 'Practicar ambas técnicas para dominar diferentes situaciones.',
        bpm: '60-140',
      },
      {
        name: 'Control de Bombo',
        pattern: 'Dobles golpes rápidos',
        focus: 'Técnicas de slide o swivel',
        description: 'Dobles con un solo pedal para velocidad sin doble pedal.',
        bpm: '80-160',
      },
    ],
  },

  {
    id: 5,
    title: 'Groove y Tiempo (Timekeeping)',
    subtitle: 'Ciencia y Arte del Ritmo',
    color: '#f44336',
    description:
      'Aunque a menudo se usan como sinónimos, en el mundo de la batería profesional representan dos conceptos distintos pero interconectados: uno es ciencia (precisión) y el otro es arte (sensación).',
    content: {
      introduction: `Aunque a menudo se usan como sinónimos, en el mundo de la batería profesional representan dos conceptos distintos pero interconectados: uno es ciencia (precisión) y el otro es arte (sensación).`,
      
      concepts: [
        {
          title: '1. Tiempo (Timekeeping)',
          subtitle: 'La Columna Vertebral del Baterista',
          description: 'Es la capacidad técnica de mantener un pulso constante y preciso a lo largo de una pieza musical.',
          image: 'https://cdn.pixabay.com/photo/2016/11/29/03/35/metronome-1867200_960_720.jpg',
          points: [
            {
              label: 'La definición técnica',
              text: 'Es la precisión métrica. Si el metrónomo marca 120 BPM, el baterista debe ser capaz de mantenerse exactamente ahí, sin "correr" (acelerar) ni "arrastrarse" (ralentizar).',
            },
            {
              label: 'En la práctica',
              text: 'Un buen timekeeping significa que cuando la banda deja de tocar y vuelve a entrar tras un silencio, el pulso sigue exactamente donde debería estar.',
            },
            {
              label: 'Herramienta clave',
              text: 'El metrónomo (o click). Un baterista con buen tiempo es aquel en quien el resto de los músicos pueden confiar ciegamente para no perderse.',
            },
          ],
        },
        {
          title: '2. Groove',
          subtitle: 'El Sabor Rítmico',
          description: 'Es la sensación rítmica o el "sabor" que hace que la música invite a moverse o bailar. Mientras que el tiempo es dónde cae el golpe, el groove es cómo se siente ese golpe en relación con los demás.',
          image: 'https://cdn.pixabay.com/photo/2016/11/19/15/32/drum-set-1839383_960_720.jpg',
          points: [
            {
              label: 'La definición emocional',
              text: 'Es el "colchón" rítmico. Un groove sólido nace de la interacción perfecta entre el bombo, la caja y el hi-hat, creando un ciclo que se siente orgánico y fluido.',
            },
            {
              label: 'El factor humano (Micro-timing)',
              text: 'El groove a menudo implica jugar sutilmente con el tiempo:',
              subtypes: [
                {
                  name: 'Ahead of the beat (Adelantado)',
                  description: 'Tocar una fracción de milisegundo antes del pulso absoluto para dar energía (común en el Punk o Jazz rápido).',
                },
                {
                  name: 'Behind the beat (Atrás)',
                  description: 'Tocar ligeramente "atrás" del pulso para dar una sensación de peso y relajación (clásico en el Neo-Soul o el Blues).',
                },
              ],
            },
            {
              label: 'Dinamismo',
              text: 'El groove también depende de las dinámicas. Si todas las notas suenan al mismo volumen, no hay groove; las notas fantasma (ghost notes) y los acentos son los que crean esa "onda".',
            },
          ],
        },
      ],

      comparison: {
        title: 'La diferencia clave: ¿Se puede tener uno sin el otro?',
        image: 'https://cdn.pixabay.com/photo/2015/05/07/11/02/guitar-756326_960_720.jpg',
        table: [
          {
            concept: 'Tiempo',
            question: '¿Es constante el pulso?',
            measurement: 'El reloj / Metrónomo',
            objective: 'Estabilidad y estructura',
          },
          {
            concept: 'Groove',
            question: '¿Se siente bien la música?',
            measurement: 'El cuerpo / El baile',
            objective: 'Conexión y musicalidad',
          },
        ],
        example: 'Una caja de ritmos programada perfectamente tiene un tiempo impecable, pero a menudo carece de groove porque es demasiado rígida. Por otro lado, un baterista puede tener mucho groove, pero si su tiempo es inestable, la banda se sentirá insegura.',
      },

      development: {
        title: '¿Cómo desarrollar ambos?',
        methods: [
          {
            skill: 'Para el Tiempo',
            practice: 'Practica con el metrónomo, pero haz que el click desaparezca (cuando tu golpe cae tan perfecto sobre el click que dejas de oírlo, tu tiempo es excelente).',
          },
          {
            skill: 'Para el Groove',
            practice: 'Escucha mucha música y fíjate en la relación entre el bajo y el bombo. Practica tocar el mismo ritmo pero con diferentes "sentires" (más relajado, más agresivo).',
          },
        ],
        quote: 'Como decía el gran Jeff Porcaro: "El groove es el resultado de mantener un tiempo sólido mientras le das a la música lo que necesita para respirar".',
      },
    },
    exercises: [
      {
        name: 'Subdivisiones',
        pattern: 'Negras → Corcheas → Tresillos → Semicorcheas',
        focus: 'Mantener tempo constante en todas las subdivisiones',
        description:
          'Pasar entre subdivisiones sin variar el tempo (siempre con metrónomo).',
        bpm: '60-120',
      },
      {
        name: 'Desplazamiento de Acentos',
        pattern: 'Ritmo básico con acento móvil',
        focus: 'Mover el acento a diferentes partes del compás',
        description: 'Tocar el mismo groove pero acentuando diferentes tiempos.',
        bpm: '70-110',
      },
      {
        name: 'Dinámicas',
        pattern: 'Piano (pp) → Forte (ff)',
        focus: 'Mismo ritmo, diferentes volúmenes',
        description: 'Practicar muy suave y muy fuerte sin perder velocidad ni precisión.',
        bpm: '60-100',
      },
    ],
  },
];
