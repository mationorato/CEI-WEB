import { useState, useEffect } from 'react';
import { Input, AutoComplete, Select } from 'antd';
import { ReadOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { green, grey, blue } from '@ant-design/colors';

var FetchDelay = undefined

export default function MateriaInput({ setter, inputId = false, inputCodigo = false }) {
    const [materia, setMateria] = useState({})
    const [busqueda, setBusqueda] = useState([])
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        if (inputId) setter(materia.id || "")
        if (inputCodigo) setter(materia.codigo || "")
    }, [materia])

    const autoCompleteMaterias = (value) => {
        setLoading(true)
        clearTimeout(FetchDelay)
        if (value.length > 0)
            FetchDelay = setTimeout(() => fetchMaterias(value), 600)
        else
            setLoading(false)
    }

    const fetchMaterias = async (value) => {
        const res = await fetch(`/api/materias/buscar/"${value}"`)
        if (res.ok) {
            const materias = await res.json()
            setBusqueda(
                materias.map(m => (
                    {
                        value: `${m.codigo} - ${m.nombre}`,
                        materia: m
                    }
                ))
            )
            setLoading(false)
        }
        else {
            setMateria({})
            setBusqueda([])
            setSuccess(false)
            setLoading(false)
        }
    }

    const clearInput = () => {
        setMateria({})
        setBusqueda([])
        setSuccess(false)
    }

    return (
        <div>
            {
                !success ?
                    <AutoComplete
                        size="large"
                        options={busqueda}
                        onSearch={autoCompleteMaterias}
                        onSelect={(val, option) => { setMateria(option.materia); setSuccess(true) }}
                        notFoundContent={"no se encontró ningún resultado"}
                        style={{ width: "100%" }}>
                        <Input.Search
                            size="large"
                            placeholder="buscá por código, nombre o docente"
                            loading={loading}
                            addonBefore="Código :" />
                    </AutoComplete> :
                    <Input
                        prefix={<ReadOutlined />}
                        suffix={
                            <>
                                <CheckOutlined style={{ color: green[5] }} />
                                <CloseOutlined className="clearBtn" onClick={clearInput} />
                            </>
                        }
                        size="large"
                        value={materia.nombre}
                        addonBefore={`Código : ${materia.codigo}`} />
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
