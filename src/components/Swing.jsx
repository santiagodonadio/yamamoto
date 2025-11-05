import './Swing.css'

export default function Swing({handleSwing, result}) {

    return (

        <div className='swing-content'>
            <button onClick={handleSwing}>Swing</button>

            {result && <h3 className='result'>{result}</h3>}

        </div>




    );
}
