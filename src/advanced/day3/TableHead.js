import React from 'react';

function TableHead(props) {
    let items = props.tableHeaders.map((header, index) => {
        return <th key={index}>{header}</th>;
    });
    
    return (
        <thead>
            <tr className="table-header">
                {items}
            </tr>
        </thead>
    );
}

export default TableHead;