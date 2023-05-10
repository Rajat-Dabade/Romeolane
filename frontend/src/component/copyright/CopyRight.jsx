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
            <FacebookIcon /> <InstagramIcon /> <TwitterIcon /> <YouTubeIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopyRight;
