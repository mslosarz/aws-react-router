import React from 'react';
import {FIRST_PAGE, SECOND_PAGE, THIRD_PAGE} from './Links';

function Menu() {
    return (
        <div className="Menu">
            <ul>
                <li>
                    <a href="/">Index</a>
                </li>
                <li>
                    <a href={FIRST_PAGE}>{FIRST_PAGE}</a>
                </li>
                <li>
                    <a href={SECOND_PAGE}>{SECOND_PAGE}</a>
                </li>
                <li>
                    <a href={THIRD_PAGE}>{THIRD_PAGE}</a>
                </li>
                <li>
                    <a href="/unknown">Unknown</a>
                </li>
            </ul>
        </div>
    );
}

export default Menu;
