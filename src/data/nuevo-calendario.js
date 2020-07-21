import Colors from '../components/layout/colors';

const pagina = () => (
    <>
        <div className="row">
            <div className="col-sm-12">
                <h1 className="hgray"><i class="fas fa-infinity fa-mr-h"></i>
                    Calendario</h1>
                <hr />
            </div>
        </div>
        <div className="row">
            <div className="col-sm-12">
                <p className="lead">
                    Se aprobó en Consejo Directivo, con el apoyo de los 3 claustros, el nuevo Calendario para el segundo cuatrimestre, a partir de la propuesta consensuada que les compartimos la semana pasada y los aportes de todos los Consejeros.
                </p>
                <p className="lead">Respecto de esa propuesta, se corre la fecha de examen propuesta para diciembre a la primer o segunda semana de cursada, sin cortar la cursada en ningún caso.</p>
                <p className="lead">Además las materias que, debido a situaciones muy particulares, no puedan garantizar alguna fecha de final, podrán pedir una excepción a la Secretaría de Gestión Académica justificando debidamente la situación (limitaciones de recursos, pocos docentes para la cantidad de estudiantes).</p>
                <p className="lead">Este resultado es fruto del trabajo que venimos haciendo en conjunto con los profesores de la facultad desde principios de este cuatrimestre y de manera constante hasta el día de hoy, con el seguimiento correcto, sabiendo las problemáticas que presenta la situación de pandemia actual.</p>
                <p className="lead">Durante todo el proceso, fue para nosotros muy importante consensuar un único calendario, con reglas claras para todos los cursos, y así evitar a futuro los malentendidos constantes que tuvimos con diversas materias durante esta primera etapa de la pandemia.</p>
                <p className="lead">Se estableció que el segundo cuatrimestre arrancará de forma virtual, pero se podrá adaptar a otras modalidades según el contexto lo permita.</p>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-12">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Semana</th>
                            <th scope="col" className="cursada">Cursada</th>
                            <th scope="col" className="finales">Finales</th>
                            <th scope="col" className="receso">Receso</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">17/8/2020</th>
                            <td className="cursada">1C finaliza 22/08</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">24/8/2020</th>
                            <td></td>
                            <td></td>
                            <td className="receso"></td>
                        </tr>
                        <tr>
                            <th scope="row">31/8/2020</th>
                            <td></td>
                            <td></td>
                            <td className="receso"></td>
                        </tr>
                        <tr>
                            <th scope="row">07/9/2020</th>
                            <td></td>
                            <td className="finales"> 1°fecha 1C</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">14/9/2020</th>
                            <td></td>
                            <td className="finales"> 2°fecha 1C</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">21/9/2020</th>
                            <td></td>
                            <td className="finales"> 3°fecha 1C</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">28/9/2020</th>
                            <td className="cursada"></td>
                            <td rowSpan="2" className="finales"> 4°fecha 1C</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">05/10/2020</th>
                            <td className="cursada"></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">12/10/2020</th>
                            <td className="cursada"></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">19/10/2020</th>
                            <td className="cursada"></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">26/10/2020</th>
                            <td className="cursada"></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">02/11/2020</th>
                            <td className="cursada"></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">09/11/2020</th>
                            <td className="cursada"></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">16/11/2020</th>
                            <td className="cursada"></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">23/11/2020</th>
                            <td className="cursada"></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">30/11/2020</th>
                            <td className="cursada"></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">7/12/2020</th>
                            <td className="cursada"></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">14/12/2020</th>
                            <td className="cursada"></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">21/12/2020</th>
                            <td></td>
                            <td></td>
                            <td className="receso"></td>
                        </tr>
                        <tr>
                            <th scope="row">28/12/2020</th>
                            <td></td>
                            <td></td>
                            <td className="receso"></td>
                        </tr>
                        <tr>
                            <th scope="row">04/1/2021</th>
                            <td></td>
                            <td></td>
                            <td className="receso"></td>
                        </tr>
                        <tr>
                            <th scope="row">11/1/2021</th>
                            <td></td>
                            <td></td>
                            <td className="receso"></td>
                        </tr>
                        <tr>
                            <th scope="row">18/1/2021</th>
                            <td></td>
                            <td></td>
                            <td className="receso"></td>
                        </tr>
                        <tr>
                            <th scope="row">25/1/2021</th>
                            <td></td>
                            <td></td>
                            <td className="receso"></td>
                        </tr>
                        <tr>
                            <th scope="row">01/2/2021</th>
                            <td></td>
                            <td className="finales"> 5°fecha 1C</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">08/2/2021</th>
                            <td className="cursada"></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">15/2/2021</th>
                            <td className="cursada"></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">22/2/2021</th>
                            <td className="cursada"></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">01/3/2021</th>
                            <td className="cursada"></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">08/3/2021</th>
                            <td></td>
                            <td className="finales"> 1°fecha 2C</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">15/3/2021</th>
                            <td></td>
                            <td className="finales"> 2°fecha 2C</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">22/3/2021</th>
                            <td></td>
                            <td className="finales"> 3°fecha 2C</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">29/3/2021</th>
                            <td></td>
                            <td className="finales"> 4°fecha 2C</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">05/4/2021</th>
                            <td></td>
                            <td className="finales"> 5°fecha 2C</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">12/4/2021</th>
                            <td className="cursada"></td>
                            <td></td>
                            <td></td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-12">
                <p className="lead">
                    En total, contando tanto la primera como la segunda tanda, el 2do cuatrimestre 2020 constará de 16 semanas.
                </p>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-12">
                <br /><br />
                <h1 className="hgray"><i class="fas fa-infinity fa-mr-h"></i>
                    Reglamento Finales Virtuales</h1>
                <hr />
            </div>
        </div>
        <div className="row">
            <div className="col-sm-12">
                <p className="lead">
                    Además de las fechas, se definió el reglamento para rendir finales virtuales. Van a poder encontrarlo en el link de nuestra bio junto con las fechas que pusimos arriba en forma de calendario, para que lo puedan revisar de manera más cómoda.
                </p>
                <a className="btn btn-lg btn-primary blanco" href="/files/proyecto-res-integradoras.pdf" role="button" target="blank">
                    <i className="fas fa-file fa-mr"></i>
                    Mirá la reglamentación acá
                </a>
            </div>
        </div>

        <style jsx>{`
            .cursada,.finales,.receso{
               font-weight: 600;
               vertical-align: middle;
            }
           .cursada{
               background-color: ${Colors.warning};

           }
            .finales{
               background-color: ${Colors.success};
           }
            .receso{
               background-color: ${Colors.danger};
           }

           td,th{
               text-align: center;               
           }
                       .blanco{
                color: #f8f9fa;
            }
            .blanco:hover{
                color: #f8f9fa;
            }
        `}</style>
    </>
);

export default pagina;