import React, { useState } from "react";
import DeleteModal from "./DeleteModal";
import Modal from "./Modal";
import UpdateModal from "./UpdateModal";

const TableButton = ({ id, salary, employee_name }) => {
    const [modalSalary, setModalSalary] = useState("");
    const [modalEmployeeName, setModalEmployeeName] = useState("");

    const getEmployeeDetails = () => {
        axios
            .post("get/individual/employee/details", { id: id })
            .then(function (response) {
                // console.log(response.data);
                setModalSalary(response.data["salary"]);
                setModalEmployeeName(response.data["employee_name"]);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <div>
            <div className="btn-group" role="group" aria-label="Basic example">
                <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target={"#modal" + id}
                    onClick={() => {
                        getEmployeeDetails(id);
                    }}
                >
                    view
                </button>
                <Modal
                    modalId={id}
                    modalSalary={modalSalary}
                    modalName={modalEmployeeName}
                />

                <button
                    type="button"
                    className="btn btn-info"
                    data-bs-toggle="modal"
                    data-bs-target={"#Updatemodal" + id}
                    onClick={() => {
                        getEmployeeDetails(id);
                    }}
                >
                    update
                </button>
                <UpdateModal
                    modalId={id}
                    modalSalary={modalSalary}
                    modalName={modalEmployeeName}
                />

                <button
                    type="button"
                    className="btn btn-danger"
                    data-bs-toggle="modal"
                    data-bs-target={"#Deletemodal" + id}
                >
                    Delete
                </button>
                <DeleteModal modalId={id} />
            </div>
        </div>
    );
};

export default TableButton;
