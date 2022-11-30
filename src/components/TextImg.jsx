import '../styles/TextImg.scss'

function TextImg ({ title, description, img, device, isReverse }) {
    return (
        <div className={`text_img ${isReverse ? 'reverse' : ''}`}>
            <img src={require(`../assets/about/${device}/image-${img}.jpg`)} alt={`${title}`} width="100%" height="auto" />
            <div className="text">
                <h2>{title}</h2>
                <p>{description[0]}</p>
                <p>{description[1]}</p>
            </div>
        </div>
    )
}

export default TextImg
