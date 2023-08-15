import { Link } from 'react-router-dom';
import './Style/FamilyCard.css'

const FamilyCard = ({ item }) => {
    return (
        <div class="card border-0 rounded-0 bg-transparent">
            <div class="card-body">
                <h5 class="card-title">{item.title}</h5>
                <p class="card-text family-card-description">{item.description}</p>
                <Link
                    to={item.page}
                    className="text-end text-black"
                    onClick={() => {
                        window.scroll({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                        });
                    }}
                >
                    Shop now
                </Link>
            </div>
        </div>
    )
}

export default FamilyCard