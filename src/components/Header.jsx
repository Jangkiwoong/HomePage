import styled from "styled-components";
import NurimLogo from "../assets/firstpage/Logo.png";
import { useState, useRef, useEffect } from "react";
import Modal from "./Modal";
import open from "../assets/header/open.png"
import close from "../assets/header/close.png"

const Header = () => {
  const [isToggleMenu, setToggleMenu] = useState(false);
  const [isFirstModal, setFirstModal] = useState(false);
  const [isSecondModal, setSecondModal] = useState(false);
  const [isThirdModal, setThirdModal] = useState(false);

  const modal1 = useRef();
  const modal2 = useRef();
  const modal3 = useRef();

  const toggleMenu = () => {
    setToggleMenu(!isToggleMenu);
  };
  const closeModal = () => {
    setFirstModal(false);
    setSecondModal(false);
    setThirdModal(false);
  };
  const openFirstModal = (e) => {
    e.stopPropagation();
    setFirstModal(true);
    setSecondModal(false);
    setThirdModal(false);
  };

  const openSecondModal = (e) => {
    e.stopPropagation();
    setSecondModal(true);
    setFirstModal(false);
    setThirdModal(false);
  };

  const openThirdModal = (e) => {
    e.stopPropagation();
    setThirdModal(true);
    setFirstModal(false);
    setSecondModal(false);
  };

  const handleClose = (e) => {
    if (
      (isFirstModal && modal1.current && !modal1.current.contains(e.target)) ||
      (isSecondModal && modal2.current && !modal2.current.contains(e.target)) ||
      (isThirdModal && modal3.current && !modal3.current.contains(e.target))
      /* 
         modal1.current: ref가 연결된 DOM 요소가 존재하는지 확인.(랜더링 여부)
         !modal1.current.contains(e.target): 클릭한 요소가 모달 내부에 없으면 모달 외부 클릭으로 판단.
      */
    ) {
      setFirstModal(false);
      setSecondModal(false);
      setThirdModal(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClose); //외부 클릭시 이벤트 등록 및 handleClose함수 실행
    return () => {
      window.removeEventListener("click", handleClose); //외부 클릭시 이벤트 제거 및 handleClose함수 실행
    };
  }, [isFirstModal, isSecondModal, isThirdModal]);

  console.log("isToggleMenu =", isToggleMenu);
  console.log("isFirstModal =", isFirstModal);
  console.log("isSecondModal =", isSecondModal);
  console.log("isThirdModal =", isThirdModal);

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo src={NurimLogo} alt="Nurim Logo" />
        <Menu>
          <MenuItem onClick={openFirstModal}>누림이란?</MenuItem>
          <MenuItem onClick={openSecondModal}>앞으로의 누림</MenuItem>
          <MenuItem onClick={openThirdModal}>이용약관</MenuItem>
        </Menu>
        <MobileMenuBar onClick={toggleMenu}>
          {isToggleMenu? <img src={close}></img> : <img src={open}></img>}
        </MobileMenuBar>
        <MobileMenuContainer $isOpen={isToggleMenu}>
          <MobileMenu>
            <MobileMenuItem onClick={openFirstModal}>누림이란?</MobileMenuItem>
            <MobileMenuItem onClick={openSecondModal}>앞으로의 누림</MobileMenuItem>
            <MobileMenuItem onClick={openThirdModal}>이용약관</MobileMenuItem>
          </MobileMenu>
        </MobileMenuContainer>
      </HeaderContent>

      {isFirstModal && (
        <Modal isModal={closeModal} isFirstModal={isFirstModal} isSecondModal={isSecondModal} isThirdModal={isThirdModal} ref={modal1} />
      )}
      {isSecondModal && (
        <Modal isModal={closeModal} isFirstModal={isFirstModal} isSecondModal={isSecondModal} isThirdModal={isThirdModal} ref={modal2} />
      )}
      {isThirdModal && (
        <Modal isModal={closeModal} isFirstModal={isFirstModal} isSecondModal={isSecondModal} isThirdModal={isThirdModal} ref={modal3} />
      )}
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  background-color: white;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 0 20px;
`;

const HeaderContent = styled.div`
  padding: 20px;
  max-width: 50%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
`;

const Logo = styled.img`
  max-width: 100%;
  height: auto;
`;

const Menu = styled.div`
  display: flex;
  gap: 30px;
  color: black;
  @media (max-width: 875px) {
    display: none;
  }
`;

const MenuItem = styled.div`
  cursor: pointer;
`;

const MobileMenuBar = styled.div`
  display: none;
  border: 2px solid black;
  border-radius: 5px;
  width: 35px;
  height: 25px;
  @media (max-width: 875px) {
    display: flex;
    cursor: pointer;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3px;
  }
`;
const Bar = styled.div`
  width: 25px;
  height: 3px;
  background-color: black;
  border-radius: 5px;
`;

const MobileMenuContainer = styled.div`
  position: fixed;
  top: 0;
  right: ${(props) => (props.$isOpen ? "0" : "-100%")};
  z-index: 9999;
  margin-top: 75px;
  width: 47%;
  height: 30%;
  margin-right: 26.3%;
  @media (min-width: 875px) {
    display: none;
  }
  display: flex;
  justify-content: flex-end;
`;
const MobileMenu = styled.div`
  width: 60%;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15%;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
`;

const MobileMenuItem = styled.div`
  color: black;
  font-size: 10px;
  cursor: pointer;
  height: 15%;
`;
