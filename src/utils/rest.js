const academica_key = process.env.CeiApiKey__Academica
const api_academica = process.env.CeiApiUrl__Academica

export const handleResponse = res => {
    if (res.ok) return res.json()
    else throw Error(res.status)
}

export const options = {
    academica: {
        GET: {
            method: 'GET',
            headers: {
                ApiKey: academica_key
            }
        },
        POST: data => ({
            method: 'POST',
            headers: {
                ApiKey: academica_key,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    },
    general: {
        GET: {
            method: 'GET'
        },
        POST: (body, headers) => ({
            method: 'POST',
            headers,
            body
        })
    }
}

export const url = {
    //estudiantes
    api_academica_estudiantes: `${api_academica}/estudiantes`,
    api_academica_estudiantes_id: (id) => `${api_academica}/estudiantes/${id}`,
    api_academica_estudiantes_padron: (padron) => `${api_academica}/estudiantes/padron/${padron}`,
    api_academica_estudiantes_documento: (documento) => `${api_academica}/estudiantes/documento/${documento}`,
    api_academica_estudiantes_buscar: (busqueda) => `${api_academica}/estudiantes/buscar/${busqueda}`,

    //materias
    api_academica_materias: `${api_academica}/materias`,
    api_academica_materias_id: (id) => `${api_academica}/materias/${id}`,
    api_academica_materias_codigo: (codigo) => `${api_academica}/materias/codigo/${codigo}`,
    api_academica_materias_buscar: (busqueda) => `${api_academica}/materias/buscar/${busqueda}`,

    //encuestas
    api_academica_encuestas: `${api_academica}/encuestas`,
    api_academica_encuestas_id: (id) => `${api_academica}/encuestas/${id}`,
    api_academica_encuestas_nombre: (nombre) => `${api_academica}/encuestas/nombre/${nombre}`,

    //respuestas
    api_academica_respuestas: `${api_academica}/encuestasrespuestas`,
    api_academica_respuestas_conmateria: `${api_academica}/encuestasrespuestas/conmateria`,
    api_academica_respuestas_id: (id) => `${api_academica}/encuestasrespuestas/${id}`,
    api_academica_respuestas_tiene: (encuesta_id, estudiante_id, materia_codigo) =>
        `${api_academica}/encuestasrespuestas/tienerespuesta/${encuesta_id}/${estudiante_id}/${materia_codigo}`
}