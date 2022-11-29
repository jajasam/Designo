import '../styles/LeafBgPattern.scss'

function LeafBgPattern({ position, distanceTop }) {
    return (
        <div className={`bg-leaf ${position === 'top' ? 'top' : 'bottom'}`} style={{top: `${distanceTop}px`}}>
            <img src={require("../assets/shared/desktop/bg-pattern-leaf.svg").default} alt="Leaf pattern" width="1006px" height="594px" />
        </div>
    )
}

export default LeafBgPattern
