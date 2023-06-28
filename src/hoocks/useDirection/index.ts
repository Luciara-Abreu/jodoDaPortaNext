import  { useState, useRef, useEffect } from 'react';

function useDirection( buttonLeft: number){
const buttonLeftRef = useRef(buttonLeft);
const [transform, setTransform] = useState('scaleX(1)');

useEffect(() => {
  const isIncremented = buttonLeft > buttonLeftRef.current;
  const isDecremented = buttonLeft < buttonLeftRef.current;
  buttonLeftRef.current = buttonLeft;

  if (isIncremented) {
     setTransform('scaleX(1)');
  } else {
    setTransform('scaleX(-1)');
  }
}, [buttonLeft]);

return transform; 

}

export default useDirection;