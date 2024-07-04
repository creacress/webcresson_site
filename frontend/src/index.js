import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import Root from './App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Root />);
