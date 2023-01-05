import React from 'react';
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
function TableComponent(props){
    return (
        <div>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th onClick={() => props.sortByName()}>name</th>
                        <th>price</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data.map((dataDetail)=>{
                            return (
                                <tr key={dataDetail.id}>
                                { props.editId === dataDetail.id ? (
                                    <>
                                    <td><input type="text" defaultValue={dataDetail.name} ref={props.nameInput}/></td>
                                    <td><input type="text" defaultValue={dataDetail.price} ref={props.priceInput}/></td>
                                    <td><button onClick={() => props.handleSave(dataDetail.id)}>Save</button><button onClick={() => props.handleCancel()}>Cancel</button></td>                                    
                                    </>):(<>
                                    <td>{dataDetail.name}</td>
                                    <td>{dataDetail.price}</td>
                                    <td><button onClick={() => props.handleEdit(dataDetail.id)}>Edit</button></td>   
                                    </>)
                                }
                                </tr>
                            );
                        })    
                    }
                </tbody>
            </Table>
            <h2><Badge pill bg={props.vnClass}>{props.vnText}</Badge>{'     '}
            <Badge pill bg={props.vpClass}>{props.vpText}</Badge></h2>
            <form onSubmit={props.handleSubmit}>
                <label>
                    Name: 
                    <input type="text" placeholder='Name' name='name' value={props.formData.name} onChange={props.handleChange}/>
                    
                    Price:
                    <input type="text" placeholder='Price' name='price' value={props.formData.price} onChange={props.handleChange}/>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export {TableComponent};

