import * as React from 'react';
import { Pane, Button, Avatar } from 'evergreen-ui'
import { css } from 'emotion';

const name = css`
  font-size: 0.9em;
  font-weight: 900;
`;

const status = css`
  font-size: 0.8em;
  font-weight: 900;
  padding: 4px 0;
  display: flex;
`;

const statusIcon = css`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #00d600;
  margin-right: 5px;
`;

const roundedButton = css`
  background: transparent;
  border: 3px solid #252E54;
  border-radius: 40px;
  padding: 20px 0;
  width: 150px;
  box-shadow: none;
`;

const solidButton = css`
  background: #252E54;
  border-radius: 40px;
  padding: 22px 0;
  width: 130px;
  box-shadow: none;
`;

export default class Navbar extends React.Component {
  public render() {
    return (
      <Pane display='flex' alignItems='center' paddingTop={30} borderRadius={3}>
        <Pane flex={1} alignItems='center' display='flex'>
          <img src='/static/images/logo.png' alt='Battle Buddy'/>
        </Pane>
        <Pane display='flex' alignItems='center'>
          <Button marginRight={30} className={roundedButton}></Button>
          <Button className={solidButton}></Button>
          <Pane display='flex' flexDirection='row' alignItems='center' justifyContent='center'>
            <Avatar
              src='https://pbs.twimg.com/profile_images/756196362576723968/6GUgJG4L_400x400.jpg'
              name='Jeroen Ransijn'
              size={55}
              marginLeft={60}
              marginRight={20}
            />
            <Pane display='flex' flexDirection='column'>
              <span className={name}>Jeroen Ransijn</span>
              <span className={status}>
                <div className={statusIcon}></div>
                Online
              </span>
            </Pane>
          </Pane>
        </Pane>
      </Pane>
    )
  }
}
