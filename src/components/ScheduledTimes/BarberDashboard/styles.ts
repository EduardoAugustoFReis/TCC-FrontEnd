import styled from "styled-components";

export const BarberDashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 1.5rem;

  .appointment-card {
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 12px;
    padding: 1rem 1.2rem;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);

    h4 {
      font-size: 1.8rem;
      margin-bottom: 0.5rem;
      color: #333;
    }

    p {
      margin: 0.3rem 0;
      color: #555;
      font-size: 1.4rem;

      strong {
        color: #222;
      }
    }

    .status {
      font-weight: bold;
      padding: 0.2rem 0.6rem;
      border-radius: 6px;
      font-size: 1.4rem;
      display: inline-block;

      &.pending {
        background: #fff3cd;
        color: #ebc908ff;
      }
      &.confirmed {
        background: #d4edda;
        color: #2aa847ff;
      }
      &.canceled {
        background: #f8d7da;
        color: #9a1d2aff;
      }
    }

    .buttons {
      display: flex;
      align-items: center;
      gap: 1rem;

      button {
        padding: 0.8rem;
        border-radius: 0.8rem;
        border: none;
        background: none;
      }

      .confirm {
        background: #d4edda;
        color: #2aa847ff;
        
        &:hover {
          transform: scale(1.1);
        }
      }

      .cancel {
        background: #f8d7da;
        color: #9a1d2aff;

        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }
`;
