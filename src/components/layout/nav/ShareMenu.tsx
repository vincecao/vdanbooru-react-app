import React, { ReactElement } from 'react';
import { MenuItem, Menu } from '@blueprintjs/core';
import {
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  PinterestIcon,
  RedditIcon,
  TumblrIcon,
  LineIcon,
  FacebookShareButton,
  TwitterShareButton,
  TelegramShareButton,
  PinterestShareButton,
  RedditShareButton,
  TumblrShareButton,
  LineShareButton,
} from 'react-share';

const ROUTER_BASENAME = process.env.REACT_APP_ROUTER_BASENAME || '/';

interface ShareMenuProps {
  imgSrc: string;
}

export default function ShareMenu({ imgSrc }: ShareMenuProps): ReactElement {
  const url = `${window.location.protocol}//${window.location.hostname}${ROUTER_BASENAME}`;

  return (
    <Menu className="bp3-minimal flex flex-col">
      <TwitterShareButton
        url={url}
      >
        <MenuItem className="text-left" text="Twitter" icon={<TwitterIcon size={24} round />} />
      </TwitterShareButton>
      <FacebookShareButton
        url={url}
      >
        <MenuItem className="text-left" text="Facebook" icon={<FacebookIcon size={24} round />} />
      </FacebookShareButton>
      <PinterestShareButton
        media={imgSrc === null ? '' : imgSrc}
        url={url}
      >
        <MenuItem className="text-left" text="Pinterest" icon={<PinterestIcon size={24} round />} />
      </PinterestShareButton>
      <TumblrShareButton
        url={url}
      >
        <MenuItem className="text-left" text="Tumblr" icon={<TumblrIcon size={24} round />} />
      </TumblrShareButton>
      <RedditShareButton
        url={url}
      >
        <MenuItem className="text-left" text="Reddit" icon={<RedditIcon size={24} round />} />
      </RedditShareButton>
      <LineShareButton
        url={url}
      >
        <MenuItem className="text-left" text="Line" icon={<LineIcon size={24} round />} />
      </LineShareButton>
      <TelegramShareButton
        url={url}
      >
        <MenuItem className="text-left" text="Telegram" icon={<TelegramIcon size={24} round />} />
      </TelegramShareButton>
    </Menu>
  );
}
