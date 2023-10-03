import { useEffect, useState } from "react";

function usegeoaddress() {
  const [address, setAddress] = useState({});
  const [err, setError] = useState(null);
  const [status, setStatus] = useState(null);
  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    const { signal } = controller;

    const geolocationWatchId = navigator.geolocation.getCurrentPosition(
      (position) => {
        fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}`,
          { signal }
        )
          .then((res) => res.json())
          .then((data) => {
            if (isMounted) {
              setAddress(data?.address);
            }
          })
          .catch((error) => {
            if (isMounted) {
              setError(error);
            }
          });
      }
    );

    //Permission granted or not
    if ("permissions" in navigator) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then((permissionStatus) => {
          setStatus(permissionStatus.state); // Set status directly from permissionStatus.state
        });
    }
    //cleaning 
    return () => {
      isMounted = false;
      controller.abort();
      navigator.geolocation.clearWatch(geolocationWatchId);
    };
  }, []);

  return { address, err, status };
}

export default usegeoaddress


