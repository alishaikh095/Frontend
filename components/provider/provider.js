'use client';
import { Provider } from 'react-redux';
import { store } from '../../store/index';
import React from 'react';

export default function AppProvider({ children }) {
    return (
        <Provider store={store}>
           {children}
        </Provider>
    );
    }