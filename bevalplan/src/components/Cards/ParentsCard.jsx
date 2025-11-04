import { useContext } from "react";
import { MyContext } from "../../context/MyContext";

export default function ParentsCard() {
    const { data, setData, name, setName, mostImportant, setMostImportant } = useContext(MyContext);

    const handleChange = (value, index) => {
        const newName = [...name];
        newName[index] = value;
        setName(newName);
    };

    return (
        <div className="card-body">
            <div className="mb-3">
                <label htmlFor="naamInput" className="form-label">Geboorteplan van:</label>
                <input type="text" className="form-control" id="naamInput" placeholder={name[0]} onChange={(e) => handleChange(e.target.value, 0)} />
            </div>
            
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value={name[1]} id="koppel" onChange={(e) => handleChange(e.target.checked, 1)} />
                <label className="form-check-label" htmlFor="koppel">
                    Toon koppel
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value={name[2]} id="koppelKind" onChange={(e) => handleChange(e.target.checked, 2)} />
                <label className="form-check-label" htmlFor="koppelKind">
                    Toon koppel met kind
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value={name[3]} id="zorgverlener" onChange={(e) => handleChange(e.target.checked, 3)} />
                <label className="form-check-label" htmlFor="zorgverlener">
                    Toon doula/verloskundige/vroedvrouw
                </label>
            </div>
        </div>
    );
};
