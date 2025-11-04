import { useContext } from "react";
import { MyContext } from "../../context/MyContext";

export default function EssentialsCard() {
    const { data, setData, name, setName, mostImportant, setMostImportant } = useContext(MyContext);

    const handleChange = (value) => {
        setMostImportant(value);
    };

    return (
        <div className="card-body">
            <h5 className="card-title">Dit is voor mij het belangrijkste:</h5>
            <div className="mb-3">
                <textarea
                    className="form-control"
                    id="essentieInput"
                    placeholder="Ik wil graag natuurlijk bevallen. Geen ingrepen als dat niet strikt medisch noodzakelijk is."
                    value={mostImportant || ""}
                    onChange={e => handleChange(e.target.value)}
                />
            </div>
        </div>
    );
};
