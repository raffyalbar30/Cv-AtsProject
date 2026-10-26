const variants = {
  primary: "bg-[#4F46E5] text-white hover:bg-[#3730A3]",
  secondary:
    "border border-[#D5D9E6] bg-white text-[#0F172A] hover:bg-[#EEF2FF] hover:text-[#3730A3]",
  light: "bg-white text-[#1E1B4B] hover:bg-[#EEF2FF]",
};

const sizes = {
  sm: "rounded-xl px-[18px] py-2.5 text-[15px]",
  lg: "rounded-[14px] px-[26px] py-4 text-base",
};

export default function Button({
  href,
  variant = "primary",
  size = "lg",
  icon: Icon,
  className = "",
  children,
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2.5 font-bold transition-colors ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {children}
      {Icon && <Icon size={18} strokeWidth={2.4} aria-hidden="true" />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {content}
    </button>
  );
}