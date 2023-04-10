import React from 'react';

// BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';

// CSS
import './css/style.css'

// COMPONENTES
import Plans from './components/plans'
import Parallax from './components/parallax';


const Page = () => {
    return (
        <main>
            <section>
                <Parallax />
            </section>

        
        <section>
            <Plans />   
        </section>
        </main>
    );
}

export default Page;