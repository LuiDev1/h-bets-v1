import React from 'react';

// BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';

// CSS
import './css/style.css';

// COMPONENTES
import FormAposta from './components/forms';



const MinhasApostas = () => {
  return (
    <section className='table-excel d-flex justify-content-center'>
      <div className='container-minhasApostas'>
        <FormAposta />
      </div>
    </section>
  );
};

export default MinhasApostas;
