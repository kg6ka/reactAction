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

TabList.propTypes = {
    // tabList: React.PropTypes.arrayOf(React.PropTypes.string)
    isActive: React.PropTypes.func,
    tabList(props, propName, component) {
     if(!(propName in props)) {
        return new Error(`missing ${propName}`)
     }
     if(props[propName].length < 2) {
        return new Error(`${propName} is too short`)
     }
    }
};

export default TabList;