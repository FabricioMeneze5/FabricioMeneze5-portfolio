import styled from 'styled-components';

export const AboutContainer = styled.div`
  display: inline-block;
  height: 100%;
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
`;

export const HeaderAbout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #cdcdcd;
  width: 100%;
  height: 32px;
  padding: 0 8px;

  img {
    height: 20px;
    margin-right: 8px;
  }

  div {
    display: flex;
  }

  .closeMenu {
    display: flex;
    height: 100%;

    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      margin-left: 4px;
      text-align: center;
      font-weight: bolder;
    }
  }
`;

export const ContentAbout = styled.div`
  background-color: black;
  color: #fff;
  height: 100%;
  padding: 2px 8px;
  border: 2px solid #cdcdcd;
  font-weight: lighter;

  p:nth-child(1) {
    display: block;
    margin-bottom: 32px;
    padding: 0;

    small {
      display: block;
      font-weight: lighter;
    }
  }

  P {
    display: block;
    margin-bottom: 16px;
    padding: 0 8px;
  }
  > b {
    display: block;
  }
`;
