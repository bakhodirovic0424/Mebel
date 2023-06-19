import styled from "styled-components";

export const Container = styled.div`
    max-width: 1240px;
    margin: 0 auto;
    padding: 0 20px;
`

export const LoadContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60vh;
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const Title = styled.h3`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Button = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;

/* CSS */
.button-86 {
  all: unset;
  width: 100px;
  height: 30px;
  font-size: 16px;
  background: transparent;
  border: none;
  position: relative;
  color: #f0f0f0;
  cursor: pointer;
  z-index: 1;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-86::after,
.button-86::before {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: -99999;
  transition: all .4s;
}

.button-86::before {
  transform: translate(0%, 0%);
  width: 100%;
  height: 100%;
  background: rgb(36, 84, 98);
  border-radius: 10px;
}

.button-86::after {
  transform: translate(10px, 10px);
  width: 35px;
  height: 35px;
  background: #ffffff15;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 50px;
}

.button-86:hover::before {
  transform: translate(5%, 20%);
  width: 110%;
  height: 110%;
}

.button-86:hover::after {
  border-radius: 10px;
  transform: translate(0, 0);
  width: 100%;
  height: 100%;
}

.button-86:active::after {
  transition: 0s;
  transform: translate(0, 5%);
}
`