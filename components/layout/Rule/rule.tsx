import React, { FC, useState } from "react";
import Modal from "react-modal";
import Image from "next/image";

import styles from "./rule.module.css";

const Rules = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);


  const handleOpenModal = (): void => {

    setIsModalOpen(true);
  };

  const handleCloseModal = (): void => {
    setIsModalOpen(false);
  };

  const customStyles = {
    content: {
      width: "400px",
      height: "500px",
      margin: "auto",
      background: "#fff",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.6)",
    },
  };

  return (
    <>
      <div className={styles.rules}>

        <button className={styles.rules_button} onClick={handleOpenModal}>
          RULES
        </button>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={handleCloseModal}
          style={customStyles}
        >
          <div className={styles.header}>
            <span className={styles.header_title}>RULES</span>
          <Image
            src="/icon-close.svg"
            alt="CLOSE ICON"
            width={20}
            height={20}
            onClick={handleCloseModal}
          /></div>
           <Image
            src="/image-rules.svg"
            alt="RULES"
            width={320}
            height={320}
          />
        </Modal>
        
      </div>
    </>
  );
};

export default Rules;
