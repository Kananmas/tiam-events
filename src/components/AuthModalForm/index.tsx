'use clientss'


import { Card, CardBody, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Tab, Tabs } from "@nextui-org/react";
import { TiamIcon } from "../TiamIcon";

export function AuthModalForm({ open, setOpen, canClose }: { open: boolean, canClose: boolean, setOpen: Function }) {




    return <Modal isOpen={open} >
        <ModalContent>
            {
                (onClose) => {
                    return <>
                        <TiamIcon />
                        <Tabs>
                            <Tab key="Sign In" title="Sign In">
                                <Card>
                                    <CardBody>
                                        Sign In Form
                                    </CardBody>
                                </Card>
                            </Tab>

                            <Tab key="Sign Up" title="Sign Up">
                                <Card>
                                    <CardBody>
                                        Sign Up Form
                                    </CardBody>
                                </Card>
                            </Tab>
                        </Tabs>
                    </>
                }
            }
        </ModalContent>
    </Modal>
}