import React from 'react';
import ReactDOM from 'react-dom';
import ImageGrid from './ImageGrid';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ImageGrid photos={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
});