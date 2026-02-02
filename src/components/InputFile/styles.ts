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
    width: 15rem;
    height: 15rem;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.colors.white};
    outline: 3px solid ${({ theme }) => theme.colors.gold};
    margin: 1.5rem;
    margin-bottom: 0;
  }

  >div{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 0.5rem;
  }

  >div > p{
    padding: 0 .2rem;
    font-size: 1.6rem;
    font-weight: 500;
  }

  .buttonPreview {
    width: fit-content;
    cursor: pointer;
    text-align: center;

    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.greySico};
    font-size: 1.6rem;
    padding: 0.8rem 1.3rem;
    border-radius: 0.5rem;
    outline: none;
    border: none;
    transition: .2s;

    &:hover {
      background-color: ${({ theme }) => theme.colors.darkJetBlack};
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    .buttonPreview {
      font-size: 1.4rem;
      text-align: center;
    }
  }
`;
