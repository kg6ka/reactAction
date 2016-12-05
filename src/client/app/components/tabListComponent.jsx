import React from 'react';

const TabList = (props) => {
    return (
        <article className="tab">
            {props.tabList.map((item, i) => (
                props.isActive(i) ? <span key={i}>`${item} number ${i}`</span> : null
            ))};
        </article>
    )
};

export default TabList;