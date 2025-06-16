import { useQuery } from "@tanstack/react-query";
import { ThreadDto } from "./threads";
import { users } from "./users";

export interface ThreadCommentDto {
    id: string;
    threadId: ThreadDto['id'];
    userId: string;
    content: string;
}

const threadsComments: ThreadCommentDto[] = [{
    "id": "1",
    "threadId": "1",
    "userId": "badc6ea2-b305-49b3-8aa4-151e909cea4d",
    "content": "¡Increíble la última edición del Rally de Montecarlo! La tensión estuvo a tope en la última etapa."
},
{
    "id": "2",
    "threadId": "1",
    "userId": "fecc7052-a23f-42ab-8714-195135c7baa9",
    "content": "Totalmente de acuerdo, fue una de las más emocionantes. Me sorprendió el rendimiento de los coches eléctricos en terrenos difíciles."
},
{
    "id": "3",
    "threadId": "2",
    "userId": "badc6ea2-b305-49b3-8aa4-151e909cea4d",
    "content": "La tecnología de los nuevos sistemas de navegación en el rally está revolucionando el deporte, pero también está trayendo nuevos desafíos."
},
{
    "id": "4",
    "threadId": "2",
    "userId": "fecc7052-a23f-42ab-8714-195135c7baa9",
    "content": "Sí, la tecnología ayuda, pero también pone mucha presión en los pilotos. ¡A veces parece que los coches tienen más control que ellos!"
},
{
    "id": "5",
    "threadId": "3",
    "userId": "082d65aa-e7a5-45ca-9394-37e21b4938b2",
    "content": "¿Qué opinan de las medidas de seguridad en los rallys? ¿Deberían ser más estrictas?"
},
{
    "id": "6",
    "threadId": "3",
    "userId": "fecc7052-a23f-42ab-8714-195135c7baa9",
    "content": "Creo que la seguridad en los rallys ha mejorado mucho en los últimos años, pero siempre hay margen para hacer más, sobre todo en las zonas más peligrosas."
},
{
    "id": "7",
    "threadId": "4",
    "userId": "fecc7052-a23f-42ab-8714-195135c7baa9",
    "content": "Me gustaría ver más rallys en lugares exóticos, como las Islas Galápagos o el desierto de Atacama. ¡Sería épico!"
},
{
    "id": "8",
    "threadId": "4",
    "userId": "082d65aa-e7a5-45ca-9394-37e21b4938b2",
    "content": "Eso suena increíble, pero ¿no sería un desafío logístico? La infraestructura en esos lugares podría ser un problema."
}]

export function useGetThreadComments(threadId: ThreadDto['id']) {
    return useQuery({
        queryKey: ['useGetComments', threadId],
        queryFn: () => threadsComments.filter(tC => tC.threadId === threadId).map(tC => ({
            ...tC,
            user: users.find(u => u.user_id === tC.userId)
        }))
    })

}