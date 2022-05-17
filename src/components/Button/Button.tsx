import classNames from "classnames"
import { ButtonHTMLAttributes, DetailedHTMLProps, MouseEventHandler, ReactChild } from "react"

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

export function Button({ children, className, onClick, buttonProps = {} }: Props) {
  return (
    <button
      {...buttonProps}
      onClick={onClick}
      className={classNames(
        "py-[var(--size-spacing-small)] px-[var(--size-spacing-medium)] bg-[color:var(--color-base-gray-medium)] text-[color:var(--color-base-gray-dark)] hover:bg-[color:var(--color-base-gray-light)]",
        "rounded focus:ring transition duration-200 hover:shadow-lg",
        className,
      )}
    >
      {children}
    </button>
  )
}
