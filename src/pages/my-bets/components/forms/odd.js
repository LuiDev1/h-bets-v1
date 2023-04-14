// IMPORTAÇÕES
import React, { useState, useEffect } from "react";

// BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';

// CSS
import '../../css/style.css';


// INICIO DA FUNÇÃO PRINCIPAL
function Odd(props) {

    // CRIANDO UM USESTATE PARA USAR O INPUT NO COMPONENTE PAI
    const [odd, setOdd] = useState("");

    // USEEFFECT CRIADO PARA ATUALIZAR OS INPUTS PARA VAZIO
    useEffect(() => {
        setOdd(props.value);
      }, [props.value]);

      // FORMATANDO O INPUT PARA FORMATO ODD E SALVANDO EM UMA PROPS
    function handleOddChange(e) {

        setOdd(e.target.value);
        props.onChange(e.target.value);
        
        const value = e.target.value.replace(/[^\d.]/g, ""); // remove tudo que não for número ou ponto
        const parts = value.split("."); // separa a string pelos pontos
        let formattedValue = "";

        if (parts.length === 1) {
            // não tem ponto, adiciona no máximo três números
            formattedValue = parts[0].slice(0, 3);
        } else if (parts.length === 2) {
            // tem um ponto, adiciona no máximo três números antes do ponto e um depois do ponto
            formattedValue = parts[0].slice(0, 3) + "." + parts[1].slice(0, 2);
        } else if (parts.length > 2) {
            // tem mais de um ponto, considera apenas o primeiro e o segundo trechos
            formattedValue = parts[0].slice(0, 3) + "." + parts[1].slice(0, 2);
        }

        setOdd(formattedValue);
    }

    //RETORNANDO O INPUT PARA O COMPONENTE PAI
    return (
        <form>
            <label htmlFor='value-odd' className="text-white mb-2">Odd</label>
            <div className="input-group mb-3">

                <span className="input-group-text">Odd</span>
                <div className="form-floating">
                    <input className="form-control input_Odd" type="text" placeholder="Insira a odd" id="value-odd" value={odd} onChange={handleOddChange} />
                    <label htmlFor="value-odd">Odd</label>
                </div>
            </div>
        </form>
    );
}

export default Odd;
