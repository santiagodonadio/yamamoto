import './StrikeZone.css'

function StrikeZone(){

    return (

        <div className='centerr'>

            <div className='options'>
                <button onClick={alert}>4 Seam Fastball</button>
                <button>Spliter</button>
                <button>Curveball</button>
                <button>Cutter</button>
                <button>Slider</button>
                <button>Sinker</button>
            </div>

            
            

            <div className="strikezone">
                <div className='box'>1</div>
                <div className='box'>2</div>
                <div className='box'>3</div>
                <div className='box'>4</div>
                <div className='box'>5</div>
                <div className='box'>6</div>
                <div className='box'>7</div>
                <div className='box'>8</div>
                <div className='box'>9</div>
            </div>
            

        </div>
        
        



    );
}

export default StrikeZone