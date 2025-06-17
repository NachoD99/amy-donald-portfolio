import React, { useEffect, useRef, useState } from "react";

const VantaBackground = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (
      !vantaEffect &&
      window.VANTA &&
      window.VANTA.FOG &&
      vantaRef.current
    ) {
      setVantaEffect(
        window.VANTA.FOG({
          el: vantaRef.current,
          highlightColor: 0xffc300,
          midtoneColor: 0xff1f00,
          lowlightColor: 0x2d00ff,
          baseColor: 0xffebeb,
          blurFactor: 0.6,
          speed: 1,
          zoom: 1,
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
    />
  );
};

export default VantaBackground;
