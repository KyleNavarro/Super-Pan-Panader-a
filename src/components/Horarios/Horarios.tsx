import "./Horarios.css";

const schedule = [
  { day: "Lunes -Viernes", time: "7:00 AM - 7:00 PM" },
  { day: "Sabado", time: "7:00 AM - 7:00 PM" },
  { day: "Domingo", time: "7:00 AM - 7:00 PM" },
];

const Horarios = () => {
  return (
    <div className="hours">
      <div className="hours-cointainer">
        <div className="hours-content">
          <h2>Horario de atención</h2>
          <div className="hours-divider"></div>
          <div className="hours-list">
            {schedule.map((item, index) => (
              <div key={index} className="hours-item">
                <span className="hours-day">{item.day}</span>
                <span className="hours-time">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Horarios;
