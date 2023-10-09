import React from 'react'
import { Avatar } from 'rsuite';
import { getNameInitials } from '../misc/Initial';
import '../../src/App.css';

const ProfileAvatar = ({name ,...avatarProps}) => {
  return (
    <Avatar className="avatar" circle  {...avatarProps}>
       {getNameInitials(name)}
    </Avatar>
  )
}

export default ProfileAvatar;

