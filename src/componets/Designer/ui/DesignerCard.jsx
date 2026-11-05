import "../designer.css";


export default function DesignerCard({img, h3, p}) {
  return (
    <div>

     <li>
              <a className="dc__card" href="#accessories">
                <div className="dc__media dc__media--green">
                  <img
                    className="dc__img"
                    src={img}
                    alt="Модель с соломенной шляпой и сумкой"
                    loading="lazy"
                  />
                </div>
                <h3 className="dc__card-title">{h3}</h3>
                <p className="dc__card-text">{p}</p>
              </a>
            </li>

    </div>
  )
}
