import React from 'react';
import logo from '../../svg/logo.svg';
import { Info } from './Info';
import { Actions } from './Actions';
import { avatarUrl } from './avatarUrl';
import {
  Header,
  Runner,
  InfoActions,
  Logo,
  HeaderAvatar,
  headerHeight,
  Description
} from './styles';

export const Viewer = () => {
  // TODO get these from context.
  const loggedInUser = {
    gitHubId: '68416',
    name: 'Curran Kelleher'
  };
  const ownerUser = loggedInUser;
  const publishDate = new Date();
  const title = 'Visualization Title';
  const viewCount = 1234;
  const upvotes = 2345;
  const downvotes = 5;

  return (
    <>
      <Header>
        <Logo src={logo} />
        <HeaderAvatar src={avatarUrl(loggedInUser, headerHeight)} />
      </Header>
      <Runner />
      <InfoActions>
        <Info
          title={title}
          viewCount={viewCount}
          user={ownerUser}
          publishDate={publishDate}
        />
        <Actions upvotes={upvotes} downvotes={downvotes} />
      </InfoActions>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Description>
    </>
  );
};