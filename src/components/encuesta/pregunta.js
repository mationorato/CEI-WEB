import { useState, useEffect } from 'react';
import { Radio, Checkbox } from 'antd';

export function Pregunta({ pregunta, opciones, respuesta, setRespuesta, multiple, onChange }) {
    const [resp, setResp] = useState([])

    const handleChange = (e) => {
        if (multiple)
            setResp(e)
        else
            setResp([e.target.value])
    }

    useEffect(() => {
        setRespuesta({
            ...respuesta,
            respuestas: resp
        })
    }, [resp])

    useEffect(() => onChange(), [respuesta])

    return (
        <div>
            <p className="pregunta lead">{pregunta}</p>
            {
                multiple
                    ? <Checkbox.Group size={"large"} options={opciones} onChange={handleChange} />
                    : <Radio.Group size={"large"} options={opciones} onChange={handleChange} />

            }

            <style jsx>{`
                div :global(.ant-radio-wrapper){
                    display: block;
                    height: 35px;
                    font-size: 1rem;
                    width: ${window.innerWidth - 30};
                    word-wrap:break-word; 
                }

                div :global(.ant-checkbox-wrapper){
                    display: block;
                    height: 35px;
                    font-size: 1rem;
                    width: ${window.innerWidth - 30};
                    word-wrap:break-word; 
                }

                .pregunta{
                    font-weight:"400";
                    margin-top: 30px;
                }
            `}</style>
        </div >
    )
}