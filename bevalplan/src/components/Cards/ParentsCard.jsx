import { useContext } from "react";
import { MyContext } from "../../context/MyContext";

export default function ParentsCard() {
    const { otherData, setOtherData } = useContext(MyContext);
    const handleChangeName = (value, id) => {
        setOtherData(prevData => {
            const newValues = prevData[0].values.map(v => 
                v.id === id ? { ...v, value: value } : v
            );
            const newOtherData = [...prevData];
            newOtherData[0] = { ...newOtherData[0], values: newValues };
            return newOtherData;
        }
        );
    };
    const handleChangeShow = (value, ids) => {

        setOtherData(prevData => {
            const newValues = prevData[0].values.map(v => 
                ids.includes(v.id) ? { ...v, hidden: value } : v
            );
            const newOtherData = [...prevData];
            newOtherData[0] = { ...newOtherData[0], values: newValues };
            return newOtherData;
        }
        );
        console.log(otherData);
    };

    return (
        <div className="card-body">
            <div className="mb-3">
                <label htmlFor="naamInput" className="form-label">{otherData[0].title.label}</label>
                {otherData[0].values.map((value) => (
                    <input key={value.id} type="text" className="form-control" id={value.id} placeholder={value.label} onChange={(e) => handleChangeName(e.target.value, value.id)} />
                ))}
                
            </div>
            
            <div className="form-check">
                <input className="form-check-input" type="checkbox" checked={!otherData[0].values[0].hidden} id="koppel" onChange={(e) => handleChangeShow(!e.target.checked, [otherData[0].values[0].id])} />
                <label className="form-check-label" htmlFor="koppel">
                    Toon koppel
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" checked={!otherData[0].values[1].hidden} id="koppelKind" onChange={(e) => handleChangeShow(!e.target.checked, [otherData[0].values[0].id, otherData[0].values[1].id])} />
                <label className="form-check-label" htmlFor="koppelKind">
                    Toon koppel met kind
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" checked={!otherData[0].values[2].hidden} id="zorgverlener" onChange={(e) => handleChangeShow(!e.target.checked, [otherData[0].values[2].id])} />
                <label className="form-check-label" htmlFor="zorgverlener">
                    Toon doula/verloskundige/vroedvrouw
                </label>
            </div>
        </div>
    );
};
