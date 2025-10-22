import styled from "styled-components";

export const ClientDashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 1.5rem;

  .appointment-card {
    background: ${({ theme }) => theme.colors.white};
    border: 1px solid #ddd;
    border-radius: 12px;
    padding: 1rem 1.2rem;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);

    h4 {
      font-size: 1.8rem;
      margin-bottom: 0.5rem;
      color: ${({ theme }) => theme.colorsAppointment.greyAppointmentCard};
    }

    p {
      margin: 0.3rem 0;
      color: ${({ theme }) => theme.colorsAppointment.greyAppointmentCard};

      font-size: 1.4rem;

      strong {
        color: ${({ theme }) => theme.colorsAppointment.strongAppointmentCard};
      }
    }

    .status {
      font-weight: bold;
      padding: 0.2rem 0.6rem;
      border-radius: 6px;
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
      border-radius: 0.8rem;
      background: ${({ theme }) => theme.colorsAppointment.cancelAppointmentButton};
      color: ${({ theme }) => theme.colors.white};

      border: none;

      &:hover {
        background: ${({ theme }) => theme.colorsAppointment.cancelAppointmentButtonHover};
      }
    }
  }
`;
