import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Input,
} from "@chakra-ui/react";

interface IProps {
  unfreezeSwt: () => void;
  handleSwtClaimChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  freezeSwtInput: string;
}
export default function ModalClaimAccount({
  unfreezeSwt,
  freezeSwtInput,
  handleSwtClaimChange,
}: IProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen} className="freezes-stake-claim-btn">
        Claim
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <Input onChange={handleSwtClaimChange} value={freezeSwtInput} />
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={unfreezeSwt}>
              Claim
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
