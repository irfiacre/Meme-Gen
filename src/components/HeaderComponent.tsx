import React from 'react';

const HeaderComponent = ({title}:{title: string}) => {
    return (
        <view className="headerContainer">
         <text className='headerTitle'>{title}</text>   
        </view>
    );
}

export default HeaderComponent;
