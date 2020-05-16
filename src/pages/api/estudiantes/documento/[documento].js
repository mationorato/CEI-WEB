import fetch from 'isomorphic-unfetch'
import { options, url } from '../../../../utils/rest'

export default async (req, res) => {
    var request = await fetch(
        url.api_academica_estudiantes_documento(req.query.documento),
        options.academica.GET
    )

    res.status(request.status).json(await request.json())
}