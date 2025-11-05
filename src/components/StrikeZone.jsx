import './StrikeZone.css'

export default function StrikeZone({selectedZone, setSelectedZone}){

    const zones = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    return (

        <div className="strikezone">

            {zones.map((zone) => (
                <button
                    key={zone}
                    onClick={() => setSelectedZone(selectedZone === zone ? null: zone)}
                    className={selectedZone === zone ? "selected": ""}
                >
                    {zone}
                </button>
            ))}

        </div>
        



    );
}
