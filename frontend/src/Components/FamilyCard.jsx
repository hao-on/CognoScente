import './Style/FamilyCard.css'

const FamilyCard = ({ item }) => {
    return (
        <div class="card border-0 rounded-0 bg-transparent">
            <div class="card-body">
                <h5 class="card-title">{item.title}</h5>
                <p class="card-text">{item.description}</p>
                <div className=" text-end">
                    <a href={item.page} className="text-black">Shop now</a>
                </div>

            </div>
        </div>
    )
}

export default FamilyCard