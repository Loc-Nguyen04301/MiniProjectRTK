import React from "react";
import {
  FacebookShareButton,
  PinterestShareButton,
  LinkedinShareButton,
} from "react-share";
import { FacebookIcon, PinterestIcon, LinkedinIcon } from "react-share";
const SocialShare = () => {
  return (
    <>
      <FacebookShareButton url="www.thol.com.vn">
        <FacebookIcon size={32} round={true} />
      </FacebookShareButton>
      <PinterestShareButton url="www.thol.com.vn">
        <PinterestIcon size={32} round={true} />
      </PinterestShareButton>
      <LinkedinShareButton url="www.thol.com.vn">
        <LinkedinIcon size={32} round={true} />
      </LinkedinShareButton>
    </>
  );
};

export default SocialShare;
