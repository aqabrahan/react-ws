import React from 'react';
import SimpleProcess from './sp';

const Steps = props => (
  <header className='nav nav-tabs'>
    {React.Children.map(props.children, (childElement, index) =>
      React.cloneElement(childElement, {
        isActive: index === props.activeIndex,
        onActivate: (event) => props.changeIndex(event, index)
      })
    )}
  </header>
);
const Step = props => (
  <div className='nav-item'>
    <a
      className={`
        nav-link
        ${props.isActive ? 'active' : ''}
        ${props.isDisabled ? 'disabled' : ''}
      `}
      onClick={(event) => props.onActivate(event)}
      href='#'
    >
      {props.children}
    </a>
  </div>
);
const Contents = (props) => (
  <article className='content'>
    {props.children[props.activeIndex]}
  </article>
);
const Content = (props) => (
  <div>
    {props.children}
  </div>
);

const SignupForm = () => (
  <div>
    <h1>Register User</h1>
    <SimpleProcess>
      <Steps>
        <Step>Step 1: Personal Information</Step>
        <Step>Step 2: Media Information</Step>
      </Steps>
      <Contents>
        <Content>
          <div>Content 1</div>
        </Content>
        <Content>
          <div>Content 2</div>
        </Content>
      </Contents>
    </SimpleProcess>
  </div>
);

export default SignupForm;