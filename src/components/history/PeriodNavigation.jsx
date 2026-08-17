import "./history.css";

export default function PeriodNavigation({
  periods,
  selectedId,
  onSelect,
}) {
  return (
    <div className="period-navigation">

      {periods.map((period) => (
        <button
          type="button"
          key={period.id}
          onClick={() =>
            onSelect(period.id)
          }
          className={
            period.id === selectedId
              ? "period-nav-button period-nav-button--active"
              : "period-nav-button"
          }
        >
          {period.label}
        </button>
      ))}

    </div>
  );
}