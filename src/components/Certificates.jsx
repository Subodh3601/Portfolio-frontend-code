
import "../styles/certificates.scss";
import { useSelector } from "react-redux";
import { certificatesSelector } from "../redux/reducer";

const Certificates = () => {
  const certificates = useSelector(certificatesSelector);

  return (
    <div className="certificates">
      <h2 className="card-heading">CERTIFICATES</h2>
      <div className="card">
        
          {certificates.map((item, index) => (
            <div className="card_outerdiv" key={index}>
              <a href={item.link} target="_blank" >
                <img src={item.filename} alt={item.desc} />
              </a>
              <div className="card_outerdiv_desc">{item.desc.toUpperCase()}</div>
            </div>
          ))}
        </div>
      
    </div>
  );
};

export default Certificates;
