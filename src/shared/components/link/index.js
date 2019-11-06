import React from 'react';

export default function link({ children, url }) {
    return (
        <a href={ url } target="_blank">
            { children }
        </a>
    );
}
