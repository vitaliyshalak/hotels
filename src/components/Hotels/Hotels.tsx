import React, { useContext, useState } from 'react';

import HotelsContext, { HotelsContextInterface } from 'src/context/HotelsContext';

import Modal from '../Modal';
import Container from '../Container';
import { HotelsItem } from './HotelsItem';

import './styles.scss';

export const Hotels = (): JSX.Element => {
  const [image, setImage] = useState<string | undefined>();
  const { hotels } = useContext<HotelsContextInterface>(HotelsContext);

  const onImageClick = (event: any): void => {
    event.preventDefault();
    const { url } = event.target.dataset;
    setImage(url);
  };

  return (
    <>
      <Container className="hotels" data-testid="hotels">
        {hotels.map((hotel) => (
          <HotelsItem onImageClick={onImageClick} key={hotel.id} {...hotel} />
        ))}
      </Container>
      <Modal open={!!image} onClose={() => setImage(undefined)}>
        <img src={image} alt="" />
      </Modal>
    </>
  );
};
