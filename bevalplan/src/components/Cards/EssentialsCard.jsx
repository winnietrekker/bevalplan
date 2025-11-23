import { useContext } from "react";
import { MyContext } from "../../context/MyContext";

export default function EssentialsCard() {
    const { otherData, setOtherData } = useContext(MyContext);

    const handleChange = (value) => {
        setOtherData(prevData => {
            const newValues = prevData[1].values.map(v => 
                v.id === otherData[1].values[0].id ? { ...v, value: value } : v
            );
            const newOtherData = [...prevData];
            newOtherData[1] = { ...newOtherData[1], values: newValues };
            return newOtherData;
        });
    };

    return (
        <div className="card-body">
            <h5 className="card-title">{otherData[1].title.label}</h5>
            <div className="mb-3">
                <textarea
                    className="form-control"
                    id={otherData[1].values[0].id}
                    placeholder={otherData[1].values[0].value}
                    value={otherData[1].values[0].value}
                    onChange={e => handleChange(e.target.value)}
                />
            </div>
        </div>
    );
};
