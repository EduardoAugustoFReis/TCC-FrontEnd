import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

export const InputFilePreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  margin: 1rem 0rem;

  input {
    display: none;
  }

  img {
    max-width: 15rem;
    border-radius: 0.8rem;
  }

  .buttonPreview {
    width: fit-content;
    cursor: pointer;
    text-align: center;

    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.jetBlack};
    font-size: 1.6rem;
    padding: 0.8rem;
    border: 1px solid ${({ theme }) => theme.colors.black};
    border-radius: 0.8rem;

    &:hover {
      color: ${({ theme }) => theme.colors.gold};
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    .buttonPreview {
      font-size: 1.4rem;
      text-align: center;
    }
  }
`;
