import axios from "axios";
import React, { useEffect, useState } from "react";
import CreateModal from "./CreateModal";
import TableButton from "./TableButton";

const Table = () => {
    const [data, setData] = useState([]);

    const getEmployeeList = () => {
        axios
            .get("/get/employee/list")
            .then(function (response) {
                setData(response.data);
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    useEffect(() => {
        getEmployeeList();
    }, []);

    return (
        <div>
            <CreateModal />
            <div className="bd-example">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col" width="100px">
                                #
                            </th>
                            <th scope="col" width="100px">
                                Name
                            </th>
                            <th scope="col" width="100px">
                                Salary
                            </th>
                            <th scope="col" width="100px">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <th scope="row">{item["id"]}</th>
                                <td>{item["employee_name"]}</td>
                                <td>{item["salary"]}</td>
                                <td>
                                    <TableButton id={item["id"]} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;
