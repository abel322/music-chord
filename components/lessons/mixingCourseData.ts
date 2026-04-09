export const mixingCourseData = [
  {
    id: 1,
    title: 'Fundamentos del Sonido',
    subtitle: 'Definición y Propiedades Básicas',
    color: '#06b6d4',
    description: {
      intro: 'El sonido es una onda mecánica que se propaga a través de un medio (aire, agua, sólidos). Comprender sus propiedades fundamentales es esencial para trabajar en audio profesional.',
      fundamentals: [
        {
          title: '🌊 Onda Sonora',
          image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80',
          content: 'El sonido viaja en forma de ondas de presión que se propagan a través del aire. Estas ondas tienen características medibles que determinan cómo percibimos el sonido.',
          points: [
            {
              label: 'Propagación',
              text: 'Las ondas sonoras se mueven a aproximadamente 343 m/s en el aire a temperatura ambiente.',
            },
            {
              label: 'Compresión y Rarefacción',
              text: 'Las moléculas de aire se comprimen y expanden creando zonas de alta y baja presión.',
            },
            {
              label: 'Medio de Transmisión',
              text: 'El sonido necesita un medio físico para propagarse. No puede viajar en el vacío.',
            },
          ],
        },
        {
          title: '📊 Frecuencia (Hz)',
          image: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=800&q=80',
          content: 'La frecuencia determina el tono del sonido. Se mide en Hertz (Hz) y representa cuántos ciclos de onda ocurren por segundo.',
          points: [
            {
              label: 'Graves (20-250 Hz)',
              text: 'Frecuencias bajas. Dan peso y potencia. Bombo, bajo, sub-graves.',
            },
            {
              label: 'Medios (250 Hz - 4 kHz)',
              text: 'Rango donde vive la mayoría de instrumentos y la voz humana. Crítico para claridad.',
            },
            {
              label: 'Agudos (4 kHz - 20 kHz)',
              text: 'Frecuencias altas. Aportan brillo, aire y definición. Platillos, hi-hats, armónicos.',
            },
            {
              label: 'Banda de Frecuencia',
              text: 'Rango específico de frecuencias que un dispositivo puede reproducir o procesar.',
            },
          ],
        },
        {
          title: '🎚️ Amplitud y Volumen (dB)',
          image: 'https://images.unsplash.com/photo-1571327073757-71d13c24de30?w=800&q=80',
          content: 'La amplitud es la "altura" de la onda sonora y determina el volumen. Se mide en decibeles (dB).',
          points: [
            {
              label: 'Decibel (dB)',
              text: 'Unidad logarítmica para medir la intensidad del sonido. 0 dB = umbral de audición humana.',
            },
            {
              label: 'Señal Atenuada',
              text: 'Reducción del nivel de volumen de una señal. Se usa para evitar distorsión.',
            },
            {
              label: 'Señal Realzada',
              text: 'Aumento del nivel de volumen. Útil para destacar elementos en la mezcla.',
            },
            {
              label: 'Rango Dinámico',
              text: 'Diferencia entre el sonido más suave y el más fuerte que un sistema puede manejar.',
            },
          ],
        },
      ],
    },
    books: [],
  },

  {
    id: 2,
    title: 'Distorsión y Claridad',
    subtitle: 'Calidad de Señal y Sistemas de Reproducción',
    color: '#3b82f6',
    description: {
      intro: 'La distorsión ocurre cuando la señal de audio se altera de forma no deseada. Entender cómo prevenirla y mejorar la claridad es fundamental para un sonido profesional.',
      sections: [
        {
          title: '⚠️ Distorsión del Sonido',
          content: 'La distorsión es cualquier alteración no deseada de la señal original. Puede ocurrir en cualquier punto de la cadena de audio.',
          points: [
            {
              label: 'Causas Comunes',
              text: 'Ganancia excesiva, clipping, equipos sobrecargados, cables defectuosos.',
            },
            {
              label: 'Tipos de Distorsión',
              text: 'Armónica (añade frecuencias), intermodulación (mezcla frecuencias), clipping (recorte de señal).',
            },
            {
              label: 'Sonido Claro',
              text: 'Señal sin alteraciones no deseadas. Transparente, definida y fiel al original.',
            },
          ],
        },
        {
          title: '🔊 Sistema de Tres Vías',
          content: 'Divide el espectro de frecuencias en tres rangos (graves, medios, agudos) para mejor reproducción y menor distorsión.',
          points: [
            {
              label: 'Woofer (Graves)',
              text: 'Parlante grande especializado en frecuencias bajas (20-250 Hz).',
            },
            {
              label: 'Mid-Range (Medios)',
              text: 'Parlante medio para frecuencias medias (250 Hz - 4 kHz).',
            },
            {
              label: 'Tweeter (Agudos)',
              text: 'Parlante pequeño para frecuencias altas (4 kHz - 20 kHz).',
            },
            {
              label: 'Ventaja',
              text: 'Cada parlante trabaja en su rango óptimo, reduciendo distorsión y mejorando claridad.',
            },
          ],
        },
        {
          title: '📏 Presión Sonora (SPL)',
          content: 'Sound Pressure Level - Medida de la intensidad del sonido en el aire.',
          points: [
            {
              label: 'Medición',
              text: 'Se mide en dB SPL. 0 dB SPL = umbral de audición, 120 dB SPL = umbral de dolor.',
            },
            {
              label: 'Límite de SPL',
              text: 'Cada micrófono tiene un SPL máximo que puede manejar sin distorsionar.',
            },
            {
              label: 'Aplicación',
              text: 'Importante para elegir micrófonos según la fuente (batería = alto SPL, voz = SPL moderado).',
            },
          ],
        },
      ],
    },
    books: [],
  },

  {
    id: 3,
    title: 'Equipos Básicos de Sonido',
    subtitle: 'Micrófonos y Consolas',
    color: '#8b5cf6',
    description: {
      intro: 'Los equipos básicos son los componentes esenciales de cualquier sistema de audio profesional. Conocer su funcionamiento es el primer paso para trabajar en sonido en vivo o estudio.',
      sections: [
        {
          title: '🎤 Micrófonos',
          content: 'Transductores que convierten ondas sonoras (energía acústica) en señales eléctricas.',
          points: [
            {
              label: 'Tipos Principales',
              text: 'Dinámicos (robustos, para vivo), Condensador (sensibles, para estudio), Ribbon (vintage, delicados).',
            },
            {
              label: 'Patrón Polar',
              text: 'Cardioide (frontal), Omnidireccional (360°), Figura-8 (frontal y trasero).',
            },
            {
              label: 'SPL Máximo',
              text: 'Nivel máximo de presión sonora que puede captar sin distorsionar.',
            },
            {
              label: 'Pad (Atenuador)',
              text: 'Reduce la sensibilidad del micrófono para fuentes muy fuertes (batería, amplificadores).',
            },
          ],
        },
        {
          title: '🎛️ Consola / Mezcladora',
          content: 'Centro de control donde se combinan, procesan y balancean todas las señales de audio.',
          points: [
            {
              label: 'Función Principal',
              text: 'Mezclar múltiples fuentes de audio en una salida estéreo o multicanal balanceada.',
            },
            {
              label: 'Canales',
              text: 'Cada canal procesa una fuente individual (micrófono, instrumento, playback).',
            },
            {
              label: 'Tipos',
              text: 'Analógicas (físicas), Digitales (procesamiento DSP), Híbridas (combinación).',
            },
          ],
        },
      ],
    },
    books: [],
  },

  {
    id: 4,
    title: 'Cornetas y Amplificación',
    subtitle: 'Sistemas de Reproducción de Audio',
    color: '#ec4899',
    description: {
      intro: 'Las cornetas (altavoces/parlantes) son el último eslabón de la cadena de audio. Transforman la señal eléctrica de vuelta en ondas sonoras que podemos escuchar.',
      fundamentals: [
        {
          title: '🔊 Cornetas (Pasivas y Activas)',
          image: 'https://images.unsplash.com/photo-1519139270028-ab664cf42264?w=800&q=80',
          content: 'Las cornetas tienen una bobina que transforma ondas eléctricas en ondas acústicas. A mayor señal de entrada, mayor volumen y mayor consumo de corriente.',
          points: [
            {
              label: 'Cornetas Pasivas',
              text: 'Requieren amplificador externo. No tienen electrónica interna. Más flexibles pero requieren más equipos.',
            },
            {
              label: 'Cornetas Activas',
              text: 'Amplificador integrado. Solo necesitan señal de línea y corriente eléctrica. Más prácticas.',
            },
            {
              label: 'Bobina de Voz',
              text: 'Componente que se mueve dentro del campo magnético para crear el sonido. Se calienta con uso intenso.',
            },
            {
              label: 'Refrigeración',
              text: 'Esencial para evitar sobrecalentamiento y quemado de la bobina en uso prolongado a alto volumen.',
            },
          ],
        },
        {
          title: '⚡ Ley de Ohm y Potencia',
          image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80',
          content: 'La relación entre voltaje, corriente y resistencia determina la potencia que maneja el sistema.',
          points: [
            {
              label: 'Ley de Ohm (V = I × R)',
              text: 'Voltaje = Corriente × Resistencia. Fundamental para calcular potencia y conexiones.',
            },
            {
              label: 'Impedancia (Ω)',
              text: 'Resistencia al flujo de corriente. Común: 4Ω, 8Ω, 16Ω. Debe coincidir con el amplificador.',
            },
            {
              label: 'Potencia RMS',
              text: 'Potencia continua real que puede manejar el parlante. Más importante que la potencia pico.',
            },
            {
              label: 'Matching',
              text: 'La impedancia del amplificador debe coincidir con la carga total de las cornetas.',
            },
          ],
        },
        {
          title: '🔌 Conexiones (Serie y Paralelo)',
          image: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=800&q=80',
          content: 'La forma de conectar múltiples cornetas afecta la impedancia total y la distribución de potencia.',
          points: [
            {
              label: 'Conexión en Serie',
              text: 'Impedancias se SUMAN. Dos cornetas de 8Ω en serie = 16Ω total. Menos potencia por corneta.',
            },
            {
              label: 'Conexión en Paralelo',
              text: 'Impedancia se DIVIDE. Dos cornetas de 8Ω en paralelo = 4Ω total. Más potencia, más carga.',
            },
            {
              label: 'Cuidado',
              text: 'Impedancia muy baja puede sobrecargar y dañar el amplificador. Verificar siempre especificaciones.',
            },
          ],
        },
      ],
    },
    books: [],
  },

  {
    id: 5,
    title: 'Amplificadores y Sistemas',
    subtitle: 'Potencia y Configuraciones',
    color: '#f59e0b',
    description: {
      intro: 'Los amplificadores aumentan la señal de audio a niveles suficientes para mover los parlantes. Entender sus tipos y clases es crucial para diseñar sistemas eficientes.',
      sections: [
        {
          title: '🔋 Amplificadores vs Power',
          content: 'Aunque a menudo se usan indistintamente, hay diferencias técnicas importantes.',
          points: [
            {
              label: 'Amplificador',
              text: 'Término general para cualquier dispositivo que aumenta la señal.',
            },
            {
              label: 'Power Amplifier',
              text: 'Específicamente diseñado para amplificar señal a nivel de potencia para mover parlantes.',
            },
            {
              label: 'Pre-Amplificador',
              text: 'Amplifica señales débiles (micrófonos) a nivel de línea antes del power.',
            },
          ],
        },
        {
          title: '⚙️ Clases de Amplificación',
          content: 'Diferentes topologías de circuitos con ventajas y desventajas específicas.',
          points: [
            {
              label: 'Clase A',
              text: 'Máxima calidad, baja eficiencia (~25%). Mucho calor. Uso en estudio de alta gama.',
            },
            {
              label: 'Clase B',
              text: 'Mayor eficiencia (~50%), más distorsión. Poco usado en audio profesional.',
            },
            {
              label: 'Clase AB',
              text: 'Compromiso entre A y B. Buena calidad, eficiencia ~60%. Estándar en audio profesional.',
            },
            {
              label: 'Clase D',
              text: 'Alta eficiencia (~90%), ligeros, compactos. Ideales para sistemas portátiles y activos.',
            },
          ],
        },
        {
          title: '🔀 Sistemas de Una, Dos y Tres Vías',
          content: 'División del espectro de frecuencias para optimizar la reproducción.',
          points: [
            {
              label: 'Sistema de 1 Vía',
              text: 'Un solo parlante reproduce todo el espectro. Limitado en calidad y potencia.',
            },
            {
              label: 'Sistema de 2 Vías',
              text: 'Woofer (graves) + Tweeter (agudos). Estándar en monitores de estudio.',
            },
            {
              label: 'Sistema de 3 Vías',
              text: 'Woofer + Mid-range + Tweeter. Mejor separación y claridad. Profesional.',
            },
            {
              label: 'Pasivo vs Activo',
              text: 'Pasivo: crossover pasivo, un amplificador. Activo: crossover activo, amplificador por vía.',
            },
          ],
        },
      ],
    },
    books: [],
  },

  {
    id: 6,
    title: 'Cables y Conectores',
    subtitle: 'Señales Balanceadas y No Balanceadas',
    color: '#10b981',
    description: {
      intro: 'Los cables y conectores son críticos para mantener la integridad de la señal. Usar el tipo correcto previene ruido, interferencias y pérdida de calidad.',
      sections: [
        {
          title: '🔌 Tipos de Conectores',
          content: 'Cada conector tiene un propósito específico en el sistema de audio.',
          points: [
            {
              label: 'XLR (3 pines)',
              text: 'Señal balanceada. Micrófonos, línea profesional. Rechazo de ruido excelente. Conector robusto.',
            },
            {
              label: 'TRS (Tip-Ring-Sleeve)',
              text: 'Jack 1/4" balanceado. Línea balanceada, inserts, auriculares estéreo.',
            },
            {
              label: 'TS (Tip-Sleeve)',
              text: 'Jack 1/4" no balanceado. Instrumentos (guitarra, bajo), patch de pedales.',
            },
            {
              label: 'Speakon',
              text: 'Conector para parlantes. Seguro, robusto, no se desconecta accidentalmente. Estándar profesional.',
            },
          ],
        },
        {
          title: '⚖️ Señal Balanceada vs No Balanceada',
          content: 'La diferencia fundamental en cómo se transmite la señal de audio.',
          points: [
            {
              label: 'Señal Balanceada',
              text: '3 conductores: positivo, negativo (invertido) y tierra. Cancela ruido e interferencias.',
            },
            {
              label: 'Señal No Balanceada',
              text: '2 conductores: señal y tierra. Susceptible a ruido, especialmente en cables largos.',
            },
            {
              label: 'Cuándo Usar Balanceada',
              text: 'Cables largos (>6m), ambientes con interferencias, conexiones profesionales.',
            },
            {
              label: 'Cuándo Usar No Balanceada',
              text: 'Cables cortos, instrumentos, conexiones de parlantes.',
            },
          ],
        },
        {
          title: '🛠️ Cuidado de Cables',
          content: 'El mantenimiento adecuado prolonga la vida útil y mantiene la calidad.',
          points: [
            {
              label: 'Enrollado Correcto',
              text: 'Técnica over-under para evitar torsión y daño interno de los conductores.',
            },
            {
              label: 'Evitar Pisadas',
              text: 'No pasar cables por zonas de tráfico. Usar protectores de cable si es necesario.',
            },
            {
              label: 'Almacenamiento',
              text: 'Enrollar sin apretar, colgar o guardar en bolsas. Evitar nudos y dobleces extremos.',
            },
            {
              label: 'Inspección',
              text: 'Revisar regularmente conectores y cable. Reparar o reemplazar si hay daños.',
            },
          ],
        },
      ],
    },
    books: [],
  },

  {
    id: 7,
    title: 'Feedback y Filtros',
    subtitle: 'Control de Realimentación y Procesamiento',
    color: '#ef4444',
    description: {
      intro: 'El feedback (realimentación) es uno de los problemas más comunes en sonido en vivo. Entender cómo ocurre y cómo controlarlo es esencial para cualquier técnico de sonido.',
      sections: [
        {
          title: '🔄 Feedback (Realimentación)',
          content: 'Ocurre cuando el sonido de las cornetas vuelve a entrar al micrófono, creando un bucle que se amplifica infinitamente.',
          points: [
            {
              label: 'Causa Principal',
              text: 'Ganancia del micrófono muy alta + proximidad a las cornetas = bucle de realimentación.',
            },
            {
              label: 'Feedback de Graves',
              text: 'Sonido grave y retumbante. Frecuencias bajas (80-250 Hz). Reducir con filtro pasa-alto.',
            },
            {
              label: 'Feedback de Medios',
              text: 'Sonido nasal o "boxy". Frecuencias medias (500 Hz - 2 kHz). Usar EQ para atenuar.',
            },
            {
              label: 'Feedback de Agudos',
              text: 'Pitido agudo y penetrante. Frecuencias altas (2-8 kHz). El más común y molesto.',
            },
          ],
        },
        {
          title: '🎚️ Prevención de Feedback',
          content: 'Técnicas para evitar la realimentación antes de que ocurra.',
          points: [
            {
              label: 'Posicionamiento',
              text: 'Micrófonos detrás de las cornetas. Monitores apuntando hacia el intérprete, no al micrófono.',
            },
            {
              label: 'Ganancia Correcta',
              text: 'Ajustar ganancia al mínimo necesario. No sobre-amplificar.',
            },
            {
              label: 'Patrón Polar',
              text: 'Usar micrófonos cardioides que rechazan sonido de atrás (donde están las cornetas).',
            },
            {
              label: 'EQ y Supresores',
              text: 'Usar EQ para atenuar frecuencias problemáticas. Supresores de feedback automáticos.',
            },
          ],
        },
        {
          title: '🔧 Filtros de Audio',
          content: 'Herramientas para controlar qué frecuencias pasan y cuáles se bloquean.',
          points: [
            {
              label: 'Filtro Pasa-Alto (HPF)',
              text: 'Deja pasar frecuencias ALTAS, bloquea BAJAS. Elimina rumble y sub-graves innecesarios.',
            },
            {
              label: 'Filtro Pasa-Bajo (LPF)',
              text: 'Deja pasar frecuencias BAJAS, bloquea ALTAS. Elimina ruido agudo y sibilancia excesiva.',
            },
            {
              label: 'Filtro Pasa-Banda',
              text: 'Deja pasar un RANGO específico, bloquea todo lo demás. Útil para aislar instrumentos.',
            },
            {
              label: 'Crossover',
              text: 'Divide la señal en múltiples bandas para enviar a diferentes parlantes (woofer, tweeter).',
            },
          ],
        },
      ],
    },
    books: [],
  },

  {
    id: 8,
    title: 'Flujo de Señal',
    subtitle: 'Mapa de Ruta del Audio',
    color: '#06b6d4',
    description: {
      intro: 'Entender el flujo de señal (signal flow) es fundamental. Debes saber de dónde sale el sonido, por dónde pasa, cómo se procesa y a dónde llega.',
      fundamentals: [
        {
          title: '🗺️ Diagrama de Flujo de Señal',
          image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80',
          content: 'El camino completo que recorre la señal de audio desde la fuente hasta los parlantes.',
          points: [
            {
              label: '1. Fuente Sonora',
              text: 'Voz, instrumento, playback. Genera las ondas sonoras originales.',
            },
            {
              label: '2. Micrófono',
              text: 'Convierte ondas acústicas en señal eléctrica (muy débil, nivel de micrófono).',
            },
            {
              label: '3. Pre-Amplificador',
              text: 'Amplifica la señal débil del micrófono a nivel de línea. Aquí se ajusta la GANANCIA.',
            },
            {
              label: '4. Consola/Mezcladora',
              text: 'Procesa la señal: EQ, compresión, efectos, paneo, volumen (fader).',
            },
            {
              label: '5. Procesamiento Externo',
              text: 'Ecualizadores, compresores, efectos externos (opcional).',
            },
            {
              label: '6. Amplificador de Potencia',
              text: 'Amplifica la señal de línea a nivel de potencia para mover los parlantes.',
            },
            {
              label: '7. Cornetas/Parlantes',
              text: 'Convierten la señal eléctrica de vuelta en ondas sonoras que escuchamos.',
            },
          ],
        },
        {
          title: '🔀 Bus de Audio',
          image: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=800&q=80',
          content: 'Un "bus" es una ruta o canal por donde viaja la señal de audio dentro de la consola.',
          points: [
            {
              label: 'Master Bus',
              text: 'Salida principal donde se mezclan todos los canales. Va a las cornetas principales.',
            },
            {
              label: 'Aux Bus (Auxiliar)',
              text: 'Salida independiente para monitores, efectos o grabación. No afecta el master.',
            },
            {
              label: 'Group Bus',
              text: 'Agrupa varios canales (ej: toda la batería) para controlarlos juntos.',
            },
            {
              label: 'Pre-Fader vs Post-Fader',
              text: 'Pre: señal antes del fader (para monitores). Post: señal después del fader (para efectos).',
            },
          ],
        },
      ],
    },
    books: [],
  },

  {
    id: 9,
    title: 'Clipping y Distorsión',
    subtitle: 'Problemas de Nivel y Ganancia',
    color: '#8b5cf6',
    description: {
      intro: 'El clipping y la distorsión son los enemigos de un sonido limpio. Ocurren cuando la señal excede los límites del sistema, causando recorte y alteración del audio.',
      sections: [
        {
          title: '✂️ Clipping (Recorte)',
          content: 'Ocurre cuando la señal de audio excede el nivel máximo que el sistema puede manejar, causando recorte de los picos.',
          points: [
            {
              label: 'Qué es',
              text: 'La parte superior e inferior de la onda se "corta" o "aplana", creando distorsión áspera.',
            },
            {
              label: 'Sonido',
              text: 'Distorsión digital dura, desagradable, "crujiente". Diferente a la distorsión analógica suave.',
            },
            {
              label: 'Indicador',
              text: 'LED rojo en medidores. Si parpadea ocasionalmente está bien, si se queda encendido hay problema.',
            },
            {
              label: 'Prevención',
              text: 'Ajustar ganancia correctamente. Dejar headroom (espacio) de 6-10 dB antes del máximo.',
            },
          ],
        },
        {
          title: '⚠️ Causas de Distorsión',
          content: 'La distorsión puede ocurrir en múltiples puntos de la cadena de audio.',
          points: [
            {
              label: 'En el Micrófono',
              text: 'SPL excede el límite del micrófono. Usar PAD o micrófono con mayor SPL máximo.',
            },
            {
              label: 'Ganancia Mal Ajustada',
              text: 'Pre-amplificador con ganancia muy alta. La señal clipea antes de llegar al fader.',
            },
            {
              label: 'En la Consola',
              text: 'Múltiples canales sumados exceden el headroom del master bus.',
            },
            {
              label: 'En el Amplificador',
              text: 'Señal de entrada muy alta o volumen del amplificador al máximo.',
            },
          ],
        },
      ],
    },
    books: [],
  },

  {
    id: 10,
    title: 'Consola y Mezcla Básica',
    subtitle: 'Fundamentos de la Mezcla Profesional',
    color: '#ec4899',
    description: {
      intro: 'OBJETIVO: Mezclar bien para que no suene mal. La consola es tu herramienta principal. Dominar sus controles básicos es el primer paso hacia mezclas profesionales.',
      fundamentals: [
        {
          title: '🎛️ Canales de la Consola',
          image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80',
          content: 'Cada canal de la consola procesa una fuente individual. Entender sus controles es esencial.',
          points: [
            {
              label: '1. GANANCIA (Gain/Trim)',
              text: 'Primer control. Ajusta el nivel de entrada del pre-amplificador. CRÍTICO para evitar distorsión.',
            },
            {
              label: '2. FADER (Volumen)',
              text: 'Control deslizante. Ajusta el volumen del canal en la mezcla. Se usa después de ajustar ganancia.',
            },
            {
              label: '3. EQ (Ecualización)',
              text: 'Controla graves, medios y agudos. Usa para limpiar, realzar o corregir el sonido.',
            },
            {
              label: '4. PANORAMA (Pan)',
              text: 'Posiciona el sonido entre izquierda y derecha en el campo estéreo.',
            },
            {
              label: '5. AUXILIAR (Aux Send)',
              text: 'Envía señal a salidas independientes para monitores, efectos o grabación.',
            },
          ],
        },
        {
          title: '⚙️ Ganancia Correcta (Gain Staging)',
          image: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=800&q=80',
          content: 'El ajuste correcto de ganancia es LA habilidad más importante en audio. Todo lo demás depende de esto.',
          points: [
            {
              label: 'Objetivo',
              text: 'Señal fuerte y limpia sin distorsión. Medidor debe llegar a -18 dB a -12 dB en promedio.',
            },
            {
              label: 'Método',
              text: '1) Fader a 0 dB (unity). 2) Pedir al músico que toque FUERTE. 3) Subir ganancia hasta nivel óptimo.',
            },
            {
              label: 'Señal Óptima',
              text: 'Verde la mayor parte del tiempo, amarillo en picos, NUNCA rojo. Dejar headroom de 6-10 dB.',
            },
            {
              label: 'Error Común',
              text: 'Ganancia muy alta + fader bajo = distorsión oculta. Ganancia muy baja + fader alto = ruido.',
            },
          ],
        },
        {
          title: '🎚️ EQ Básica',
          image: 'https://images.unsplash.com/photo-1571327073757-71d13c24de30?w=800&q=80',
          content: 'La ecualización básica te permite moldear el tono de cada instrumento en la mezcla.',
          points: [
            {
              label: 'Graves (Low)',
              text: 'Controla 80-250 Hz. Añade peso y potencia. Cuidado con el exceso (sonido lodoso).',
            },
            {
              label: 'Medios (Mid)',
              text: 'Controla 500 Hz - 2 kHz. Presencia y claridad. Donde vive la voz y la mayoría de instrumentos.',
            },
            {
              label: 'Agudos (High)',
              text: 'Controla 4-12 kHz. Brillo y aire. Añade definición. Exceso causa fatiga auditiva.',
            },
            {
              label: 'Filosofía',
              text: 'Primero CORTA frecuencias problemáticas, luego REALZA lo que necesitas. Menos es más.',
            },
          ],
        },
      ],
    },
    books: [],
  },
];
