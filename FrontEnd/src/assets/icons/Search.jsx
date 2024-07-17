import PropTypes from 'prop-types';

export function Search({ size=12 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 48 48"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
        d="M42 42l-8.7-8.7M38 22c0 8.837-7.163 16-16 16S6 30.837 6 22 13.163 6 22 6s16 7.163 16 16z"
      ></path>
    </svg>
  );
}

Search.propTypes = {
  size: PropTypes.number,
};
