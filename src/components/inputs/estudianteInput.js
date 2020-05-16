import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import { Input, Button } from 'antd';
import { UserOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { green, red, grey } from '@ant-design/colors';


export default function EstudianteInput({ setter, inputId = false, inputPadron = false, inputDocumento = false }) {
    const [estudiante, setEstudiante] = useState({})
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (inputId) setter(estudiante.id || "")
        if (inputPadron) setter(estudiante.padron || "")
        if (inputDocumento) setter(estudiante.documento || "")
    }, [estudiante])

    const fetchEstudiante = async (padron) => {
        setLoading(true)
        const res = await fetch(`/api/estudiantes/padron/${padron}`)
        if (res.ok) {
            setEstudiante(await res.json())
            setSuccess(true)
            setLoading(false)
            setError(false)
        }
        else {
            setEstudiante({})
            setSuccess(false)
            setLoading(false)
            setError(true)
        }
    }

    const clearInput = () => {
        setEstudiante({})
        setSuccess(false)
    }

    return (
        <div>
            {
                !success ?
                    <Input.Search
                        loading={loading}
                        size="large"
                        suffix={error && <CloseOutlined style={{ color: red[4] }} />}
                        placeholder="ingresá tu padrón"
                        onSearch={fetchEstudiante}
                        addonBefore="Padrón : "
                        autoFocus
                    /> :
                    <Input
                        prefix={<UserOutlined />}
                        suffix={
                            <>
                                <CheckOutlined style={{ color: green[5] }} />
                                <CloseOutlined className="clearBtn" onClick={clearInput} />
                            </>
                        }
                        size="large"
                        value={`${estudiante.nombre} ${estudiante.apellido}`}
                        addonBefore={"Padrón : " + estudiante.padron} />
            }
            <style jsx>{`
                div :global(.clearBtn){
                    padding-left: 12px;
                    margin-left: 12px;
                    color: #d9d9d9;
                    border-left: 1px solid #d9d9d9;
                }
                div :global(.clearBtn:hover){
                    color: ${grey[5]};
                }
            `}</style>
        </div>
    )
}
