import fetch from 'isomorphic-unfetch'
import { options, url } from '../../../utils/rest'
import validateReCAPTCHA from '../../../utils/recaptcha'

export default async (req, res) => {

    if (req.method === 'POST') {
        if (!req.body.captcha) {
            res.status(403).json({ message: "Por aca no! No te gastes en seguir intentando :)" })
            return
        }

        if (await validateReCAPTCHA(req.body.captcha)) {
            var request = await fetch(
                url.api_academica_respuestas_conmateria,
                options.academica.POST(req.body)
            )
            res.status(request.status).json(await request.json())
        }
        else
            res.status(403).json({ message: "ReCAPTCHA Invalido" })
    }
    else {
        res.status(405).json({ message: "Solo esta permitido el metodo POST" })
    }
}