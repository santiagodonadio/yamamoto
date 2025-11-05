import './Pitches.css'

export default function Pitches({selectedPitch, setSelectedPitch}) {

    const pitches = ["Fastball", "Splitter", "Curveball", "Cutter", "Slider", "Sinker"]

    return (

        <div className='centerCalls'>

            {pitches.map((pitch) => (
                <button
                    key={pitch}
                    onClick={() => setSelectedPitch(pitch)}
                    className={selectedPitch === pitch ? "selected" : ""}
                >
                    {pitch}
                </button>
            ))}


            


        </div>

    )
}
