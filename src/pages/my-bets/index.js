import React from 'react';

// BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';

// CSS
import './css/style.css';

// COMPONENTES
import Planilha from './components/planilha';
import FormAposta from './components/forms';



const MinhasApostas = () => {
  return (
    <section className='table-excel d-flex justify-content-center'>
      <div className='container-minhasApostas'>
        <FormAposta />
      </div>

      {/* <div>
        <Planilha />
      </div> */}
    </section>
  );
};

export default MinhasApostas;
