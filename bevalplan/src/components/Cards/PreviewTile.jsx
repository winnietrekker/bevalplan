import React from "react";

const PreviewTile = React.forwardRef(function PreviewTile(
    { option, style = {}, ...props },
    ref
) {
    return (
        <div
            className="icon-toggle-container mb-3"
            ref={ref}
            {...props}
            style={{ display: option.hidden ? "none" : style.display || "block" }}
        >
            <label className="d-flex flex-column align-items-center justify-content-center p-2" style={{ ...style }}>
                <img src={option.image} className="icoontje" alt={option.alt} />
                <span className="text-icoontje mt-1">{option.label}</span>
            </label>
        </div>
    );
});

export default PreviewTile;
