const SvgArrowDropDown = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={30}
        height={30}
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          fill="#33363F"
          d="M11.18 15.83 6.543 9.203C5.892 8.275 6.556 7 7.689 7h8.622c1.133 0 1.797 1.275 1.147 2.203l-4.639 6.627a1 1 0 0 1-1.638 0"
        />
      </svg>
    </div>
  );
};

export default SvgArrowDropDown;
