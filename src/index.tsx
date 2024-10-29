import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { App } from './app/App';

const rootNode = document.getElementById('root');

const root = createRoot(rootNode as HTMLElement);

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
