import React from "react";

const CreateModal = () => {
    const [salary, setSalary] = React.useState("");
    const [EmployeeName, setEmployeeName] = React.useState("");

    const storeEmployee = () => {
        axios
            .post("/store/employee/data", {
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
        <>
            <div className=" row text-right mb-3 pb-3">
                <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#Createmodal"
                >
                    Add new employee
                </button>
            </div>
            <div
                className="modal fade"
                id={"Createmodal"}
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5
                                className="modal-title"
                                id="staticBackdropLabel"
                            >
                                Create new employee
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
                                        placeholder="Name"
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
                                        placeholder="Salary"
                                        onChange={(e) =>
                                            setSalary(e.target.value)
                                        }
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <input
                                type="button"
                                className="form-control"
                                value="Save"
                                onClick={() => {
                                    storeEmployee(EmployeeName, salary);
                                }}
                            />
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreateModal;
