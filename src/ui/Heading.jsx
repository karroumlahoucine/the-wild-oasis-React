import styled, { css } from "styled-components";

// background-color: var(--color-brand-600);
// &:hover {
//   background-color: var(--color-brand-700);
// }

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}
  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 500;
    `}

  line-height:1.4;
`;

export default Heading;