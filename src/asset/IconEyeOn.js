export default function IconEyeOn({ width = 24, height = 24, ...props }) {
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
    </svg>
  );
}
