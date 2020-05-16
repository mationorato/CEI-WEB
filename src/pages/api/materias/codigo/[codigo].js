import fetch from 'isomorphic-unfetch'
import { options, url } from '../../../../utils/rest'

export default async (req, res) => {
    var request = await fetch(
        url.api_academica_materias_codigo(req.query.codigo),
        options.academica.GET
    )

    res.status(request.status).json(await request.json())
}