import { Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../components/loader";
import useMartyersDetails from "../../hooks/useMartyersDetails";
import "./style.css";

const MartyerDetails = () => {
  const { id } = useParams();
  console.log(id);
  const { isLoading, martyer } = useMartyersDetails(id);
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate("/");
  };
  const handleEditPage = (id: string) => {
    navigate(`/admin/updateMartyer/${id}`);
  };
  console.log(martyer?.people[0]?._id);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <div
            className="martyers_container"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2,1fr)",
              width: "90%",
              margin: "auto",
            }}
          >
            <div
              className="martyers_image"
              style={{
                display: "flex",
                flexDirection: "column",
                width: "600px",
              }}
            >
              <h1 className="martyers_name">{martyer?.people[0]?.name}</h1>
              <img
                style={{ width: "100%", height: "500px", objectFit: "cover" }}
                src={`${martyer?.people[0]?.personalImage}`}
              />
              <div className="martyer_details_button_container">
                <Button
                  variant="contained"
                  sx={{ margin: "10px 10px", textTransform: "capitalize" }}
                  onClick={handleGoBack}
                >
                  Go Back
                </Button>
                <Button
                  variant="contained"
                  sx={{ margin: "10px 0", textTransform: "capitalize" }}
                  onClick={() => handleEditPage(martyer?.people[0]?._id)}
                >
                  Edit Data
                </Button>
              </div>
            </div>
            <div className="martyers_info" style={{ width: "600px" }}>
              <div className="personal_info" style={{ background: "#ededed" }}>
                <p>Profession: </p>
                <p>Born:</p>
                <p>Age: </p>
                <p>Hometown: </p>
                <p>Died</p>
                <p>Education</p>
              </div>
              <div className="short_biography">
                <p
                  className="martyers_biography_heading"
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    margin: "10px",
                    textAlign: "right",
                  }}
                >
                  Short Biography
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus eius quibusdam perspiciatis suscipit illo veniam
                  dolorem praesentium ex accusantium? Architecto, ratione ullam
                  numquam doloribus eaque iure eius nesciunt aliquid, tempore
                  fuga minus minima, sint cum distinctio! Provident optio
                  possimus in vitae beatae, tempora, asperiores aperiam laborum
                  velit numquam dicta non! Libero quam, cum recusandae dolorem
                  eaque culpa magni a fugit nisi, at ipsam nobis architecto.
                  Aliquam aut cupiditate explicabo a nam odit voluptate corporis
                  labore incidunt commodi ipsa, officiis, doloribus quos
                  temporibus? Nulla, odio debitis ab quam eaque nam deleniti quo
                  cumque eos repellendus natus, aspernatur recusandae ut neque
                  qui!
                </p>
              </div>
              <div className="martyers_death">
                <p
                  className="martyers_death_heading"
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    margin: "10px",
                    textAlign: "right",
                  }}
                >
                  Death
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis animi earum voluptas exercitationem dicta! Deserunt
                  suscipit dolorem aspernatur explicabo quasi animi distinctio.
                  Ipsa quidem molestias dolores? Nam aut quam reprehenderit,
                  debitis dolorem laboriosam nulla id aspernatur consequatur
                  dolores. Perspiciatis est minima excepturi fugit quibusdam
                  enim maiores facilis nemo quisquam necessitatibus dolor, esse,
                  expedita optio officia voluptas corrupti! Architecto ipsam
                  quam beatae omnis provident. Quidem impedit ut optio
                  cupiditate saepe corporis eum assumenda voluptate. Dignissimos
                  minima beatae laudantium error eveniet odio hic odit! Tenetur
                  nesciunt ducimus alias, necessitatibus optio suscipit id
                  delectus dolore reprehenderit, magni quidem laborum autem
                  dignissimos et maxime.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MartyerDetails;
