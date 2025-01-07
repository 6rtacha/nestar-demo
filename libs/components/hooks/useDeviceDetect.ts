import { useEffect, useState } from "react";

const useDeviceDetect = (): string => {
  const [device, setDevice] = useState("desktop");

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const isMobile =
      /Androind|webOs|iPhone|iPad|BlackBerry|IEMobile|Opera Mini/i.test(
        userAgent
      );
    setDevice(isMobile ? "mobile" : "desktop");
  }, [device]);

  return device;
};

export default useDeviceDetect;
