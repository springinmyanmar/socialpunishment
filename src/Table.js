import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Table from 'react-bootstrap/Table';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/js/src/collapse.js";
import "./style/Table.css"
import {data} from './data/data.js'

const ImageLoop = ({ images }) => {
  const imageList = images.map((image) => (
    <img src={image} class="detailed_images" alt="Min Aung Hlaing" />
  ))
  return (
    <td colspan="3" id="details">
      {imageList}
      <p>More...</p>
    </td>
  );
}

const Row = ({row : {number, name, role, images} }) => {
  return (
    <>
      <tr
        data-toggle="collapse"
        data-target={".multicollapse"+number}
        aria-controls={"id"+number}
      >
        <td>{number}</td>
        <td id="name">{name}</td>
        <td>{role}</td>
      </tr>
      <tr className={`collapse multicollapse${number}`} id={"id"+number}>
        <ImageLoop images={images}/>
      </tr>
    </>
  )
}

const DataLoop = ({data}) => {
  const dataList = data.map((row) => (
    <Row key={row.number} row={row}/>
  ))
  return <tbody>{dataList}</tbody>
}

export class MainTable extends Component {
  render() {
    return (
      <>
        <Table hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Role</th>
            </tr>
          </thead>
          <DataLoop data={data}/>
        </Table>
      </>
    );
  }

}

export default MainTable;