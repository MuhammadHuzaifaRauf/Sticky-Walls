import React from "react";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Space, Tooltip } from "antd";
import useLists from "../hooks/useLists";

export default function List(props) {
  const { handleDelete, navigate, documents } = useLists();

  return (
    <>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
          {documents.map((document, i) => {
            return (
              <div className="col" key={i}>
                <div
                  className="card"
                  style={{ backgroundColor: document.backgroundColor }}
                >
                  <div className="card-body" style={{ height: "260px" }}>
                    <div style={{ height: "85%" }}>
                      <h5 className="card-title">
                        {document.title || "Title"}
                      </h5>
                      <p className="card-text">
                        {document.description || "Description"}
                      </p>
                      <p className="card-text">{document.backgroundColor}</p>
                    </div>
                    <div className="d-flex align-items-end">
                      <Space>
                        <Tooltip title="Delete" color="red">
                          <Button
                            style={{ backgroundColor: "red" }}
                            danger
                            icon={<DeleteOutlined />}
                            onClick={() => {
                              handleDelete(document);
                            }}
                          />
                        </Tooltip>
                        <Tooltip title="Edit">
                          <Button
                            type="primary"
                            icon={<EditOutlined />}
                            onClick={() => {
                              navigate(`/addNote/${document.id}`);
                            }}
                          />
                        </Tooltip>
                      </Space>
                      <p className="mb-1 ms-2">
                        {document.date === "Invalid Date"
                          ? "Date"
                          : document.date}
                      </p>
                      <p className="mb-1 ms-2" style={{ color: "#1677FF" }}>
                        {document.status.charAt(0).toUpperCase() +
                          document.status.slice(1) || "No Thing"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
