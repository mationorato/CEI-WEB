import { blue, grey } from '@ant-design/colors';

export default function ReCAPTCHAterms() {
    return (
        <div>
            <p>
                <hr />
                Este formulario esta protegido por reCAPTCHA de Google
                - <a href="https://policies.google.com/privacy" target="_blank">Política de Privacidad</a>
                - <a href="https://policies.google.com/terms" target="_blank">Términos de Servicio</a>
                <hr />
            </p>
            <style jsx>{`
                div{
                    margin:15px 0px;
                }
                a{
                    color:${blue[3]};
                    text-decoration: none;
                }
                p{
                    font-size: 11px;
                    color:${grey[3]};
                }
            `}</style>
            <style jsx global>{`
                .grecaptcha-badge{
                    visibility: hidden;
                }
            `}</style>
        </div>
    )
}

