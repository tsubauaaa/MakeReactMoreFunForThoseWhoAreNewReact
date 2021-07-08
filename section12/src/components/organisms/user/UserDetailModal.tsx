import {
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  Input,
} from "@chakra-ui/react";
import React, { memo } from "react";
import User from "../../../types/api/user";

type Props = {
  user: User | null;
  isOpen: boolean;
  onClose: () => void;
};

const UserDetailModal: React.VFC<Props> = memo((props) => {
  const { user, isOpen, onClose } = props;
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      autoFocus={false}
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent pb={6}>
        <ModalHeader>ユーザー詳細</ModalHeader>
        <ModalCloseButton />
        <ModalBody mx={4}>
          <Stack spacing={4}>
            <FormControl>名前</FormControl>
            <Input value={user?.name} isReadOnly />
            <FormControl>フルネーム</FormControl>
            <Input value={user?.name} isReadOnly />
            <FormControl>MAIL</FormControl>
            <Input value={user?.email} isReadOnly />
            <FormControl>TEL</FormControl>
            <Input value={user?.phone} isReadOnly />
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});

export default UserDetailModal;
