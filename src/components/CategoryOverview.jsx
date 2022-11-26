import '../styles/CategoryOverview.scss'

function CategoryOverview({ categoryName, img, device }) {
    return (
        <div className="category">
            {
                device && 
                <img src={require(`../assets/home/${device}/image-${img}.jpg`)} alt={`${categoryName}`} width="100%" height="100%" />
            }
            <h2>{categoryName}</h2>
            <a href="#">View Projects</a>
        </div>
    )
}

export default CategoryOverview
