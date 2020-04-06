const pagina = () => (
    <div>
        <div className="row">
            <div className="col-sm-12">
                <p className="lead">
                    Se siguen dando de alta los mails @fi.uba.ar, los mails creados se van cargando acá:
                </p>
                <a className="btn btn-lg btn-primary blanco" href="https://bit.ly/2QLhS2J" role="button" target="blank">
                    <i className="fas fa-search fa-mr"></i>
                    Buscá tu mail fiuba en esta planilla
                </a>
                <div className="separator2"></div>
                <h4 className="alert-heading hgray">
                    <i className="fas fa-question-circle fa-mr"></i>
                    Preguntas frecuentes
                </h4>
                <div className="bd bd-danger">
                    <p className="lead">Solicite mi mail y no lo encuentro en la planilla ¿Qué hago?</p>
                    <p>
                        <b>Si no encontrás tu mail volvé a buscarlo en la planilla un par de veces durante este fin
                        de
                            semana</b>
                        <br />
                        Hay mas de 5700 solicitudes y la planilla con las cuentas que se van dando de alta se actualiza
                        un par de veces al día.
                        <br /><br />
                        <i className="far fa-hand-point-right fa-mr"></i>
                        La facultad nos comunicó que los mails se van a terminar de crear durante este fin de
                        semana.
                    </p>
                </div>
                <div className="bd bd-success">
                    <p className="lead">Solicite mi mail y ya aparece en la planilla ¿Cómo sigo? </p>
                    <p>Para ingresar a tu cuenta:</p>
                    <p>ingresá a <a href="https://mail.google.com" target="blank">mail.google.com</a>
                        <br />
                        <b>usuario:</b> <a href="https://bit.ly/2QLhS2J" target="blank">tu mail @fi.uba.ar</a>
                        <br />
                        <b>contraseña:</b> Tu DNI (sin puntos)
                        <br /><br />
                        Una vez que pudiste ingresar a tu nueva cuenta fiuba,
                        <a href="#paso2">seguí con el paso 2</a>
                        para actualizar tu mail en el campus.
                    </p>
                    <p>
                        <i className="fas fa-exclamation-triangle fa-mr"></i>si tu contraseña no funciona mandá mail a
                        <a
                            href="mailto:ayuda@fi.uba.ar?subject=[Mail desde cei.fi.uba.ar] No puedo ingresar a mi cuenta FIUBA">
                            ayuda@fi.uba.ar
                        </a>
                    </p>
                </div>
                <div className="bd bd-warning">
                    <p className="lead">Al actualizar mi mail en el campus no me llega el mail de confirmación. ¿Cómo lo
                        soluciono?</p>
                    <p>
                        <i className="fas fa-exclamation-circle fa-mr"></i>
                        Primero que nada, revisá que el mail no te haya llegado a la casilla de spam !
                    </p>
                    <p>
                        Si en el <a href="#paso2">paso 2</a> intentaste cambiar tu mail en el campus y no te llego
                        el mail de confirmación dentro del
                        intervalo de una hora (y tampoco te llego a spam), cuando
                        entres al campus y llegues al paso de cambiar tu mail, si te aparece la leyenda
                        <b>Cambio pendiente</b>, hace click en
                        <b>Cancelar cambio de mail</b>
                        y volvé a realizar el procedimiento del <a href="#paso2">paso 2</a> con tu nuevo mail FIUBA.
                    </p>
                    <p>
                        <i className="far fa-hand-point-right fa-mr"></i>
                        No es tan grave si no llegás a cambiar tu mail en el campus antes del lunes. Cambialo ni
                        bien puedas.
                    </p>
                </div>
                <div className="bd bd-danger">
                    <p className="lead">No llegué a solicitar mi mail fiuba ¿Qué hago?</p>
                    <p>
                        <a href="http://bit.ly/2vUspOA">
                            Accedé al formulario de solicitud</a>
                        <br />
                        Si no llegaste a solicitar tu cuenta a tiempo, comunicate a
                        <a href="mailto:ayuda@fi.uba.ar?subject=[Mail desde cei.fi.uba.ar] Solicitud de cuenta Fiuba">
                            ayuda@fi.uba.ar
                        </a>
                    </p>
                </div>
            </div>

        </div>
        <style jsx>{`
            .blanco{
                color: #f8f9fa;
            }
            .blanco:hover{
                color: #f8f9fa;
            }
        `}</style>
    </div>
);

export default pagina