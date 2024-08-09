import NotFound from "../../assets/notFound.png"
import "./style.css"

const NotFoundPage = () => {
    return (
        <div className="not_found_container">
            <img src={NotFound} alt="not found page" />
        </div>
    );
};

export default NotFoundPage;