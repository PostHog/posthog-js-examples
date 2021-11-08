function Benefit({headingText}) {
    return (
        <>
        <h3>{headingText}</h3>
        <div style={{display: "flex"}}>
            <p>Laboris exercitation deserunt enim ullamco. Sit sunt elit excepteur eiusmod dolor non proident commodo amet fugiat consectetur ex eiusmod elit.</p>
            <img src="https://dummyimage.com/200x100/000/fff" style={{width: "200px", marginLeft: "20px"}} />
        </div>
        </>
    )
}

function BusinessBenefits() {
    return (
        <>
        <h2>Why Awesome API?</h2>

        <Benefit headingText="Flexible" />

        <Benefit headingText="Scalable" />

        <Benefit headingText="Global" />
        </>
    )
}

export default BusinessBenefits