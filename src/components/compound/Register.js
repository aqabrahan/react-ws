import React from 'react';
import Wizard from './Wizard';

const steps = [
  {
    label: 'Step 1: Personal Information',
    component: () => <div>Content 1</div>
  },
  {
    label: 'Step 2: Media Information',
    component: () => <div>Content 2</div>
  },
];

const Register = () => (
  <div>
    <button className='btn btn-primary'>Go Home</button>
    <h1>Register User</h1>
    <Wizard steps={steps} />
  </div>
);

export default Register;