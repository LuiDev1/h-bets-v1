// IMPORTAÇÕES
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import moment from 'moment';
import 'moment/locale/pt-br'; // importe o locale para o português do Brasil

// CSS
import '../css/style.css';

// BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';


// COMPONENTES
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
    // CHAMANDO OS INPUTS

    // CRIANDO A TABELA
    const [tableData, setTableData] = useState([]);

    // INPUT DESCRIÇÃO
    const [descInput, setDesc] = useState('');

    // INPUT SPORTSBOOK
    const [bookInput, setBook] = useState('');

    // INPUT SITUAÇÃO
    const [situInput, setSitu] = useState('');

    // INPUT DATA
    const [dateInput, setDate] = useState('');

    // INPUT ODD
    const [oddInput, setOdd] = useState('');

    // INPUT VALOR
    const [valorInput, setValor] = useState('');


    // CRIANDO UM HANDLE DE CONEXÃO COM OS COMPONENTES
    const handleSitu = (valor) => setSitu(valor);
    const handleDesc = (valor) => setDesc(valor);
    const handleBook = (valor) => setBook(valor);
    const handleDate = (valor) => setDate(valor);
    const handleOdd = (valor) => setOdd(valor);
    const handleValor = (valor) => setValor(valor);


    // LIMPANDO OS VALORES AO CLICAR NO BOTÃO
    function handleClearInput() {
        setDesc('');
        setBook('');
        setSitu('');
        setDate('');
        setOdd('');
        setValor('');
    }

    // ATIVANDO O ALERTA
    function handleHideAlerts() {
        setShowAlertSucess(false);
        setShowAlertError(false);
    }

    // CHAMANDO OS ALERTAS
    const [showAlertSuccess, setShowAlertSucess] = useState(false);

    const [showAlertError, setShowAlertError] = useState(false);

    // CRIANDO A TABELA
    function handleAddToTable() {
        // VALIDAÇÃO
        if (descInput === '' || situInput === '' || bookInput === '' || dateInput === '' || oddInput === '' || valorInput === '') {
            setShowAlertError(true);
            setTimeout(handleHideAlerts, 10000);
            return;
        }

        // VALORES DA TABELA
        const newLine = {
            description: descInput,
            situation: situInput,
            sportsbook: bookInput,
            dateBet: dateInput,
            oddBet: oddInput,
            valorBet: valorInput,
            calc: (() => {
                // VARIAÇÕES DO CALCULO FINAL
                switch (situInput) {
                    case "Ganho":
                        const valor = parseFloat(valorInput.replace(/[^\d,]/g, '').replace(',', '.'));
                        const odd = parseFloat(oddInput.replace(/[^\d,]/g, '').replace(',', '.'));
                        const resultado = valor * odd;
                        return resultado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

                    case "Perdida":
                        return 0;

                    case "Pendente":
                        return "Pendente"

                    default:
                        return ""
                }

            })()
        };

        // CRIANDO A TABELA FINAL
        setTableData([...tableData, newLine]);

        // DEFININDO O ALERTA A SER MOSTRADO
        if (setShowAlertError) {
            setShowAlertError(false);
            setShowAlertSucess(true);
            setTimeout(handleHideAlerts, 10000);
        }


        // CHAMANDO A FUNÇÃO DE LIMPAR OS CAMPOS APÓS PREENCHER A TABELA
        handleClearInput();
    }






    return (
        <div>

            <div className='container-forms d-flex flex-column h-50 align-items-stretch gap-4 mt-5'>
                <div className='text-center'>
                    {/* TITULO DA PAGINA */}
                    <h2 className='text-white fs-2'>Adicionar Aposta</h2>
                </div>

                {/* ALERTA DE SUCESSO */}
                {showAlertSuccess && (
                    <div className="alert alert-success alert-dismissible fade show d-flex align-items-center justify-content-center gap-2" role="alert">
                        <img src={yes} alt="Sucesso" width="20px" />
                        Sua aposta foi adicionada com sucesso!
                    </div>
                )}

                {/* ALERTA DE ERRO */}
                {showAlertError && (
                    <div className="alert alert-danger alert-dismissible fade show d-flex align-items-center justify-content-center gap-2" role="alert">
                        <img src={no} alt="Erro" width="20px" />
                        Por favor, preencha todos os campos.
                    </div>
                )}
                <div className='group-addBet d-flex gap-4'>
                    {/* INPUT VALOR */}
                    <ValorBet value={valorInput} onChange={handleValor} />

                    {/* INPUT ODD */}
                    <Odd value={oddInput} onChange={handleOdd} />

                    {/* INPUT SPORTSBOOK */}
                    <Sportsbook value={bookInput} onChange={handleBook} />
                </div>

                <div className='group-addBet d-flex justify-content-center gap-4'>
                    {/* INPUT DESCRIÇÃO */}
                    <DescriptionBet value={descInput} onChange={handleDesc} />

                    {/* INPUT DATA */}
                    <Date value={dateInput} onChange={handleDate} />
                </div>

                <div className='group-addBet d-flex justify-content-center gap-4'>
                    {/* INPUT SITUAÇÃO */}
                    <Situation value={situInput} onChange={handleSitu} />
                </div>

                {/* BOTÃO PARA ENVIAR AS INFORMAÇÕES A TABELA */}
                <button className='btnBet' onClick={handleAddToTable}>Enviar</button>
            </div>

            <div>
                <table className='rwd-table'>
                    {/* CABEÇALHO DA TABELA */}
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

                    {/* CORPO DA TABELA, CHAMANDO E CRIANDO A TABELA NO HTML APÓS O CLIQUE */}
                    <tbody>
                        {tableData.map((row, index) => (
                            <tr key={index}>
                                <td data-th="Descrição">{row.description}</td>
                                <td data-th="Casa">{row.sportsbook}</td>
                                <td data-th="Data">{moment(row.dateBet).format('DD/MM/YYYY')}</td>
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
                                <td data-th="Retorno">{row.calc}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Formulario;