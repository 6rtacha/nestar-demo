import { Box, Stack } from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import useDeviceDetect from "./hooks/useDeviceDetect";

const Footer = () => {
  const device = useDeviceDetect();

  if (device == "mobile") {
    return <Stack className={"footer-container"}>FOOTER MOBILE</Stack>;
  } else {
    return (
      <Stack className={"footer-container"}>
        <Stack className={"main"}>
          <Stack className={"left"}>
            <Box component={"div"} className={"footer-box"}>
              <img src="/img/logo/logoWhite.svg" alt="" className={"logo"} />
            </Box>
            <Box component={"div"} className={"footer-box"}>
              <span>total free customer care</span>
              <p>+82 10 4867 2909</p>
            </Box>
            <Box component={"div"} className={"footer-box"}>
              <span>nee live</span>
              <p>+82 10 4867 2909</p>
              <span>Support?</span>
            </Box>
            <Box component={"div"} className={"footer-box"}>
              <span>follow us on social media</span>
              <div className={"media-box"}>
                <FacebookOutlinedIcon />
                <TelegramIcon />
                <InstagramIcon />
                <TwitterIcon />
              </div>
            </Box>
          </Stack>
          <Stack className={"right"}>
            <Box component={"div"} className={"top"}>
              <strong>keep yourself up to date</strong>
              <div>
                <input type="text" placeholder={"Your Email"} />
                <span>Subscribe</span>
              </div>
            </Box>
            <Box component={"div"} className={"bottom"}>
              <div>
                <strong>Popular Search</strong>
                <strong>Property for Rent</strong>
                <strong>Popular Low to hide</strong>
              </div>
              <div>
                <strong>Quick Links</strong>
                <strong>Terms of Use</strong>
                <strong>Privacy Policy</strong>
                <strong>Pricing plans</strong>
                <strong>Our Services</strong>
                <strong>Contact Support</strong>
                <strong>FAQ</strong>
              </div>
              <div>
                <strong>Discover</strong>
                <strong>Seoul</strong>
                <strong>Gyeongido</strong>
                <strong>Pusan</strong>
                <strong>Jejudo</strong>
              </div>
            </Box>
          </Stack>
        </Stack>
        <Stack className={"second"}>
          <span> Nestar - All rights reserved. Nestar 2024</span>
          <span>Privacy Terms Sitemap</span>
        </Stack>
      </Stack>
    );
  }
};

export default Footer;
