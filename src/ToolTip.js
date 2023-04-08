import { useEffect, useRef } from 'react';
import './style/Tooltip.css'

const ToolTip = ({ position }) => {

    // The useRef hook returns a ref object, which
    //  contains a current property that you can use to access and modify the value.
    const spanRef = useRef()


    // useEffect is a built-in hook in React that allows you to perform side effects in function components
    useEffect(() => {


        //top tooltip
        if (position === 'top') {
            spanRef.current.style.bottom = '120%';
            spanRef.current.style.left = '50%';
            spanRef.current.style.marginLeft = '-110px';
        }

        //bottom tooltip
        if (position === 'bottom') {
            spanRef.current.style.top = '140%';
            spanRef.current.style.left = '50%';
            spanRef.current.style.marginLeft = '-110px';
        }

        //left tooltip
        if (position === 'left') {
            spanRef.current.style.top = '-50%';
            spanRef.current.style.right = '110%';
        }

        //right tooltip
        if (position === 'right') {
            spanRef.current.style.top = '-50%';
            spanRef.current.style.left = '110%';
        }



    }, [position])

    return (

        <div className="tooltip">Hover over me!
            <span ref={spanRef} className="tooltiptext">Hover me And check How tooltip work</span>
        </div>
    )

}

export default ToolTip;