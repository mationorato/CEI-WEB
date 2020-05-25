import { useState, useEffect, useRef } from 'react';
import { Row, Col, Alert } from 'react-bootstrap';
import { Steps, Button } from 'antd';
import { grey } from '@ant-design/colors';
import ReCAPTCHA from "react-google-recaptcha";
import ReCAPTCHAterms from '../utils/recaptchaterms';
import { UserOutlined, BarsOutlined, ReadOutlined, SendOutlined, LoadingOutlined } from '@ant-design/icons';
import { url, handleResponse } from '../../utils/rest';
import EstudianteInput from '../inputs/estudianteInput';
import MateriaInput from '../inputs/materiaInput';
import CursoInput from '../inputs/cursoInput';
import { Pregunta } from '../encuesta/pregunta';

const { Step } = Steps;

export default function Encuesta({ encuesta }) {
    const encuestaId = encuesta.id
    const recaptcha = useRef(null);
    const [paso, setPaso] = useState(0)
    const [estudianteId, setEstudianteId] = useState("")
    const [materiaCodigo, setMateriaCodigo] = useState("")
    const [cursoNumero, setCursoNumero] = useState("")
    const [tieneRespuesta, setTieneRespuesta] = useState(false)
    const [loadingTR, setloadingTR] = useState(false)
    const [loadingEnviar, setLoadingEnviar] = useState(false)
    const [respuestasFaltantes, setRespuestasFaltantes] = useState(encuesta.preguntas.length)
    const [respuestaValida, setRespuestaValida] = useState(false)
    const [respuestaInvalida, setRespuestaInvalida] = useState(false)
    const respuestas = encuesta.preguntas.map(
        p => useState({
            pregunta: p.pregunta,
            respuestas: []
        })
    )

    const RespuestasFaltantesCount = () => {
        return respuestas
            .map(r => r[0].respuestas.length > 0 ? 0 : 1)
            .reduce((a, r) => a + r)
    }

    const handleEnviar = async (captcha) => {
        if (captcha) {
            var data = {
                captcha,
                encuesta_id: encuestaId,
                estudiante_id: estudianteId,
                respuestas: respuestas.map(r => r[0]),
                detalles: {
                    materia_codigo: materiaCodigo,
                    curso_numero: cursoNumero
                }
            }

            const res = await fetch("/api/encuestas/respuesta",
                {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )

            if (res.ok)
                setRespuestaValida(true)
            else
                setRespuestaInvalida(true)
        }
        setLoadingEnviar(false)
    }

    // set paso al cambiar estudiante
    useEffect(() => {
        if (estudianteId == "") { setPaso(0) }
        else { setPaso(1) }
    }, [estudianteId])

    // set paso al cambiar materia
    useEffect(() => {
        if (cursoNumero == "") { setPaso(1) }
        else { setPaso(1) }
    }, [materiaCodigo])

    // set paso al cambiar curso
    useEffect(() => {
        if (cursoNumero == "") { setPaso(1) }
        else { setPaso(2) }
    }, [cursoNumero])

    // chequear respuesta repetida
    useEffect(() => {
        if (cursoNumero !== "") {
            setloadingTR(true)
            fetch(`/api/encuestas/tienerespuesta?encuesta_id=${encuestaId}&estudiante_id=${estudianteId}&materia_codigo=${materiaCodigo}`)
                .then(handleResponse)
                .then(res => {
                    if (res) setTieneRespuesta(true)
                    else setTieneRespuesta(false)
                    setloadingTR(false)
                })
        }
        setRespuestaValida(false)
        setRespuestaInvalida(false)
    }, [cursoNumero])

    useEffect(() => {
        if (respuestaValida) {
            setPaso(1)
        }
    }, [respuestaValida])

    useEffect(() => {
        if (respuestaInvalida) {
            setPaso(1)
        }
    }, [respuestaInvalida])

    //inicializar encuesta en paso 0
    useEffect(() => { setPaso(0) }, [])

    return (
        <div>
            <Row>
                <Col sm={3} style={{ marginBottom: "30px" }}>
                    <Steps direction="vertical" current={paso}>
                        <Step
                            title="Buscá tu padrón"
                            description="Buscá tu padrón para poder comenzar"
                            icon={<UserOutlined />} />
                        <Step
                            title="Elegí un curso"
                            description="Buscá el curso para el cual queres completar las encuesta"
                            icon={<ReadOutlined />} />
                        <Step
                            title="Respondé las preguntas"
                            description="Asi nos ayudar a analizar el estado de la cursada"
                            icon={<BarsOutlined />} />
                    </Steps>
                </Col>
                <Col sm={6}>
                    {/* input estudainte */}
                    {
                        paso >= 0 &&
                        <div className="seccion">
                            <h4>Estudiante</h4>
                            <EstudianteInput inputId setter={setEstudianteId} />
                        </div>
                    }

                    {/* input materia */}
                    {
                        paso >= 1 &&
                        <div className="seccion">
                            <h4>Materia y Curso</h4>
                            <MateriaInput inputCodigo setter={setMateriaCodigo} />
                            <br />
                            {

                                materiaCodigo &&
                                <CursoInput materiaCodigo={materiaCodigo} setter={setCursoNumero} />
                            }
                        </div>
                    }

                    {/* chequeo materia repetida */}
                    {
                        (paso == 2 && loadingTR) &&
                        <p className="lead"><LoadingOutlined /> Chequeando un par de cosas ...</p>
                    }

                    {/* mensaje respuesta repetida */}
                    {
                        (paso == 2 && !loadingTR && tieneRespuesta) &&
                        <Alert variant="warning">
                            <i className="emoji em em-thinking_face" aria-label="THINKING FACE"></i>
                            Ya respondiste la encuesta para esta materia. Elegí otra que estes cursando.
                        </Alert>
                    }

                    {/* respuestas */}
                    {
                        (paso == 2 && !loadingTR && !tieneRespuesta) &&
                        <div className="seccion">
                            <h4>Responde las siguientes Preguntas</h4>
                            {
                                respuestas.map((r, i) =>
                                    <Pregunta
                                        key={`pregunta_${i}`}
                                        pregunta={encuesta.preguntas[i].pregunta}
                                        opciones={encuesta.preguntas[i].opciones}
                                        multiple={encuesta.preguntas[i].multiple}
                                        respuesta={r[0]}
                                        setRespuesta={r[1]}
                                        onChange={() => setRespuestasFaltantes(RespuestasFaltantesCount())} />
                                )
                            }

                            <p className="terminos">
                                <hr />
                                La encuesta es anónima, solo te pedimos verificar el padrón para que no se cargue
                                mas de una respuesta por padrón y materia.
                                <br /> <br />
                                Los datos personales recopilados por el Centro de Estudiantes nunca se comparten con la facultad ni ninguna otra institución.
                            </p>
                        </div>
                    }
                    {/* enviar*/}
                    {
                        (paso == 2 && !loadingTR && !tieneRespuesta) &&
                        <>
                            <ReCAPTCHA
                                ref={recaptcha}
                                size="invisible"
                                sitekey={process.env.NEXT_PUBLIC_reCAPTCHA_SITE}
                                onChange={handleEnviar} />

                            <ReCAPTCHAterms />

                            {/* contador respuestas faltantes */}
                            {
                                respuestasFaltantes != 0 &&
                                <Alert variant="warning">
                                    Te {respuestasFaltantes == 1 ? "falta " : "faltan "}
                                    responder {respuestasFaltantes} {respuestasFaltantes == 1 ? "pregunta " : "preguntas "}
                                    para poder enviar los resultados
                                </Alert>

                            }

                            <Button
                                type="primary"
                                icon={<SendOutlined size={"large"} />}
                                size={"large"}
                                loading={loadingEnviar}
                                onClick={() => { setLoadingEnviar(true); recaptcha.current.execute() }}
                                disabled={respuestasFaltantes != 0}>
                                {!loadingEnviar ? "Enviar" : "Enviando"}
                            </Button>
                        </>
                    }
                    {
                        respuestaValida &&
                        <Alert variant="success">
                            <Alert.Heading>La encuesta se envió con exito :)</Alert.Heading>
                            Elegí otra materia que estes cursando para seguir colaborando.
                            <br />
                            <i style={{ fontSize: "12px" }}>(Podés buscar otra materia haciendo click en las X)</i>

                        </Alert>


                    }
                    {
                        respuestaInvalida &&
                        <Alert variant="danger">
                            <Alert.Heading>Hubo algún Inconveniente al enviar los resultados :(</Alert.Heading>
                             Te recomendamos volver a intentar recargando la página
                        </Alert>
                    }
                </Col>
            </Row>
            <style jsx>{`
                .terminos{
                    font-size: 14px;
                    color:${grey[3]}
                }
                p .terminos{
                    margin-bottom: 0px;
                }
                .seccion{
                    margin-bottom: 25px;
                }
                .emoji{
                    margin-right: 7px;
                }
                div :global(.anticon) {
                    vertical-align: baseline;
                }
            `}</style>
        </div >
    )
}
