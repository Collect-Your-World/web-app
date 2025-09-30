import Link from 'next/link';

type NavLinkProps = {
  path: string;
  label: string;
  isActive: boolean;
  onClick?: () => void;
  variant?: 'desktop' | 'mobile';
  baseClasses?: string;
  activeClasses?: string;
  inactiveClasses?: string;
};

// Shared NavLink component
export function NavLink({
  path,
  label,
  isActive,
  onClick,
  variant = 'desktop',
  baseClasses = '',
  activeClasses = '',
  inactiveClasses = '',
}: NavLinkProps) {
  const baseClassesValue =
    baseClasses ||
    'flex font-semibold items-center rounded-lg transition-all duration-200 text-sm w-fit';

  const activeClassesValue =
    activeClasses ||
    (variant === 'desktop'
      ? 'text-background font-bold px-2 py-2 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white after:animate-pulse'
      : 'text-background font-bold px-1 py-2 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white after:animate-pulse');

  const inactiveClassesValue =
    inactiveClasses ||
    (variant === 'desktop'
      ? 'text-background hover:text-white/60 px-2 py-2 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full'
      : 'text-background hover:text-white/60 px-1 py-2 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full');

  return (
    <Link
      href={path}
      onClick={onClick}
      className={`${baseClassesValue} ${isActive ? activeClassesValue : inactiveClassesValue}`}
      style={{ textAlign: variant === 'mobile' ? 'center' : 'left' }}
    >
      {label}
    </Link>
  );
}
