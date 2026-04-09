import React from 'react';
import { Box, Typography, Paper, Grid, Stack, Chip } from '@mui/material';

export const DrumNotationContent = () => {
  return (
    <Box>
      {/* Sección 1: El Pentagrama de Batería */}
      <Paper
        sx={{
          p: 4,
          mb: 4,
          background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(239, 68, 68, 0.1) 100%)',
          border: '2px solid rgba(245, 158, 11, 0.3)',
          borderRadius: 3,
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#f59e0b', mb: 3 }}>
          📊 El Pentagrama de Batería
        </Typography>

        {/* Concepto del Pentagrama */}
        <Paper
          sx={{
            p: 3,
            mb: 3,
            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%)',
            border: '2px solid rgba(99, 102, 241, 0.4)',
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#6366f1', mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
            📖 ¿Qué es el Pentagrama?
          </Typography>
          <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.8, mb: 3 }}>
            El pentagrama es el lugar físico donde se escribe la música. Su nombre viene del griego <strong>penta</strong> (cinco) 
            y <strong>gramma</strong> (línea), y es básicamente una cuadrícula de <strong>5 líneas horizontales</strong> y{' '}
            <strong>4 espacios</strong> que se cuentan siempre <strong>de abajo hacia arriba</strong>.
          </Typography>

          {/* Imagen del concepto de pentagrama */}
          <Box
            sx={{
              textAlign: 'center',
              background: '#e5e7eb',
              p: 2,
              borderRadius: 2,
              border: '2px solid rgba(99, 102, 241, 0.3)',
            }}
          >
            <Box
              component="img"
              src="/images/pentagrama-concepto.png"
              alt="Concepto del Pentagrama - 5 líneas y 4 espacios"
              sx={{
                width: '100%',
                maxWidth: { xs: '200px', sm: '250px', md: '300px' },
                height: 'auto',
                borderRadius: 1,
                display: 'block',
                margin: '0 auto',
                objectFit: 'contain',
              }}
              loading="lazy"
            />
          </Box>
        </Paper>

        {/* El Pentagrama en la Batería */}
        <Paper
          sx={{
            p: 3,
            mb: 4,
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(5, 150, 105, 0.15) 100%)',
            border: '2px solid rgba(16, 185, 129, 0.4)',
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#10b981', mb: 3, display: 'flex', alignItems: 'center', gap: 1 }}>
            🗺️ El Pentagrama en la Batería
          </Typography>

          <Stack spacing={2.5}>
            <Box>
              <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.95)', lineHeight: 1.8 }}>
                En la batería, el pentagrama funciona como un <strong>mapa del set</strong>. No indica notas musicales 
                (como Do, Re o Mi), sino que <strong>cada línea y espacio representa un tambor o un platillo específico</strong>.
              </Typography>
            </Box>

            <Box
              sx={{
                p: 2.5,
                background: 'rgba(16, 185, 129, 0.1)',
                borderRadius: 2,
                borderLeft: '4px solid #10b981',
              }}
            >
              <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.95)', lineHeight: 1.8 }}>
                A diferencia del piano o la guitarra, donde subir en el pentagrama significa subir de tono, 
                en la batería <strong>subir en el pentagrama significa moverse físicamente hacia arriba en el set</strong> (hacia los platillos).
              </Typography>
            </Box>

            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#10b981', mb: 2 }}>
                📍 Las 5 líneas y 4 espacios:
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', mb: 2 }}>
                Se utilizan para asignar cada tambor o platillo a una posición fija:
              </Typography>

              <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                  <Box
                    sx={{
                      p: 2,
                      background: 'rgba(139, 92, 246, 0.15)',
                      borderRadius: 2,
                      border: '2px solid rgba(139, 92, 246, 0.3)',
                      height: '100%',
                    }}
                  >
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: '#a78bfa', mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                      🔼 Zona Superior
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)' }}>
                      Manos sobre metales (Hi-hat, Ride, Crash)
                    </Typography>
                  </Box>
                </Grid>

                <Grid item xs={12} md={4}>
                  <Box
                    sx={{
                      p: 2,
                      background: 'rgba(239, 68, 68, 0.15)',
                      borderRadius: 2,
                      border: '2px solid rgba(239, 68, 68, 0.3)',
                      height: '100%',
                    }}
                  >
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: '#fca5a5', mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                      ➡️ Zona Media
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)' }}>
                      Manos sobre parches (Caja, Toms)
                    </Typography>
                  </Box>
                </Grid>

                <Grid item xs={12} md={4}>
                  <Box
                    sx={{
                      p: 2,
                      background: 'rgba(245, 158, 11, 0.15)',
                      borderRadius: 2,
                      border: '2px solid rgba(245, 158, 11, 0.3)',
                      height: '100%',
                    }}
                  >
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: '#fbbf24', mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                      🔽 Zona Inferior
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)' }}>
                      Pies (Bombo, pedal de Hi-hat)
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Stack>
        </Paper>

        {/* Imagen del Pentagrama de Batería */}
        <Box
          sx={{
            mb: 4,
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(245,245,245,0.98) 100%)',
            p: 4,
            borderRadius: 3,
            border: '3px solid rgba(245, 158, 11, 0.4)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
          }}
        >
          <Typography variant="h6" sx={{ mb: 3, color: '#333', fontWeight: 'bold' }}>
            📊 Notación de Batería en el Pentagrama
          </Typography>
          
          <Box
            component="img"
            src="/images/drum-notation.png"
            alt="Notación de Batería en el Pentagrama"
            sx={{
              width: '100%',
              maxWidth: '900px',
              height: 'auto',
              borderRadius: 2,
              boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
              display: 'block',
              margin: '0 auto',
              objectFit: 'contain',
            }}
            loading="lazy"
          />
          
          <Typography variant="caption" sx={{ display: 'block', mt: 3, color: '#666', fontStyle: 'italic', fontSize: '0.9rem' }}>
            Diagrama completo de notación estándar de batería mostrando todos los elementos del kit
          </Typography>
        </Box>

        {/* Explicación de cada fila */}
        <Box sx={{ mt: 4 }}>
          {/* Fila 1: Platillos y Efectos */}
          <Paper
            sx={{
              p: 3,
              mb: 3,
              background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(251, 191, 36, 0.1) 100%)',
              border: '2px solid rgba(245, 158, 11, 0.3)',
              borderRadius: 2,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#f59e0b', mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
              🥁 Fila 1: Platillos y Efectos
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', mb: 2, fontStyle: 'italic' }}>
              Esta fila se enfoca en los sonidos más agudos y metálicos, generalmente representados con una "X" o figuras geométricas.
            </Typography>
            
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ p: 2, background: 'rgba(0,0,0,0.2)', borderRadius: 1 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: '#fbbf24', mb: 1 }}>
                    🔸 China
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem' }}>
                    Un platillo de efectos con los bordes hacia arriba. Suena explosivo y sucio (como un "trash").
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ p: 2, background: 'rgba(0,0,0,0.2)', borderRadius: 1 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: '#fbbf24', mb: 1 }}>
                    💧 Splash
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem' }}>
                    Un platillo muy pequeño (6" a 10") que suena rápido y agudo, ideal para acentos cortos.
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ p: 2, background: 'rgba(0,0,0,0.2)', borderRadius: 1 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: '#fbbf24', mb: 1 }}>
                    🔔 Cowbell (Cencerro)
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem' }}>
                    No es un platillo, sino un bloque de metal. Se nota con una cabeza triangular.
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ p: 2, background: 'rgba(0,0,0,0.2)', borderRadius: 1 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: '#fbbf24', mb: 1 }}>
                    💥 Crash 1 y 2
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem' }}>
                    Los platillos que golpeas para marcar el inicio de un compás o un acento fuerte.
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ p: 2, background: 'rgba(0,0,0,0.2)', borderRadius: 1 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: '#fbbf24', mb: 1 }}>
                    🤚 Choked Crash
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem' }}>
                    Un golpe de Crash que apagas inmediatamente con la mano para cortar el sonido.
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ p: 2, background: 'rgba(0,0,0,0.2)', borderRadius: 1 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: '#fbbf24', mb: 1 }}>
                    ➕ Closed Hi-Hat
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem' }}>
                    Tocar el Hi-Hat con la baqueta mientras mantienes el pedal pisado (sonido seco).
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ p: 2, background: 'rgba(0,0,0,0.2)', borderRadius: 1 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: '#fbbf24', mb: 1 }}>
                    ⭕ Open Hi-Hat
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem' }}>
                    Tocar el Hi-Hat con la baqueta mientras levantas el pie (sonido largo y siseante).
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>

          {/* Fila 2: El Cuerpo y Técnicas de Caja */}
          <Paper
            sx={{
              p: 3,
              mb: 3,
              background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(248, 113, 113, 0.1) 100%)',
              border: '2px solid rgba(239, 68, 68, 0.3)',
              borderRadius: 2,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#ef4444', mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
              🎯 Fila 2: El Cuerpo y Técnicas de Caja
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', mb: 2, fontStyle: 'italic' }}>
              Aquí entran los elementos que llevan el peso del ritmo y las variaciones de golpe en el redoblante.
            </Typography>
            
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ p: 2, background: 'rgba(0,0,0,0.2)', borderRadius: 1 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: '#fca5a5', mb: 1 }}>
                    🎵 Ride
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem' }}>
                    El platillo grande que usas para mantener el ritmo (el "tiquiti-tiquiti").
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ p: 2, background: 'rgba(0,0,0,0.2)', borderRadius: 1 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: '#fca5a5', mb: 1 }}>
                    🔔 Ride Bell
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem' }}>
                    Golpear la "campana" (la parte central levantada) del Ride para un sonido de campana muy claro.
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ p: 2, background: 'rgba(0,0,0,0.2)', borderRadius: 1 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: '#fca5a5', mb: 1 }}>
                    🥁 Tom 1 y Tom 2
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem' }}>
                    Los toms aéreos (los más pequeños que van sobre el bombo).
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ p: 2, background: 'rgba(239, 68, 68, 0.2)', borderRadius: 1, border: '1px solid rgba(239, 68, 68, 0.4)' }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: '#ef4444', mb: 1 }}>
                    ⭐ Snare (Caja/Redoblante)
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.85rem' }}>
                    El corazón del ritmo, ubicado en el tercer espacio del pentagrama.
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ p: 2, background: 'rgba(0,0,0,0.2)', borderRadius: 1 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: '#fca5a5', mb: 1 }}>
                    👻 Ghost Note
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem' }}>
                    Notas "fantasma". Se tocan bajito (apenas rozando el parche) para dar textura al ritmo.
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ p: 2, background: 'rgba(0,0,0,0.2)', borderRadius: 1 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: '#fca5a5', mb: 1 }}>
                    💥 Rim Shot
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem' }}>
                    Golpear el parche y el aro de metal de la caja al mismo tiempo. Suena como un disparo.
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ p: 2, background: 'rgba(0,0,0,0.2)', borderRadius: 1 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: '#fca5a5', mb: 1 }}>
                    🪵 Cross Stick
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem' }}>
                    Apoyar la baqueta en el parche y golpear solo el aro. Es el sonido típico de madera "clac" que escuchas en las baladas o el reggae.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>

          {/* Fila 3: Bajos, Pies y Rudimentos */}
          <Paper
            sx={{
              p: 3,
              mb: 3,
              background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(167, 139, 250, 0.1) 100%)',
              border: '2px solid rgba(139, 92, 246, 0.3)',
              borderRadius: 2,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#8b5cf6', mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
              🦶 Fila 3: Bajos, Pies y Rudimentos
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', mb: 2, fontStyle: 'italic' }}>
              Esta parte cubre la sección inferior del set (pies) y técnicas de redoble.
            </Typography>
            
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ p: 2, background: 'rgba(0,0,0,0.2)', borderRadius: 1 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: '#a78bfa', mb: 1 }}>
                    ⚡ Double
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem' }}>
                    Dos golpes rápidos en el espacio de un solo tiempo (doble golpe).
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ p: 2, background: 'rgba(0,0,0,0.2)', borderRadius: 1 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: '#a78bfa', mb: 1 }}>
                    🎶 Buzz
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem' }}>
                    El redoble clásico donde dejas que la baqueta rebote muchas veces contra el parche (redoble de prensa).
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ p: 2, background: 'rgba(0,0,0,0.2)', borderRadius: 1 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: '#a78bfa', mb: 1 }}>
                    🥁 Tom 3 y Tom 4
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem' }}>
                    Los Toms de piso (Floor Toms), los más grandes y graves.
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ p: 2, background: 'rgba(0,0,0,0.2)', borderRadius: 1 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: '#a78bfa', mb: 1 }}>
                    🦶 Bass 1 y Bass 2
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem' }}>
                    El bombo. El "1" es el pedal derecho y el "2" es el pedal izquierdo si usas doble pedal.
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ p: 2, background: 'rgba(0,0,0,0.2)', borderRadius: 1 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: '#a78bfa', mb: 1 }}>
                    👟 Hi-Hat Pedal
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem' }}>
                    Cerrar el Hi-Hat solo con el pie (el sonido "chick").
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ p: 2, background: 'rgba(0,0,0,0.2)', borderRadius: 1 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: '#a78bfa', mb: 1 }}>
                    💦 Hi-Hat Splash
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem' }}>
                    Pisar el pedal y soltarlo inmediatamente para que los platos choquen y sigan vibrando.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>

          {/* Tip Pro */}
          <Paper
            sx={{
              p: 3,
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(5, 150, 105, 0.15) 100%)',
              border: '2px solid rgba(16, 185, 129, 0.4)',
              borderRadius: 2,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#10b981', mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
              💡 Tip Pro
            </Typography>
            <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)' }}>
              Fíjate que todo lo que se toca con los <strong>pies</strong> está en la <strong>parte de abajo</strong> del pentagrama, 
              y lo que se toca con las <strong>manos arriba</strong>. ¡Esa es la lógica visual para no perderse!
            </Typography>
          </Paper>
        </Box>

        <Paper sx={{ p: 2, mt: 3, bgcolor: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)' }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: '#ef4444', mb: 1 }}>
            💡 IMPORTANTE:
          </Typography>
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)' }}>
            La Caja/Redoblante (3º espacio) es la referencia principal. Los platillos (Hi-Hat, Ride) usan cabeza X (✕), 
            mientras que los tambores (Caja, Toms, Bombo) usan cabeza oval (●).
          </Typography>
        </Paper>
      </Paper>

      {/* Sección: La Clave */}
      <Paper
        sx={{
          p: 4,
          mb: 4,
          background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
          border: '2px solid rgba(99, 102, 241, 0.3)',
          borderRadius: 3,
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#6366f1', mb: 3 }}>
          🔑 La Clave
        </Typography>

        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.95)', lineHeight: 1.8, mb: 2 }}>
          La clave es el <strong>primer símbolo que aparece a la izquierda de cada pentagrama</strong>. Su función es actuar 
          como una <strong>"llave maestra"</strong> (de ahí su nombre) que le asigna un significado específico a las líneas y los espacios.
        </Typography>

        <Paper
          sx={{
            p: 2.5,
            background: 'rgba(99, 102, 241, 0.15)',
            border: '2px solid rgba(99, 102, 241, 0.3)',
            borderRadius: 2,
            mb: 3,
          }}
        >
          <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.95)', lineHeight: 1.8, fontStyle: 'italic' }}>
            💡 Sin una clave, los puntos en el pentagrama serían solo manchas sin nombre; 
            la clave nos dice <strong>qué instrumento o qué notas debemos tocar</strong>.
          </Typography>
        </Paper>

        {/* Imagen de la clave */}
        <Box
          sx={{
            textAlign: 'center',
            background: '#e5e7eb',
            p: 3,
            borderRadius: 2,
            border: '2px solid rgba(99, 102, 241, 0.3)',
          }}
        >
          <Box
            component="img"
            src="/images/clave-bateria.png"
            alt="Clave de Batería en el Pentagrama"
            sx={{
              width: '100%',
              maxWidth: '100%',
              height: 'auto',
              borderRadius: 1,
              display: 'block',
              margin: '0 auto',
              objectFit: 'cover',
            }}
            loading="lazy"
          />
        </Box>
      </Paper>


      {/* Sección 2: Anatomía de la Nota */}
      <Paper
        sx={{
          p: 4,
          mb: 4,
          background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(99, 102, 241, 0.1) 100%)',
          border: '2px solid rgba(139, 92, 246, 0.3)',
          borderRadius: 3,
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#8b5cf6', mb: 3 }}>
          🎵 Anatomía de la Nota
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                p: 3,
                background: 'rgba(0,0,0,0.3)',
                borderRadius: 2,
                border: '2px solid rgba(139, 92, 246, 0.2)',
                height: '100%',
              }}
            >
              <Stack direction="row" spacing={2} alignItems="center" mb={2}>
                <Box
                  sx={{
                    fontSize: '3rem',
                    width: 60,
                    height: 60,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(139, 92, 246, 0.2)',
                    borderRadius: 2,
                  }}
                >
                  ✕
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#8b5cf6' }}>
                    X = PLATILLOS
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                    Hi-Hat, Ride, Crash
                  </Typography>
                </Box>
              </Stack>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                La X se usa para todos los platillos porque producen un sonido metálico y sostenido.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                p: 3,
                background: 'rgba(0,0,0,0.3)',
                borderRadius: 2,
                border: '2px solid rgba(239, 68, 68, 0.2)',
                height: '100%',
              }}
            >
              <Stack direction="row" spacing={2} alignItems="center" mb={2}>
                <Box
                  sx={{
                    fontSize: '3rem',
                    width: 60,
                    height: 60,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(239, 68, 68, 0.2)',
                    borderRadius: 2,
                  }}
                >
                  ●
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#ef4444' }}>
                    ● = TAMBORES
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                    Snare, Toms, Bass Drums
                  </Typography>
                </Box>
              </Stack>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                La nota redonda llena (●) se usa para todos los tambores.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>


      {/* Sección 3: Símbolos de Hi-Hat */}
      <Paper
        sx={{
          p: 4,
          mb: 4,
          background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(14, 165, 233, 0.1) 100%)',
          border: '2px solid rgba(6, 182, 212, 0.3)',
          borderRadius: 3,
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#06b6d4', mb: 3 }}>
          🎚️ Símbolos Especiales del Hi-Hat
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                p: 3,
                background: 'rgba(0,0,0,0.3)',
                borderRadius: 2,
                border: '2px solid rgba(6, 182, 212, 0.2)',
                textAlign: 'center',
                height: '100%',
              }}
            >
              <Box sx={{ fontSize: '4rem', mb: 2 }}>+</Box>
              <Chip label="CERRADO" sx={{ bgcolor: '#06b6d4', color: '#fff', fontWeight: 'bold', mb: 2 }} />
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                El símbolo + indica que el hi-hat está cerrado (platos juntos).
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box
              sx={{
                p: 3,
                background: 'rgba(0,0,0,0.3)',
                borderRadius: 2,
                border: '2px solid rgba(245, 158, 11, 0.2)',
                textAlign: 'center',
                height: '100%',
              }}
            >
              <Box sx={{ fontSize: '4rem', mb: 2 }}>○</Box>
              <Chip label="ABIERTO" sx={{ bgcolor: '#f59e0b', color: '#fff', fontWeight: 'bold', mb: 2 }} />
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                El círculo vacío indica que el hi-hat está abierto (platos separados).
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box
              sx={{
                p: 3,
                background: 'rgba(0,0,0,0.3)',
                borderRadius: 2,
                border: '2px solid rgba(139, 92, 246, 0.2)',
                textAlign: 'center',
                height: '100%',
              }}
            >
              <Box sx={{ fontSize: '4rem', mb: 2 }}>⊕</Box>
              <Chip label="CON PIE" sx={{ bgcolor: '#8b5cf6', color: '#fff', fontWeight: 'bold', mb: 2 }} />
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                Este símbolo indica que cierras el hi-hat con el pie (sin golpear con las baquetas).
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      {/* Sección 4: Ejemplo Visual Completo */}
      <Paper
        sx={{
          p: 4,
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(5, 150, 105, 0.1) 100%)',
          border: '2px solid rgba(16, 185, 129, 0.3)',
          borderRadius: 3,
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#10b981', mb: 3 }}>
          🎼 Ejemplo: Groove Básico de Rock
        </Typography>

        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)', mb: 3 }}>
          Aquí está el groove de rock más básico escrito en notación de batería:
        </Typography>

        <Box
          sx={{
            background: 'rgba(0,0,0,0.5)',
            p: 4,
            borderRadius: 2,
            border: '2px solid rgba(16, 185, 129, 0.3)',
            fontFamily: 'monospace',
            fontSize: { xs: '0.9rem', md: '1.1rem' },
          }}
        >
          <Stack spacing={1}>
            <Box sx={{ display: 'flex', alignItems: 'center', py: 1 }}>
              <Box sx={{ width: '120px', color: '#06b6d4', fontWeight: 'bold' }}>Hi-Hat:</Box>
              <Box sx={{ flex: 1, color: '#06b6d4', letterSpacing: '1rem' }}>
                X   X   X   X   X   X   X   X
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', py: 1 }}>
              <Box sx={{ width: '120px', color: '#ef4444', fontWeight: 'bold' }}>Snare:</Box>
              <Box sx={{ flex: 1, color: '#ef4444', letterSpacing: '1rem' }}>
                .   .   ●   .   .   .   ●   .
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', py: 1 }}>
              <Box sx={{ width: '120px', color: '#f59e0b', fontWeight: 'bold' }}>Bass:</Box>
              <Box sx={{ flex: 1, color: '#f59e0b', letterSpacing: '1rem' }}>
                ●   .   .   .   ●   .   .   .
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', py: 1, borderTop: '1px solid rgba(255,255,255,0.1)', mt: 2, pt: 2 }}>
              <Box sx={{ width: '120px', color: '#10b981', fontWeight: 'bold' }}>Conteo:</Box>
              <Box sx={{ flex: 1, color: '#10b981', letterSpacing: '1rem' }}>
                1   &   2   &   3   &   4   &
              </Box>
            </Box>
          </Stack>
        </Box>

        <Paper
          sx={{
            p: 3,
            mt: 3,
            bgcolor: 'rgba(16, 185, 129, 0.15)',
            border: '2px solid rgba(16, 185, 129, 0.4)',
          }}
        >
          <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: '#10b981', mb: 2 }}>
            💪 EJERCICIO PRÁCTICO:
          </Typography>
          <Stack spacing={1}>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)' }}>
              1. Comienza tocando SOLO el hi-hat en corcheas con metrónomo a 60 BPM
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)' }}>
              2. Añade el bass drum en 1 y 3 (mantén el hi-hat constante)
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)' }}>
              3. Finalmente añade el snare en 2 y 4
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)' }}>
              4. Cuando lo domines a 60 BPM, sube gradualmente hasta 120 BPM
            </Typography>
          </Stack>
        </Paper>
      </Paper>
    </Box>
  );
};
