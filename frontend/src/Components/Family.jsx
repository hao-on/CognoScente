import { families } from "../data";
import FamilyCard from "./FamilyCard";
import './Style/Family.css'

function Family() {
    return (
        <>
        <div className="container-fluid family-container">
            <h1 className="text-center fw-bold my-5">Scent</h1>
            <div className="row">
                <div className="col-12 col-md-5">
                <div className="svg-container">
                    <svg 
                        fill="#fff" 
                        viewBox="0 0 256.00 256.00" 
                        id="Flat" 
                        xmlns="http://www.w3.org/2000/svg" 
                        stroke="#808080" 
                        stroke-width="1" transform="matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M180,96V224a8,8,0,0,1-16,0V168H76a8.00033,8.00033,0,0,1-7.54395-10.66211l47.99707-136a7.99988,7.99988,0,0,1,15.0879,5.32422L87.30664,152H164V96a8,8,0,0,1,16,0Z"></path> </g>
                    </svg>
                    <h1>families</h1>
                </div>

                </div>
                <div className="col-12 col-md-5">
                    { families.map((item) => (
                        <div class="row">
                            <FamilyCard item={item} key={item.id} />
                        </div>
                    )) }
                </div>
            </div>
        </div>
        </>

    )
}

export default Family