import React, { forwardRef } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import './CustomScrollbars.scss';

const CustomScrollbars = forwardRef((props, ref) => {
    const {
        className,
        disableVerticalScroll,
        disableHorizontalScroll,
        children,
        onScrollFrame,
        ...otherProps
    } = props;

    return (
        <Scrollbars
            ref={ref}  // <-- forwardRef truyền xuống đây
            autoHide
            autoHideTimeout={200}
            hideTracksWhenNotNeeded
            className={`${className ? className + ' ' : ''}custom-scrollbar`}
            onScrollFrame={onScrollFrame}
            renderTrackHorizontal={disableHorizontalScroll ? () => <div /> : (p) => <div {...p} className="track-horizontal" />}
            renderTrackVertical={disableVerticalScroll ? () => <div /> : (p) => <div {...p} className="track-vertical" />}
            renderThumbHorizontal={disableHorizontalScroll ? () => <div /> : (p) => <div {...p} className="thumb-horizontal" />}
            renderThumbVertical={disableVerticalScroll ? () => <div /> : (p) => <div {...p} className="thumb-vertical" />}
            {...otherProps}
        >
            {children}
        </Scrollbars>
    );
});

export default CustomScrollbars;
