import React, { useState, useRef } from 'react';
import { Alert, Button, Modal } from 'rsuite';
import AvatarEditor from 'react-avatar-editor';
import { useModalState } from '../custom_hooks/custom_hook';
import { storage, database } from '../misc/firebase';
import { useProfile } from '../context/profile.context';
import ProfileAvatar from '../component/ProfileAvatar';
const fileInputTypes = '.png , .jpeg , .jpg';
const acceptedFileType = ['image/png', 'image/jpeg', 'image/pjpeg'];

//helper function
const isValidFile = file => acceptedFileType.includes(file.type);
//convert-->canavs to blob
const getBlob = canvas => {
  return new Promise((resolve, reject) => {
    canvas.toBlob(blob => {
      if (blob) {
        resolve(blob);
      } else {
        reject(new Error('Cannot Process Image'));
      }
    });
  });
};

const AvatarUploadBtn = () => {
  //state
  const { isOpen, open, close } = useModalState(false);
  const [img, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  //ref
  const avatarEditorRef = useRef();
  const { profile } = useProfile();

  //logic
  const onFileInputChange = ev => {
    const currFiles = ev.target.files;
    if (currFiles.length === 1) {
      const file = currFiles[0];
      if (isValidFile(file)) {
        setImage(file);
        open();
      } else {
        Alert.warning(`wrong file type ${file.type}`, 4000);
      }
    }
  };

  const onUploadClick = async () => {
    const canvas = avatarEditorRef.current.getImageScaledToCanvas();
    setIsLoading(true);
    try {
      const blob = await getBlob(canvas);
      const avatarFileRef = storage
        .ref(`/profiles/${profile.uid}`)
        .child('avatar');
      const uploadAvatarResult = await avatarFileRef.put(blob, {
        cacheControl: `public , max-age=${3600 * 24 * 3}`,
      });
      const downloadUrl = await uploadAvatarResult.ref.getDownloadURL();
      const userAvatarRef = database
        .ref(`/profile/${profile.uid}`)
        .child('avatar');
      userAvatarRef.set(downloadUrl);
      setIsLoading(false);
      Alert.info('Avatar has been uploaded', 4000);
    } catch (err) {
      setIsLoading(false);
      Alert.error(err.message, 4000);
    }
  };
  return (
    <div className="mt-3 text-center">

      <div className="avatar-img">
        <label
          htmlFor="avatar-upload"
          className="avatar-label"
        >
       <ProfileAvatar src={profile.avatar} name={profile.name} className="avatar-comp"  />
          Select Avatar
          <input
            id="avatar-upload"
            type="file"
            className="avatar-input"
            accept={fileInputTypes}
            onChange={onFileInputChange}
            
          />
        </label>
        <Modal show={isOpen} onHide={close}>
          <Modal.Header>
            <Modal.Title>Adjust And Upload New Avatar</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="avatar">
              {img && (
                <AvatarEditor
                  ref={avatarEditorRef}
                  image={img}
                  width={200}
                  height={200}
                  border={5}
                  borderRadius={100}
                />
              )}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              block
              appearance="ghost"
              color="violet"
              onClick={onUploadClick}
              disabled={isLoading}
            >
              <h6> UPLOAD</h6>
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default AvatarUploadBtn;
