'use client';

import Box from '@/components/ui/layout/box';
import Modal from '@/components/ui/overlay/modal';
import ModalBody from '@/components/ui/overlay/modal/body';
import ModalCloseButton from '@/components/ui/overlay/modal/close-button';
import ModalContent from '@/components/ui/overlay/modal/content';
import ModalFooter from '@/components/ui/overlay/modal/footer';
import ModalHeader from '@/components/ui/overlay/modal/header';
import ModalOverlay from '@/components/ui/overlay/modal/overlay';
import Link from 'next/link';
import { useRef } from 'react';
import CloseButton from './@button/_close';
import OpenButton from './@button/_open';

type HomeProps = {
  params: object;
  searchParams: Record<string, string | undefined>;
};

export default function Home(props: HomeProps) {
  const {
    searchParams: { 'modal-r': modalR },
  } = props;

  const modalId = '785566';

  const isOpen = modalR === modalId;

  const finalRef = useRef<HTMLDivElement>(null);

  const onClose = () => {};

  return (
    <main className="m-2 h-[200vh]">
      <Box
        ref={finalRef}
        tabIndex={-1}
        aria-label="Focus moved to this box"
        className="mb-4"
      >
        Some other content that'll receive focus on close.
      </Box>
      <Box
        as={Link}
        className="inline-flex rounded-md bg-blue-500 px-4 py-2 text-white"
        type="button"
        href={`/?modal-r=${modalId}`}
      >
        Open Modal
      </Box>

      <Modal
        isOpen={isOpen}
        finalFocusRef={finalRef}
        onClose={undefined}
        id={modalId}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus,
            sunt.
          </ModalBody>

          <ModalFooter>
            <CloseButton />
            <button
              className="rounded-md bg-teal-500 px-4 py-2 text-white outline-none focus-visible:shadow-outline"
              type="button"
            >
              Secondary Action
            </button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </main>
  );
}
