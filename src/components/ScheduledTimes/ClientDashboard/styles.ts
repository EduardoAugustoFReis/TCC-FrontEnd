import styled from "styled-components";

export const ClientDashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: .5rem 1.5rem;

  /* .appointment-card:last-child {
    border: none;
  } */

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
      padding: 0.2rem 0.6rem;
      border-radius: .5rem;
      font-size: 1.4rem;
      display: inline-block;

      &.pending {
        background: ${({ theme }) => theme.colorsAppointment.pendingBackground};
        color: ${({ theme }) => theme.colorsAppointment.pendingColor};
      }
      &.confirmed {
        background: ${({ theme }) => theme.colorsAppointment.confirmedBackground};
        color: ${({ theme }) => theme.colorsAppointment.confirmedColor};
      }
      &.canceled {
        background: ${({ theme }) => theme.colorsAppointment.canceledBackground};
        color: ${({ theme }) => theme.colorsAppointment.canceledColor};
      }
    }

    button {
      margin-top: 0.5rem;
      padding: 0.8rem;
      border-radius: 0.5rem;
      background: ${({ theme }) => theme.colorsAppointment.cancelAppointmentButton};
      color: ${({ theme }) => theme.colors.white};
      font-weight: bold;

      border: none;
      transition: .1s ease;

      &:hover {
        background: ${({ theme }) => theme.colorsAppointment.cancelAppointmentButtonHover};
        /* transform: scale(1.05); */
      }
    }
  }
`;
