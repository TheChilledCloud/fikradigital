import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import type { ReactNode } from 'react';

interface FikraButtonProps {
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  variant?: 'primary' | 'dark' | 'ghost' | 'ghost-dark';
  className?: string;
  arrow?: boolean;
  disabled?: boolean;
}

const VARIANT_CLS: Record<string, string> = {
  primary: 'btn-fikra btn-fikra-primary',
  dark: 'btn-fikra btn-fikra-dark',
  ghost: 'btn-fikra btn-fikra-ghost',
  'ghost-dark': 'btn-fikra btn-fikra-ghost-on-dark',
};

/**
 * The Fikra button family: magnetic hover, gold sweep fill and a
 * corner-bound arrow. Used everywhere for a consistent feel.
 */
export function FikraButton({
  children,
  to,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
  arrow = false,
  disabled = false,
}: FikraButtonProps) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 260, damping: 18 });
  const sy = useSpring(my, { stiffness: 260, damping: 18 });

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left - r.width / 2) * 0.22);
    my.set((e.clientY - r.top - r.height / 2) * 0.32);
  };
  const reset = () => {
    mx.set(0);
    my.set(0);
  };

  const cls = `${VARIANT_CLS[variant]} ${className}`;
  const inner = (
    <>
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
        {arrow && <ArrowUpRight size={16} className="btn-arrow rtl:-scale-x-100" />}
      </span>
    </>
  );

  const motionStyle = { x: sx, y: sy };

  if (to) {
    return (
      <motion.span style={motionStyle} onMouseMove={onMove} onMouseLeave={reset} onClick={onClick} className="inline-block">
        <Link to={to} className={cls}>
          {inner}
        </Link>
      </motion.span>
    );
  }
  if (href) {
    return (
      <motion.span style={motionStyle} onMouseMove={onMove} onMouseLeave={reset} onClick={onClick} className="inline-block">
        <a href={href} className={cls} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
          {inner}
        </a>
      </motion.span>
    );
  }
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={motionStyle}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className={cls}
    >
      {inner}
    </motion.button>
  );
}
