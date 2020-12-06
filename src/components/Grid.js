import React from 'react';

import Data from "../assets/json/data.json";
import Barras from './Barras';
import Pastel from './Pastel';

class TablaNueva extends React.Component {
    render() {
        let nuevosDatos = this.props.nuevoDato;
        if (nuevosDatos.length === 0) {
            nuevosDatos = new Array();
        }
        return (
            <table>
                <thead>
                    <tr>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">ID</th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Nombre</th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Total</th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">1 - 4 integrantes</th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">5 integrantes</th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">6 integrantes</th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">7 integrantes</th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">8 integrantes</th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">9 o más integrantes</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        nuevosDatos.map((dato, index) => {
                            let colorNuevo = (index % 2) ? "bg-green-300" : "bg-red-300";
                            let sumaUnoCuatro = dato.un_integrante + dato.dos_integrantes + dato.tres_integrantes + dato.cuatro_integrantes;
                            return (
                                <tr className={colorNuevo + " lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0"} key={dato.id}>
                                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">{dato.id}</td>
                                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">{dato.nom_mun}</td>
                                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">{dato.total}</td>
                                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">{sumaUnoCuatro}</td>
                                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">{dato.cinco_integrantes}</td>
                                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">{dato.seis_integrantes}</td>
                                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">{dato.siete_integrantes}</td>
                                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">{dato.ocho_integrantes}</td>
                                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">{dato.nueveymas_integrantes}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        );
    }
}




class Grid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tablaDatos: Array().fill(null),
            bandera: true,
            ancho : 600,
            alto : 300,
            radio : 80,
        }
    }

    handleClick(dato, i) {

        let historia = this.state.tablaDatos.slice();
        if (!historia.length) {
            this.setState({
                tablaDatos: [
                    ... this.state.tablaDatos,
                    dato
                ],
                bandera: false
            });
        }
        else {
            let comprueba = historia.find(id => id.id === i);
            if (comprueba !== undefined && comprueba.id === i) {
                return;
            }
            else {
                this.setState({
                    tablaDatos: [
                        ... this.state.tablaDatos,
                        dato
                    ]
                });
            }
        }
    }

    render() {
        return (
            <div className="grid grid-cols-12 grid-rows-2 gap-4 bg-grisClaro">
                <div className="container col-span-6 overflow-x-auto p-7 bg-guinda">
                    <table>
                        <thead>
                            <tr>
                                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">ID</th>
                                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Clave entidad</th>
                                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Entidad</th>
                                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Clave municipio</th>
                                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Municipio</th>
                                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Total</th>
                                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">1 integrante</th>
                                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">2 integrantes</th>
                                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">3 integrantes</th>
                                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">4 integrantes</th>
                                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">5 integrantes</th>
                                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">6 integrantes</th>
                                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">7 integrantes</th>
                                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">8 integrantes</th>
                                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">9 o más integrantes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Data.map((dato, index) => {
                                    let i = dato.id;
                                    let color = (index % 2) ? "bg-green-50" : "bg-white";
                                    return (
                                        <tr onClick={() => this.handleClick(dato, i)} className={color + " lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0"} key={dato.id}>
                                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static cursor-pointer">{dato.id}</td>
                                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static cursor-pointer">{dato.cve_ent}</td>
                                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static cursor-pointer">{dato.nom_ent}</td>
                                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static cursor-pointer">{dato.cve_mun}</td>
                                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static cursor-pointer">{dato.nom_mun}</td>
                                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static cursor-pointer">{dato.total}</td>
                                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static cursor-pointer">{dato.un_integrante}</td>
                                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static cursor-pointer">{dato.dos_integrantes}</td>
                                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static cursor-pointer">{dato.tres_integrantes}</td>
                                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static cursor-pointer">{dato.cuatro_integrantes}</td>
                                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static cursor-pointer">{dato.cinco_integrantes}</td>
                                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static cursor-pointer">{dato.seis_integrantes}</td>
                                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static cursor-pointer">{dato.siete_integrantes}</td>
                                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static cursor-pointer">{dato.ocho_integrantes}</td>
                                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static cursor-pointer">{dato.nueveymas_integrantes}</td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div className="col-span-6 overflow-x-auto px-7 bg-verde">
                    <Pastel 
                        radio={this.state.radio}
                    />
                    <Barras 
                        ancho={this.state.ancho}
                        alto={this.state.alto}
                    />
                </div>
                <div className="col-span-12 bg-dorado overflow-x-auto p-7">
                    <TablaNueva nuevoDato={this.state.tablaDatos} />
                </div>
            </div>
        );
    }
}

export default Grid;