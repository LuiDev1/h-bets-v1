import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../css/style.css';

import ValorBet from './forms/valorAposta'
import Sportsbook from './forms/sportsbook';
import DescriptionBet from './forms/description'
import Date from './forms/date'
import Situation from './forms/situation'
import Odd from './forms/odd'

// IMAGENS
import yes from './images/yes.png';
import no from './images/no.png'

function Formulario(props) {
    const [tableData, setTableData] = useState([]);
    const [descInput, setDesc] = useState('');
    const [bookInput, setBook] = useState('');
    const [situInput, setSitu] = useState('');
    const [dateInput, setDate] = useState('');
    const [oddInput, setOdd] = useState('');
    const [valorInput, setValor] = useState('');



    const handleSitu = (valor) => setSitu(valor);
    const handleDesc = (valor) => setDesc(valor);
    const handleBook = (valor) => setBook(valor);
    const handleDate = (valor) => setDate(valor);
    const handleOdd = (valor) => setOdd(valor);
    const handleValor = (valor) => setValor(valor);

    function handleClearInput() {
        setDesc('');
        setBook('');
        setSitu('');
        setDate('');
        setOdd('');
        setValor('');
    }

    function handleHideAlerts() {
        setShowAlertSucess(false);
        setShowAlertError(false);
    }
    
    function handleAddToTable() {
        if (descInput === '' || situInput === '' || bookInput === '' || dateInput === '' || oddInput === '' || valorInput === '') {
            setShowAlertError(true);
            setTimeout(handleHideAlerts, 10000);
            return;
        }
        
        
        const newLine = {
            description: descInput,
            situation: situInput,
            sportsbook: bookInput,
            dateBet: dateInput,
            oddBet: oddInput,
            valorBet: valorInput,
            calc: (() =>{
                switch (situInput){
                    case "Ganho":
                        return parseFloat(valorInput.replace(/[^\d,]/g, '').replace(',', '.')) * parseFloat(oddInput.replace(/[^\d,]/g, '').replace(',', '.'));

                    case "Perdida":
                        return 0;

                    case "Pendente":
                        return "Pendente"

                    default:
                        return ""
                }
                
            })()
        };

        setTableData([...tableData, newLine]);

        if (setShowAlertError) {
            setShowAlertError(false);
            setShowAlertSucess(true);
            setTimeout(handleHideAlerts, 10000);
        }
        
        
        handleClearInput();
    }

    const [showAlertSuccess, setShowAlertSucess] = useState(false);

    const [showAlertError, setShowAlertError] = useState(false);





    return (
        <div>

            <div className='container-forms d-flex flex-column h-50 align-items-stretch gap-4 mt-5'>
                <div className='text-center'>
                    <h2 className='text-white fs-2'>Adicionar Aposta</h2>
                </div>

                {showAlertSuccess && (
                    <div className="alert alert-success alert-dismissible fade show d-flex align-items-center justify-content-center gap-2" role="alert">
                        <img src={yes} alt="Sucesso" width="20px" />
                        Sua aposta foi adicionada com sucesso!
                    </div>
                )}

                {showAlertError && (
                    <div className="alert alert-danger alert-dismissible fade show d-flex align-items-center justify-content-center gap-2" role="alert">
                        <img src={no} alt="Erro" width="20px" />
                        Por favor, preencha todos os campos.
                    </div>
                )}
                <div className='group-addBet d-flex gap-4'>
                    <ValorBet value={valorInput} onChange={handleValor} />
                    <Odd value={oddInput} onChange={handleOdd} />
                    <Sportsbook value={bookInput} onChange={handleBook} />
                </div>

                <div className='group-addBet d-flex justify-content-center gap-4'>
                    <DescriptionBet value={descInput} onChange={handleDesc} />
                    <Date value={dateInput} onChange={handleDate} />
                </div>

                <div className='group-addBet d-flex justify-content-center gap-4'>
                    <Situation value={situInput} onChange={handleSitu} />
                </div>
                <button className='btnBet' onClick={handleAddToTable}>Enviar</button>
            </div>

            <div>
                <table className='rwd-table'>
                    <thead>
                        <tr>
                            <th data-th="Descrição" >Descrição</th>
                            <th data-th="Casa">Casa</th>
                            <th data-th="Data">Data</th>
                            <th data-th="Valor">Valor</th>
                            <th data-th="Odd">Odd</th>
                            <th data-th="Situação">Situação</th>
                            <th data-th="Retorno">Retorno</th>
                        </tr>
                    </thead>

                    <tbody>
                        {tableData.map((row, index) => (
                            <tr key={index}>
                                <td data-th="Descrição">{row.description}</td>
                                <td data-th="Casa">{row.sportsbook}</td>
                                <td data-th="Data">{row.dateBet}</td>
                                <td data-th="Valor">{row.valorBet}</td>
                                <td data-th="Odd">{row.oddBet}</td>
                                <td data-th="Situação" className={
                                    (() => {
                                        switch (row.situation) {
                                            case "Ganho":
                                                return "situation-won";
                                            case "Perdida":
                                                return "situation-lost";
                                            case "Pendente":
                                                return "situation-pending";
                                            default:
                                                return "";
                                        }
                                    })()
                                }>{row.situation}</td>
                                <td data-th="Retorno">R$ {row.calc}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Formulario;