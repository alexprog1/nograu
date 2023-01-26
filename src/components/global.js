import styled from 'styled-components';

export const Container = styled.div`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  & html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  & body,
  input,
  textarea,
  button {
    font-family: 'Poppins', sans-serif;
  }
  & h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    font-weight: 600;
  }
  & p {
    color: #878282;
  }
  & a {
    text-decoration: none;
  }

  & button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

// scss-docs-start color-variables
// $blue:    #0d6efd !default;
// $indigo:  #6610f2 !default;
// $purple:  #6f42c1 !default;
// $pink:    #d63384 !default;
// $red:     #dc3545 !default;
// $orange:  #fd7e14 !default;
// $yellow:  #ffc107 !default;
// $green:   #198754 !default;
// $teal:    #20c997 !default;
// $cyan:    #0dcaf0 !default;
// scss-docs-end color-variables

// scss-docs-start colors-map
// $colors: (
//   "blue":       $blue,
//   "indigo":     $indigo,
//   "purple":     $purple,
//   "pink":       $pink,
//   "red":        $red,
//   "orange":     $orange,
//   "yellow":     $yellow,
//   "green":      $green,
//   "teal":       $teal,
//   "cyan":       $cyan,
//   "white":      $white,
//   "gray":       $gray-600,
//   "gray-dark":  $gray-800
// ) !default;
// scss-docs-end colors-map

// fusv-disable
// $primary-dark:  #1f1498 !default;
// $primary-base:  #321fdb !default;
// $primary-50:    #988fed !default;
// $primary-25:    #ccc7f6 !default;

// $secondary-dark:  #212233 !default;
// $secondary-base:  #9da5b1 !default;
// $secondary-50:    #9da5b1 !default;
// $secondary-25:    #ced2d8 !default;

// $success-dark:  #1b9e3e !default;
// $success-base:  #2eb85c !default;
// $success-50:    #96dbad !default;
// $success-25:    #cbedd6 !default;

// $info-dark:  #2982cc !default;
// $info-base:  #39f !default;
// $info-50:    #80c6ff !default;
// $info-25:    #c0e6ff !default;

// $warning-dark:  #f6960b !default;
// $warning-base:  #f9b115 !default;
// $warning-50:    #fcd88a !default;
// $warning-25:    #feecc5 !default;

// $danger-dark:  #d93737 !default;
// $danger-base:  #e55353 !default;
// $danger-50:    #f2a9a9 !default;
// $danger-25:    #f9d4d4 !default;
