import React, { useRef } from 'react'

import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, useDisclosure } from '@chakra-ui/react';

const DeleteArticleModal = ({ onDelete }: { onDelete: () => void }) => {
  const cancelRef = useRef<any>()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleDelete = () => {
    onDelete()
    onClose()
  }

  return (
    <>
        <Button colorScheme='teal' variant='link' size="sm" onClick={onOpen}>Delete</Button>
        <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
        >
            <AlertDialogOverlay>
                <AlertDialogContent>
                    <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                        Delete Article
                    </AlertDialogHeader>
                    <AlertDialogBody>
                        Are you sure? You can&apos;t undo this action afterwards.
                    </AlertDialogBody>
                    <AlertDialogFooter>
                    <Button ref={cancelRef} onClick={onClose}>
                        Cancel
                    </Button>
                    <Button colorScheme='red' onClick={handleDelete} ml={3}>
                        Delete
                    </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialogOverlay>
        </AlertDialog>
    </>
  )
}

export default DeleteArticleModal;
