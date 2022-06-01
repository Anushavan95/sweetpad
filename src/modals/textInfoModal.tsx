import {
    Box,
    Flex,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Text,
} from "@chakra-ui/react";

type Props = {
    isOpen: any;
    onClose: any;
    text: any;
}

export function TextInfoModal({ isOpen, onClose, text }: Props) {


    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            isCentered size="md">
            <ModalOverlay />
            <ModalContent
                background="gray"
                border="1px"
                borderStyle="solid"
                borderColor="gray.700"
                borderRadius="3xl"
            >

                {/* <div className="modalBgIMage"> */}
                <ModalBody pt={0} px={4}>
                    <Box
                        borderRadius="3xl"
                        border="1px"
                        borderStyle="solid"
                        borderColor="gray.600"
                        px={5}
                        pt={4}
                        pb={2}
                        mb={3}
                    >
                        <Flex justifyContent="space-between" alignItems="center" mb={3}>
                            <Text color="gray.400" fontSize="sm">
                                {text}
                            </Text>
                        </Flex>
                    </Box>
                </ModalBody>
                {/* </div> */}
                <ModalCloseButton
                    onClick={onClose}
                    color="white"
                    fontSize="sm"
                    _hover={{
                        color: "whiteAlpha.700",
                    }}
                />
            </ModalContent>
        </Modal>)
}