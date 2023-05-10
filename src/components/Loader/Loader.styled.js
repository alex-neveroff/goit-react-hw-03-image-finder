import styled from '@emotion/styled';

export const Spinner = styled.div`
  position: absolute;
  top: 30%;
  left: 40%;
  width: 150px;
  height: 150px;
  border: 5px solid rgba(0, 0, 0, 0.1);
  border-top-color: #3498db;
  border-radius: 50%;
  animation: spin 1s ease-in-out infinite;
  z-index: 10;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
