import { Link } from "react-router-dom";
import "./ui.css";

/*
|--------------------------------------------------------------------------
| Container
|--------------------------------------------------------------------------
*/

export function Container({
  children,
  narrow = false,
  className = "",
}) {
  return (
    <div
      className={`ui-container ${
        narrow ? "ui-container--narrow" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}

/*
|--------------------------------------------------------------------------
| Section
|--------------------------------------------------------------------------
*/

export function Section({
  children,
  className = "",
  variant = "default",
  id,
}) {
  return (
    <section
      id={id}
      className={`ui-section ui-section--${variant} ${className}`}
    >
      {children}
    </section>
  );
}

/*
|--------------------------------------------------------------------------
| Section heading
|--------------------------------------------------------------------------
*/

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}) {
  return (
    <div
      className={`ui-section-header ui-section-header--${align} ${className}`}
    >
      {eyebrow && <span className="ui-eyebrow">{eyebrow}</span>}

      <h2>{title}</h2>

      {description && (
        <p className="ui-section-description">{description}</p>
      )}
    </div>
  );
}

/*
|--------------------------------------------------------------------------
| Button
|--------------------------------------------------------------------------
*/

export function Button({
  children,
  to,
  href,
  variant = "primary",
  size = "medium",
  className = "",
  ...props
}) {
  const classes = `
    ui-button
    ui-button--${variant}
    ui-button--${size}
    ${className}
  `;

  if (to) {
  return (
    <Link
      to={to}
      className={classes}
      {...props}
    >
      {children}
    </Link>
  );
}

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

/*
|--------------------------------------------------------------------------
| Card
|--------------------------------------------------------------------------
*/

export function Card({
  children,
  className = "",
  hover = false,
}) {
  return (
    <div
      className={`ui-card ${hover ? "ui-card--hover" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

/*
|--------------------------------------------------------------------------
| Badge
|--------------------------------------------------------------------------
*/

export function Badge({
  children,
  variant = "primary",
}) {
  return (
    <span className={`ui-badge ui-badge--${variant}`}>
      {children}
    </span>
  );
}

/*
|--------------------------------------------------------------------------
| Grid
|--------------------------------------------------------------------------
*/

export function Grid({
  children,
  columns = 3,
  className = "",
}) {
  return (
    <div
      className={`ui-grid ui-grid--${columns} ${className}`}
    >
      {children}
    </div>
  );
}

/*
|--------------------------------------------------------------------------
| Divider
|--------------------------------------------------------------------------
*/

export function Divider() {
  return <div className="ui-divider" />;
}