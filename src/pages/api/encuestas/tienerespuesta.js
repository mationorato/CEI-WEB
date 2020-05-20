import { options, url } from '../../../utils/rest'

export default async (req, res) => {
    const { encuesta_id, estudiante_id, materia_codigo } = req.query

    var request = await fetch(
        url.api_academica_respuestas_tiene(encuesta_id, estudiante_id, materia_codigo),
        options.academica.GET
    )

    res.status(request.status).json(await request.json())
}