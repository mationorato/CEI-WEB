import { options } from './rest';


export default async function validateReCAPTCHA(response) {
    var res = await fetch(
        "https://www.google.com/recaptcha/api/siteverify",
        options.general.POST(
            `secret=${process.env.reCAPTCHA_SECRET}&response=${response}`,
            { 'Content-type': 'application/x-www-form-urlencoded' }
        )
    )

    const resData = await res.json()

    if (res.ok)
        return resData.success
    else
        return false
} 