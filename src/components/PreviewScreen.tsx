import React from 'react';
import lynxLogo from '../assets/lynx-logo.png'

const PreviewScreen = ({imgUrl}:{imgUrl?: string}) => {
    return (
        <view>
            <image src={lynxLogo}   />
        </view>
    );
}

export default PreviewScreen;
