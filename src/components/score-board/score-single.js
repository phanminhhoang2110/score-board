const ScoreSingle = ({color, score, gam = []}) => {
    return (
        <div style={{width: "50%"}}>
            <div style={{backgroundColor: color, color: "white", fontSize: 300}}>{score}</div>
            <div style={{display: 'flex', flexDirection: "row", justifyContent: 'center', marginTop: '10px'}}>
            {
                gam.map(() => {
                    return (
                        <div style={{backgroundColor: "#f14c4c", width: '20px', height: '20px', margin: '5px', borderTopRightRadius: "5px", borderBottomLeftRadius: '5px'}}>
                            
                        </div>
                    )
                })
            }
            </div>
        </div>
    );
}

export default ScoreSingle