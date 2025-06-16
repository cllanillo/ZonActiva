import CloseIcon from '@mui/icons-material/Close';
import { Button, Typography } from '@mui/material';
import { Markdown } from '@snc/emi-ui/dist/markdown/Markdown.js';
import { i18n } from '~/lang';
import StoryGrid from '🪟/story/StoryGrid';

export interface EventDetailProps {
  event: any;
  onClose?: () => void;
}

export default function EventDetail({ event, onClose = () => null }: EventDetailProps) {
  return (
    <article
      aria-label={event.name}
      sx={{
        mx: 'auto',
        maxWidth: 'clamp(40ch,calc(100% - 124px),100ch)',
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
        overflow: 'auto',
        scrollbarWidth: 'thin',
        scrollbarGutter: 'stable',
        bgcolor: 'background.paper',
        '&>img': { p: 0, maxWidth: '100%', maxHeight: '60vh', borderRadius: 2 },
        '& header>.MuiTypography-subtitle1': { textAlign: 'center', mb: 1.5 },
        '&>*': { px: 3 },
      }}
    >
      <header sx={{ py: 2, pr: 6, mb: -3, display: 'flex', position: 'sticky', backdropFilter: 10, top: 0, zIndex: 100 }}>
        <Typography variant="h3" fontWeight="bold" sx={{ flexGrow: 1 }}>
          {!!event.icon && <img src={event.icon} alt={`icon:${event.name}`} />}
          {event.name}
        </Typography>

        <div sx={{ position: 'absolute', top: 0, right: 0, mt: 1, mr: 1, '&>.MuiButton-root': { minWidth: 44, height: 44 } }}>
          <Button title={i18n.actionClose} onClick={onClose} size="small">
            <CloseIcon />
          </Button>
        </div>
      </header>

      {!!event.image && <img src={event.image} alt={`image:${event.name}`} />}

      <section
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <header sx={{ display: 'flex' }}>
          <Typography variant="subtitle1" fontWeight="bold" sx={{ flexGrow: 1 }}>
            {'Description'}
          </Typography>
        </header>

        <Markdown
          markdown={`El Rallysprint de Los Corrales de Buelna es una destacada prueba automovilística que se celebra anualmente en la localidad cántabra de Los Corrales de Buelna, en la región de Cantabria, España. Esta competición forma parte del Campeonato de Cantabria de Rallysprint y cuenta con una rica historia que atrae a pilotos y aficionados del automovilismo.
### 🏁 Estructura general y formato
Edición y fechas: Tradicionalmente se celebra a comienzos de verano. Por ejemplo, la XX edición tuvo lugar el 1 de mayo de 2024.
Tramos cronometrados: Suele constar de 4 tramos (2 tramos invertidos), con recorrido entre Los Corrales y Villasuso, sumando entre 25 y 27km de tramo cronometrado 

Clases participantes: Desde vehículos históricos y competiciones de velocidad clásica hasta coches modernos de categorías como R2, R3, R5, GT, etc. También se incluyen trofeos específicos como Junior copiloto, Legend y otros 
Reconocimientos: Permitidos en fechas previas (ej. del 10 al 16 de junio en ediciones de 2023), para que participantes y copilotos tracen los tramos .

### 📍 Recorrido y entorno
Ubicación: Se desarrolla en el Valle de Buelna, conectando Los Corrales de Buelna con la zona de Cieza y Villasuso, sobre carreteras locales típicas de montaña/rural.
Escenario: Tramos estrechos y revirados, ideales para rallysprint, combinando curvas técnicas y espectaculares miradores del valle. El ambiente es íntimo pero intenso, con gran afluencia de público local.

### ⚙ Participación y organización
Organizador: C.D.E. Ojeda Sport. En ocasiones ha habido cancelaciones (p.ej. edición XX en 2024) por razones económicas o falta de tiempo en la organización 
Inscripciones: Abiertas en las semanas previas; incluyen opciones para el público del trofeo “Legend” no competitivo.
Infraestructura: Control técnico, cronometraje online, seguridad en los tramos, zonas habilitadas para espectadores.

### 🚗 Actividades paralelas y sociales
Se suelen combinar actividades para aficionados como rallies de vehículos clásicos en modo regularidad, con fines solidarios (ej. IV Rally Solidario Valle de Buelna en febrero de 2025 contó con 90 clásicos y apoyo a la AECC)

Ambiente festivo en el municipio, con salidas y llegadas en zonas céntricas como el colegio La Salle y la Plaza de la Constitución.`}
        />
      </section>

      <section>
        <header sx={{ display: 'flex' }}>
          <Typography variant="subtitle1" fontWeight="bold" sx={{ flexGrow: 1 }}>
            {i18n.eventPosts}
          </Typography>
        </header>

        <StoryGrid eventId={event.id} />
      </section>
    </article>
  );
}
