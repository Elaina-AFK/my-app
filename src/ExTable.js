import React, { useState, useRef } from "react";
import {
  verifyName,
  verifyNameText,
  verifyPrice,
  verifyPriceText,
  verifyingNameOnEdit,
  verifyNameTextOnEdit,
} from "./myFunc";
import { TableComponent } from "./TableComponent";

function ExTable({ data2 }) {
  const [data, setData] = useState(data2);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
  });
  const [vnText, setvnText] = useState("");
  const [vpText, setvpText] = useState("");
  const [vnClass, setvnClass] = useState("");
  const [vpClass, setvpClass] = useState("");
  const [editId, setEditId] = useState(null);
  const [alrsorted, setNameSorted] = useState("");
  const [numSorted, setNumSorted] = useState("");
  const nameInput = useRef(null);
  const priceInput = useRef(null);

  const idGen = () => {
    return (+new Date()).toString(32);
  };

  const handleEdit = (id) => {
    setEditId(id);
  };

  const verifying = (dataDetail, name, price) => {
    const vn = verifyingNameOnEdit(name, dataDetail);
    const vp = verifyPrice(price);
    const x = vn ? "success" : "danger";
    const y = vp ? "success" : "danger";
    setvnClass(x);
    setvpClass(y);
    setvnText(verifyNameTextOnEdit(name, dataDetail));
    setvpText(verifyPriceText(price));
    return [vn, vp];
  };
  // still have bugs
  const handleSave = () => {
    const verified = verifying(
      data,
      nameInput.current.value,
      priceInput.current.value
    );
    if (verified[0] === true && verified[1] === true) {
      setData(
        data.map((dataDetail) => {
          if (editId === dataDetail.id) {
            return {
              ...dataDetail,
              name: nameInput.current.value,
              price: priceInput.current.value,
            };
          }
          return dataDetail;
        })
      );
      setEditId(null);
      setNameSorted("");
      setNumSorted("");
    }
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleCancel = () => {
    setEditId(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const verified = [
      verifyName(formData.name, data),
      verifyPrice(formData.price),
    ];
    const x = verified[0] ? "success" : "danger";
    const y = verified[1] ? "success" : "danger";
    setvnClass(x);
    setvpClass(y);
    setvnText(verifyNameText(formData.name, data));
    setvpText(verifyPriceText(formData.price));
    if (verified[0] === true && verified[1] === true) {
      const tempAddId = { ...formData, id: idGen() };
      const newData = [...data, tempAddId];
      setData(newData);
      setNameSorted("");
      setNumSorted("");
    }
  };

  const sortByName = () => {
    setNumSorted("");
    if (alrsorted === "") {
      setData(
        data
          .sort(function(a, b) {
            let nameA = a.name.toUpperCase();
            let nameB = b.name.toUpperCase();
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            return 0;
          })
          .map((dataDetail) => {
            return dataDetail;
          })
      );
      setNameSorted("sorted");
    } else {
      setData(
        data.reverse().map((dataDetail) => {
          return dataDetail;
        })
      );
    }
  };

  const sortByPrice = () => {
    setNameSorted("");
    if (numSorted === "") {
      setData(
        data
          .sort(function(a, b) {
            let priceA = a.price;
            let priceB = b.price;
            return priceA - priceB;
          })
          .map((dataDetail) => {
            return dataDetail;
          })
      );
      setNumSorted("sorted");
    } else {
      setData(
        data.reverse().map((dataDetail) => {
          return dataDetail;
        })
      );
    }
  };

  return (
    <TableComponent
      data={data}
      vnText={vnText}
      vpText={vpText}
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      handleEdit={handleEdit}
      handleSave={handleSave}
      handleCancel={handleCancel}
      sortByName={sortByName}
      sortByPrice={sortByPrice}
      vnClass={vnClass}
      vpClass={vpClass}
      editId={editId}
      nameInput={nameInput}
      priceInput={priceInput}
    />
  );
}

export default ExTable;
