export default function IconEyeOff({ width = 24, height = 24, ...props }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 6C6.65843 6 3.64603 9.49377 2.51847 11.1492C2.16409 11.6695 2.16409 12.3305 2.51847 12.8508C3.64603 14.5062 6.65843 18 12 18C17.3416 18 20.354 14.5062 21.4815 12.8508C21.8359 12.3305 21.8359 11.6695 21.4815 11.1492C20.354 9.49376 17.3416 6 12 6Z"
        stroke="#383838"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="3" stroke="#383838" strokeWidth="2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.29289 4.29289C4.68342 3.90237 5.31658 3.90237 5.70711 4.29289L19.7071 18.2929C20.0976 18.6834 20.0976 19.3166 19.7071 19.7071C19.3166 20.0976 18.6834 20.0976 18.2929 19.7071L4.29289 5.70711C3.90237 5.31658 3.90237 4.68342 4.29289 4.29289Z"
        fill="#FBFBFB"
        stroke="#FBFBFB"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 5L19 19"
        stroke="#383838"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
