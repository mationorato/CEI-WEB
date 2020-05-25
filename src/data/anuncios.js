import colors from '../components/layout/colors';
const anuncios = [
    {
        id: "encuesta-cursada-virtual",
        titulo: "Encuesta Cursada Virtual 1C 2020",
        bajada: "Completá la encuesta para ayudarnos a analizar como está funcionando la cursada virtual en Fiuba",
        fecha: "24 al 27 de mayo",
        color: colors.cerulean,
        principal: true,
        link: "/encuestas/cursada_virtual",
        tipo: "encuesta"
    },
    {
        id: "condicionales",
        titulo: "Información Condicionales 1C 2020",
        bajada: "Guía de que hacer en los principales deptos si te toco anotarte como condicional.",
        fecha: "6/4/2020",
        color: colors.lgrey,
        principal: false,
        tipo: "noticia"
    },
    {
        id: "cursadavirtual",
        titulo: "Inicio de la cursada virtual",
        bajada: "En Fiuba arrancamos a cursar de forma virtual el 13/4.",
        fecha: "4/4/2020",
        color: colors.lgrey,
        principal: false,
        tipo: "noticia"
    },
    {
        id: "infomails",
        titulo: "Alta de Mails Fiuba",
        bajada: "Buscá tu nuevo mail fiuba y mirá las preguntas frecuentes.",
        fecha: "28/3/2020",
        color: colors.lgrey,
        principal: false,
        tipo: "noticia"
    },
    {
        id: "mequedoencasa",
        titulo: "Plan contra el Coronavirus",
        bajada: "Prórrogas autámaticas, correlativas sin rendir final y pasos para prepararte para la cursada virtual.",
        fecha: "21/3/2020",
        color: colors.lgrey,
        principal: false,
        tipo: "noticia"
    }
]

export default anuncios