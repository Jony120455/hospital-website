import React from 'react';
import { Table } from 'react-bootstrap';
import './Services.css'

const services = () => {
    return (
        <div className="mb-5">
             <h1 className="align">Doctor List</h1>
            <Table striped bordered hover>
    <thead>
    <tr>
      <th>No.</th>
      <th>Name</th>
      <th>Title</th>
      <th>Specilest</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Dr. Md. Shahin Ferdous</td>
      <td>MBBS (Dhaka), BCS (Health), MD (Oncology)</td>
      <td>Cancer Specialist (Oncologist)</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Dr. Md. Mir Sufian</td>
      <td>MBBS, BCS (Health), D-CARD (NICVD)</td>
      <td>Cardiology Specialist</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Dr. Abul Alam</td>
      <td>MBBS, D-CARD (DU), CCD (UK), CCE (AIMS), CMU (BIUR), PGC (UK)</td>
      <td>Cardiology, Rheumatic Fever & Diabetes Specialist</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Dr. Md. Sanwar Newaz Khan</td>
      <td>MBBS (Dhaka), BCS (Health), MD (Chest Diseases, P-B)</td>
      <td>Chest Diseases Specialist</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Dr. Dilruba Siddique</td>
      <td>MBBS (DU), DCH (BSMMU)</td>
      <td>Neonatal, Adolescent & Child Diseases Specialist</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Dr. Parimal Kumar Paul</td>
      <td>MBBS, BCS (Health), MD (Paediatrics)</td>
      <td>Neonatal & Child Specialist</td>
    </tr>
    <tr>
      <td>7</td>
      <td>Dr. ABM Ali Hasan</td>
      <td>MBBS, MPH, D-Ped, CCD (BIRDEM)</td>
      <td>Child Specialist</td>
    </tr>
    <tr>
      <td>8</td>
      <td>Dr. Fazle Rabbi</td>
      <td>MBBS, BCS (Health), FCPS (EYE), MCPS (EYE)</td>
      <td>Eye Specialist & Phaco Surgeon</td>
    </tr>
    
  </tbody>
</Table>
        </div>
    );
};

export default services;