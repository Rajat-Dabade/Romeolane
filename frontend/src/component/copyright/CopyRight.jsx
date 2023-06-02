import React from "react";
import "./CopyRight.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const CopyRight = () => {
  return (
    <div>
      <div className="copyRight__footer">
        <div className="copyright__content">
          <p>Copyright Romio Lane 2023. All rights reserved</p>
          <div className="copyright_Icons">
            <a
              href="https://www.facebook.com/romeolanedelhi?mibextid=LQQJ4d"
              target="_blank"
              rel="noreferrer"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://instagram.com/romeolanetheboutiqueresort?igshid=ZWQyN2ExYTkwZQ=="
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon />
            </a>
            {/* <TwitterIcon /> */}
            {/* <YouTubeIcon /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopyRight;
