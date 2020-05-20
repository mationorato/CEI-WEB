import { useState, useEffect } from 'react';
import { Input, AutoComplete, Select } from 'antd';
import { TeamOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { green, grey, blue } from '@ant-design/colors';

var FetchDelay = undefined

export default function CursoInput({ setter, materiaCodigo }) {
    const [curso, setCurso] = useState([])
    const [busqueda, setBusqueda] = useState([])
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        setter(curso.numero || "")
    }, [curso])

    useEffect(() => {
        fetchMateria(materiaCodigo)
    }, [])

    const fetchMateria = async (codigo) => {
        setLoading(true)
        const res = await fetch(`/api/materias/codigo/${codigo}`)
        if (res.ok) {
            const materia = await res.json()
            setBusqueda(
                materia.cursos_vigentes.map(c => (
                    {
                        value: `curso ${c.numero} - ${c.docentes[0]}`,
                        curso: c
                    }
                ))
            )
        }
        else {
            setMateria({})
        }
        setLoading(false)
    }

    const clearInput = () => {
        setCurso({})
        setSuccess(false)
    }


    return (
        <div>
            {
                !success ?
                    <AutoComplete
                        size={"large"}
                        options={busqueda}
                        onSelect={(val, option) => { setCurso(option.curso); setSuccess(true) }}
                        notFoundContent={"no se encontró ningún resultado"}
                        style={{ width: "100%" }}
                        autoFocus>
                        <Input.Search
                            size={"large"}
                            placeholder="elegí un curso"
                            loading={loading}
                            addonBefore="Curso :" />
                    </AutoComplete> :
                    <Input
                        prefix={<TeamOutlined />}
                        suffix={
                            <>
                                <CheckOutlined style={{ color: green[5] }} />
                                <CloseOutlined className="clearBtn" onClick={clearInput} />
                            </>
                        }
                        size="large"
                        value={curso.docentes[0]}
                        addonBefore={`Curso : ${curso.numero}`} />
            }
            <style global jsx>{`
                .ant-select-item-option-active{
                    background-color:${blue[1]} !important;
                }  
            `}</style>
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
