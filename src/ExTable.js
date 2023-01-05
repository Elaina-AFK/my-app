import React,{ useState, useRef } from 'react';
import { verifyName, verifyNameText, verifyPrice, verifyPriceText } from './myFunc';
import { TableComponent } from './TableComponent';

function ExTable({data2}){
    const [data, setData] = useState(data2);
    const [formData, setFormData] = useState({
        'name' : '',
        'price' : ''
    });
    const [vnText, setvnText] = useState('');
    const [vpText, setvpText] = useState('');
    const [vnClass, setvnClass] = useState('');
    const [vpClass, setvpClass] = useState('');
    const [editId, setEditId] = useState(null);
    const nameInput = useRef(null);
    const priceInput = useRef(null);

    const idGen = () => {
        return (+new Date()).toString(32);
    };

    const handleEdit = (id) => {
        setEditId(id);
    };

    const handleSave = (id) => {
        setData(
            data.map((dataDetail)=> {
                if(editId === id){
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
    };

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const vn = verifyName(formData.name, data);
        const vp = verifyPrice(formData.price);
        const x = vn ? 'success': 'danger';
        const y = vp ? 'success': 'danger';
        setvnClass(x);
        setvpClass(y);
        setvnText(verifyNameText(formData.name, data));
        setvpText(verifyPriceText(formData.price));
        if(vn === true && vp === true){
            const tempAddId = {...formData, "id" :idGen()}
            const newData = [...data, tempAddId]
            setData(newData);
        }
    };
    
    return (
        <TableComponent data={data} vnText={vnText} vpText={vpText} formData={formData} 
        handleChange={handleChange} handleSubmit={handleSubmit} handleEdit={handleEdit} handleSave={handleSave} 
        vnClass={vnClass} vpClass={vpClass} editId={editId} nameInput={nameInput} priceInput={priceInput} />
    )
    
}

export default ExTable;