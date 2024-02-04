import { ComponentPropsWithoutRef, type ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";

type BaseType = {
  children: ReactNode;
  btn?: "Primary" | "Outlined" | "Error" | "Text" | "Tertiary";
  radius?: "Normal" | "Rounded";
  small?: boolean;
};

type ButtonProps = BaseType &
  ComponentPropsWithoutRef<"button"> & { to?: never };

type ButtonLinkProps = BaseType & LinkProps & { to: string };

function isRouterLink(
  props: ButtonProps | ButtonLinkProps
): props is ButtonLinkProps {
  return "to" in props;
}

export default function Button(props: ButtonProps | ButtonLinkProps) {
  if (isRouterLink(props)) {
    const { children, btn, radius, ...otherProps } = props;

    return (
      <Link
        {...otherProps}
        className={`btn ${
          btn === "Outlined"
            ? "outline-success"
            : btn === "Error"
            ? "danger"
            : btn === "Text"
            ? "text"
            : btn === "Tertiary"
            ? "tertiary"
            : "success"
        } ${radius === "Rounded" ? "rounded" : ""}`}
      >
        {children}
      </Link>
    );
  }

  const { children, small, btn, radius, ...otherProps } = props;

  return (
    <button
      {...otherProps}
      className={`btn ${
        btn === "Outlined"
          ? "outline-success"
          : btn === "Error"
          ? "danger"
          : btn === "Text"
          ? "text"
          : btn === "Tertiary"
          ? "tertiary"
          : "success"
      } ${radius === "Rounded" ? "rounded" : ""} ${small ? "small" : ""}`}
    >
      {children}
    </button>
  );
}
