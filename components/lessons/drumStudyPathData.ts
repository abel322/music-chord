export const studyPathData = [
  {
    id: 1,
    title: 'Técnica de Manos y Control de Baquetas',
    subtitle: 'El Alfabeto del Baterista',
    color: '#1976d2',
    description: {
      intro: 'El Control de Rebotes y Baquetas es el cimiento de todo. Si peleas contra la baqueta, te cansas y te lesionas; si dejas que la baqueta trabaje para ti, la velocidad y la fluidez aparecen solas.',
      fundamentals: [
        {
          title: '1. El Fulcro (Punto de Apoyo)',
          image: 'https://images.unsplash.com/photo-1571327073757-71d13c24de30?w=800&q=80',
          content: 'Es el lugar exacto donde la baqueta pivota. Si la agarras muy atrás, pesa mucho; muy adelante, no tiene fuerza.',
          points: [
            {
              label: 'La Regla del Tercio',
              text: 'Divide la baqueta en tres partes imaginarias. Tu pulgar e índice deben pinzar la baqueta aproximadamente a 1/3 de distancia desde la base.',
            },
            {
              label: 'Presión',
              text: 'Debe ser como sostener un pájaro pequeño: lo suficientemente firme para que no escape, pero lo suficientemente suave para no asfixiarlo. Si tus nudillos están blancos, estás apretando demasiado.',
            },
          ],
        },
        {
          title: '2. El "Free Stroke" (Golpe de Gravedad)',
          image: 'https://images.unsplash.com/photo-1519139270028-ab664cf42264?w=800&q=80',
          content: 'Esta es la técnica de George L. Stone y Billy Gladstone. El secreto es que la baqueta debe volver a la posición inicial por sí sola.',
          points: [
            {
              label: 'La Analogía del Balón',
              text: 'Tocar la batería debe sentirse como rebotar una pelota de básquet. Tú solo impulsas la baqueta hacia abajo; el parche (la física) se encarga de devolverla.',
            },
            {
              label: 'Ejercicio',
              text: 'Lanza la baqueta desde arriba y abre los dedos traseros (medio, anular y meñique) permitiendo que la baqueta suba libremente después del impacto. No la frenes con la palma.',
            },
          ],
        },
        {
          title: '3. Finger Control (Control de Dedos)',
          image: 'https://images.unsplash.com/photo-1460667262436-cf19894f4774?w=800&q=80',
          content: 'A velocidades altas, la muñeca es demasiado lenta. Aquí es donde los dedos entran en juego.',
          points: [
            {
              label: 'La función',
              text: 'Los dedos traseros "jalan" la baqueta de vuelta a la palma después del rebote inicial.',
            },
            {
              label: 'Ejercicio "French Grip"',
              text: 'Pon las manos con los pulgares hacia arriba (como si dieras un "like"). Practica dar golpes usando únicamente el movimiento de los dedos, sin mover la muñeca. Esto te dará una velocidad increíble con cero esfuerzo.',
            },
          ],
        },
      ],
      practiceRoutine: {
        title: 'Rutina de Práctica: "El Rebote Infinito"',
        image: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=800&q=80',
        intro: 'Realiza estos ejercicios en un pad de práctica o en la caja, buscando que cada golpe suene exactamente igual al anterior.',
        exercises: [
          {
            name: '8-8-16',
            description: '8 golpes con D, 8 con I, 16 alternados.',
            objective: 'Igualar el rebote de ambas manos.',
          },
          {
            name: 'The Dribble',
            description: 'Rebota la baqueta continuamente lo más bajo posible usando solo dedos.',
            objective: 'Desarrollar control en dinámicas suaves.',
          },
          {
            name: 'Stone Killer',
            description: 'Grupos de 4, 8 y 12 golpes seguidos con una sola mano.',
            objective: 'Resistencia y mantenimiento del fulcro.',
          },
        ],
      },
      proTips: {
        title: 'Tips de Oro',
        image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80',
        tips: [
          {
            label: 'Escucha el "tono" de la baqueta',
            text: 'Si la aprietas mucho, el sonido es "ahogado" y metálico. Si la dejas rebotar, el tambor canta con toda su resonancia.',
          },
          {
            label: 'Usa el espejo',
            text: 'Observa si la punta de la baqueta viaja en una línea recta hacia arriba y hacia abajo. Si "baila" hacia los lados, estás perdiendo energía.',
          },
          {
            label: 'Nivelar la mano débil',
            text: 'Pasa el doble de tiempo practicando estos rebotes con tu mano no dominante (la izquierda si eres diestro).',
          },
        ],
      },
      rudimentsIntro: 'Los rudimentos son los ejercicios técnicos fundamentales para el tambor y la batería. Se pueden comparar con las escalas en un piano o el abecedario en el lenguaje: son patrones rítmicos básicos de manos que, al combinarse, permiten ejecutar cualquier ritmo, redoble o solo de manera fluida. Históricamente, nacieron en el ámbito militar para estandarizar las señales que los tamborileros daban a las tropas, pero hoy son la base de la técnica moderna.',
      sections: [
        {
          title: '📋 Características Principales',
          items: [
            'Combinación de golpes: Se basan en alternar golpes simples (Derecha, Izquierda), golpes dobles (DD, II) y acentos',
            'Estandarización: La PAS (Percussive Arts Society) reconoce 40 rudimentos oficiales como el estándar internacional',
            'Versatilidad: Se practican en un pad de práctica o caja (snare), pero el objetivo final es distribuirlos por todo el set de batería'
          ]
        },
        {
          title: '🎯 Las 4 Familias de Rudimentos',
          items: [
            'Rolls (Redobles): Golpes constantes que crean un sonido sostenido. Pueden ser de golpes simples (D-I-D-I) o dobles (DD-II-DD-II)',
            'Diddles: Mezclan golpes simples y dobles. El más famoso es el Paradiddle (D-I-DD / I-D-II), esencial para cambiar de mano líder',
            'Flams (Apoyaturas): Consisten en una nota pequeña justo antes de la nota principal. Sirven para dar "grosor" al sonido',
            'Drags: Similares al flam, pero con dos notas pequeñas rápidas antes del golpe principal'
          ]
        },
        {
          title: '💪 ¿Para qué sirven realmente?',
          items: [
            'Control Físico: Desarrollan la musculatura, el rebote y la resistencia',
            'Vocabulario: Te dan herramientas para crear fills (remates) más interesantes',
            'Independencia: Ayudan a que tus manos no dependan una de la otra, permitiendo dinámicas distintas en cada extremidad'
          ]
        },
        {
          title: '🎭 La Técnica Moeller',
          intro: 'La Técnica Moeller es, posiblemente, el sistema más importante para cualquier baterista que busque tocar con máxima eficiencia, velocidad y potencia, pero con el mínimo esfuerzo. Debe su nombre a Sanford A. Moeller, quien la observó en los tamborileros veteranos de la Guerra Civil estadounidense, pero fue popularizada por el legendario Jim Chapin y perfeccionada por maestros como Joe Morello.',
          subsections: [
            {
              subtitle: '🔥 El concepto fundamental: El "Látigo"',
              text: 'La idea principal es que no mueves la baqueta solo con la muñeca o los dedos, sino que utilizas el antebrazo y la gravedad. El movimiento es similar al de un látigo: la energía nace en el codo/antebrazo, viaja por la muñeca y termina en la punta de la baqueta.'
            },
            {
              subtitle: '🔄 Los 3 Movimientos del Ciclo Moeller',
              items: [
                'Downstroke (El Latigazo): Inicias con el brazo arriba. Lanzas la baqueta hacia el parche, pero dejas la muñeca relajada para que la punta se detenga cerca del parche después del golpe. Este es el golpe acentuado (fuerte)',
                'Tap (El Rebote): Aprovechando que la baqueta quedó abajo, das uno o varios golpes suaves usando solo los dedos o un pequeño movimiento de muñeca. No levantas el brazo todavía',
                'Upstroke (La Preparación): Este es el movimiento más crítico. Mientras das el último golpe suave, comienzas a levantar el codo y la muñeca. La punta de la baqueta golpea el parche "mientras sube". Este golpe prepara el brazo para el siguiente Downstroke'
              ]
            },
            {
              subtitle: '⚡ ¿Por qué es tan efectiva?',
              items: [
                'Ahorro de energía: En lugar de gastar energía en cada nota, usas un solo movimiento global para generar 2, 3 o 4 notas',
                'Velocidad natural: Permite tocar ráfagas de notas (como los triplets de Moeller) de forma muy fluida',
                'Dinámica: Facilita enormemente la ejecución de acentos potentes seguidos de notas fantasma (ghost notes) muy suaves',
                'Prevención de lesiones: Al eliminar la tensión y basarse en el movimiento natural del cuerpo, reduce el riesgo de tendinitis'
              ]
            },
            {
              subtitle: '🎯 ¿Cómo empezar a practicarla?',
              items: [
                'Sin baquetas: Deja caer tu brazo sobre una mesa. Nota cómo el codo y la muñeca se mueven de forma natural. Esa relajación es la clave',
                'Paso a paso: No intentes ir rápido. Practica primero el Downstroke (golpe fuerte que se queda abajo) y el Upstroke (golpe suave que termina con la mano arriba)',
                'Visualiza el arco: Imagina que tu muñeca es una bisagra muy suelta'
              ]
            }
          ]
        },
        {
          title: '🎯 Control de Acentos: Los 4 Golpes Básicos',
          intro: 'Para dominar el control de acentos, el secreto no está en qué tan fuerte golpeas hacia abajo, sino en qué tan rápido controlas la altura de la baqueta después del golpe. Para esto, se utiliza el sistema de los 4 Golpes Básicos de Mano (The 4 Basic Strokes). Si dominas estas cuatro posiciones, podrás tocar cualquier acento a cualquier velocidad.',
          subsections: [
            {
              subtitle: '📊 Los 4 Movimientos del Control de Acentos',
              text: 'Imagina que hay dos alturas: High (20-30 cm del parche) y Low (2-3 cm del parche).',
              items: [
                '1. Full Stroke (Alta → Alta): Para tocar una serie de acentos seguidos',
                '2. Down Stroke (Alta → Baja): El más importante. Toca un acento y frena la baqueta abajo para la siguiente nota suave',
                '3. Tap (Baja → Baja): Para notas suaves (ghost notes) seguidas de otras suaves',
                '4. Up Stroke (Baja → Alta): Toca una nota suave y aprovecha para subir la mano para el siguiente acento'
              ]
            },
            {
              subtitle: '🔺 Ejercicio Práctico: "El Triángulo de Control"',
              text: 'Practica esta secuencia con una sola mano (primero derecha, luego izquierda) para mecanizar las alturas:',
              items: [
                'Acento (Down Stroke): Empieza arriba, golpea fuerte y deja la punta a 2 cm del parche',
                'Nota Suave (Tap): Golpea suave desde donde te quedaste y vuelve a quedarte abajo',
                'Preparación (Up Stroke): Golpea suave y, mientras lo haces, levanta la mano rápidamente',
                'Repite: Ahora estás arriba de nuevo para el acento'
              ]
            },
            {
              subtitle: '⚡ Regla de oro',
              text: 'El acento se prepara en el golpe anterior. Si quieres un acento en el tiempo 1, tu mano debe estar subiendo en el "y" anterior.'
            },
            {
              subtitle: '🎼 Rutina de Aplicación (Acentos en Semicorcheas)',
              text: 'Toca grupos de 4 notas (1 e + a) y mueve el acento:',
              items: [
                'Acento en la 1ª: D i d i (Down, Tap, Tap, Up)',
                'Acento en la 2ª: d I d i (Up, Down, Tap, Tap)',
                'Acento en la 3ª: d i D i (Tap, Up, Down, Tap)',
                'Acento en la 4ª: d i d I (Tap, Tap, Up, Down)'
              ]
            },
            {
              subtitle: '💡 Consejos Pro',
              items: [
                'No aprietes la baqueta: El "Down Stroke" no se frena apretando los dedos, sino usando el peso de la mano y deteniendo el movimiento de la muñeca',
                'Usa un espejo: Es la mejor forma de ver si tus alturas son consistentes. Si tu nota suave (Tap) sube demasiado, el acento no destacará',
                'Diferencia de volumen: Un acento debe sonar notablemente más fuerte que un tap. Busca un contraste claro'
              ]
            }
          ]
        }
      ]
    },
    books: [
      {
        id: 'hand-techniques',
        title: 'Técnicas de Mano y Golpes',
        subtitle: 'Fundamentos Mecánicos y Desarrollo Rudimental',
        description:
          '✋ MECÁNICA FUNDAMENTAL: Este método establece las bases físicas del control de baquetas, desde el agarre correcto hasta técnicas avanzadas de velocidad y coordinación.',
        levels: [
          {
            level: 'Nivel Básico',
            subtitle: 'Fundamentos y Mecánica Inicial',
            color: '#4CAF50',
            description:
              'En esta etapa, el enfoque es construir una base sólida de control y comprensión física del instrumento.',
            lessons: [
              {
                name: 'Agarres y Postura',
                pages: 'Cap. 1',
                description: 'Establecer el fulcro correcto en los agarres matched y traditional.',
              },
              {
                name: 'Mecánica de Golpeo',
                pages: 'Cap. 3 y 4',
                description: 'Dominar el Full Stroke (golpe legado), así como los golpes acentuados y taps (Down/Up strokes).',
              },
              {
                name: 'Calidad de Sonido',
                pages: 'Cap. 6',
                description: 'Aprender a tocar "a través" del parche para evitar sonidos distorsionados.',
              },
              {
                name: 'Fundamentos Rítmicos',
                pages: 'Cap. 7',
                description: 'Ejercicios de subdivisión rítmica (binaria y ternaria) esenciales para cualquier rudimento.',
              },
              {
                name: 'Rudimentos Iniciales',
                pages: 'Cap. 8',
                description: 'Redobles de golpes simples (Single Stroke Roll) y redobles de rebote múltiple (Buzz Roll).',
              },
            ],
          },
          {
            level: 'Nivel Intermedio',
            subtitle: 'Desarrollo Rudimental Estándar',
            color: '#FF9800',
            description:
              'Aquí el estudiante comienza a aplicar las mecánicas básicas a patrones de coordinación más complejos.',
            lessons: [
              {
                name: 'Técnica Moeller',
                pages: 'Cap. 5',
                description: 'Introducción al golpe de "látigo" para añadir velocidad y eficiencia sin tensión.',
              },
              {
                name: 'Rudimentos de la PAS - Open Rolls',
                pages: 'Cap. 8',
                description: 'Estudio sistemático de los redobles de golpes dobles (Open Rolls).',
              },
              {
                name: 'Rudimentos de la PAS - Paradiddles',
                pages: 'Cap. 9',
                description: 'Patrones de coordinación fundamentales con alternancia de manos.',
              },
              {
                name: 'Rudimentos de la PAS - Flams',
                pages: 'Cap. 10',
                description: 'Notas de adorno y técnica de flam tradicional.',
              },
              {
                name: 'Rudimentos de la PAS - Drags',
                pages: 'Cap. 11',
                description: 'Notas de adorno dobles y técnica de drag.',
              },
              {
                name: 'Ejercicios de Construcción (Builders)',
                pages: 'Varios capítulos',
                description: 'Uso de patrones esqueléticos para asegurar que el movimiento de la mano no cambie al añadir notas dobles.',
              },
            ],
          },
          {
            level: 'Nivel Avanzado',
            subtitle: 'Maestría y Aplicaciones Modernas',
            color: '#F44336',
            description:
              'Este nivel desafía la coordinación máxima, la velocidad extrema y la capacidad analítica del percusionista.',
            lessons: [
              {
                name: 'Inversiones e Híbridos',
                pages: 'Cap. 12',
                description: 'Rudimentos no tradicionales que requieren combinaciones de movimientos únicos, como el Cheese, Fubars e inversiones de los 40 rudimentos estándar.',
              },
              {
                name: 'The Grid',
                pages: 'Cap. 13',
                description: 'Un sistema avanzado para desplazar acentos y flams a través de todas las subdivisiones posibles de un patrón.',
              },
              {
                name: 'Optimización de Velocidad',
                pages: 'Cap. 14',
                description: 'Técnicas específicas para "reef it" (tocar muy rápido) conservando el movimiento y reduciendo el esfuerzo.',
              },
              {
                name: 'Apéndice de Ejercicios',
                pages: 'Pág. 92',
                description: 'Rutinas de alta intensidad como "Perilous Heirtas" o el "Moeller Jam" que exigen un control total de la resistencia y el fraseo.',
              },
            ],
          },
        ],
      },

      {
        id: 'stick-control',
        title: 'Stick Control - George Lawrence Stone',
        subtitle: 'Método Fundamental de Control de Baquetas',
        description:
          '⚠️ REGLA DE ORO: Practica cada ejercicio 20 veces sin parar antes de pasar al siguiente. Esta es la recomendación del autor para obtener resultados satisfactorios. Enfócate en la igualdad de sonido entre ambas manos y usa siempre metrónomo.',
        levels: [
          {
            level: 'Nivel Básico',
            subtitle: 'Fundamentos, Mecánica y Combinaciones Simples',
            color: '#4CAF50',
            description:
              'Esta sección se centra en el desarrollo de la memoria muscular, la igualdad entre ambas manos y la lectura básica.',
            lessons: [
              {
                name: 'Prefacio e Instrucciones',
                pages: 'Págs. 2-4',
                description: 'El autor explica que el propósito del libro es el desarrollo muscular (fuerza, velocidad, flexibilidad y toque). Recomienda practicar cada ejercicio 20 veces sin parar, usar metrónomo, tocar con músculos relajados y define claramente la diferencia entre el "redoble abierto" (rudimental) y el "redoble cerrado" (orquestal).',
              },
              {
                name: 'Combinaciones de Golpes Sencillos (Single Beat Combinations)',
                pages: 'Págs. 5-7',
                description: 'Presenta 72 variaciones fundamentales de digitaciones en compás de 4/4. Trabaja exhaustivamente golpes simples (R L R L), dobles (L L R R) y paradiddles sin acentos para emparejar la mano débil con la fuerte.',
              },
              {
                name: 'Tresillos (Triplets)',
                pages: 'Págs. 8-9',
                description: 'Traslada los conceptos de control de la sección anterior a subdivisiones ternarias (tresillos), exigiendo cambiar el flujo del movimiento de las manos.',
              },
            ],
          },
          {
            level: 'Nivel Intermedio',
            subtitle: 'Desarrollo de Rudimentos: Redobles y Flams',
            color: '#FF9800',
            description:
              'Aquí se introducen adornos y rudimentos técnicos que requieren mayor control del rebote y coordinación.',
            lessons: [
              {
                name: 'Combinaciones de Redobles Cortos (Short Roll Combinations)',
                pages: 'Págs. 10-12',
                description: 'Introduce los redobles (de 5, 7 y 9 golpes) intercalados con notas sencillas. La página 10 los enfoca como redobles de golpes sencillos. La página 11 los desarrolla como redobles abiertos de golpes dobles. La página 12 aplica la técnica del redoble cerrado o presionado.',
              },
              {
                name: 'Ejercicios de Repaso de Redobles',
                pages: 'Pág. 13',
                description: 'Ejercicios de repaso para afianzar todas las combinaciones de redobles cortos.',
              },
              {
                name: 'Redobles Cortos y Tresillos',
                pages: 'Págs. 14-15',
                description: 'Mezcla la dificultad de ejecutar redobles cortos dentro de estructuras de fraseo en tresillos.',
              },
              {
                name: 'Golpes con Flams (Flam Beats)',
                pages: 'Págs. 16-23',
                description: 'Una extensa y rigurosa sección de 192 ejercicios dedicados a dominar el Flam (mordente de un golpe). Se combina con golpes simples y dobles para lograr una ejecución limpia de la nota de adorno.',
              },
            ],
          },
          {
            level: 'Nivel Avanzado',
            subtitle: 'Métricas Complejas, Progresiones y Aplicación al Drumset',
            color: '#F44336',
            description:
              'La última sección exige una profunda concentración rítmica, resistencia extrema en las progresiones de redobles y creatividad para aplicar los conceptos a las cuatro extremidades.',
            lessons: [
              {
                name: 'Redobles Cortos en 6/8',
                pages: 'Págs. 24-28',
                description: 'Adapta la técnica de los redobles cortos a la métrica ternaria de 6/8, lo que cambia por completo dónde caen los acentos naturales del compás. Concluye con un repaso en la página 28.',
              },
              {
                name: 'Combinaciones en 3/8',
                pages: 'Págs. 29-32',
                description: 'Ejercicios de alta adaptabilidad rítmica agrupados en compases cortos de 3/8.',
              },
              {
                name: 'Combinaciones en 2/4',
                pages: 'Pág. 33',
                description: 'Variaciones de combinaciones en subdivisión de 2/4.',
              },
              {
                name: 'Tresillos con Flams y Notas con Puntillo',
                pages: 'Págs. 34-37',
                description: 'Introduce uno de los retos técnicos más grandes: ejecutar Flams fluidos dentro de tresillos continuos y ritmos picados (con puntillo).',
              },
              {
                name: 'Progresiones de Redobles Cortos',
                pages: 'Págs. 38-43',
                description: 'Ejercicios de resistencia complejos que exigen encadenar y alternar redobles de 5, 7, 9, 11, 13 y 15 golpes.',
              },
              {
                name: 'Progresiones de Redobles Cortos y Tresillos',
                pages: 'Págs. 44-47',
                description: 'La culminación técnica del libro para la caja, fusionando largas cadenas de redobles con subdivisiones de tresillos.',
              },
              {
                name: 'Aplicación a la Batería Completa',
                pages: 'Págs. 48-50',
                description: 'Un artículo final escrito por Kevin Barrett que ilustra cómo llevar estos ejercicios bidimensionales de caja a un nivel superior en el drumset completo. Ofrece métodos de independencia, como asignar la letra "R" al bombo y la "L" a la caja, o tocar ritmos de Jazz/Rock dividiendo las extremidades.',
              },
            ],
          },
        ],
      },

      {
        id: 'rudimental-reference',
        title: "The Drummer's Rudimental Reference Book - John Wooton",
        subtitle: 'Sistema de Progresión por Niveles',
        description:
          '📊 SISTEMA DE NIVELES: Este método organiza los rudimentos en 3 niveles de dificultad progresiva. NO avances al siguiente nivel sin dominar completamente el anterior.',
        levels: [
          {
            level: 'I. Nivel Básico',
            subtitle: 'La Fábrica de Movimientos',
            color: '#4CAF50',
            description:
              'Aquí no se busca velocidad, se busca perfección en el movimiento y en el tiempo. Es donde construyes el "músculo" inteligente.',
            lessons: [
              {
                name: 'The Five Strokes',
                pages: 'Pág. 6',
                description: 'La teoría de Wooton. Define los 5 tipos de golpes (incluyendo el Multiple Bounce) y las 4 alturas exactas de la baqueta. Sin esto, el resto del libro no tiene sentido.',
              },
              {
                name: 'Sección 1 - One Handed Exercises',
                pages: 'Págs. 8-12',
                description: 'Aísla una mano para que aprenda a hacer acentos sin que los golpes suaves se suban de altura. Es control puro de dinámica.',
              },
              {
                name: 'Sección 2 - Hemiolas / Speed Changes',
                pages: 'Págs. 13-14',
                description: 'Cambios de velocidad matemática (negra → tresillo → semicorchea). Sirve para que tu cerebro no se "trabe" al cambiar de ritmo.',
              },
              {
                name: 'Sección 3 - Relaxation Exercises',
                pages: 'Pág. 15',
                description: 'Rutinas de rebote libre. El objetivo es que la sangre fluya y los músculos no se tensen, evitando lesiones y el sonido "apretado".',
              },
              {
                name: 'Sección 4 - Timing Exercises',
                pages: 'Págs. 16-20',
                description: 'Ejercicios de cuadrícula. Quitas y pones notas en un flujo de semicorcheas para que tu sentido del pulso sea inamovible.',
              },
              {
                name: 'Sección 5 - Stick Control Exercises',
                pages: 'Págs. 21-28',
                description: 'Adaptación de Stone. Combinaciones infinitas de Derecha e Izquierda para eliminar la diferencia entre tu mano hábil y tu mano torpe.',
              },
            ],
          },
          {
            level: 'II. Nivel Intermedio',
            subtitle: 'Rudimentos P.A.S. y Resistencia',
            color: '#FF9800',
            description:
              'Aquí es donde empiezas a sonar como un "drummer". Se introducen los rebotes controlados (dopples y triples).',
            lessons: [
              {
                name: 'Sección 6 - Single Stroke Rolls',
                pages: 'Págs. 29-34',
                description: 'El redoble de golpes simples. Se enfoca en la claridad de cada nota en grupos de 4 y 7 sobre una base de seisillos.',
              },
              {
                name: 'Sección 7 - Single Stroke Rolls / 32nd notes',
                pages: 'Págs. 35-38',
                description: 'Velocidad pura en golpes simples. Trabaja la transición hacia las notas más rápidas (fusas).',
              },
              {
                name: 'Sección 8 - Single Stroke Rolls / odd groupings',
                pages: 'Págs. 39-40',
                description: 'Grupos de 5 y 7. Te obliga a pensar fuera de la caja rítmica tradicional de 4 o 3.',
              },
              {
                name: 'Sección 9 - Multiple Bounce Rolls',
                pages: 'Pág. 41',
                description: 'El famoso "Buzz Roll". Controlas la presión de los dedos para que la baqueta rebote muchas veces de forma compacta.',
              },
              {
                name: 'Sección 10 - Triple Stroke Rolls',
                pages: 'Págs. 42-43',
                description: 'Tres golpes por mano (eggbeaters). Clave para la agilidad en el estilo de marcha moderno.',
              },
              {
                name: 'Sección 11 - Double Stroke Rolls',
                pages: 'Págs. 44-48',
                description: 'El redoble abierto. Se busca que el segundo golpe suene exactamente igual de fuerte que el primero.',
              },
              {
                name: 'Sección 12 - Stroke Specific Rolls',
                pages: 'Págs. 49-63',
                description: 'Redobles con nombre propio (de 5, 7, 9, 13, etc.). Te enseña a medir exactamente cuánto dura cada redoble y dónde termina el acento.',
              },
              {
                name: 'Sección 13 - Triple Pulse Rolls',
                pages: 'Págs. 64-67',
                description: 'Redobles aplicados a compases ternarios (6/8). Cambia la forma en que "sientes" el acento al rebotar.',
              },
              {
                name: 'Sección 14 - Rolls With Odd Groupings',
                pages: 'Págs. 68-69',
                description: 'Redobles de golpes dobles dentro de quintillos y septillos. Coordinación cerebral de alto nivel.',
              },
              {
                name: 'Sección 15 - Paradiddles',
                pages: 'Págs. 70-74',
                description: 'Los rudimentos de coordinación por excelencia. Trabaja el Upstroke para que el acento siempre esté listo a tiempo.',
              },
              {
                name: 'Sección 16 - Paradiddles With Odd Groupings',
                pages: 'Pág. 75',
                description: 'Desplaza el acento del paradiddle para que caiga en lugares inesperados del compás.',
              },
              {
                name: 'Sección 17 - Flams',
                pages: 'Págs. 76-80',
                description: 'La mecánica del Flam. Una nota de adorno muy baja seguida de una nota principal. El secreto es no subir la mano de la nota de adorno.',
              },
              {
                name: 'Sección 18 - Flam Accents',
                pages: 'Págs. 81-82',
                description: 'El Flam aplicado a tresillos. Es el pan de cada día de cualquier baterista de rudimentos.',
              },
            ],
          },
          {
            level: 'III. Nivel Avanzado',
            subtitle: 'Híbridos, Inversiones y Virtuosismo',
            color: '#F44336',
            description:
              'Aquí entramos en el terreno de los "Drum Corps" de élite. Si dominas esto, puedes tocar prácticamente cualquier cosa.',
            lessons: [
              {
                name: 'Sección 19 - Flamacues',
                pages: 'Págs. 83-84',
                description: 'El único rudimento con el acento en la segunda nota de un grupo de cuatro. Requiere un movimiento de "látigo" (upstroke) muy veloz.',
              },
              {
                name: 'Sección 20 - Flam Paradiddles',
                pages: 'Págs. 85-86',
                description: 'Combina la dificultad del Flam con la alternancia del paradiddle. Wooton dice que es de los más difíciles de limpiar.',
              },
              {
                name: 'Sección 21 - Flam Taps y Variaciones',
                pages: 'Págs. 87-88',
                description: 'Rebotes controlados después de un Flam. Es puro control de "micro-dinámica".',
              },
              {
                name: 'Sección 22 - Flammed Windmills',
                pages: 'Pág. 89',
                description: 'Un híbrido que pone el diddle al principio. Suena como un paradiddle pero se siente mucho más agresivo.',
              },
              {
                name: 'Sección 23 - Flam Paradiddle-diddles',
                pages: 'Págs. 90-91',
                description: 'Un flujo constante de notas donde los Flams se cruzan con redobles de tres notas.',
              },
              {
                name: 'Sección 24 - Pataflaflas',
                pages: 'Págs. 92-93',
                description: 'Cuatro notas con Flams en los extremos. Es un ejercicio de resistencia para las manos.',
              },
              {
                name: 'Sección 25 - Swiss Army Triplets',
                pages: 'Págs. 94-96',
                description: 'Tresillos donde el Flam y el acento se tocan con la misma mano. Genera un efecto de "ametralladora".',
              },
              {
                name: 'Sección 26 - Inverted Flam Taps',
                pages: 'Págs. 97-98',
                description: 'El "anti-ritmo". Tocas los Flams a contratiempo, forzando a tu mano a subir cuando normalmente bajaría.',
              },
              {
                name: 'Sección 27 - Flam Drags',
                pages: 'Págs. 99-100',
                description: 'Mezcla el Flam y el Drag en la misma nota. Es el terror de los percusionistas novatos.',
              },
              {
                name: 'Sección 28 - Flam Stutters / Flam Fives',
                pages: 'Págs. 101-102',
                description: 'Rudimentos modernos de alta velocidad diseñados para solos de caja de marcha.',
              },
              {
                name: 'Secciones 29 y 30 - Flam Rudiment Combinations',
                pages: 'Págs. 103-108',
                description: 'Aquí Wooton empieza a encadenar todo lo anterior. Si no tienes los básicos claros, aquí el sonido se vuelve "sucio".',
              },
              {
                name: 'Sección 31 - Single and Double Drag Taps',
                pages: 'Págs. 109-113',
                description: 'Notas de adorno dobles (drags) seguidas de un acento. Requiere mucha relajación en los dedos.',
              },
              {
                name: 'Sección 32 - Lesson 25\'s',
                pages: 'Págs. 114-115',
                description: 'Un rudimento militar clásico que mezcla un drag con un golpe acentuado al final de una frase de tres notas.',
              },
              {
                name: 'Secciones 33 y 34 - Dragadiddles y Drag Paradiddles',
                pages: 'Págs. 116-119',
                description: 'Inserción de notas de adorno dobles dentro de los patrones de paradiddle.',
              },
              {
                name: 'Secciones 35, 36 y 37 - Ratamacues (Single, Double, Triple)',
                pages: 'Págs. 120-126',
                description: 'El epítome del fraseo rudimental. Mezcla Drags, acentos y grupos de tres notas con swing.',
              },
              {
                name: 'Sección 38 - Drag Rudiment Combinations',
                pages: 'Págs. 127-128',
                description: 'Ensamble complejo de todos los rudimentos basados en el Drag.',
              },
              {
                name: 'Sección 39 - All Rudiment Combinations',
                pages: 'Págs. 129-136',
                description: 'El examen final. Solos cortos que mezclan Flams, Drags, Redobles y Paradiddles en un caos controlado.',
              },
              {
                name: 'Sección 40 - Back Sticking',
                pages: 'Págs. 137-140',
                description: 'Técnica de espectáculo. Golpeas el parche con la parte trasera (el mango) de la baqueta usando giros de muñeca.',
              },
              {
                name: 'Sección 41 - Around the Tenor Drums',
                pages: 'Págs. 141-143',
                description: 'Cómo mover todos estos rudimentos a través de 4 o 5 tambores sin golpearte los dedos o las baquetas entre sí.',
              },
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
            level: 'Fundamentos y Preparación',
            subtitle: 'Introducción y Filosofía del Método',
            color: '#6366f1',
            description:
              'Preparación mental y técnica antes de comenzar los ejercicios.',
            lessons: [
              {
                name: 'Introducción por Jim Chapin',
                pages: 'Pág. 4',
                description: 'Contexto histórico y filosófico del método.',
              },
              {
                name: 'Prefacio de Joe Morello',
                pages: 'Pág. 5',
                description: 'Sobre técnica y uso del metrónomo.',
              },
            ],
          },
          {
            level: 'Nivel Básico',
            subtitle: 'Control Inicial y Acentuación',
            color: '#4CAF50',
            description:
              'Este nivel se centra en la mecánica fundamental de la mano y el desarrollo de la claridad en subdivisiones binarias.',
            lessons: [
              {
                name: 'Accent Studies - Corcheas con acentos',
                pages: 'Págs. 6-11',
                description: 'Combinas pegadas alternas y a una sola mano.',
              },
              {
                name: 'Accent Studies - Tresillos con acentos',
                pages: 'Págs. 12-17',
                description: 'Desarrollo de acentuación en subdivisiones ternarias.',
              },
              {
                name: 'Accent Studies - Combinaciones',
                pages: 'Págs. 18-19',
                description: 'Combinaciones de corcheas y tresillos para suavizar las transiciones rítmicas.',
              },
              {
                name: 'Buzz Roll Studies - Corcheas',
                pages: 'Págs. 20-24',
                description: 'Corcheas con redobles de rebote múltiple (buzz rolls). Desarrollo de la sensibilidad en los dedos para controlar la presión.',
              },
              {
                name: 'Buzz Roll Studies - Tresillos',
                pages: 'Págs. 25-29',
                description: 'Tresillos con buzz rolls.',
              },
              {
                name: 'Stroke Combinations - Golpes sencillos y dobles',
                pages: 'Pág. 30',
                description: 'Combinaciones de golpes sencillos y dobles.',
              },
              {
                name: 'Stroke Combinations - Mezclas avanzadas',
                pages: 'Págs. 31-33',
                description: 'Mezclas de golpes dobles y buzz, y combinaciones de sencillos, dobles y buzz.',
              },
              {
                name: 'Stroke Combinations - Redobles específicos',
                pages: 'Págs. 34-39',
                description: 'Combinaciones de redobles de 5, 7 y 9 golpes.',
              },
            ],
          },
          {
            level: 'Nivel Intermedio',
            subtitle: 'Resistencia y Rudimentos Aplicados',
            color: '#FF9800',
            description:
              'En esta etapa se introduce el fraseo ternario, el desarrollo de la resistencia y combinaciones de golpes más complejas.',
            lessons: [
              {
                name: 'Control Studies - Sticking',
                pages: 'Págs. 40-41',
                description: 'Ejercicios de sticking (digitación) para igualar el sonido entre manos.',
              },
              {
                name: 'Control Studies - Table of Time',
                pages: 'Págs. 42-43',
                description: 'Desarrollo de la capacidad para tocar diversas subdivisiones uniformemente (incluyendo grupos de 5, 7, 10 y 11).',
              },
              {
                name: 'Control Studies - Endurance',
                pages: 'Pág. 44',
                description: 'Ejercicios de resistencia (Endurance) y acentos progresivos.',
              },
              {
                name: 'Control Studies - Velocity',
                pages: 'Págs. 45-47',
                description: 'Velocidad. Uso de la muñeca para el primer golpe y los dedos para los subsiguientes sin tensión.',
              },
              {
                name: 'Control Studies - Progressive Accents',
                pages: 'Págs. 48-51',
                description: 'Acentos progresivos para desarrollar control dinámico.',
              },
              {
                name: 'Control Studies - Dinámicas',
                pages: 'Págs. 52-53',
                description: 'Control de crescendo y diminuendo.',
              },
            ],
          },
          {
            level: 'Nivel Avanzado',
            subtitle: 'Velocidad, Independencia y Virtuosismo',
            color: '#F44336',
            description:
              'Este nivel exige un control absoluto del rebote, coordinación avanzada y manejo de subdivisiones complejas.',
            lessons: [
              {
                name: 'Control Studies - The Stone "Killer"',
                pages: 'Págs. 54-65',
                description: 'Ejercicios extremos de resistencia basados en conceptos de George Lawrence Stone y Billy Gladstone.',
              },
              {
                name: 'Fill-In Studies - Grupos de tres y cuatro',
                pages: 'Págs. 66-71',
                description: 'Grupos de tres y cuatro con notas de relleno para desarrollar la independencia de manos.',
              },
              {
                name: 'Fill-In Studies - Combinaciones avanzadas',
                pages: 'Págs. 72-75',
                description: 'Combinaciones avanzadas de grupos de dos, tres y cuatro con rellenos y ejercicios de resistencia.',
              },
              {
                name: 'Ostinato Studies',
                pages: 'Págs. 76-81',
                description: 'Desarrollo de la libertad total de una mano mientras la otra mantiene un patrón repetitivo (ostinato).',
              },
              {
                name: 'Flam Studies - Flat Flams',
                pages: 'Págs. 82-85',
                description: 'Ejercicios donde ambas baquetas golpean exactamente al mismo tiempo.',
              },
              {
                name: 'Flam Studies - Corcheas y tresillos',
                pages: 'Págs. 86-93',
                description: 'Corcheas y tresillos con flams tradicionales.',
              },
            ],
          },
        ],
      },

      {
        id: 'rudimental-remedies',
        title: 'Rudimental Remedies - Nathan Daughtrey',
        subtitle: 'Método Progresivo con Estilos Musicales del Mundo',
        description:
          '🌍 MÉTODO GLOBAL: El método está diseñado de forma progresiva, donde las lecciones se vuelven más difíciles a medida que se avanza, incorporando estilos musicales de todo el mundo para que la práctica sea más dinámica. Además, cada ejercicio cuenta con siete niveles de tiempo (tempos), donde los niveles 6 y 7 ("Light Speed" y "Ludicrous Speed") están diseñados específicamente para desafiar a los intérpretes avanzados.',
        levels: [
          {
            level: 'I. Nivel Básico',
            subtitle: 'Mecánica Fundamental y Primeros Rudimentos',
            color: '#4CAF50',
            description:
              'Este nivel se centra en los cimientos del toque: los tipos de golpes y los rudimentos más esenciales.',
            lessons: [
              {
                name: 'Guía - Instrucciones y "Reglas de Nathan"',
                pages: 'Págs. 4-5',
                description: 'Cómo usar los tracks y el DVD.',
              },
              {
                name: 'Lección 1 - Rebound Strokes (Golpes de rebote)',
                pages: 'Pág. 6',
                description: 'El golpe más fundamental (legato). Estilo: Funk.',
              },
              {
                name: 'Lección 2 - All Strokes (Todos los golpes)',
                pages: 'Pág. 8',
                description: 'Tap, upstroke y down stroke (golpe controlado).',
              },
              {
                name: 'Lección 3 - Single Stroke Rolls',
                pages: 'Pág. 10',
                description: 'Redobles de golpes simples. Estilo: Salsa.',
              },
              {
                name: 'Lección 4 - Multiple Bounce Rolls',
                pages: 'Pág. 12',
                description: 'Redobles de rebote múltiple (Buzz/Orchestral).',
              },
              {
                name: 'Lección 5 - Single Paradiddles',
                pages: 'Pág. 14',
                description: 'El rudimento de coordinación básico. Estilo: Samba.',
              },
              {
                name: 'Lección 6 - Five, Seven & Nine Stroke Rolls',
                pages: 'Pág. 16',
                description: 'Redobles de golpes dobles cortos. Estilo: Tower of Power.',
              },
              {
                name: 'Lección 7 - Double Paradiddles & Paradiddle-diddles',
                pages: 'Pág. 18',
                description: 'Variaciones de paradiddles. Estilo: África Subsahariana.',
              },
              {
                name: 'Lección 8 - Flams & Flam Accents',
                pages: 'Pág. 20',
                description: 'Introducción a las notas de adorno (gracia). Estilo: India/Tailandia.',
              },
            ],
          },
          {
            level: 'II. Nivel Intermedio',
            subtitle: 'Desarrollo de Redobles y Drags',
            color: '#FF9800',
            description:
              'En esta etapa se introducen métricas compuestas, redobles de longitudes específicas y el uso de los "Drags".',
            lessons: [
              {
                name: 'Lección 9 - Six, Nine, Ten & Eleven Stroke Rolls',
                pages: 'Pág. 22',
                description: 'Redobles con longitudes asimétricas. Estilo: Hip Hop.',
              },
              {
                name: 'Lección 10 - Ruffs & Drags',
                pages: 'Pág. 24',
                description: 'Notas de adorno dobles. Estilo: Reggae.',
              },
              {
                name: 'Lección 11 - Lesson 25 & Drag Paradiddle #1',
                pages: 'Pág. 26',
                description: 'Rudimentos históricos y combinaciones. Estilo: Tango.',
              },
              {
                name: 'Lección 12 - Roll Grids',
                pages: 'Pág. 28',
                description: 'Ejercicios de cuadrícula para precisión rítmica.',
              },
              {
                name: 'Lección 13 - Flam Taps & Single Flammed Mills',
                pages: 'Pág. 30',
                description: 'Rudimentos de rebote con flams. Estilo: Steel Pan.',
              },
              {
                name: 'Lección 14 - Triple Paradiddles & Drag Paradiddle #2',
                pages: 'Pág. 32',
                description: 'Paradiddles extendidos y híbridos. Estilo: Medio Oriente.',
              },
              {
                name: 'Lección 15 - 13, 15 & 17 Stroke Rolls',
                pages: 'Pág. 34',
                description: 'Redobles de larga duración. Estilo: Disco.',
              },
              {
                name: 'Lección 16 - Flamacues',
                pages: 'Pág. 36',
                description: 'Rudimento americano con acento desplazado. Estilo: Rock.',
              },
              {
                name: 'Lección 17 - Ratamacues',
                pages: 'Pág. 38',
                description: 'El rudimento con "swing" por excelencia. Estilo: Hip Hop.',
              },
            ],
          },
          {
            level: 'III. Nivel Avanzado',
            subtitle: 'Rudimentos Híbridos y Técnica de Virtuosismo',
            color: '#F44336',
            description:
              'Este nivel exige una coordinación extrema, velocidad máxima y el dominio de movimientos invertidos.',
            lessons: [
              {
                name: 'Lección 18 - Stick Control',
                pages: 'Pág. 40',
                description: 'Basado en el método Stone. Control total mono-dinámico. Estilo: Salsa.',
              },
              {
                name: 'Lección 19 - Flam Paradiddles',
                pages: 'Pág. 42',
                description: 'Considerado el rudimento más difícil de la P.A.S. Estilo: Sushi/Arroz Frito.',
              },
              {
                name: 'Lección 20 - Double Drags',
                pages: 'Pág. 44',
                description: 'Interpretaciones complejas en 12/8. Estilo: África.',
              },
              {
                name: 'Lección 21 - Double & Triple Ratamacues',
                pages: 'Pág. 46',
                description: 'Ratamacues extendidos. Estilo: Heavy Metal.',
              },
              {
                name: 'Lección 22 - Swiss Army Triplets',
                pages: 'Pág. 48',
                description: 'Rudimento de rebote con desplazamiento. Estilo: Jazz.',
              },
              {
                name: 'Lección 23 - Pataflaflas',
                pages: 'Pág. 50',
                description: 'Empleo del movimiento invertido asimétrico. Estilo: Bossa Nova.',
              },
              {
                name: 'Lección 24 - Inverted Flam Taps & Flam Paradiddle-diddles',
                pages: 'Pág. 52',
                description: 'Simetría técnica y "queso" (diddles añadidos).',
              },
              {
                name: 'Lección 25 - Flam Drags & Flam Fives',
                pages: 'Pág. 54',
                description: 'Rudimentos híbridos y ritmos complejos. Estilo: Irlanda/Escocia.',
              },
              {
                name: 'Progress Charts',
                pages: 'Págs. 56-60',
                description: 'Registro de avance personal.',
              },
            ],
          },
        ],
      },

      {
        id: 'ted-reed-syncopation',
        title: 'Progressive Steps to Syncopation - Ted Reed',
        subtitle: 'Lectura Rítmica y Sincopa',
        description:
          '📖 LECTURA FUNDAMENTAL: Desarrolla lectura rítmica y sincopa, esencial para técnica de manos.',
        levels: [
          {
            level: 'Nivel Básico',
            subtitle: 'Fundamentos',
            color: '#4CAF50',
            description: 'Bases de lectura rítmica.',
            lessons: [{ name: 'Lección 1-15', pages: 'Págs. 10-24', description: 'Negras, corcheas y sincopa.' }],
          },
          {
            level: 'Nivel Intermedio',
            subtitle: 'Sincopa',
            color: '#FF9800',
            description: 'Patrones sincopados.',
            lessons: [{ name: 'Lección 16-35', pages: 'Págs. 25-50', description: 'Sincopa y semicorcheas.' }],
          },
          {
            level: 'Nivel Avanzado',
            subtitle: 'Tresillos',
            color: '#F44336',
            description: 'Dominio completo.',
            lessons: [{ name: 'Tresillos', pages: 'Págs. 51-68', description: 'Tresillos y aplicaciones.' }],
          },
        ],
      },

      {
        id: 'language-of-drumming',
        title: 'The Language of Drumming - Benny Greb',
        subtitle: 'Sistema de Expresión Musical',
        description: '🗣️ LENGUAJE MUSICAL: Batería como lenguaje, perfecto para técnica de manos.',
        levels: [
          {
            level: 'Nivel Básico',
            subtitle: 'Alfabeto',
            color: '#4CAF50',
            description: 'Alfabeto rítmico.',
            lessons: [{ name: 'Alfabeto', pages: 'Págs. 8-30', description: 'Golpes y rudimentos.' }],
          },
          {
            level: 'Nivel Intermedio',
            subtitle: 'Frases',
            color: '#FF9800',
            description: 'Frases musicales.',
            lessons: [{ name: 'Grooves', pages: 'Págs. 31-65', description: 'Grooves y fills.' }],
          },
          {
            level: 'Nivel Avanzado',
            subtitle: 'Sintaxis',
            color: '#F44336',
            description: 'Conversación musical.',
            lessons: [{ name: 'Creatividad', pages: 'Págs. 66-110', description: 'Improvisación.' }],
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
    description: {
      intro: 'El fraseo profesional en los rudimentos es lo que separa a un "ejecutante de ejercicios" de un músico de batería. A nivel profesional, los rudimentos no se tocan como celdas aisladas, sino como lenguaje. Aquí te detallo los pilares que definen un fraseo de élite:',
      sections: [
        {
          title: '1. La "Orquestación" (Distribución en el Kit)',
          image: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=800&q=80',
          content: 'Un principiante toca un Paradiddle en la caja. Un profesional lo orquesta.',
          points: [
            {
              label: 'Acentos en los platos',
              text: 'Toca los acentos del rudimento en un platillo (con bombo simultáneo) y las notas suaves en la caja.',
            },
            {
              label: 'Movimiento melódico',
              text: 'Mueve los acentos entre los toms para crear una "melodía" rítmica, mientras las notas fantasmas se mantienen constantes en el redoblante.',
            },
          ],
        },
        {
          title: '2. El uso de las "Ghost Notes" (Notas Fantasma)',
          image: 'https://images.unsplash.com/photo-1519139270028-ab664cf42264?w=800&q=80',
          content: 'El fraseo profesional vive de la extrema diferencia dinámica.',
          points: [
            {
              label: 'Control dinámico',
              text: 'En un rudimento como el Flam Accent, la nota principal debe ser un golpe pleno y potente, mientras que las notas siguientes deben ser casi inaudibles, pero perfectamente rítmicas.',
            },
            {
              label: 'El secreto',
              text: 'Controlar la altura de la baqueta (la técnica de los 4 golpes que mencionamos antes). Si tus notas suaves suben más de 3 cm del parche, el fraseo pierde su "aire" y suena amateur.',
            },
          ],
        },
        {
          title: '3. La "Subdivisión Elástica" (Bending the Grid)',
          image: 'https://images.unsplash.com/photo-1571327073757-71d13c24de30?w=800&q=80',
          content: 'El profesional no siempre toca los rudimentos de forma "cuadrada".',
          points: [
            {
              label: 'Modulación de velocidad',
              text: 'Capacidad de empezar un rudimento (ej. Double Stroke Roll) como corcheas y acelerarlo gradualmente a semicorcheas, tresillos y sextillos de forma fluida (el famoso "Long Roll" de los exámenes de conservatorio).',
            },
            {
              label: 'Interpretación de Swing',
              text: 'Tocar rudimentos binarios (como el Paradiddle) con una sensación de ternario o shuffle. Esto es clave en el Jazz y el Funk.',
            },
          ],
        },
        {
          title: '4. Rudimentos Híbridos (The "Gospel Chops" Style)',
          image: 'https://images.unsplash.com/photo-1460667262436-cf19894f4774?w=800&q=80',
          content: 'A nivel avanzado, el fraseo profesional utiliza combinaciones que no están en los 40 básicos de la PAS.',
          points: [
            {
              label: 'Combinar manos y pies',
              text: 'Reemplazar un golpe de mano por uno de bombo dentro del rudimento. Ejemplo: En un Single Stroke Roll (D-I-D-I), tocar D-I-K-K (Derecha, Izquierda, Bombo, Bombo). Esto crea texturas lineales que suenan muy modernas y fluidas.',
            },
          ],
        },
        {
          title: '5. El "Flow" y la Respiración',
          image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80',
          content: 'El fraseo profesional tiene puntuación, como el habla.',
          points: [
            {
              label: 'Fraseo con espacios',
              text: 'No toques una cadena infinita de rudimentos. Un profesional toca una "frase", deja un espacio (silencio) y responde con otra.',
            },
            {
              label: 'Uso del espacio',
              text: 'Saber cuándo no tocar un rudimento es tan importante como saber ejecutarlo.',
            },
          ],
        },
      ],
      exercise: {
        title: 'Ejercicio de Fraseo "Pro" (El Paradiddle-Diddle)',
        image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80',
        intro: 'El Paradiddle-Diddle (D-I-D-D-I-I) es el favorito de los profesionales por su fluidez natural:',
        steps: [
          {
            step: 'En la caja',
            description: 'Toca el acento en la primera nota (D-i-d-d-i-i).',
          },
          {
            step: 'Orquesta',
            description: 'Mueve el primer golpe (D) al Tom de piso y el segundo (I) al Tom aéreo. Deja los dobles (dd-ii) muy suaves en la caja.',
          },
          {
            step: 'Añade el pie',
            description: 'Toca el bombo junto con el primer acento.',
          },
        ],
        conclusion: 'Este patrón suena como un remate complejo de fusión, pero es simplemente un rudimento bien fraseado.',
      },
    },
    books: [
      {
        id: 'gaddiments',
        title: 'Gaddiments - Steve Gadd',
        subtitle: 'Rudimentos Híbridos y Desplazamientos',
        description:
          '🎵 EL TOQUE GADD: El libro se basa en tres conceptos musicales fundamentales: el desplazamiento de los rudimentos en diferentes subdivisiones, el fraseo rítmico y mantener el tiempo (tempo) con precisión.',
        levels: [
          {
            level: '1. Nivel Básico',
            subtitle: 'Fundamentos y Desplazamientos Iniciales',
            color: '#4CAF50',
            description:
              'En esta etapa se establecen los cimientos del control de manos y se introducen los primeros desplazamientos de rudimentos estándar.',
            lessons: [
              { name: 'Calentamiento (Warm Up)', pages: 'Pág. 1', description: 'Ejercicios de calentamiento inicial.' },
              { name: 'Flam Paradiddles desplazados', pages: 'Pág. 3', description: 'Desplazamientos de flam paradiddles.' },
              { name: 'Flam Taps y Flam Paradiddles desplazados', pages: 'Pág. 4', description: 'Combinaciones de flam taps con paradiddles.' },
              { name: 'Variaciones de Flam Tap', pages: 'Pág. 5', description: 'Diferentes variaciones del flam tap.' },
              { name: 'Variaciones de Flam Tap revertidos', pages: 'Pág. 7', description: 'Flam taps con inversión de digitación.' },
              { name: 'Flam Taps con diferentes stickings', pages: 'Pág. 9', description: 'Flam taps con digitaciones variadas.' },
              { name: 'Fladiflaflas (Pataflaflas) desplazados', pages: 'Pág. 11', description: 'Desplazamientos de fladiflaflas.' },
              { name: 'Fladiflaflas y Flam Paradiddles desplazados', pages: 'Pág. 12', description: 'Combinación de ambos rudimentos desplazados.' },
            ],
          },
          {
            level: '2. Nivel Intermedio',
            subtitle: 'Rudimentos Suizos y Combinaciones',
            color: '#FF9800',
            description:
              'Este nivel introduce rudimentos de estilo suizo y combinaciones que exigen mayor coordinación y comprensión del "groove".',
            lessons: [
              { name: 'Swiss Flamadiddles (Single Flammed Mills) desplazados', pages: 'Pág. 14', description: 'Rudimentos suizos con desplazamientos.' },
              { name: 'Combo de Swiss Flam Accents y Swiss Flamadiddle desplazado', pages: 'Pág. 15', description: 'Combinaciones de rudimentos suizos.' },
              { name: 'Grooves de Swiss Flam Accent y Swiss Flamadiddle', pages: 'Pág. 16', description: 'Aplicación en grooves.' },
              { name: 'Flam Accents desplazados', pages: 'Pág. 17', description: 'Desplazamientos de flam accents.' },
              { name: 'Flam Accents con Drags', pages: 'Pág. 18', description: 'Flam accents combinados con drags.' },
              { name: 'Swiss Flam Accents (Swiss Triplets) desplazados', pages: 'Pág. 19', description: 'Swiss triplets con desplazamientos.' },
              { name: 'Swiss Flam Accents con Drags desplazados', pages: 'Pág. 20', description: 'Combinación avanzada con drags.' },
              { name: 'Fladiflaflas con Flam Accents desplazados', pages: 'Pág. 21', description: 'Híbridos de fladiflaflas y flam accents.' },
              { name: 'Single Drags con Flams y sus desplazamientos', pages: 'Págs. 23-25', description: 'Drags simples con flams desplazados.' },
            ],
          },
          {
            level: '3. Nivel Avanzado',
            subtitle: 'Maestría, Rolls y Híbridos Complejos',
            color: '#F44336',
            description:
              'Se enfoca en redobles de seis golpes, ratamacues y variaciones de "autor" con digitaciones altamente complejas y desplazamientos sutiles.',
            lessons: [
              { name: 'What Are These? (Ejercicios de exploración técnica)', pages: 'Pág. 26', description: 'Ejercicios de exploración y experimentación.' },
              { name: 'Six-Stroke Roll desplazado y variaciones', pages: 'Págs. 28-31', description: 'Redoble de 6 golpes con desplazamientos.' },
              { name: 'Flam Ratamacue desplazado', pages: 'Pág. 32', description: 'Ratamacue con flam desplazado.' },
              { name: 'Flamanucci\'s (variación de Gadd) desplazados y combos', pages: 'Págs. 33-34', description: 'Variación original de Steve Gadd.' },
              { name: 'Flamigos', pages: 'Pág. 35', description: 'Rudimento híbrido de Gadd.' },
              { name: 'Fladiflaflas alternados desplazados', pages: 'Pág. 37', description: 'Fladiflaflas con alternancia desplazada.' },
              { name: 'Flam Chowder con Flams extra', pages: 'Pág. 38', description: 'Variación compleja con flams adicionales.' },
              { name: 'Flamalittles y Flamalots desplazados', pages: 'Págs. 39-40', description: 'Variaciones de autor con desplazamientos.' },
              { name: 'Enfriamiento (Warm Down)', pages: 'Pág. 41', description: 'Ejercicios de enfriamiento final.' },
            ],
          },
        ],
      },

      {
        id: 'advanced-funk-studies',
        title: 'Advanced Funk Studies - Rick Latham',
        subtitle: 'Patrones Creativos en Estilos Funk Modernos',
        description:
          '🎸 FUNK AVANZADO: Técnicas de funk y fusion con patrones de hi-hat, fills y transcripciones de bateristas legendarios.',
        levels: [
          {
            level: 'Nivel Básico',
            subtitle: 'Fundamentos del Funk',
            color: '#4CAF50',
            description: 'Bases del funk: ghost notes, hi-hat patterns y groove básico.',
            lessons: [
              { name: 'Hi-Hat Patterns', pages: 'Págs. 6-15', description: 'Patrones fundamentales de hi-hat.' },
              { name: 'Ghost Notes', pages: 'Págs. 16-25', description: 'Notas fantasma en funk.' },
              { name: 'Funk Grooves', pages: 'Págs. 26-35', description: 'Grooves esenciales de funk.' },
            ],
          },
          {
            level: 'Nivel Intermedio',
            subtitle: 'Técnicas Avanzadas',
            color: '#FF9800',
            description: 'Técnicas sofisticadas de hi-hat y coordinación compleja.',
            lessons: [
              { name: 'Hi-Hat Openings', pages: 'Págs. 36-48', description: 'Técnicas avanzadas de apertura.' },
              { name: 'Linear Patterns', pages: 'Págs. 49-60', description: 'Patrones lineales de funk.' },
              { name: 'Funk Fills', pages: 'Págs. 61-72', description: 'Fills funky con ghost notes.' },
              { name: 'Transcripciones 1', pages: 'Págs. 73-85', description: 'Steve Gadd y David Garibaldi.' },
            ],
          },
          {
            level: 'Nivel Avanzado',
            subtitle: 'Maestría del Funk',
            color: '#F44336',
            description: 'Conceptos avanzados del funk y fusion contemporáneo.',
            lessons: [
              { name: 'Fusion Grooves', pages: 'Págs. 86-100', description: 'Grooves de fusion.' },
              { name: 'Odd Meter Funk', pages: 'Págs. 101-115', description: 'Funk en compases irregulares.' },
              { name: 'Transcripciones 2', pages: 'Págs. 116-130', description: 'Harvey Mason y Peter Erskine.' },
              { name: 'Solos Avanzados', pages: 'Págs. 131-145', description: 'Solos completos de funk.' },
            ],
          },
        ],
      },

      {
        id: 'future-sounds',
        title: 'Future Sounds - David Garibaldi',
        subtitle: 'Conceptos Contemporáneos de Drumset',
        description:
          '🚀 FUNK/JAZZ FUSION: Técnica revolucionaria de David Garibaldi con el concepto "Two Sound Level" y patrones lineales.',
        levels: [
          {
            level: 'Nivel Básico',
            subtitle: 'Two Sound Level',
            color: '#4CAF50',
            description: 'Concepto fundamental de dos niveles de sonido.',
            lessons: [
              { name: 'Concepto Two Sound', pages: 'Págs. 4-10', description: 'Dos niveles dinámicos: fuerte y suave.' },
              { name: 'Ejercicios de Desarrollo', pages: 'Págs. 11-18', description: 'Control dinámico básico.' },
              { name: 'Patrones Lineales', pages: 'Págs. 19-25', description: 'Patrones lineales básicos.' },
            ],
          },
          {
            level: 'Nivel Intermedio',
            subtitle: 'Four-Bar Patterns',
            color: '#FF9800',
            description: 'Patrones de cuatro compases y groove playing.',
            lessons: [
              { name: 'Four-Bar Patterns', pages: 'Págs. 26-35', description: 'Frases de cuatro compases.' },
              { name: 'Groove Playing', pages: 'Págs. 36-45', description: 'Mantener el groove sólido.' },
              { name: 'Funk Avanzado', pages: 'Págs. 46-52', description: 'Técnicas avanzadas de funk.' },
            ],
          },
          {
            level: 'Nivel Avanzado',
            subtitle: 'Groove Studies',
            color: '#F44336',
            description: 'Estudios de groove y permutaciones.',
            lessons: [
              { name: '15 Groove Studies', pages: 'Págs. 53-60', description: 'Estudios completos de groove.' },
              { name: '17 Permutation Studies', pages: 'Págs. 61-68', description: 'Estudios de permutación.' },
              { name: 'Aplicación Musical', pages: 'Págs. 69-75', description: 'Aplicación en situaciones reales.' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 3,
    title: 'Independencia y Coordinación',
    subtitle: 'Ejercicios donde las 4 extremidades hacen figuras distintas',
    color: '#4caf50',
    description: {
      intro: 'El reto de la batería es que cada extremidad haga algo distinto sin que una interfiera con la otra.',
      sections: [
        {
          title: '🔄 Ostinatos: La Clave de la Independencia',
          intro: 'En la batería, un ostinato es un patrón rítmico que se repite de forma persistente y constante con una o varias extremidades, mientras las otras ejecutan variaciones o improvisaciones encima. La palabra viene del italiano y significa "obstinado" o "terco". Es la herramienta definitiva para desarrollar la independencia total.',
          subsections: [
            {
              subtitle: '🎯 ¿Cómo funcionan los ostinatos?',
              text: 'El objetivo es que una parte de tu cuerpo entre en "piloto automático". Cuando el patrón es tan sólido que no tienes que pensar en él, liberas espacio mental para que las otras extremidades hagan figuras más complejas.'
            }
          ]
        },
        {
          title: '📚 Stick Control',
          intro: 'Es "la biblia" del baterista. Aplica las combinaciones de manos del libro a diferentes partes del kit (por ejemplo, mano derecha en el floor tom y mano izquierda en la caja).'
        },
        {
          title: '➖ Patrones Lineales (Linear Drumming)',
          intro: 'Los patrones lineales (o linear drumming) son aquellos en los que no se toca más de una pieza de la batería al mismo tiempo. Es decir, no hay notas que coincidan verticalmente; es una fila de notas una tras otra, como una línea de puntos. Esta técnica es la base del Gospel Chops, el Funk moderno y el Rock Progresivo. Artistas como David Garibaldi (Tower of Power), Steve Gadd o Benny Greb son maestros de este concepto.',
          subsections: [
            {
              subtitle: '✨ ¿Por qué practicar patrones lineales?',
              items: [
                'Claridad: Al no haber golpes simultáneos (como bombo y platillo a la vez), el sonido es muy limpio y definido',
                'Independencia: Te obliga a tener un control total sobre cada extremidad por separado',
                'Creatividad en Fills: Te permite crear remates (fills) que suenan muy complejos y rápidos, pero que en realidad son combinaciones lógicas de manos y pies'
              ]
            },
            {
              subtitle: '⚡ La Regla de Oro',
              text: 'Nunca dos golpes a la vez. Si el bombo suena, las manos callan. Si la mano derecha golpea el hi-hat, la izquierda y el bombo esperan su turno.'
            },
            {
              subtitle: '🎵 Ejemplos de Combinaciones Lineales (Semicorcheas)',
              text: 'Divide el tiempo en grupos de 4 notas (1 e + a) y prueba estas secuencias distribuidas en el kit (K = Kick/Bombo, R = Derecha, L = Izquierda):',
              items: [
                'El "Gospel" Básico: R L K (Tresillo) o R L R L K K (Sextillo). Práctica: Toca R L en la caja y K (bombo) para cerrar. Repítelo aumentando la velocidad',
                'El Groove Lineal de Funk: R L K L (Mano derecha al hi-hat, izquierda a la caja, bombo, izquierda a la caja). Repite esto 4 veces para completar el compás. El truco: Pon un acento en la mano izquierda en los tiempos 2 y 4 (el backbeat)'
              ]
            },
            {
              subtitle: '🔨 Cómo construir tus propios patrones',
              text: 'Puedes usar "bloques" de notas para armar tus ritmos lineales. Los más comunes son:',
              items: [
                'Bloque de 3: R L K',
                'Bloque de 4: R L R K o R L K K',
                'Bloque de 5: R L R L K',
                'Ejercicio de orquestación: Toma el bloque de 3 (R L K) y tócalo continuamente en semicorcheas. Como es un grupo de 3 notas tocado en un ritmo de 4 (semicorcheas), el acento se irá desplazando, creando un efecto polirítmico muy interesante'
              ]
            },
            {
              subtitle: '💡 Consejos para dominar lo Lineal',
              items: [
                'Metrónomo lento: Al principio, el cerebro quiere "juntar" las notas (tocar el bombo junto con la mano). El metrónomo te ayudará a separar cada golpe',
                'Dinámicas: No toques todo al mismo volumen. Usa ghost notes (notas muy suaves) en las manos para que el patrón tenga "aire" y camine mejor',
                'Precisión: El espacio entre cada nota debe ser exactamente igual. Si una nota se amontona con la siguiente, se pierde el efecto lineal'
              ]
            }
          ]
        }
      ]
    },
    books: [
      {
        id: '4-way-coordination',
        title: '4-Way Coordination - Marvin Dahlgren & Elliot Fine',
        subtitle: 'La Biblia de la Independencia',
        description:
          '🎯 INDEPENDENCIA ABSOLUTA: Obra fundamental para el baterista que busca la independencia total de sus cuatro extremidades. Su estructura asigna la misma cantidad de trabajo a manos y pies para equilibrar su destreza.',
        levels: [
          {
            level: 'Nivel Básico',
            subtitle: 'Fundamentos Lineales y Binarios',
            color: '#4CAF50',
            description:
              'Este nivel se centra en la "Coordinación Melódica", donde el cerebro aprende a alternar entre los cuatro miembros sin que se toquen notas simultáneamente.',
            lessons: [
              {
                name: 'Corcheas y Tresillos Melódicos',
                pages: 'Págs. 4-10',
                description: 'El primer reto es mantener el flujo constante de subdivisiones mientras se cambia el origen del golpe entre manos y pies.',
              },
              {
                name: 'Solos de Corcheas',
                pages: 'Pág. 7',
                description: 'Primeras aplicaciones musicales breves de un solo plano rítmico.',
              },
              {
                name: 'Iniciación a la Armonía en Dos Partes',
                pages: 'Pág. 15',
                description: 'Aprender a tocar las manos en unísono o contrapatrón con los pies en corcheas.',
              },
            ],
          },
          {
            level: 'Nivel Intermedio',
            subtitle: 'Coordinación Multidimensional y Métricas',
            color: '#FF9800',
            description:
              'Aquí el estudiante comienza a enfrentar la simultaneidad de ritmos (Coordinación Armónica) y el control específico de la mano y el pie izquierdos.',
            lessons: [
              {
                name: 'Coordinación Armónica en Tresillos',
                pages: 'Pág. 20',
                description: 'Requiere mayor fluidez motriz al trabajar con grupos impares.',
              },
              {
                name: 'Independencia del Pie Izquierdo y Hi-Hat',
                pages: 'Págs. 28-31',
                description: 'Fundamental para establecer el "ching" del hi-hat en subdivisiones que no son solo el pulso.',
              },
              {
                name: 'Independencia en Compases de 2/4 a 6/4',
                pages: 'Págs. 32-47',
                description: 'Se introducen los "Ritmos Básicos" (Basic Rhythms) donde el pie derecho y el plato mantienen un patrón mientras el resto improvisa o rellena.',
              },
            ],
          },
          {
            level: 'Nivel Avanzado',
            subtitle: 'Independencia Total y Polirritmia',
            color: '#F44336',
            description:
              'Este nivel exige una disociación mental completa, permitiendo que cada extremidad ejecute un rol rítmico distinto sin afectar a las demás.',
            lessons: [
              {
                name: 'Ideas de 3 Tiempos en 4/4',
                pages: 'Pág. 48',
                description: 'Un concepto avanzado de fraseo que rompe la sensación del compás tradicional.',
              },
              {
                name: 'Solos de Independencia Completa',
                pages: 'Pág. 51',
                description: 'El clímax técnico del libro, donde se ejecutan múltiples líneas melódicas y armónicas a la vez.',
              },
              {
                name: 'Polirritmia Avanzada',
                pages: 'Pág. 54',
                description: 'Ejercicios de "6 contra 4", "4 contra 3" y patrones donde cada una de las 4 extremidades tiene un ritmo independiente, como el Ride en 6 contra el Pie Derecho en 4.',
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
          '🥁 MOVIMIENTO FLUIDO: Método técnico diseñado para desarrollar agilidad, velocidad y precisión al moverte por toda la batería. El libro se organiza por valores de nota, aumentando la densidad rítmica en cada parte.',
        levels: [
          {
            level: 'Nivel Básico',
            subtitle: 'Fundamentos de Desplazamiento',
            color: '#4CAF50',
            description:
              'Se enfoca en las subdivisiones más comunes, permitiendo que el estudiante desarrolle una base sólida de movimiento entre la caja y los toms.',
            lessons: [
              {
                name: 'Tresillos (Triplets) - Uno y Dos Grupos',
                pages: 'Págs. 4-11',
                description: 'Ejercicios de uno y dos grupos de tresillos. Dominio del sticking (digitación) básico y fluidez inicial del movimiento de tambor a tambor.',
              },
              {
                name: 'Semicorcheas (16th Notes) - Uno y Dos Grupos',
                pages: 'Págs. 18-23',
                description: 'Ejercicios de uno y dos grupos de semicorcheas. Desarrollo de la precisión en subdivisiones binarias.',
              },
            ],
          },
          {
            level: 'Nivel Intermedio',
            subtitle: 'Coordinación y Densidad',
            color: '#FF9800',
            description:
              'En esta etapa, la densidad rítmica aumenta significativamente, exigiendo una mayor velocidad de mano y una transición más rápida entre los distintos componentes del set.',
            lessons: [
              {
                name: 'Tresillos y Semicorcheas Extendidos',
                pages: 'Págs. 12-17, 24-35',
                description: 'Patrones de tres y cuatro grupos consecutivos, incluyendo patrones de dos compases y rellenos (fills).',
              },
              {
                name: 'Tresillos de Semicorchea (16th-Note Triplets)',
                pages: 'Págs. 36-51',
                description: 'Introducción de seis notas por tiempo, lo que requiere un control dinámico superior para mantener la precisión a velocidades moderadas y altas.',
              },
            ],
          },
          {
            level: 'Nivel Avanzado',
            subtitle: 'Facilidad Técnica Sustancial',
            color: '#F44336',
            description:
              'Este nivel representa el clímax del libro, con subdivisiones de fusas que exigen una técnica de manos refinada y una precisión absoluta en el desplazamiento.',
            lessons: [
              {
                name: 'Fusas (32nd Notes)',
                pages: 'Págs. 52-79',
                description: 'Ejecución de ocho notas por tiempo, progresando desde un solo grupo hasta cuatro grupos consecutivos, patrones de dos compases y rellenos de alta velocidad. El autor sugiere practicar páginas enteras sin detenerse y sustituir las notas de caja o toms por el bombo para desarrollar una independencia total de las cuatro extremidades.',
              },
            ],
          },
        ],
      },
      {
        id: 'the-new-breed',
        title: 'The New Breed - Gary Chester',
        subtitle: 'Sistemas de Coordinación y Ambidextría',
        description:
          '🎤 MÉTODO REVOLUCIONARIO: The New Breed de Gary Chester es considerado uno de los libros más importantes (y desafiantes) en la historia de la batería. No es un libro de ejercicios común; es un sistema diseñado para desarrollar la coordinación de 5 vías, la lectura y la creatividad.',
        howToUse: {
          title: '📖 Cómo Usar Este Libro',
          intro: 'Aquí tienes una guía paso a paso sobre cómo abordar este método de forma efectiva:',
          sections: [
            {
              title: '1. El Concepto: Sistemas y Melodías',
              content: 'El libro se divide esencialmente en dos partes que debes combinar:',
              points: [
                {
                  label: 'Los Sistemas (Systems)',
                  text: 'Son patrones repetitivos (ostinatos) para tres extremidades. Por ejemplo, el Sistema 1 utiliza las manos y el pie izquierdo en un patrón fijo.'
                },
                {
                  label: 'Las Melodías (Reading Pages)',
                  text: 'Son líneas rítmicas escritas en una sola línea. Estas deben ser interpretadas por la cuarta extremidad (la que quedó libre en el sistema).'
                }
              ]
            },
            {
              title: '2. La "Quinta Extremidad": La Voz',
              content: 'Este es el pilar del método de Gary Chester. Debes cantar mientras tocas.',
              points: [
                {
                  label: 'Empezar cantando el pulso',
                  text: 'Generalmente se empieza cantando el pulso (negras: 1, 2, 3, 4).'
                },
                {
                  label: 'Progresión',
                  text: 'Eventualmente, puedes cantar la melodía que estás leyendo o las subdivisiones (corcheas o semicorcheas).'
                },
                {
                  label: 'Propósito',
                  text: 'Si puedes hablar o cantar mientras tocas, significa que el ritmo está internalizado en tu cerebro y no solo en tus músculos.'
                }
              ]
            },
            {
              title: '3. Pasos para practicar una página',
              content: 'No intentes tocar todo de corrido. Hazlo así:',
              steps: [
                {
                  step: 'Paso 1: Elige un Sistema',
                  description: 'Apréndelo hasta que puedas tocarlo sin pensar y sin perder el tiempo.'
                },
                {
                  step: 'Paso 2: Canta el pulso',
                  description: 'Mientras tocas el sistema, cuenta en voz alta: "1, 2, 3, 4".'
                },
                {
                  step: 'Paso 3: Añade la lectura',
                  description: 'Toma la primera "Reading Page" y toca la melodía con la extremidad libre.'
                },
                {
                  step: 'Paso 4: Repetición',
                  description: 'Gary Chester recomendaba tocar cada compás de la melodía 20 veces (o hasta que desaparezca la tensión) antes de pasar al siguiente.'
                }
              ]
            },
            {
              title: '4. Reglas de Oro de Chester',
              rules: [
                {
                  rule: 'No cruces las manos',
                  description: 'El libro promueve el estilo open-handed (mano derecha en el ride/tom de la derecha, mano izquierda en el hi-hat/tom de la izquierda). Esto elimina la limitación física de cruzar los brazos.'
                },
                {
                  rule: 'Liderazgo de manos',
                  description: 'Practica los sistemas liderando tanto con la mano derecha como con la izquierda para eliminar tu "lado débil".'
                },
                {
                  rule: 'Velocidad',
                  description: 'Empieza muy lento. Se recomienda empezar a 40-60 BPM. La precisión y el control son más importantes que la velocidad.'
                },
                {
                  rule: 'Postura',
                  description: 'Mantente relajado. Si sientes tensión, detente, respira y baja el tempo.'
                }
              ]
            },
            {
              title: '5. ¿Por dónde empezar?',
              content: 'Si es tu primera vez con el libro, empieza con el Sistema 1 y la Reading Page 1.',
              points: [
                {
                  label: 'Sistema 1',
                  text: 'En el Sistema 1, el bombo es la extremidad libre que toca la melodía.'
                },
                {
                  label: 'Progresión',
                  text: 'Una vez que domines la página completa con el bombo, cambia al siguiente sistema donde la melodía la toque la mano izquierda, y así sucesivamente.'
                },
                {
                  label: 'Nota importante',
                  text: 'Este libro puede ser frustrante al principio porque "rompe" tu cerebro. Tómatelo con calma; es un método de estudio de por vida, no algo para terminar en un mes.'
                }
              ]
            }
          ]
        },
        levels: [
          {
            level: 'Nivel Básico',
            subtitle: 'Coordinación y Fundamentos',
            color: '#4CAF50',
            description:
              'El enfoque inicial es romper la dependencia de la mano fuerte y establecer el equilibrio en el centro del cuerpo.',
            lessons: [
              {
                name: 'Conceptos: Parte 1',
                pages: 'Págs. 4-8',
                description: 'Desarrollo de extremidades, conducción con mano derecha/izquierda, técnica de bombo, postura y el concepto de "Derechos Territoriales" (Territorial Rights). Incluye el tiempo (on top, middle, behind), el groove y la importancia vital de cantar mientras se toca.',
              },
              {
                name: 'Introducción a los Sistemas',
                pages: 'Pág. 9',
                description: 'Instrucciones para memorizar los patrones y aplicarlos a las lecturas.',
              },
              {
                name: 'Sistemas 1 al 10',
                pages: 'Págs. 10-13',
                description: 'Ostinatos básicos de hi-hat y caja donde la melodía se lee exclusivamente en el bombo.',
              },
              {
                name: 'Lectura I-A y I-B',
                pages: 'Págs. 14-15',
                description: 'Patrones rítmicos más sencillos para empezar a coordinar. Reto clave: Aprender a cantar el pulso de negra (clic) mientras se ejecutan los sistemas.',
              },
            ],
          },
          {
            level: 'Nivel Intermedio',
            subtitle: 'Independencia y Voz',
            color: '#FF9800',
            description:
              'Se introducen patrones que exigen una distribución más compleja de las notas entre los platos y los tambores.',
            lessons: [
              {
                name: 'Sistemas 11 al 39',
                pages: 'Págs. 10-13',
                description: 'Incorporan aperturas de hi-hat, notas fantasmas y desplazamientos rítmicos.',
              },
              {
                name: 'Lectura II a V',
                pages: 'Págs. 16-23',
                description: 'Melodías con mayor síncopa que deben masterizarse tanto en el bombo como en la caja.',
              },
              {
                name: 'Canto Avanzado',
                pages: 'Varios',
                description: 'Cantar la línea de la caja o la melodía principal mientras los cuatro miembros tocan el sistema.',
              },
              {
                name: 'Sistemas Compuestos',
                pages: 'Págs. 38-43',
                description: 'El estudiante comienza a diseñar sus propios patrones mezclando elementos de distintas páginas. Cómo crear sistemas propios mezclando patrones existentes.',
              },
              {
                name: 'Conceptos: Parte 2',
                pages: 'Págs. 36-37',
                description: 'Concentración, confianza, afinación, lectura e interpretación y desarrollo de la creatividad.',
              },
            ],
          },
          {
            level: 'Nivel Avanzado',
            subtitle: 'Ambidextría Total y Lectura Multilínea',
            color: '#F44336',
            description:
              'Este nivel prepara al baterista para leer cualquier partitura de estudio, por compleja que sea, sin dudar en la ejecución.',
            lessons: [
              {
                name: 'Sistemas Avanzados (1a-10a)',
                pages: 'Págs. 24-25',
                description: 'Requieren alternar manos entre hi-hat y caja o mover melodías a través de los tom-toms de manera lineal. Introducción y notación de los 10 sistemas avanzados.',
              },
              {
                name: 'Lectura Avanzada',
                pages: 'Págs. 26-35',
                description: 'Ejercicios del 1 al 10 que presentan retos de síncopa extrema en frases de dos compases. 10 ejercicios de lectura de alta complejidad.',
              },
              {
                name: 'Dominio de Derechos Territoriales',
                pages: 'Varios',
                description: 'Ejecutar todo lo anterior liderando con la mano débil (izquierda para diestros) con la misma fluidez que la fuerte.',
              },
              {
                name: 'Independencia del "Quinto Miembro"',
                pages: 'Varios',
                description: 'Capacidad de cantar cualquier subdivisión (el pulso, el contratiempo o la melodía) de forma independiente a lo que tocan las extremidades.',
              },
              {
                name: 'Grooves de Gary',
                pages: 'Págs. 44-45',
                description: '20 ejemplos de grooves personales basados en su técnica.',
              },
              {
                name: 'Aplicaciones',
                pages: 'Pág. 46',
                description: 'Ejemplos reales de Dave Weckl y Howard Joines aplicando el método.',
              },
            ],
          },
        ],
      },

      {
        id: 'drumset-musician',
        title: 'The Drumset Musician - Rod Morgenstein & Rick Mattingly',
        subtitle: 'Enfoque Musical para Aprender Batería',
        description:
          '🎵 ENFOQUE MUSICAL: Método que enseña cientos de beats y fills prácticos, aplicando grooves a canciones reales.',
        levels: [
          {
            level: 'Nivel Básico',
            subtitle: 'Fundamentos y Beats',
            color: '#4CAF50',
            description: 'Beats fundamentales y aplicación en canciones.',
            lessons: [
              { name: 'Configuración', pages: 'Págs. 6-12', description: 'Setup y postura correcta.' },
              { name: 'Beats de Rock', pages: 'Págs. 13-25', description: 'Patrones fundamentales de rock.' },
              { name: 'Fills Simples', pages: 'Págs. 26-35', description: 'Construcción de fills básicos.' },
              { name: 'Canciones', pages: 'Págs. 36-45', description: 'Aplicación en canciones completas.' },
            ],
          },
          {
            level: 'Nivel Intermedio',
            subtitle: 'Estilos Variados',
            color: '#FF9800',
            description: 'Diferentes estilos musicales y versatilidad.',
            lessons: [
              { name: 'Funk y R&B', pages: 'Págs. 46-60', description: 'Grooves de funk con ghost notes.' },
              { name: 'Blues y Shuffle', pages: 'Págs. 61-72', description: 'Patrones de blues y shuffle.' },
              { name: 'Country', pages: 'Págs. 73-85', description: 'Beats de country.' },
              { name: 'Coordinación', pages: 'Págs. 86-100', description: 'Independencia avanzada.' },
            ],
          },
          {
            level: 'Nivel Avanzado',
            subtitle: 'Maestría Estilística',
            color: '#F44336',
            description: 'Estilos complejos y creatividad personal.',
            lessons: [
              { name: 'Jazz y Swing', pages: 'Págs. 101-120', description: 'Patrones de jazz y comping.' },
              { name: 'Latin', pages: 'Págs. 121-135', description: 'Ritmos latinos variados.' },
              { name: 'Odd Time', pages: 'Págs. 136-150', description: 'Compases irregulares.' },
              { name: 'Desarrollo Personal', pages: 'Págs. 151-165', description: 'Crear tu propio estilo.' },
            ],
          },
        ],
      },

      {
        id: 'gary-chaffee-linear',
        title: 'Linear Time Playing - Gary Chaffee',
        subtitle: 'Patrones Lineales y Coordinación',
        description:
          '📏 PATRONES LINEALES: Sistema revolucionario de patrones lineales donde solo una extremidad toca a la vez.',
        levels: [
          {
            level: 'Nivel Básico',
            subtitle: 'Fundamentos Lineales',
            color: '#4CAF50',
            description: 'Introducción a los conceptos lineales básicos.',
            lessons: [
              { name: 'Concepto Linear', pages: 'Págs. 4-10', description: 'Qué son los patrones lineales.' },
              { name: 'Patrones de 2 Voces', pages: 'Págs. 11-20', description: 'Combinaciones de dos extremidades.' },
              { name: 'Aplicación Básica', pages: 'Págs. 21-30', description: 'Grooves lineales simples.' },
            ],
          },
          {
            level: 'Nivel Intermedio',
            subtitle: 'Patrones de 3 Voces',
            color: '#FF9800',
            description: 'Combinaciones de tres extremidades.',
            lessons: [
              { name: 'Patrones de 3 Voces', pages: 'Págs. 31-45', description: 'Tres extremidades lineales.' },
              { name: 'Grooves Intermedios', pages: 'Págs. 46-60', description: 'Aplicación en grooves.' },
              { name: 'Fills Lineales', pages: 'Págs. 61-70', description: 'Fills con concepto linear.' },
            ],
          },
          {
            level: 'Nivel Avanzado',
            subtitle: 'Patrones de 4 Voces',
            color: '#F44336',
            description: 'Coordinación completa de cuatro extremidades.',
            lessons: [
              { name: 'Patrones de 4 Voces', pages: 'Págs. 71-90', description: 'Cuatro extremidades lineales.' },
              { name: 'Grooves Complejos', pages: 'Págs. 91-105', description: 'Grooves lineales avanzados.' },
              { name: 'Aplicación Musical', pages: 'Págs. 106-120', description: 'Uso en contextos reales.' },
            ],
          },
        ],
      },

      {
        id: 'mike-johnston-linear',
        title: 'Linear Drumming - Mike Johnston',
        subtitle: 'Sistema Moderno de Patrones Lineales',
        description:
          '⚡ LINEAR MODERNO: Enfoque contemporáneo de patrones lineales con aplicaciones en rock, funk y metal.',
        levels: [
          {
            level: 'Nivel Básico',
            subtitle: 'Introducción Linear',
            color: '#4CAF50',
            description: 'Fundamentos del drumming linear moderno.',
            lessons: [
              { name: 'Concepto Linear', pages: 'Págs. 4-12', description: 'Introducción al concepto.' },
              { name: 'Patrones Básicos', pages: 'Págs. 13-25', description: 'Patrones lineales simples.' },
              { name: 'Grooves Iniciales', pages: 'Págs. 26-35', description: 'Primeros grooves lineales.' },
            ],
          },
          {
            level: 'Nivel Intermedio',
            subtitle: 'Desarrollo Linear',
            color: '#FF9800',
            description: 'Patrones más complejos y aplicaciones.',
            lessons: [
              { name: 'Patrones Intermedios', pages: 'Págs. 36-50', description: 'Combinaciones más complejas.' },
              { name: 'Grooves de Rock', pages: 'Págs. 51-65', description: 'Aplicación en rock.' },
              { name: 'Grooves de Funk', pages: 'Págs. 66-75', description: 'Aplicación en funk.' },
            ],
          },
          {
            level: 'Nivel Avanzado',
            subtitle: 'Maestría Linear',
            color: '#F44336',
            description: 'Patrones avanzados y creatividad.',
            lessons: [
              { name: 'Patrones Avanzados', pages: 'Págs. 76-95', description: 'Combinaciones complejas.' },
              { name: 'Metal Linear', pages: 'Págs. 96-110', description: 'Aplicación en metal.' },
              { name: 'Creatividad', pages: 'Págs. 111-125', description: 'Crear tus propios patrones.' },
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
    description: {
      intro: 'Es común que el pie izquierdo (hi-hat) sea el más débil. Estos ejercicios buscan nivelarlo con el derecho.',
      sections: [
        {
          title: '👟 Técnicas Fundamentales',
          items: [
            'Talón arriba vs. Talón abajo: Domina ambas técnicas. El talón abajo da más control dinámico; el talón arriba da más potencia y velocidad',
            'Dobles con el pie: Practica el golpe de "deslizamiento" (slide) o el movimiento de punta-talón para lograr ráfagas rápidas en el bombo'
          ]
        },
        {
          title: '⚡ Técnicas de Pies de Alta Velocidad',
          items: [
            'Swivel Technique (Giro): Mover el talón de lado a lado para lograr ráfagas de doble bombo a velocidades superiores a 200 BPM',
            'Heel-Toe (Punta-Tacón): Dominar el doble golpe por movimiento de pie para ejecutar ráfagas de dos notas instantáneas, esencial para el Funk y el Metal',
            'Control de Hi-Hat: Practica abrir y cerrar el hi-hat en subdivisiones de semicorcheas mientras tocas un patrón lineal en el resto del kit'
          ]
        }
      ]
    },
    books: [
      {
        id: 'bass-drum-control',
        title: 'Bass Drum Control - Colin Bailey',
        subtitle: 'Técnica, Control y Velocidad del Pedal',
        description:
          '👟 DOMINIO DEL PEDAL: Método clásico diseñado específicamente para desarrollar la técnica, el control, la flexibilidad y la velocidad del pie en el bombo.',
        levels: [
          {
            level: 'Nivel Básico',
            subtitle: 'Fundamentos y Control Inicial',
            color: '#4CAF50',
            description:
              'Se enfoca en la mecánica del pie, lectura básica y la inserción de golpes individuales de bombo en subdivisiones regulares.',
            lessons: [
              {
                name: 'Prefacio y Técnica del "Sweet Spot" del Pedal',
                pages: 'Pág. 2',
                description: 'Explicación de cómo tocar los ejercicios y formas alternativas de practicarlos',
              },
              {
                name: 'Control Development (Desarrollo de Control)',
                pages: 'Pág. 3',
                description: 'Ejercicios básicos de negras, corcheas, tresillos y semicorcheas para calentar y conocer el pedal',
              },
              {
                name: 'Accents (Acentos)',
                pages: 'Pág. 4',
                description: 'Patrones básicos de bombo aplicando matices dinámicos (golpes fuertes y suaves)',
              },
              {
                name: 'Single Bass Drum Beats (Golpes de Bombo Sencillos)',
                pages: 'Págs. 5-6 (mitad superior)',
                description: 'Coordinación de un solo golpe de bombo intercalado con patrones de semicorcheas en las manos',
              },
            ],
          },
          {
            level: 'Nivel Intermedio',
            subtitle: 'Agilidad, Combinaciones y Rudimentos',
            color: '#FF9800',
            description:
              'Aumenta la exigencia física al agrupar múltiples golpes de bombo seguidos y traslada los rudimentos tradicionales (que usualmente se hacen con las manos) a los pies.',
            lessons: [
              {
                name: 'Double Bass Drum Beats (Golpes de Bombo Dobles)',
                pages: 'Pág. 6 (mitad inferior) y Pág. 7',
                description: 'Ejecución de dos golpes rápidos de bombo combinados con manos',
              },
              {
                name: 'Single and Double Combined (Sencillos y Dobles Combinados)',
                pages: 'Págs. 8-9',
                description: 'Variaciones que mezclan las páginas anteriores para generar reflejos rápidos',
              },
              {
                name: 'Triple Bass Drum Beats (Golpes de Bombo Triples)',
                pages: 'Pág. 10',
                description: 'Grupos de tres golpes seguidos',
              },
              {
                name: 'Variaciones de 1, 2 y 3 Golpes',
                pages: 'Págs. 11-12',
                description: 'Combinaciones de 1, 2 y 3 golpes de bombo junto con las manos',
              },
              {
                name: 'Quadruple Bass Drum Beats (Golpes de Bombo Cuádruples)',
                pages: 'Pág. 13',
                description: 'Grupos de cuatro golpes seguidos',
              },
              {
                name: 'Ejercicios Rudimentales',
                pages: 'Pág. 20',
                description: 'Aplicación de Paradiddles simples, dobles y triples, además de Ruffs de 4 y 5 golpes, y Flams simples',
              },
              {
                name: 'Rudimentos Avanzados',
                pages: 'Pág. 21',
                description: 'Continuación de rudimentos con dobles y triples Flams, Drags simples, dobles y triples, finalizando con el redoble largo (The Long Roll)',
              },
            ],
          },
          {
            level: 'Nivel Avanzado',
            subtitle: 'Resistencia, Polirritmia, Independencia y Musicalidad',
            color: '#F44336',
            description:
              'Aquí se lleva la técnica al límite con largas cadenas de golpes, desplazamientos rítmicos complejos e independencia (contrapunto), culminando en su aplicación en solos para la batería completa.',
            lessons: [
              {
                name: 'Five Bass Drum Beats (Cinco Golpes de Bombo)',
                pages: 'Pág. 14',
                description: 'Cinco golpes de bombo seguidos',
              },
              {
                name: 'Six and Seven Bass Drum Beats (Seis y Siete Golpes de Bombo)',
                pages: 'Pág. 15',
                description: 'Seis y siete golpes de bombo seguidos',
              },
              {
                name: 'Eight Bass Drum Beats (Ocho Golpes de Bombo)',
                pages: 'Pág. 16',
                description: 'Ocho golpes de bombo seguidos',
              },
              {
                name: 'Endurance Exercise (Ejercicio de Resistencia)',
                pages: 'Pág. 17',
                description: 'Progresión continua que va desde 4 hasta 15 golpes seguidos de bombo',
              },
              {
                name: 'Sixteenth Note Patterns 1 y 2 (Patrones de Semicorcheas)',
                pages: 'Págs. 18-19',
                description: 'Patrones rítmicos muy avanzados con desplazamientos de acentos y notas fantasma',
              },
              {
                name: 'Combination Triplets (Tresillos de Combinación)',
                pages: 'Pág. 22 (superior)',
                description: 'Tresillos de combinación',
              },
              {
                name: 'Four Bar Exercises (Ejercicios de 4 Compases)',
                pages: 'Págs. 22 (inferior), 23-24',
                description: 'Ejercicios de 4 compases basados en fraseos de tresillos continuos',
              },
              {
                name: 'Two Bar Exercises (Ejercicios de 2 Compases)',
                pages: 'Pág. 25',
                description: 'Ejercicios de 2 compases',
              },
              {
                name: 'Contrapuntal Exercises (Ejercicios Contrapuntísticos)',
                pages: 'Págs. 26-27',
                description: 'Trabajo extremo de independencia donde el bombo toca figuras que se cruzan con el ritmo de la mano en el ride/charles',
              },
              {
                name: '16th Note Exercises with Tom-Toms (Ejercicios de Semicorcheas con Toms)',
                pages: 'Pág. 28',
                description: 'Expansión de los ejercicios de bombo y caja añadiendo los toms (Tom 1, Tom 2 y Floor Tom)',
              },
              {
                name: 'Four Bar Solos - Funk Style (Solos de 4 Compases - Estilo Funk)',
                pages: 'Pág. 29',
                description: 'Aplicación de todo el control adquirido en solos cortos de estilo funk',
              },
              {
                name: 'Triplet Solo (Solo de Tresillos)',
                pages: 'Pág. 30',
                description: 'Un solo completo basado en subdivisiones de tresillo a lo largo de toda la batería',
              },
              {
                name: 'Solo on "Agitation" (Solo sobre "Agitación")',
                pages: 'Págs. 31-33',
                description: 'Una transcripción de un solo completo estilo jazz/fusión que sirve como prueba final del control del bombo',
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
    title: 'Polirritmias',
    subtitle: 'Múltiples Ritmos Simultáneos',
    color: '#9c27b0',
    description: {
      intro: 'Es la ejecución de dos o más ritmos diferentes que tienen la misma duración total, pero distintas subdivisiones. Se expresan como una razón X:Y (se lee "X contra Y").',
      concepts: [
        {
          title: '🎵 1. ¿Qué es una Polirritmia?',
          content: 'Es la ejecución de dos o más ritmos diferentes que tienen la misma duración total, pero distintas subdivisiones.',
          examples: [
            {
              ratio: '3:2 (Tres contra dos)',
              description: 'Tocas 3 notas en el mismo espacio de tiempo en el que tocarías 2. Es la base de la música afro-cubana y el jazz.',
            },
            {
              ratio: '4:3 (Cuatro contra tres)',
              description: 'Tocas 4 notas en el espacio de 3. Es un nivel de dificultad superior que genera mucha tensión rítmica.',
            },
          ],
        },
        {
          title: '🔄 2. Bitritmia (Bi-rhythm)',
          content: 'A diferencia de la polirritmia pura, la bitritmia suele referirse a mantener dos compases distintos simultáneamente.',
          points: [
            {
              label: 'Ejemplo',
              text: 'Tus pies mantienen un compás de 4/4 (bombo en negras) mientras tus manos tocan un patrón en 3/4.',
            },
            {
              label: 'Para qué sirve',
              text: 'Para que tu cuerpo aprenda que el "1" de las manos no siempre tiene que coincidir con el "1" de los pies.',
            },
          ],
        },
        {
          title: '🗣️ 3. El Método de la "Frase Mnemotécnica"',
          content: 'Para aprender a sentir la polirritmia antes de contarla matemáticamente, los bateristas usamos frases que imitan el ritmo.',
          table: [
            {
              polyrhythm: '3:2',
              phrase: '"Tres por dos" o "Pán-ca-se-ro"',
              rhythm: '1 & 2 & 3',
            },
            {
              polyrhythm: '4:3',
              phrase: '"Pass the gold-en but-ter"',
              rhythm: '1 . . 2 . . 3 . . 4',
            },
          ],
        },
      ],
      exercises: {
        title: '🥁 4. Ejercicios de Práctica en el Drumset',
        intro: 'Para que esto no se quede solo en tu mente, llévalo a las extremidades:',
        levels: [
          {
            level: 'Nivel Inicial: La Hemiola (3:2)',
            steps: [
              'Pies: Bombo y Hi-Hat en negras constantes (1, 2, 3, 4).',
              'Manos: Toca tresillos de negra.',
            ],
            challenge: 'Haz que los tresillos se sientan fluidos sin que el bombo se "puerque" (se desvíe).',
          },
          {
            level: 'Nivel Intermedio: Desplazamiento (4:3)',
            steps: [
              'Mano derecha: Toca corcheas en el Ride.',
              'Mano izquierda: Toca acentos cada 3 corcheas en la caja.',
            ],
            challenge: 'Los acentos irán rotando por todo el compás, creando una polirritmia implícita de 4:3.',
          },
          {
            level: 'Nivel Avanzado: Modulación Métrica',
            steps: [
              'Es el arte de cambiar el tempo real de la canción usando una polirritmia como puente.',
              'Tocas un 3:2 y, de repente, haces que el "3" se convierta en tu nuevo "1".',
            ],
            challenge: 'La banda parecerá haber acelerado mágicamente, pero tú tienes el control total.',
          },
        ],
      },
      tips: {
        title: '💡 5. Consejos para tu Guía de Práctica',
        advice: [
          {
            label: 'Usa el "Metrónomo de subdivisión"',
            text: 'Pon el metrónomo para que marque las corcheas o tresillos mientras intentas la polirritmia. Te dirá exactamente dónde estás fallando.',
          },
          {
            label: 'Canta una parte, toca la otra',
            text: 'Si puedes cantar el pulso de negras mientras tus manos tocan grupos de 5, ya lo tienes dominado.',
          },
          {
            label: 'Relajación',
            text: 'Las polirritmias suelen causar tensión mental que se traduce en rigidez física. Si te trabas, baja la velocidad a 40 BPM.',
          },
        ],
        proTip: 'Libros como Advanced Rhythmic Concepts de Pete Magadini son la biblia para este paso. Si dominas el 3:2 y el 4:3, el siguiente paso es el 5:4 (el mundo de Vinnie Colaiuta).',
      },
    },
    books: [
      {
        id: 'polyrhythms-musician',
        title: 'Polyrhythms: The Musician\'s Guide - Peter Magadini',
        subtitle: 'Guía Completa de Polirritmias',
        description:
          '🔢 MAESTRÍA POLIRÍTMICA: El mejor libro sobre polirritmias con solos y ejercicios para todos los instrumentistas.',
        levels: [
          {
            level: 'Nivel Básico',
            subtitle: 'Fundamentos Polirrítmicos',
            color: '#4CAF50',
            description: 'Conceptos básicos de polirritmias y aplicación.',
            lessons: [
              { name: 'Introducción', pages: 'Págs. 6-15', description: 'Qué son las polirritmias: 2 sobre 3, 3 sobre 2.' },
              { name: '3 sobre 4', pages: 'Págs. 16-25', description: 'La polirritmia más común.' },
              { name: '4 sobre 3', pages: 'Págs. 26-35', description: 'Inversión del concepto anterior.' },
            ],
          },
          {
            level: 'Nivel Intermedio',
            subtitle: 'Ratios Complejos',
            color: '#FF9800',
            description: 'Ratios polirrítmicos más complejos.',
            lessons: [
              { name: '5 sobre 4', pages: 'Págs. 36-48', description: 'Quintillos sobre pulso de 4/4.' },
              { name: '6 sobre 4', pages: 'Págs. 49-60', description: 'Sextillos y su relación con el pulso.' },
              { name: '7 sobre 4', pages: 'Págs. 61-75', description: 'Septillos: uno de los más desafiantes.' },
              { name: 'Aplicación al Drumset', pages: 'Págs. 76-90', description: 'Distribución entre extremidades.' },
            ],
          },
          {
            level: 'Nivel Avanzado',
            subtitle: 'Polirritmias Complejas',
            color: '#F44336',
            description: 'Ratios avanzados y composición.',
            lessons: [
              { name: 'Ratios Superiores', pages: 'Págs. 91-108', description: 'Ratios de 9, 11, 13 sobre 4.' },
              { name: 'Combinaciones', pages: 'Págs. 109-125', description: 'Múltiples ratios simultáneos.' },
              { name: 'Solos Polirrítmicos', pages: 'Págs. 126-145', description: 'Solos completos con polirritmias.' },
              { name: 'Composición', pages: 'Págs. 146-160', description: 'Uso en composición e improvisación.' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 6,
    title: 'Groove y Tiempo (Timekeeping)',
    subtitle: 'Ciencia y Arte del Ritmo',
    color: '#f44336',
    description: {
      intro: 'Aunque a menudo se usan como sinónimos, en el mundo de la batería profesional representan dos conceptos distintos pero interconectados: uno es ciencia (precisión) y el otro es arte (sensación).',
      sections: [
        {
          title: '⏱️ 1. Timekeeping (La Ciencia del Reloj)',
          subtitle: 'Un baterista profesional no solo "sigue" el metrónomo, sino que lo domina',
          content: 'Es la capacidad técnica de mantener un pulso constante y preciso a lo largo de una pieza musical.',
          image: 'https://images.unsplash.com/photo-1563330232-57114bb0823c?w=800&q=80',
          points: [
            {
              label: 'El Metrónomo "Desaparecido" (Buried Click)',
              text: 'Si tu golpe cae exactamente sobre el click del metrónomo, el sonido de la madera debería cancelar el sonido del click. Si dejas de oír el metrónomo, tu tiempo es perfecto.',
            },
            {
              label: 'Subdivisión Interna',
              text: 'El secreto del tiempo sólido es subdividir mentalmente en semicorcheas (16th notes) incluso cuando tocas ritmos lentos. Eso evita que el pulso "baile".',
            },
            {
              label: 'Práctica con el Click Desplazado',
              text: 'Pon el metrónomo para que suene solo en el "e" o en el "a" (las notas débiles de la semicorchea). Si puedes mantener el ritmo así, tu reloj interno es de acero.',
            },
          ],
        },
        {
          title: '🎵 2. Groove y el "Pocket" (El Arte del Sabor)',
          subtitle: 'El Groove es la relación entre los golpes. Es lo que hace que la gente mueva la cabeza',
          content: 'Es la sensación rítmica o el "sabor" que hace que la música invite a moverse o bailar. Mientras que el tiempo es dónde cae el golpe, el groove es cómo se siente ese golpe en relación con los demás.',
          image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80',
          points: [
            {
              label: 'El "Pocket"',
              text: 'Es el espacio entre el bombo y la caja donde el ritmo se siente "cómodo".',
            },
            {
              label: 'Micro-Timing (Adelantado vs. Atrás)',
              text: 'El groove a menudo implica jugar sutilmente con el tiempo:',
              subtypes: [
                {
                  name: 'Behind the beat (Atrás)',
                  description: 'Tocar la caja un milisegundo después del pulso. Da una sensación de peso y relajación (esencial en el Neo-Soul y Blues).',
                },
                {
                  name: 'Ahead of the beat (Adelantado)',
                  description: 'Tocar con urgencia. Da energía y empuje (Jazz rápido, Punk, Rock agresivo).',
                },
              ],
            },
          ],
        },
        {
          title: '👻 3. Notas Fantasma (Ghost Notes) y Funk Moderno',
          subtitle: 'Sin ellas, el funk suena "cuadrado"',
          content: 'Las Ghost Notes son tu herramienta principal en el Funk Moderno.',
          image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80',
          points: [
            {
              label: 'El Contraste Dinámico',
              text: 'El acento de la caja en el 2 y el 4 debe ser un "20", y las notas fantasma deben ser un "1" o "2". Si la diferencia es poca, el groove se ensucia.',
            },
            {
              label: 'Independencia de la mano izquierda',
              text: 'La mano izquierda debe ser capaz de bailar suavemente sobre el parche mientras la derecha mantiene un patrón de Hi-Hat rígido y el bombo hace síncopas pesadas.',
            },
          ],
        },
      ],
      comparison: {
        title: 'La diferencia clave: ¿Se puede tener uno sin el otro?',
        image: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=800&q=80',
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
      practiceRoutine: {
        title: '🎯 4. Rutina de Aplicación para el Paso 6',
        exercises: [
          {
            name: 'The "Gap" Click',
            description: 'Pon el metrónomo 2 compases sí y 2 compases no.',
            objective: 'Mantener el tempo sin ayuda externa.',
          },
          {
            name: 'Ghost Note Grid',
            description: 'Toca semicorcheas constantes; acentúa solo una de cada cuatro aleatoriamente.',
            objective: 'Control dinámico extremo en la caja.',
          },
          {
            name: 'Linear Funk Groove',
            description: 'Aplica patrones lineales (Paso 4) con notas fantasma.',
            objective: 'Lograr el sonido de David Garibaldi o Nate Smith.',
          },
          {
            name: 'Grabación y Análisis',
            description: 'Toca sobre un backing track y escúchate.',
            objective: 'Detectar si te apuras en los fills o si el groove es estable.',
          },
        ],
      },
      goldTips: {
        title: '💎 Tips de Oro',
        tips: [
          {
            label: 'Escucha al Bajista',
            text: 'El Groove no es solo tuyo, es una conversación con el bajo. Si tu bombo y su cuerda de Mi no están casados, no hay groove.',
          },
          {
            label: 'Menos es Más',
            text: 'A veces, quitar una nota de bombo crea más espacio y hace que el ritmo "respire" mejor. El silencio es una nota más en la batería.',
          },
          {
            label: 'La Respiración',
            text: 'No aguantes el aire durante los fills complejos. Si dejas de respirar, tus músculos se tensan y el tiempo se cae.',
          },
        ],
        reflection: 'El Paso 1 te dio la fuerza, el Paso 3 la libertad, pero el Paso 6 te da el trabajo. Un baterista con un groove increíble siempre tendrá banda, aunque no sepa hacer un sextillo a 200 BPM.',
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
    books: [
      {
        id: 'survival-guide-modern-drummer',
        title: 'Survival Guide for the Modern Drummer - Jim Riley',
        subtitle: 'Curso Intensivo en Todos los Estilos',
        description:
          '🌍 VERSATILIDAD TOTAL: 318 grooves y 124 play-alongs en todos los géneros musicales.',
        levels: [
          {
            level: 'Nivel Básico',
            subtitle: 'Estilos Fundamentales',
            color: '#4CAF50',
            description: 'Estilos básicos que todo baterista debe conocer.',
            lessons: [
              { name: 'Pop Drumming', pages: 'Cap. 1 (Págs. 10-25)', description: '45 grooves de pop.' },
              { name: 'Blues', pages: 'Cap. 2 (Págs. 26-38)', description: '32 patrones de blues.' },
              { name: 'Swing', pages: 'Cap. 3 (Págs. 39-52)', description: '28 grooves de swing.' },
            ],
          },
          {
            level: 'Nivel Intermedio',
            subtitle: 'Estilos Especializados',
            color: '#FF9800',
            description: 'Estilos que requieren técnicas específicas.',
            lessons: [
              { name: 'Country', pages: 'Cap. 4 (Págs. 53-68)', description: '38 grooves de country.' },
              { name: 'Early Rock y Motown', pages: 'Cap. 5 (Págs. 69-85)', description: '42 patrones clásicos.' },
              { name: 'Dance', pages: 'Cap. 6 (Págs. 86-100)', description: '35 grooves electrónicos.' },
            ],
          },
          {
            level: 'Nivel Avanzado',
            subtitle: 'Estilos Complejos',
            color: '#F44336',
            description: 'Estilos más desafiantes y fusión.',
            lessons: [
              { name: 'Metal', pages: 'Cap. 7 (Págs. 101-118)', description: '40 grooves de metal.' },
              { name: 'Jazz', pages: 'Cap. 8 (Págs. 119-135)', description: '38 patrones de jazz.' },
              { name: 'Latin', pages: 'Cap. 9 (Págs. 136-155)', description: '48 ritmos latinos.' },
              { name: 'Aplicación Profesional', pages: 'Cap. 10 (Págs. 156-170)', description: 'Adaptación y lectura de charts.' },
            ],
          },
        ],
      },

      {
        id: '100-grooves',
        title: '100 Grooves Every Drummer Needs to Know',
        subtitle: 'Biblioteca Esencial de Grooves',
        description:
          '📚 ENCICLOPEDIA DE GROOVES: 100 grooves esenciales que todo baterista debe dominar.',
        levels: [
          {
            level: 'Nivel Básico',
            subtitle: 'Grooves Fundamentales',
            color: '#4CAF50',
            description: 'Grooves más importantes del drumming moderno.',
            lessons: [
              { name: 'Rock Básico (1-15)', pages: 'Págs. 6-20', description: 'Grooves fundamentales de rock.' },
              { name: 'Pop y Ballads (16-25)', pages: 'Págs. 21-30', description: 'Patrones de pop y ballads.' },
              { name: 'Blues y Shuffle (26-35)', pages: 'Págs. 31-40', description: 'Grooves de blues.' },
            ],
          },
          {
            level: 'Nivel Intermedio',
            subtitle: 'Estilos Especializados',
            color: '#FF9800',
            description: 'Grooves que requieren técnicas específicas.',
            lessons: [
              { name: 'Funk y R&B (36-50)', pages: 'Págs. 41-55', description: 'Grooves de funk con ghost notes.' },
              { name: 'Jazz y Swing (51-60)', pages: 'Págs. 56-65', description: 'Patrones de jazz.' },
              { name: 'Country (61-70)', pages: 'Págs. 66-75', description: 'Grooves de country.' },
            ],
          },
          {
            level: 'Nivel Avanzado',
            subtitle: 'Grooves Modernos',
            color: '#F44336',
            description: 'Grooves contemporáneos.',
            lessons: [
              { name: 'Hip-Hop (71-80)', pages: 'Págs. 76-85', description: 'Grooves de hip-hop y trap.' },
              { name: 'Latin (81-90)', pages: 'Págs. 86-95', description: 'Ritmos latinos variados.' },
              { name: 'Progressive (91-100)', pages: 'Págs. 96-110', description: 'Grooves en compases irregulares.' },
            ],
          },
        ],
      },

      {
        id: 'groove-freedom',
        title: 'Groove Freedom - Mike Johnston',
        subtitle: 'Permutaciones y Libertad en el Groove',
        description:
          '🔓 LIBERTAD TOTAL: Sistema de permutaciones que desarrolla libertad completa dentro de cualquier groove.',
        levels: [
          {
            level: 'Nivel Básico',
            subtitle: 'Permutaciones Simples',
            color: '#4CAF50',
            description: 'Concepto de permutaciones con patrones simples.',
            lessons: [
              { name: 'Concepto', pages: 'Págs. 4-8', description: 'Introducción al sistema de permutaciones.' },
              { name: 'Una Nota', pages: 'Págs. 9-15', description: 'Desplazamiento de una nota de bombo.' },
              { name: 'Dos Notas', pages: 'Págs. 16-25', description: 'Desplazamiento de dos notas.' },
            ],
          },
          {
            level: 'Nivel Intermedio',
            subtitle: 'Tres Notas y Funky Drummer',
            color: '#FF9800',
            description: 'Aumenta la complejidad con tres notas.',
            lessons: [
              { name: 'Tres Notas', pages: 'Págs. 26-38', description: 'Desplazamiento de tres notas.' },
              { name: 'Funky Drummer', pages: 'Págs. 39-50', description: 'Aplicación al groove clásico.' },
              { name: 'Grooves Populares', pages: 'Págs. 51-60', description: 'Aplicación a grooves conocidos.' },
            ],
          },
          {
            level: 'Nivel Avanzado',
            subtitle: 'Permutaciones Complejas',
            color: '#F44336',
            description: 'Patrones avanzados y creatividad.',
            lessons: [
              { name: 'Cuatro Notas', pages: 'Págs. 61-75', description: 'Desplazamiento de cuatro notas.' },
              { name: 'Aplicación Musical', pages: 'Págs. 76-90', description: 'Uso en contextos reales.' },
              { name: 'Creatividad', pages: 'Págs. 91-105', description: 'Crear tus propias permutaciones.' },
            ],
          },
        ],
      },

      {
        id: 'mark-guiliana-creativity',
        title: 'Exploring Your Creativity - Mark Guiliana',
        subtitle: 'Desarrollo de Voz Personal',
        description:
          '🎨 CREATIVIDAD: Método para desarrollar tu voz única en la batería con conceptos modernos.',
        levels: [
          {
            level: 'Nivel Básico',
            subtitle: 'Fundamentos Creativos',
            color: '#4CAF50',
            description: 'Bases para desarrollar creatividad.',
            lessons: [
              { name: 'Concepto Creativo', pages: 'Págs. 4-15', description: 'Qué es la creatividad en batería.' },
              { name: 'Exploración Básica', pages: 'Págs. 16-30', description: 'Primeros ejercicios creativos.' },
              { name: 'Vocabulario Personal', pages: 'Págs. 31-45', description: 'Desarrollar tu vocabulario.' },
            ],
          },
          {
            level: 'Nivel Intermedio',
            subtitle: 'Técnicas Modernas',
            color: '#FF9800',
            description: 'Técnicas contemporáneas de Mark Guiliana.',
            lessons: [
              { name: 'Patrones Modernos', pages: 'Págs. 46-65', description: 'Grooves contemporáneos.' },
              { name: 'Texturas', pages: 'Págs. 66-80', description: 'Crear texturas únicas.' },
              { name: 'Improvisación', pages: 'Págs. 81-95', description: 'Desarrollo de improvisación.' },
            ],
          },
          {
            level: 'Nivel Avanzado',
            subtitle: 'Voz Personal',
            color: '#F44336',
            description: 'Desarrollar tu voz única.',
            lessons: [
              { name: 'Estilo Personal', pages: 'Págs. 96-115', description: 'Crear tu propio estilo.' },
              { name: 'Composición', pages: 'Págs. 116-130', description: 'Componer para batería.' },
              { name: 'Aplicación Musical', pages: 'Págs. 131-145', description: 'Aplicar en contextos reales.' },
            ],
          },
        ],
      },

      {
        id: 'johnny-rabb-jungle',
        title: 'Jungle/Drum \'n\' Bass - Johnny Rabb',
        subtitle: 'Para el Drumset Acústico',
        description:
          '🔊 JUNGLE/DnB: Técnicas para tocar Jungle y Drum \'n\' Bass en batería acústica.',
        levels: [
          {
            level: 'Nivel Básico',
            subtitle: 'Fundamentos de Jungle',
            color: '#4CAF50',
            description: 'Introducción al Jungle y Drum \'n\' Bass.',
            lessons: [
              { name: 'Introducción', pages: 'Págs. 4-15', description: 'Historia y conceptos básicos.' },
              { name: 'Breakbeats Básicos', pages: 'Págs. 16-30', description: 'Breakbeats fundamentales.' },
              { name: 'Patrones Simples', pages: 'Págs. 31-45', description: 'Primeros patrones de Jungle.' },
            ],
          },
          {
            level: 'Nivel Intermedio',
            subtitle: 'Técnicas de DnB',
            color: '#FF9800',
            description: 'Técnicas específicas de Drum \'n\' Bass.',
            lessons: [
              { name: 'Breakbeats Complejos', pages: 'Págs. 46-65', description: 'Breakbeats avanzados.' },
              { name: 'Velocidad', pages: 'Págs. 66-80', description: 'Técnicas de alta velocidad.' },
              { name: 'Fills de Jungle', pages: 'Págs. 81-95', description: 'Fills característicos.' },
            ],
          },
          {
            level: 'Nivel Avanzado',
            subtitle: 'Maestría de Jungle',
            color: '#F44336',
            description: 'Dominio completo del estilo.',
            lessons: [
              { name: 'Patrones Avanzados', pages: 'Págs. 96-115', description: 'Patrones complejos de DnB.' },
              { name: 'Creatividad', pages: 'Págs. 116-130', description: 'Crear tus propios grooves.' },
              { name: 'Aplicación', pages: 'Págs. 131-145', description: 'Aplicación en música real.' },
            ],
          },
        ],
      },
    ],
  },
];
