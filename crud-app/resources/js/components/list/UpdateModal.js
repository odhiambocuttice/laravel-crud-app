import React, { useState } from "react";

const UpdateModal = ({ modalSalary, modalName, modalId }) => {
    const [salary, setSalary] = useState("");
    const [EmployeeName, setEmployeeName] = useState("");
    console.log(salary);

    const updateEmployeeData = () => {
        axios
            .post("update/employee/data", {
                id: modalId,
                salary: salary,
                employee_name: EmployeeName,
            })
            .then(function (response) {
                console.log(response.data);
                location.reload();
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <div
            className="modal fade"
            id={"Updatemodal" + modalId}
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
                            {modalSalary}
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                        <form className="form">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">
                                    Employee Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder={modalName}
                                    value={EmployeeName}
                                    onChange={(e) =>
                                        setEmployeeName(e.target.value)
                                    }
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">
                                    Salary
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    placeholder={modalSalary}
                                    value={salary}
                                    onChange={(e) => setSalary(e.target.value)}
                                />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <input
                            type="submit"
                            className="btn btn-info"
                            value="Update"
                            onClick={() => {
                                updateEmployeeData();
                            }}
                        />
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Close
                        </button>
                        {/* <button type="button" className="btn btn-primary">
                            Understood
                        </button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateModal;
