import { ComponentPropsWithoutRef, ReactNode } from "react";

type InputProps = {
  label?: string;
  id?: string;
  radius?: "Rounded" | "Default";
  icon?: ReactNode;
  iconPosition?: "Left" | "Right";
} & ComponentPropsWithoutRef<"input">;

type InputWithLabel = { id: string; label: string } & InputProps;

function hasLabel(props: InputProps | InputWithLabel): props is InputWithLabel {
  return "id" in props;
}

export default function Input(props: InputProps) {
  if (hasLabel(props)) {
    const { id, label, radius, icon, iconPosition, ...otherProps } = props;

    return (
      <div className="control">
        <label htmlFor={id}>{label}</label>
        <div className="relative-pos">
          <input
            {...otherProps}
            id={id}
            className={`${radius === "Rounded" ? "rounded" : ""} ${
              iconPosition === "Left" ? "left-40" : "right-40"
            }`}
          />
          <span className="center-y">{icon}</span>
        </div>
      </div>
    );
  }

  const { radius, icon, iconPosition, ...otherProps } = props;
  return (
    <div className="control relative-pos">
      <input
        {...otherProps}
        className={`${radius === "Rounded" ? "rounded" : ""}  ${
          iconPosition === "Left" ? "left-40" : "right-24"
        }`}
      />
      <span
        className={`center-y ${
          iconPosition === "Left" ? "left-24" : "right-24"
        }`}
      >
        {icon}
      </span>
    </div>
  );
}
