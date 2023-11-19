import { useState } from "react";

export const useModal = (initialValue, initialValue2, initialValue3, initialValue4, initialValue5, initialValue6, initialValue7, initialValue8, initialValue9, initialValue10) => {
  const [modalIsOpen, setModal] = useState(initialValue);
  const [modalIsOpen2, setModal2] = useState(initialValue2);
  const [modalIsOpen3, setModal3] = useState(initialValue3);
  const [modalIsOpen4, setModal4] = useState(initialValue4);
  const [modalIsOpen5, setModal5] = useState(initialValue5);
  const [modalIsOpen6, setModal6] = useState(initialValue6);
  const [modalIsOpen7, setModal7] = useState(initialValue7);
  const [modalIsOpen8, setModal8] = useState(initialValue8);
  const [modalIsOpen9, setModal9] = useState(initialValue9);
  const [modalIsOpen10, setModal10] = useState(initialValue10);
  
  const openModal = () => {
    setModal(!modalIsOpen);
  }

  const openModal2 = () => {
    setModal2(!modalIsOpen2);
  }

  const openModal3 = () => {
    setModal3(!modalIsOpen3);
  }

  const openModal4 = () => {
    setModal4(!modalIsOpen4);
  }

  const openModal5 = () => {
    setModal5(!modalIsOpen5);
  }

  const openModal6 = () => {
    setModal6(!modalIsOpen6);
  }

  const openModal7 = () => {
    setModal7(!modalIsOpen7);
  }

  const openModal8 = () => {
    setModal8(!modalIsOpen8);
  }

  const openModal9 = () => {
    setModal9(!modalIsOpen9);
  }

  const openModal10 = () => {
    setModal10(!modalIsOpen10);
  }

  const closeModal = () => {
    setModal(!modalIsOpen);
  }

  const closeModal2 = () => {
    setModal2(!modalIsOpen2);
  }

  const closeModal3 = () => {
    setModal3(!modalIsOpen3);
  }


  const closeModal4 = () => {
    setModal4(!modalIsOpen4);
  }

  const closeModal5 = () => {
    setModal5(!modalIsOpen5);
  }

  const closeModal6 = () => {
    setModal6(!modalIsOpen6);
  }

  const closeModal7 = () => {
    setModal7(!modalIsOpen7);
  }

  const closeModal8 = () => {
    setModal8(!modalIsOpen8);
  }

  const closeModal9 = () => {
    setModal9(!modalIsOpen9);
  }

  const closeModal10 = () => {
    setModal10(!modalIsOpen10);
  }

  return [
    modalIsOpen,
    openModal,
    closeModal,

    modalIsOpen2,
    openModal2,
    closeModal2,

    modalIsOpen3,
    openModal3,
    closeModal3,

    modalIsOpen4,
    openModal4,
    closeModal4,

    modalIsOpen5,
    openModal5,
    closeModal5,

    modalIsOpen6,
    openModal6,
    closeModal6,

    modalIsOpen7,
    openModal7,
    closeModal7,

    modalIsOpen8,
    openModal8,
    closeModal8,

    modalIsOpen9,
    openModal9,
    closeModal9,

    modalIsOpen10,
    openModal10,
    closeModal10
  ];
}
