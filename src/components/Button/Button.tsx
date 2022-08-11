import classNames from "classnames"
import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  MouseEventHandler,
  ReactChild,
} from "react"

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

interface Props {
  buttonProps?: ButtonProps
  children?: ReactChild
  className?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export function Button({
  children,
  className,
  onClick,
  buttonProps = {},
}: Props) {
  return (
    <button
      {...buttonProps}
      onClick={onClick}
      className={classNames(
        "py-[var(--space-100)] px-[var(--space-500)] bg-[color:var(--global-color-gray-900)] text-[color:var(--global-color-neutrals-white)] hover:bg-[color:var(--global-color-gray-700)]",
        "rounded focus:ring transition duration-200 hover:shadow-lg",
        className,
      )}
    >
      {children}
    </button>
  )
}
