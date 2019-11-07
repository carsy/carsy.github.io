import React from 'react';

export default function link({ children, href }) {
    return (
        <a href={ href } target="_blank">
            { children }
        </a>
    );
}
