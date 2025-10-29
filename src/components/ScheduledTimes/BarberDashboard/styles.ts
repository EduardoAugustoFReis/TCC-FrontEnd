import styled from "styled-components";

export const BarberDashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: .5rem 1.5rem;

  .appointment-card {
    background-color: ${({ theme }) => theme.colors.jetBlack};
    border: 2px solid ${({ theme }) => theme.colors.greySico};
    /* border-bottom: 2px solid ${({ theme }) => theme.colors.whitePosca}; */
    /* border-radius: 12px; */
    padding: 1.8rem 2rem;
    box-shadow: -5px 2px 10px 8px rgba(0, 0, 0, 0.24);

    h4 {
      font-size: 1.8rem;
      margin-bottom: 0.5rem;
      color: ${({ theme }) => theme.colors.whitePosca};
    }

    p {
      margin: 0.4rem 0;
      color: ${({ theme }) => theme.colors.whitePosca};

      font-size: 1.5rem;

      strong {
        color: ${({ theme }) => theme.colors.whitePosca};
      }
    }

    .status {
      font-weight: bold;
      margin-left: .5rem;
      padding: 0.2rem 0.6rem;
      border-radius: .5rem;
      font-size: 1.4rem;
      display: inline-block;

      &.pending {
        background: #fff3cd;
        color: #b8a300ff;
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
      margin-top: 1rem;
      align-items: center;
      gap: 1rem;

      button {
        padding: 1.2rem;
        border-radius: 0.5rem;
        border: none;
        background: none;
        transition: .2s ease;
        font-weight: bold;
      }

      .confirm {
        color: #ffffffff;
        background: #2aa847ff;
        
        &:hover {
          background: ${({ theme }) => theme.colorsAppointment.confirmedColorHover};
        }
      }

      .cancel {
        background: #c32532ff;
        color: #ffffffff;

        &:hover {
          background: ${({ theme }) => theme.colorsAppointment.cancelAppointmentButtonHover};
        }
      }
    }
  }
`;
