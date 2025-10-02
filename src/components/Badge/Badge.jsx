import "./Badge.css";

export default function Badge({ children, color, variant }) {
  const classNames = ["badge"];

  if (color) {
    classNames.push(color);
  }

  if (variant) {
    classNames.push(variant);
  }

  return <span className={classNames.join(" ")}>{children}</span>;
}
