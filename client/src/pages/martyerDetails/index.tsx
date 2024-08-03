import { useParams } from "react-router-dom";

const MartyerDetails = () => {

    const {id} = useParams()
    console.log(id)
    return (
        <div>
            <h2>Details information</h2>
        </div>
    );
};

export default MartyerDetails;