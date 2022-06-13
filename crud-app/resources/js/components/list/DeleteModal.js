import React from "react";

const DeleteModal = ({ modalId }) => {
    const deleteEmployeeData = (id) => {
        axios
            .delete("/delete/employee/data/" + id)
            .then(location.reload())
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <div
            className="modal fade"
            id={"Deletemodal" + modalId}
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">
                            Employee Delete
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                        Are you sure you want to delete this employee?
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                            onClick={() => {
                                deleteEmployeeData(modalId);
                            }}
                        >
                            Yes
                        </button>
                        <button type="button" className="btn btn-primary">
                            No
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;
