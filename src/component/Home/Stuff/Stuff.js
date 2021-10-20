import React from 'react';
import { Container } from 'react-bootstrap';
import './Stuff.css'

const Stuff = () => {
    return (
        <div className="py-5">
            <Container>
                <h1 className="py-3" style={{fontSize:"4rem",textAlign:'center'}}>Our Doctors</h1>
                <div className="row">
                    <div className="col-12 col-md-5">
                        <div className="text-start">
                            <h1>Best Doctors</h1>
                            <p>The words of the doctors come to our mind first when we are sick. By monitoring, diagnosing, and curing physical or mental illness, the doctor helps us to recover as soon as possible.
                            It is possible to improve and cure health when you are sick. But it is not possible for your health to remain healthy forever. You can get rid of the disease and there are some diseases that can cause you to die.</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-7">
                        <div className="stuffGrid mx-auto w-100">
                            <div style={{height:'120px',width:'120px',border:'2px solid tomato'}}><img className="w-100 mx-auto h-100" src="https://www.doctorbangladesh.com/wp-content/uploads/dr-male-75x85.jpg" alt="" /></div>
                            <div style={{height:'120px',width:'120px',border:'2px solid tomato'}}><img className="w-100 mx-auto h-100" src="https://www.doctorbangladesh.com/wp-content/uploads/dr-male-75x85.jpg" alt="" /></div>
                            <div style={{height:'120px',width:'120px',border:'2px solid tomato'}}><img className="w-100 mx-auto h-100" src="https://www.doctorbangladesh.com/wp-content/uploads/dr-male-75x85.jpg" alt="" /></div>
                            <div style={{height:'120px',width:'120px',border:'2px solid tomato'}}><img className="w-100 mx-auto h-100" src="https://www.doctorbangladesh.com/wp-content/uploads/dr-male-75x85.jpg" alt="" /></div>
                            <div style={{height:'120px',width:'120px',border:'2px solid tomato'}}><img className="w-100 mx-auto h-100" src="https://www.doctorbangladesh.com/wp-content/uploads/dr-male-75x85.jpg" alt="" /></div>
                            <div style={{height:'120px',width:'120px',border:'2px solid tomato'}}><img className="w-100 mx-auto h-100" src="https://www.doctorbangladesh.com/wp-content/uploads/dr-male-75x85.jpg" alt="" /></div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Stuff;