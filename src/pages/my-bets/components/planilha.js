import React, { useState } from 'react';
import HotTable from 'react-handsontable';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../css/style.css';


const column = [
  'Coluna 1',
  'Coluna 2',
  'Coluna 2',
  'Coluna 3'
]

const row = [
  'Linha 1',
  'Linha 2',
  'Linha 3',
  'Linha 4'
]

const Planilha = () => {
  const [data, setData] = useState([
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', '']
  ]);

  const addColumn = () => {
    const newData = data.map(row => [...row, '']);
    setData(newData);
  };

  const addRow = () => {
    const newRow = ['', '', '', ''];
    const newData = [...data, newRow];
    setData(newData);
  };


 

  return (
    <section className='table-excel d-flex justify-content-center'>

      <div className='table-excel d-flex justify-content-center'>
        <div>
          <HotTable
            data={data}
            colHeaders={column}
            rowHeaders={row}
            className='hot-table'
          />
          <button onClick={addColumn}>Adicionar coluna</button>
          <button onClick={addRow}>Adicionar linha</button>
        </div>
      </div>
    </section>
  );
};

export default Planilha;
