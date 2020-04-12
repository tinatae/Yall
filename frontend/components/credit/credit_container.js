import React from 'react';
import { connect } from 'react-redux';
import Credit from './credit';

const mSTP = (state) => ({
    formType: "Art Credits"  
});


export default (connect(mSTP, null)(Credit));