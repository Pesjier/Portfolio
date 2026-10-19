import React, { useRef, useState } from 'react'

const TiltCard = ({children, mainCard, className = "", onMouseLeave, onMouseEnter, onMouseMove, onClick}) => {
    const [transformStyle, setTransformStyle] = useState('');
    const [transitionStyle, setTransitionStyle] = useState('none');
    const itemRef = useRef();

    const handleMouseMove = (e) =>
    {
    if(!itemRef.current) return;

    setTransitionStyle('none');

    const {left, top, width, height} = itemRef.current.getBoundingClientRect();

    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 10;
    const tiltY = (relativeX - 0.5) * -10;

    setTransformStyle(
        `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.05,1.05,1.05)`
    );
    };

    const handleMouseLeave = () =>
    {
        setTransitionStyle('transform 0.4s ease-out');

        setTransformStyle('rotateX(0deg) rotateY(0deg) scale3d(1,1,1)'
        );
    };

    return (
        <div className={`border-hsla rounded-md relative ${className}`}
             ref={itemRef} onMouseMove={(e) => {
                handleMouseMove(e); 
                if(onMouseMove)
                    onMouseMove(e);
                }} 
                onMouseLeave={(e) => {
                    handleMouseLeave(e);
                    if(onMouseLeave)
                        onMouseLeave(e);
                }}
                onMouseEnter={(e) => {
                    if(onMouseEnter)
                        onMouseEnter(e);
                }}
                onClick={() => { 
                    onClick()
                }}
        style={{transform: transformStyle,
            transition: transitionStyle
        }}>
            <div className="absolute inset-0 pointer-events-none">
                {children}
            </div>
            <div className='overflow-hidden rounded-md size-full'>
                {mainCard}
            </div>
        </div>
    )
}

export default TiltCard