export const Arrow = () => {
  return (
    <svg
      className="h-4 w-4 text-gray-500"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      {' '}
      <path stroke="none" d="M0 0h24v24H0z" />{' '}
      <line x1="5" y1="12" x2="19" y2="12" />{' '}
      <line x1="13" y1="18" x2="19" y2="12" />{' '}
      <line x1="13" y1="6" x2="19" y2="12" />
    </svg>
  );
};
