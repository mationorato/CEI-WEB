import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Steps } from 'antd';
import { UserOutlined, BarsOutlined, ReadOutlined, SendOutlined } from '@ant-design/icons';
import useForm from '../../hooks/useForm';
import EstudianteInput from '../inputs/estudianteInput';
import MateriaInput from '../inputs/materiaInput';
import CursoInput from '../inputs/cursoInput';

const { Step } = Steps;

export default function Encuesta({ encuesta }) {
    const encuesta_id = encuesta.id
    const [paso, setPaso] = useState(0)
    const [estudianteId, setEstudianteId] = useState("")
    const [materiaCodigo, setMateriaCodigo] = useState("")
    const [cursoNumero, setCursoNumero] = useState("")

    useEffect(() => {
        console.log(estudianteId)
        if (estudianteId == "") { setPaso(0); return }
        else { setPaso(1); return }
    }, [estudianteId])

    useEffect(() => {
        console.log(estudianteId)
        if (cursoNumero == "") { setPaso(1); return }
        else { setPaso(1); return }
    }, [materiaCodigo])

    useEffect(() => {
        console.log(estudianteId)
        if (cursoNumero == "") { setPaso(1); return }
        else { setPaso(2); return }
    }, [cursoNumero])

    useEffect(() => { setPaso(0) }, [])

    return (
        <>
            <Row>
                <Col sm={3}>
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
                            description="Elegí una opcion para cada pregunta"
                            icon={<BarsOutlined />} />
                        <Step
                            title="Envianos los resultados"
                            description=" :) Para que podamos analizarlos"
                            icon={<SendOutlined />}
                        />
                    </Steps>
                </Col>
                <Col sm={5}>
                    {
                        paso >= 0 &&
                        <div className="seccion">
                            <h4>Estudiante</h4>
                            <EstudianteInput inputId setter={setEstudianteId} />
                        </div>
                    }
                    {
                        paso >= 1 &&
                        <div className="seccion">
                            <h4>Materia y Curso</h4>
                            <MateriaInput inputCodigo setter={setMateriaCodigo} />
                            {
                                materiaCodigo &&
                                <CursoInput materiaCodigo={materiaCodigo} setter={setCursoNumero} />
                            }
                        </div>
                    }
                    {
                        paso >= 2 &&
                        <div className="seccion">
                            <h4>Preguntas</h4>
                        </div>
                    }
                    {
                        paso >= 3 &&
                        <div className="seccion">
                            <h4>Confirmar y enviar</h4>
                        </div>
                    }
                </Col>
            </Row>
            <style jsx>{`
                .seccion{
                    margin-bottom: 25px;
                }
            `}</style>
        </>
    )
}
