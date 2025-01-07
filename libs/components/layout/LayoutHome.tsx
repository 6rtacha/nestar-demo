/* eslint-disable react/display-name */
import { Stack } from "@mui/material";
import Head from "next/head";
import Top from "../Top";
import Footer from "../Footer";
import HeaderFilter from "../homepage/HeaderFilter";
import useDeviceDetect from "../hooks/useDeviceDetect";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const withLayoutMain = (Component: any) => {
  return (props: any) => {
    const device = useDeviceDetect();

    if (device == "mobile") {
      return (
        <>
          <Head>
            <title>Nestar</title>
          </Head>
          <Stack id="mobile-wrap">
            <Stack id={"top"}>
              <Top />
            </Stack>

            <Stack id={"main"}>
              <Component {...props} />
            </Stack>

            <Stack id={"footer"}>
              <Footer />
            </Stack>
          </Stack>
        </>
      );
    } else {
      return (
        <>
          <Head>
            <title>Nestar</title>
          </Head>
          <Stack id="pc-wrap">
            <Stack id={"top"}>
              <Top />
            </Stack>
            <Stack className={"header-main"}>
              <Stack className={"container"}>
                <HeaderFilter />
              </Stack>
            </Stack>

            <Stack id={"main"}>
              <Component {...props} />
            </Stack>

            <Stack id={"footer"}>
              <Footer />
            </Stack>
          </Stack>
        </>
      );
    }
  };
};
export default withLayoutMain;
